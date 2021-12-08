import React from "react"
import Header from "./Components/Header"
import Card from "./Components/Card"
import data from "./data"

export default function App() {
    const cards = data.map(item => {
    return (
        <div>
            <Card 
                key={item.id}
                item={item}
            />
        </div>
    )
    })

    return (
        <div>
            <Header />
            <section>
                {cards}
            </section>
        </div>
    )
}
