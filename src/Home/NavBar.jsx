import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";

export const NavBar = () => {
  const [searchQuery, setSearchQuery] = useState();

  function changeHandler(e) {
    setSearchQuery(e.target.value);
  }

  function submitQuery(e) {
    e.preventDefault();
    console.log(searchQuery);
  }

  return (
    <div>
      <ul className="nav-desk">
        <li>
          <img
            src="https://i.ibb.co/VWvftV7/whole.png"
            alt="logo"
            className="company-logo"
          />
        </li>
        <form onSubmit={submitQuery} className="search-submit">
          <i>
            <BsSearch />
          </i>
          <input
            type="text"
            name="search"
            value={searchQuery}
            placeholder="Search for your favorite groups in ATG"
            onChange={changeHandler}
            className="search-nav"
          />
        </form>
        <details className="lists-accordian">
          <summary>
            <span>!</span>Create Account.<span>It's Free</span>
          </summary>
        </details>
      </ul>
    </div>
  );
};
