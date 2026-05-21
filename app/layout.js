export const metadata = {
  title: 'Contact Us',
  description: 'Simple Next.js contact form backed by Supabase',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'system-ui, sans-serif', margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
