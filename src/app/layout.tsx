import CreateUser from "@/components/CreateUser";
import "./globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/Toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next-Auth Test",
  description: "Practice to make me better at next-Auth",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("bg-white text-slate-900", inter.className)}>
      <body className="h-screen bg-slate-50">
        {/* <Navbar /> */}
        <div>{children}</div>

        <Toaster />
      </body>
    </html>
  );
}
