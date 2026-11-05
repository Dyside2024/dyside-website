"use client";

import Image, { type StaticImageData } from "next/image";
import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useModal } from "./useModal";

export function Gallery({ photos }: { photos: { src: StaticImageData; alt: string }[] }) {
  const [selected, setSelected] = useState<number | null>(null);
  const open = selected !== null;

  const close = useCallback(() => setSelected(null), []);
  const prev = useCallback(
    () => setSelected((i) => (i === null ? i : (i - 1 + photos.length) % photos.length)),
    [photos.length]
  );
  const next = useCallback(
    () => setSelected((i) => (i === null ? i : (i + 1) % photos.length)),
    [photos.length]
  );

  const closeButtonRef = useModal(open, close);

  // Flèches gauche / droite
  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") prev();
      if (event.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, prev, next]);

  return (
    <>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {photos.map((photo, index) => (
          <li key={photo.src.src}>
            <button
              type="button"
              onClick={() => setSelected(index)}
              aria-label={`Agrandir la photo ${index + 1}`}
              className="block w-full rounded-xl overflow-hidden hover:scale-[1.03] hover:brightness-110 hover:shadow-2xl transition duration-500"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                placeholder="blur"
                draggable={false}
                sizes="(min-width: 1280px) 400px, (min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="w-full h-auto"
              />
            </button>
          </li>
        ))}
      </ul>

      {open &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`Photo ${selected + 1} sur ${photos.length}`}
            onClick={close}
            className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center"
          >
            <button
              ref={closeButtonRef}
              type="button"
              onClick={close}
              aria-label="Fermer"
              className="absolute top-6 right-8 text-white text-5xl hover:text-gray-400 z-50"
            >
              ×
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Photo précédente"
              className="absolute left-2 md:left-6 p-2 text-white text-6xl hover:text-gray-400 z-50"
            >
              ‹
            </button>
            <Image
              key={selected}
              src={photos[selected].src}
              alt={photos[selected].alt}
              placeholder="blur"
              sizes="90vw"
              onClick={(e) => e.stopPropagation()}
              className="w-auto h-auto max-w-[90vw] max-h-[90vh] rounded-xl"
            />
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Photo suivante"
              className="absolute right-2 md:right-6 p-2 text-white text-6xl hover:text-gray-400 z-50"
            >
              ›
            </button>
            <div className="absolute bottom-8 text-gray-300 tracking-widest" aria-hidden="true">
              {selected + 1} / {photos.length}
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
