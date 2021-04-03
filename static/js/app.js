import API from './api.js'
import Character from './character.js'
const api = new API()

let currentCharacter = 1
const $loadNext = document.querySelector('#load-next')
const $loadBack = document.querySelector('#load-back')

//método de rick //Llama la propiedad render
//rick.render() //Se usa this en la clase para no tener que llamar al método.

// Arrow next
$loadNext.addEventListener('click', async () => {
  if (currentCharacter == 671) {
    currentCharacter = 1
    const characterData = await api.getCharacter(currentCharacter)
    new Character(characterData);
  }
  else {
    const characterData = await api.getCharacter(++currentCharacter)
    console.log(currentCharacter);
    new Character(characterData);
  }
})

// Arrow back
$loadBack.addEventListener('click', async () => {

  if (currentCharacter == 1) {

    currentCharacter = 671
    const characterData = await api.getCharacter(currentCharacter)
    new Character(characterData);
  }
  else {
    const characterData = await api.getCharacter(--currentCharacter)
    new Character(characterData);
  }
})


//funcion que inicia la aplicación
async function intiApp(initCharacterId) {
  const characterData = await api.getCharacter(initCharacterId)

  //crea la instancia de la clase
  new Character(characterData);
}

intiApp(currentCharacter);

console.log('Its working!')

//De la clase API llamo a su método getCharacter
// console.log(api.getCharacter(210));