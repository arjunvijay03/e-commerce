"use client";
import "./style.css";
import { CartItemComponent } from "..";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { cartActions } from "@/store/cart.slice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export default function CartPage() {
  const dispatch = useAppDispatch();

  const { cartProducts, totalPrice } = useAppSelector((state) => ({
    cartProducts: state.cart.cartProducts,
    totalPrice: state.cart.totalPrice,
  }));

  const incrementQuantity = (id: number) => {
    dispatch(cartActions.incrementQuantity(id));
  };
  const decrementQuantity = (id: number) => {
    dispatch(cartActions.decrementQuantity(id));
  };
  const removeFromCart = (id: number) => {
    dispatch(cartActions.removeFromCart(id));
  };

  return (
    <div className="cartContainer">
      {cartProducts.length > 0 ? (
        <>
          <h1 className="cartHeading">Shopping Cart</h1>
          <div className="cartContent">
            <div className="cartLeft">
              {cartProducts.map((item, i) => (
                <CartItemComponent
                  item={item}
                  key={i}
                  incrementQuantity={incrementQuantity}
                  decrementQuantity={decrementQuantity}
                  removeFromCart={removeFromCart}
                />
              ))}
            </div>

            <div className="cartRight">
              <h3>Price Details:</h3>
              <div className="priceRow">
                <span>M.R.P:</span>
                <span>₹{totalPrice.toFixed(2)}</span>
              </div>

              <div className="totalSection">
                <div className="priceRow total">
                  <span>Total Amount:</span>
                  <span>₹{totalPrice.toFixed(2)}</span>
                </div>
                <button className="buyButton">PROCEED TO BUY</button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="emptyCart">
          <FontAwesomeIcon icon={faShoppingCart} color="#fff" size="5x" />
          <p className="emptyCartText">Your Cart is currently empty!</p>
        </div>
      )}
    </div>
  );
}
