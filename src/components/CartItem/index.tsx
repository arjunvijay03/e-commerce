import Image from "next/image";
import "./style.css";
import { CartItemType } from "@/types/cart.type";

const CartItem = ({
  item,
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
}: {
  item: CartItemType;
  incrementQuantity: (id: number) => void;
  decrementQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
}) => {
  return (
    <div className="cartItem">
      <Image
        src={item.product.image}
        alt={item.product.title}
        width={100}
        height={130}
        className="cartImage"
      />
      <div className="cartDetails">
        <div className="cartTitle">{item.product.title}</div>
        <div className="cartSubtitle">{item.product.title}</div>

        <div className="quantitySection">
          <span>Qty :</span>
          <button
            className="qtyBtn"
            onClick={() => decrementQuantity(item.product.id)}
          >
            -
          </button>
          <span>{item.quantity}</span>
          <button
            className="qtyBtn"
            onClick={() => incrementQuantity(item.product.id)}
          >
            +
          </button>
        </div>
        <div className="priceText">Price: ₹{item.product.price}</div>

        <div className="actionLinks">
          <span onClick={() => removeFromCart(item.product.id)}>Remove</span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
