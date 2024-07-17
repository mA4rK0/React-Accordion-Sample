import { useState } from "react"

export default function Item({number, question, answer, curOpen, onOpen}) {
    const open = number === curOpen; 

    function handleToggle() {
        onOpen(open ? null : number);
    };

    return(
        <div className={`item ${open ? "open" : ""}`} onClick={handleToggle}>
            <p className="number">{number < 10 ? `0${number}` : number}</p>
            <p className="title">{question}</p>
            <p className="icon">{open ? "-" : "+"}</p>
            {open && <p className="content-box">{answer}</p>}
        </div>
    )
};