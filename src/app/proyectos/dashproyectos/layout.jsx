import Nav from "../../components/NavProyectos/Nav"
import Link from "next/link";

export const metadata ={
    title:"KratiAnalitik"
  }
  
const DateoLayout = ({children}) => {
  return (
    <div className=" mt-2">
      <Nav />

      <aside
        id="logo-sidebar"
        className="fixed top-10 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidebar"
      >
        <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          <ul class="space-y-2 font-medium">
            <li>
              <span>
                <Link
                  href={"/dashboard"}
                  className="flex items-center p-2
                    text-gray-900 rounded-lg
                    dark:text-white
                    hover:bg-gray-100 
                    dark:hover:bg-gray-700 group"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#0369a1"
                    className="bi bi-house-dash-fill mr-2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z" />
                    <path d="m8 3.293 4.712 4.712A4.5 4.5 0 0 0 8.758 15H3.5A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z" />
                    <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM11 12h3a.5.5 0 0 1 0 1h-3a.5.5 0 1 1 0-1Z" />
                  </svg>
                  Home
                </Link>
              </span>
            </li>

            <li>
              <span>
                <Link
                  href={"/proyectos/dashproyectos"}
                  className="flex items-center p-2
                    text-gray-900 rounded-lg
                    dark:text-white
                    hover:bg-gray-100 
                    dark:hover:bg-gray-700 group"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#0369a1"
                    className="bi bi-book-fill mr-2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
                  </svg>
                  Registrar Proyectos
                </Link>
              </span>
            </li>

            <li>
              <span>
                <Link
                  href={"/proyectos/dashproyectos/metasproyectos"}
                  className="flex items-center p-2
                    text-gray-900 rounded-lg
                    dark:text-white
                    hover:bg-gray-100 
                    dark:hover:bg-gray-700 group"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#0369a1"
                    className="bi bi-clipboard2-pulse-fill mr-2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M10 .5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5V2a.5.5 0 0 0 .5.5h5A.5.5 0 0 0 11 2v-.5a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5Z" />
                    <path d="M4.085 1H3.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1h-.585c.055.156.085.325.085.5V2a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 4 2v-.5c0-.175.03-.344.085-.5ZM9.98 5.356 11.372 10h.128a.5.5 0 0 1 0 1H11a.5.5 0 0 1-.479-.356l-.94-3.135-1.092 5.096a.5.5 0 0 1-.968.039L6.383 8.85l-.936 1.873A.5.5 0 0 1 5 11h-.5a.5.5 0 0 1 0-1h.191l1.362-2.724a.5.5 0 0 1 .926.08l.94 3.135 1.092-5.096a.5.5 0 0 1 .968-.039Z" />
                  </svg>
                  Indicadores Productos
                </Link>
              </span>
            </li>

            <li>
              <span>
                <Link
                  href={"/proyectos/dashproyectos/productosmga"}
                  class="flex items-center p-2
                    text-gray-900 rounded-lg
                    dark:text-white
                    hover:bg-gray-100 
                    dark:hover:bg-gray-700 group"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#0369a1"
                    className="bi bi-clipboard-data-fill mr-2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6.5 0A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3Zm3 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3Z" />
                    <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1A2.5 2.5 0 0 1 9.5 5h-3A2.5 2.5 0 0 1 4 2.5v-1ZM10 8a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0V8Zm-6 4a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0v-1Zm4-3a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1Z" />
                  </svg>
                  Productos MGA
                </Link>
              </span>
            </li>

            <li>
              <span>
                <Link
                  href={"/proyectos/dashproyectos"}
                  class="flex items-center p-2
                    text-gray-900 rounded-lg
                    dark:text-white
                    hover:bg-gray-100 
                    dark:hover:bg-gray-700 group"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#0369a1"
                    className="bi bi-collection-fill mr-2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zM2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3zm2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1z" />
                  </svg>
                  Productos DNP
                </Link>
              </span>
            </li>

            <li>
              <span>
                <Link
                  href={"/proyectos/dashproyectos"}
                  class="flex items-center p-2
                    text-gray-900 rounded-lg
                    dark:text-white
                    hover:bg-gray-100 
                    dark:hover:bg-gray-700 group"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#0369a1"
                    class="bi bi-easel2-fill mr-2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.447.276a.5.5 0 0 0-.894 0L7.19 1H2.5A1.5 1.5 0 0 0 1 2.5V10h14V2.5A1.5 1.5 0 0 0 13.5 1H8.809L8.447.276Z" />
                    <path
                      fill-rule="evenodd"
                      d="M.5 11a.5.5 0 0 0 0 1h2.86l-.845 3.379a.5.5 0 0 0 .97.242L3.89 14h8.22l.405 1.621a.5.5 0 0 0 .97-.242L12.64 12h2.86a.5.5 0 0 0 0-1H.5Zm3.64 2 .25-1h7.22l.25 1H4.14Z"
                    />
                  </svg>
                  Actividaes MGA
                </Link>
              </span>
            </li>

            <li>
              <span>
                <Link
                  href={"/proyectos/dashproyectos"}
                  class="flex items-center p-2
                    text-gray-900 rounded-lg
                    dark:text-white
                    hover:bg-gray-100 
                    dark:hover:bg-gray-700 group"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#0369a1"
                    className="bi bi-file-ruled-fill mr-2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12 0H4a2 2 0 0 0-2 2v4h12V2a2 2 0 0 0-2-2zm2 7H6v2h8V7zm0 3H6v2h8v-2zm0 3H6v3h6a2 2 0 0 0 2-2v-1zm-9 3v-3H2v1a2 2 0 0 0 2 2h1zm-3-4h3v-2H2v2zm0-3h3V7H2v2z" />
                  </svg>
                  Politicas Transversal
                </Link>
              </span>
            </li>

            <li>
              <a
                href="#"
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#831843"
                  viewBox="0 0 20 20"
                >
                  <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                  <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
                  <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
                </svg>
                <span class="flex-1 ml-3 whitespace-nowrap">Sign Up</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
      {children}
    </div>
  );
}

export default DateoLayout