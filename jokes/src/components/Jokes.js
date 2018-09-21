import React, { Component } from 'react';
import axios from 'axios';

class Users extends Component {
    state = {
        users: []
    }
    render() {
        return (
            <div>
                <ul>
                    {this.state.users.map(user => (
                        <div>
                            <li key={user.id}>{user.setup}</li>
                            <li key={user.id}>{user.punchline}</li>
                            <br></br>
                        </div>
                    ))}
                </ul>
                <button onClick={this.logout}>Log Out</button>
            </div>
        );
    }
    componentDidMount() {
        const token = localStorage.getItem('jwt');
        const reqOptions = {
            headers: {
                Authorization: token,
            }
        }
        axios
            .get('http://localhost:3300/api/jokes', reqOptions)
            .then(res => {
                console.log('Users Data:', res.data)
                this.setState({ users: res.data })
            })
            .catch(err => {
                console.log(err);
                this.props.history.push('/');
            })
    };

    logout = event => {
        localStorage.removeItem('jwt');
        this.props.history.push('/');
    }
}



export default Users;