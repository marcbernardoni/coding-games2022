var monsters = [
  {
    name: 'Hello',
    type: 'air',
    image: './assets/placeholder.jpg'
  },
  {
    name: 'Toon-jat-tyeta',
    type: 'terre',
    image: './assets/placeholder.jpg'
  },
  {
    name: 'Hallo',
    type: 'terre',
    image: './assets/placeholder.jpg'
  },
  {
    name: 'Moin',
    type: 'feu',
    image: './assets/placeholder.jpg'
  },
  {
    name: 'Hey',
    type: 'air',
    image: './assets/placeholder.jpg'
  },
  {
    name: 'Demat',
    type: 'eau',
    image: './assets/placeholder.jpg'
  },
  {
    name: 'Zdravei',
    type: 'terre',
    image: './assets/placeholder.jpg'
  },
  {
    name: 'Dobar Dan',
    type: 'eau',
    image: './assets/placeholder.jpg'
  },
  {
    name: 'Bok',
    type: 'air',
    image: './assets/placeholder.jpg'
  }
]

function appendContent(target) {
  var elem = document.querySelector('#' + target.id)
  elem.innerHTML = `<h2>Monstre de type ${target.id}</h2>`


  monsters.forEach(monster => {
    if (target.id !== 'all') {
      if (monster.type === target.id) {
        let div = document.createElement('div')
        elem.appendChild(div)
        
        let title = document.createElement('p')
        title.classList.add('title')
        title.innerHTML = monster.name
        
        let image = document.createElement('img')
        image.setAttribute('src', monster.image)
        image.setAttribute('alt', monster.name)
        
        div.append(title, image)
      }
    } else {
      let div = document.createElement('div')
      elem.appendChild(div)

      let title = document.createElement('p')
      title.classList.add('title')
      title.innerHTML = monster.name
      
      let image = document.createElement('img')
      image.setAttribute('src', monster.image)
      image.setAttribute('alt', monster.name)
      
      let type = document.createElement('p')
      type.classList.add('type')
      type.innerHTML = 'Je suis du type ' + monster.type
      
      div.append(title, image, type)

    } 
  })

}

const tabs = document.querySelectorAll('[data-tab-value]')
const tabInfos = document.querySelectorAll('[data-tab-info]')

tabs.forEach(tab => {
  tab.addEventListener('click', (e) => {
    e.preventDefault()
    // let type = e.target.getAttribute('data-tab-value').slice(1)
    
    const target = document.querySelector(tab.dataset.tabValue)
    appendContent(target)
    

    tabInfos.forEach(tabInfo => {
      tabInfo.classList.remove('active')
    })
    target.classList.add('active')
  })
})



// 