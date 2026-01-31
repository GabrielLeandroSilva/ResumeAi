import "./globals.css";
import { Navbar } from "./components/Navbar";
import { ThemeProviders } from "./providers/theme-provider";
import ThemeToggle from "./components/ThemeToggle";

export const metadata = {
  title: "Resume Ai",
  description: "Análise inteligente de currículos",
  icons: {
    icon: "/favicon.png",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <ThemeProviders>
          <Navbar />
          <main className="max-w-5xl mx-auto p-6">
            {children}
          </main>
          <ThemeToggle />
        </ThemeProviders>
      </body>
    </html>
  );
}
