import React from "react";

function TimelineItem({ year, title, details, GPA }) {
    return (
        <ol className="flex flex-col md:flex-row relative border-l border-stone-200 dark:border-stone-700">
            <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-stone-900 dark:bg-stone-700" />
                <div className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
                    <span className="inline-block px-2 py-1 font-semibold text-white bg-stone-900 rounded-md">
                        {year}
                    </span>
                    {/* Changed from <p> to <div> to avoid nesting h3 in p */}
                    <div className="text-lg font-semibold text-stone-900 dark:text-white">
                        <h3 className="text-lg font-semibold text-stone-900 dark:text-white">{title}</h3>
                        {GPA && <span className="text-sm font-normal text-stone-500 dark:text-stone-400">GPA: {GPA}</span>}
                    </div>
                </div>
                <p className="my-2 text-base font-normal text-stone-500 dark:text-stone-400">
                    {details}
                </p>
            </li>
        </ol>
    )
}

export default TimelineItem;