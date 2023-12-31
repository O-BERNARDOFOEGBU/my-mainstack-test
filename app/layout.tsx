import "@styles/globals.css";
import { Metadata } from "next";
import App from "@components/App";

export const metadata: Metadata = {
  title: "Mainstack",
  description: "Transaction Monitoring Dashboard",
  icons: "https://mainstack.co/favicon.ico",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <App>{children}</App>;
}
