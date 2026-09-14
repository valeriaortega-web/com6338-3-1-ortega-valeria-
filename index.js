var words = [
  'bananas',
  'grapes',
  'carousel',
  'milkshake',
  'javascript',
  'limousine',
  'chocolate',
  'programming',
  'meatloaf',
  'ukulele',
  'mango'
]

var currentWord
var displayedWord = []

var incorrectLetters = []
var remainingGuesses = 10
var wins = 0
var losses = 0

function startGame() {
  var randomIndex = Math.floor(Math.random() * words.length)
  currentWord = words[randomIndex]

  displayedWord = []

  for (var i = 0; i < currentWord.length; i++) {
    displayedWord.push('_')
  }

  incorrectLetters = []
  remainingGuesses = 10

  document.getElementById('word-to-guess').textContent = displayedWord.join('')
  document.getElementById('incorrect-letters').textContent = ''
  document.getElementById('remaining-guesses').textContent = remainingGuesses
}

document.addEventListener('keydown', function(event) {
  var letter = event.key.toLowerCase()

  if (!/^[a-z]$/.test(letter)) {
    return
  }

  if (incorrectLetters.includes(letter)) {
    return
  }

  if (currentWord.includes(letter)) {
  for (var i = 0; i < currentWord.length; i++) {
    if (currentWord[i] === letter) {
      displayedWord[i] = letter
    }
  }

  document.getElementById('word-to-guess').textContent = displayedWord.join('')

  if (!displayedWord.includes('_')) {
  wins++
  document.getElementById('wins').textContent = wins

  document.getElementById('previous-word').textContent = currentWord

  startGame()
}
} else {
  incorrectLetters.push(letter)
  remainingGuesses--

  document.getElementById('incorrect-letters').textContent = incorrectLetters.join(', ')
  document.getElementById('remaining-guesses').textContent = remainingGuesses

  if (remainingGuesses === 0) {
    losses++
    document.getElementById('losses').textContent = losses

    document.getElementById('previous-word').textContent = currentWord

    startGame()
  }
}
})

startGame()