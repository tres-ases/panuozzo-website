import React from "react";
import Image from 'next/image'

const categories = [
  {
    name: 'Usamos nuestra propia masa madre',
    imageSrc: '/img/masa-madre.jpeg',
    imageAlt: 'Al igual que las personas no existe una masa madre igual a otra ¡son únicas!',
    description: 'Al igual que las personas no existe una masa madre igual a otra ¡son únicas!',
  },
  {
    name: 'Potenciamos el mercado local',
    imageSrc: '/img/productos-locales.jpeg',
    imageAlt: 'Queremos llevar lo mejor del mercado local a nuestra mesa, enfocado en tu experiencia',
    description: 'Queremos llevar lo mejor del mercado local a nuestra mesa, enfocado en tu experiencia',
  },
  {
    name: 'Nuestros cocineros',
    imageSrc: '/img/nuestro-equipo.jpeg',
    imageAlt: 'La cocina es nuestra pasión, convertimos lo clásico en una experiencia culinaria',
    description: 'La cocina es nuestra pasión, convertimos lo clásico en una experiencia culinaria',
  },
];

const Characteristics: React.FC = () => {
  return (
    <>
      <div className="relative bg-white py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            ¿Qué es lo que hace que nuestra PIZZA sea única?
          </p>
          <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
            Nuestra pasión no es el único ingrediente que hace que nuestros productos <b>100% artesanales</b> se sientan <b>ligeros y sabrosos</b>...
          </p>
        </div>
        <div className="mx-auto max-w-xl pb-16 px-4 sm:pb-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="mt-10 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
            {categories.map((category) => (
              <div key={category.name} className="group block">
                <div
                  aria-hidden="true"
                  className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg opacity-95 group-hover:opacity-100 lg:aspect-w-5 lg:aspect-h-6"
                >
                  <Image src={category.imageSrc} layout="fill"
                         className="h-full w-full object-cover object-center" alt={category.imageAlt}/>
                </div>
                <h3 className="mt-4 text-base font-semibold text-gray-900">{category.name}</h3>
                <p className="mt-2 text-sm text-gray-500">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="bg-white">
      
      </div>
    </>
  );
}

export default Characteristics;
