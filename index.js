// consilience
const inpString = document.getElementById('inpt'),
      inpUserVal = document.getElementById('inptText'),
      countDiv = document.getElementsByClassName('count')[0]
let inpValue = '',
    userValue = '',
    countRep = 0

inpString.addEventListener('input', function (e) {
  inpValue = e.target.value.toLowerCase()
  console.log(userValue)
  getСonsilience(inpValue, userValue)
  countDiv.innerHTML = countRep
})

inpUserVal.addEventListener('change', function (e) {
  userValue = e.target.value.toLowerCase()
})

function getСonsilience (string, value) {
  let splitString = string.split(value)
  countRep = splitString.length - 1
}

// ---

// analog clock
let date = new Date(),
    hour = date.getHours(),
    min = date.getMinutes(),
    hourElt = document.getElementsByClassName("hour")[0],
    minElt = document.getElementsByClassName("min")[0]

moveTime()

function moveTime() {
  moveMin()
  moveHour()
}

function moveMin() {
  let turnMin = min*6
  minElt.style.transform = "rotate(" + turnMin + "deg)"
  minElt.style.webkitTransform = "rotate(" + turnMin + "deg)"
  setTimeout(function () {
    turnMin += 6
    minElt.style.transform = "rotate(" + turnMin + "deg)"
    minElt.style.webkitTransform = "rotate(" + turnMin + "deg)"
    let eachMin = setInterval(function () {
      turnMin += 6
      minElt.style.transform = "rotate(" + turnMin + "deg)"
      minElt.style.webkitTransform = "rotate(" + turnMin + "deg)"
    }, 60000)
  }, 60 * 1000)
}

function moveHour() {
  if(hour > 11) hour -= 12
  let turnHour = hour*30
  hourElt.style.transform = "rotate(" + turnHour + "deg)"
  hourElt.style.webkitTransform = "rotate(" + turnHour + "deg)"
  // after first hour leftovers
  setTimeout(function () {
    turnHour += 30
    hourElt.style.transform = "rotate(" + turnHour + "deg)"
    hourElt.style.webkitTransform = "rotate(" + turnHour + "deg)"
    // for each hour after first
    let eachHour = setInterval(function () {
      turnHour += 30
      hourElt.style.transform = "rotate(" + turnHour + "deg)"
      hourElt.style.webkitTransform = "rotate(" + turnHour + "deg)"
    }, 3600000)
  }, (60 - min) * 60000)
}

// ---

// calculator

const inpCalc = document.getElementById('calc'),
      errorBlock = document.getElementsByClassName('error-block')[0],
      sqrBtn = document.getElementById('sqr'),
      sqtrBtn = document.getElementById('sqtr'),
      inBtn = document.getElementById('in')
let flag = false,
    inputValue = ''

inpCalc.addEventListener('input', function (e) {
  let inpCalcVal = e.target.value.replace(/\s/g, '')
  if (!isFinite(+inpCalcVal)) {
    inpCalc.className = 'error'
    errorBlock.style.display = 'flex'
    flag = false
  } else {
    inpCalc.className = 'success'
    errorBlock.style.display = 'none'
    flag = true
    inputValue = e.target.value
  }
})

sqrBtn.addEventListener('click', function () {
  calculate(Math.pow, 2)
})

sqtrBtn.addEventListener('click', function () {
  calculate(Math.sqrt)
})

inBtn.addEventListener('click', function () {
  calculate(Math.log)
})

function calculate (methcalc, pow) {
  if(flag) {
      inpCalc.value = methcalc(inputValue, pow)
      inputValue = inpCalc.value
      if(inputValue === 'NaN') {
        inpCalc.className = 'error'
        inpCalc.value = 'impossible to calculate'
      }
    }
}
