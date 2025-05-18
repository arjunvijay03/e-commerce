"use client";
import { ProductType } from "@/types";
import "./style.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch } from "@/store/store";
import { cartActions } from "@/store/cart.slice";

const ProductDetails = ({ product }: { product: ProductType }) => {
  const dispatch = useAppDispatch();
  const addToCart = () => {
    dispatch(cartActions.addToCart(product));
  };
  return (
    <div className="productDetailsContainer">
      <div className="imageContainer">
        <Image
          src={product.image}
          alt="product image"
          width={100}
          height={100}
          className="image"
        />
      </div>

      <div className="infoSection">
        <h1 className="title">{product.title}</h1>
        <p className="category">Category: {product.category}</p>
        <p className="description">{product.description}</p>

        <div className="rating">
          <FontAwesomeIcon icon={faStar} color="#cb8e0c" />
          {product.rating.rate}
          <span className="reviewCount">({product.rating.count} reviews)</span>
        </div>

        <p className="price">₹ {product.price}</p>
        <button className="button" onClick={addToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};
export default ProductDetails;
