// create virtual dom
const React = {
    createElement: (tag, props, ...children) => {
        if (typeof tag === 'function') {
            // check if its react component
            return tag(props, ...children);
        }
        const virtualEl = {
            tag,
            props,
            children,
        };
        return virtualEl;
    },
};
// create dom elements
const render = (el, container) => {
    let domElement;
    // check if el is text node
    if (typeof el === 'string') {
        domElement = document.createTextNode(el);
        container.appendChild(domElement);
        return;
    }
    domElement = document.createElement(el.tag);
    // set props
    let props = el.props ? Object.keys(el.props) : null;
    if (props && props.length > 0) {
        props.forEach((prop) => (domElement[prop] = el.props[prop]));
    }
    // create children
    if (el.children && el.children.length > 0) {
        el.children.forEach((child) => render(child, domElement));
    }
    container.appendChild(domElement);
};
const App = () => {
    return (React.createElement("div", { draggable: true },
        React.createElement("h3", null, "Build your own React"),
        React.createElement("input", { type: "text" }),
        React.createElement("button", null, `Click :)`),
        React.createElement("h5", null, "H5 element")));
};
render(React.createElement(App, null), document.getElementById('myroot'));
