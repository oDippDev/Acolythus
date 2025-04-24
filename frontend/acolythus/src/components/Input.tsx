import React from "react";

interface InputProps {
    place: string;
    tipo: string;
    className: string;
    linkToInput: string;
    divClass: string;
    
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({place, tipo, className, linkToInput, divClass}, ref) =>  {
  return (
    <div className={divClass}>
      <input type={tipo} placeholder={place} className={className} id={linkToInput} ref={ref} />
    </div>
    );
  }
);

export default Input;
