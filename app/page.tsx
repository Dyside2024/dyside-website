import Image from "next/image";
import Script from "next/script";

import { FadeSection } from "./_components/FadeSection";
import { Gallery } from "./_components/Gallery";
import { LiveVideo } from "./_components/LiveVideo";
import { SocialLinks } from "./_components/SocialLinks";

import bandPhoto from "@/public/band-photo-web.jpg";
import heroBackground from "@/public/bg-dyside.jpg";
import latestRelease from "@/public/latest-release.png";
import liveCover from "@/public/live-cover.jpg";
import logo from "@/public/logo-dyside.png";
import photo1 from "@/public/photo1.jpg";
import photo2 from "@/public/photo2.jpg";
import photo3 from "@/public/photo3.jpg";
import photo4 from "@/public/photo4.jpg";
import photo5 from "@/public/photo5.jpg";
import photo6 from "@/public/photo6.jpg";
import photo7 from "@/public/photo7.jpg";
import photo8 from "@/public/photo8.jpg";
import photo9 from "@/public/photo9.jpg";
import photo10 from "@/public/photo10.jpg";
import photo11 from "@/public/photo11.jpg";
import photo12 from "@/public/photo12.jpg";

const photos = [
  photo1, photo2, photo3, photo4, photo5, photo6,
  photo7, photo8, photo9, photo10, photo11, photo12,
].map((src, i) => ({ src, alt: `DYSIDE — photo ${i + 1}` }));

const navLinks = [
  { href: "#bio", label: "BIO" },
  { href: "#sortie", label: "SORTIE" },
  { href: "#concerts", label: "CONCERTS" },
  { href: "#live", label: "LIVE" },
  { href: "#galerie", label: "GALERIE" },
  { href: "#contact", label: "CONTACT" },
];

const facts = [
  { label: "GENRE", value: "Metalcore" },
  { label: "ORIGINE", value: "Paris, France" },
  { label: "POUR LES FANS DE", value: "Architects, Currents, Polaris" },
  { label: "ACTUALITÉ", value: "Nouvel EP en préparation" },
];

