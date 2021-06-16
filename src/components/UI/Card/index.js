import React from "react";
import "./style.css";

const Card = (props) => {
  return (
    <div className="card" {...props}>
      {props.headerLeft ||
        (props.headerRight && (
          <div className="cardHeader">
            {props.headerLeft && (
              <div
                className="cardHeaderLeft"
                style={{
                  alignSelf: "center",
                  fontSize: "50px",
                  fontWeight: "500",
                }}
              >
                {props.headerLeft}
              </div>
            )}
            {props.headerRight && props.headerRight}
            {console.log("Props", props.headerRight)}
          </div>
        ))}
      {props.children}
    </div>
  );
};

export default Card;
// {props.match.params.slug} mobile {priceRange[key] != 500001 ? 'under ' + priceRange[key] : 'above 50000'}
