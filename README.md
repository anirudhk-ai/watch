# ChronoLux — Haute Horlogerie

> **"Time, Perfected."**  
> Precision, elegance, and timeless design on your wrist.

A modern, premium, and visually stunning e-commerce experience for **ChronoLux**, a luxury Swiss watch brand. Featuring an Apple-grade 30fps sequential image canvas hero, a dedicated architectural details and pricing configurator, and an expansive horological narrative.

---

## ✨ Key Features

### 1. Apple-Style 30FPS Hero Experience
* **240-Frame Interactive Canvas Scrub:** Pinned sticky canvas driven by scroll momentum scrubbing through 240 sequential frames (`Public/Images/Herosection/`).
* **Zero Buttons on Hero:** Strict minimalist aesthetic with floating Apple-style typography reveals (Materials, Dial, Exploded Caliber) and a subtle pulsating gold hairline scroll cue.

### 2. Dedicated Masterpiece Details & Price Section
* **Directly Below Hero:** Seamlessly transitions into the Sovereign Tourbillon flagship showcase.
* **Interactive Exploded Caliber Hotspots:** Clickable inspection points detailing the domed sapphire crystal, 18K gold fluted bezel, tourbillon escapement cage, and 904L jubilee bracelet.
* **Live Bespoke Price Configurator:** Real-time price calculation ($14,850 to $19,500) based on chosen precious metal alloy (Classic Gold, Rose Gold Noir, Platinum 950) and strap architecture (Jubilee, Alligator, Titanium Mesh).
* **Transparent Horological Value:** Breakdown of hand-anglage finishing, COSC chronometer certification, and 5-year manufacture warranty.

### 3. Comprehensive Watch Collection
* **6 Curated Categories:**
  * 👑 Luxury Watches
  * 🏎️ Sports Watches
  * ⚡ Smart Watches
  * 🎩 Classic Watches
  * 👔 Men's Watches
  * 💎 Women's Watches
* **Real-time Filter & Search:** Instant search by name, movement, or material, plus sorting by price and customer ratings.

### 4. Interactive E-Commerce Systems
* **Product Details Modal:** Multi-angle thumbnail gallery, full technical specifications table, verified customer reviews, review submission form, quantity stepper, and "Buy Now" checkout.
* **Slide-Over Vault Cart Drawer:** Add/remove items, quantity adjustments, free armored delivery progress bar, and promotional privilege code support (`ROYAL10` for 10% off).
* **Wishlist Drawer:** Save favorite timepieces with `localStorage` persistence and 1-click transfer to cart.
* **Luxury Multi-Step Checkout:** Armored courier destination selector, payment gateway with **real-time 3D gold credit card preview**, bank wire escrow details, and printable order confirmation receipt.
* **Synthetic Swiss Escapement Audio (Web Audio API):** Authentic 4Hz mechanical tick-tock generator toggled from the top navigation bar.
* **Custom Luxury Cursor:** Smooth trailing gold ring and dot cursor.

---

## 🛠️ Tech Stack

* **Frontend:** HTML5, CSS3, Tailwind CSS (CDN)
* **Animation Engine:** GSAP (GreenSock) 3.12, ScrollTrigger, Studio Freight Lenis Smooth Scroll
* **Icons:** Lucide Icons
* **Audio:** Web Audio API (native synthetic oscillator)
* **Typography:** Cinzel, Playfair Display, Plus Jakarta Sans

---

## 🚀 Getting Started

Simply open `index.html` in any modern web browser or start a local HTTP server:

```bash
# Using Python
python -m http.server 8000

# Using Node (if installed)
npx serve .
```

Then visit:
```
http://localhost:8000
```

---

## 📁 Repository Structure

```
├── index.html              # Main single-page application
├── styles.css              # Custom luxury design system & animations
├── app.js                  # Canvas scrub engine, configurator & cart logic
├── README.md               # Documentation
└── Public/
    └── Images/
        ├── Herosection/    # 240 sequential 30fps frames (ezgif-frame-001.jpg .. 240.jpg)
        └── Collection/     # High-resolution luxury watch photography
```

---

## 📜 License & Copyright

© 2026 ChronoLux Haute Horlogerie S.A. Registered in Geneva, Switzerland. All rights reserved.
