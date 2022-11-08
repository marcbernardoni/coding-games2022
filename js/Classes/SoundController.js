export default class SoundController {
  constructor() {
    this.catSound = document.querySelector('#cat')
    this.ravenSound = document.querySelector('#raven')
  }

  cat() {
    this.catSound.currentTime = 0
    this.catSound.play()
  }

  raven() {
    this.ravenSound.currentTime = 0
    this.ravenSound.play()
  }
}