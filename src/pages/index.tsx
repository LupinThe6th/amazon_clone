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
    const res = await fetch("https://fakestoreapi.noksha.dev/api/amazonproducts");
    const jsonResponse = await res.json();
    const rawProducts = jsonResponse.data || [];
    const productData = rawProducts.map((product: any) => {
      let correctedImage = product.image;

      if (product.image && product.image.includes("fakestoreapi.com/img/")) {
        // Replace the truncated '.jpg' with '_t.png' or clean extensions
        // This maps them cleanly to the real images that actually exist
        correctedImage = product.image
          .replace("_.jpg", "_t.png")
          .replace("-2.jpg", "-2t.png")
          .replace(".jpg", ".jpg"); // keep standard if fallback
      }

      return {
        ...product,
        image: correctedImage,
      };
    });
    return {props: {productData}};
  } catch (error) {
    console.error("Network fetch failed on Vercel:", error);
    return {props: {productData: []}};
  }
  
}
