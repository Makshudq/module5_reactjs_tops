import React from "react";

function Topbar() {
  return (
    <div>
      <nav className="nav topbar_nav">
        <ul>
          <li>
            <a href="#">AboutUs</a>
          </li>
          <li>
            <a href="#">My Account</a>
          </li>
          <li>
            <a href="#">WishList</a>
          </li>
          <li>
            <a href="#">Order Tracking</a>
          </li>
        </ul>

        <p>
          Get greate Device upto 50% Off{" "}
          <span className="highlight">View Detail</span>
        </p>

        <div className="select_grp_div">
          <p>
            need help ? call us at{" "}
            <span className="highlight">1800 1800 1818</span>{" "}
          </p>
          |
          <select name="" id="">
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
            <option value="Turkish">Turkish</option>
          </select>
          <select name="" id="">
            <option value="English" selected>
              USD
            </option>
            <option value="Hindi">India</option>
            <option value="Turkish">Turkiye</option>
          </select>
        </div>
      </nav>
    </div>
  );
}

export default Topbar;
