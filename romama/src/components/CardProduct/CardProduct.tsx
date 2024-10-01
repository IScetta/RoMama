import Image from "next/image";
import Link from "next/link";

export default function CardProduct(){
    return(
        <div className="w-[47%] flex-col flex mb-6 border-2 border-black/15 shadow-lg p-1 ">
            <Image className="" alt="" src={"/img-product/product-1/product-1-img-1.jpeg"} width={500} height={500}/>
            <h1 className=" flex justify-center text-lg font-bold items-center my-1">Torta </h1>
            <Link className="flex justify-center font-bold items-center bg-lightOrage py-1" href={"/product/1"}>Ver</Link>
        </div>
    )
}