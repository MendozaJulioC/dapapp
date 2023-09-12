'use client'

import { useEffect, useState } from "react";
import { signOut } from "next-auth/react"
import { HiOutlineArrowsExpand } from 'react-icons/hi'
import Link from "next/link"

const Page = () => {

useEffect(()=>{ getAvancePlan()})
const [avanceplan, setAvancePlan]= useState(null)
const [finanzas, setFinanzas]= useState(null)
const [corte, setCorte]= useState(null)


async function getAvancePlan(){
  try {
    const res = await fetch(`https://api.avanzamedellin.info/pi/api/total`);
    const avance = await res.json();
    setAvancePlan(parseFloat(avance.data[0].total_plan).toFixed(2))
    getEjecucionFinanciera()


  } catch (error) {
    console.error(' Error getAvancePlan:', error);
  }
}


async function getEjecucionFinanciera (){
  try {

    const res = await fetch(`https://api.avanzamedellin.info/pa/api/avancefinanciero`);
    const finanzas = await res.json();
    let avancefinanzas = ( (parseFloat(finanzas.data[0].pptoejecutado))/parseFloat(finanzas.data[0].pptoajustado)  )*100
    setFinanzas(parseFloat(avancefinanzas).toFixed(2))
    getCorte()
  } catch (error) {
    console.error('Error getEjecucionFinanciera: ', error);
  }
}

async function getCorte(){
  try {
    const res = await fetch(`https://api.avanzamedellin.info/pi/api/avance/corte`)
    const corteactual = await res.json();
    let corteavance= new Date(corteactual.data[0].corte) 
    let mesavance = corteavance.getMonth(corteavance)+1
    let dia = corteavance.getDate()
    corteavance.setDate(dia+1)
    setCorte( corteavance.toLocaleDateString("en-US", { day:'numeric',month : 'short',year: 'numeric' }));
  } catch (error) {
    console.error('Error getCorte: ', error);
  }
}


  return (
    <>
      <section className=" bg-gray-100">
        <div className="mx-auto max-w-7xl py-10 sm:px-6 sm:py-20 lg:px-8">
          <div className="px-4 py-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <hr />
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                <div className="rounded-2xl bg-sky-50 shadow-lg shadow-blue-500/50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                  <div className="mx-auto max-w-xs px-8">
                    <p className="text-base font-semibold text-gray-600">
                      Plan de Desarrollo
                    </p>
                    <p className="mt-6 flex items-baseline justify-center gap-x-2">
                      <span className="text-5xl font-bold tracking-tight text-gray-900">
                   {avanceplan}
                      </span>
                      <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                        %
                      </span>
                    </p>
                    <button
                       className="mt-10 block w-full rounded-md bg-cyan-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        <Link href="/dashplan">Get access</Link>
                    </button>
                    <p className="mt-6 text-xs leading-5 text-gray-600">
                   {corte} 
                    </p>
                  </div>
                </div>
              </div>

              <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                <div className="rounded-2xl bg-sky-50 shadow-lg shadow-blue-500/50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                  <div className="mx-auto max-w-xs px-8">
                    <p className="text-base font-semibold text-gray-600">
                      Proyectos
                    </p>
                    <p className="mt-6 flex items-baseline justify-center gap-x-2">
                      <span className="text-5xl font-bold tracking-tight text-gray-900">
                        503
                      </span>
                      <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600"></span>
                    </p>
                    <button
                       className="mt-10 block w-full rounded-md bg-blue-400 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        <Link href="/proyectos/dashproyectos">Get access</Link>
                    </button>
                    <p className="mt-6 text-xs leading-5 text-gray-600">
                    {corte} 
                    </p>
                  </div>
                </div>
              </div>

              <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                <div className="rounded-2xl bg-sky-50 shadow-lg shadow-blue-500/50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                  <div className="mx-auto max-w-xs px-8">
                    <p className="text-base font-semibold text-gray-600">
                      Inversion Publica
                    </p>
                    <p className="mt-6 flex items-baseline justify-center gap-x-2">
                      <span className="text-5xl font-bold tracking-tight text-gray-900">
                     {finanzas}
                      </span>
                      <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                        %
                      </span>
                    </p>
                    <button
                       className="mt-10 block w-full rounded-md bg-emerald-400 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        <Link href="/dashplan">Get access</Link>
                    </button>
                    <p className="mt-6 text-xs leading-5 text-gray-600">
                    {corte} 
                    </p>
                  </div>
                </div>
              </div>

              <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                <div className="rounded-2xl bg-sky-50 shadow-lg shadow-blue-500/50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                  <div className="mx-auto max-w-xs px-8">
                    <p className="text-base font-semibold text-gray-600">
                      Indicadores Medellin
                    </p>
                    <p className="mt-6 flex items-baseline justify-center gap-x-2">
                      <span className="text-5xl font-bold tracking-tight text-gray-900">
                        1259
                      </span>
                      <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600"></span>
                    </p>
                    <button
                       className="mt-10 block w-full rounded-md bg-amber-400 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        <Link href="/dashindicador">Get access</Link>
                    </button>
                    <p className="mt-6 text-xs leading-5 text-gray-600">
                      Fichas metodologicas
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-8">

              <div className="text-center">
                <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-teal-accent-400 sm:w-12 sm:h-12">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#1D5B79"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h6 className="text-4xl font-bold text-deep-purple-accent-400">
                  46.68
                </h6>
                <p className="mb-2 font-bold text-md">IMCV</p>
                <p className="text-gray-700">
                  Indice Multidimensional de Condiciones de Vida
                </p>
                  <button
                   className="flex items-center justify-center px-3 py-1 text-center text-sm font-semibold  bg-gray-300 w-48 text-white mx-auto  mt-12  mb-6  hover:bg-gray-400    rounded-md bg-cyan-600  text-sm font-semibold  shadow-sm hover:bg-indigo-500 focus-visible:outline  "
                  
                  >
                      
                  <span>
                    <HiOutlineArrowsExpand className="h-6 w-6 text-sky-500 mr-2" />
                  </span>
                  <span className="text-connect"><Link href="/imccv">ampliar</Link></span>
              
                </button>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-teal-accent-400 sm:w-12 sm:h-12">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#1D5B79"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h6 className="text-4xl font-bold text-deep-purple-accent-400">
                 9.83
                </h6>
                <p className="mb-2 font-bold text-md">IPM</p>
                <p className="text-gray-700">
                  Indice de Pobreza Multidimensional
                </p>
                <button className="flex items-center justify-center px-3 py-1 text-center text-sm font-semibold  bg-gray-300 w-48 text-white rounded-md mx-auto  mt-12  mb-6  hover:bg-gray-400  mt-10 block  rounded-md bg-cyan-600  text-sm font-semibold  shadow-sm hover:bg-indigo-500 focus-visible:outline  ">
                  <span>
                    <HiOutlineArrowsExpand className="h-6 w-6 text-sky-500" />
                  </span>
                  <span className="text-connect"><Link href="/ipm">ampliar</Link></span>
                </button>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-teal-accent-400 sm:w-12 sm:h-12">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#1D5B79"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h6 className="text-4xl font-bold text-deep-purple-accent-400">
                  7.4
                </h6>
                <p className="mb-2 font-bold text-md">IPExt</p>
                <p className="text-gray-700">
                  Indice de Pobreza Extrema
                  <br /><br />
                </p>
                <button className="flex items-center justify-center px-3 py-1 text-center text-sm font-semibold  bg-gray-300 w-48 text-white rounded-md mx-auto  mt-12  mb-6  hover:bg-gray-400  mt-10 block  rounded-md bg-cyan-600  text-sm font-semibold  shadow-sm hover:bg-indigo-500 focus-visible:outline  ">
                  <span>
                    <HiOutlineArrowsExpand className="h-6 w-6 text-sky-500" />
                  </span>
                  <span className="text-connect"> ampliar</span>
                </button>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-teal-accent-400 sm:w-12 sm:h-12">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#1D5B79"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h6 className="text-4xl font-bold text-deep-purple-accent-400">
                 0.52
                </h6>
                <p className="mb-2 font-bold text-md">Coeficiente de Gini</p>
                <p className="text-gray-700">
                  Permite conocer la desigualdad en terminos de ingresos
                </p>
                <button className="flex items-center justify-center px-3 py-1 text-center text-sm font-semibold  bg-gray-300 w-48 text-white rounded-md mx-auto  mt-12  mb-6  hover:bg-gray-400  mt-10 block  rounded-md bg-cyan-600  text-sm font-semibold  shadow-sm hover:bg-indigo-500 focus-visible:outline  ">
                  <span>
                    <HiOutlineArrowsExpand className="h-6 w-6 text-sky-500" />
                  </span>
                  <span className="text-connect"> ampliar</span>
                </button>
              </div>

              {/* poblacion  */}
              <div className="text-center">
                <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-teal-accent-400 sm:w-12 sm:h-12">
                  <svg
                    className="w-8 h-8 text-teal-900 sm:w-10 sm:h-10"
                    stroke="#1F6E8C"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
                <h6 className="text-4xl font-bold text-deep-purple-accent-400">
                  2.653.729
                </h6>
                <p className="mb-2 font-bold text-md">Poblacion</p>
                <p className="text-gray-700">
                Proyecciones de Población de Medellín Vigente correspondiente a las 16 Comunas y 5 Corregimientos de la ciudad de Medellín.
                </p>
                <button className="flex items-center justify-center px-3 py-1 text-center text-sm font-semibold  bg-gray-300 w-48 text-white rounded-md mx-auto  mt-12  mb-6  hover:bg-gray-400  mt-10 block  rounded-md bg-cyan-600  text-sm font-semibold  shadow-sm hover:bg-indigo-500 focus-visible:outline  ">
                  <span>
                    <HiOutlineArrowsExpand className="h-6 w-6 text-sky-500" />
                  </span>
                  <span className="text-connect"> ampliar</span>
                </button>
              </div>

              {/* tasa de desempleo */}
              <div className="text-center">
                <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-teal-accent-400 sm:w-12 sm:h-12">
                  <svg
                    className="w-8 h-8 text-teal-900 sm:w-10 sm:h-10"
                    stroke="#FF2171"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
                <h6 className="text-4xl font-bold text-deep-purple-accent-400">
                  11.1
                </h6>
                <p className="mb-2 font-bold text-md">Tasa de desempleo</p>
                <p className="text-gray-700">
                Es la relación porcentual entre el número de personas que están buscando trabajo (DS), y el número de personas que integran la fuerza laboral (PEA). 
                </p>
                <button className="flex items-center justify-center px-3 py-1 text-center text-sm font-semibold  bg-gray-300 w-48 text-white rounded-md mx-auto  mt-12  mb-6  hover:bg-gray-400  mt-10 block  rounded-md bg-cyan-600  text-sm font-semibold  shadow-sm hover:bg-indigo-500 focus-visible:outline  ">
                  <span>
                    <HiOutlineArrowsExpand className="h-6 w-6 text-sky-500" />
                  </span>
                  <span className="text-connect"> ampliar</span>
                </button>
              </div>

              {/* extension territorial */}
              <div className="text-center">
                <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-teal-accent-400 sm:w-12 sm:h-12">
                  <svg
                    className="w-8 h-8 text-teal-900 sm:w-10 sm:h-10"
                    stroke="#213363"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
                <h6 className="text-4xl font-bold text-deep-purple-accent-400">
               0.71
                </h6>
                <p className="mb-2 font-bold text-md">IDH</p>
                <p className="text-gray-700">
                 Indice de Desarrollo HUmano <br /> <br /> <br /><br />
                  <br />
                </p>
                <button className="flex items-center justify-center px-3 py-1 text-center text-sm font-semibold  bg-gray-300 w-48 text-white rounded-md mx-auto  mt-12  mb-6  hover:bg-gray-400  mt-10 block  rounded-md bg-cyan-600  text-sm font-semibold  shadow-sm hover:bg-indigo-500 focus-visible:outline  ">
                  <span>
                    <HiOutlineArrowsExpand className="h-6 w-6 text-sky-500" />
                  </span>
                  <span className="text-connect"> ampliar</span>
                </button>
              </div>

              {/* division politica */}
              <div className="text-center ">
                <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-teal-accent-400 sm:w-12 sm:h-12">
                  <svg
                    className="w-8 h-8 text-teal-900 sm:w-10 sm:h-10"
                    stroke="#F24C3D"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
                <h6 className="text-4xl font-bold text-deep-purple-accent-400">
                  21
                </h6>
                <p className="mb-2 font-bold text-md">Division Poltica</p>
                <p className="text-gray-700">
                 Comunas/Corregimientos{" "}
                 Barrios/Veredas{" "}
                  <br />
                  <br /> <br /><br />
                </p>
                <button className="flex items-center justify-center px-3 py-1 text-center text-sm font-semibold  bg-gray-300 w-48 text-white rounded-md mx-auto  mt-12  mb-6  hover:bg-gray-400  mt-10 block bg-cyan-600  text-sm font-semibold  shadow-sm hover:bg-indigo-500 focus-visible:outline  ">
                  <span>
                    <HiOutlineArrowsExpand className="h-6 w-6 text-sky-500" />
                  </span>
                  <span className="text-connect"> ampliar</span>
                </button>
              </div>
            </div> 
            <hr />
          </div>    
        </div>
      </section>
    </>
  );
}

export default Page