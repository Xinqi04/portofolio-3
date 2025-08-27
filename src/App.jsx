import DataImage from "./data";
import {listTools, listProyek} from "./data"
import { ReactTyped } from "react-typed";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function App() {

  return (
    <>
    <div id="home" className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
      <div>
        {/* <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
         <img src={DataImage.HeroImage} alt="Poto Profile" className="w-10 rounded-md" />
         <q>Kamu adalah Tokoh utama dalam kehidupan mu</q>
        </div> */}
        <h1 className="text-5xl/tight text-gray-400 font-bold mb-6">
          <ReactTyped
            strings={["Halo Teman teman!","Saya Riza Anwar Fadil", "Saya Seorang Web Developer", "Saya Suka Belajar Ngoding"]}
            typeSpeed={50}
            backSpeed={30}
            loop
            className="text-5xl/tight text-sky-400 font-bold mb-6"
          />
        </h1>

        <p className="text-base/loose text-gray-400 mb-6">Seorang pengembang web dan machine learning enthusiast yang fokus pada solusi digital modern dan cerdas.
        </p>
        <div className="flex items-center justify-center md:justify-start sm:gap-4 gap-2">
          <a href="https://drive.google.com/file/d/1SVvg96Pf_D0DPcSgXFGlcRUw85PDlSdh/view" className="bg-sky-500 w-32 text-center p-4 rounded-2xl hover:bg-sky-600">
            CV <i className="ri-download-line"></i></a>
          <a href="#Project" className="bg-zinc-600 w-32 text-center p-4 rounded-2xl hover:bg-zinc-700">
            Project</a>
        </div>
      </div>
      <img src={DataImage.HeroImage} alt="Poto Profile" className="w-[500px] md:ml-auto" loading="lazy" />
    </div>

    {/* About */}
    <div id="about" className="about mt-20 py-16 px-6 bg-gradient-to-b via-zinc-900 to-transparent">
        {/* Teks About */}
        <div className="space-y-4 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-sky-400 animate-fadeInUp">
            About Me
          </h2>
          <p className="text-gray-400 leading-relaxed animate-fadeInUp delay-200">
            Saya adalah seorang mahasiswa sekaligus pengembang web yang memiliki ketertarikan besar pada teknologi, 
            khususnya di bidang pengembangan aplikasi modern dan machine learning. Saya terbiasa membangun proyek 
            frontend maupun backend dengan memanfaatkan teknologi terbaru, serta mengeksplorasi penerapan machine 
            learning untuk menghasilkan solusi yang lebih cerdas dan efisien. Selain itu, saya senang mempelajari 
            hal-hal baru, berkolaborasi dalam tim, dan mengembangkan ide kreatif menjadi produk digital yang bermanfaat.
          </p>
        </div>
    </div>
    <div className="tools mt-20">
      <h1 className="text-4xl/snug font-bold mb-4 text-sky-400 text-center">Tools Yang dipakai</h1>
      {/* <p className="w-2/5 text-base/loose opacity-50 text-white">Berikut ini beberapa tools yang biasa saya gunakan</p> */}
      <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">

        {listTools.map(tool => (
          <div className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md group
          hover:bg-zinc-800 group" key={tool.id}>
            <img src={tool.gambar} alt="Tools Image" className="w-14  p-1" loading="lazy"/>
            <div>
              <h4 className="text-white font-bold">{tool.nama}</h4>
              <p className="text-white opacity-50">{tool.ket}</p>
            </div>
          </div>

        ))}
      </div>
    </div>

    <div id="proyek" className="proyek mt-32 py-10">
      <h1 className="text-center text-4xl text-sky-400 font-bold mb-2">Projects</h1>
      <p className="text-base/loose text-center text-gray-400 opacity-50">
        Berikut ini beberapa project yang telah saya buat.
      </p>

      <div className="proyek-box mt-5 grid lg:grid-cols-3 gap-4 sm:grid-cols-2 grid-cols-1">
        {listProyek.map((proyek) => (
          <div key={proyek.id} className="p-4 bg-zinc-800 rounded-md shadow shadow-sky-600/40">
            {/* Swiper untuk gambar */}
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              loop
              spaceBetween={10}
              slidesPerView={1}
              className="h-[250px] rounded-md overflow-hidden"
            >
              {proyek.gambar.map((img, idx) => (
                <SwiperSlide key={idx}>
                  <img
                    src={img}
                    alt={`${proyek.nama} ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <div>
              <h1 className="text-gray-300 text-2xl font-bold my-4">{proyek.nama}</h1>
              <p className="text-gray-400 text-base/loose mb-4">{proyek.desk}</p>

              <div className="flex flex-wrap gap-2">
                {proyek.tools.map((tool, index) => (
                  <p
                    key={index}
                    className=" felx py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold"
                  >
                    {tool}
                  </p>
                ))}
              </div>

              <div className="mt-8 text-center">
                <a
                  href={proyek.link} // 👈 ambil dari data
                  target="_blank"     // buka tab baru
                  rel="noopener noreferrer"
                  className="bg-sky-500 p-3 rounded-lg block border border-x-indigo-600 text-center hover:bg-sky-600"
                >
                  Lihat
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>


    </>
  )
}

export default App
