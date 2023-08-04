import React from "react";

const pizzas = [
  {
    id: 1,
    name: 'Salmón ahumado',
    price: '$11.500',
    description: 'Base de crema, queso Grana Padano rayado, mozzarella, salmón ahumado, alcaparras y albahaca.',
    imageSrc: 'img/products/salmon-ahumado.jpg',
    imageAlt: 'Salmón ahumado',
  },
  {
    id: 2,
    name: 'Burrata',
    price: '$12.400',
    description: 'Salsa de tomate, queso Grana Padano rayado, mozzarella, jamón cocido y queso burrata',
    imageSrc: 'img/products/burrata.jpg',
    imageAlt: 'Burrata',
  },
  {
    id: 3,
    name: 'Prosciutto y pistachos',
    price: '$9.800',
    description: 'Salsa de tomate, queso Grana Padano rayado, mozzarella, jamón crudo, ricota, pistachos y albahaca',
    imageSrc: 'img/products/prosciutto-pistachos.jpg',
    imageAlt: 'Prosciutto y pistachos',
  },
  {
    id: 4,
    name: 'Cebolla roja',
    price: '$8.800',
    description: 'Salsa de tomate, queso Grana Padano rayado, mozzarella, cebolla y pimentón.',
    imageSrc: 'img/products/cebolla-roja.jpg',
    imageAlt: 'Cebolla roja',
  },
  {
    id: 5,
    name: 'Queso azul y champiñones',
    price: '$9.800',
    description: 'Salsa de tomate, queso Grana Padano rayado, mozzarella, queso azul, champiñones y rúcula',
    imageSrc: 'img/products/queso-azul.jpg',
    imageAlt: 'Queso azul y champiñones',
  },
  {
    id: 6,
    name: 'Margherita',
    price: '$9.000',
    description: 'Salsa de tomate, queso Grana Padano rayado, mozzarella, albahaca y aceite de oliva',
    imageSrc: 'img/products/pizza_margherita.png',
    imageAlt: 'Margherita',
  },
  {
    id: 7,
    name: 'Marinara',
    price: '$8.600',
    description: 'Salsa de tomate, ajo y aceite de oliva',
    imageSrc: 'img/products/marinara.jpg',
    imageAlt: 'Marinara',
  },
  {
    id: 8,
    name: 'Diavola',
    price: '$9.700',
    description: 'Salsa de tomate, queso Grana Padano rayado, mozzarella y salame picante ',
    imageSrc: 'img/products/diavola.jpg',
    imageAlt: 'Diavola',
  },
  {
    id: 9,
    name: 'Prosciutto cotto e funghi',
    price: '$9.800',
    description: 'Salsa de tomate, queso Grana Padano rayado, mozzarella, jamón cocido y champiñones',
    imageSrc: 'img/products/prosciutto-cotto.jpg',
    imageAlt: 'Prosciutto cotto e funghi',
  },
  {
    id: 10,
    name: 'Prosciutto e rucola',
    price: '$10.500',
    description: 'Salsa de tomate, queso Grana Padano rayado, mozzarella, jamón crudo, rúcula y aceite de oliva.',
    imageSrc: 'img/products/prosciutto-rucola.jpg',
    imageAlt: 'Prosciutto e rucola',
  },
]


const brebajes = [
  { name: 'Agua mineral', price: '$1.600', description: 'Con y sin gas', bgImg: 'img/products/agua-mineral.png', imageAlt: 'agua mineral', },
  { name: 'Bebidas', price: '$2.200', description: 'Gaseosas con y sin azúcar', bgImg: 'img/products/bebidas.png', imageAlt: 'bebidas', },
  { name: 'Jugo de fruta', price: '$3.300', description: 'Según disponibilidad', bgImg: 'img/products/jugos.png', imageAlt: 'jugos', },
  { name: 'Cerveza artesanal Raíces de Chancoyán', price: '$3.000', description: 'Botella de 330cc.', bgImg: 'img/products/cerveza.png', imageAlt: 'cerveza', },
]

