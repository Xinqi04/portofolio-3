import DataImage from "./data";
import {listTools, listProyek} from "./data"

function App() {

  return (
    <>
    <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
      <div>
        <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
         <img src={DataImage.HeroImage} alt="Poto Profile" className="w-10 rounded-md" />
         <q>Kamu adalah Tokoh utama dalam kehidupan mu</q>
        </div>
        <h1 className="text-5xl/tight font-bold mb-6">Hi, Saya Riza Anwar Fadil</h1>
        <p className="text-base/loose mb-6">Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
        rem consequuntur odit accusantium.
        </p>
        <div className="flex items-center justify-center md:justify-start sm:gap-4 gap-2">
          <a href="" className="bg-violet-700 w-32 text-center p-4 rounded-2xl hover:bg-violet-500">
            CV <i className="ri-download-line"></i></a>
          <a href="" className="bg-zinc-700 w-32 text-center p-4 rounded-2xl hover:bg-zinc-500">
            Project</a>
        </div>
      </div>
      <img src={DataImage.HeroImage} alt="Poto Profile" className="w-[500px] md:ml-auto" loading="lazy" />
    </div>

    {/* About */}
    <div className="about mt-32 py-16 px-6 bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-900">
        {/* Teks About */}
        <div className="space-y-4 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-violet-400 animate-fadeInUp">
            About Me
          </h2>
          <p className="text-gray-300 leading-relaxed animate-fadeInUp delay-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quam quia nisi voluptate soluta? 
            Labore dolor, nam ut autem ipsa tempore amet illum temporibus omnis est repellat veritatis.
            Reiciendis voluptas animi, sint harum repellat itaque nobis incidunt accusantium nostrum 
            commodi expedita omnis hic magnam blanditiis quasi consequuntur vel non quisquam.
          </p>
        </div>
    </div>
    <div className="tools mt-32">
      <h1 className="text-4xl/snug font-bold mb-4 text-white">Tools Yang dipakai</h1>
      {/* <p className="w-2/5 text-base/loose opacity-50 text-white">Berikut ini beberapa tools yang biasa saya gunakan</p> */}
      <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">

        {listTools.map(tool => (
          <div className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md group
          hover:bg-zinc-800 group" key={tool.id}>
            <img src={tool.gambar} alt="Tools Image" className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900" loading="lazy"/>
            <div>
              <h4 className="text-white font-bold">{tool.nama}</h4>
              <p className="text-white opacity-50">{tool.ket}</p>
            </div>
          </div>

        ))}
      </div>
    </div>

    <div className="proyek mt-32 py-10">
      <h1 className="text-center text-4xl font-bold mb-2">Projects</h1>
      <p className="text-base/loose text-center opacity-50">Berikut ini beberapa project yang telah saya buat.</p>
      <div className="proyek-box mt-14 grid lg:grid-cols-3 gap-4 sm:grid-cols-2 grid-cols-1">
        {listProyek.map(proyek => (
          <div key={proyek.id} className="p-4 bg-zinc-800 rounded-md ">
            <img src={proyek.gambar} alt="Project Image" loading="lazy"/>
            <div>
              <h1 className="text-white text-2xl font-bold my-4">{proyek.nama}</h1>
              <p className="text-white text-base/loose mb-4">{proyek.desk}</p>
              <div className="flex flex-wrap gap-2">
                {proyek.tools.map((tool, index) => (
                  <p key={index} className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold">{tool}</p>
                ))}
              </div>
              <div className="mt-8 text-center">
                <a href="#" className="bg-violet-700 p-3 rounded-lg block border
                border-x-indigo-600 hover:bg-violet-600">Lihat Web</a>
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
