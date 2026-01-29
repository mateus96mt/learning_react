import reactImg from "./assets/react-core-concepts.png";

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

function CoreConcepts(props){
  return (
    <li>{props.concept}</li>
  )
}

function MainContent() {
  return (
    <main>
      <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          <CoreConcepts concept="Components" />
          <CoreConcepts concept="JSX" />
          <CoreConcepts concept="Props" />
          <CoreConcepts concept="State" />
          <CoreConcepts concept="Lifecycle" />
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
