
import Image from "next/image";
import Link from "next/link";
import Carousel from "../Carousel";
import CardProduct from "../CardProduct";

export default function LandingPage(){
    return(
        <div className="mx-4 ">
            <div className="animate-fade-down my-2 mt-24">
                <Image className=" rounded-xl" src={"/RoMama_img.jpg"} alt=" " width={500} height={500}/>
            </div>

            <div className="mt-4 animate-fade-down animate-delay-[500ms]">
                <Carousel/>
            </div>


            <div className="flex flex-row justify-around items-center my-10 animate-fade-down animate-delay-[500ms]">
                <Link className="bg-cherryPink px-2 py-2 m-1 border border-black/20 font-semibold rounded-md" href={"/"}>Torta Personalizada</Link>                
                <Link className="bg-cherryPink px-2 py-2 m-1 border border-black/20 font-semibold rounded-md" href={"/"}>Combo Personalizado</Link>
            </div>

            <div className="flex flex-wrap mt-4 justify-between items-center animate-fade-down animate-delay-[500ms]">
                <CardProduct/>
                <CardProduct/>
                <CardProduct/>
                <CardProduct/>
                <CardProduct/>
                <CardProduct/>
                <CardProduct/>
                <CardProduct/>
            </div>

        </div>
    )
}