"use client";

import { useState, useEffect } from "react";

import {
  FaSpotify,
  FaYoutube,
  FaInstagram,
  FaApple
} from "react-icons/fa";

export default function Home() {
  const photos = [
    "/photo1.jpg",
    "/photo2.jpg",
    "/photo3.jpg",
    "/photo4.jpg",
    "/photo5.jpg",
    "/photo6.jpg",
    "/photo7.jpg",
    "/photo8.jpg",
    "/photo9.jpg",
    "/photo10.jpg",
    "/photo11.jpg",
    "/photo12.jpg",
  ];

  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [showVideo, setShowVideo] = useState(false);
  const [visibleSections, setVisibleSections] = useState<string[]>([]);

  // 1. GESTION DU CLAVIER POUR LA GALERIE
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (selectedImage === null) return;

      if (event.key === "Escape") {
        setSelectedImage(null);
        setShowVideo(false);
      }

      if (event.key === "ArrowLeft") {
        setSelectedImage(
          selectedImage === 0 ? photos.length - 1 : selectedImage - 1
        );
      }

      if (event.key === "ArrowRight") {
        setSelectedImage(
          selectedImage === photos.length - 1 ? 0 : selectedImage + 1
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  // 2. GESTION DE L'APPARITION DES SECTIONS
  useEffect(() => {
    const sections = document.querySelectorAll(".fade-section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => [
              ...new Set([...prev, entry.target.id]),
            ]);
          }
        });
      },
      { threshold: 0.15 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // 3. CHARGEMENT FORCÉ DU SCRIPT BANDSINTOWN (La solution au problème !)
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://widgetv3.bandsintown.com/main.min.js";
    script.charset = "utf-8";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white">
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-6xl mx-auto flex justify-center gap-8 py-4 text-sm tracking-widest">
          <a href="#bio" className="hover:text-gray-400 transition">BIO</a>
          <a href="#release" className="hover:text-gray-400 transition">RELEASE</a>
          <a href="#shows" className="hover:text-gray-400 transition">SHOWS</a>
          <a href="#live" className="hover:text-gray-400 transition">LIVE</a>
          <a href="#gallery" className="hover:text-gray-400 transition">GALLERY</a>
          <a href="#contact" className="hover:text-gray-400 transition">CONTACT</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="h-screen relative flex flex-col justify-center items-center text-center p-10 pt-38 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/bg-dyside.jpg"
            className="w-full h-full object-cover object-top scale-105"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center">
          <div className="relative mb-10 flex justify-center items-center">
            <div className="absolute w-[500px] h-[500px] bg-white/20 blur-[120px] rounded-full opacity-70"></div>
            <img
              src="/logo-dyside.png"
              alt="DYSIDE logo"
              className="w-[450px] md:w-[550px] opacity-0 animate-[fadeIn_1.2s_ease-out_forwards]"
              style={{ filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.8))" }}
            />
          </div>

          <p className="text-gray-300 max-w-xl">Metalcore — France</p>

          <div className="mt-12 text-center">
            <p className="text-gray-500 tracking-[0.4em] text-sm mb-3">NEXT RELEASE</p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-wide">EP COMING SOON</h2>
            <p className="text-gray-400 mt-4">New music currently in production.</p>
          </div>

          <div className="flex justify-center gap-12 mt-10 text-4xl">
            <a href="https://open.spotify.com/intl-fr/artist/3mbNYk5Z25DP7vObLm9GCd" target="_blank" className="hover:scale-125 transition duration-300">
              <FaSpotify className="text-green-500" />
            </a>
            <a href="https://music.apple.com/fr/artist/dyside/1477744614" target="_blank" className="hover:scale-125 transition duration-300">
              <FaApple />
            </a>
            <a href="https://www.youtube.com/channel/UCo-xK9prFp1Kb8CWHUDURLQ" target="_blank" className="hover:scale-125 transition duration-300">
              <FaYoutube className="text-red-600" />
            </a>
            <a href="https://www.instagram.com/dyside.fr" target="_blank" className="hover:scale-125 transition duration-300">
              <FaInstagram className="text-purple-400" />
            </a>
          </div>
        </div>
      </section>

      {/* BIO */}
      <section id="bio" className="max-w-6xl mx-auto px-10 py-24">
        <h2 className="text-3xl text-center tracking-[0.3em] mb-16">BIO</h2>
        <div className="max-w-4xl mx-auto">
          <img src="/band-photo-web.jpg" alt="DYSIDE" className="w-full rounded-xl shadow-2xl mb-12" />
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            Dyside est un groupe de metalcore originaire de Paris. Porté par une énergie brute et une intensité sans compromis, le groupe forge son identité à travers un mélange de riffs incisifs, de rythmiques percutantes et d'émotions à vif.
          </p>
          <p className="text-lg text-gray-400 leading-relaxed mb-8">
            À travers un chant habité et des compositions puissantes, Dyside explore des thématiques fortes et contemporaines, transformant la colère, la révolte et les tensions du monde moderne en une musique à la fois agressive, sincère et fédératrice.
          </p>
          <p className="text-lg text-gray-400 leading-relaxed mb-12">
            Après la sortie de son dernier single <span className="text-white">Primitive Modernity</span>, le groupe prépare actuellement la sortie de son prochain EP et poursuit son évolution avec une ambition claire : proposer un metal authentique et percutant.
          </p>
          <div className="grid md:grid-cols-2 gap-10 text-sm">
            <div><p className="text-gray-500 tracking-widest mb-2">GENRE</p><p>Metalcore</p></div>
            <div><p className="text-gray-500 tracking-widest mb-2">LOCATION</p><p>Paris, France</p></div>
            <div><p className="text-gray-500 tracking-widest mb-2">FOR FANS OF</p><p>Architects, Currents, Polaris</p></div>
            <div><p className="text-gray-500 tracking-widest mb-2">STATUS</p><p>EP Coming Soon</p></div>
          </div>
        </div>
      </section>

      {/* LATEST RELEASE */}
      <section id="release" className="max-w-6xl mx-auto px-10 pt-8 pb-24">
        <h2 className="text-3xl text-center tracking-[0.3em] mb-16">LATEST RELEASE</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <img src="/primitive-modernity.jpg" alt="Primitive Modernity" className="rounded-xl" />
          <div>
            <p className="text-gray-500 tracking-[0.3em] mb-3">NEW SINGLE</p>
            <h3 className="text-5xl font-bold mb-6">Primitive Modernity</h3>
            <p className="text-gray-400 mb-8">The latest single from DYSIDE.</p>
            <iframe
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/track/0DAt0FeTQOrA2uYIQ3uVrs"
              width="100%"
              height="152"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            />
          </div>
        </div>
      </section>

      {/* SHOWS */}
      <section id="shows" className="max-w-6xl mx-auto px-10 py-22 min-h-[400px]">
        <h2 className="text-3xl text-center tracking-[0.3em] mb-16">SHOWS</h2>
        
        {/* Le conteneur Bandsintown (sans la balise script ici, elle est gérée en haut) */}
        <a 
          className="bit-widget-initializer"
          data-artist-name="id_15632521"
          data-app-id="f6f92462c1c3f21c0f6561e2b5366bfa"
          data-background-color="transparent"
          data-text-color="#FFFFFF"
          data-link-color="#FFFFFF"
          data-date-orientation="vertical"
          data-display-details="false"
          data-social-share-icon="true"
          data-button-label-capitalization="capitalize"
          data-date-border-width="0px"
          data-follow-section-position="hidden"
          data-follow-section-alignment="center"
          data-follow-section-cta-text="FOLLOW"
          data-event-rsvp-position="left"
          data-event-rsvp-cta-size="small"
          data-follow-section-cta-icon="true"
          data-language="fr"
          data-bit-logo-position="hidden"
          data-play-my-city-position="hidden"
        ></a>
      </section>

      {/* LIVE PERFORMANCE */}
      <section id="live" className="max-w-6xl mx-auto px-10 py-22">
        <h2 className="text-3xl text-center tracking-[0.3em] mb-16">LIVE PERFORMANCE</h2>
        <div onClick={() => setShowVideo(true)} className="relative max-w-5xl mx-auto cursor-pointer overflow-hidden rounded-2xl group shadow-2xl">
          <img src="https://img.youtube.com/vi/psDewmjkPwA/maxresdefault.jpg" alt="DYSIDE Live" className="w-full transition duration-700 group-hover:scale-105 group-hover:brightness-75" />
          <div className="absolute inset-0 bg-black/35 group-hover:bg-black/50 transition duration-500"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full border-2 border-white flex items-center justify-center backdrop-blur-md bg-white/10 group-hover:scale-110 transition duration-300">
              <span className="text-5xl ml-2">▶</span>
            </div>
          </div>
        </div>
        
      </section>

      {/* GALLERY */}
      <section id="gallery" className="max-w-7xl mx-auto px-10 py-22">
        <h2 className="text-3xl text-center tracking-[0.3em] mb-16">GALLERY</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <img
              key={photo}
              src={photo}
              alt=""
              draggable={false}
              onClick={() => setSelectedImage(index)}
              className="w-full rounded-xl cursor-pointer hover:scale-[1.03] hover:brightness-110 hover:shadow-2xl transition duration-500"
            />
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="max-w-4xl mx-auto px-10 py-24 text-center">
        <h2 className="text-3xl tracking-[0.3em] mb-16">CONTACT</h2>
        <p className="text-gray-500 tracking-[0.3em] mb-4">BOOKING & MANAGEMENT</p>
        <a href="mailto:contact@dyside.fr" className="text-2xl hover:text-gray-400 transition">contact@dyside.fr</a>
        <div className="flex justify-center gap-10 mt-12 text-4xl">
          <a href="https://open.spotify.com/intl-fr/artist/3mbNYk5Z25DP7vObLm9GCd" target="_blank" className="hover:scale-125 transition duration-300"><FaSpotify className="text-green-500" /></a>
          <a href="https://music.apple.com/fr/artist/dyside/1477744614" target="_blank" className="hover:scale-125 transition duration-300"><FaApple /></a>
          <a href="https://www.youtube.com/channel/UCo-xK9prFp1Kb8CWHUDURLQ" target="_blank" className="hover:scale-125 transition duration-300"><FaYoutube className="text-red-600" /></a>
          <a href="https://www.instagram.com/dyside.fr" target="_blank" className="hover:scale-125 transition duration-300"><FaInstagram className="text-purple-400" /></a>
        </div>
      </section>

      {/* MODAL IMAGES */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center">
          <button onClick={() => setSelectedImage(null)} className="absolute top-6 right-8 text-white text-5xl hover:text-gray-400 z-50">×</button>
          <button onClick={() => setSelectedImage(selectedImage === 0 ? photos.length - 1 : selectedImage - 1)} className="absolute left-6 text-white text-6xl hover:text-gray-400 z-50">‹</button>
          <img src={photos[selectedImage]} alt="" className="max-w-[90vw] max-h-[90vh] rounded-xl" />
          <button onClick={() => setSelectedImage(selectedImage === photos.length - 1 ? 0 : selectedImage + 1)} className="absolute right-6 text-white text-6xl hover:text-gray-400 z-50">›</button>
          <div className="absolute bottom-8 text-gray-300 tracking-widest">{selectedImage + 1} / {photos.length}</div>
        </div>
      )}

      {/* MODAL VIDEO */}
      {showVideo && (
        <div className="fixed inset-0 bg-black/95 z-[99999] flex items-center justify-center p-6" onClick={() => setShowVideo(false)}>
          <button onClick={() => setShowVideo(false)} className="absolute top-6 right-8 text-white text-5xl hover:text-gray-400">×</button>
          <div className="w-full max-w-6xl aspect-video" onClick={(e) => e.stopPropagation()}>
            <iframe className="w-full h-full rounded-xl" src="https://www.youtube.com/embed/psDewmjkPwA?autoplay=1" title="DYSIDE Live" allow="autoplay; encrypted-media" allowFullScreen />
          </div>
        </div>
      )}
    </main>
  );
}
