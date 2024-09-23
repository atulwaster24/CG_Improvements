import "./globals.css";
import Layout from "./components/layout";
import { SessionProvider } from "next-auth/react";

export const metadata = {
  title: "Connect Geeta",
  description: "Connect Geeta Home Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Connect Geeta</title>
      </head>
      <body>
          <Layout>{children}</Layout>
      </body>
    </html>
  );
}
