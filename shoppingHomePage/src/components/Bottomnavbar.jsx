import React, { useState } from "react";

function Bottomnavbar() {
  const [showDrop, setshowDrop] = useState(true);
  return (
    <>
      <div className="bottom_nav">
        <select name="categories" id="">
          <option value="">Browse All Categories</option>
          <option value="">food2</option>
          <option value="">food3</option>
        </select>

        <div className="bottom_nav_list">
          <nav>
            <ul>
              <li>
                <a href="">
                  <i class="fa-solid fa-fire"></i>Hot Deals
                </a>
              </li>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Shop</a>
              </li>
              <li>
                <a href="">Vendors</a>
              </li>
              <li>
                <a href="">Mega Menu</a>
              </li>
              <li>
                <a href="">Blogs</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="logo_outer">
          <div className="dropdown_list margin-right">
            <i
              class="fa-solid fa-bars"
              onClick={() => setshowDrop(showDrop ? false : true)}
            ></i>

            {showDrop ? (
              <div className="dropdown_menu">
                <nav>
                  <ul>
                    <li>
                      <a href="">
                        <i class="fa-solid fa-fire"></i>Hot Deals
                      </a>
                    </li>
                    <li>
                      <a href="">Home</a>
                    </li>
                    <li>
                      <a href="">About</a>
                    </li>
                    <li>
                      <a href="">Shop</a>
                    </li>
                    <li>
                      <a href="">Vendors</a>
                    </li>
                    <li>
                      <a href="">Mega Menu</a>
                    </li>
                    <li>
                      <a href="">Blogs</a>
                    </li>
                    <li>
                      <a href="">Contact</a>
                    </li>
                  </ul>
                </nav>
              </div>
            ) : null}
          </div>

          <i class="fa-solid fa-headphones"></i>
          <p>
            017XXXXXX <br></br>
            <span>24/7 Support</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Bottomnavbar;
