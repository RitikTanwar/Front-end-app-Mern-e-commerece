import React from "react";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import SubHeader from "../../components/SubHeader";
import { Carousel } from "react-responsive-carousel";
import b1 from "./Home Images/b1.jpg";
import b2 from "./Home Images/b2.jpg";
import b3 from "./Home Images/b3.jpg";
import b4 from "./Home Images/b4.jpg";
import topbanner from "./Home Images/topbanner.jpg";
import "./style.css";

const HomePage = (props) => {
  return (
    <div style={{ width: "100%" }}>
      <Layout>
        <div
          className="topbanner"
          style={{
            alignContent: "center",
            margin: "10px",
            background: "white",
          }}
        >
          <img src={topbanner} style={{ width: "100%" }} />
        </div>
        <Carousel renderThumbs={() => {}}>
          <a style={{ display: "block" }}>
            <img
              src={b1}
              alt=""
              style={{
                height: window.innerWidth > 700 ? "350px" : "17vh",
                objectFit: "cover",
                padding: "10px",
              }}
              className="banimg"
            />
          </a>
          <a style={{ display: "block" }}>
            <img
              src={b2}
              alt=""
              style={{
                height: window.innerWidth > 700 ? "350px" : "17vh",
                objectFit: "cover",
                padding: "10px",
              }}
              className="banimg"
            />
          </a>
          <a style={{ display: "block" }}>
            <img
              src={b3}
              alt=""
              style={{
                height: window.innerWidth > 700 ? "350px" : "17vh",
                objectFit: "cover",
                padding: "10px",
              }}
              className="banimg"
            />
          </a>
          <a style={{ display: "block" }}>
            <img
              src={b4}
              alt=""
              style={{
                height: window.innerWidth > 700 ? "350px" : "17vh",
                objectFit: "cover",
                padding: "10px",
              }}
              className="banimg"
            />
          </a>
        </Carousel>
      </Layout>
    </div>
  );
};

export default HomePage;
