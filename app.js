/**
 * ChronoLux Haute Horlogerie Engine
 * Features:
 * - 240-Frame Canvas Scroll Scrub (30fps sequence)
 * - Apple-style ScrollTrigger Text Transitions
 * - Lenis Smooth Momentum Scrolling
 * - Sovereign Tourbillon Interactive Customizer & Hotspot Viewer
 * - Complete Watch Catalog across 6 categories (Luxury, Sports, Smart, Classic, Men's, Women's)
 * - Full E-Commerce Cart & Wishlist Drawers (with LocalStorage)
 * - Dynamic Product Details Modal with Specs, Reviews & Quantity
 * - Multi-Step Luxury Checkout with Interactive Gold Card Preview & Printable Receipt
 * - Web Audio API Synthesized Swiss Escapement Tick-Tock
 * - Custom Cursor & Toast Notifications
 */

const ChronoLuxApp = (() => {
  // --- CATALOG DATA ---
  const WATCHES = [
    {
      id: 1,
      name: "Sovereign Royal Tourbillon",
      category: ["luxury", "mens"],
      price: 14850,
      oldPrice: 17500,
      rating: 4.9,
      reviewsCount: 38,
      image: "Public/Images/Collection/sovereign-masterpiece.jpg",
      explodedImage: "Public/Images/Collection/sovereign-exploded.jpg",
      description: "Our crowning achievement. In-house Caliber CL-920 with twin-balance tourbillon escapement, open-heart dial, and solid 18K gold bezel.",
      badge: "Flagship Masterpiece",
      specs: {
        material: "Aerospace 904L Steel & 18K Solid Gold",
        movement: "Hand-Wound In-House Tourbillon CL-920 (28,800 vph)",
        waterResistance: "100m (10 ATM) Hermetically Sealed",
        caseSize: "41 mm Diameter • 11.8 mm Depth",
        strap: "5-Piece Two-Tone Jubilee Bracelet with Glide-Lock",
        warranty: "2-Year International Atelier Warranty (Extendable to 5)",
        powerReserve: "72 Hours Kinetic Autonomy",
        crystal: "Curved Domed Sapphire with Double AR Coating"
      },
      reviews: [
        { name: "Julian Von Berg", rating: 5, date: "2 weeks ago", comment: "The exploded bridge layout is a masterclass in modern horology. It glides under a bespoke cuff effortlessly." },
        { name: "Marcus Sterling", rating: 5, date: "1 month ago", comment: "Timing precision is within half a second per day. The gold luster in sunlight is unmatched." }
      ]
    },
    {
      id: 2,
      name: "Royal Chronograph Aureus",
      category: ["luxury", "mens", "classic"],
      price: 12400,
      oldPrice: 14000,
      rating: 4.8,
      reviewsCount: 29,
      image: "Public/Images/Collection/royal-chronograph.jpg",
      explodedImage: "Public/Images/Collection/royal-chronograph.jpg",
      description: "A testament to golden opulence. Column-wheel chronograph with tachymeter scale, sapphire exhibition caseback, and 18K yellow gold monobloc case.",
      badge: "Haute Luxury",
      specs: {
        material: "18K Solid Yellow Gold & Polished Titanium",
        movement: "Automatic Column-Wheel Chrono CL-410",
        waterResistance: "100m (10 ATM)",
        caseSize: "42 mm Diameter • 12.5 mm Depth",
        strap: "Hand-Stitched Matte Black Alligator Leather",
        warranty: "2-Year International Warranty",
        powerReserve: "54 Hours",
        crystal: "Box-Domed Sapphire Crystal"
      },
      reviews: [
        { name: "Antoine Lefevre", rating: 5, date: "3 weeks ago", comment: "The column wheel pushers actuate with an unmistakable crisp tactile click. Exceptional craftsmanship." }
      ]
    },
    {
      id: 3,
      name: "Vanguard Deep Diver 300M",
      category: ["sports", "mens"],
      price: 8950,
      oldPrice: 9800,
      rating: 4.9,
      reviewsCount: 45,
      image: "Public/Images/Collection/vanguard-diver.jpg",
      explodedImage: "Public/Images/Collection/vanguard-diver.jpg",
      description: "Conquer the ocean abyss. Unidirectional 120-click ceramic bezel, helium escape valve, and Super-LumiNova Grade X1 blue luminescent hour markers.",
      badge: "Professional Diver",
      specs: {
        material: "Grade 5 Titanium & Matte Ceramic",
        movement: "High-Beat In-House Automatic CL-300",
        waterResistance: "300m (30 ATM) ISO 6425 Certified",
        caseSize: "43 mm Diameter • 13.2 mm Depth",
        strap: "Integrated FKM Vulcanized Rubber with Titanium Clasp",
        warranty: "2-Year International Warranty",
        powerReserve: "68 Hours",
        crystal: "3.5mm Scratch-Resistant Sapphire"
      },
      reviews: [
        { name: "Dr. Ethan Brooks", rating: 5, date: "1 month ago", comment: "Used on three deep decompression dives. Total legibility even in subterranean darkness." }
      ]
    },
    {
      id: 4,
      name: "Apex Connected Hybrid",
      category: ["smart", "mens", "sports"],
      price: 3850,
      oldPrice: 4200,
      rating: 4.7,
      reviewsCount: 52,
      image: "Public/Images/Collection/apex-connected.jpg",
      explodedImage: "Public/Images/Collection/apex-connected.jpg",
      description: "The nexus of mechanical beauty and biometric intelligence. Micro-mechanical hands over a translucent AMOLED display with encrypted biometric sensors.",
      badge: "Smart Horology",
      specs: {
        material: "DLC Coated Aerospace Titanium & Ceramic",
        movement: "Dual-Engine: Swiss Mechanical + Neural Horology SoC",
        waterResistance: "50m (5 ATM)",
        caseSize: "42 mm Diameter • 11.5 mm Depth",
        strap: "Perforated Calfskin & Breathable Elastomer",
        warranty: "2-Year Comprehensive Warranty",
        powerReserve: "14 Days Smart Mode / 60 Days Watch Mode",
        crystal: "Touch-Capacitive Sapphire Crystal"
      },
      reviews: [
        { name: "Carlos Mendez", rating: 5, date: "2 months ago", comment: "Finally, a smartwatch that actually looks like a five-figure luxury heirloom on the wrist." }
      ]
    },
    {
      id: 5,
      name: "Heritage Calatrava Classic",
      category: ["classic", "mens"],
      price: 7200,
      oldPrice: 8100,
      rating: 4.8,
      reviewsCount: 22,
      image: "Public/Images/Collection/heritage-classic.jpg",
      explodedImage: "Public/Images/Collection/heritage-classic.jpg",
      description: "Timeless restraint. Clous de Paris guilloché ivory dial, blued steel Breguet hands, and ultra-thin 7.8mm profil case for black-tie galas.",
      badge: "Dress Classic",
      specs: {
        material: "18K White Gold & Fine 904L Steel",
        movement: "Ultra-Thin Hand-Wound Caliber CL-1884",
        waterResistance: "30m (3 ATM)",
        caseSize: "39 mm Diameter • 7.8 mm Ultra-Slim",
        strap: "Cognac Louisiana Alligator with 18K Buckle",
        warranty: "2-Year International Warranty",
        powerReserve: "60 Hours",
        crystal: "Anti-Reflective Sapphire"
      },
      reviews: [
        { name: "David Sterling", rating: 5, date: "3 weeks ago", comment: "The thinnest, most elegant dress watch I own. Slides under French cuffs with zero friction." }
      ]
    },
    {
      id: 6,
      name: "Celestial Diamond Étoile",
      category: ["womens", "luxury"],
      price: 16500,
      oldPrice: 18900,
      rating: 5.0,
      reviewsCount: 31,
      image: "Public/Images/Collection/celestial-diamond.jpg",
      explodedImage: "Public/Images/Collection/celestial-diamond.jpg",
      description: "A cascade of starlight. 64 brilliant-cut certified Top Wesselton diamonds pavé-set across an 18K rose gold bezel with mother-of-pearl dial.",
      badge: "High Jewelry",
      specs: {
        material: "18K Rose Gold & 64 F-G VVS Diamonds (1.42 ctw)",
        movement: "Swiss Caliber CL-220 Automatic with 22K Gold Rotor",
        waterResistance: "50m (5 ATM)",
        caseSize: "34 mm Diameter • 8.9 mm Depth",
        strap: "18K Rose Gold Mesh or Satin Silk Strap",
        warranty: "2-Year International Warranty",
        powerReserve: "48 Hours",
        crystal: "Scratch-Resistant Sapphire"
      },
      reviews: [
        { name: "Victoria Kensington", rating: 5, date: "1 week ago", comment: "The fire in these diamonds is breathtaking. The mother-of-pearl changes from blush to silver in differing lights." }
      ]
    },
    {
      id: 7,
      name: "Monaco Phantom All-Black",
      category: ["sports", "mens", "luxury"],
      price: 10800,
      oldPrice: 11900,
      rating: 4.9,
      reviewsCount: 19,
      image: "Public/Images/Collection/monaco-phantom.jpg",
      explodedImage: "Public/Images/Collection/monaco-phantom.jpg",
      description: "Stealth precision. Matte micro-blasted black ceramic case, open-worked anthracite dial, and luminous stealth indices for high-velocity racing.",
      badge: "Stealth Ceramic",
      specs: {
        material: "High-Tech Zirconium Oxide Matte Ceramic",
        movement: "Skeletonized Automatic Chronograph CL-700",
        waterResistance: "100m (10 ATM)",
        caseSize: "42.5 mm Diameter • 12.1 mm Depth",
        strap: "Textured Kevlar-Infused Rubber",
        warranty: "2-Year International Warranty",
        powerReserve: "65 Hours",
        crystal: "Smoked Sapphire with Double Anti-Reflective Coating"
      },
      reviews: [
        { name: "Henrik Lindqvist", rating: 5, date: "2 months ago", comment: "Completely scratch-proof ceramic. Has the poise and aggression of an exotic supercar." }
      ]
    },
    {
      id: 8,
      name: "Eternity Petite Diamond Rose",
      category: ["womens", "classic"],
      price: 9200,
      oldPrice: 10400,
      rating: 4.8,
      reviewsCount: 26,
      image: "Public/Images/Collection/eternity-gold.jpg",
      explodedImage: "Public/Images/Collection/eternity-gold.jpg",
      description: "Epitome of feminine grace. Polished 18K rose gold fluted case, diamond hour markers, and an iridescent guilloché sunburst dial.",
      badge: "Elegance",
      specs: {
        material: "18K Rose Gold & 904L Steel",
        movement: "In-House Swiss Automatic Caliber CL-150",
        waterResistance: "50m (5 ATM)",
        caseSize: "31 mm Diameter • 8.4 mm Depth",
        strap: "Two-Tone Rose Gold 5-Row President Bracelet",
        warranty: "2-Year International Warranty",
        powerReserve: "45 Hours",
        crystal: "Anti-Scratch Sapphire"
      },
      reviews: [
        { name: "Claire Dupont", rating: 5, date: "1 month ago", comment: "Comfortable, understated, yet radiates unmissable quality. The bracelet is like liquid silk." }
      ]
    },
    {
      id: 9,
      name: "Zenith Skeleton Tourbillon",
      category: ["luxury", "mens"],
      price: 15900,
      oldPrice: 18000,
      rating: 4.9,
      reviewsCount: 14,
      image: "Public/Images/Collection/zenith-skeleton.jpg",
      explodedImage: "Public/Images/Collection/zenith-skeleton.jpg",
      description: "Horological architecture laid bare. Fully skeletonized bridges with hand-chamfered anglage, flying tourbillon at 6 o'clock, and sapphire back.",
      badge: "Bespoke Skeleton",
      specs: {
        material: "Grade 5 Titanium & 18K Solid White Gold",
        movement: "Skeletonized Flying Tourbillon CL-980 (3Hz)",
        waterResistance: "50m (5 ATM)",
        caseSize: "41.5 mm Diameter • 10.9 mm Depth",
        strap: "Hand-Stitched Matte Grey Alligator Leather",
        warranty: "2-Year International Warranty",
        powerReserve: "72 Hours",
        crystal: "Box Sapphire Glass"
      },
      reviews: [
        { name: "Baron Walter De Vries", rating: 5, date: "3 weeks ago", comment: "You can watch every tooth of the gear train engaging. A kinetic monument on the wrist." }
      ]
    }
  ];

  // --- STATE MANAGEMENT ---
  const state = {
    cart: JSON.parse(localStorage.getItem('chronolux_cart') || '[]'),
    wishlist: JSON.parse(localStorage.getItem('chronolux_wishlist') || '[]'),
    activeCategory: 'all',
    searchQuery: '',
    sortOption: 'featured',
    currentDetailWatch: null,
    detailQuantity: 1,
    audioActive: false,
    audioContext: null,
    audioInterval: null,
    promoDiscount: 0,
    sovereignConfig: {
      finishName: "18K Yellow Gold & 904L Steel",
      finishAdd: 0,
      strapName: "Two-Tone Jubilee",
      strapAdd: 0,
      basePrice: 14850
    }
  };

  // --- HERO CANVAS 240 FRAMES ENGINE ---
  const TOTAL_FRAMES = 240;
  const frameImages = [];
  let loadedFramesCount = 0;
  let canvas, ctx;
  let currentRenderFrame = 1;

  function initHeroCanvas() {
    canvas = document.getElementById('hero-canvas');
    if (!canvas) return;
    ctx = canvas.getContext('2d', { alpha: false });

    // Handle high DPI scaling
    function resizeCanvas() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
      renderFrame(currentRenderFrame);
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Start preloading frames
    preloadFrames();
  }

  function getFrameSrc(index) {
    const padded = String(index).padStart(3, '0');
    return `Public/Images/Herosection/ezgif-frame-${padded}.jpg`;
  }

  function preloadFrames() {
    const loaderFill = document.getElementById('loader-fill');
    const loaderPct = document.getElementById('loader-pct');
    const preloader = document.getElementById('preloader');

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = getFrameSrc(i);
      img.onload = () => {
        loadedFramesCount++;
        const pct = Math.floor((loadedFramesCount / TOTAL_FRAMES) * 100);
        if (loaderFill) loaderFill.style.width = `${pct}%`;
        if (loaderPct) loaderPct.textContent = `${pct}%`;

        // Render first frame as soon as available
        if (i === 1) {
          renderFrame(1);
        }

        // Once at least 25 frames are loaded, reveal site for instant responsiveness
        if (loadedFramesCount === 25 && preloader) {
          preloader.classList.add('hidden');
          setupScrollTimeline();
        }

        // Fully loaded
        if (loadedFramesCount === TOTAL_FRAMES) {
          if (preloader && !preloader.classList.contains('hidden')) {
            preloader.classList.add('hidden');
            setupScrollTimeline();
          }
        }
      };
      img.onerror = () => {
        loadedFramesCount++;
      };
      frameImages[i] = img;
    }

    // Safety timeout in case of slow local asset network
    setTimeout(() => {
      if (preloader && !preloader.classList.contains('hidden')) {
        preloader.classList.add('hidden');
        setupScrollTimeline();
      }
    }, 2500);
  }

  function renderFrame(frameIndex) {
    if (!ctx || !canvas) return;
    currentRenderFrame = frameIndex;
    
    // Find nearest loaded frame if current frame is not ready yet
    let img = frameImages[frameIndex];
    if (!img || !img.complete || img.naturalWidth === 0) {
      for (let offset = 1; offset < 20; offset++) {
        const prev = frameImages[Math.max(1, frameIndex - offset)];
        if (prev && prev.complete && prev.naturalWidth > 0) {
          img = prev;
          break;
        }
      }
    }

    if (!img || !img.complete || img.naturalWidth === 0) return;

    const cw = canvas.width;
    const ch = canvas.height;
    const iw = img.naturalWidth || 1280;
    const ih = img.naturalHeight || 720;

    // Apple-style smooth cover/contain blend
    const scale = Math.max(cw / iw, ch / ih);
    const nw = iw * scale;
    const nh = ih * scale;
    const nx = (cw - nw) / 2;
    const ny = (ch - nh) / 2;

    ctx.fillStyle = '#060608';
    ctx.fillRect(0, 0, cw, ch);
    ctx.drawImage(img, nx, ny, nw, nh);
  }

  // --- APPLE-STYLE SCROLLTRIGGER TIMELINE FOR CANVAS & TEXT ---
  function setupScrollTimeline() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
      setupNativeScrollTimeline();
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const frameObject = { frame: 1 };
    const p1 = document.getElementById('hero-phase-1');
    const p2 = document.getElementById('hero-phase-2');
    const p3 = document.getElementById('hero-phase-3');
    const p4 = document.getElementById('hero-phase-4');
    const cue = document.getElementById('hero-scroll-cue');

    // Canvas Frame Scrub Timeline
    gsap.to(frameObject, {
      frame: TOTAL_FRAMES,
      snap: 'frame',
      ease: 'none',
      scrollTrigger: {
        trigger: '#hero-section',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.5,
        onUpdate: (self) => {
          const targetFrame = Math.round(frameObject.frame);
          renderFrame(targetFrame);

          const progress = self.progress;

          // Apple Staggered Text Overlays
          // Phase 1 (0% - 20%)
          if (progress < 0.22) {
            p1?.classList.add('active');
            p1?.classList.remove('exit');
            if (cue) cue.style.opacity = '1';
          } else {
            p1?.classList.remove('active');
            p1?.classList.add('exit');
            if (cue) cue.style.opacity = '0';
          }

          // Phase 2 (25% - 48%)
          if (progress >= 0.25 && progress < 0.50) {
            p2?.classList.add('active');
            p2?.classList.remove('exit');
          } else {
            p2?.classList.remove('active');
            if (progress >= 0.50) p2?.classList.add('exit');
          }

          // Phase 3 (52% - 74%)
          if (progress >= 0.52 && progress < 0.76) {
            p3?.classList.add('active');
            p3?.classList.remove('exit');
          } else {
            p3?.classList.remove('active');
            if (progress >= 0.76) p3?.classList.add('exit');
          }

          // Phase 4 (78% - 100%)
          if (progress >= 0.78) {
            p4?.classList.add('active');
            p4?.classList.remove('exit');
          } else {
            p4?.classList.remove('active');
          }
        }
      }
    });

    // Reveal elements on scroll
    ScrollTrigger.batch('.reveal-on-scroll', {
      onEnter: (batch) => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15, duration: 0.9, ease: 'power3.out' }),
      once: true
    });
  }

  function setupNativeScrollTimeline() {
    window.addEventListener('scroll', () => {
      const hero = document.getElementById('hero-section');
      if (!hero) return;
      const rect = hero.getBoundingClientRect();
      const scrollDist = -rect.top;
      const totalDist = hero.offsetHeight - window.innerHeight;
      if (totalDist <= 0) return;

      const progress = Math.min(Math.max(scrollDist / totalDist, 0), 1);
      const targetFrame = Math.min(Math.max(Math.floor(progress * (TOTAL_FRAMES - 1)) + 1, 1), TOTAL_FRAMES);
      renderFrame(targetFrame);

      const p1 = document.getElementById('hero-phase-1');
      const p2 = document.getElementById('hero-phase-2');
      const p3 = document.getElementById('hero-phase-3');
      const p4 = document.getElementById('hero-phase-4');

      if (progress < 0.22) { p1?.classList.add('active'); } else { p1?.classList.remove('active'); }
      if (progress >= 0.25 && progress < 0.50) { p2?.classList.add('active'); } else { p2?.classList.remove('active'); }
      if (progress >= 0.52 && progress < 0.76) { p3?.classList.add('active'); } else { p3?.classList.remove('active'); }
      if (progress >= 0.78) { p4?.classList.add('active'); } else { p4?.classList.remove('active'); }
    });
  }

  // --- LENIS SMOOTH MOMENTUM SCROLL ---
  function initLenis() {
    if (typeof Lenis !== 'undefined') {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1.0
      });

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);

      if (typeof ScrollTrigger !== 'undefined') {
        lenis.on('scroll', ScrollTrigger.update);
      }
    }
  }

  // --- SOVEREIGN TOURBILLON CONFIGURATOR & HOTSPOTS ---
  function initMasterpieceSection() {
    const livePriceEl = document.getElementById('sovereign-live-price');
    const finishBtns = document.querySelectorAll('.finish-btn');
    const strapBtns = document.querySelectorAll('.strap-btn');
    const inspectImg = document.getElementById('masterpiece-inspect-img');
    const inspectViewBtns = document.querySelectorAll('.inspect-view-btn');
    const hotspotBox = document.getElementById('hotspot-info-box');
    const hotspotTitle = document.getElementById('hotspot-title');
    const hotspotDesc = document.getElementById('hotspot-desc');
    const buySovereignBtn = document.getElementById('buy-sovereign-btn');
    const bookViewingBtn = document.getElementById('book-sovereign-viewing');

    function updateSovereignPrice() {
      const total = state.sovereignConfig.basePrice + state.sovereignConfig.finishAdd + state.sovereignConfig.strapAdd;
      if (livePriceEl) {
        livePriceEl.textContent = `$${total.toLocaleString()}`;
        livePriceEl.classList.add('scale-105', 'text-[#F5E298]');
        setTimeout(() => livePriceEl.classList.remove('scale-105', 'text-[#F5E298]'), 300);
      }
    }

    // Finish buttons
    finishBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        finishBtns.forEach(b => {
          b.classList.remove('active', 'border-[#D4AF37]', 'bg-[#D4AF37]/10');
          b.classList.add('border-white/10', 'bg-white/5');
        });
        btn.classList.add('active', 'border-[#D4AF37]', 'bg-[#D4AF37]/10');
        btn.classList.remove('border-white/10', 'bg-white/5');

        state.sovereignConfig.finishAdd = parseInt(btn.dataset.add, 10);
        state.sovereignConfig.finishName = btn.dataset.finish;
        updateSovereignPrice();
        showToast(`Selected Finish: ${btn.dataset.finish}`);
      });
    });

    // Strap buttons
    strapBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        strapBtns.forEach(b => {
          b.classList.remove('active', 'border-[#D4AF37]', 'bg-[#D4AF37]/10');
          b.classList.add('border-white/10', 'bg-white/5');
        });
        btn.classList.add('active', 'border-[#D4AF37]', 'bg-[#D4AF37]/10');
        btn.classList.remove('border-white/10', 'bg-white/5');

        state.sovereignConfig.strapAdd = parseInt(btn.dataset.add, 10);
        state.sovereignConfig.strapName = btn.dataset.strap;
        updateSovereignPrice();
        showToast(`Selected Strap: ${btn.dataset.strap}`);
      });
    });

    // Image switcher tabs
    inspectViewBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        inspectViewBtns.forEach(b => {
          b.classList.remove('active', 'border-[#D4AF37]', 'bg-[#D4AF37]/10', 'text-white');
          b.classList.add('border-white/10', 'bg-white/5', 'text-[#A3A3B3]');
        });
        btn.classList.add('active', 'border-[#D4AF37]', 'bg-[#D4AF37]/10', 'text-white');
        btn.classList.remove('border-white/10', 'bg-white/5', 'text-[#A3A3B3]');
        if (inspectImg) {
          inspectImg.style.opacity = '0';
          setTimeout(() => {
            inspectImg.src = btn.dataset.src;
            inspectImg.style.opacity = '1';
          }, 200);
        }
      });
    });

    // Interactive hotspots
    document.querySelectorAll('.anatomy-hotspot').forEach(spot => {
      spot.addEventListener('click', () => {
        const title = spot.dataset.title;
        const desc = spot.dataset.desc;
        if (hotspotTitle) hotspotTitle.textContent = title;
        if (hotspotDesc) hotspotDesc.textContent = desc;
        if (hotspotBox) {
          hotspotBox.classList.add('border-[#D4AF37]', 'bg-black/80');
          setTimeout(() => hotspotBox.classList.remove('bg-black/80'), 600);
        }
        playTickSound(880, 0.05);
      });
    });

    // Add Sovereign to cart
    if (buySovereignBtn) {
      buySovereignBtn.addEventListener('click', () => {
        const total = state.sovereignConfig.basePrice + state.sovereignConfig.finishAdd + state.sovereignConfig.strapAdd;
        addToCart({
          id: 1,
          name: `Sovereign Tourbillon (${state.sovereignConfig.finishName})`,
          price: total,
          image: "Public/Images/Collection/sovereign-masterpiece.jpg",
          specs: `${state.sovereignConfig.finishName} • ${state.sovereignConfig.strapName}`
        });
        openCartDrawer();
      });
    }

    if (bookViewingBtn) {
      bookViewingBtn.addEventListener('click', () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
  }

  // --- PRODUCT COLLECTION RENDERING & FILTERING ---
  function initCollection() {
    renderProductGrid();

    // Category filter tabs
    const tabs = document.querySelectorAll('.filter-tab');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        state.activeCategory = tab.dataset.category;
        renderProductGrid();
      });
    });

    // Search input
    const searchInput = document.getElementById('watch-search');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        state.searchQuery = e.target.value.toLowerCase().trim();
        renderProductGrid();
      });
    }

    // Sort select
    const sortSelect = document.getElementById('sort-select');
    if (sortSelect) {
      sortSelect.addEventListener('change', (e) => {
        state.sortOption = e.target.value;
        renderProductGrid();
      });
    }

    // Reset button
    const resetBtn = document.getElementById('reset-filters-btn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        state.activeCategory = 'all';
        state.searchQuery = '';
        state.sortOption = 'featured';
        if (searchInput) searchInput.value = '';
        if (sortSelect) sortSelect.value = 'featured';
        tabs.forEach(t => t.classList.toggle('active', t.dataset.category === 'all'));
        renderProductGrid();
      });
    }
  }

  function getFilteredWatches() {
    let list = [...WATCHES];

    // Filter by Category
    if (state.activeCategory !== 'all') {
      list = list.filter(w => w.category.includes(state.activeCategory));
    }

    // Filter by Search Query
    if (state.searchQuery) {
      list = list.filter(w => 
        w.name.toLowerCase().includes(state.searchQuery) ||
        w.description.toLowerCase().includes(state.searchQuery) ||
        w.specs.material.toLowerCase().includes(state.searchQuery) ||
        w.specs.movement.toLowerCase().includes(state.searchQuery)
      );
    }

    // Sort
    if (state.sortOption === 'price-asc') {
      list.sort((a, b) => a.price - b.price);
    } else if (state.sortOption === 'price-desc') {
      list.sort((a, b) => b.price - a.price);
    } else if (state.sortOption === 'rating') {
      list.sort((a, b) => b.rating - a.rating);
    }

    return list;
  }

  function renderProductGrid() {
    const grid = document.getElementById('product-grid');
    const emptyMsg = document.getElementById('no-products-msg');
    if (!grid) return;

    const filtered = getFilteredWatches();

    if (filtered.length === 0) {
      grid.innerHTML = '';
      if (emptyMsg) emptyMsg.classList.remove('hidden');
      return;
    }

    if (emptyMsg) emptyMsg.classList.add('hidden');

    grid.innerHTML = filtered.map(w => {
      const isWishlisted = state.wishlist.some(item => item.id === w.id);
      return `
        <div class="glass-panel p-6 product-card flex flex-col justify-between group relative overflow-hidden" data-id="${w.id}">
          
          <!-- Card Badges & Wishlist Trigger -->
          <div class="flex items-center justify-between mb-4 z-10">
            <span class="text-[10px] tracking-widest uppercase font-semibold px-2.5 py-1 rounded-full bg-[#D4AF37]/10 text-[#F5E298] border border-[#D4AF37]/30">
              ${w.badge}
            </span>
            <button class="wishlist-toggle-btn w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all ${isWishlisted ? 'text-[#D4AF37]' : 'text-[#A3A3B3]'}" onclick="ChronoLuxApp.toggleWishlist(${w.id})">
              <i data-lucide="heart" class="w-4 h-4 ${isWishlisted ? 'fill-[#D4AF37]' : ''}"></i>
            </button>
          </div>

          <!-- Product High-Quality Image -->
          <div class="relative w-full aspect-square rounded-xl overflow-hidden bg-black/40 mb-5 cursor-pointer" onclick="ChronoLuxApp.openProductModal(${w.id})">
            <img 
              src="${w.image}" 
              alt="${w.name}" 
              loading="lazy" 
              class="w-full h-full object-cover img-zoom"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
              <span class="text-xs text-[#F5E298] tracking-wider uppercase font-semibold flex items-center gap-1.5">
                <span>Inspect Caliber</span>
                <i data-lucide="arrow-up-right" class="w-3.5 h-3.5"></i>
              </span>
            </div>
          </div>

          <!-- Product Info -->
          <div class="space-y-2 mb-6">
            <div class="flex items-center justify-between text-xs">
              <div class="flex items-center text-[#D4AF37]">
                <i data-lucide="star" class="w-3.5 h-3.5 fill-[#D4AF37]"></i>
                <span class="ml-1 text-white font-medium">${w.rating}</span>
                <span class="ml-1 text-[#6B6B7B]">(${w.reviewsCount})</span>
              </div>
              <span class="text-[11px] text-[#A3A3B3] font-mono">${w.specs.caseSize.split('•')[0]}</span>
            </div>

            <h3 class="font-serif text-lg font-bold text-white group-hover:text-[#F5E298] transition-colors cursor-pointer" onclick="ChronoLuxApp.openProductModal(${w.id})">
              ${w.name}
            </h3>
            
            <p class="text-xs text-[#A3A3B3] line-clamp-2 leading-relaxed">
              ${w.description}
            </p>

            <div class="flex items-baseline gap-2 pt-2">
              <span class="font-serif text-2xl font-bold text-white">$${w.price.toLocaleString()}</span>
              ${w.oldPrice ? `<span class="text-xs line-through text-[#6B6B7B]">$${w.oldPrice.toLocaleString()}</span>` : ''}
            </div>
          </div>

          <!-- Card Action Buttons: View Details & Add to Cart -->
          <div class="grid grid-cols-2 gap-2.5 pt-2 border-t border-white/5">
            <button class="btn-secondary py-2.5 px-3 text-[11px] w-full" onclick="ChronoLuxApp.openProductModal(${w.id})">
              <span>View Details</span>
            </button>
            <button class="btn-gold py-2.5 px-3 text-[11px] w-full" onclick="ChronoLuxApp.quickAddToCart(${w.id})">
              <i data-lucide="shopping-bag" class="w-3.5 h-3.5"></i>
              <span>Add to Cart</span>
            </button>
          </div>

        </div>
      `;
    }).join('');

    if (window.lucide) lucide.createIcons();
  }

  // --- PRODUCT DETAILS MODAL ---
  function initProductModal() {
    const modal = document.getElementById('product-detail-modal');
    const closeBtn = document.getElementById('close-detail-modal');
    const specsBtn = document.getElementById('tab-specs-btn');
    const reviewsBtn = document.getElementById('tab-reviews-btn');
    const specsContent = document.getElementById('tab-specs-content');
    const reviewsContent = document.getElementById('tab-reviews-content');
    const qtyMinus = document.getElementById('detail-qty-minus');
    const qtyPlus = document.getElementById('detail-qty-plus');
    const qtyVal = document.getElementById('detail-qty-val');
    const addCartBtn = document.getElementById('detail-add-cart-btn');
    const buyNowBtn = document.getElementById('detail-buy-now-btn');
    const writeReviewForm = document.getElementById('write-review-form');

    if (closeBtn) {
      closeBtn.addEventListener('click', () => modal?.classList.remove('active'));
    }
    modal?.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('active');
    });

    // Tab switcher
    specsBtn?.addEventListener('click', () => {
      specsBtn.classList.add('border-[#D4AF37]', 'text-white');
      specsBtn.classList.remove('border-transparent', 'text-[#6B6B7B]');
      reviewsBtn.classList.remove('border-[#D4AF37]', 'text-white');
      reviewsBtn.classList.add('border-transparent', 'text-[#6B6B7B]');
      specsContent?.classList.remove('hidden');
      reviewsContent?.classList.add('hidden');
    });

    reviewsBtn?.addEventListener('click', () => {
      reviewsBtn.classList.add('border-[#D4AF37]', 'text-white');
      reviewsBtn.classList.remove('border-transparent', 'text-[#6B6B7B]');
      specsBtn.classList.remove('border-[#D4AF37]', 'text-white');
      specsBtn.classList.add('border-transparent', 'text-[#6B6B7B]');
      reviewsContent?.classList.remove('hidden');
      specsContent?.classList.add('hidden');
    });

    // Quantity stepper
    qtyMinus?.addEventListener('click', () => {
      if (state.detailQuantity > 1) {
        state.detailQuantity--;
        if (qtyVal) qtyVal.textContent = state.detailQuantity;
      }
    });

    qtyPlus?.addEventListener('click', () => {
      state.detailQuantity++;
      if (qtyVal) qtyVal.textContent = state.detailQuantity;
    });

    // Add to Cart from modal
    addCartBtn?.addEventListener('click', () => {
      if (!state.currentDetailWatch) return;
      addToCart({
        id: state.currentDetailWatch.id,
        name: state.currentDetailWatch.name,
        price: state.currentDetailWatch.price,
        image: state.currentDetailWatch.image,
        specs: state.currentDetailWatch.specs.material,
        quantity: state.detailQuantity
      });
      modal?.classList.remove('active');
      openCartDrawer();
    });

    // Buy Now from modal
    buyNowBtn?.addEventListener('click', () => {
      if (!state.currentDetailWatch) return;
      addToCart({
        id: state.currentDetailWatch.id,
        name: state.currentDetailWatch.name,
        price: state.currentDetailWatch.price,
        image: state.currentDetailWatch.image,
        specs: state.currentDetailWatch.specs.material,
        quantity: state.detailQuantity
      });
      modal?.classList.remove('active');
      openCheckoutModal();
    });

    // Submit review form
    writeReviewForm?.addEventListener('submit', (e) => {
      e.preventDefault();
      const userName = document.getElementById('review-user-name').value;
      const rating = parseInt(document.getElementById('review-star-select').value, 10);
      const comment = document.getElementById('review-comment').value;

      if (state.currentDetailWatch) {
        state.currentDetailWatch.reviews.unshift({
          name: userName,
          rating,
          date: 'Just now',
          comment
        });
        state.currentDetailWatch.reviewsCount++;
        renderDetailReviews();
        writeReviewForm.reset();
        showToast('Thank you! Your assessment has been recorded.');
      }
    });
  }

  function openProductModal(watchId) {
    const watch = WATCHES.find(w => w.id === watchId);
    if (!watch) return;
    state.currentDetailWatch = watch;
    state.detailQuantity = 1;

    const modal = document.getElementById('product-detail-modal');
    const mainImg = document.getElementById('detail-main-img');
    const title = document.getElementById('detail-title');
    const price = document.getElementById('detail-price');
    const desc = document.getElementById('detail-desc');
    const ratingScore = document.getElementById('detail-rating-score');
    const reviewCount = document.getElementById('detail-review-count');
    const qtyVal = document.getElementById('detail-qty-val');
    const categoryBadge = document.getElementById('detail-category-badge');

    if (mainImg) mainImg.src = watch.image;
    if (title) title.textContent = watch.name;
    if (price) price.textContent = `$${watch.price.toLocaleString()}`;
    if (desc) desc.textContent = watch.description;
    if (ratingScore) ratingScore.textContent = watch.rating;
    if (reviewCount) reviewCount.textContent = `(${watch.reviewsCount} reviews)`;
    if (qtyVal) qtyVal.textContent = '1';
    if (categoryBadge) categoryBadge.textContent = watch.badge;

    // Specs
    document.getElementById('spec-material').textContent = watch.specs.material;
    document.getElementById('spec-movement').textContent = watch.specs.movement;
    document.getElementById('spec-water').textContent = watch.specs.waterResistance;
    document.getElementById('spec-casesize').textContent = watch.specs.caseSize;
    document.getElementById('spec-strap').textContent = watch.specs.strap;
    document.getElementById('spec-warranty').textContent = watch.specs.warranty;

    // Gallery Thumbnails
    const thumbGallery = document.getElementById('detail-thumb-gallery');
    if (thumbGallery) {
      const thumbs = [watch.image, watch.explodedImage || watch.image, 'Public/Images/Collection/zenith-skeleton.jpg'];
      thumbGallery.innerHTML = thumbs.map((src, i) => `
        <button class="w-16 h-16 rounded-xl overflow-hidden border ${i === 0 ? 'border-[#D4AF37]' : 'border-white/10'} bg-black/40" onclick="document.getElementById('detail-main-img').src='${src}'; document.querySelectorAll('#detail-thumb-gallery button').forEach(b => b.classList.replace('border-[#D4AF37]', 'border-white/10')); this.classList.replace('border-white/10', 'border-[#D4AF37]');">
          <img src="${src}" class="w-full h-full object-cover">
        </button>
      `).join('');
    }

    renderDetailReviews();

    if (modal) modal.classList.add('active');
    if (window.lucide) lucide.createIcons();
    playTickSound(700, 0.05);
  }

  function renderDetailReviews() {
    const list = document.getElementById('detail-reviews-list');
    if (!list || !state.currentDetailWatch) return;

    list.innerHTML = state.currentDetailWatch.reviews.map(r => `
      <div class="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
        <div class="flex items-center justify-between">
          <span class="text-xs font-semibold text-white">${r.name}</span>
          <span class="text-[10px] text-[#6B6B7B]">${r.date}</span>
        </div>
        <div class="flex text-[#D4AF37] text-[10px]">
          ${Array(r.rating).fill('<i data-lucide="star" class="w-3 h-3 fill-[#D4AF37]"></i>').join('')}
        </div>
        <p class="text-xs text-[#A3A3B3]">${r.comment}</p>
      </div>
    `).join('');
    if (window.lucide) lucide.createIcons();
  }

  // --- SHOPPING CART SYSTEM ---
  function initCart() {
    const openBtn = document.getElementById('open-cart');
    const closeBtn = document.getElementById('close-cart-btn');
    const drawer = document.getElementById('cart-drawer');
    const applyPromoBtn = document.getElementById('apply-promo-btn');
    const promoInput = document.getElementById('promo-input');
    const promoFeedback = document.getElementById('promo-feedback');
    const checkoutBtn = document.getElementById('checkout-btn');

    openBtn?.addEventListener('click', openCartDrawer);
    closeBtn?.addEventListener('click', closeCartDrawer);

    applyPromoBtn?.addEventListener('click', () => {
      const code = promoInput?.value.trim().toUpperCase();
      if (code === 'ROYAL10') {
        state.promoDiscount = 0.10;
        if (promoFeedback) {
          promoFeedback.className = 'text-[11px] text-emerald-400 block';
          promoFeedback.textContent = '✓ Privilege Applied: 10% Haute Horlogerie deduction';
        }
        showToast('Privilege Code ROYAL10 Applied (10% Off)!');
      } else {
        state.promoDiscount = 0;
        if (promoFeedback) {
          promoFeedback.className = 'text-[11px] text-red-400 block';
          promoFeedback.textContent = 'Invalid code. Try "ROYAL10" for VIP privilege.';
        }
      }
      renderCart();
    });

    checkoutBtn?.addEventListener('click', () => {
      if (state.cart.length === 0) {
        showToast('Your vault cart is empty.');
        return;
      }
      closeCartDrawer();
      openCheckoutModal();
    });

    renderCart();
  }

  function openCartDrawer() {
    document.getElementById('cart-drawer')?.classList.add('active');
    document.getElementById('wishlist-drawer')?.classList.remove('active');
  }

  function closeCartDrawer() {
    document.getElementById('cart-drawer')?.classList.remove('active');
  }

  function addToCart(item) {
    const qtyToAdd = item.quantity || 1;
    const existingIndex = state.cart.findIndex(i => i.id === item.id && i.name === item.name);
    if (existingIndex > -1) {
      state.cart[existingIndex].quantity += qtyToAdd;
    } else {
      state.cart.push({
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image,
        specs: item.specs || 'Hand-Finished Caliber',
        quantity: qtyToAdd
      });
    }
    saveCart();
    renderCart();
    showToast(`Added to Vault Cart: ${item.name}`);
    playTickSound(1000, 0.08);
  }

  function quickAddToCart(watchId) {
    const watch = WATCHES.find(w => w.id === watchId);
    if (!watch) return;
    addToCart({
      id: watch.id,
      name: watch.name,
      price: watch.price,
      image: watch.image,
      specs: watch.specs.material,
      quantity: 1
    });
  }

  function changeCartQty(index, delta) {
    if (state.cart[index]) {
      state.cart[index].quantity += delta;
      if (state.cart[index].quantity <= 0) {
        state.cart.splice(index, 1);
      }
      saveCart();
      renderCart();
    }
  }

  function removeCartItem(index) {
    if (state.cart[index]) {
      const removed = state.cart.splice(index, 1);
      saveCart();
      renderCart();
      showToast(`Removed from Cart: ${removed[0]?.name}`);
    }
  }

  function saveCart() {
    localStorage.setItem('chronolux_cart', JSON.stringify(state.cart));
  }

  function renderCart() {
    const list = document.getElementById('cart-items-list');
    const emptyState = document.getElementById('cart-empty-state');
    const cartBadge = document.getElementById('cart-badge');
    const navCartTotal = document.getElementById('nav-cart-total');
    const subtotalEl = document.getElementById('cart-subtotal');
    const discountRow = document.getElementById('cart-discount-row');
    const discountEl = document.getElementById('cart-discount');
    const grandTotalEl = document.getElementById('cart-grand-total');

    const totalCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const discountAmount = Math.round(subtotal * state.promoDiscount);
    const grandTotal = subtotal - discountAmount;

    if (cartBadge) cartBadge.textContent = totalCount;
    if (navCartTotal) navCartTotal.textContent = `$${grandTotal.toLocaleString()}`;

    if (state.cart.length === 0) {
      if (list) list.innerHTML = '';
      if (emptyState) emptyState.classList.remove('hidden');
      if (subtotalEl) subtotalEl.textContent = '$0';
      if (grandTotalEl) grandTotalEl.textContent = '$0';
      if (discountRow) discountRow.classList.add('hidden');
      return;
    }

    if (emptyState) emptyState.classList.add('hidden');

    if (list) {
      list.innerHTML = state.cart.map((item, idx) => `
        <div class="flex items-center gap-4 p-3 rounded-2xl bg-[#121218] border border-white/5">
          <div class="w-16 h-16 rounded-xl overflow-hidden bg-black/40 border border-white/10 shrink-0">
            <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover">
          </div>
          <div class="flex-1 min-w-0">
            <h4 class="font-serif text-xs font-semibold text-white truncate">${item.name}</h4>
            <span class="text-[10px] text-[#A3A3B3] block truncate">${item.specs}</span>
            <div class="font-serif text-sm font-bold text-white mt-1">$${(item.price * item.quantity).toLocaleString()}</div>
          </div>
          <div class="flex flex-col items-end gap-2">
            <button class="text-[#6B6B7B] hover:text-red-400 p-1" onclick="ChronoLuxApp.removeCartItem(${idx})">
              <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
            </button>
            <div class="flex items-center border border-white/20 rounded-full px-2 py-0.5 bg-black/60">
              <button class="text-[#A3A3B3] hover:text-white px-1.5 text-xs font-bold" onclick="ChronoLuxApp.changeCartQty(${idx}, -1)">-</button>
              <span class="font-mono text-xs px-1 text-white font-semibold">${item.quantity}</span>
              <button class="text-[#A3A3B3] hover:text-white px-1.5 text-xs font-bold" onclick="ChronoLuxApp.changeCartQty(${idx}, 1)">+</button>
            </div>
          </div>
        </div>
      `).join('');
    }

    if (subtotalEl) subtotalEl.textContent = `$${subtotal.toLocaleString()}`;
    if (state.promoDiscount > 0) {
      if (discountRow) discountRow.classList.remove('hidden');
      if (discountEl) discountEl.textContent = `-$${discountAmount.toLocaleString()}`;
    } else {
      if (discountRow) discountRow.classList.add('hidden');
    }
    if (grandTotalEl) grandTotalEl.textContent = `$${grandTotal.toLocaleString()}`;

    if (window.lucide) lucide.createIcons();
  }

  // --- WISHLIST SYSTEM ---
  function initWishlist() {
    const openBtn = document.getElementById('open-wishlist');
    const closeBtn = document.getElementById('close-wishlist-btn');

    openBtn?.addEventListener('click', openWishlistDrawer);
    closeBtn?.addEventListener('click', closeWishlistDrawer);

    renderWishlist();
  }

  function openWishlistDrawer() {
    document.getElementById('wishlist-drawer')?.classList.add('active');
    document.getElementById('cart-drawer')?.classList.remove('active');
  }

  function closeWishlistDrawer() {
    document.getElementById('wishlist-drawer')?.classList.remove('active');
  }

  function toggleWishlist(watchId) {
    const watch = WATCHES.find(w => w.id === watchId);
    if (!watch) return;

    const index = state.wishlist.findIndex(item => item.id === watchId);
    if (index > -1) {
      state.wishlist.splice(index, 1);
      showToast(`Removed from Wishlist: ${watch.name}`);
    } else {
      state.wishlist.push(watch);
      showToast(`Saved to Wishlist: ${watch.name}`);
    }
    localStorage.setItem('chronolux_wishlist', JSON.stringify(state.wishlist));
    renderWishlist();
    renderProductGrid();
  }

  function renderWishlist() {
    const list = document.getElementById('wishlist-items-list');
    const emptyState = document.getElementById('wishlist-empty-state');
    const badge = document.getElementById('wishlist-badge');

    if (badge) {
      badge.textContent = state.wishlist.length;
      badge.style.opacity = state.wishlist.length > 0 ? '1' : '0';
    }

    if (state.wishlist.length === 0) {
      if (list) list.innerHTML = '';
      if (emptyState) emptyState.classList.remove('hidden');
      return;
    }

    if (emptyState) emptyState.classList.add('hidden');

    if (list) {
      list.innerHTML = state.wishlist.map(item => `
        <div class="flex items-center gap-4 p-3 rounded-2xl bg-[#121218] border border-white/5">
          <div class="w-16 h-16 rounded-xl overflow-hidden bg-black/40 border border-white/10 shrink-0">
            <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover">
          </div>
          <div class="flex-1 min-w-0">
            <h4 class="font-serif text-xs font-semibold text-white truncate">${item.name}</h4>
            <div class="font-serif text-sm font-bold text-white mt-1">$${item.price.toLocaleString()}</div>
          </div>
          <div class="flex flex-col gap-2">
            <button class="btn-gold py-1.5 px-3 text-[10px]" onclick="ChronoLuxApp.quickAddToCart(${item.id}); ChronoLuxApp.closeWishlistDrawer(); ChronoLuxApp.openCartDrawer();">
              Add to Cart
            </button>
            <button class="text-[10px] text-red-400 text-center hover:underline" onclick="ChronoLuxApp.toggleWishlist(${item.id})">
              Remove
            </button>
          </div>
        </div>
      `).join('');
    }

    if (window.lucide) lucide.createIcons();
  }

  // --- CHECKOUT FLOW & INTERACTIVE CARD ---
  function initCheckout() {
    const modal = document.getElementById('checkout-modal');
    const closeBtn = document.getElementById('close-checkout-modal');
    const closeSuccessBtn = document.getElementById('close-success-btn');
    const form = document.getElementById('checkout-order-form');
    const payBtns = document.querySelectorAll('.pay-method-btn');
    const cardFields = document.getElementById('card-payment-fields');
    const wireFields = document.getElementById('wire-payment-fields');

    // Live Card Preview inputs
    const cardNumInput = document.getElementById('card-number-input');
    const cardHolderInput = document.getElementById('card-holder-input');
    const cardExpInput = document.getElementById('card-expiry-input');
    const previewNum = document.getElementById('preview-card-num');
    const previewName = document.getElementById('preview-card-name');
    const previewExp = document.getElementById('preview-card-exp');

    closeBtn?.addEventListener('click', () => modal?.classList.remove('active'));
    closeSuccessBtn?.addEventListener('click', () => {
      modal?.classList.remove('active');
      document.getElementById('checkout-form-container')?.classList.remove('hidden');
      document.getElementById('checkout-success-view')?.classList.add('hidden');
    });

    payBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        payBtns.forEach(b => {
          b.classList.remove('active', 'border-[#D4AF37]', 'bg-[#D4AF37]/10', 'text-white');
          b.classList.add('border-white/10', 'bg-white/5', 'text-[#A3A3B3]');
        });
        btn.classList.add('active', 'border-[#D4AF37]', 'bg-[#D4AF37]/10', 'text-white');
        btn.classList.remove('border-white/10', 'bg-white/5', 'text-[#A3A3B3]');

        if (btn.dataset.method === 'wire') {
          cardFields?.classList.add('hidden');
          wireFields?.classList.remove('hidden');
        } else {
          cardFields?.classList.remove('hidden');
          wireFields?.classList.add('hidden');
        }
      });
    });

    // Formatting credit card input
    cardNumInput?.addEventListener('input', (e) => {
      let v = e.target.value.replace(/\D/g, '').substring(0, 16);
      let formatted = v.match(/.{1,4}/g)?.join(' ') || v;
      e.target.value = formatted;
      if (previewNum) previewNum.textContent = formatted || '•••• •••• •••• 9840';
    });

    cardHolderInput?.addEventListener('input', (e) => {
      if (previewName) previewName.textContent = e.target.value.toUpperCase() || 'YOUR NAME';
    });

    cardExpInput?.addEventListener('input', (e) => {
      let v = e.target.value.replace(/\D/g, '').substring(0, 4);
      if (v.length > 2) v = v.substring(0, 2) + '/' + v.substring(2);
      e.target.value = v;
      if (previewExp) previewExp.textContent = v || '12/29';
    });

    // Submit Checkout Order
    form?.addEventListener('submit', (e) => {
      e.preventDefault();
      const placeBtn = document.getElementById('place-order-btn');
      if (placeBtn) {
        placeBtn.disabled = true;
        placeBtn.innerHTML = '<span>Authorizing Armored Protocol...</span>';
      }

      setTimeout(() => {
        const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const discountAmount = Math.round(subtotal * state.promoDiscount);
        const grandTotal = subtotal - discountAmount;

        const randomOrderId = '#CL-' + Math.floor(100000 + Math.random() * 900000);
        document.getElementById('confirmed-order-id').textContent = randomOrderId;
        document.getElementById('confirmed-order-total').textContent = `$${grandTotal.toLocaleString()}`;

        document.getElementById('checkout-form-container')?.classList.add('hidden');
        document.getElementById('checkout-success-view')?.classList.remove('hidden');

        // Clear cart
        state.cart = [];
        saveCart();
        renderCart();
        showToast('Acquisition Authorized! Armored handover dispatched.');

        if (placeBtn) {
          placeBtn.disabled = false;
          placeBtn.innerHTML = '<span>Place Order</span>';
        }
      }, 1400);
    });
  }

  function openCheckoutModal() {
    const modal = document.getElementById('checkout-modal');
    const summaryTotal = document.getElementById('checkout-summary-total');
    const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const discountAmount = Math.round(subtotal * state.promoDiscount);
    const grandTotal = subtotal - discountAmount;

    if (summaryTotal) summaryTotal.textContent = `$${grandTotal.toLocaleString()}`;
    if (modal) {
      document.getElementById('checkout-form-container')?.classList.remove('hidden');
      document.getElementById('checkout-success-view')?.classList.add('hidden');
      modal.classList.add('active');
    }
  }

  // --- VIP CONCIERGE & BOUTIQUE TABS ---
  function initConcierge() {
    const form = document.getElementById('contact-form');
    form?.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Viewing Request Confirmed! Our Geneva Concierge will contact you within 2 hours.');
      form.reset();
    });

    const boutiquePills = document.querySelectorAll('.boutique-pill');
    const title = document.getElementById('boutique-title');
    const address = document.getElementById('boutique-address');
    const phone = document.getElementById('boutique-phone');

    const boutiqueData = {
      geneva: {
        title: "Geneva Flagship Salon",
        address: "Rue du Rhône 42 • Mon-Sat 10:00 - 19:00 CET",
        phone: "Private Viewing Appointments: +41 22 819 9010"
      },
      newyork: {
        title: "New York 5th Avenue Salon",
        address: "740 Fifth Avenue, Manhattan • Mon-Sat 10:00 - 18:00 EST",
        phone: "Private Viewing Appointments: +1 212 555 0192"
      },
      london: {
        title: "London Mayfair Townhouse",
        address: "14 New Bond Street, Mayfair • Mon-Sat 10:00 - 18:30 GMT",
        phone: "Private Viewing Appointments: +44 20 7946 0921"
      },
      tokyo: {
        title: "Tokyo Ginza Atelier",
        address: "6-10-1 Ginza, Chuo-ku, Tokyo • Mon-Sun 11:00 - 20:00 JST",
        phone: "Private Viewing Appointments: +81 3 5555 0142"
      },
      dubai: {
        title: "Dubai Mall Haute Horlogerie Suite",
        address: "Fashion Avenue Level 2, Dubai Mall • Daily 10:00 - 23:00 GST",
        phone: "Private Viewing Appointments: +971 4 555 0188"
      }
    };

    boutiquePills.forEach(pill => {
      pill.addEventListener('click', () => {
        boutiquePills.forEach(p => {
          p.classList.remove('active', 'border-[#D4AF37]', 'bg-[#D4AF37]/10', 'text-white');
          p.classList.add('border-white/10', 'bg-white/5', 'text-[#A3A3B3]');
        });
        pill.classList.add('active', 'border-[#D4AF37]', 'bg-[#D4AF37]/10', 'text-white');
        pill.classList.remove('border-white/10', 'bg-white/5', 'text-[#A3A3B3]');

        const d = boutiqueData[pill.dataset.city];
        if (d) {
          if (title) title.textContent = d.title;
          if (address) address.textContent = d.address;
          if (phone) phone.textContent = d.phone;
        }
      });
    });
  }

  // --- FAQ ACCORDION ---
  function initFAQ() {
    const items = document.querySelectorAll('.faq-item');
    items.forEach(item => {
      item.addEventListener('click', () => {
        const content = item.querySelector('.faq-content');
        const icon = item.querySelector('.faq-icon');
        const isHidden = content?.classList.contains('hidden');

        // Close others
        items.forEach(other => {
          other.querySelector('.faq-content')?.classList.add('hidden');
          const otherIcon = other.querySelector('.faq-icon');
          if (otherIcon) otherIcon.style.transform = 'rotate(0deg)';
        });

        if (isHidden) {
          content?.classList.remove('hidden');
          if (icon) icon.style.transform = 'rotate(45deg)';
        }
      });
    });
  }

  // --- AUDIO SYNTHESIZER: SWISS ESCAPEMENT TICK-TOCK ---
  function initAudio() {
    const soundToggle = document.getElementById('sound-toggle');
    const soundText = document.getElementById('sound-text');
    const soundIndicator = document.getElementById('sound-indicator');

    soundToggle?.addEventListener('click', () => {
      state.audioActive = !state.audioActive;

      if (state.audioActive) {
        if (!state.audioContext) {
          const AudioContext = window.AudioContext || window.webkitAudioContext;
          state.audioContext = new AudioContext();
        }
        if (state.audioContext.state === 'suspended') {
          state.audioContext.resume();
        }

        soundToggle.classList.add('border-[#D4AF37]', 'sound-playing');
        if (soundText) soundText.textContent = 'Audio: Live (4Hz)';
        showToast('Escapement sound active: 28,800 VPH heartbeat');

        // 4Hz tick-tock (4 ticks per second)
        state.audioInterval = setInterval(() => {
          playTickSound(1200, 0.02);
          setTimeout(() => playTickSound(900, 0.02), 125);
        }, 500);

      } else {
        soundToggle.classList.remove('border-[#D4AF37]', 'sound-playing');
        if (soundText) soundText.textContent = 'Audio: Off';
        if (state.audioInterval) clearInterval(state.audioInterval);
      }
    });
  }

  function playTickSound(freq = 1000, duration = 0.03) {
    if (!state.audioActive) return;
    try {
      if (!state.audioContext) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        state.audioContext = new AudioContext();
      }
      const ctx = state.audioContext;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + duration);

      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch (e) {
      // Audio autoplay policy handled silently
    }
  }

  // --- CUSTOM CURSOR & MAGNETIC HOVER ---
  function initCursor() {
    const dot = document.getElementById('cursor-dot');
    const ring = document.getElementById('cursor-ring');
    if (!dot || !ring) return;

    let mouseX = -100, mouseY = -100;
    let ringX = -100, ringY = -100;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    });

    function animateRing() {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
      requestAnimationFrame(animateRing);
    }
    requestAnimationFrame(animateRing);

    // Interactive element hover
    document.querySelectorAll('a, button, input, select, textarea, .product-card, .anatomy-hotspot').forEach(el => {
      el.addEventListener('mouseenter', () => ring.classList.add('active'));
      el.addEventListener('mouseleave', () => ring.classList.remove('active'));
    });
  }

  // --- MOBILE NAV ---
  function initMobileNav() {
    const btn = document.getElementById('mobile-menu-btn');
    const nav = document.getElementById('mobile-nav');
    btn?.addEventListener('click', () => {
      nav?.classList.toggle('hidden');
      nav?.classList.toggle('flex');
    });
    nav?.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.add('hidden');
        nav.classList.remove('flex');
      });
    });
  }

  // --- TOAST NOTIFICATIONS ---
  function showToast(message) {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast-msg';
    toast.innerHTML = `
      <i data-lucide="check-circle-2" class="w-4 h-4 text-[#D4AF37] shrink-0"></i>
      <span>${message}</span>
    `;
    container.appendChild(toast);
    if (window.lucide) lucide.createIcons();

    setTimeout(() => toast.classList.add('show'), 50);
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 400);
    }, 3500);
  }

  // --- PUBLIC INITIALIZER ---
  function init() {
    initHeroCanvas();
    initLenis();
    initMasterpieceSection();
    initCollection();
    initProductModal();
    initCart();
    initWishlist();
    initCheckout();
    initConcierge();
    initFAQ();
    initAudio();
    initCursor();
    initMobileNav();
    if (window.lucide) lucide.createIcons();
  }

  return {
    init,
    openProductModal,
    quickAddToCart,
    addToCart,
    changeCartQty,
    removeCartItem,
    openCartDrawer,
    closeCartDrawer,
    toggleWishlist,
    openWishlistDrawer,
    closeWishlistDrawer,
    openCheckoutModal,
    showToast
  };
})();

// Launch application on DOM ready
document.addEventListener('DOMContentLoaded', ChronoLuxApp.init);