const antipasti = [
  { name: 'Ají relleno', price: '$6.500', description: '3 ají verde rellenos con una mezcla de queso crema y grana padano condimentado con pimienta', bgImg: 'img/products/aji-relleno.png', imageAlt: 'ají relleno', },
  { name: 'Ensalada caprese', price: '$6.000', description: 'Ensalada de tomates de temporada acompañado de mozzarella fior di latte y albahaca', bgImg: 'img/products/ensalada-caprese.png', imageAlt: 'ensalada caprese', },
  { name: 'Bruschetta', price: '$5.500', description: '4 panes horneados condimentados con ajo y aceite de oliva en sus 2 versiones (tomate - albahaca - fior de latte y/o rúcula - queso crema)', bgImg: 'img/products/bruschetta.png', imageAlt: 'bruschetta', },
  { name: 'Provoleta', price: '$6.000', description: 'Un clásico conformado de queso añejo derretido al horno acompañado de tomate picado y orégano', bgImg: 'img/products/provoletta.png', imageAlt: 'provoletta', },
]

const panuozzo = [
  { name: 'Caprese', normale: '$5.600', description: 'Queso mozzarella, tomate, albahaca y aceite de oliva', bgImg: 'img/products/panuozzo_caprese.png', imageAlt: 'panuozzo caprese', },
  { name: 'Jamón', normale: '$5.900', description: 'Queso mozzarella, jamón cocido, tomate y rúcula', bgImg: 'img/products/panuozzo_jamon.png', imageAlt: 'panuozzo jamón', },
  { name: 'Salame', normale: '$6.100', description: 'Queso mozzarella, salame picante, tomate y rúcula', bgImg: 'img/products/salame.png', imageAlt: 'panuozzo salame', },
  { name: 'Prosciutto', normale: '$6.400', description: 'Queso crema, prosciutto, tomate y rúcula', bgImg: 'img/products/prosciutto.png', imageAlt: 'panuozzo prosciutto', },
  { name: 'Salmón ahumado', normale: '$6.400', description: 'Queso crema, salmón ahumado y rúcula', bgImg: 'img/products/salmon-ahumado.png', imageAlt: 'panuozzo salmon ahumado', },
  { name: 'Cebolla pimentón', normale: '$5.600', description: 'Mozzarella, cebolla y pimentón', bgImg: 'img/products/image-template', imageAlt: 'panuozzo cebolla pimenton', },
  { name: 'Alleato', normale: '$3.000', description: 'Jamón cocido y queso mantecoso', bgImg: 'img/products/image-template', imageAlt: 'panuozzo alleato', },
]

const postres = [
  { name: 'Affogato', price: '$3.900', description: 'Helado de vainilla cubierto con un shot de espresso y polvoreado con chocolate amargo', bgImg: 'img/products/affogato.png', imageAlt: 'affogato', },
  { name: 'Tiramisú', price: '$4.500', description: 'El clásico postre italiano hecho en casa con base de queso mascarpone', bgImg: 'img/products/tiramisu.png', imageAlt: 'tiramisú', },
]

const teycafe = [
  { name: 'Té de hoja', price: '$2.600', description: 'Versiones de Té Negro, Verde, Blanco y Rojo a elección según carta de Té', bgImg: 'img/products/te.png', imageAlt: 'te de hoja', },
  { name: 'Chai latte', price: '$2.900', description: 'Té Masala Chai, Leche texturizada y terminado con canela en polvo', bgImg: 'img/products/chai-latte.png', imageAlt: 'chai latte', },
  { name: 'Espresso', price: '$1.600', description: 'Extracción de café sin diluir', bgImg: 'img/products/espresso.png', imageAlt: 'espresso', },
  { name: 'Ristretto', price: '$1.600', description: 'Primera mitad de la extracción de un espresso, obteniendo la dulzura e intensidad acentuada de la primera fase de la extracción', bgImg: 'img/products/ristretto.png', imageAlt: 'ristretto', },
  { name: 'Lungo', price: '$1.600', description: 'Un shot de espresso diluido en 25cc de agua', bgImg: 'img/products/lungo.png', imageAlt: 'lungo', },
  { name: 'Espresso Doppio', price: '$2.200', description: 'Doble shot de espresso', bgImg: 'img/products/espresso-doppio.png', imageAlt: 'espresso doppio', },
  { name: 'Americano', price: '$2.500', description: 'Doble shot de espresso diluido en 110cc de agua', bgImg: 'img/products/americano.png', imageAlt: 'americano', },
  { name: 'Espresso macchiato', price: '$1.800', description: 'Espresso manchado con una pequeña cantidad de leche caliente y espumada', bgImg: 'img/products/espresso-macchiato.png', imageAlt: 'espresso macchiato', },
  { name: 'Cappuccino', price: '$2.500', description: 'Espresso, leche texturizada y una generosa capa de espuma de leche', bgImg: 'img/products/cafe_cappuccino.png', imageAlt: 'cappuccino', },
  { name: 'Latte', price: '$2.900', description: 'Espresso, leche texturizada y una delgada capa de espuma de leche', bgImg: 'img/products/cafe_latte.png', imageAlt: 'latte', },
  { name: 'Mocaccino', price: '$3.500', description: 'Base de salsa de chocolate, shot de espresso, leche texturizada, crema chantillí y terminado con chocolate amargo en polvo', bgImg: 'img/products/mocaccino.png', imageAlt: 'mocaccino', },
]

