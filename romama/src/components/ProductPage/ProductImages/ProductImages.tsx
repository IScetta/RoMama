"use client"
import Image from "next/image";
import { useState } from "react";

export default function ProductImages(){
const [imageView, setImageView] = useState<string>("/img-product/product-1/product-1-img-1.jpeg")

    return(
        <div className="flex flex-col">
            <div className="animate-fade-down animate-delay-100">
                <Image className="" alt="" src={imageView} width={500} height={500}/>
            </div>

            <div className="flex flex-row justify-between my-2 animate-fade-down animate-delay-300">
                <button className="w-[22%]" onClick={()=>setImageView("/img-product/product-1/product-1-img-1.jpeg")}><Image  alt="" src={"/img-product/product-1/product-1-img-1.jpeg"} width={500} height={500}/></button>
                <button className="w-[22%]" onClick={()=>setImageView("/img-product/product-1/product-1-img-2.jpeg")}><Image  alt="" src={"/img-product/product-1/product-1-img-2.jpeg"} width={500} height={500}/></button>
                <button className="w-[22%]" onClick={()=>setImageView("/img-product/product-1/product-1-img-3.jpeg")}><Image  alt="" src={"/img-product/product-1/product-1-img-3.jpeg"} width={500} height={500}/></button>
                <button className="w-[22%]" onClick={()=>setImageView("/img-product/product-1/product-1-img-4.jpeg")}><Image  alt="" src={"/img-product/product-1/product-1-img-4.jpeg"} width={500} height={500}/></button>

            </div>

        </div>
    )
}