import MouseHandler from "./MouseHandler.js"

export default class Layer {
  constructor(game) {
    this.game = game
    this.mouse = new MouseHandler(this)

    this.game.images = {name: 'forest'}
    
    this.baseUrl = './../../assets/'
    
    this.image = new Image()
    this.image.src = this.getImageSrc()

    this.x = 0
    this.y = 0
  }
  
  getImageSrc() {
    return this.baseUrl + this.game.images.name + '.jpg'
  }

  draw(context) {
    this.image.src = this.getImageSrc()
    context.drawImage(this.image, this.x, this.y)
  }
}