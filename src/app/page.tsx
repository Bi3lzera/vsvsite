"use client";

import Image from "next/image";
import { useState } from "react";
import Navbar from "./components/front-end/Navbar";
import Cart from "./components/front-end/Cart";
import Hero from "./components/front-end/hero";
import Feature from "./components/front-end/feature";
import TrendingProducts from "./components/front-end/TrendingProducts";
import Footer from "./components/front-end/Footer";

export default function Home() {
  const [showCart, setShowCart] = useState(false);

  return (
    <main className="bg-white">
      <Navbar setShowCart={setShowCart} />
      {showCart && <Cart setShowCart={setShowCart} />}
      <Hero />
      <Feature />
      <TrendingProducts />
      <Footer />
    </main>
  );
}
