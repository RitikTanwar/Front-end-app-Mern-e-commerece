import React, { useEffect } from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCategory } from "../../actions";
import { Link } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const SubHeader = (props) => {
  const category = useSelector((state) => state.category);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllCategory());
  }, []);
  const renderCategories = (categories) => {
    let mycategories = [];
    for (let category of categories) {
      mycategories.push(
        <li key={category._id}>
          {category.parentId ? (
            <Link
              to={`/${category.slug}?cid=${category._id}&type=${category.type}`}
            >
              {category.name}
            </Link>
          ) : (
            <span>
              {category.name}
              <IoIosArrowDown
                style={{
                  color: "rgb(200, 200, 200)",
                  alignItems: "center",
                  size: "4px",
                  marginLeft: "3px",
                }}
              />
            </span>
          )}

          {category.children.length > 0 ? (
            <ul>{renderCategories(category.children)}</ul>
          ) : null}
        </li>
      );
    }
    // console.log(mycategories);
    return mycategories;
  };
  return (
    <div className="subHeader">
      <ul>
        {category.categories.length > 0
          ? renderCategories(category.categories)
          : null}
      </ul>
    </div>
  );
};

export default SubHeader;
