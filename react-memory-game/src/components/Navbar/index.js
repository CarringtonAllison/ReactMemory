import React from "react";

function Navbar(props) {
    return (
        <div className="col-10 col-lg-5 center blackBack">
            <div className="scoreText">Click Each Player To Score</div>
            <div className="scoreText"> Try Not To Select The Same Player Twice Or You Lose!</div>
            <div className="score">Score: {props.score} | High Score: {props.topScore}</div>
        </div>
    )
}

export default Navbar;
