import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';

class Timer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            description: '',
            project: '',
            startTime: null,
            endTime: null,
            timer: null,
            counter: '00:00:00'
        }
    }

    setDescription(event) {
        this.setState({description: event.target.value});
    }

    setProject(event) {
        this.setState({project: parseInt(event.target.value)});
    }

    toggleTimer(event) {
        event.preventDefault();

        if (!this.state.startTime) {
            this.startTimer();
        } else {
            this.endTimer();
        }
    }

    startTimer() {
        const startTime = new moment();

        this.setState({
            startTime: startTime
        });

        this.timer = setInterval(() => {
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

    endTimer() {
        clearInterval(this.timer);

        this.setState({
            endTime: new moment()
        });
    }

    formatDiff(diff) {
        let hours = diff._data.hours.toString();
        let minutes = diff._data.minutes.toString();
        let seconds = diff._data.seconds.toString();

        hours = (hours.length < 2) ? `0${hours}` : hours;
        minutes = (minutes.length < 2) ? `0${minutes}` : minutes;
        seconds = (seconds.length < 2) ? `0${seconds}` : seconds;

        const counterValue = `${hours}:${minutes}:${seconds}`;

        return counterValue;
    }

    createEntry(event) {
        event.preventDefault();
        const entry = {
            description: this.state.description,
            duration: this.state.counter,
            project: this.state.project
        };

        this.props.onNewEntry(entry);

        this.setState({
            description: '',
            project: '',
            startTime: null,
            endTime: null,
            timer: null,
            counter: '00:00:00'
        })
    }

    render() {
        const projects = this.props.projects.map(project => {
            return(
                <option key={project.id} value={project.id}>{project.name}</option>
            )
        });
        let inputClasses = 'text-xl text-pink-dark w-full mb-2 sm:mb-0 md:w-1/2 px-4 py-2 sm:mx-1 bg-pink-lightest';
        inputClasses += ' focus:bg-white border border-pink-dark outline-none focus:border-pink-dark rounded';
        return (
            <section className="mt-6 w-full lg:w-1/2 mx-auto p-2">
                <div className="div p-2">
                    <h1 className="mb-4 text-pink-dark text-center text-5xl">{this.state.counter}</h1>
                    <form className="flex justify-center flex-col">
                        <div className="flex justify-center flex-col sm:flex-row mb-2">
                            <input 
                                autoFocus 
                                type="text" 
                                value={this.state.description}
                                onChange={this.setDescription.bind(this)} 
                                className={inputClasses} 
                                placeholder="Vad ska du jobba med?"
                            />
                            <select 
                                value={this.state.project}
                                onChange={this.setProject.bind(this)} 
                                className="appearance-none text-xl w-full md:w-1/2 px-4 py-2 sm:mx-1 bg-pink-lighter text-pink-darkest border border-transparent outline-none focus:border-pink-dark"
                            >
                                <option value="" defaultValue>Välj projekt</option>
                                {projects}
                            </select>
                        </div>
                        <div className="flex justify-center flex-col">
                            {!this.state.endTime &&
                                <ToggleTimerButton onClick={this.toggleTimer.bind(this)} startTime={this.state.startTime} />
                            }
                            {this.state.endTime &&
                                <SaveButton onClick={this.createEntry.bind(this)} />
                            }
                        </div>
                    </form>
                </div>
            </section>
        )
    }
}

const ToggleTimerButton = function (props) {
    let baseClasses = 'w-full sm:mx-1 text-xl bg-pink-dark hover:bg-pink-darker text-pink-lightest px-4 py-2 rounded mb-2 outline-none';
    const buttonLabel = (props.startTime) ? 'Sluta jobba' : 'Börja jobba'
    return(
        <button onClick={props.onClick} className={baseClasses}>{buttonLabel}</button>
    );
}

const SaveButton = function (props) {
    const classes = 'w-full sm:mx-1 text-xl bg-pink-darkest hover:bg-pink-darker text-pink-lighter px-4 py-2 rounded mb-2';
    return(
        <button onClick={props.onClick} className={classes}>Spara</button>
    )
}

export default Timer;