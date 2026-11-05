import type { IconType } from "react-icons";
import { FaApple, FaInstagram, FaSpotify, FaYoutube } from "react-icons/fa";

const socials: { label: string; href: string; Icon: IconType; color?: string }[] = [
  {
    label: "Spotify",
    href: "https://open.spotify.com/intl-fr/artist/3mbNYk5Z25DP7vObLm9GCd",
    Icon: FaSpotify,
    color: "text-green-500",
  },
  {
    label: "Apple Music",
    href: "https://music.apple.com/fr/artist/dyside/1477744614",
    Icon: FaApple,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/channel/UCo-xK9prFp1Kb8CWHUDURLQ",
    Icon: FaYoutube,
    color: "text-red-600",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/dyside.fr",
    Icon: FaInstagram,
    color: "text-purple-400",
  },
];

export function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <ul className={`flex justify-center text-4xl ${className}`}>
      {socials.map(({ label, href, Icon, color }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`DYSIDE sur ${label}`}
            title={label}
            className="block hover:scale-125 transition duration-300"
          >
            <Icon className={color} aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  );
}
