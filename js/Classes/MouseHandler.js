import Items from './Items.js'
import SoundController from './SoundController.js'
import Potions from './Potions.js'

export default class MouseHandler {
  constructor(game, context) {
    this.game = game
    this.context = context
    this.items = new Items()
    this.sound = new SoundController()
    this.potions = new Potions()

    window.addEventListener('click', e => {
      e.preventDefault()
      console.log(e.x, e.y)
      //console.log(this.game.images.name)
      if (e.x > this.items.raven.x && 
          e.x < this.items.raven.x + this.items.raven.w && 
          e.y > this.items.raven.y &&
          e.y < this.items.raven.y + this.items.raven.h) {
          this.sound.raven()
      }

      if (this.game.images.name === 'forest') {
        if (e.x > this.items.door.x && 
            e.x < this.items.door.x + this.items.door.w && 
            e.y > this.items.door.y &&
            e.y < this.items.door.y + this.items.door.h) {
              this.game.images = {name: 'door'}
          }
        } else if ( this.game.images.name === 'door') {
        if (e.x > this.items.entry.x && 
          e.x < this.items.entry.x + this.items.entry.w && 
          e.y > this.items.entry.y &&
          e.y < this.items.entry.y + this.items.entry.h) {
            this.game.images = {name: 'cuisineJour'}
          }
        } else if ( this.game.images.name === 'cuisineJour') {
          if (e.x > this.items.brownBook.x && 
          e.x < this.items.brownBook.x + this.items.brownBook.w && 
          e.y > this.items.brownBook.y &&
          e.y < this.items.brownBook.y + this.items.brownBook.h) {
            this.game.images = {name: 'livreRouge'}
          } else if (e.x > this.items.blueBook.x && 
            e.x < this.items.blueBook.x + this.items.blueBook.w && 
            e.y > this.items.blueBook.y &&
            e.y < this.items.blueBook.y + this.items.blueBook.h) {
              this.game.images = {name: 'livreBleu'}  //||
          } else if (e.x > this.items.greenBook.x && 
            e.x < this.items.greenBook.x + this.items.greenBook.w && 
            e.y > this.items.greenBook.y &&
            e.y < this.items.greenBook.y + this.items.greenBook.h) {
              this.game.images = {name: 'livreVert'}
          } else if (e.x > this.items.purpleBook.x && 
            e.x < this.items.purpleBook.x + this.items.purpleBook.w && 
            e.y > this.items.purpleBook.y &&
            e.y < this.items.purpleBook.y + this.items.purpleBook.h) {
              this.game.images = {name: 'livreViolet'}
          }else if (e.x > this.items.monstersBook.x && 
            e.x < this.items.monstersBook.x + this.items.monstersBook.w && 
            e.y > this.items.monstersBook.y &&
            e.y < this.items.monstersBook.y + this.items.monstersBook.h) {
              this.game.images = {name: 'grimoir'}
          } else if (e.x > this.items.cat.x && 
            e.x < this.items.cat.x + this.items.cat.w && 
            e.y > this.items.cat.y &&
            e.y < this.items.cat.y + this.items.cat.h) {
              this.sound.cat()
          } else if (e.x > this.items.redFlask.x && 
            e.x < this.items.redFlask.x + this.items.redFlask.w && 
            e.y > this.items.redFlask.y &&
            e.y < this.items.redFlask.y + this.items.redFlask.h) {
              this.potions.reciepe('feu')
          } else if (e.x > this.items.blueFlask.x && 
            e.x < this.items.blueFlask.x + this.items.blueFlask.w && 
            e.y > this.items.blueFlask.y &&
            e.y < this.items.blueFlask.y + this.items.blueFlask.h) {
              this.potions.reciepe('eau')
          } else if (e.x > this.items.greenFlask.x && 
            e.x < this.items.greenFlask.x + this.items.greenFlask.w && 
            e.y > this.items.greenFlask.y &&
            e.y < this.items.greenFlask.y + this.items.greenFlask.h) {
              this.potions.reciepe('terre')
          } else if (e.x > this.items.purpleFlask.x && 
            e.x < this.items.purpleFlask.x + this.items.purpleFlask.w && 
            e.y > this.items.purpleFlask.y &&
            e.y < this.items.purpleFlask.y + this.items.purpleFlask.h) {
              this.potions.reciepe('air')
          } else if (e.x > this.items.cauldron.x && 
            e.x < this.items.cauldron.x + this.items.cauldron.w && 
            e.y > this.items.cauldron.y &&
            e.y < this.items.cauldron.y + this.items.cauldron.h) {
              this.potions.mix()
            }
        } else if ( this.game.images.name === 'livreBleu' || 'livreRouge' || 'livreVert' || 'livreViolet' || 'grimoir') {
          if (e.x > this.items.return.x && 
            e.x < this.items.return.x + this.items.return.w && 
            e.y > this.items.return.y &&
            e.y < this.items.return.y + this.items.return.h) {
              this.game.images = {name: 'cuisineJour'}
            }
          } 
    })
  }
}