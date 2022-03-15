// * 1. Structuring React Projects

// Usually our whole UI is contained in one "parent" component called App.js
// We can export <App /> and import it into index.js. This is where we render the UI in the "root" HTML element.
// The App component will be made up of many child components, which can live in a "components" directory.
// We can make the child components available for export, and import them where they are needed.

// ================================

// * 2. PROPS

// "props" are an important concept in React.
// React components can have props - short for "properties".

// We can use props to pass data between components.
// So if a parent component has some data it wants to pass to a child component, it can use props to do that.