import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Timothy Brown",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <h1>
            About Me
          </h1>
          <nav>
            <ul>
              <li><a href="https://github.com/tabrownies">My GitHub</a></li>
              <li><a href="/assets/resumes/resume.pdf" target="_blank">Resume</a></li>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
