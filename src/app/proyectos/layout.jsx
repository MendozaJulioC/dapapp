import Nav from "@/components/NavProyectos/Nav"
import Aside from "@/components/NavProyectos/AsideMain"

export const metadata ={
    title:"Medellín en Datos"
  }
  
const DateoLayout = ({children}) => {
  return (
    <div className=" mt-2">
      <Nav />
      <Aside/>
      {children}
    </div>
  )
}

export default DateoLayout