import React from "react";
import portfolio from "../data/portfolio";
import PortfolioItem from "./PortfolioItem";

function Portfolio() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-5xl mx-auto">
                {portfolio.map((project, index) => (
                    <PortfolioItem
                        key={index}
                        index={index}
                        imageUrl={project.imageUrl}
                        title={project.title}
                        stack={project.stack}
                        link={project.link}
                        description={project.description}
                    />
                ))}
            </div>
        </div>
    );
}

export default Portfolio;