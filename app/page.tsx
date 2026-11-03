import React from 'react';

export default function Home() {
  const sneakers = [
    { id: 1, name: 'Air Runner Pro Z', price: '$129.99', tag: 'Más Vendido' },
    { id: 2, name: 'Street Boost V2', price: '$149.99', tag: 'Nuevo' },
    { id: 3, name: 'Retro Dunk High', price: '$110.00', tag: 'Oferta' },
    { id: 4, name: 'Urban Trail Max', price: '$135.50', tag: 'Exclusivo' },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans">
      {/* Header / Navbar */}
      <header className="sticky top-0 z-50 bg-gray-900/90 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-black tracking-wider text-blue-500 uppercase">ZAP-RUNNER</span>
          </div>
          
          <div className="flex-1 max-w-md mx-8 hidden sm:block">
            <input
              type="text"
              placeholder="Buscar zapatillas en stock..."
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-full text-sm text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
            />
          </div>

          <div className="flex items-center space-x-6">
            <button className="text-sm font-semibold hover:text-blue-400 transition">Catálogo</button>
            <button className="text-sm font-semibold hover:text-blue-400 transition">Drops</button>
            <button className="relative p-2 text-gray-300 hover:text-blue-400">
              👟 <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">2</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Banner (Zapatillas en Stock) */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-950 to-black py-20 px-4 border-b border-gray-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div>
            <span className="inline-block bg-blue-600/20 text-blue-400 border border-blue-500/30 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
              Stock 2026 Disponibilidad Inmediata
            </span>
            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-4">
              DESATÁ TU <span className="text-blue-500">VELOCIDAD</span>
            </h1>
            <p className="text-gray-400 text-base sm:text-lg mb-8 max-w-lg">
              Explora modelos aleatorios en stock, tecnología de amortiguación avanzada y ofertas exclusivas de la tienda ZapRunner.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-3 rounded-xl shadow-lg shadow-blue-600/30 transition">
                Ver Zapatillas en Stock
              </button>
              <button className="border border-gray-700 hover:border-gray-500 text-gray-300 font-semibold px-6 py-3 rounded-xl transition">
                Explorar Catálogo
              </button>
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="w-72 h-72 bg-blue-500/20 rounded-full blur-3xl absolute -z-10"></div>
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 shadow-2xl text-center w-full max-w-sm">
              <div className="text-6xl mb-4">👟</div>
              <h3 className="text-xl font-extrabold text-white">Air Runner Pro Z</h3>
              <p className="text-blue-400 font-bold text-lg mt-1">$129.99</p>
              <span className="inline-block mt-3 bg-green-500/10 text-green-400 text-xs px-3 py-1 rounded-full border border-green-500/20">
                En Stock Aleatorio
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Grid de Productos */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-extrabold text-white mb-8">Modelos Destacados</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sneakers.map((item) => (
            <div key={item.id} className="bg-gray-900 border border-gray-800 rounded-2xl p-5 hover:border-blue-500/50 transition">
              <div className="bg-gray-950 rounded-xl h-40 flex items-center justify-center text-5xl mb-4">
                👟
              </div>
              <span className="bg-blue-600/20 text-blue-400 text-xs font-bold px-2.5 py-1 rounded-md">
                {item.tag}
              </span>
              <h3 className="font-bold text-white text-lg mt-3 mb-1">{item.name}</h3>
              <p className="text-blue-400 font-extrabold text-xl mb-4">{item.price}</p>
              <button className="w-full bg-gray-800 hover:bg-blue-600 text-white font-semibold py-2 rounded-xl transition">
                Agregar al Carrito
              </button>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-950 border-t border-gray-900 py-8 text-center text-xs text-gray-500">
        <p>© 2026 ZapRunner Store — Valeria Rios Alcantara. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
