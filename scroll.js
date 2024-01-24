const ticker = document.querySelector('.ticker')
const list = document.querySelector('.ticker__list')

let gg = false
// ANIMATION WILL PLAY FOR 2S AND THEN FREEZE
// TO DEMONSTRATE THE PROBLEM
setTimeout(() => {
  gg = true
  while(gg) {
  // event loop is blocked
  // animation freezes if translateX is a %
  // animation continues if translateX is set to pixels
    
  }
}, 2000)



setTimeout(() => {
  gg = false
}, 3000)