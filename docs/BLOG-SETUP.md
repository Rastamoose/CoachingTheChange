# Blog setup

The code is done. These steps need a browser login, so they're yours to do once.
After that, publishing is entirely the client's — no developer involved.

## How it works

Posts live in Sanity, not in this repo. The site fetches them at page load, so a
new post is live within seconds of Publish without any rebuild.

Separately, a webhook triggers a rebuild that bakes `og:`/`twitter:` tags into a
static page per post, so shared links show a proper preview card. That takes
~60-90s, but the post itself is already visible to visitors before then.

```
Client hits Publish
  ├─→ post is live for visitors immediately (site reads Sanity directly)
  └─→ webhook → GitHub Actions → rebuild → share previews ready (~90s)
```

## 1. Create the Sanity project

Sign up at [sanity.io](https://www.sanity.io) — **use the client's email address**,
then add yourself as an admin. If it's under your account, you stay the bottleneck
the first time they lose a password.

Create a project. Name it "Coaching The Change", dataset `production`, and make the
dataset **public** (the site reads it without a token).

Copy the project ID from [sanity.io/manage](https://www.sanity.io/manage) into
`sanity.json`, replacing `REPLACE_WITH_PROJECT_ID`.

## 2. Allow the site to read it

In sanity.io/manage → your project → **API → CORS origins**, add:

| Origin | Credentials |
|---|---|
| `https://www.coachingthechange.com` | No |
| `https://coachingthechange.com` | No |
| `http://localhost:5173` | No |

Skip this and the blog will load fine locally but show the error state in
production. It's the most common way this setup breaks.

## 3. Deploy the studio

```bash
cd studio
npm install
npx sanity login
npx sanity deploy
```

This puts the editor at **https://coachingthechange.sanity.studio** — Sanity hosts
it free. Give the client that URL.

Then invite them: sanity.io/manage → Members → Invite, role **Editor**.

## 4. Wire up share previews

Two halves. Skip this and everything still works, but shared links will show the
generic site description instead of the post.

**a. Create a GitHub token.** GitHub → Settings → Developer settings →
Fine-grained tokens → Generate new token.

- Repository access: only `Rastamoose/CoachingTheChange`
- Permissions: **Contents: read** and **Metadata: read**
- Expiry: set the longest allowed

> ⚠️ **This token expires.** When it does, publishing silently stops triggering
> rebuilds — posts still appear for visitors, so nothing looks broken, but new
> posts stop getting share previews. Write the expiry date below and put a
> calendar reminder a week before.
>
> **Token expires: `___________`**

**b. Create the Sanity webhook.** sanity.io/manage → API → Webhooks → Create webhook.

| Field | Value |
|---|---|
| Name | `Rebuild site` |
| URL | `https://api.github.com/repos/Rastamoose/CoachingTheChange/dispatches` |
| Dataset | `production` |
| Trigger on | Create, Update, Delete |
| Filter | `_type == "post"` |
| HTTP method | `POST` |
| HTTP headers | `Authorization: Bearer <your token>`<br>`Accept: application/vnd.github+json` |
| Projection | `{"event_type": "sanity-publish"}` |

The workflow already listens for `repository_dispatch` with type `sanity-publish`.

## 5. Check it

```bash
node scripts/check-blog.mjs
```

Once step 1 is done this hits the live dataset and confirms every post has the
fields the site queries. Run it if the blog ever misbehaves.

## What the client does

1. Go to https://coachingthechange.sanity.studio
2. Log in
3. **Blog Post → Create new**
4. Title, cover image, summary, body
5. **Publish**

Unpublishing hides a post immediately. Drafts stay private until published — the
public API never returns them.

## Adding fields later

Edit `studio/schemas/post.ts`, then `cd studio && npx sanity deploy`. If the site
needs to display the new field, add it to `SUMMARY_FIELDS` in `src/lib/sanity.ts`
too — the site only receives fields the query asks for.

## Deliberately not built

Search, pagination, tags/categories, comments, RSS, author bios, related posts.
Ask when one of them is actually wanted.
