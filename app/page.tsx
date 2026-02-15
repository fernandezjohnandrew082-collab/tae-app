"use client"; 
import React, { useState } from 'react';

const computerParts = [
  { id: 1, name: 'AMD Ryzen 9 7950X', price: 549, category: 'Processors', image: '/image.png' },
  { id: 7, name: 'AMD Ryzen 7 7800X3D', price: 449, category: 'Processors', image: 'https://easypc.com.ph/cdn/shop/files/AMD_RYZEN_7_7800X3D-a_2048x.jpg?v=1696489322' },
  { id: 8, name: 'AMD Ryzen 9 9900X3D', price: 649, category: 'Processors', image: 'https://www.amd.com/content/dam/amd/en/images/products/processors/ryzen/3021650-ryzen-9-9900x3d-product.jpg' },
  { id: 2, name: 'MSI GeForce RTX 5090 SUPRIM', price: 1999, category: 'GPU', image: 'https://asset.msi.com/resize/image/global/product/product_173710004234f04a0f44dd01f025e8bee23592ca90.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png' },
  { id: 3, name: 'MSI GeForce RTX 3060 Ti', price: 429, category: 'GPU', image: 'https://asset.msi.com/resize/image/global/product/product_16104454757940f0dbb993afae043f2c5eb3cb0cc0.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png' },
  { id: 19, name: 'NVIDIA RTX 4070 FE', price: 599, category: 'GPU', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRfHqmDP_o8tIskSxyUCoP3UHzpzAvAamtbw&s' },
  { id: 5, name: 'Aorus 2TB NVMe Gen4 SSD', price: 165, category: 'Storage', image: '/22026.png' },
  { id: 10, name: 'Kingston NV3 NVMe SSD', price: 45, category: 'Storage', image: 'https://media.kingston.com/kingston/product/SNV3S_500GB_pkg-zm-lg.jpg' },
  { id: 20, name: 'Kingston FURY RAM', price: 85, category: 'Storage', image: 'https://down-ph.img.susercontent.com/file/ph-11134201-23030-novafbb2vqov03.webp' },
  { id: 14, name: 'Logitech G Pro X Superlight 2', price: 159, category: 'Mouse', image: 'https://down-ph.img.susercontent.com/file/cn-11134207-820l4-mkc42ykraozre8.webp' },
  { id: 21, name: 'VXE Dragonfly R1 Wireless', price: 42, category: 'Mouse', image: 'https://down-ph.img.susercontent.com/file/ph-11134207-81ztc-mfuv8ekevm6lf0@resize_w450_nl.webp' },
  { id: 22, name: 'Logitech G304 Lightspeed', price: 38, category: 'Mouse', image: 'https://down-ph.img.susercontent.com/file/ph-11134207-7ra0s-mdv5wrd2qb6i56.webp' },
  { id: 16, name: 'Attack Shark K85', price: 89, category: 'Keyboard', image: 'https://down-ph.img.susercontent.com/file/cn-11134207-820l4-mkaun4m6cttyd6.webp' },
  { id: 17, name: 'Aula F75 Mechanical', price: 65, category: 'Keyboard', image: 'https://down-ph.img.susercontent.com/file/cn-11134207-7r98o-lyvvbmfxom0j43.webp' },
  { id: 18, name: 'Zifriend ZA68 Mechanical', price: 45, category: 'Keyboard', image: 'https://down-ph.img.susercontent.com/file/sg-11134201-7ra1l-m58dip90echsb7@resize_w450_nl.webp' }
];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('Processors');
  const [cart, setCart] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState(''); // Initialized as empty string

  const filteredProducts = computerParts.filter(part => 
    part.category === activeCategory && 
    part.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddToCart = (item) => {
    const itemWithId = { ...item, cartId: Date.now() + Math.random() };
    setCart((prev) => [...prev, itemWithId]);
  };

  const handleRemoveFromCart = (cartId) => {
    setCart((prev) => prev.filter(item => item.cartId !== cartId));
  };

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="flex bg-[#f8fafc] min-h-screen font-sans text-slate-900 overflow-hidden">
      
      {/* SIDEBAR */}
      <aside className={`flex-shrink-0 bg-[#0f172a] text-white transition-all duration-300 z-50 flex flex-col shadow-2xl h-screen sticky top-0
        ${isSidebarOpen ? 'w-80' : 'w-0'} overflow-hidden`}>
        
        <div className="p-8 flex flex-col items-center flex-shrink-0">
          <div className="bg-white p-2 rounded-full shadow-lg h-20 w-20 flex items-center justify-center">
            <img src="/logo.png" alt="Logo" className="h-full w-full object-contain rounded-full" />
          </div>
        </div>
        
        <nav className="px-6 space-y-2 mb-4 flex-shrink-0">
          {['Processors', 'GPU', 'Storage', 'Mouse', 'Keyboard'].map(cat => (
            <button 
              key={cat} 
              onClick={() => {
                setActiveCategory(cat);
                setSearchQuery(''); // CLEAR SEARCH KAPAG NAGPALIT NG CATEGORY
              }}
              className={`w-full text-left px-5 py-3 rounded-xl text-[11px] font-black transition-all uppercase tracking-widest
                ${activeCategory === cat ? 'bg-blue-600 text-white' : 'text-slate-500 hover:text-white'}`}
            >
              {cat}
            </button>
          ))}
        </nav>

        {/* YOUR BUILD */}
        <div className="mx-4 mb-4 flex-grow flex flex-col bg-slate-900/50 rounded-[2rem] border border-slate-800 overflow-hidden">
           <div className="p-5 border-b border-slate-800 flex justify-between items-center">
              <h5 className="text-[10px] font-black uppercase tracking-widest text-blue-400">Your Build</h5>
              <span className="text-[10px] bg-slate-800 px-2 py-1 rounded-md text-slate-300">{cart.length} items</span>
           </div>
           
           <div className="flex-grow overflow-y-auto p-4 space-y-3">
              {cart.map((item) => (
                <div key={item.cartId} className="flex items-center gap-3 bg-slate-800/40 p-3 rounded-xl border border-slate-700/50">
                  <img src={item.image} className="w-8 h-8 object-contain bg-white/5 p-1 rounded" alt={item.name} />
                  <div className="flex-grow min-w-0">
                    <p className="text-[10px] font-bold truncate text-slate-200">{item.name}</p>
                    <p className="text-[9px] text-blue-400 font-black">${item.price}</p>
                  </div>
                  <button onClick={() => handleRemoveFromCart(item.cartId)} className="text-slate-500 hover:text-red-500 transition-colors">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                  </button>
                </div>
              ))}
           </div>

           <div className="p-5 bg-slate-900 border-t border-slate-800 rounded-b-[2rem]">
              <p className="text-[9px] text-slate-500 font-black uppercase mb-1 tracking-widest">Total Price</p>
              <p className="text-3xl font-black text-white tracking-tighter">${totalPrice.toLocaleString()}</p>
           </div>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <div className="flex-grow flex flex-col min-w-0 h-screen overflow-y-auto">
        <header className="p-10 pb-6 flex flex-col gap-6 sticky top-0 bg-[#f8fafc]/90 backdrop-blur-md z-40">
          <div className="flex items-center gap-6">
            <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-3 bg-white shadow-sm rounded-2xl border border-slate-100">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
            </button>
            <h1 className="text-5xl font-black text-[#0f172a] tracking-tighter">CORECOMP</h1>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex-grow max-w-2xl relative">
              <input 
                type="text" 
                placeholder={`Search in ${activeCategory}...`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-slate-200 rounded-2xl py-4 px-14 text-sm focus:ring-4 focus:ring-blue-100 outline-none transition-all shadow-sm"
              />
              <svg className="absolute left-5 top-4.5 text-slate-400" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"></circle><path d="M21 21l-4.35-4.35"></path></svg>
            </div>
            <div className="bg-[#0f172a] text-white px-8 py-4 rounded-2xl font-black text-xs shadow-xl flex items-center gap-3">
               🛒 {cart.length} ITEMS
            </div>
          </div>
        </header>

        <main className="p-10 pt-0">
          <div className="mb-8">
             <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase">{activeCategory}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 pb-20">
            {filteredProducts.map((part) => (
              <div key={part.id} className="bg-white rounded-[3rem] p-8 border border-slate-100 flex flex-col group hover:shadow-2xl transition-all duration-300">
                <div className="h-60 mb-8 flex items-center justify-center bg-slate-50 rounded-[2.5rem] p-8 group-hover:bg-white transition-all">
                  <img src={part.image} className="h-full object-contain drop-shadow-2xl group-hover:scale-110 transition-transform duration-500" alt={part.name} />
                </div>
                <h4 className="font-bold text-slate-800 text-lg mb-10 min-h-[3rem] px-2 leading-snug">{part.name}</h4>
                <div className="mt-auto flex justify-between items-center bg-[#f8fafc] p-5 rounded-[2rem] border border-slate-50">
                  <div className="flex flex-col pl-2">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Price</span>
                    <span className="text-2xl font-black text-slate-900 tracking-tighter">${part.price}</span>
                  </div>
                  <button onClick={() => handleAddToCart(part)} className="bg-blue-600 text-white px-6 py-3 rounded-2xl text-[10px] font-black hover:bg-blue-700 transition-all ml-4">
                    ADD TO BUILD
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}