export default function Productos() {
  return (
    <div className="bg-white dark:bg-black ">
      <div className="mx-auto py-16 px-10 max-w-6xl">
        <h2 id="products-heading" className="sr-only">
          Productos
        </h2>
        {/* OTROS PRODUCTOS */}
        <div className="rounded-xl border border-gray-200 dark:border-white/10 overflow-hidden">
          <button type="button" className="w-[100%] flex flex-row items-middle h-14 sm:h-16 hover:bg-gray-50 dark:hover:bg-white/5 transition-all p-3 hs-collapse-toggle" data-hs-collapse="#hs-collapse-beber">
            <h3 className="bg-[#FF3300] rounded-full text-white font-migra font-bold text-xl py-[2px] px-[13px] mr-2">1</h3>
            <h3 className="font-bold font-migra uppercase text-lg sm:text-2xl leading-6 mb-10 text-left mt-1 text-black dark:text-white"> Para beber</h3>
          </button>
          {/* agregar hidden al div abajo */}
          <div id="hs-collapse-beber" className="hs-collapse  w-full overflow-hidden transition-[height] duration-300 p-3" aria-labelledby="hs-collapse">
            <ul role="list" className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-2">
              {brebajes.map((brebaje) => (
                <li key={brebaje.name} className="col-span-1 flex rounded-md border border-gray-200 dark:border-white/10 bg-white dark:bg-[#1c1c1c]">
                  <div
                    className='hidden sm:flex w-16 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-bold text-white overflow-hidden'
                  >
                    <img
                      src={brebaje.bgImg}
                      alt={brebaje.imageAlt}
                      className="h-full w-full object-cover object-center group-hover:opacity-75"
                    />
                  </div>
                  <div className="flex flex-1 flex-shrink items-center justify-between rounded-r-md">
                    <div className="flex-1 px-4 py-2 text-sm">
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        {brebaje.name}
                      </h3>
                      <p className="text-sm italic text-gray-500 dark:text-gray-400">{brebaje.description}</p>
                    </div>
                  </div>
                  <div className="flex-shrink-0 pr-2 font-bold flex items-center">
                    {brebaje.price}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="rounded-xl border border-gray-200 dark:border-white/10 overflow-hidden mt-6">
          <button type="button" className="w-[100%] flex flex-row items-center h-16 sm:h-16 hover:bg-gray-50 dark:hover:bg-white/5 transition-all p-3 hs-collapse-toggle" data-hs-collapse="#hs-collapse-antipasti">
            <h3 className="bg-black/20 dark:bg-white/20 rounded-full text-white font-migra font-bold text-xl py-[2px] px-[10px] mr-2">2</h3>
            <h3 className="font-bold font-migra uppercase sm:text-m text-left text-lg sm:text-2xl leading-6 mt-1 text-black/30 dark:text-white/30"> Antipasti / Appetizers (PRONTO)</h3>
          </button>
          {/* agregar hidden al div abajo */}
          <div id="hs-collapse-antipasti" className="hs-collapse  w-full overflow-hidden transition-[height] duration-300 p-3" aria-labelledby="hs-collapse">
            <ul role="list" className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-2">
              {antipasti.map((antipasti) => (
                <li key={antipasti.name} className="col-span-1 flex rounded-md border border-gray-200 dark:border-white/10 bg-white dark:bg-[#1c1c1c]">
                  <div
                    className='hidden sm:flex w-16 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-bold text-white overflow-hidden'
                  >
                    <img
                      src={antipasti.bgImg}
                      alt={antipasti.imageAlt}
                      className="h-full w-full object-cover object-center group-hover:opacity-75"
                    />
                  </div>
                  <div className="flex flex-1 flex-shrink items-center justify-between rounded-r-md">
                    <div className="flex-1 px-4 py-2 text-sm">
                      <h3 className="font-semibold text-black/30 dark:text-white/30">
                        {antipasti.name} (PRONTO)
                      </h3>
                      <p className="text-sm italic text-gray-500 dark:text-gray-400">{antipasti.description}</p>
                    </div>

                  </div>
                  <div className="flex-shrink-0 pr-2 font-bold flex items-center">
                    {antipasti.price}
                  </div>
                </li>
              ))}
            </ul>

          </div>
        </div>
        <div className="rounded-xl border border-gray-200 dark:border-white/10 overflow-hidden mt-6">
          <button type="button" className="w-[100%] flex flex-row items-center h-30 sm:h-20 hover:bg-gray-50 dark:hover:bg-white/5 transition-all p-3 hs-collapse-toggle" data-hs-collapse="#hs-collapse-panuozzo">
            <h3 className="bg-[#FF3300] rounded-full text-white font-migra font-bold text-xl py-[2px] px-[10px] mr-2">3</h3>
            <div className="text-left text-black dark:text-white">
              <h3 className="font-bold font-migra uppercase text-lg sm:text-2xl leading-6 text-left"> Panuozzo</h3>
              <p className="text-sm sm:text-base">Masa fermentada de pizza en su versión de pan relleno y horneado en 2 etapas</p>
            </div>
          </button>
          {/* agregar hidden al div abajo */}
          <div id="hs-collapse-panuozzo" className="hs-collapse  w-full overflow-hidden transition-[height] duration-300 p-3" aria-labelledby="hs-collapse">
            <ul role="list" className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-2">
              {panuozzo.map((panuozzo) => (
                <li key={panuozzo.name} className="col-span-1 flex rounded-md border border-gray-200 dark:border-white/10 bg-white dark:bg-[#1c1c1c]">
                  <div
                    className='hidden sm:flex w-16 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-bold text-white overflow-hidden'
                  >
                    <img
                      src={panuozzo.bgImg}
                      alt={panuozzo.imageAlt}
                      className="h-full w-full object-cover object-center group-hover:opacity-75"
                    />
                  </div>
                  <div className="flex flex-1 flex-shrink items-center justify-between rounded-r-md">
                    <div className="flex-1 px-4 py-2 text-sm">
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        {panuozzo.name}
                      </h3>
                      <p className="text-sm italic text-gray-500 dark:text-gray-400">{panuozzo.description}</p>
                    </div>

                  </div>
                  <div className="flex-shrink-0 px-4 py-2 text-sm sm:text-base text-right leading-snug font-bold flex flex-col items-center justify-center text-black dark:text-white">
                    <p>{panuozzo.normale}</p>
                  </div>
                </li>
              ))}
            </ul>

          </div>
        </div>
        {/* PIZZAS */}
        <div className="rounded-xl border border-gray-200 dark:border-white/10 overflow-hidden mt-6">
          <button type="button" className="w-[100%] flex flex-row items-center h-30 sm:h-20 hover:bg-gray-50 dark:hover:bg-white/5 transition-all p-3 hs-collapse-toggle" data-hs-collapse="#hs-collapse-pizzas">
            <h3 className="bg-[#FF3300] rounded-full text-white font-migra font-bold text-xl py-[2px] px-[10px] mr-2">4</h3>
            <div className="text-left text-black dark:text-white">
              <h3 className="font-bold font-migra uppercase text-lg sm:text-2xl leading-6 text-left"> Nuestras Pizzas</h3>
              <p className="text-sm sm:text-base">Tradiciones italianas y especialidades</p>
            </div>
          </button>
          {/* agregar hidden al div abajo */}
          <div id="hs-collapse-pizzas" className="hs-collapse  w-full overflow-hidden transition-[height] duration-300 p-3 pb-6" aria-labelledby="hs-collapse">
            <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

              {pizzas.map((pizza) => (
                <a key={pizza.id} className="group">
                  <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg sm:aspect-w-2 sm:aspect-h-3">
                    <img
                      src={pizza.imageSrc}
                      alt={pizza.imageAlt}
                      className="h-full w-full object-cover object-center group-hover:opacity-75"
                    />
                  </div>
                  <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900 dark:text-white">
                    <h3>{pizza.name}</h3>
                    <p className="font-bold">{pizza.price}</p>
                  </div>
                  <p className="mt-1 text-sm italic text-gray-500 dark:text-gray-400">{pizza.description}</p>
                </a>
              ))}
            </div>
          </div>
          <div className="text-black dark:text-white p-6 border-t border-orange-500 text-center">
            <img src="/img/extras.png" width='400px' alt="extras" className="mx-auto" />
            <h4 className="font-migra font-bold text-3xl">AGREGA INGREDIENTES:</h4>
            <ul>
              <li>Mozzarella, salame picante o jamón crudo: <b>$1.800</b></li>
              <li>Ricotta o queso azul: <b>$1.200</b></li>
              <li>Champiñones, jamón cocido o rúcula: <b>$1.000</b></li>
              <li>Albahaca, pistachos, alcaparras, cebolla o pimentón: <b>$500</b></li>
            </ul>
          </div>
        </div>
        <div className="rounded-xl border border-gray-200 dark:border-white/10 overflow-hidden mt-6">
          <button type="button" className="w-[100%] flex flex-row items-center h-14 sm:h-16 hover:bg-gray-50 dark:hover:bg-white/5 transition-all p-3 hs-collapse-toggle" data-hs-collapse="#hs-collapse-postres">
            <h3 className="bg-[#FF3300] rounded-full text-white font-migra font-bold text-xl py-[2px] px-[10px] mr-2">5</h3>
            <div className="text-left text-black dark:text-white">
              <h3 className="font-bold font-migra uppercase text-lg sm:text-2xl leading-6 text-left"> Postres</h3>
            </div>
          </button>
          {/* agregar hidden al div abajo */}
          <div id="hs-collapse-postres" className="hs-collapse  w-full overflow-hidden transition-[height] duration-300 p-3" aria-labelledby="hs-collapse">
            <ul role="list" className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-2">
              {postres.map((postres) => (
                <li key={postres.name} className="col-span-1 flex rounded-md border border-gray-200 dark:border-white/10 bg-white dark:bg-[#1c1c1c]">
                  <div
                    className='hidden sm:flex w-16 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-bold text-white overflow-hidden'
                  >
                    <img
                      src={postres.bgImg}
                      alt={postres.imageAlt}
                      className="h-full w-full object-cover object-center group-hover:opacity-75"
                    />
                  </div>
                  <div className="flex flex-1 flex-shrink items-center justify-between rounded-r-md">
                    <div className="flex-1 px-4 py-2 text-sm">
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        {postres.name}
                      </h3>
                      <p className="text-sm italic text-gray-500 dark:text-gray-400">{postres.description}</p>
                    </div>

                  </div>
                  <div className="flex-shrink-0 pr-2 font-bold flex items-center">
                    {postres.price}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="rounded-xl border border-gray-200 dark:border-white/10 overflow-hidden mt-6">
          <button type="button" className="w-[100%] flex flex-row items-center h-14 sm:h-16 hover:bg-gray-50 dark:hover:bg-white/5 transition-all p-3 hs-collapse-toggle" data-hs-collapse="#hs-collapse-teycafe">
            <h3 className="bg-[#FF3300] rounded-full text-white font-migra font-bold text-xl py-[2px] px-[10px] mr-2">6</h3>
            <div className="text-left text-black dark:text-white">
              <h3 className="font-bold font-migra uppercase text-lg sm:text-2xl leading-6 text-left" > Té y café</h3>
            </div>
          </button>
          {/* agregar hidden al div abajo */}
          <div id="hs-collapse-teycafe" className="hs-collapse  w-full overflow-hidden transition-[height] duration-300 p-3" aria-labelledby="hs-collapse">
            <ul role="list" className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-2">
              {teycafe.map((teycafe) => (
                <li key={teycafe.name} className="col-span-1 flex rounded-md border border-gray-200 dark:border-white/10 bg-white dark:bg-[#1c1c1c]">
                  <div
                    className='hidden sm:flex w-16 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-bold text-white overflow-hidden'
                  >
                    <img
                      src={teycafe.bgImg}
                      alt={teycafe.imageAlt}
                      className="h-full w-full object-cover object-center group-hover:opacity-75"
                    />
                  </div>
                  <div className="flex flex-1 flex-shrink items-center justify-between rounded-r-md">
                    <div className="flex-1 px-4 py-2 text-sm">
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        {teycafe.name}
                      </h3>
                      <p className="text-sm italic text-gray-500 dark:text-gray-400">{teycafe.description}</p>
                    </div>

                  </div>
                  <div className="flex-shrink-0 pr-2 font-bold flex items-center">
                    {teycafe.price}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

    </div>
  )
}