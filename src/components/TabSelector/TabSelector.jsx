
import { useState, Fragment } from "react";

import { EXAMPLES } from "../../data";
import TabButton from "../TabButton";
import "./TabSelector.css";
import Section from "../Section";

export default function TabSelector({ButtonsContainer}) {
    const [selected, setSelected] = useState();
    let tabcontent;

    if (selected) {
        tabcontent = (<div id="tab-content">
            <h3>{EXAMPLES[selected].title}</h3>
            <p>{EXAMPLES[selected].description}</p>
            <pre>{EXAMPLES[selected].code}</pre>
        </div>)
    } else {
        tabcontent = (<div id="tab-content"><p>"selecione um exemplo"</p></div>)
    }

    let onclick = (value) => {
        setSelected(value);
    }

    //dynamic element
    // const ButtonsContainer = buttonsContainer ? buttonsContainer : "menu";
    //must be uppercase to be used as a component

    return (
        <main>
            <Section id="examples">
                <ButtonsContainer>
                    {Object.keys(EXAMPLES).map((key) => (
                        <TabButton selected={selected === key ? "active" : ""} onClick={() => onclick(key)}>{key}</TabButton>
                    ))}
                </ButtonsContainer>
                {tabcontent}
            </Section >
        </main >
    );
}