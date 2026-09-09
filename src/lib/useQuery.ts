import { useEffect, useState } from 'react';
import { query } from './sanity';

type State<T> = { data: T | null; loading: boolean; error: boolean };

const pending = <T,>(groq: string): State<T> & { groq: string } => ({
  groq,
  data: null,
  loading: true,
  error: false,
});

/** Runs a GROQ query, aborting if the component unmounts or the query changes. */
export function useQuery<T>(groq: string): State<T> {
  const [state, setState] = useState(() => pending<T>(groq));

  // Navigating between two posts reuses the same component, so reset here rather
  // than in the effect — otherwise the previous post shows until the fetch lands.
  // https://react.dev/learn/you-might-not-need-an-effect#adjusting-state-when-a-prop-changes
  if (state.groq !== groq) setState(pending<T>(groq));

  useEffect(() => {
    const controller = new AbortController();

    query<T>(groq, controller.signal)
      .then((data) => setState({ groq, data, loading: false, error: false }))
      .catch((err) => {
        if (err.name === 'AbortError') return;
        console.error('Sanity query failed:', err);
        setState({ groq, data: null, loading: false, error: true });
      });

    return () => controller.abort();
  }, [groq]);

  return state;
}
