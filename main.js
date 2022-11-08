import Layer from './js/Classes/Layer.js'
import MouseHandler from './js/Classes/MouseHandler.js'
import Text from './js/Classes/Text.js'
import Potions from './js/Classes/Potions.js'


window.addEventListener('load', function() {

const canvas = document.querySelector('#canvas1')
const ctx = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 768


class Game {
  constructor(width, height) {
    this.width = width
    this.height = height
    this.mouse = new MouseHandler(this)
    this.layer = new Layer(this)
    this.text = new Text(this)
    this.potion = new Potions(this)
  }
  
  update() {

  }
  
  draw(context) {
    this.layer.draw(context)
    //this.potions.draw(context)
    
  }
}

const game = new Game(canvas.width, canvas.height)

function animate() {
  requestAnimationFrame(animate)
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  game.draw(ctx)
  game.update()
}

animate()
})