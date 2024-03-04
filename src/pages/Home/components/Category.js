import React from "react";
import "./style.css";
import grid from "../../../../src/assets/images/grid.png";
import list from "../../../../src/assets/images/list.png";
import filter from "../../../../src/assets/images/filter.png";
import drop from "../../../../src/assets/images/drop.png";

const categories = [
  "All",
  "NFT",
  "Art",
  "DAO",
  "Gaming",
  "Collectables",
  "DeFi",
  "Metaverse",
  "Startup",
  "Infrastructure",
  "Education",
];

const Category = () => {
  return (
    <div className="category-section">
      <div className="categories">
        {categories.map((category) => (
          <div className="category">{category}</div>
        ))}
      </div>
      <div className="filter-icons">
        <div className="box color grid">
          <img src={grid} alt="grid" />
        </div>
        <div className="box list">
          <img src={list} alt="list" />
        </div>
        <div className="box filter">
          <div className="filter-text">
            <img src={filter} alt="filter" />
            <p>Filter</p>
          </div>
          <img src={drop} alt="drop" />
        </div>
      </div>
    </div>
  );
};

export default Category;
