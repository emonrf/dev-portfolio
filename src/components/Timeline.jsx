import React from "react";
import TimelineItem from "./TimelineItem";
import timeline from "../data/timeline";

function Timeline() {
    return (
        <div className="flex flex-col md:flex-row justify-center my-20">
           <div className="w-full md:w-7/12">
                {timeline.map((item, index) => (
                    <TimelineItem
                        key={item.id || index} // Added unique key prop
                        year={item.year}
                        title={item.title}
                        details={item.details}
                        GPA={item.GPA}
                    />
                ))}
            </div>
        </div>  
    )
}

export default Timeline;