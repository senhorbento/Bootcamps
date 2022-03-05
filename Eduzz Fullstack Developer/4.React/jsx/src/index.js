import React from "react"
import ReactDOM from "react-dom"
import "./styles.css"

function soma(a,b){
    return a + b
}

function testandoJSX(){
    return(
        <div>
            <h1>Senhor Bento</h1>
        </div>
        )
}

const App = () =>{
    return(
        <div className="App">
            Hello World
            {testandoJSX()}
            Soma: {soma(5,5)}
        </div>
        )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App/>, rootElement)