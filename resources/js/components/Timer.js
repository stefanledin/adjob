import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';

class Timer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            startTime: null,
            endTime: null,
            counter: '00:00:00'
        }
    }

    startTimer(event) {
        event.preventDefault();
        const startTime = new moment();

        this.setState({
            startTime: startTime
        });

        setInterval(() => {
            this.count();
        }, 1000);
    }

    count() {
        if (!this.state.startTime) return;

        const now = new moment();
        const diff = moment.duration(now.diff(this.state.startTime));
        
        this.setState({
            counter: this.formatDiff(diff)
        });
    }

    formatDiff(diff) {
        const hours = diff._data.hours.toString();
        const minutes = diff._data.minutes.toString();
        const seconds = diff._data.seconds.toString();

        let counterValue = '';

        console.log(hours);
        if (hours.length < 2) {
            counterValue = `0${hours}`
        } else {
            counterValue = hours;
        }
        counterValue += ':'+minutes+':'+seconds;

        return counterValue;
    }

    render() {
        const projects = this.props.projects.map(project => {
            return(
                <option key={project.id} value={project.id}>{project.name}</option>
            )
        });

        return (
            <section className="mt-6 w-full lg:w-1/2 mx-auto p-2">
                <div className="div p-2">
                    <h1 className="mb-4 text-pink-dark text-center text-5xl">{this.state.counter}</h1>
                    <form className="flex justify-center flex-col">
                        <div className="flex justify-center flex-col sm:flex-row mb-2">
                            <input autoFocus className="text-xl text-pink-dark w-full mb-2 sm:mb-0 md:w-1/2 px-4 py-2 sm:mx-1 bg-pink-lightest focus:bg-white border border-pink-dark outline-none focus:border-pink-dark rounded" type="text" placeholder="Vad ska du jobba med?"/>
                            <select className="appearance-none text-xl w-full md:w-1/2 px-4 py-2 sm:mx-1 bg-pink-lighter text-pink-darkest border border-transparent outline-none focus:border-pink-dark">
                                <option value="" defaultValue>Välj projekt</option>
                                {projects}
                            </select>
                        </div>
                        <div className="flex justify-center">
                            <button onClick={this.startTimer.bind(this)} className="w-full sm:mx-1 text-xl bg-pink-dark hover:bg-pink-darker text-pink-lightest px-4 py-2 rounded">Börja jobba</button>
                        </div>
                    </form>
                </div>
            </section>
        )
    }
}
const projects = [
    {
        id: 1,
        name: 'Rally Sweden'
    },
    {
        id: 2,
        name: 'Gård & Djurhälsan'
    }
]
ReactDOM.render(<Timer projects={projects} />, document.getElementById('render'));