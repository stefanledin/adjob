
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

//require('./bootstrap');

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import db from './db';
import Timer from './components/Timer';
import Entries from './components/Entries';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            entries: [],
            projects: []
        }
    }

    componentDidMount() {
        db.table('entries').toArray((data) => this.setState({entries: data}));
        db.table('projects').toArray((data) => this.setState({projects: data}));
    }

    async addEntry(data) {
        const entryID = await db.table('entries').add({
            project: data.project,
            description: data.description,
            duration: data.duration
        });

        const newEntry = await db.table('entries').get(entryID);
        let currentEntries = this.state.entries;
        currentEntries.unshift(newEntry);
        this.setState({entries: currentEntries});
    }

    render() {
        return(
            <div>
                {this.state.projects.length > 0 &&
                    <Timer projects={this.state.projects} onNewEntry={this.addEntry.bind(this)} />
                }
                {(this.state.entries.length > 0) && (this.state.projects.length > 0) &&
                    <Entries items={this.state.entries} projects={this.state.projects} />
                }
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('render'));