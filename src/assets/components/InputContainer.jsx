import InputComponent from "./InputComponent";

export default function InputContainer({ inputComponentsData, onChange }) {
    return (
        <div id="user-input">
            <div className="input-group">
                <InputComponent text="INITIAL INVESTMENT" value={inputComponentsData.initialInvestment} setter={(value) => onChange('initialInvestment', value)} />
                <InputComponent text="ANUAL INVESTMENT" value={inputComponentsData.annualInvestment} setter={(value) => onChange('annualInvestment', value)} />
            </div>
            <div className="input-group">
                <InputComponent text="EXPECTED RETURN" value={inputComponentsData.expectedReturn} setter={(value) => onChange('expectedReturn', value)} />
                <InputComponent text="DURATION" value={inputComponentsData.duration} setter={(value) => onChange('duration', value)} />
            </div>
        </div>
    )
}