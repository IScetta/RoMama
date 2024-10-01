

import Image from "next/image";
import Link from "next/link";
import Carousel from "../Carousel";
import CardProduct from "../CardProduct";

export default function LandingPage(){
    return(
        <div className="mx-4">
            <div className="my-2">
                <Image className=" rounded-xl" src={"/RoMama_img.jpg"} alt="" width={500} height={500}/>
            </div>

            <div className="mt-4">
                <Carousel/>
            </div>


            <div className="flex flex-row justify-between items-center border my-10">
                <Link className="bg-cherryPink px-2 py-2 font-medium rounded-md" href={"/"}>Torta Personalizada</Link>                
                <Link className="bg-cherryPink px-2 py-2 font-medium rounded-md" href={"/"}>Torta Personalizada</Link>
            </div>

            <div className="flex flex-wrap mt-4 justify-between items-center">
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