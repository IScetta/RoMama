import Image from "next/image";
import Carousel from "../Carousel";

export default function Aboud() {
  return (
    <div className="flex flex-col animate-fade-right animate-duration-300 animate-ease-linear animate-fill-both">
      <h1 className="flex justify-center text-2xl font-bold border-b-4 border-black ">
        Acerca de RoMama
      </h1>
      <br />
      <p>
        En <span className="font-bold ">RoMama</span> nos especializamos en la
        elaboración de productos dulces, perfectos para desayunos, meriendas o
        cualquier ocasión especial.
      </p>
      <br />

      <div className="flex flex-row justify-between gap-2 ">
        <div className="">
            <div className="">
            <Image className="rounded-lg" src={"/img-product/product-1/product-1-img-1.jpeg"} alt="" width={200} height={200}/>
            </div>
        </div>

        <div className="">
            <div className=" ">
            <Image className="rounded-lg" src={"/img-product/product-1/product-1-img-1.jpeg"} alt="" width={200} height={200}/>
            </div>
        </div>

        <div className="">
            <div className="">
            <Image className="rounded-lg " src={"/img-product/product-1/product-1-img-1.jpeg"} alt="" width={200} height={200}/>
            </div>
        </div>


        </div>

        <br />

      <p>
        Nuestros productos pueden ser{" "}
        <span className="font-bold ">personalizados para eventos</span>,
        ofreciendo una variedad que se adapta a diferentes gustos y
        preferencias. Ya sea que necesites algo para una reunión familiar, una
        celebración o simplemente para disfrutar en casa, te garantizamos
        productos <span className="font-bold ">frescos</span> y
        <span className="font-bold "> sabrosos</span>.
      </p>
      <br />

      <Carousel/>

      <br />

      <p>
        <span className="font-bold text-sm">Importante:</span> Lamentablemente,
        nuestras opciones no son aptas para celíacos.
      </p>

      <br />

        <h3 className=" text-xl font-bold border-b-4 border-black mb-2">Objetivos: </h3>
      <p>
        Nuestro principal objetivo es superar las expectativas de
        nuestros clientes, brindando productos de alta calidad y un servicio
        excepcional. En RoMama, nos comprometemos a escuchar tus peticiones y a
        crear preparaciones que se ajusten a tus necesidades, siempre con
        dedicación y cuidado en cada detalle.
      </p>
      <br />
      <div className="">
            <div className="">
            <Image className=" w-auto h-auto rounded-xl " src={"/img-product/product-1/product-1-img-1.jpeg"} alt="" width={400} height={400}/>
            </div>
        </div>
      <br />

      <h3 className=" text-xl font-bold border-b-4 border-black mb-2">Servicio de Delivery: </h3>
      <p>
        Ofrecemos un servicio de delivery flexible para
        mayor comodidad. Si deseas más información sobre las zonas de reparto o
        el costo del servicio, puedes contactarnos directamente a través de
        nuestra cuenta de Instagram o por WhatsApp. Estamos disponibles para
        responder cualquier consulta y asegurarnos de que tus pedidos lleguen en
        perfectas condiciones.
      </p>
        <br />
        <div className="">
            <div className="">
            <Image className=" w-auto h-auto rounded-xl " src={"/Delivery-img.jpg"} alt="" width={400} height={400}/>
            </div>
        </div>
      <br />

    </div>
  );
}
