// src/components/Game
import React from "react";
import data from "../../data.json";
import Shuffle from 'shuffle-array';
import Navbar from "../Navbar";
import GameCard from "../GameCard";

class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      data,
      score: 0,
      topScore: 0
    };
    console.log(data)
  }

  alreadyGuessed = [];

  handleImgClick = id => {
    // console.log(id);
    // this.setState({ score: this.state.score + 1 });

    // Shuffle(data)

    const { data } = this.state;
    data.forEach(item => {
      if (id === item.id) {
        item.clicked = true;
      }
    });
    this.setState({ data })

    console.log(id)

    if (this.alreadyGuessed.includes(id)) {
      this.alreadyGuessed = [];
      this.setState({ score: 0 });
      this.setState({ data: Shuffle(this.state.data) })
    } else {
      this.alreadyGuessed.push(id);
      this.setState({ score: this.state.score + 1 });
      if ((this.state.score) >= (this.state.topScore)) {
        this.setState({ topScore: this.state.score + 1 })
      }
      this.setState({ data: Shuffle(this.state.data) });
    }

  }


  render() {
    const {
      data,
      score,
      topScore
    } = this.state;

    return (
      <div>
        <div className="fluid-container">
          <div className="row navbars">
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <Navbar score={score} topScore={topScore} />
          </div>
          <div className="row">
            {data.map(item => (
              <GameCard
                handleImgClick={this.handleImgClick}
                key={item.id} {...item}
              />)
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Game;
