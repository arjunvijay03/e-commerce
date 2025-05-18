import { ProductDetailsComponent } from "@/components";
import { ProductType } from "@/types";
import axios from "axios";

const ProductPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const product: ProductType = await getProducts(id);
  console.log(product);
  return <ProductDetailsComponent product={product} />;
};

async function getProducts(id: string) {
  try {
    const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
    return res.data;
  } catch (e) {
    console.error(e);
  }
}

export default ProductPage;
