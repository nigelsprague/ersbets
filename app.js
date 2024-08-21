let bank = 100

const players = [
  { teamNumber: 1, emoji: '🏃‍♂️', skill: 10, name: "D'Marcus Williums" },
  { teamNumber: 1, emoji: '🤾‍♂️', skill: 30, name: "Tyroil Smoochie-Wallace" },
  { teamNumber: 1, emoji: '🏇', skill: 88, name: "Jackmerius Tacktheratrix" },
  { teamNumber: 1, emoji: '🏌️‍♀️', skill: 15, name: "Javaris Jamar Javarison-Lamar" },
  { teamNumber: 1, emoji: '🏋️‍♂️', skill: 77, name: "D'Pez Poopsie" },
  { teamNumber: 1, emoji: '🏌️‍♂️', skill: 21, name: "D'Jasper Probincrux III" },
  { teamNumber: 1, emoji: '🤾', skill: 5, name: "Leoz Maxwell Jilliumz" },
  { teamNumber: 1, emoji: '🏂', skill: 99, name: "Hingle McCringleberry" },
  { teamNumber: 1, emoji: '🧘‍♀️', skill: 50, name: "L'Carpetron Dookmarriot" },
  { teamNumber: 1, emoji: '🚶‍♀️', skill: 1, name: "Xmus Jaxon Flaxon-Waxon" },
  { teamNumber: 2, emoji: '🏋️‍♀️', skill: 61, name: "Saggitariutt Jefferspin" },
  { teamNumber: 2, emoji: '🤺', skill: 34, name: "Quatro Quatro" },
  { teamNumber: 2, emoji: '🏄', skill: 71, name: "X-Wing @Aliciousness" },
  { teamNumber: 2, emoji: '🧜‍♂️', skill: 76, name: "Bisquiteen Trisket" },
  { teamNumber: 2, emoji: '🤸', skill: 47, name: "Scoish Velociraptor Maloish" },
  { teamNumber: 2, emoji: '⛹️‍♀️', skill: 23, name: "Donkey Teeth" },
  { teamNumber: 2, emoji: '🕴️', skill: 58, name: "T.J. A.J. R.J. Backslashinfourth V" },
  { teamNumber: 2, emoji: '💃', skill: 99, name: "Firstname Lastname" },
  { teamNumber: 2, emoji: '🧍‍♂️', skill: 3, name: "Dan Smith" },
  { teamNumber: 2, emoji: '🐅', skill: 100, name: "Tiger" },
]

const team1Elem = document.getElementById('team1')
const team2Elem = document.getElementById('team2')

function drawTeam1() {
  let team1Container = ''
  let team1 = players.filter((player) => player.teamNumber == 1)
  team1.forEach(player => team1Container += player.emoji)
  team1Elem.innerText = team1Container
}

function drawTeam2() {
  let team2Container = ''
  let team2 = players.filter(player => player.teamNumber == 2)
  team2.forEach(player => team2Container += player.emoji)
  team2Elem.innerText = team2Container
}

reRack()

function betTeam1(bet) {
  let totalSkill1 = 0
  let totalSkill2 = 0
  let team1 = players.filter(player => player.teamNumber == 1)
  let team2 = players.filter(player => player.teamNumber == 2)
  team1.forEach(player => totalSkill1 += player.skill)
  team2.forEach(player => totalSkill2 += player.skill)
  if (totalSkill1 > totalSkill2) {
    bank += bet
    console.log(bank, 'win')
    alert('won 💰💸💵')
  } else {
    bank -= bet
    console.log(bank, 'lost')
    alert('lost 💰💸💵')
  }
  updateBank()
}

function betTeam2(bet) {
  let totalSkill1 = 0
  let totalSkill2 = 0
  let team1 = players.filter(player => player.teamNumber == 1)
  let team2 = players.filter(player => player.teamNumber == 2)
  team1.forEach(player => totalSkill1 += player.skill)
  team2.forEach(player => totalSkill2 += player.skill)
  console.log(totalSkill1, totalSkill2)
  if (totalSkill2 > totalSkill1) {
    bank += bet
    console.log(bank, 'win')
    alert('won 💰💸💵')
  } else {
    bank -= bet
    console.log(bank, 'lost')
    alert('lost 💰💸💵')
  }
  updateBank()
}

function betAll(team) {
  let totalSkill1 = 0
  let totalSkill2 = 0
  let team1 = players.filter(player => player.teamNumber == 1)
  let team2 = players.filter(player => player.teamNumber == 2)
  team1.forEach(player => totalSkill1 += player.skill)
  team2.forEach(player => totalSkill2 += player.skill)
  if (team == 'team1' && totalSkill1 > totalSkill1) {
    bank += bank
    console.log(bank, 'win')
    alert('won 💰💸💵')
  } else if (team == 'team2' && totalSkill2 > totalSkill1) {
    bank += bank
    console.log(bank, 'win')
    alert('won 💰💸💵')
  } else {
    bank = 0
    console.log(bank, 'lost')
    alert('lost 💰💸💵')
  }
  updateBank()
}

function updateBank() {
  document.getElementById('bank').innerText = bank
  reRack()
  if (bank <= 0) {
    alert('Financially Dunked on. You have lost the game')
    let loser = document.getElementsByClassName('border-dark')
    console.log(loser)
    for (let i = 0; i < loser.length; i++) {
      let elem = loser[i]
      elem.innerText = 'loser'
    }
  }
}

function reRack() {
  players.forEach(player => player.teamNumber = Math.round(Math.random()) + 1)
  drawTeam1()
  drawTeam2()
}

