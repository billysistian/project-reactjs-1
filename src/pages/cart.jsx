import { Fragment } from "react";
import CartShop from "../components/Fragments/CartShop";
import Navbar from "../components/Layouts/Navbar";

const CartPage = () => {
  return (
    <Fragment>
      <Navbar />
      <CartShop />
    </Fragment>
  );
};

export default CartPage;
