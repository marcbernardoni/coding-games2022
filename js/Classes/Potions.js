import Items from './Items.js'
import Solutions from './../datas/conditions.js'
// import Layer from './../Classes/Layer.js'

export default class Potions {

  constructor(game) {
    this.items = new Items()
    this.foundMonsters = 15
    this.solutions = new Solutions()
    this.game = game
    console.log('game:', game)
    // this.layer = new Layer()
  }

  reciepe (currentFlask) {
    let cauldron = this.items.cauldron.innerCauldron
    cauldron.push(currentFlask)
    if (cauldron.length > 4) {
      cauldron.pop()
    }
  }

  mix () {
    if (this.foundMonsters <= 15) {
      this.solutions.monsters.forEach(monster => {
        if (this.items.cauldron.innerCauldron[0] === monster.type1 &&
          this.items.cauldron.innerCauldron[1] ===monster.type2){
            if (!monster.found) this.foundMonsters++
            monster.found = true
            this.items.cauldron.innerCauldron=[]
            this.displayMonster(monster)
          }
      })
    } else {
      const monster = this.solutions.monsters[this.solutions.monsters.length-1]
      if (this.items.cauldron.innerCauldron[0] === monster.type1 &&
          this.items.cauldron.innerCauldron[1] === monster.type2 &&
          this.items.cauldron.innerCauldron[2] === monster.type3 &&
          this.items.cauldron.innerCauldron[3] === monster.type4) {
            this.displayMonster(monster)
          }
    }
  }



  displayMonster(monstre) {
    console.log(monstre)
    console.log(this.game)
  }

  draw(context) {
    console.log('spèce de pouffe')
  }

}