function el(type, attrs, children) {
  const el = document.createElement(type);

  for (let key in attrs) {
    el.setAttribute(key, attrs[key]);
  }

  if (typeof children === "array") {
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
