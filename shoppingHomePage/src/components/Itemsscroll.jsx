import React, { useState } from "react";
import Card from "./Card";

function Itemsscroll() {
  const [show, setshow] = useState(false);

  let cards = [
    { url: "cat-1.png", title: "Cake & Milk", sub: "11 items" },
    { url: "cat-3.png", title: "Cake & Milk", sub: "11 items" },
    { url: "cat-9.png", title: "Cake & Milk", sub: "11 items" },
    { url: "cat-11.png", title: "Cake & Milk", sub: "11 items" },
    { url: "cat-12.png", title: "Cake & Milk", sub: "11 items" },
    { url: "cat-1.png", title: "Cake & Milk", sub: "11 items" },
    { url: "cat-3.png", title: "Cake & Milk", sub: "11 items" },
    { url: "cat-9.png", title: "Cake & Milk", sub: "11 items" },
    { url: "cat-11.png", title: "Cake & Milk", sub: "11 items" },
    { url: "cat-12.png", title: "Cake & Milk", sub: "11 items" },
  ];

  return (
    <div>
      <div className="item_navbar">
        <h2>Featured categories</h2>

        <div className="nav_List">
          <nav>
            <ul>
              <li>
                <a href="">All</a>
              </li>
              <li>
                <a href="">Milk & Dairies</a>
              </li>
              <li>
                <a href="">Cofee & Tea</a>
              </li>
              <li>
                <a href="">Pet Foods</a>
              </li>
              <li>
                <a href="">Meats</a>
              </li>
              <li>
                <a href="">Vegitables</a>
              </li>
              <li>
                <a href="">Fruits</a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="navigate">
          <div className="dropdown_list margin-right">
            <i
              class="fa-solid fa-bars"
              onClick={() => setshow(show ? false : true)}
            ></i>

            {show ? (
              <div className="dropdown_menu ">
                <nav>
                  <ul>
                    <li>
                      <a href="">All</a>
                    </li>
                    <li>
                      <a href="">Milk & Dairies</a>
                    </li>
                    <li>
                      <a href="">Cofee & Tea</a>
                    </li>
                    <li>
                      <a href="">Pet Foods</a>
                    </li>
                    <li>
                      <a href="">Meats</a>
                    </li>
                    <li>
                      <a href="">Vegitables</a>
                    </li>
                    <li>
                      <a href="">Fruits</a>
                    </li>
                  </ul>
                </nav>
              </div>
            ) : null}
          </div>

          <div className="back">
            <i class="fa-solid fa-arrow-left"></i>
          </div>
          <div className="fard">
            {" "}
            <i class="fa-solid fa-arrow-right"></i>
          </div>
        </div>
      </div>
      <div className="cards_division">
        {cards.map((item) => (
          <Card item={item} />
        ))}
      </div>
    </div>
  );
}

export default Itemsscroll;
