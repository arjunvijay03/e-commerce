"use client";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHome } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useAppSelector } from "@/store/store";

const Header = () => {
  const totalQuantity = useAppSelector((state) => state.cart.totalQuantity);
  return (
    <div className="headerContainer">
      <p className="logo">E-Commerce</p>
      <div className="iconContainer">
        <Link href={"/"} style={{ textDecoration: "none" }}>
          <div className="iconWrapper">
            <FontAwesomeIcon icon={faHome} color="black" fontSize={"25px"} />
            <p className="iconText">Home</p>
          </div>
        </Link>
        <Link href={"/cart"} style={{ textDecoration: "none" }}>
          <div className="iconWrapper cartIcon">
            <FontAwesomeIcon
              icon={faCartShopping}
              color="black"
              fontSize={"25px"}
            />
            <p className="iconText">Cart</p>
            <p className="iconBadge">{totalQuantity}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
