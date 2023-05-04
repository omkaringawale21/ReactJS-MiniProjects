import React from "react";
import { categoryList, ratingList } from "../../../Constants/index";
import CheckBoxProton from "../../Common/CheckBoxProton/CheckBoxProton";
import FilterListToggle from "../../Common/FilterListToggle/FilterListToggle";
import SliderProton from "../../Common/SliderProton/SliderProton";
import "./FilterPanel.css";

const FilterPanel = ({
  selectedCategory,
  selectToggle,
  selectedRating,
  selectRating,
  cuisines,
  changedChecked,
  changePrice,
  selectedPrice
}) => {
  return (
    <div>
      <div className="input-group">
        <p className="label">Category</p>
        <FilterListToggle
          options={categoryList}
          value={selectedCategory}
          selectToggle={selectToggle}
        />
      </div>

      <div className="input-group">
        <p className="label">Cuisines</p>
        {cuisines.map((cuisine) => (
          <CheckBoxProton
            id={cuisine.id}
            cuisine={cuisine}
            changedChecked={changedChecked}
          />
        ))}
      </div>

      <div className="input-group">
        <p className="label">Price's</p>
        <SliderProton
            value={selectedPrice}
            changePrice={changePrice}
        />
      </div>

      <div className="input-group">
        <p className="label">Star Rating</p>
        <FilterListToggle
          options={ratingList}
          value={selectedRating}
          selectToggle={selectRating}
        />
      </div>
    </div>
  );
};

export default FilterPanel;
