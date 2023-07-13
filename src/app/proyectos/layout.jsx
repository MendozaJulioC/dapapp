import Nav from "../components/NavProyectos/Nav"

export const metadata ={
    title:"KratiAnalitik"
  }
  
const DateoLayout = ({children}) => {
  return (
    <div className=" mt-2">
     <Nav />


        {children}
    </div>
  )
}

export default DateoLayout