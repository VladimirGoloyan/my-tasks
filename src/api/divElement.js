import domElement from "./domElement";
import el from "./elFunction";

class divElement extends domElement {
  draw(children) {
    return el('div', {}, children);
  }
}

export default divElement;