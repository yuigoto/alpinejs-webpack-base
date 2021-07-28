const appendChild = (parent, child) => {
  if (Array.isArray(child)) {
    child.forEach((nestedChild) => appendChild(parent, nestedChild));
  } else {
    parent.appendChild(
      child.nodeType === undefined 
        ? document.createTextNode(child) 
        : child 
    );
  }
};

/**
 * Parser de elementos JSX simples.
 * 
 * @param {*} tagName 
 * @param {*} props 
 * @param  {...any} children 
 * @returns 
 */
export const createElement = (tagName, props = {}, ...children) => {  
  if (tagName === "fragment") return children;

  if (typeof tagName === "function") {
    return tagName(
      Object.assign({}, props, { children })
    );
  }

  /**
   * @type {HTMLElement}
   */
  const element = document.createElement(tagName);

  Object.entries(props || {}).forEach(([ name, value ]) => {
    if (name.startsWith("on") && name.toLowerCase() in window) {
      element.addEventListener(name.toLowerCase().substr(2), value);
    } else {
      element[name] = value.toString();
    }
  });

  children.forEach((child) => {
    if (child !== undefined) appendChild(element, child);
  });

  return element;
};
