import Nav from "../../../components/NavProyectos/Nav"
import Link from "next/link";

export const metadata ={
    title:"KratiAnalitik"
  }
  
const DateoLayout = ({children}) => {
  return (
    <div className=" mt-2">





      {children}
    </div>
  );
}

export default DateoLayout