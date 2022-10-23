# server-driven-ui
SDUI implementation base

*About this reposiory*
> This is just my practice and implementation of developing an aplication using the *Server Driven UI* method. I am trying to follow the principles from the [Twelve Factor App](https://12factor.net/).  

*Starting Application*
  > Note: To start the application simply run `make start`

## Project layout
```
|-- frontend-vite
    |-- sdui
        |-- src
            |-- components
            |   |-- pageComponents 💡 This directory contains all components like Nav, Footer, Main Component
            |   |   |-- Footer
            |   |   |-- Navigation
            |   |   |-- Main
            |   |
            |   |-- sub-components 💡 This is where we store sub components. Eg. Button, Text/Sub-Text, Image or Paragraph Components (Mainly used in Sections)
            |   |   |-- Button
            |   |   |-- Para
            |   |   |-- Image
            |   |   |-- Text
            |
            |-- sections

```
  
  
![Tigerlily Project (5)](https://user-images.githubusercontent.com/61228520/188310223-4f035d87-0459-42aa-b383-9627eea291ea.png)
