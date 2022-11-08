import Textes from './../datas/textes.js'

export default class Text {
  constructor() {
    // this.game = game
    this.textes = new Textes()
    this.x = 620
    this.y = 220
  }

  draw(texte, ctx) {
    const book = this.textes
    const title = book[texte].title
    const paragraph = book[texte].paragraph
  
    ctx.font = "30px Arial"
    ctx.fillStyle = 'black'
    ctx.fillText("Hello World", 0, 0)
  }

}