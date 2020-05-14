import React, { Component } from "react";
import Contacts from './Contacts';
import "./Home.css";

export default class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            curr: 0,
            contacts: [],
        }
    }

    // runs after render method // updates render method
    async componentDidMount() {
        const response = await fetch('http://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        this.setState({ contacts: data, loading: false}); 
        console.log(data);
    }
  
    updateCurr(num) {
        this.setState({ curr: num });
    }

    render() {
        if (this.state.loading) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                <div className="title">
                    INFORMATION PANEL   
                </div>
                <div className="informationPanel">
                    <div className="contactList">
                        <div className="personal">
                            <div> ID PERSON: {this.state.contacts[this.state.curr].name.toUpperCase()} </div>
                            <div className="image">
                                <img className="profile-img" src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" alt="Profile"></img>
                            </div>  
                        </div>
                    </div>
                    <Contacts contacts={this.state.contacts} triggerUpdate={this.updateCurr.bind(this)} />
                </div>
            </div>
        );
    }
}