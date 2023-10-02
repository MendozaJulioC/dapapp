'use client'
import Select from 'react-select'
import Image from 'next/image'
import  React,{ useState, useRef , useMemo} from "react";
import { Label, Textarea } from 'flowbite-react';

const FichaIndicador = ({}) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [elementos, setElementos]=useState(null)
  let  options=[]
    const MyIndi = ()=>{
      const paintmap = useMemo(()=>{return getData()}, [])
      async function getData() {
        try {  
          const res = await fetch('http://localhost:5000/api/datos/indicadores')
          const response = await res.json();
          options.splice(0,options.length);
          for (let index = 0; index < response.data.length; index++) {
            options.push({
              label: response.data[index].find_nombre_ind,
              value: response.data[index].find_codficha
            })
          }
        } catch (error) {
          console.error(error);
        }
       }
      }

      async function  handleQueryInd (){
        try {
          const res = await fetch(`http://localhost:5000/api/datos/consulta/indicadores/${selectedOption?.value}`) 
          const response = await res.json(); 
           console.log(response.data[0]);
           setElementos(response.data[0])
        } catch (error) {
          console.error('Error handleQueryInd  ', error);
        }
     
      }

    return (
      <div className="p-2 sm:ml-60">
     
        <div className=" bg-white px-6 py-10 sm:py-28 lg:px-6 container mx-auto">
          <div className="p-2 border-2 border-blue-200 border-dashed rounded-lg dark:border-gray-700 mt-4">
            <div className=" bg-white px-6 py-18 sm:py-10 lg:px-8 container mx-auto">
              <button type="button" className='shadow-sm p-1 px-10 rounded-md hover:bg-red-600'>  
                <img src="/pdf.svg" alt="" srcSet="" width={34}  height={34}/>
               </button>
               <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Ficha Indicadores Medellín
                </h2>
              </div>
              <div className="grid grid-cols-12 gap-4 mt-4">
                <div className="col-span-10">
                  <MyIndi />
                  <Select
                    options={options}
                    placeholder="seleccione el indicador/ escriba palabra clave"
                    isClearable
                    onChange={setSelectedOption}
                  />
                </div>
                <div className="col-span-2">
                  <button    onClick={handleQueryInd} className="flex justify-center rounded-md bg-sky-400  px-10 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fillRule="currentColor"
                      className="bi bi-search mr-2"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                    Buscar
                  </button>
                </div>
            
              </div>
              <div className="sm:mx-auto sm:w-full sm:max-w-sm mt-12  ">
                {/* <img
                  className="mx-auto  w-36"
                  src="/Escudo.svg"
                  alt="Your Company"
                /> */}
                <img
                  className="mx-auto  w-48"
                  src="https://cdnwordpresstest-f0ekdgevcngegudb.z01.azurefd.net/es/wp-content/themes/theme_alcaldia/logos/logo_footer.png"
                  alt=""
                />
              </div>
              <div className="grid grid-cols-12 gap-4 mt-4 mb-4">
                <div className="col-span-full">
                  <div className="text-center">
                    <h2 className="text-xl font-bold tracking-tight text-gray-400 sm:text-4xl">
                      {elementos?.find_nombre_ind}
                    </h2>
                  </div>
                </div>

                <div className="col-span-full">
                  <div className="text-center p-4">
                  {/* <Chartprueba /> */}
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="last-name"
                    className="block text-lg font-semibold leading-6 text-gray-400 mt-2"
                  >
                    Definición:
                  </label>
                </div>
                <div className="col-span-full border border-r-gray-300 rounded-md p-6">
                  {elementos?.find_defincion_ind}
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="last-name"
                    className="block text-lg font-semibold leading-6 text-gray-400 mt-2"
                  >
                    Objetivo:
                  </label>
                </div>

                <div className="col-span-full border border-r-gray-300 rounded-md p-6">
                  {elementos?.find_objetivo_ind}
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="last-name"
                    className="block text-lg font-semibold leading-6 text-gray-400 mt-2"
                  >
                    Marco normativo :
                  </label>
                </div>
                <div className="col-span-full border border-r-gray-300 rounded-md p-6">
                  {elementos?.find_objetivo_ind}
                </div>
              </div>
              <div>
                <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
                  <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                    <div className="rounded-2xl bg-gray-50 shadow-sm shadow-blue-500/50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                      <div className="mx-auto max-w-xs px-8">
                        <div className="text-base font-semibold text-gray-600">
                          Sentido
                          <hr />
                        </div>
                        <p className="mt-6 flex items-baseline justify-center gap-x-2">
                          <span className="text-2xl font-bold tracking-tight text-gray-900">
                          {elementos?.find_sentido_indicador_ind}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                    <div className="rounded-2xl bg-gray-50 shadow-sm shadow-yellow-500/50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                      <div className="mx-auto max-w-xs px-8">
                        <div className="text-base font-semibold text-gray-600">
                          Unidad de Medida
                          <hr />
                        </div>
                        <div className="mt-6 flex items-baseline justify-center gap-x-2">
                          <span className="text-2xl font-bold tracking-tight text-gray-900">
                          {elementos?.find_unidad_medida}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                    <div className="rounded-2xl bg-gray-50 shadow-sm shadow-green-500/50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                      <div className="mx-auto max-w-xs px-8">
                        <div className="text-base font-semibold text-gray-600">
                          Tipo de Indicador
                          <hr />
                        </div>
                        <div className="mt-6 flex items-baseline justify-center gap-x-2">
                          <span className="text-2xl font-bold tracking-tight text-gray-900">
                          {elementos?.find_tipo_ind}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                    <div className="rounded-2xl bg-gray-50 shadow-sm shadow-indigo-500/50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                      <div className="mx-auto max-w-xs px-8">
                        <div className="text-base font-semibold text-gray-600">
                          Periodicidad Seguimiento
                          <hr />
                        </div>
                        <div className="mt-6 flex items-baseline justify-center gap-x-2">
                          <span className="text-2xl font-bold tracking-tight text-gray-900">
                          {elementos?.find_periocidad_sgto_ind}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-12 gap-2 mt-4">
                <div className="col-span-12 mt-4">
                    <label
                      htmlFor="last-name"
                      className="block text-lg font-semibold leading-6 text-gray-400 mt-2"
                    >
                    Fórmula de cálculo
                    </label>
                  </div>
                  <div className="col-span-12  border border-r-gray-300 rounded-md p-6">
                    {elementos?.find_formula_calculo_ind}
                  </div>
                  <div className="col-span-12 mt-4">
                    <label
                      htmlFor="last-name"
                      className="block text-lg font-semibold leading-6 text-gray-400 mt-2"
                    >
                        Variables Operativas
                    </label>
                  </div>
                  <div className="col-span-12  border border-r-gray-300 rounded-md p-6">
                  {elementos?.find_variables_operativas}
                  </div>
                  <div className="col-span-12 mt-4">
                    <label
                      htmlFor="last-name"
                      className="block text-lg font-semibold leading-6 text-gray-400 mt-2"
                    >
                      Fuente de Indicador
                    </label>
                  </div>
                  <div className="col-span-12  border border-r-gray-300 rounded-md p-6">
                  {elementos?.find_fuente_ind}
                  </div>
                  <div className="col-span-12 mt-4">
                    <label
                      htmlFor="last-name"
                      className="block text-lg font-semibold leading-6 text-gray-400 mt-2"
                    >
                      Dependencia Responsable
                    </label>
                  </div>
                  <div className="col-span-12  border border-r-gray-300 rounded-md p-6">
                  {elementos?.nom_dependencia}
                  </div>
                  <div className="col-span-12 mt-4">
                    <label
                      htmlFor="last-name"
                      className="block text-lg font-semibold leading-6 text-gray-400 mt-2"
                    >
                      Responsable Dato
                    </label>
                  </div>
                  <div className="col-span-12  border border-r-gray-300 rounded-md p-6">
                  {elementos?.responsable_dato}
                  </div>
                  <div className="col-span-12 mt-4">
                    <label
                      htmlFor="last-name"
                      className="block text-lg font-semibold leading-6 text-gray-400 mt-2"
                    >
                      Responsable Misional
                    </label>
                  </div>
                  <div className="col-span-12  border border-r-gray-300 rounded-md p-6">
                  {"Próximante...."}
                  </div>
                  
                  <div className="col-span-12 mt-4">
                    <label
                      htmlFor="last-name"
                      className="block text-lg font-semibold leading-6 text-gray-400 mt-2"
                    >
                      Observaciones Generales
                    </label>
                  </div>
                  <div className="col-span-12  border border-r-gray-300 rounded-md p-6">
                  {elementos?.find_observaciones_generales}
                  </div>
                  <div className="lg:col-span-6  md:col-span-12 sm: col-span-12 border border-r-gray-300 rounded-md p-6 mt-10 mb-4">
                    <label
                      htmlFor="last-name"
                      className="block text-lg font-semibold leading-6 text-gray-400 mt-2 mb-4"
                    >
                      Sintaxis
                    </label>
                    <Textarea
                      id="comment"
                      placeholder="Sintaxis para el calculo"
                      required
                      rows={10}
                      value={elementos?.sintaxis}
                    />
         
                  </div>
                  <div className="lg:col-span-6  md:col-span-12 sm: col-span-12 border border-r-gray-300 rounded-md p-6 mt-10 mb-4">
                    <label
                      htmlFor="last-name"
                      className="block text-lg font-semibold leading-6 text-gray-400 mt-2 mb-4"
                    >
                      Herramienta Desarrollo
                    </label>
                
                    <Textarea
                      id="comment"
                      placeholder="Herramienta utilizada"
                      required
                      rows={10}
                      value=    {elementos?.herramienta_desarrollo}
                    />

                  </div>

                  <div className="col-span-6  border border-r-gray-300 rounded-md p-6 mt-10 mb-4">
                    <label
                      htmlFor="last-name"
                      className="block text-lg font-semibold leading-6 text-gray-400 mt-2 mb-4"
                    >
                      Unidad DAP Responsable Seguimiento
                    </label>
                    {elementos?.unidad_dap}
                  </div>

                  <div className="col-span-6  border border-r-gray-300 rounded-md p-6 mt-10 mb-4">
                    <div className="rounded-2xl bg-gray-50 shadow-sm shadow-green-500/50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-10">
                      <div className="mx-auto max-w-xs px-8">
                        <div className="text-base font-semibold text-gray-600">
                          Estado Indicador
                          <hr />
                        </div>
                        <div className="mt-6 flex items-baseline justify-center gap-x-2">
                          <span className="text-2xl font-bold tracking-tight text-gray-900">
                          {elementos?.estado_indicador}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

                     <footer className='text-xs p-5  text-gray-500/90 '>
                Subdireccion de Porspectiva, Informacion y Evaluacion Estratégica <br />
                Departamento Admnistrativo de Planeación Distrital <br />
                Medellín - 2023

               </footer>
          </div> 
        
        </div>
      </div>
    );
}

export default FichaIndicador