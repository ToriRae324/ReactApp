import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import Image from "./components/Image"
import images from "./images.json";

class App extends Component {
  // states
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
    this.setState({
      allImages: ShuffArr(this.state.allImages)
    })
  }

  // function to check for win
  checkWin = () => {
    if (this.state.currentScore + 1 === 12) {
      alert(`Congratulations! You Win!`)
    }
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

      // create new array containing selectedArr and id
      const newArr = [...this.state.selectedArr, id];

      // set state to include id of selected image
      this.setState({
        selectedArr: newArr
      })

      // run score function
      this.score()
      this.shuffle()
      this.checkWin()
    }
    // else if (this.state.currentScore === 12) {
    //   alert(`Congratulations! You Won!`)
    //   this.setState({
    //     currentScore: 0
    //   })
    //   this.setState({
    //     selectedArr: []
    //   })
    //   this.shuffle()
    // }
    // else - if you selected one prev selected 
    else {
      alert(`Sorry, try again`);
      this.setState({
        currentScore: 0
      })
      this.setState({
        selectedArr: []
      })
      this.shuffle()
    }
  }



  // render page
  render() {
    return (
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
        <footer className="footer text-center shadow">
          <img src={logo} className="App-logo" alt="logo" /> A React App
        </footer>
      </div>
    );
  }
}

export default App;