const sectionTitle ="text-3xl text-center tracking-[0.3em] mb-16";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white">
      <nav
        aria-label="Navigation principale"
        className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-xl border-b border-white/10"
      >
        <ul className="max-w-6xl mx-auto flex justify-center flex-wrap gap-4 md:gap-8 py-4 px-4 text-xs md:text-sm tracking-widest">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a href={href} className="hover:text-gray-400 transition">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* HERO */}
      <section className="min-h-svh relative flex flex-col justify-center items-center text-center px-6 md:px-10 pt-28 pb-10 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={heroBackground}
            alt=""
            fill
            loading="eager"
            fetchPriority="high"
            placeholder="blur"
            sizes="100vw"
            className="object-cover object-top scale-105"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative z-10 flex flex-col items-center w-full">
          <div className="relative mb-10 flex justify-center items-center w-full">
            <div className="absolute w-full max-w-[500px] aspect-square bg-white/20 blur-[120px] rounded-full opacity-70" />
            <h1 className="relative w-full max-w-[450px] md:max-w-[550px]">
              <Image
                src={logo}
                alt="DYSIDE"
                loading="eager"
                fetchPriority="high"
                sizes="(min-width: 768px) 550px, 90vw"
                className="w-full h-auto opacity-0 animate-[fadeIn_1.2s_ease-out_forwards]"
                style={{ filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.8))" }}
              />
            </h1>
          </div>

          <p className="text-gray-300 max-w-xl">Metalcore — France</p>

          <div className="mt-12 text-center">
            <p className="text-gray-500 tracking-[0.4em] text-sm mb-3">PROCHAINE SORTIE</p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-wide">NOUVEL EP BIENTÔT DISPONIBLE</h2>
          </div>

          <SocialLinks className="gap-12 mt-8" />
        </div>
      </section>

      {/* BIO */}
      <FadeSection id="bio" className="max-w-6xl mx-auto px-6 md:px-10 py-24">
        <h2 className={sectionTitle}>BIO</h2>
        <div className="max-w-4xl mx-auto">
          <Image
            src={bandPhoto}
            alt="Les membres de DYSIDE"
            placeholder="blur"
            sizes="(min-width: 896px) 896px, 100vw"
            className="w-full h-auto rounded-xl shadow-2xl mb-12"
          />
          <div className="space-y-8 text-lg leading-relaxed text-gray-400">
            <p className="text-gray-300">
              On joue du metalcore old school écorché et puissant. Les riffs sont saillants et mélodiques à la fois.
              <br />
              Le chant saturé est intense, habité et pleinement incarné en live par notre frontman, capable d&apos;alterner entre puissance et slam en français alarmant et percutant.
            </p>
            <p>Après la sortie de nos premiers singles, nous préparons activement la sortie d&apos;un EP.</p>
            <p>
              On s&apos;éclate à jouer en live. À la fois pour kiffer avec le public et pour nous déchaîner grâce à notre set ravageur et bien rodé.
            </p>
            <p>
              Notre engagement et notre musique se complètent par des textes incisifs qui résonnent cyniquement avec la réalité.
            </p>
            <p className="text-white text-xl font-semibold">
              On en veut.
              <br />
              On est prêts.
            </p>
          </div>
          <dl className="grid md:grid-cols-2 gap-10 text-sm mt-12">
            {facts.map(({ label, value }) => (
              <div key={label}>
                <dt className="text-gray-500 tracking-widest mb-2">{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </FadeSection>

      {/* DERNIÈRE SORTIE */}
      <FadeSection id="sortie" className="max-w-6xl mx-auto px-6 md:px-10 pt-8 pb-24">
        <h2 className={sectionTitle}>DERNIÈRE SORTIE</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <Image
            src={latestRelease}
            alt="Pochette du single SWArM"
            placeholder="blur"
            sizes="(min-width: 768px) 430px, 100vw"
            className="w-full h-auto rounded-xl"
          />
          <div>
            <p className="text-gray-500 tracking-[0.3em] mb-3">NOUVEAU SINGLE</p>
            <h3 className="text-5xl font-bold mb-6">SWArM</h3>
            <p className="text-gray-400 mb-8">Le dernier single de DYSIDE.</p>
            <iframe
              title="Écouter SWArM sur Spotify"
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/track/6cMIlZEktEatH4CMMwtIG8"
              width="100%"
              height="152"
              loading="lazy"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            />
          </div>
        </div>
      </FadeSection>

      {/* CONCERTS */}
      <FadeSection id="concerts" className="max-w-6xl mx-auto px-6 md:px-10 py-18 min-h-[400px]">
        <h2 className={sectionTitle}>CONCERTS</h2>
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
          data-follow-section-cta-text="SUIVRE"
          data-event-rsvp-position="left"
          data-event-rsvp-cta-size="small"
          data-follow-section-cta-icon="true"
          data-language="fr"
          data-bit-logo-position="hidden"
          data-play-my-city-position="hidden"
        />
        {/* Chargé une seule fois par Next.js, après l'affichage de la page */}
        <Script src="https://widgetv3.bandsintown.com/main.min.js" strategy="lazyOnload" />
      </FadeSection>

      {/* LIVE */}
      <FadeSection id="live" className="max-w-6xl mx-auto px-6 md:px-10 py-18">
        <h2 className={sectionTitle}>LIVE</h2>
        <LiveVideo videoId="psDewmjkPwA" title="DYSIDE en live" cover={liveCover} />
      </FadeSection>

      {/* GALERIE */}
      <FadeSection id="galerie" className="max-w-7xl mx-auto px-6 md:px-10 py-18">
        <h2 className={sectionTitle}>GALERIE</h2>
        <Gallery photos={photos} />
      </FadeSection>

      {/* CONTACT */}
      <FadeSection id="contact" className="max-w-4xl mx-auto px-6 md:px-10 py-24 text-center">
        <h2 className="text-3xl tracking-[0.3em] mb-16">CONTACT</h2>
        <p className="text-gray-500 tracking-[0.3em] mb-4">RÉSERVATIONS &amp; MANAGEMENT</p>
        <a href="mailto:contact@dyside.fr" className="text-xl md:text-2xl hover:text-gray-400 transition">
          contact@dyside.fr
        </a>
        <SocialLinks className="gap-10 mt-12" />
      </FadeSection>
    </main>
  );
}
