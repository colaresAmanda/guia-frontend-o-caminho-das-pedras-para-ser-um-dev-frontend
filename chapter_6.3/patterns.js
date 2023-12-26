// Module Pattern example
// closure = function that accesses variables outside its own scope

var counter = (function () {
  var score = 0

  function changeScore(value) {
    score += value
  }
  return {
    increase: function () {
      changeScore(1)
    },
    decrease: function () {
      changeScore(-1)
    },
    currentScore: function () {
      return score
    },
  }
})()

// Revealing Module Pattern example
var counter_ = (function () {
  var score = 0
  function changeScore(value) {
    score += value
  }

  function increase() {
    changeScore(1)
  }
  function decrease() {
    changeScore(-1)
  }
  function currentScore() {
    return score
  }

  return {
    increase,
    decrease,
    currentScore,
  }
})()
