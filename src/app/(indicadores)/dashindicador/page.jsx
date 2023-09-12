import React from 'react'
import Link from "next/link"
import { HiOutlineArrowsExpand } from 'react-icons/hi'
import Chartprueba from '../../../components/Charts/AmCharts/IMCVChart'



function DashIndicadores() {
  return (
    <div className="p-2 sm:ml-60">
      <div className=" bg-white px-6 py-10 sm:py-28 lg:px-6 container mx-auto">
        <div className="p-2 border-2 border-blue-200 border-dashed rounded-lg dark:border-gray-700 mt-4">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm mt-10 ">
            <img
              className="mx-auto  w-32"
              src="https://cdnwordpresstest-f0ekdgevcngegudb.z01.azurefd.net/es/wp-content/themes/theme_alcaldia/logos/logo_footer.png"
              alt=""
            />
          </div>
          <div className=" bg-white px-6 py-18 sm:py-10 lg:px-8 container mx-auto">
            <div className="mx-auto max-w-2xl text-center mb-6">
              <h2 className="text-lg font-bold tracking-tight text-gray-500 sm:text-3xl">
                Indicadores Medellín
              </h2>
            </div>
            <div className="grid gap-2 sm:grid-cols-1 lg:grid-cols-4">
              <div className="mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                <div className="rounded-2xl  bg-sky-50/50 shadow-lg shadow-blue-400/50 py-8 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-10">
                  <div className="mx-auto max-w-xs px-24">
                    <p className="text-xl font-semibold text-gray-500 mb-3">
                      Economia
                    </p>
                    <img src="/economia.svg" alt="" srcSet="" />
                    <p className="mt-6 flex items-baseline justify-center gap-x-2">
                      <span className="text-4xl font-bold tracking-tight text-gray-900">
                        100
                      </span>
                    </p>
                    <p className="mt-6 text-xs leading-5 text-gray-600">
                      Indicadores
                    </p>
                  </div>
                </div>
              </div>

              <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                <div className="rounded-2xl  bg-sky-50/50 shadow-lg shadow-blue-400/50 py-8 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-10">
                  <div className="mx-auto max-w-xs px-24">
                    <p className="text-xl font-semibold text-gray-600 mb-3">
                      Sociedad
                    </p>
                    <img src="/sociedad.svg" alt="" srcSet="" />
                    <p className="mt-6 flex items-baseline justify-center gap-x-2">
                      <span className="text-4xl font-bold tracking-tight text-gray-900">
                        100
                      </span>
                    </p>
                    <p className="mt-6 text-xs leading-5 text-gray-600">
                      Indicadores
                    </p>
                  </div>
                </div>
              </div>

              <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                <div className="rounded-2xl  bg-sky-50/50 shadow-lg shadow-blue-400/50 py-8 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-10">
                  <div className="mx-auto max-w-xs px-24">
                  <p className="text-xl font-semibold text-gray-600 mb-3">
                      Territorio
                    </p>
                    <img src="/territorio.svg" alt="" srcSet="" />
                    <p className="mt-6 flex items-baseline justify-center gap-x-2">
                      <span className="text-4xl font-bold tracking-tight text-gray-900">
                        100
                      </span>
                    </p>
                    <p className="mt-6 text-xs leading-5 text-gray-600">
                      Indicadores
                    </p>
                  </div>
                </div>
              </div>
              <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                <div className="rounded-2xl  bg-sky-50/50 shadow-lg shadow-blue-400/50 py-8 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-10">
                  <div className="mx-auto max-w-xs px-24">
                  <p className="text-lg font-semibold text-gray-600 mb-2">
                   Fichas Metodologicas
                    </p>
                    <img src="/ficha.svg" alt="" />

                    <button
                       className="mt-12 block w-full rounded-md bg-cyan-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        <Link href="/fichaindicador">Get access</Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <section className=" bg-gray-100/50">
              <div className="mx-auto max-w-7xl py-8 sm:px-4 sm:py-10 lg:px-2">
                <hr />
              </div>

              <div className="col-span-full">
                  <div className="text-center p-4">
                    grafica con totales por subtema dane
                  <Chartprueba />
                  </div>
                </div>

                <div className="grid gap-2 sm:grid-cols-1 lg:grid-cols-12 mt-3 rounded-md border-2 border-sky-700 ">
                    <div className='col-span-6 p-4 text-center'>tipo de indicadores</div>
                    <div className='col-span-6 p-4 text-center'>Indicadores por dependencias </div>
                </div>
                
             

            </section>
          </div>
          <footer className="text-xs p-5  text-gray-500/90 ">
            Subdireccion de Prospectiva, Informacion y Evaluacion Estrategica{" "}
            <br />
            Departamento Admnistrativo de Planeacion Distrital <br />
            Medellin - 2023
          </footer>
        </div>
      </div>
    </div>
  );
}

export default DashIndicadores