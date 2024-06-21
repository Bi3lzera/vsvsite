import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "./components/admin-panel/authProvider";
import App from "./App";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VSV Casa das Portas",
  description: "Loja de Materiais de Construção",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={inter.className}>
        <AuthProvider>
          <App>{children}</App>
        </AuthProvider>

        <Toaster position="bottom-center" reverseOrder={false} />
      </body>
    </html>
  );
}
