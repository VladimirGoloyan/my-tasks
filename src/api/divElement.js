import domElement from "./domElement";

class divElement extends domElement {
  element = null;
  
  constructor(){
    super('div')
  }
  
  draw(){
    return this.element
  }
}

export default divElement;
