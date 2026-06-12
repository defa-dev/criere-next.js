import type { Metadata } from "next";
import "./globals.css";
import "../styles/tokens.css";

export const metadata: Metadata = {
  title: "Projeto Crierê - Educação e Cultura para Crianças",
  description: "ONG dedicada ao apoio pedagógico e atividades culturais para crianças e adolescentes. Venha sonhar com a gente!",
  keywords: "ONG, educação, cultura, crianças, voluntariado, apoio pedagógico",
  authors: [{ name: "Projeto Crierê" }],
  openGraph: {
    title: "Projeto Crierê - Educação e Cultura para Crianças",
    description: "ONG dedicada ao apoio pedagógico e atividades culturais para crianças e adolescentes. Venha sonhar com a gente!",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Inter:wght@400;600&display=swap"
          rel="stylesheet"
        />
        <style>{`
          @font-face {
            font-family: 'Adumu';
            src: url('/fonts/Adumu.ttf') format('truetype');
            font-weight: normal;
            font-style: normal;
            font-display: swap;
          }

          @font-face {
            font-family: 'Adumu Inline';
            src: url('/fonts/Adumu-Inline.ttf') format('truetype');
            font-weight: normal;
            font-style: normal;
            font-display: swap;
          }
        `}</style>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
