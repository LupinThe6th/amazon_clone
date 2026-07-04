import Image from "next/image";
import Banner from "@/components/Banner";
import Products from "@/components/Products";
import { ProductProps } from "../../type";

interface Props {
 productData: ProductProps[];
}

export default function Home({productData}: Props) {
  return (
    
      <main>
        <div >
          <Banner />
          <Products productData={productData} />
        </div>
      </main>
  
  );
}

export const getServerSideProps = async() =>{
  try {
    const res = await fetch("https://fakestoreapi.com/products")
    const productData = await res.json();
    return {props: {productData}};
  } catch (error) {
    console.error("Network fetch failed on Vercel:", error);
    return {props: {productData: []}};
  }
  
}
