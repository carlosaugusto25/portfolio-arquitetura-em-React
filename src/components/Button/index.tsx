import React from 'react';
import './button.css';
import arrowRight from '../../assets/arrow-right.svg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    buttonStyle: "primary" | "secondary" | "outline" | "unstyled";
    arrow?: boolean;
}

export function Button({children, arrow, buttonStyle, ...rest}: ButtonProps) {
    return (
        <button className={`button ${buttonStyle}`} {...rest}>
            {children} {arrow && <img src={arrowRight} alt="Arrow Right" />}
        </button>
    )
}