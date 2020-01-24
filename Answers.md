# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

React is a JavaScript library for building user interfaces .  Everything is a component in React.  Build encapsulated components that manage their own state, then compose them to make complex UIs.   It is declarative. Declarative views make your code more predictable and easier to debug.  You can develop new features in React without rewriting existing code. It's goal is to make things easier.

1. What does it mean to think in react?

When you think in react, it means to break apart your program into individual parts and think of an app as a bunch of interacting components.

1. Describe state.

State is a JavaScript object thats stores a components data and determines the components current behavior.

1. Describe props.

Props (properties) are arguments which takes in an object to give information to the functions.

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

A side effect is anything that affects something outside the scope of the function being executed. Some examples of side effects are fetching data from an API, timers, and manually manipulating the DOM. useEffect is how you sync effects.