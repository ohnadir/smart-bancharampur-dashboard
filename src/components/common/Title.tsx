import React from 'react';

interface TitleProps {
    children: React.ReactNode;
    className?: string;
}

const Title: React.FC<TitleProps> = ({ children, className }) => {
    return <p className={`${className} text-[#222222] text-2xl font-medium`}>{children} </p>

};

export default Title;