# Build your own React (with TypeScript)

This project is an implementation of a simple version of rendering React from scratch, using TypeScript.

## Installation

**Download** or **clone** the repository to run locally:

```zsh
git clone https://github.com/itsjoelle/react-from-scratch.git
```

### Install Dependencies

Ensure you have Node.js installed and then install the required dependencies:

```zsh
npm install
```

### Compile TypeScript code in watch mode

```zsh
npm run dev
```

### Run the Server

To start the static server and test the renderer in the browser:

```zsh
npx serve .
```

The server will listen on PORT 3000 by default.

## Features

- Create virtual DOM elements with a custom implementation of `React.createElement`

- Render virtual DOM to the actual browser DOM with a custom `render()` function.

- A simple component-based structure using function components.

## How It Works

The `React.createElement` function is responsible for creating virtual DOM nodes. It can handle both plain HTML elements and functional components.

The `render()` function takes these virtual nodes and transforms them into real DOM elements, handling component functions, text nodes, props, and children recursively.

This replicates the core logic of React’s rendering pipeline, without the overhead of a full library.

## Folder Structure

- **app.tsx**: Entry point where the virtual components are defined and rendered into the DOM.

- **app.js**: Includes compiled JavaScript code.

- **tsconfigconfig.js**: TypeScript configuration file for compiling and telling TypeScript how to handle JSX syntax.

- **index.html**: Basic HTML structure including the root container.

## Contributing

Feel free to fork the repository and **submit pull requests** if you want to:

Add new features like event handling or fragment support.

Implement more React features.

## License

This project is licensed under the [MIT License](https://choosealicense.com/licenses/mit/).
