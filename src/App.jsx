import { useState, Fragment } from "react";

import { CORE_CONCEPTS } from "./data";
import { EXAMPLES } from "./data";
import Header from "./components/Header/Header";
import CoreConcepts from "./components/CoreConcepts/CoreConcepts";
import TabButton from "./components/TabButton";

function MainContent() {
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

  return (
    <main>
      <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          {CORE_CONCEPTS.map((concept) => (
            <CoreConcepts title={concept.title} image={concept.image} description={concept.description} />
          ))}
          {/* <CoreConcepts title={CORE_CONCEPTS[0].title} image={CORE_CONCEPTS[0].image} description={CORE_CONCEPTS[0].description} />
          <CoreConcepts title={CORE_CONCEPTS[1].title} image={CORE_CONCEPTS[1].image} description={CORE_CONCEPTS[1].description} />
          <CoreConcepts title={CORE_CONCEPTS[2].title} image={CORE_CONCEPTS[2].image} description={CORE_CONCEPTS[2].description} />
          <CoreConcepts title={CORE_CONCEPTS[3].title} image={CORE_CONCEPTS[3].image} description={CORE_CONCEPTS[3].description} /> */}
        </ul>
      </section>
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
      <section id="examples">
        <menu>

          {Object.keys(EXAMPLES).map((key) => (
            <TabButton selected={selected === key ? "active" : ""} onClick={() => onclick(key)}>{key}</TabButton>
          ))}

          {/* <TabButton onClick={() => onclick('Example 1')}>Example 1</TabButton>
          <TabButton onClick={() => onclick('Example 2')}>Example 2</TabButton>
          <TabButton onClick={() => onclick('Example 3')}>Example 3</TabButton>
          <TabButton onClick={() => onclick('Example 4')}>Example 4</TabButton> */}

        </menu>
        {tabcontent}
      </section >
    </main >
  );
}

//use Fragment to avoid unnecessary divs in the DOM
// function App() {
//   return (
//     <Fragment>
//       <Header />
//       <MainContent />
//     </Fragment>
//   );
// }

//can also use empty tags instead of Fragment
function App() {
  return (
    <>
      <Header />
      <MainContent />
    </>
  );
}

export default App;
