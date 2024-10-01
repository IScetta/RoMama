import ProductImages from "@/components/ProductPage/ProductImages";

export default function Product({params}:{params:any}){
    const { slug } = params;

    return(
        <div className="mt-24 mx-4">
            <ProductImages/>
        </div>
    )
}