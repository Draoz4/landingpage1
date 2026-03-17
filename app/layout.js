export const metadata = {
  title: 'Covexall',
  description: 'The Last Hand Sanitizer Your Facility Will Ever Need',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
