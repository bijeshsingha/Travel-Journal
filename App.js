import React from "react"
import Header from "./components/Header"
import Card from "./components/Card"
import data from "./data"

export default function App() {
    
    const cards = data.map( items => {
        return (
            <Card 
                key={items.id}
                {...items}
            />
        )
    })
    
    return (
        <div className="app" >
            <Header />
            <section className="cards-section">
                {cards}
            </section>
        </div>
    )
}