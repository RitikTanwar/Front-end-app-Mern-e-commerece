import React from "react";
import { IoIosStar } from "react-icons/io";

const Rating = (props) => {
  return (
    <span
      style={{
        display: "inline-block",
        background: "#388e3c",
        color: "#fff",
        fontWeight: "400",
        fontSize: "12px",
        borderRadius: "3px",
        padding: "2px 5px",
      }}
    >
      {props.value +
        "." +
        (props.value != "5" ? Math.round(Math.random() * 10) : 0)}{" "}
      <IoIosStar />
    </span>
  );
};

export default Rating;
