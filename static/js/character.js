export default class Character {
  // llama a la propiedad render dentro de la clase
  constructor({ name, image, gender, species, status }) {
    this.name = name
    this.image = image
    this.gender = gender
    this.species = species
    this.status = status

    //containers div (image, name, description)
    this.$characterImageContainer = document.querySelector('#character-image-container')
    this.$characterNameContainer = document.querySelector('#character-name-container')
    this.$characterDescriptionContainer = document.querySelector('#character-description-container')
    this.$characterNamePlaceHolderContainer = document.querySelector('#character-name-placeholder')

    // console.log(this.$characterNamePlaceHolderContainer);
    // console.log(this.name);
    // console.log(this.$characterDescriptionContainer);

    this.render()
  }

  //template article
  //?pseudo react - renderiza en el container la plantilla

  buildImage() {
    return `
    <img class="character-image" src="${this.image}" alt="${this.name}">
    `
  }

  buildName() {
    return `
    <div class="character-name">
        <h2>${this.name}</h2>
      </div>
    `
  }

  buildDescription() {
    return `
    <div class="character-labels">
        <h3 class="character-label">Género: ${this.gender}</h3>
        <h3 class="character-label"> Specie: ${this.species}</h3>
        <h3 class="character-label">Status: ${this.status}</h3>
      </div>
    `
  }

  render() {
    this.$characterImageContainer.innerHTML = this.buildImage()
    this.$characterNameContainer.innerHTML = this.buildName()
    this.$characterDescriptionContainer.innerHTML = this.buildDescription()
    this.$characterNamePlaceHolderContainer.innerHTML = this.name
  }
}