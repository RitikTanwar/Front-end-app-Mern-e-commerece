import React from "react";
import { BiRupee } from "react-icons/bi";
import Card from "../UI/Card";

/**
 * @author
 * @function PriceDetails
 **/

const PriceDetails = (props) => {
  return (
    <Card style={{ maxWidth: "380px", width: "40%" }}>
      <div
        style={{
          fontSize: "3vw",
          fontWeight: "bold",
          marginLeft: "5px",
          marginRight: "10px",
        }}
      >
        Price Details
      </div>
      <div
        style={{
          padding: "5px",
          boxSizing: "border-box",
        }}
      >
        <div className="flexRow sb" style={{ fontSize: "2vw" }}>
          <div>Price ({props.totalItem} items) : </div>
          <div>
            <BiRupee />
            {props.totalPrice}
          </div>
        </div>
        <div className="flexRow sb" style={{ fontSize: "2vw" }}>
          <div>Delivery Charges : </div>
          <div style={{ color: "green" }}>FREE</div>
        </div>
        <div className="flexRow sb" style={{ fontSize: "2vw" }}>
          <div>Total Amount : </div>
          <div>
            <BiRupee />
            {props.totalPrice}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default PriceDetails;
