import ProductImages from "@/components/ProductPage/ProductImages";

interface Params {
    slug: string;
  }

export default function Product({params}:{params:Params}){
    const { slug } = params;
    console.log(slug)
    return(
        <div className="mt-24 mx-4">
            <ProductImages/>
        </div>
    )
}