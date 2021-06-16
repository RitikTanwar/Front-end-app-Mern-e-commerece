import React, { useState } from "react";
import { generatePublicURL } from "../../../urlConfig";
import { BiRupee } from "react-icons/bi";
import "./style.css";

const CartItem = (props) => {
  const [qty, setQty] = useState(props.cartItem.qty);

  const { _id, name, price, img } = props.cartItem;

  const onQuantityIncrement = () => {
    setQty(qty + 1);
    props.onQuantityInc(_id, qty + 1);
  };

  const onQuantityDecrement = () => {
    if (qty <= 1) return;
    setQty(qty - 1);
    props.onQuantityDec(_id, qty - 1);
  };

  return (
    <div className="cartItemContainer">
      <div className="flexRow">
        <div className="cartProImgContainer">
          <img src={generatePublicURL(img)} alt={""} />
        </div>
        <div className="cartItemDetails" style={{ fontSize: "1.6vw" }}>
          <div style={{ width: "50%" }}>
            <p>{name}</p>
            <p style={{ fontWeight: "bolder" }}>
              <BiRupee /> {price}
            </p>
          </div>
          <div style={{ width: "40%" }}>Delivery in 3 - 5 days</div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          margin: "5px 0",
        }}
      >
        {/* quantity control */}
        <div
          className="quantityControl"
          style={{
            width: "16vw",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: "10px",
          }}
        >
          <button onClick={onQuantityDecrement}>-</button>
          <input value={qty} readOnly />
          <button onClick={onQuantityIncrement}>+</button>
        </div>
        <button className="cartActionBtn" style={{ fontSize: "1.5vw" }}>
          Save for later
        </button>
        <button
          className="cartActionBtn"
          onClick={() => props.onRemoveCartItem(_id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
