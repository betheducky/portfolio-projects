import React, { PropsWithChildren } from "react";
import './styles.scss';

interface ButtonFunc extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    onClick: () => void;
    label: string;
  }

const Button:React.FC<PropsWithChildren<ButtonFunc>> = ({onClick, children, ...otherProps}) => {
    return (
        <button className="btn" onClick={onClick} {...otherProps} >
            {children}
        </button>
    )
}

export default Button;

