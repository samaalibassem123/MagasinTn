import "./globals.css";

export const metadata = {
  title: "MagasinTn",
  description: "e-commerce website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
