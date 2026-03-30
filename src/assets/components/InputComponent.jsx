export default function InputComponent({ text, value, setter }) {
    return (
        <div>
            <label htmlFor="">{text}</label>
            <input type="number" value={value} onChange={(e) => setter(parseFloat(e.target.value))} />
        </div>
    )
}