import Link from 'next/link';

export default function ThanksPage() {
  return (
    <main style={{ maxWidth: 480, margin: '3rem auto', padding: '0 1rem' }}>
      <h1>Thanks!</h1>
      <p>Your message has been received.</p>
      <Link href="/">Back to form</Link>
    </main>
  );
}
