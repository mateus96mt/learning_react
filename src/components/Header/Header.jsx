import reactImg from "../../assets/react-core-concepts.png";
import "./Header.css";
const description = ["desc1", "desc2", "desc3"];

function getRandomDescription() {
    const randomIndex = Math.floor(Math.random() * description.length);
    return description[randomIndex];
}

export default function Header() {
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