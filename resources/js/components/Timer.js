import React from 'react';
import ReactDOM from 'react-dom';

function Timer(props) {
    const projects = props.projects.map((project, index) => {
        return <option key={index}>{project}</option>
    });

    return (
        <section className="mt-6 w-full lg:w-1/2 mx-auto p-2">
            <div className="div p-2">
                <h1 className="mb-4 text-pink-dark text-center text-5xl">00:00:00</h1>
                <form className="flex justify-center flex-col">
                    <div className="flex justify-center flex-col sm:flex-row mb-2">
                        <input autoFocus className="text-xl text-pink-dark w-full mb-2 sm:mb-0 md:w-1/2 px-4 py-2 sm:mx-1 bg-pink-lightest focus:bg-white border border-pink-dark outline-none focus:border-pink-dark rounded" type="text" placeholder="Vad ska du jobba med?"/>
                        <select className="appearance-none text-xl w-full md:w-1/2 px-4 py-2 sm:mx-1 bg-pink-lighter text-pink-darkest border border-transparent outline-none focus:border-pink-dark">
                            <option value="" defaultValue>Välj projekt</option>
                            {projects}
                        </select>
                    </div>
                    <div className="flex justify-center">
                        <button className="w-full sm:mx-1 text-xl bg-pink-dark hover:bg-pink-darker text-pink-lightest px-4 py-2 rounded">Börja jobba</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

const projects = ['Rally Sweden', 'Gård & Djurhälsan'];
ReactDOM.render(<Timer projects={projects} />, document.getElementById('render'));