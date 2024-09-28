import React, { useState } from "react";

function Navbar() {
  const [showDrop, setshowDrop] = useState(false);
  return (
    <>
      <div className="navbar_div">
        <div className="left_div">
          <a href="#">
            <img src="sitelogo.png" alt="" />
          </a>

          <input type="text" placeholder="Search Here" />
          <button>
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <div className="side_div">
          <select name="" id="" className="sidediv_select">
            <option value="" selected>
              Your Location
            </option>
          </select>
          <div className="  menu_navbar">
            <i
              class="fa-solid fa-bars"
              onClick={() => setshowDrop(showDrop ? false : true)}
            ></i>
          </div>
          {showDrop ? (
            <div className="dropdown_menu">
              <ul>
                <li className="list">
                  <i class="fa-duotone fa-solid fa-arrows-spin fa_icon"></i>
                  <span className="badge">2</span>
                  compare
                </li>
                <li className="list">
                  <i class="fa-regular fa-heart fa_icon"></i>
                  <span className="badge">2</span>
                  wish List
                </li>
                <li className="list">
                  <i class="fa-solid fa-cart-plus fa_icon"></i>
                  <span className="badge">2</span>
                  Cart
                </li>
                <li className="list">
                  <i class="fa-regular fa-user fa_icon"></i>
                  <span className="badge">2</span>
                  Account
                </li>
              </ul>
            </div>
          ) : null}
          <div className="navList">
            <ul>
              <li className="list">
                <i class="fa-duotone fa-solid fa-arrows-spin fa_icon"></i>
                <span className="badge">2</span>
                compare
              </li>
              <li className="list">
                <i class="fa-regular fa-heart fa_icon"></i>
                <span className="badge">2</span>
                wish List
              </li>
              <li className="list">
                <i class="fa-solid fa-cart-plus fa_icon"></i>
                <span className="badge">2</span>
                Cart
              </li>
              <li className="list">
                <i class="fa-regular fa-user fa_icon"></i>
                <span className="badge">2</span>
                Account
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
