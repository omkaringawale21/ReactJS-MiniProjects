import React, { useEffect, useState } from "react";
import EmptyView from "../../Components/Common/EmptyView/EmptyView";
import FilterPanel from "../../Components/Home/FilterPanel/FilterPanel";
import List from "../../Components/Home/List/List";
import SearchBar from "../../Components/Home/SearchBar/SearchBar";
import { dataList } from "../../Constants/index";
import "./Home.css";

const Home = () => {
  const [list, setList] = useState(dataList);
  const [inputSearch, setInputSearch] = useState("");
  const [setResultFound, setSetResultFound] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedRating, setSelectedRating] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState([1000, 5000]);
  const [cuisines, setCuisines] = useState([
    {
      id: 1,
      checked: false,
      label: "American",
    },
    {
      id: 2,
      checked: false,
      label: "Chinese",
    },
    {
      id: 3,
      checked: false,
      label: "Italian",
    },
  ]);

  const handleSelectCategory = (event, value) =>
    !value ? null : setSelectedCategory(value);

  const handleSelectRating = (event, value) =>
    !value ? null : setSelectedRating(value);

  const handleChangedChecked = (id) => {
    const cuisinesStateList = cuisines;
    const changedCheckedCuisines = cuisinesStateList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setCuisines(changedCheckedCuisines);
  };

  const handleChangePrice = (event, value) => setSelectedPrice(value);

  const applyFilters = () => {
    let updatedList = dataList;

    // Rating Filter
    if (selectedRating) {
      updatedList = dataList.filter(
        (item) => parseInt(item.rating) === parseInt(selectedRating)
      );
    }

    // Category Filter
    if (selectedCategory) {
      updatedList = dataList.filter(
        (item) => item.category === selectedCategory
      );
    }

    // Cuisine Filter
    const cuisineChecked = cuisines
      .filter((item) => item.checked)
      .map((item) => item.label.toLowerCase());

    if (cuisineChecked.length) {
      updatedList = updatedList.filter((item) =>
        cuisineChecked.includes(item.cuisine)
      );
    }

    // Price Filter
    const minPrice = selectedPrice[0];
    const maxPrice = selectedPrice[1];

    updatedList = updatedList.filter(
      (item) => item.price >= minPrice && item.price <= maxPrice
    );

    // Search Bar Filter
    if (inputSearch) {
      updatedList = updatedList.filter(
        (item) =>
          item.title.toLowerCase().search(inputSearch.toLowerCase().trim()) !==
          -1
      );
    }

    setList(updatedList);
    !updatedList.length ? setSetResultFound(false) : setSetResultFound(true);
  };

  useEffect(() => {
    applyFilters();
  }, [selectedRating, selectedCategory, cuisines, selectedPrice, inputSearch]);

  return (
    <div className="home">
      <SearchBar
        value={inputSearch}
        changeInput={(e) => setInputSearch(e.target.value)}
      />
      <div className="home_panelList-wrap">
        <div className="home_panel-wrap">
          <FilterPanel
            selectToggle={handleSelectCategory}
            selectedCategory={selectedCategory}
            selectRating={handleSelectRating}
            selectedRating={selectedRating}
            cuisines={cuisines}
            changedChecked={handleChangedChecked}
            changePrice={handleChangePrice}
            selectedPrice={selectedPrice}
          />
        </div>
        <div className="home_list-wrap">
          {setResultFound ? <List list={list} /> : <EmptyView />}
        </div>
      </div>
    </div>
  );
};

export default Home;
