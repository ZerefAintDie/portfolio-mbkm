'use client';

import Image from "next/image";
import "../styles/navbar.css";

export default function Navbar() {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav className="navbar">
      {/* LEFT */}
      <div className="navbar-left">
        <Image
          src="/magang.png"
          alt="Logo"
          width={130}
          height={40}
          priority
        />
      </div>

      {/* CENTER */}
      <ul className="navbar-center">
        <li>
          <button onClick={() => scrollToSection("hero")}>
            Beranda
          </button>
        </li>
        <li>
          <button onClick={() => scrollToSection("magang")}>
            Program
          </button>
        </li>
        <li>
          <button onClick={() => scrollToSection("profil")}>
            Profil
          </button>
        </li>
        <li>
          <button onClick={() => scrollToSection("projek")}>
            Projek
          </button>
        </li>
      </ul>

      {/* RIGHT */}
      <div className="navbar-right">
        <a
          href="https://wa.me/6285640242954"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-contact"
        >
          Hubungi Kami
        </a>
      </div>
    </nav>
  );
}
