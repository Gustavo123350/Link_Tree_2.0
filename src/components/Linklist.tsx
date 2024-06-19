import React from "react";
import LinkButton from "./LinkButton";


interface LinkListProps {
    links: { url: string; label: string }[];
}

const LinkList: React.FC<LinkListProps> = ({ links }) => {
    return (
        <div className="link-list">
            {links.map((link, index) => (
                <LinkButton key={index} url={link.url} label={link.label} />
            ))}
        </div>
    );
};

export default LinkList;