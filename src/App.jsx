import Header from "./components/Header/Header";
import TabSelector from "./components/TabSelector/TabSelector";
import Concepts from "./components/Concepts";

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
      <Concepts>
      </Concepts>
      <TabSelector ButtonsContainer="menu"/>
    </>
  );
}

export default App;
