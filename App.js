import React from 'react'
import ReactDOM from 'react-dom/client'

const heading = () => <h1>Namaste React using JSX</h1>;

const HeadingComponent = () =>{
    return (
        <div>
            {heading()}
            <h1>Namaste react using functional component</h1>
        </div>
        
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);