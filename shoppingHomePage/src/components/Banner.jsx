import React from "react";

function Banner() {
  return (
    <>
      <div className="container_banner">
        <div className="inner_container">
          <h2>Don't miss amazing grocery deals</h2>
          <p>Signup for daily news letters</p>

          <div className="search_div">
            <input type="text" placeholder="Your Email address" />
            <button>
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
