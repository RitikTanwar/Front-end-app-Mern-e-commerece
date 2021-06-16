import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductBySlug } from "../../../actions";
import Layout from "../../../components/Layout";
import { generatePublicURL } from "../../../urlConfig";
import "./style.css";
import { Link } from "react-router-dom";
import Card from "../../../components/UI/Card";
import Price from "../../../components/UI/Price";
import Rating from "../../../components/UI/Ratings";
import { MaterialButton } from "../../../components/MaterialUI";

const ProductStore = (props) => {
  const product = useSelector((state) => state.product);
  const [priceRange, setPriceRange] = useState({
    under5k: 5000,
    under10k: 10000,
    under20k: 20000,
    under50k: 50000,
    above50k: 500001,
  });
  const dispatch = useDispatch();
  useEffect(() => {
    const { match } = props;
    dispatch(getProductBySlug(match.params.slug));
  }, []);
  return (
    <>
      {Object.keys(product.productsByPrice).map((key, index) => {
        return (
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
                  fontSize: "20px",
                  fontWeight: "bold",
                  marginLeft: "10px",
                }}
              >
                {props.match.params.slug +
                  " mobile " +
                  (priceRange[key] != 500001
                    ? "under ₹" + priceRange[key]
                    : "above ₹50000")}
              </div>
              <MaterialButton
                title={"VIEW ALL"}
                bgColor="#2874f0"
                fontSize="20px"
                width="100px"
              />
            </div>
            <div
              style={{
                display: "flex",
                textDecoration: "none",
                overflow: "scroll",
                scrollBehavior: "none",
              }}
            >
              {product.productsByPrice[key].map((product, index) => (
                <Link
                  key={index}
                  to={`/${product.slug}/${product._id}/p`}
                  style={{ display: "block" }}
                  className="productContainer"
                >
                  <div className="productImgContainer">
                    <img
                      src={generatePublicURL(product.productImages[0].img)}
                      alt=""
                    />
                  </div>
                  <div className="productInfo">
                    <div style={{ margin: "5px 0" }}>{product.name}</div>
                    <Rating value={product.ratings} />
                    <Price fontSize={18} value={product.price} />
                    <span className="productmrp">
                      <Price fontSize={13} value={product.mrp} />
                    </span>
                    <span style={{ color: "green" }}>
                      ({Math.round((product.saving / product.mrp) * 100)} % off)
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </Card>
        );
      })}
    </>
  );
};

export default ProductStore;
