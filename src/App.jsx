import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header/Header";
import CoreConcepts from "./components/CoreConcepts/CoreConcepts";
import TabButton from "./components/TabButton";

function MainContent() {
  return (
    <main>
      <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          <CoreConcepts title={CORE_CONCEPTS[0].title} image={CORE_CONCEPTS[0].image} description={CORE_CONCEPTS[0].description} />
          <CoreConcepts title={CORE_CONCEPTS[1].title} image={CORE_CONCEPTS[1].image} description={CORE_CONCEPTS[1].description} />
          <CoreConcepts title={CORE_CONCEPTS[2].title} image={CORE_CONCEPTS[2].image} description={CORE_CONCEPTS[2].description} />
          <CoreConcepts title={CORE_CONCEPTS[3].title} image={CORE_CONCEPTS[3].image} description={CORE_CONCEPTS[3].description} />
        </ul>
      </section>
      <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          <CoreConcepts {...CORE_CONCEPTS[0]} />
          <CoreConcepts {...CORE_CONCEPTS[1]} />
          <CoreConcepts {...CORE_CONCEPTS[2]} />
          <CoreConcepts {...CORE_CONCEPTS[3]} />
          <CoreConcepts {...CORE_CONCEPTS[4]} />
        </ul>
      </section>
      <section id="examples">
      <menu>
        <TabButton>Example 1</TabButton>
        <TabButton>Example 2</TabButton>
        <TabButton>Example 3</TabButton>
      </menu>
      </section>
    </main>
  );
}

function App() {
  return (
    <div>
      <Header />
      <MainContent />
    </div>
  );
}

export default App;
