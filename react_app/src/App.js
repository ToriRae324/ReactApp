import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import Image from "./components/Image"
import images from "./images.json";

class App extends Component {
  // state
  state = {
    allImages: images,
    selectedArr: [],
    bestScore: 0,
    currentScore: 0,
  }
  // function to shuffle images array (Using Fisher–Yates shuffle)
  shuffle = () => {
    const ShuffArr = (images) => {
      var m = images.length, t, i;

      // While there remain elements to shuffle…
      while (m) {

        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);

        // And swap it with the current element.
        t = images[m];
        images[m] = images[i];
        images[i] = t;
      }

      return images;
    }
    // this.setState({
    //   allImages: ShuffArr
    // })
  }

  // function to increase score after successful selection
  // -(see selected())
  score = () => {
    this.setState({
      currentScore: this.state.currentScore + 1
    })

    if (this.state.currentScore === this.state.bestScore) {
      this.setState({
        bestScore: this.state.bestScore + 1
      })
    }
  }

  // function to add image to selected array
  isSelected = (id) => () => {

    if (!this.state.selectedArr.includes(id)) {

      // const selectedImg = this.state.allImages.filter(image=> image.id === id);

      // set state to include id of selected image
      this.setState({
        selectedArr: this.state.selectedArr.push(id)
      })

      // run score function
      this.score()
      this.shuffle()
    } else {
      this.setState({
        currentScore: 0
      })
      this.shuffle()
    }
  }



  // render page
  render() {
    return (
      // <div className="App">
      <div className="container">
        <Header bestScore={this.state.bestScore} currentScore={this.state.currentScore} />

        <div className="imageDiv text-center">
          {this.state.allImages.map(image =>
            <Image
              src={image.src}
              key={image.id} //For React Use Only
              iid={image.id}
              isSelected={this.isSelected}
              
            />
          )}
        </div>


        {/* Just a footer */}
        <footer className="footer text-center">
          <img src={logo} className="App-logo" alt="logo" /> A React App
        </footer>
      </div>
      // </div>
    );
  }
}

export default App;
