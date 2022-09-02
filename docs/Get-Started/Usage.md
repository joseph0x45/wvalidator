# Usage

WValidator grabs the value of your inputs and proceeds to match them against patterns. These patterns we call them `rules`. Which has to be passed to a special attribute called `wv`

Here is a practical example:
```html
    <input type="text" wv="1up" id="username" />
```

You have to set the `id` of your input, WValidator uses it to know which exact input does or does not the requested patterns.

The `wv` attribute can take many `rules`. In the example, we are using the `1up` rule, which means that the value of the input has to contain at least ** one uppercase character **. WValidator will spawn a warning to the user if the value doesn't validate the rules. In the next chapter you will learn more about `rules`.