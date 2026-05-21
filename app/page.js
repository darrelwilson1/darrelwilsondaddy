import { submitContact } from './actions';

export default function Home({ searchParams }) {
  const params = searchParams ? Object.fromEntries(Object.entries(searchParams)) : {};
  const errorMessage =
    params.error === 'missing'
      ? 'Please fill in all fields.'
      : params.error === 'db'
      ? 'Something went wrong saving your message. Try again.'
      : null;

  return (
    <main style={{ maxWidth: 480, margin: '3rem auto', padding: '0 1rem' }}>
      <h1>Contact Us</h1>

      {errorMessage && (
        <p style={{ color: '#b91c1c', fontWeight: 600 }}>{errorMessage}</p>
      )}

      <form action={submitContact}>
        <label htmlFor="name" style={labelStyle}>Name</label>
        <input id="name" name="name" type="text" required style={inputStyle} />

        <label htmlFor="email" style={labelStyle}>Email</label>
        <input id="email" name="email" type="email" required style={inputStyle} />

        <label htmlFor="message" style={labelStyle}>Message</label>
        <textarea id="message" name="message" required style={{ ...inputStyle, minHeight: 120 }} />

        <button type="submit" style={buttonStyle}>Send</button>
      </form>
    </main>
  );
}

const labelStyle = { display: 'block', marginTop: '1rem', fontWeight: 600 };
const inputStyle = {
  width: '100%',
  padding: '0.5rem',
  fontSize: '1rem',
  border: '1px solid #ccc',
  borderRadius: 4,
  boxSizing: 'border-box',
};
const buttonStyle = {
  marginTop: '1.25rem',
  padding: '0.6rem 1.2rem',
  fontSize: '1rem',
  background: '#2563eb',
  color: 'white',
  border: 'none',
  borderRadius: 4,
  cursor: 'pointer',
};
