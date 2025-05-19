import { ProductType } from "@/types";
import { ProductCardComponent } from "..";
import "./style.css";

const Home = ({ products }: { products: ProductType[] }) => {
  return (
    <>
      <p className="homeTitle">Our Products</p>
      <div className="productsContainer">
        {products.map((item) => (
          <ProductCardComponent product={item} key={item.id} />
        ))}
      </div>
    </>
  );
};

export default Home;
