import { ProductType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const ProductCard = ({ product }: { product: ProductType }) => {
  return (
    <Link href={`/product/${product.id}`} style={{ textDecoration: "none" }}>
      <div className="productCardContainer">
        <Image
          className="productImage"
          src={product.image}
          alt=""
          width={100}
          height={100}
        />
        <p className="productName">{product.title}</p>
        <div className="priceRatingWrapper">
          <p className="productPrice">₹ {product.price}</p>
          <p className="rating">
            {product.rating.rate}
            <FontAwesomeIcon
              icon={faStar}
              color="#cb8e0c"
              style={{ marginLeft: "5px" }}
            />
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
