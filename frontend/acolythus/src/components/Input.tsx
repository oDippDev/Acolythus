interface InputProps {
    label: string;
    place: string;
    tipo: string;
    className: string;
    linkToInput: string;
}

function Input({label, place, tipo, className, linkToInput}: InputProps ) {
  return (
    <div >
      <label style={{ color: "#fafafaff" }} htmlFor={linkToInput}>{label}</label>
      <input type={tipo} placeholder={place} className={className} id={linkToInput} />
    </div>
  );
}

export default Input;
