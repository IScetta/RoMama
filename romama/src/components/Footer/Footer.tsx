import { FaInstagramSquare, FaMapMarkerAlt } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

export default function Footer (){
    return(
        <div>

        <div className="bg-cherryPink pl-24 h-full">
            <div className=" p-2 pt-8">
                <h1 className="font-display font-bold text-5xl">RoMama</h1>
            </div>

            <div className="p-2">
                <h1 className=" text-xl font-bold border-b-4 border-black w-fit">Navegacion</h1>
                <h2 className="text-lg font-semibold pt-1 pl-2">Inicio</h2>
                <h2 className="text-lg font-semibold pt-1 pl-2">Productos</h2>
                <h2 className="text-lg font-semibold pt-1 pl-2">Nosotros</h2>
                <h2 className="text-lg font-semibold pt-1 pl-2">Pedidos</h2>
            </div>

            <div className="p-2 pb-8">
                <h1 className=" text-xl font-bold border-b-4 border-black w-fit">Contacto</h1>
                <h2 className=" flex flex-row items-center text-lg font-semibold pt-1 pl-2"><FaSquareWhatsapp className="mr-1"/>+54 9 3434 58-8344</h2>
                <h2 className=" flex flex-row items-center text-lg font-semibold pt-1 pl-2"><FaInstagramSquare className="mr-1"/>@romama.tentaciones</h2>
                <h2 className=" flex flex-row items-center text-lg font-semibold pt-1 pl-2"><FaMapMarkerAlt className="mr-1"/>Entre Rios, Parana</h2>
                <h2 className=" flex flex-row items-center text-lg font-semibold pt-1 pl-2"><IoMdMail className="mr-1"/>romama@gmail.com</h2>
            </div>

        </div>

            <h1 className="flex justify-center items-center bg-cherryPink p-1 text-xs border-t-2 border-black">© 2024 Scetta Isaias. Todos los derechos reservados.</h1>
        </div>
    )
}