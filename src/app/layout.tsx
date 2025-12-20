import { ThemeProvider } from "@/components/Theme-provider";
import "./globals.css";

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html
      lang="en"
      suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}>
          <main className="py-8 px-4">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
