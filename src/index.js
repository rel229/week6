// DO NOT MODIFY

// So we can use React
var React = require('react')
var ReactDOM = require('react-dom')

// Helper functions
// .shuffle() shuffles (randomizes the order of) an array
// e.g. [1,2,3,4,5].shuffle()
// getDeck() gives us an array of cards, represented as strings
// Hint: JavaScript's built-in .splice() function will remove elements from an
// array to create a new array. For example, a "hand" from a deck of cards might
// go something like this:
//
// deck.splice(0,5)
var helpers = require('./components/Helpers')
var getDeck = helpers.getDeck
Array.prototype.shuffle = helpers.shuffle

// Our component classes
var Card = require('./components/Card')

// END OF STUFF TO NOT MODIFY
var startDeck = ['face_down', 'face_down', 'face_down', 'face_down', 'face_down'];
var App = React.createClass({

  dealMe: function() {
    var newDeck = getDeck().shuffle().splice(0,5)
    this.setState({
      cards: newDeck,
      })
  },

  getInitialState: function() {
    return {
      cards: startDeck
      }
  },

  render: function() {
    return (
      <div>
        <h1>Poker Time!</h1>
          <Card cards={this.state.cards[0]}/>
          <Card cards={this.state.cards[1]}/>
          <Card cards={this.state.cards[2]}/>
          <Card cards={this.state.cards[3]}/>
          <Card cards={this.state.cards[4]}/>
        <div className="col-sm-2">
          <h1><a href="#" onClick={this.dealMe} className="btn btn-success">Deal</a></h1>
        </div>
      </div>
    )
  }

})

ReactDOM.render(<App />, document.getElementById("app"))
