"use client";

import Image, { type StaticImageData } from "next/image";
import { useCallback, useState } from "react";
import { useModal } from "./useModal";

export function LiveVideo({
  videoId,
  title,
  cover,
}: {
  videoId: string;
  title: string;
  /** Image de couverture hébergée sur le site (indépendante de YouTube) */
  cover: StaticImageData;
}) {
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);
  const closeButtonRef = useModal(open, close);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Lire la vidéo : ${title}`}
        className="relative block w-full max-w-5xl mx-auto aspect-video overflow-hidden rounded-2xl group shadow-2xl"
      >
        {/* Cadrage 16:9 + object-cover : retire les bandes noires des miniatures YouTube */}
        <Image
          src={cover}
          alt=""
          fill
          placeholder="blur"
          sizes="(min-width: 1024px) 1024px, 100vw"
          className="object-cover transition duration-700 group-hover:scale-105 group-hover:brightness-75"
        />
        <span className="absolute inset-0 bg-black/35 group-hover:bg-black/50 transition duration-500" />
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="w-24 h-24 rounded-full border-2 border-white flex items-center justify-center backdrop-blur-md bg-white/10 group-hover:scale-110 transition duration-300">
            <span className="text-5xl ml-2" aria-hidden="true">
              ▶
            </span>
          </span>
        </span>
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={title}
          onClick={close}
          className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center p-6"
        >
          <button
            ref={closeButtonRef}
            type="button"
            onClick={close}
            aria-label="Fermer la vidéo"
            className="absolute top-6 right-8 text-white text-5xl hover:text-gray-400"
          >
            ×
          </button>
          <div className="w-full max-w-6xl aspect-video" onClick={(e) => e.stopPropagation()}>
            <iframe
              className="w-full h-full rounded-xl"
              src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`}
              title={title}
              allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
}
