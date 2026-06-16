import type { Metadata } from "next";
import "./globals.css";

const description =
  "Backend Software Engineer focused on Go, microservices, observability, performance optimization, and reliable transactional systems.";

export const metadata: Metadata = {
  title: "Hafidzil Khairi — Backend Software Engineer",
  description,
  openGraph: {
    title: "Hafidzil Khairi — Backend Software Engineer",
    description,
    type: "profile",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
