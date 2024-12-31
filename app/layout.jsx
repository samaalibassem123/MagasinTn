import "./globals.css";

export const metadata = {
  title: "MagasinTn",
  description: "e-commerce website",
};
import Header from "@/components/Header";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
