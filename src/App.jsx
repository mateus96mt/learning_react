const description = ["desc1", "desc2", "desc3"];

function getRandomDescription() {
  const randomIndex = Math.floor(Math.random() * description.length);
  return description[randomIndex];
}

function Header() {
  const desc = getRandomDescription();
  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {desc} Fundamental React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function MainContent() {
  return (
    <main>
      <h2>Time to get started!</h2>
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
