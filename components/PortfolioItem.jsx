import React from "react";

function PortfolioItem({title, imageUrl, stack, link, description, index}) {
    // Determine if this is an even or odd index for alternating layout
    const isEven = index % 2 === 0;
    
    return (
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
            {/* Description on the left for even items on desktop */}
            {isEven && (
                <div className="md:w-1/2 md:pr-8 order-2 md:order-1">
                    <h4 className="text-lg md:text-xl font-semibold mb-2">About this project</h4>
                    <p className="text-sm md:text-base">{description}</p>
                </div>
            )}
            
            {/* Card in the middle */}
            <div className={`md:w-1/2 order-1 ${isEven ? 'md:order-2' : 'md:order-1'}`}>
                <div className="border-4 border-stone-900 rounded-lg overflow-hidden shadow-lg">
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        <img 
                            src={imageUrl} 
                            alt="portfolio" 
                            className="w-full h-36 md:h-48 object-cover cursor-pointer"
                        />
                    </a>
                    <div className="w-full p-4">
                        <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">
                            <a href={link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                                {title}
                            </a>
                        </h3>
                        <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm font-semibold mb-2"> 
                            {stack.map((item, idx) => (
                                <span key={idx} className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 rounded-md bg-stone-900 text-white">
                                    {item}
                                </span>
                            ))}
                        </p>
                    </div>
                </div>
            </div>
            
            {/* Description on the right for odd items on desktop */}
            {!isEven && (
                <div className="md:w-1/2 md:pl-8 order-2">
                    <h4 className="text-lg md:text-xl font-semibold mb-2">About this project</h4>
                    <p className="text-sm md:text-base">{description}</p>
                </div>
            )}
        </div>
    );
}

export default PortfolioItem;