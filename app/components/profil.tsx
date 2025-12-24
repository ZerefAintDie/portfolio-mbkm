"use client";

import { useEffect, useRef } from "react";
import "../styles/profil.css";

/* ================= DATA ================= */

const ketua = {
  name: "Muhammad Muflih Affandi",
  role: "Ketua",
  email: "affanart645@gmail.com",
  linkedin: "https://linkedin.com/in/muhmaffandi",
  github: "https://github.com/MuhammadAffandi24",
  image: "/affan.jpg",
};

const members = [
  {
    name: "Muhammad Althafino",
    role: "Wakil Ketua",
    email: "malthafino36@gmail.com",
    linkedin: "https://linkedin.com/in/althafino",
    github: "https://github.com/ZerefAintDie",
    image: "/althafino.jpg",
  },
  {
    name: "Farhan Wegig Pramudito",
    role: "Wakil Ketua",
    email: "tios00123@gmail.com",
    linkedin: "https://linkedin.com/in/farhan-wegig-pramudito",
    github: "https://github.com/FarhanWegigP",
    image: "/tio.jpeg",
  },
  {
    name: "Vriska Diah Novita Sari",
    role: "Bendahara",
    email: "vriskadiahnovitasari@gmail.com",
    linkedin: "https://linkedin.com/in/vriskadiahnvs",
    github: "https://github.com/vriskadiahnvs",
    image: "/vriska.jpg",
  },
  {
    name: "Berliana Syifa Maharani",
    role: "Bendahara",
    email: "berlianasyifa9@gmail.com",
    linkedin: "https://linkedin.com/in/berliana-syifa-maharani",
    github: "https://github.com/Berlianaa27",
    image: "/berliana.jpeg",
  },
  {
    name: "Risquina Angelica Arvintyani",
    role: "Sekretaris",
    email: "risquinaangelicaa@gmail.com",
    linkedin: "https://linkedin.com/in/risquina-angelica-arvintyani",
    github: "https://github.com/Risquinaangelica",
    image: "/angel.jpg",
  },
  {
    name: "Regina Aurellia Tsaqif",
    role: "Sekretaris",
    email: "reginaaurelliaa@gmail.com",
    linkedin: "https://linkedin.com/in/reginaaurelliatsaqif",
    github: "https://github.com/regiregina",
    image: "/regina.jpg",
  },
];

/* ================= COMPONENT ================= */

export default function Profile() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll(".profile-card");
    if (!cards) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="profil" className="profile-section" ref={sectionRef}>
      <h2 className="profile-title">Profil Kami</h2>

      {/* KETUA */}
      <div className="leader-wrapper">
        <ProfileCard data={ketua} leader />
      </div>

      {/* MEMBER */}
      <div className="profile-grid">
        {members.map((m, i) => (
          <ProfileCard key={i} data={m} />
        ))}
      </div>
    </section>
  );
}

/* ================= CARD ================= */

function ProfileCard({
  data,
  leader = false,
}: {
  data: {
    name: string;
    role: string;
    email: string;
    linkedin: string;
    github: string;
    image: string;
  };
  leader?: boolean;
}) {
  return (
    <div className={`profile-card ${leader ? "leader" : ""}`}>
      <img className="avatar" src={data.image} alt={data.name} />

      <div className="profile-info">
        <h3>{data.name}</h3>
        <span className="role">{data.role}</span>

        <ul>
          {/* EMAIL */}
          <li>
            <img src="/email.svg" alt="email" />
            <a href={`mailto:${data.email}`} className="profile-link">
              {data.email}
            </a>
          </li>

          {/* LINKEDIN */}
          <li>
            <img src="/linkedin.svg" alt="linkedin" />
            <a
              href={data.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="profile-link"
            >
              {data.linkedin.replace("https://", "")}
            </a>
          </li>

          {/* GITHUB */}
          <li>
            <img src="/github.svg" alt="github" />
            <a
              href={data.github}
              target="_blank"
              rel="noopener noreferrer"
              className="profile-link"
            >
              {data.github.replace("https://", "")}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
