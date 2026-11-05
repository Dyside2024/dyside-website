"use client";

import { useEffect, useRef } from "react";

/**
 * Comportement commun aux fenêtres modales :
 * - fermeture avec Échap
 * - blocage du défilement de la page en arrière-plan
 * - focus placé sur le bouton de fermeture, puis rendu à l'élément d'origine
 */
export function useModal(open: boolean, onClose: () => void) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const onCloseRef = useRef(onClose);

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    if (!open) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onCloseRef.current();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus();
    };
  }, [open]);

  return closeButtonRef;
}
