# server-driven-ui
SDUI implementation base

*About this reposiory*
> This is my practice and implementation of developing an aplication using the *Server Driven UI* method. I am trying to follow the principles from the [Twelve Factor App](https://12factor.net/).  

*Starting Application*
  > Note: To start the application simply run `make start`

## Project layout
*FrontEnd*
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
            |   |___|-- Text
            |
            |-- sections 💡 Sections are positional layouts. For example, Gridx2/Gridx4, Rowx2/Rowx4
            |   |-- GridTwo
            |   |-- GridFour
            |   |-- RowTwo
            |   |-- RowFour
            |
            |-- loaders 💡 Loaders make API calls to Layout API to fetch layout data for each page
            |    |-- AboutPageLoader
            |    |-- BrowsePageLoader
            |    |-- CheckoutPageLoader
            |    |-- CartPageLayout
            |
            |-- pages 💡 Pages are components for each page/path/route the application has. Treat this as the parent component for each page/path/route
            |   |-- BrowsePage
            |       |-- BrowsePageDefault.jsx
            |       |-- CustomBrowsePage.jsx 
            |   |-- CheckoutPage
            |       |-- CheckoutPageDefault.jsx
            |       |-- CustomCheckoutPage.jsx 
            |   |-- CartPage
            |       |-- CartPageDefault.jsx
            |       |-- CustomCartPage.jsx 
            |   |-- AboutPage
            |       |-- AboutPageDefault.jsx
            |       |-- CustomAboutPage.jsx 
            |   |-- ContactPage
            |       |-- ContactPageDefault.jsx
            |       |-- CustomContactPage.jsx 
            |   |-- ErrorPage
            |       |-- DefaultErrorPage.jsx
            |       |-- CustomErrorPage.jsx 
            |
            |-- store 💡 Store stores all global state for the application. Stuff like Products Inventories, User Data, Cart State.
            |   |-- ProductsStore
            |       |-- ProductStateProvider.jsx
            |   |-- CartStore
            |       |-- CartStateProvider.jsx
            |   |-- UserStore
            |       |-- UserStateProvider.jsx
            |
            |

```
  
  
![Tigerlily Project (5)](https://user-images.githubusercontent.com/61228520/188310223-4f035d87-0459-42aa-b383-9627eea291ea.png)
