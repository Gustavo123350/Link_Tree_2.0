import React from "react";

interface LinkButtonProps {
    url: string;
    label: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({ url, label }) => {
    return (
        <a href={url} className="link-button" target="_blank" rel="noopener noreferrer">
            {label}
        </a>
    );
};

export default LinkButton;