/* Components */
import { Providers } from "@/lib/providers";

/* Instruments */
import "@/app/styles/globals.css"
import { Nunito as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <Providers>
      <html lang="en">
        <body className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}>
          <main>{props.children}</main>
        </body>
      </html>
    </Providers>
  );
}
