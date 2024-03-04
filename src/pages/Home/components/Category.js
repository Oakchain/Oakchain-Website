import React, { useState } from "react";
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
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleFilter = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <div className="category-section">
      <div className="categories">
        {categories.map((category) => (
          <div key={category} onClick={() => handleCategoryClick(category)} className={`category ${selectedCategory === category && 'highlighted'}`}>{category}</div>
        ))}
      </div>
      <div className="filter-icons">
        <div className="box color grid">
          <img src={grid} alt="grid" />
        </div>
        <div className="box list">
          <img src={list} alt="list" />
        </div>
        <div className="box filter" onClick={handleFilter}>
          <div className="filter-text">
            <img src={filter} alt="filter" />
            <p>Filter</p>
          </div>
          <img className="drop" src={drop} alt="drop" />
          {isDropdownVisible && <div className="dropdown-menuu">
                    <ul>
                      <li><h3>By popularity</h3></li>
                      <li><h3>By date</h3></li>
                    </ul>
                  </div>}
        </div>
      </div>
    </div>
  );
};

export default Category;
