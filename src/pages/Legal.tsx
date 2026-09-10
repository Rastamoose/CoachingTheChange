import PageLayout from '../components/ui/PageLayout';
import Container from '../components/ui/Container';

// ponytail: one stub for all four legal pages. Split into separate files when
// they get real content that differs beyond the heading.
export default function Legal({ title }: { title: string }) {
  return (
    <PageLayout>
      <Container>
        <div className="py-32">
          <h1 className="font-playfair text-4xl md:text-5xl text-gray-900">{title}</h1>
        </div>
      </Container>
    </PageLayout>
  );
}
