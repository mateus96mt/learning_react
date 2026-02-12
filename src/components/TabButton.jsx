export default function TabButton(props) {

    let hello = () => console.log("Hello " + props.children);

    return (
        <li>
            <button className={props.selected} onClick={props.onClick ? props.onClick : hello}>{props.children}</button>
        </li>
    );
}