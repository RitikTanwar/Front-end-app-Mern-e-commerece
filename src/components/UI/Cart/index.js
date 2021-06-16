import React from "react";
import { IoIosCart } from "react-icons/io";

/**
 * @author
 * @function Cart
 **/

const Cart = (props) => {
  return (
    <div style={{ fontSize: "20px", position: "relative" }}>
      {props.count > 0 ? (
        <span
          style={{
            position: "absolute",
            background: "red",
            width: "13px",
            height: "2vh",
            borderRadius: "5px",
            fontSize: "10px",
            border: "1px solid #fff",
            textAlign: "center",
            alignSelf: "center",
            top: "-8px",
            right: "-2px",
          }}
        >
          {props.count}
        </span>
      ) : (
        ""
      )}
      <IoIosCart
        style={{
          height: "3vh",
        }}
      />
    </div>
  );
};

export default Cart;
