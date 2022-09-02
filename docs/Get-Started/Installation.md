# Installation

You have many ways to use WValidator in your project. The simplest one is to use a CDN.

Just copy this script tag 
```html
    <script type="module" >https://cdn.jsdelivr.net/gh/TheWisePigeon/validator/lib/index.js</script>
``` 

And add it to your HTML file header.

## React support
We will make our own react component very soon, but as for now if you would like to use WValidator in a React project, you can proceed this way:

First, install `react=helmet` module by running 
```bash
npm install react-helmet
```
Then, add the Helmet component before your component
```jsx
import { Helmet } from "react-helmet"

export default function Component() {
  return (
    <>
      <Helmet>
        <script
          src="https://cdn.jsdelivr.net/gh/TheWisePigeon/validator/lib/index.js"
          type="module"
        ></script>
      </Helmet>
      ...
    </>
  )
}
```

The ```type="module"``` is very important.

Once again, open an issue [here](https://github.com/TheWisePigeon/validator/issues) as soon as you encounter a bug 
