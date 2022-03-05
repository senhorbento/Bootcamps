import React from "react"
import ReactDOM from "react-dom"
import "./styles.css"
import Button from './Button'

const element = 'Opa'
const element2 = <h1>Tudo bom?</h1>

function soma (a,b) {
    alert(a+b)
}

function Mostrar(){
    return (
        <div>
            {element}
            {element2}
            <Button onClick={() => soma(10,22)} name="Bento"/>
        </div>

    )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<Mostrar />, rootElement)