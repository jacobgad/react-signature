
# React Signature Pad

Example of how Szymon Nowak's signature_pad project could be made into a React component using Typescript.

This react component is used to allow user mouse or touch input for digital signatures. 

the signature is saved as an encoded image as a string to make it easy to store in a database as a string, and also making it easy to display in your HTML.

## Demo

https://jacobgad-react-signature-pad.netlify.app

## Usage/Examples

Store the string in your database and then you can display it in your HTML using a <img> tag like this:

```html
<img src="data:image/svg+xml;base64,PHN2ZyB4bWxu..." />
```


## Component Props

To display this Component you need to provide three props

`setSignature` the set function of a useState Hook which takes a value string


## Acknowledgements

 - [Szymon Nowak](https://github.com/szimek)
 - [signature_pad](https://github.com/szimek/signature_pad)

