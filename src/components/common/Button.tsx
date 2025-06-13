import React from 'react'

interface ButtonProps {
    children: string
    className?: string
}

const Button: React.FC<ButtonProps> = ({ children, className }) => {
    return (
        <div  className={`${className}`}>{children}</div>
    )
}

export default Button