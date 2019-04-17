
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

//require('./bootstrap');

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Timer from './components/Timer';
import Entries from './components/Entries';

const projects = [
    {
        id: 1,
        name: 'Rally Sweden'
    },
    {
        id: 2,
        name: 'Gård & Djurhälsan'
    }
];
const entries = [
    {
        id: 1,
        project: 1,
        description: 'Lorem ipsum dolor sit amet',
        duration: '00:02:39'
    },
    {
        id: 2,
        project: 1,
        description: 'Bob loblaw law blog',
        duration: '00:03:01'
    }
];

const App = function () {
    return(
        <div>
            <Timer projects={projects} />
            {entries.length > 0 &&
                <Entries items={entries} projects={projects} />
            }
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('render'));