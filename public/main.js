const main = () => {}

let resultRight = 0
let resultLeft = 0

const addItTeamRight = () => {
  // resultRight = defaultNumberRight++
  resultRight++
  document.querySelector('.team-2-score').textContent = resultRight
}

const addItTeamLeft = () => {
  // resultLeft = defaultNumberLeft++
  resultLeft++
  document.querySelector('.team-1-score').textContent = resultLeft
}

const subtractItTeamRight = () => {
  // resultRight = defaultNumberRight--
  resultRight--
  document.querySelector('.team-2-score').textContent = resultRight
}

const subtractItTeamLeft = () => {
  // resultLeft = defaultNumberLeft--
  resultLeft--
  document.querySelector('.team-1-score').textContent = resultLeft
}

const team1Name = () => {
  const team1Add = document.querySelector('.team-1-input').value
  console.log(team1Add)
  document.querySelector('.team-1-name').textContent = team1Add
}
const team2Name = () => {
  const team2Add = document.querySelector('.team-2-input').value
  console.log(team2Add)
  document.querySelector('.team-2-name').textContent = team2Add
}
document.addEventListener('DOMContentLoaded', main)

document
  .querySelector('.update-team-1-name')
  .addEventListener('click', team1Name)

document
  .querySelector('.update-team-2-name')
  .addEventListener('click', team2Name)

document
  .querySelector('.team-1-add-1-button')
  .addEventListener('click', addItTeamLeft)
document
  .querySelector('.team-1-subtract-1-button')
  .addEventListener('click', subtractItTeamLeft)
document
  .querySelector('.team-2-add-1-button')
  .addEventListener('click', addItTeamRight)

document
  .querySelector('.team-2-subtract-1-button')
  .addEventListener('click', subtractItTeamRight)
