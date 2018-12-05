import React from "react";

function GameCard(props) {
  return (
    <div className="col-3">
      <div className="center" onClick={() => props.handleImgClick(props.id)}>
        <img className="pic" src={props.image} />
      </div>
    </div>
  );
}

export default GameCard;
