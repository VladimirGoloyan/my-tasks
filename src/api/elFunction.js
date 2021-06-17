function el(type, attrs, children) {
  if (typeof type !== "string" || typeof attrs !== "object")
    throw new Error("Type and attrs input must be of type string and object");

  const el = document.createElement(type);

  for (let key in attrs) {
    el.setAttribute(key, attrs[key]);
  }

  if (Array.isArray(children)) {
    children.forEach((child) => {
      if (typeof child === "string") {
        el.appendChild(document.createTextNode(child));
      } else {
        el.appendChild(child);
      }
    });
  } else {
    el.appendChild(document.createTextNode(children));
  }

  return el;
}

export default el;
