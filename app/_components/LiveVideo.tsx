"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import { useModal } from "./useModal";

export function LiveVideo({ videoId, title }: { videoId: string; title: string }) {
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);
  const closeButtonRef = useModal(open, close);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Lire la vidéo : ${title}`}
        className="relative block w-full max-w-5xl mx-auto overflow-hidden rounded-2xl group shadow-2xl"
      >
        <Image
          src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
          alt=""
          width={480}
          height={360}
          // Miniature déjà légère (480×360) : chargée directement depuis YouTube
          unoptimized
          className="w-full h-auto transition duration-700 group-hover:scale-105 group-hover:brightness-75"
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
