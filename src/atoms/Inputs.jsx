import '../assets/style/inputs.css';

function InputText({type,text,id}) {
    return (
        <div>
        <label>{text}</label>
        <input type={type} id={id}/><br />
        </div>
    );
}
export default InputText;