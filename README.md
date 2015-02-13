### Lazy Susan ###

A Javascript library to load in lorem ipsum style text into page elements based on classes assigned to the element.

This is intended to make it easier for placeholder content during development instead of lots of copy/paste operations on your code.

This should also make it easier to clean up code for production.


## Usage ##

To use this library just include the javascript at the bottom of your page and have the appropriate classes on any element you want placeholder text in.

The class of "lazy-susan" signifies that you want placeholder text.

You can define what type of text you want and how much of it with the "type" and "count" classes

example:
```html
<p class="lazy-susan type-lorem count-9"></p>
```

List of current available types:
- lorem
- bacon
- gibberish
- pony
