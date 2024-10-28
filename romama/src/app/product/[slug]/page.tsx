import ProductImages from "@/components/ProductPage/ProductImages";
import { Params } from "@/types/types";



export default function Product({params}:{params:Params}){
    const { slug } = params;
    console.log(slug)
    return(
        <div className="mt-24 mx-4">
            <ProductImages/>
        </div>
    )
}