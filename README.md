# DYSIDE — Site officiel

Site vitrine / EPK du groupe de metalcore DYSIDE ([dyside.fr](https://dyside.fr)), réalisé avec Next.js 16, React 19 et Tailwind CSS 4.

## Lancer le site en local

Prérequis : [Node.js](https://nodejs.org) (version LTS).

```bash
npm install     # une seule fois, installe les dépendances
npm run dev     # lance le site sur http://localhost:3000
```

Autres commandes :

- `npm run build` : compile la version de production
- `npm run lint` : vérifie le code

## Organisation

- `app/page.tsx` : la page d'accueil (toutes les sections)
- `app/layout.tsx` : titre, description, image de partage (Open Graph)
- `app/_components/` : galerie photo, vidéo live, liens réseaux, animation d'apparition
- `public/` : images

## Ajouter une photo à la galerie

1. Déposer le fichier dans `public/` (ex. `photo13.jpg`).
2. Dans `app/page.tsx`, ajouter `import photo13 from "@/public/photo13.jpg";` et l'ajouter au tableau `photos`.

Next.js redimensionne et compresse automatiquement les images (`next/image`) : pas besoin de les optimiser à la main, même si des fichiers d'origine plus légers (≈ 2000 px de large) accélèrent la compilation.
