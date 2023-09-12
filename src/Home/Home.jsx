import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { NavBar } from "./NavBar";
import { HomeGroup } from "./HomeGroup";

export const Home = () => {
  return (
    <div>
      <div>
        <NavBar />
        <HomeGroup />
      </div>
    </div>
  );
};
