import React, { useState } from "react";
import "./style.css";
import Navbar from "./Navbar";
// const mystyle = { color: "red" };
//mystyle--->object
import Menu from "./menuAPI.js";
import MenuCard from "./MenuCard";

const uniqueList = [
  ...new Set( //... for unique data spread operator
    Menu.map((curElem) => {
      return curElem.category;
    })
  ),
  "All",
];
console.log(uniqueList);

const Restaurant = () => {
  const [menuData, setMenuData] = useState(Menu); //--->always add hooks at the top hierarchy where the funcitonal component begins
  // console.log(menuData);
  const [menuList, setMenuList] = useState(uniqueList); //menuList-->state variable

  const filterItem = (category) => {
    if (category === "All") {
      setMenuData(Menu);
      return;
    }
    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    });
    setMenuData(updatedList);
  };

  return (
    <>
      <Navbar filterItem={filterItem} menuList={menuList} />
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Restaurant;
