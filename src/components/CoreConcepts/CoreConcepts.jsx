import "./CoreConcepts.css";

export default function CoreConcepts({ image, title = "default title", description }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}