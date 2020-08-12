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
                    <Link style={style} to="/">TMDB</Link>
                </div>
                <div>
                    <form onSubmit={this.onFormSubmit}>
                        <Link to="/search">
                        <input 
                        value={this.state.term}
                        onChange={this.onInputChange}
                        style={input} type="text" 
                        placeholder="Enter a title"
                        />
                          </Link>
                        <button onSubmit={this.onFormSubmit} style={btn}><Link to="/search" style={signUp}> Search</Link></button>
                    </form>
                        
                </div>
                <div>
                    <Link to="/" style={signUp}> sign up</Link>
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
    background: '#364f7a'
}

const style = {
    textDecoration: 'none',
    color:'#fff',
    fontSize: '30px',
    fontWeight: '600'
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

const signUp = {
    textDecoration: 'none',
    color:' #fff'
}


export default Nav;
