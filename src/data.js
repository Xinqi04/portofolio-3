import HeroImage from "/assets/tools/foto2.png";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/nextjs.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/nodejs.png";
import Tools8 from "/assets/tools/github.png";
import Tools9 from "/assets/tools/as.png";
import Tools12 from "/assets/tools/kotlin.png";
import Tools10 from "/assets/tools/canva.png";
import Tools11 from "/assets/tools/figma.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Next JS",
    ket: "Framework",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Bootstrap",
    ket: "Framework",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Node JS",
    ket: "Javascript Runtime",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "Android Studio",
    ket: "Code Editor",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "Canva",
    ket: "Design App",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Figma",
    ket: "Design App",
    dad: "1100",
  },
  {
    id: 12,
    gambar: Tools12,
    nama: "Kotlin",
    ket: "Language",
    dad: "1200",
  },
];

import Tenangin1 from "/assets/proyek/Tenangin1.png";
import Tenangin2 from "/assets/proyek/Tenangin2.png";
import Tenangin3 from "/assets/proyek/Tenangin3.png";
import Tenangin4 from "/assets/proyek/Tenangin4.png";
import Tenangin5 from "/assets/proyek/Tenangin5.png";
import Tenangin6 from "/assets/proyek/Tenangin6.png";
import Pouchy1 from "/assets/proyek/Pouchy7.png";
import Pouchy2 from "/assets/proyek/Pouchy8.png";
import Pouchy3 from "/assets/proyek/Pouchy9.png";
import Pouchy4 from "/assets/proyek/Pouchy10.png";
import DelivYu1 from "/assets/proyek/DelivYu11.png";
import DelivYu2 from "/assets/proyek/DelivYu12.png";
import DelivYu3 from "/assets/proyek/DelivYu13.png";

export const listProyek = [
  {
    id: 1,
    gambar: [Tenangin1, Tenangin2, Tenangin3, Tenangin4, Tenangin5, Tenangin6],
    nama: "Web Tenangin",
    desk: "Web ini bertujuan mendukung kesehatan mental mahasiswa melalui fitur seperti self -assessment,rekomendasi konselor, journaling, dan chatbot interaktif",
    tools: ["React", "CSS", "Node js"],
    dad: "200",
    link: "https://frontend-tenangin.vercel.app/",
  },
  {
    id: 2,
    gambar: [Pouchy1, Pouchy2, Pouchy3, Pouchy4],
    nama: "Apk Pouchy",
    desk: "Pouchy: Aplikasi Keuangan Personal untuk Pengelolaan Keuangan Lebih Baik.",
    tools: ["Kotlin"],
    dad: "200",
    link: "https://play.google.com/store/apps/details?id=com.uaspam.pouchy",
  },
  {
    id: 3,
    gambar: [DelivYu1, DelivYu2, DelivYu3],
    nama: "Desain Deliv Yu",
    desk: "DelivYu adalah proyek desain Figma yang dibuat untuk menyederhanakan dan meningkatkan proses manajemen pengiriman bagi bisnis dan individu.",
    tools: ["UI/UX"],
    dad: "300",
    link: "https://www.figma.com/design/J8pgosj8iLjzQhEjhz5PkV/Pemesanan-Makanan?node-id=0-1&node-type=canvas&t=qEVeoDIkEAmt6cqn-0",
  },
];
