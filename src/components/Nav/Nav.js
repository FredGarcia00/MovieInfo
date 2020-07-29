import React from 'react'
import { Link } from 'react-router-dom';

class Nav extends React.Component {

    state = {
        term: ''
    }

    onInputChange = (event) => {
        this.setState({ term: event.target.value })
        // console.log(event.target.value);
    }

    onFormSubmit = (e) => {
        e.preventDefault();

        this.props.onFormSubmit(this.state.term)
        // console.log(this.state.term);
    }

    render() {
        return (
            <div style={container}>
                <div>
                    <Link style={style} to="/">Movie info</Link>
                </div>
                <div>
                    <form onSubmit={this.onFormSubmit}>
                        <input 
                        value={this.state.term}
                        onChange={this.onInputChange}
                        style={input} type="text" 
                        placeholder="Enter a title"
                        />
                        <button onSubmit={this.onFormSubmit} style={btn}>icon</button>
                    </form>
                </div>
                <div>
                    <Link to="/" style={{textDecoration: "none"}}> sign up</Link>
                </div>
            </div>
        ) 

    }
}

const container = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    background: 'pink'
}

const style = {
    textDecoration: 'none'
}

const input = {
    border: 'none',
    width: '45vw',
    padding: '10px'
}

const btn = {
    padding: '10px',
    border: 'none'
}


export default Nav;
