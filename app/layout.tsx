import "../styles/globals.css";

export const metadata = {
  title: "Salman's Portfolio",
  description: "Portfolio app for Salman Ambalam Cheri - A full stack engineer",
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
