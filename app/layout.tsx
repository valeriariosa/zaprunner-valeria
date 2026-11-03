import React from 'react';
import './globals.css';

export const metadata = {
  title: 'ZapRunner — Valeria',
  description: 'Tienda de zapatillas e-commerce',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
