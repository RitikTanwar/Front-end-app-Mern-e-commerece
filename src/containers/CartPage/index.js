import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import Card from "../../components/UI/Card";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import {
  addItemsToCart,
  getCartItems,
  removeCartItem,
} from "../../actions/cart";
import { MaterialButton } from "../../components/MaterialUI";
import "./style.css";
import PriceDetails from "../../components/PriceDetails";

const CartPage = (props) => {
  const cart = useSelector((state) => state.cart);
  const auth = useSelector((state) => state.auth);
  // const cartItems = cart.cartItems;
  const [cartItems, setCartItems] = useState(cart.cartItems);
  const dispatch = useDispatch();

  useEffect(() => {
    setCartItems(cart.cartItems);
  }, [cart.cartItems]);

  useEffect(() => {
    if (auth.authenticate) {
      dispatch(getCartItems());
    }
  }, [auth.authenticate]);

  const onQuantityIncrement = (_id, qty) => {
    console.log(qty);
    const product = cartItems[_id];
    console.log(product);
    dispatch(addItemsToCart(product, 1));
  };
  const onQuantityDecrement = (_id, qty) => {
    console.log(qty);
    const product = cartItems[_id];
    dispatch(addItemsToCart(product, -1));
  };

  const onRemoveCartItem = (_id) => {
    dispatch(removeCartItem({ productId: _id }));
  };

  if (props.onlyCartItems) {
    return (
      <>
        {Object.keys(cartItems).map((keys, index) => (
          <CartItem
            key={index}
            cartItem={cartItems[keys]}
            onQuantityInc={onQuantityIncrement}
            onQuantityDec={onQuantityDecrement}
          ></CartItem>
        ))}
      </>
    );
  }

  return (
    <Layout>
      <div className="cartContainer" style={{ alignItems: "flex-start" }}>
        <Card>
          <div
            style={{
              display: "flex",
              height: "50px",
              justifyContent: "space-between",
              width: "100%",
              alignItems: "center",
              border: "1px solid rgb(220,220,220)",
            }}
          >
            <div
              style={{
                fontSize: "1.7vw",
                fontWeight: "bold",
                marginLeft: "10px",
                width: "70%",
              }}
            >
              My Cart
            </div>
            <div
              style={{
                fontSize: "1.7vw",
                fontWeight: "bold",
                alignItems: "center",
                width: "30%",
              }}
            >
              Deliver to
            </div>
          </div>
          {Object.keys(cartItems).map((keys, index) => (
            <CartItem
              key={index}
              cartItem={cartItems[keys]}
              onQuantityInc={onQuantityIncrement}
              onQuantityDec={onQuantityDecrement}
              onRemoveCartItem={onRemoveCartItem}
            ></CartItem>
          ))}
          <div
            style={{
              width: "100%",
              display: "flex",
              background: "#ffffff",
              justifyContent: "flex-end",
              boxShadow: "0 0 10px 10px #eee",
              padding: "10px 0",
              boxSizing: "border-box",
            }}
          >
            <div style={{ width: "30%", fontSize: "2vw", minWidth: "150px" }}>
              <MaterialButton
                title="PLACE ORDER"
                onClick={() => props.history.push(`/checkout`)}
              />
            </div>
          </div>
        </Card>
        <PriceDetails
          totalItem={Object.keys(cart.cartItems).reduce(function (qty, key) {
            return qty + cart.cartItems[key].qty;
          }, 0)}
          totalPrice={Object.keys(cart.cartItems).reduce((totalPrice, key) => {
            const { price, qty } = cart.cartItems[key];
            return totalPrice + price * qty;
          }, 0)}
        />
      </div>
    </Layout>
  );
};

export default CartPage;
