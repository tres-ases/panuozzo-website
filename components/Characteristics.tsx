import React from "react";
import Image from 'next/image'
import image1 from './assets/image-1.webp'
import image2 from './assets/image-2.webp'
import image3 from './assets/image-3.webp'
import image4 from './assets/image-4.webp'
import image5 from './assets/image-5.webp'
import clsx from 'clsx'
import Carta from './Carta';
import Mapa from './Mapa';



function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (<>
    <div>
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length]
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px;min-height: 960px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  </>
  )
}


const Characteristics: React.FC = () => {
  return (
    <div className="bg-white dark:bg-black">
      <div className=" bg-herolight dark:bg-herodark bg-cover bg-no-repeat bg-center ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="flex flex-col justify-center items-center h-[500px]">
              <h1 className="text-[14vw] leading-[15vw] md:text-[12vw] md:leading-[12vw] xl:text-[10vw] xl:leading-[10vw] font-migra font-bold text-black dark:text-white">BIENVENIDOS</h1>
              <p className="text-center  text-black dark:text-white">Panuozzo es una pizzería napolitana ubicada Av. Ramón Picarte 1085, Valdivia. Atiende de lunes a jueves de 11:00 a 20:00 hrs y de viernes a sábado de 11:00 a 22:00 hrs.</p>
            </div>
          </div>
        </div>
        <Photos />
      </div>
      {/* CARTA */}
      <div id="carta" className="pb-10 pt-20">
        <h2 className="font-migra font-bold text-center text-[8vw] sm:text-[70px] text-black dark:text-white">CARTA</h2>
        <Carta />
      </div>

      {/* MAPA */}
      <div id="ubicacion" className="mx-auto max-w-6xl px-10">
        <h2 className="font-migra font-bold text-center text-[8vw] sm:text-[70px] text-black dark:text-white">UBICACIÓN</h2>
        <Mapa />
      </div>

      {/* NOSOTROS */}
      <div id="nosotros" className="mx-auto max-w-6xl px-10">
        <h2 className="font-migra font-bold text-center text-[8vw] sm:text-[70px] text-black dark:text-white">NOSOTROS</h2>
        <div className="columns-3 mb-20">
          <img className="w-full aspect-[3/4] rounded-[12px] sm:rounded-[32px] mb-4" src="img/nosotros/01.jpg" />
          <img className="w-full aspect-square rounded-[12px] sm:rounded-[32px] mb-4" src="img/nosotros/02.jpg" />
          <img className="w-full aspect-square rounded-[12px] sm:rounded-[32px] mb-4" src="img/nosotros/03.jpg" />
          <img className="w-full aspect-[3/4] rounded-[12px] sm:rounded-[32px] mb-4" src="img/nosotros/04.jpg" />
          <img className="w-full aspect-[3/4] rounded-[12px] sm:rounded-[32px] mb-4" src="img/nosotros/05.jpg" />
          <img className="w-full aspect-square rounded-[12px] sm:rounded-[32px] mb-4" src="img/nosotros/06.jpg" />
        </div>
      </div>

      {/* FOTOS */}
      <div className="mx-auto max-w-6xl px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="transition-all duration-700 hover:cursor-pointer hover:scale-105" >
            <a href="https://www.instagram.com/pizzeria.panuozzo/" target="_blank">
              <Image src='/img/Follow-ig.png' width="600px" height="400px" alt="instagram" className="rounded-[32px] overflow-hidden" />
            </a>
          </div>
          <div className="transition-all duration-700 hover:cursor-pointer hover:scale-105" >
            <a href="https://www.facebook.com/panuozzo.pizzeria" target="_blank">
              <Image src='/img/Follow-fb.png' width="600px" height="400px" alt="facebook" className="rounded-[32px]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Characteristics;