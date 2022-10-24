import React, { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { MenuItem } from "./NavBar.types";

const menuItems: MenuItem[] = [
  {
    id: 'inicio',
    nombre: 'Inicio',
    href: '/'
  }, {
    id: 'carta',
    nombre: 'Carta',
    href: '/carta'
  }, {
    id: 'contacto',
    nombre: 'Contáctanos',
    href: '/contacto'
  }
]

const NavBar: React.FC = () => {
  return (
    <header className="border-b-2 border-b-grey-300">
      <Popover className="relative">
        <div
          className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span className="text-primary font-bold">PANUOZZO</span>
            </a>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button
              className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Abrir menú</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true"/>
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden space-x-10 md:flex">
            {menuItems.map(item => (
              <a href={item.href} key={item.id} className="text-base font-medium text-gray-500 hover:text-gray-900">
                {item.nombre}
              </a>
            ))}
          </Popover.Group>
          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0"/>
        </div>
        
        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute inset-x-0 top-0 z-30 origin-top-right transform p-2 transition md:hidden"
          >
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pt-5 pb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/mark.svg?from-color=purple&from-shade=600&to-color=indigo&to-shade=600&toShade=600"
                      alt="Your Company"
                    />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button
                      className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Cerrar menú</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true"/>
                    </Popover.Button>
                  </div>
                </div>
              </div>
              <div className="py-6 px-5">
                <div className="grid grid-cols-1 gap-4">
                  {menuItems.map(item => (
                    <a href={item.href} key={item.id} className="text-base font-medium text-gray-900 hover:text-gray-700">
                      {item.nombre}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </header>
  );
}

export default NavBar;
