import { useRef } from 'react';
import ThemeToggle from './ThemeToggle';
import { ShareIcon } from './ShareIcon';
import { UserIcon } from './UserIcon';

export default function Navbar() {
  const sharingRef = useRef(false);

  const handleShare = async () => {
    if (sharingRef.current) return; // block double share otherwise run time error ahahahah
    sharingRef.current = true;

    try {
      if (navigator.share) {
        await navigator.share({
          title: 'Heli Kadakia',
          url: window.location.href,
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
      }
    } catch (err) {
      // User canceled share → SAFE TO IGNORE
      console.log('Share canceled');
    } finally {
      sharingRef.current = false; // 🔓 unlock
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-links">
        <a href="#about">ABOUT ME</a>
        <a href="#projects">PROJECTS</a>
        <a href="#contact">CONTACT</a>
        <a href="#timeline">TIMELINE</a>
      </div>

      <div className="nav-icons">
        <ThemeToggle />

        <button className="icon-btn" onClick={handleShare} aria-label="Share">
          <ShareIcon />
        </button>

        <a href="/login" className="icon-btn profile-btn" aria-label="Login">
          <UserIcon />
        </a>
      </div>
    </nav>
  );
}
