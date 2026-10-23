import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-white">
      <div className="text-blue-950 font-bold flex justify-between items-center gap-20 pl-10 pr-10 bg-white h-20">
        <img
          src="/logo.png"
          alt="log"
          width={150}
          height={150}
        />

        <div className="flex items-center gap-12 pl-40 font-semibold">
          <a href="#" className="hover:text-red-600 transition-colors">Beranda</a>
          <a href="#" className="hover:text-red-600 transition-colors">Profil</a>
          <a href="#" className="hover:text-red-600  transition-colors">Kebijakan</a>
          <a href="#" className="hover:text-red-600  transition-colors">Galeri</a>
          <a href="#" className="hover:text-red-600  transition-colors">Event</a>
          <a href="#" className="hover:text-red-600  transition-colors">Layanan</a>
        </div>

        <input className="bg-gray-200 border-gray-400 pl-2 pt-2 pr-2 flex rounded-full text-black"
          type="text" placeholder="searching..." />
      </div>
      <div>
        <img src="/hometop-bg.png"
          alt="bg"
          className="pr-60"
          w-auto
          height={100}
        />
      </div>
      <div className="pl-10 justify-between flex ">
        <img
          src="/hometop.img@2.png"
          alt="orang"
          className="w-auto h-100"
        />
       <div>
      <h1 className="text-3xl font-bold text-[#25286C]">
        BERGERAK,BERSATU,BERPRESTASI <br />
      </h1>

      <p className="mt-3 text-xl text-[#25286C] leading-6">
        Kementerian Pemuda dan Olahraga berfokus pada pengembangan bakat generasi muda, pembinaan prestasi olahraga, dan kemajuan kegiatan kepemudaan di seluruh Indonesia.
      </p>

      <a href="" className="mt-10  bg-[#25286C] text-white px-10 py-4 rounded-full">
        PROFIL KEMENPORA 
      </a>
    </div>
    </div>
    </main>
  );
}