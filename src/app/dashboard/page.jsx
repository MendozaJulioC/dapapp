'use client'


import { signOut } from "next-auth/react"

const Page = () => {
 
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
                        74.98
                      </span>
                      <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                       %
                      </span>
                    </p>
                    <a
                      href="#"
                      className="mt-10 block w-full rounded-md bg-cyan-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Get access
                    </a>
                    <p className="mt-6 text-xs leading-5 text-gray-600">
                      Invoices and receipts available for easy company
                      reimbursement
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
                      <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                       
                      </span>
                    </p>
                    <a
                      href="#"
                      className="mt-10 block w-full rounded-md bg-pink-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Get access
                    </a>
                    <p className="mt-6 text-xs leading-5 text-gray-600">
                      Invoices and receipts available for easy company
                      reimbursement
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
                      51
                      </span>
                      <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                        %
                      </span>
                    </p>
                    <a
                      href="#"
                      className="mt-10 block w-full rounded-md bg-blue-900 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Get access
                    </a>
                    <p className="mt-6 text-xs leading-5 text-gray-600">
                      Invoices and receipts available for easy company
                      reimbursement
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
                      <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                      
                      </span>
                    </p>
                    <a
                      href="#"
                      className="mt-10 block w-full rounded-md bg-orange-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Get access
                    </a>
                    <p className="mt-6 text-xs leading-5 text-gray-600">
                      Invoices and receipts available for easy company
                      reimbursement
                    </p>
                  </div>
                </div>
              </div>

            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-8">

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
                  It’s something that’s many of the wisest people in history
                  have kept in mind.
                </p>
              </div>

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
                  For many men, the acquisition of wealth does not end their
                  troubles, it only changes them.
                </p>
              </div>

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
                 9.56
                </h6>
                <p className="mb-2 font-bold text-md">IPM</p>
                <p className="text-gray-700">
                Indice Pobreza Multidimensional
                </p>
              </div>

              <div className="text-center">
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
                  52
                </h6>
                <p className="mb-2 font-bold text-md">IMCCV</p>
                <p className="text-gray-700">
                 Indice Multidimensional de Condiciones de Calidada de Vida
                </p>
              </div>

            </div>
            <hr/>
          </div>
        </div>
   
    </section>
    </>
  
  );
}

export default Page