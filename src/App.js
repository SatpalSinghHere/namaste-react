import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Body from './components/Body'

//
//header
//  logo
//  Home
//  Categories
//  Help
//  Cart
//body
//  Search
//  card-container
//      cards
//footer
//  Copyright
//  Contact us
//  Help
//

const App = () => {
    return (
        <div id="app">
            <Header key={1} />
            <Body key={2} />
        </div>

    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);