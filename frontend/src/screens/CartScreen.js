import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartItemsAdded } from "./cartSlice";

const CartScreen = ({ match, location }) => {
  const { id } = match.params;

  const qty = location.search ? Number(location.search.split("=")[1]) : 1;
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(cartItemsAdded(id, qty)());
    }
  }, [dispatch, id, qty]);

  const cartItems = useSelector((state) => state.cart.cartItems);

  useEffect(() => {
    if (cartItems) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  return <div>Cart</div>;
};

export default CartScreen;
