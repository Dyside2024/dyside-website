"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/** Section qui apparaît en fondu lorsqu'elle entre dans l'écran. */
export function FadeSection({
  id,
  className = "",
  children,
}: {
  id: string;
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      // Pas de seuil en % : une section très haute (la galerie sur mobile)
      // ne serait jamais visible à 15 %. On déclenche dès qu'elle dépasse
      // de 10 % la hauteur d'écran par le bas.
      { rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id={id}
      className={`fade-section scroll-mt-20 ${visible ? "visible" : ""} ${className}`}
    >
      {children}
    </section>
  );
}
