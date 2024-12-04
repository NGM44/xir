import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/react";
import "@/app/globals.css";
import { cn } from "@/lib/utils";
import { Header } from "./header";
import { GoogleTagManager } from "@next/third-parties/google";
import { headers } from "next/headers";
import { i18n } from "./i18n/settings";



export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}


export const metadata = {
  metadataBase: process.env.VERCEL_URL
    ? new URL(`https://${process.env.VERCEL_URL}`)
    : undefined,
  title: {
    default: "Compare Alternative Investments on TheXIRR Platform",
    template: `XIRR INVESTMENT AI`,
  },
  description:
    "Looking for alternative investments? TheXIRR simplifies the process. Compare top-performing alternatives, understand their risks, and make informed decisions.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport = {
  themeColor: [
    // { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: { lang: string }
}

export default function RootLayout({ children,params }: RootLayoutProps) {
  return (
    <html lang={params.lang} className="dark" suppressHydrationWarning>
      <GoogleTagManager gtmId="GTM-PSNHGK4D" />
      <head>
        <CanonicalTag />
      </head>
      <body
        className={cn(
          "font-sans antialiased",
          GeistSans.variable,
          GeistMono.variable
        )}
      >
        <div className="flex flex-col min-h-screen bg-gray-900">
          <Header />
          <main className="flex flex-col flex-1 bg-muted/50">{children}</main>
        </div>
        <Analytics />
      </body>
    </html>
  );
}

async function CanonicalTag() {
  const headersList = await headers();
  const host = headersList.get("host") || "example.com";
  const path = headersList.get("x-invoke-path") || "";
  const protocol = "https";
  const canonicalUrl = `${protocol}://${host}${path}`;
  return <link rel="canonical" href={canonicalUrl} />;
}
