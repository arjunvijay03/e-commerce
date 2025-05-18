import { ProductType } from "@/types";
import { ProductCardComponent } from "..";
import "./style.css";

const Home = ({ products }: { products: ProductType[] }) => {
  return (
    <>
      <div className="productsContainer">
        {products.map((item) => (
          <ProductCardComponent product={item} key={item.id} />
        ))}
      </div>
    </>
  );
};

export default Home;
