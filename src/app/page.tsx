import { HomeComponent } from "@/components";
import { ProductType } from "@/types";
import axios from "axios";

export default async function HomePage() {
  const products: ProductType[] = await getProducts();
  return <HomeComponent products={products} />;
}

async function getProducts() {
  try {
    const res = await axios.get("https://fakestoreapi.com/products");
    return res.data;
  } catch (e) {
    console.error(e);
  }
}
