"use client";

import { useEffect, useRef } from "react";
import "../styles/magang.css";
import Image from "next/image";

export default function Magang() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("show");
        }
      },
      {
        threshold: 0.3,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="magang" ref={sectionRef} className="magang">
      {/* Image Box */}
      <div className="magang-image">
        <Image
          src="/magang-berdampak.png"
          alt="Magang Berdampak"
          width={200}
          height={100}
        />
      </div>

      {/* Text Content */}
      <div className="magang-content">
        <h2>Program Magang Berdampak</h2>
        <p>
          Kegiatan Hibah MBKM UNS adalah program pendanaan yang diselenggarakan oleh Universitas Sebelas Maret (UNS) untuk mendukung pelaksanaan Merdeka Belajar–Kampus Merdeka (MBKM) di tingkat universitas, fakultas, maupun program studi. Program ini bertujuan mendorong inovasi pembelajaran, kolaborasi dengan mitra eksternal, serta peningkatan kompetensi mahasiswa agar lebih siap menghadapi dunia kerja dan kebutuhan masyarakat.

        </p>
      </div>
    </section>
  );
}
