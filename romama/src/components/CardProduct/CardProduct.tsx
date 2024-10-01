import Image from "next/image";
import Link from "next/link";

export default function CardProduct(){
    return(
        <div className="w-[47%] flex-col flex mb-6">
            <Image className="" alt="" src={"/img-product/product-1/product-1-img-1.jpeg"} width={500} height={500}/>
            <h1 className=" flex justify-center items-center my-1">Titulo: </h1>
            <Link className="flex justify-center items-center bg-lightOrage py-1" href={"/"}>Ver</Link>
        </div>
    )
}