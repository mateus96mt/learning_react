import { CORE_CONCEPTS } from "../data";
import CoreConcepts from "./CoreConcepts/CoreConcepts";
import Section from "./Section";

export default function Concepts() {
    return (
        <Section id="core-concepts">
            <h2>Core Concepts</h2>
            <ul>
                {...CORE_CONCEPTS.map((concept) => (
                    <CoreConcepts {...concept} />
                ))}
            </ul>
        </Section>
    )
    return (
        <>
            {/* <section id="core-concepts"> */}
            {/* <h2>Core Concepts</h2> */}
            {/* <ul> */}
            {/* {CORE_CONCEPTS.map((concept) => (
                        <CoreConcepts title={concept.title} image={concept.image} description={concept.description} />
                    ))} */}
            {/* <CoreConcepts title={CORE_CONCEPTS[0].title} image={CORE_CONCEPTS[0].image} description={CORE_CONCEPTS[0].description} />
                  <CoreConcepts title={CORE_CONCEPTS[1].title} image={CORE_CONCEPTS[1].image} description={CORE_CONCEPTS[1].description} />
                  <CoreConcepts title={CORE_CONCEPTS[2].title} image={CORE_CONCEPTS[2].image} description={CORE_CONCEPTS[2].description} />
                  <CoreConcepts title={CORE_CONCEPTS[3].title} image={CORE_CONCEPTS[3].image} description={CORE_CONCEPTS[3].description} /> */}
            {/* </ul> */}
            {/* </section> */}
            <section id="core-concepts">
                <h2>Core Concepts</h2>
                <ul>
                    {...CORE_CONCEPTS.map((concept) => (
                        <CoreConcepts {...concept} />
                    ))}
                    {/* <CoreConcepts {...CORE_CONCEPTS[0]} />
                  <CoreConcepts {...CORE_CONCEPTS[1]} />
                  <CoreConcepts {...CORE_CONCEPTS[2]} />
                  <CoreConcepts {...CORE_CONCEPTS[3]} />
                  <CoreConcepts {...CORE_CONCEPTS[4]} /> */}
                </ul>
            </section>
        </>
    )
}