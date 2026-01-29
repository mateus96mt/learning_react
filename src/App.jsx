import reactImg from "./assets/react-core-concepts.png";
import { CORE_CONCEPTS } from "./data";
const description = ["desc1", "desc2", "desc3"];

function getRandomDescription() {
  const randomIndex = Math.floor(Math.random() * description.length);
  return description[randomIndex];
}

function Header() {
  const desc = getRandomDescription();
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {desc} Fundamental React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

// function CoreConcepts(props) {
//   return (
//     <li>
//       <img src={props.image} alt={props.title} />
//       <h3>{props.title}</h3>
//       <p>{props.description}</p>
//     </li>
//   );
// }

function CoreConcepts({image, title, description}) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

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
        </ul>
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
