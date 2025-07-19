import type { Metadata } from "next";
import { Providers } from './providers'
import "./globals.css";

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
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&family=Open+Sans:wght@400;600;700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
