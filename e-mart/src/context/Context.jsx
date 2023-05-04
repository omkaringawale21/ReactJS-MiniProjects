import React, { createContext, useContext, useEffect, useState } from "react";
import { ShopList } from "./Data";

export const UIContext = createContext();
export const useUIContext = () => useContext(UIContext);

export const UIProvider = ({ children }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [getProductsDtls, setGetProductsDtls] = useState(ShopList);
  const [search, setSearch] = useState("");
  const [newFilterItems, setNewFilterItems] = useState(getProductsDtls);
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    setFilterData(getProductsDtls);
  }, []);

  const filterItems = (prodName) => {
    const updatedItems = getProductsDtls.filter((item) => {
      return item.prodName === prodName;
    });
    console.log("updatedItems", updatedItems);
    setNewFilterItems(updatedItems);
  };

  const handleFiltering = (e) => {
    const sorting = e.target.value;

    if (sorting === "All") {
      setNewFilterItems(getProductsDtls);
    } else if (sorting === "SmartPhone") {
      filterItems("SmartPhone");
    } else if (sorting === "DSLR Camera") {
      filterItems("DSLR Camera");
    } else if (sorting === "LCD TV") {
      filterItems("LCD TV");
    } else if (sorting === "Sound-Pot") {
      filterItems("Sound-Pot");
    } else if (sorting === "Front-Camera") {
      filterItems("Front-Camera");
    } else if (sorting === "SmartWatch") {
      filterItems("SmartWatch");
    } else if (sorting === "Head-Set") {
      filterItems("Head-Set");
    }
  };

  const value = {
    drawerOpen,
    setDrawerOpen,
    getProductsDtls,
    setGetProductsDtls,
    search,
    setSearch,
    newFilterItems,
    setNewFilterItems,
    filterData,
    setFilterData,
    filterItems,
    handleFiltering,
  };
  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};
