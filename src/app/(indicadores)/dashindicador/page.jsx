'use client'
import { useEffect, useState } from "react";
import Link from "next/link"
import { HiOutlineArrowsExpand } from 'react-icons/hi'
import dynamic from 'next/dynamic'
const ChartTipoIndicador = dynamic(() => import('../../../components/Charts/Fusion/TipoInd'), { ssr: false })
const ChartTipoTematica = dynamic(() => import('../../../components/Charts/Fusion/TipoTematica'), { ssr: false })
const ChartTipoSgto = dynamic(() => import('../../../components/Charts/AmCharts/TipoSgto'), { ssr: false });
const ChartTematicaAmpliada = dynamic(() => import('../../../components/Charts/Fusion/TipoTematicaAmpliada'), { ssr: false });
const CharIndDependencias = dynamic(() => import('../../../components/Charts/Fusion/IndDependencias'), { ssr: false });




const DashIndicadores = () => {

  useEffect(()=>{ getTotalTemasDane()}, [])


  const [temaeconomia, setTemaEconomia]= useState()
  const [temasocial, setTemaSocial]= useState()
  const [tematerritorio, setTemaTerritorio]= useState()
  const [upri, setUpri] = useState()
  const [opp, setOpp] = useState()
  const [pdm, setPdm] = useState()
  const [upot, setUpot] = useState()


  async function getTotalTemasDane(){
    try {
      const res = await fetch(`http://localhost:5000/api/datos/tottemasdane`)
      const tottemas= await res.json();
      setTemaEconomia(tottemas.data[0].count)
      setTemaSocial(tottemas.data[1].count)
      setTemaTerritorio(tottemas.data[2].count)
      getTotalIndUnidadesDap()

    } catch (error) {
      console.error('Error getCorte: ', error);
    }
  }

  async function getTotalIndUnidadesDap(){
    try {
      const res = await fetch(`http://localhost:5000/api/datos/totindunidaesdap`)
      const totindunidadesdap = await res.json()
      console.log(totindunidadesdap);  
      setPdm(totindunidadesdap.data[2].count)
      setUpri(totindunidadesdap.data[1].count)
      setOpp(totindunidadesdap.data[0].count)
      setUpot(totindunidadesdap.data[3].count)
    } catch (error) {
      console.error('Error getTotalIndUnidadesDap: ', error);
    }
  }

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
                        {temaeconomia}
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
                    {temasocial}
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
                      {tematerritorio}
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
                    <button className="mt-12 block w-full rounded-md bg-cyan-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                      <Link href="/fichaindicador">Get access</Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <section className=" bg-gray-100/50">
              <div className=" ">
                <ChartTipoTematica   color={'#186F65'}/>
                <hr />
              </div>


              <div className="grid gap-2 sm:grid-cols-1 lg:grid-cols-12 mt-3 rounded-md border-2 mb-4">
                <div className="col-span-5 p-4 text-center">
                  <div className="text-center p-4 shadow-md">
                    <ChartTipoIndicador color={'#6499E9'}/>
                  </div>
                </div>
                <div className="col-span-7 p-4 text-center shadow-sm">
                <div className="text-center p-4 shadow-md">
                <ChartTipoSgto/>
                  </div>
       
                </div>
             
              </div>

              <div className="grid gap-2 sm:grid-cols-1 lg:grid-cols-4 mt-4">
                <div className="mt-4 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                  <div className="rounded-2xl  bg-sky-50/50 shadow-lg shadow-blue-400/50 py-8 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-10">
                    <div className="mx-auto max-w-xs px-24">
                      <p className="text-xl font-semibold text-gray-500 mb-3">
                       UPI
                      </p>
                      <img src="/economia.svg" alt="" srcSet="" />
                      <p className="mt-6 flex items-baseline justify-center gap-x-2">
                        <span className="text-4xl font-bold tracking-tight text-gray-900">
                          {upri}
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
                        OPP
                      </p>
                      <img src="/sociedad.svg" alt="" srcSet="" />
                      <p className="mt-6 flex items-baseline justify-center gap-x-2">
                        <span className="text-4xl font-bold tracking-tight text-gray-900">
                         {opp}
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
                        SPOT
                      </p>
                      <img src="/territorio.svg" alt="" srcSet="" />
                      <p className="mt-6 flex items-baseline justify-center gap-x-2">
                        <span className="text-4xl font-bold tracking-tight text-gray-900">
                      {upot}
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
                        SPDD
                      </p>
                      <img src="/planiando.svg" alt="" />

                      <p className="mt-6 flex items-baseline justify-center gap-x-2">
                        <span className="text-4xl font-bold tracking-tight text-gray-900">
                         {pdm}
                        </span>
                      </p>
                      <p className="mt-6 text-xs leading-5 text-gray-600">
                        Indicadores
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-2  p-2 rounded-xl  bg-sky-50/50 shadow-lg shadow-blue-400/50 py-8 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-10">
<ChartTematicaAmpliada color={'#6499E9'}/>
</div>
<div className="mt-2  p-2 rounded-xl  bg-sky-50/50 shadow-lg shadow-blue-400/50 py-8 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-10">
<CharIndDependencias color={'#4B527E'}/>
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