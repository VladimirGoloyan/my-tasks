export default class domElement{
  element = null;

  constructor(type) {
    this.element = document.createElement(type)
  }

  draw(){
    return this.element;
  }
}
