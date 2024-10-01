import ProductImages from "@/components/ProductPage/ProductImages";

export default function Product({params}:{params:any}){
    const { slug } = params;
    console.log(slug)
    return(
        <div className="mt-24 mx-4">
            <ProductImages/>
        </div>
    )
}