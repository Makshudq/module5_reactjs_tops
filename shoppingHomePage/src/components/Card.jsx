import React from "react";

function Card({ item }) {
  return (
    <div>
      <div className="card_container">
        <img src={item.url} alt="" />
        <p className="title">{item.title}</p>
        <p className="sub_title">{item.sub}</p>
      </div>
    </div>
  );
}

export default Card;
