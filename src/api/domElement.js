export default class domElement {
  constructor(type) {
    const el = type
      ? document.createElement(type)
      : document.createElement("div");
  }
}
