Barebones is a boilerplate to help you build your own <a href="http://sass-lang.com/" target="_blank">SASS</a> framework. It is not a fully-fledged library, but a set of tools common to all projects; a grid system, helper classes and a range of resuable mixins, put together in a convenient package to kickstart your next project.

Only the bare essentials are included – so you can spend less time overwriting and more time creating.

## Why does the world need Barebones?

It probably doesn't, but here goes; we wanted to create a lightweight SASS library that we could share between projects – powerful enough to allow us to focus on design, and lightweight enough to stay out of our way.

Over time, we've learned a lot about how to structure our SASS projects in a cohesive, scalable and maintainable way. We thought other people might find this knowledge useful so decided to release this as a package in the public domain.

Existing frameworks such as Bootstrap and Foundation are great for prototyping, but typically lack flexibility. If you want to create your own theme, you're going to spend a lot of time with the !important flag – a great way for things to quickly become completely unmanageable. Building your own framework puts you in the driving seat, giving you full control over how your app or website looks, without being shoe-horned into someone else's design system.

## Installation

If you're new to SASS, you'll first need to make sure you're able to <a href="http://sass-lang.com/install" target="_blank">compile SASS files</a>. Barebones relies heavily on SASS maps, so will only work with SASS v3.3 and above.

### 1. Install the package

Barebones is available as a Bower package. If you want to skip this and copy the SASS files directly, you can do that too – simply download the latest release from <a href="https://github.com/sebpowell/barebones-sass">GitHub</a> and integrate the source files directly.

bower install barebones-sass --save

### 2. Create a settings file

Barebones code allows you to specify your own individual project settings – just grab <a href="https://github.com/sebpowell/barebones-sass/blob/master/docs/css/_settings.scss" target="_blank">the example file</a> </strong> and change the values to fit your needs.

### 3. Create your main SASS file

Import your newly created settings file, followed by <span class="var">_barebones.sass</span> into your main SASS file. When you're done, it should look like this:

```ascii
|-- css/
|--| main.sass
|--| _settings
|
|-- bower-components/
|--| barebones-sass/
|--|--| dist/
|--|--|--| _base
```


```scss
// Always import the settings file first
@import "_settings.scss";

// Import Barebones – the path will depend on your setup.
@import "bower-components/_base.scss";

// Your stuff can come here.
```



## Requirements

Barebones relies heavily on <a href="">SASS maps</a> to work, so you'll need to make sure you're using SASS 3.3 or higher. Additionally, vendor prefixing mixins are not used or included as you can use the <a href="https://github.com/postcss/autoprefixer" target="_blank">autoprefixer plugin</a> to do this.

## Support
If you have a question, or need help send an email to <a href="mailto:tech@getagent.co.uk">tech@getagent.co.uk</a>.If you think something is broken or can be improved, fork the repo, and submit a pull request.


## Target browsers

- Chrome 4+
- Firefox 4+
- Opera 11.5+
- Safari 4+
- IE 9+

## License

(The MIT License)

Copyright (c) GetAgent Limited

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
