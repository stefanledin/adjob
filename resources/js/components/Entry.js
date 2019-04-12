import React from "react";

export default function (props) {

    return(
        <div className="entry w-full sm:w-1/2 lg:w-1/3 p-1 lg:p-2">
            <div className="bg-orange-lightest shadow">
                <time className="block px-4 pt-2 pb-1 bg-orange-lighter text-orange-darker">{props.data.project}</time>
                <div className="px-4 py-2">
                    <h2 className="mt-2 mb-4 text-orange-darker">{props.data.duration}</h2>
                    <span className="block">{props.data.description}</span>
                </div>
            </div>
        </div>
    )
}