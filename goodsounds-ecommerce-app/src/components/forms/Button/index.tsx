import React, { PropsWithChildren } from "react";
import './styles.scss';

interface ButtonFunc extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    onClick: () => void;
  
  }

const Button:React.FC<PropsWithChildren<ButtonFunc>> = ({onClick, children, ...otherProps}: PropsWithChildren) => {
    return (
        <button className="btn" onClick={onClick} {...otherProps} >
            {children}
        </button>
    )
}

export default Button;

