import React, { PropsWithChildren } from "react";
import './styles.scss';

const Button = ({children, ...otherProps}: PropsWithChildren) => {
    return (
        <button className="btn" {...otherProps} >
            {children}
        </button>
    )
}

export default Button;