export default function Layout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </head>
      <body>{children}</body>
    </html>
  );
}
