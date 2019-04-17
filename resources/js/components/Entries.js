import React from 'react';
import Entry from './Entry';

export default function (props) {
    const entryList = props.items.map(item => {
        /**
         * Hitta projektet som entryt tillhör.
         */
        const project = props.projects.find(project => project.id === item.project);

        return <Entry key={item.id} data={item} project={project} />
    });

    return(
        <div>
            <section className="entries mx-auto">
                <h2 className="mb-2 mx-2 text-pink-darker">Tidrapport</h2>
                <div className="flex flex-row flex-wrap px-1 lg:px-0">
                    {entryList}
                </div>
            </section>
        </div>
    )
}