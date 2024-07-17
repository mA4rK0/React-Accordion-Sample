import { useState } from "react";
import Item from "./Item";

function Accordion({ data }) {
    const [curOpen, setOpen] = useState(null); 

    return (
        <section className="accordion">
            {data.map(({question, answer}, index) => (
                <Item key={index} curOpen={curOpen} onOpen={setOpen} question={question} answer={answer} number={index + 1} />
            ))}
        </section>
    )
};

export default Accordion;