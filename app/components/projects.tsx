'use client';

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/projects.css";
import Image from "next/image";

export default function Projects() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section className="projek-section" id="projek">
      {/* HEADER */}
      <div className="projek-header" data-aos="fade-down">
        <h2>Projek</h2>

        <div className="projek-decor">
          <Image 
            src="/AI.png"
            alt="dekor 1"
            className="decor decor-1"
            width={100}
            height={100}
          />
          <Image
            src="/MDIDE.png"
            alt="dekor 2"
            className="decor decor-2"
            width={100}
            height={100}
          />
          <Image
            src="/ROSBD.png"
            alt="dekor 3"
            className="decor decor-3"
            width={100}
            height={100}
          />
        </div>
      </div>

      {/* PROJECT 1 */}
      <div className="projek-item" data-aos="fade-up">
        <div className="projek-image">
          <img src="/AI.png" alt="Projek 1" />
        </div>
        <div className="projek-content">
          <h3>Sistem Deteksi Penyakit Jantung</h3>
          <h4>Artificial Intelligence</h4>
          <p>
            VitaPulse adalah aplikasi web yang membantu memperkirakan risiko penyakit jantung berdasarkan data kesehatan sederhana yang diisi pengguna. Dengan bantuan model AI, aplikasi ini memberikan gambaran awal tingkat risiko untuk meningkatkan kesadaran pengguna terhadap kesehatan jantung, tanpa menggantikan diagnosis dokter.
          </p>
          <span>Python</span>
          <span>Flask</span>
          <span>Scikit Learn</span>
        </div>
      </div>

      {/* PROJECT 2 */}
      <div className="projek-item" data-aos="fade-up">
        <div className="projek-image">
          <img src="/MDIDE.png" alt="Projek 2" />
        </div>
        <div className="projek-content">
          <h3>Integrasi Pipeline Database End-to-End</h3>
          <h4>Infrastruktur dan Platform Big Data</h4>
          <p>
            Projek ini berfokus pada pengolahan data besar (Big Data) menggunakan database konvensional dan penjadwalan dengan Airflow. Output akhir berupa dashboard untuk melakukan analisis tren film dari tahun ke tahun.
          </p>
          <span>Python</span>
          <span>SQL Database</span>
          <span>Airflow Scheduler</span>
        </div>
      </div>

      {/* PROJECT 3 */}
      <div className="projek-item" data-aos="fade-up">
        <div className="projek-image">
          <img src="/ROSBD.png" alt="Projek 3" />
        </div>
        <div className="projek-content">
          <h3>Sistem Prediksi Harga Bitcoin</h3>
          <h4>Rekayasa dan Organisasi Sistem Big Data</h4>
          <p>
            Proyek ini berfokus pada pengolahan data yang mengalir secara real-time, di mana data diperoleh langsung dari sumber online dan diproses secara berkelanjutan oleh sistem. Data yang masuk dianalisis secara otomatis untuk menghasilkan insight dan prediksi yang relevan, kemudian disajikan dalam bentuk dashboard visual yang mudah dipahami sehingga pengguna dapat memantau kondisi dan tren secara cepat dan informatif.
          </p>
          <span>Python</span>
          <span>Spark</span>
          <span>Cassandra</span>
        </div>
      </div>

      {/* PROJECT 4 */}
      <div className="projek-item" data-aos="fade-up">
        <div className="projek-image">
          <img src="/ML.png" alt="Projek 4" />
        </div>
        <div className="projek-content">
          <h3>Analisis Sentimen Produk Shopee</h3>
          <h4>Machine Learning</h4>
          <p>
            Proyek ini bertujuan untuk menganalisis ulasan produk di platform e-commerce Shopee guna memahami sentimen pelanggan terhadap berbagai produk. Dengan menggunakan teknik machine learning, ulasan-ulasan tersebut diklasifikasikan menjadi kategori positif, negatif, atau netral. Hasil analisis ini dapat membantu penjual dalam meningkatkan kualitas produk dan layanan mereka berdasarkan umpan balik pelanggan.
          </p>
          <span>Python</span>
          <span>Scikit Learn</span>
          <span>NLTK</span>
          <span>Apify</span>
        </div>

      </div>
      
      <div className="projek-more" data-aos="fade-up">
        <h3>Masih Banyak Projek Lainnya</h3>
      </div>
    </section>
  );
}
