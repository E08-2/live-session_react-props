# 2. A more complex React component

Earlier this afternoon we saw our first components, and we learned that we can use a component like a self-closing HTML tag to render its contents.
```jsx
<FunctionalComponent />
```

Now let's create a **functional component** called `BootstrapCard` that outputs the following HTML when it is rendered to the DOM:

```jsx
<div class="card m-5" style="width: 18rem">
  <img class="card-img-top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Thom_Yorke_Austin_Texas_2016_%28cropped%29.jpg/220px-Thom_Yorke_Austin_Texas_2016_%28cropped%29.jpg" />
  <div class="card-body">
    <h5 class="card-title">Thom Yorke</h5>
    <p class="card-text">Thomas Edward Yorke (born 7 October 1968) is an English musician and the main vocalist and songwriter of the rock band Radiohead. A multi-instrumentalist, he mainly plays guitar and keyboards and is noted for his falsetto.</p>
    <a href="https://en.wikipedia.org/wiki/Thom_Yorke" class="btn btn-primary">Go to wikipedia</a>
  </div>
</div>
```
## Instructions

1. In `index.js` you will find an object containing all the values needed to create the above structure. You should create a **functional component** called `BootstrapCard` which will render the above card using JSX.

**Note:** Remember that you will need to create the card structure in **JSX**, so make sure your code is written in the correct syntax (i.e. `className` instead of `class` and changing the image's "style" attribute into `style={ {width: "18rem"} }`)!

2. When you have created your **functional component**, try to render it in `index.html` using `ReactDOM.render()`. You should use your component as an **element** (i.e. `<BootstrapCard />`) to achieve this.

3. If this works, see if you can render **three** identical cards on the screen using your component. Pretty easy, right?

4. If you finish early, you can comment out your **functional** component and try to do steps 1-3 using a **class-based** component instead (remember that we will mostly focus on functional components for the rest of this module!)
