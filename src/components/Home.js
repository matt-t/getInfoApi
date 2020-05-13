import React, { Component } from "react";
import Toggle from './Toggle';
import "./Home.css";

export default class Profile extends Component {

    constructor() {
        super();
        this.state = {
            loading: true,
            contacts: [],
            search: '',
        }
    }

    // runs after render method // updates render method
    async componentDidMount() {
        const response = await fetch('http://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        this.setState({ contacts: data, loading: false}); 
        console.log(data);
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
                    <div className="personal">
                        <div> ID PERSON: {this.state.contacts[0].name.toUpperCase()} </div>
                        <div className="image">
                            <img className="profile-img" src="https://www.pinclipart.com/picdir/middle/40-401941_big-image-female-avatar-clipart.png" alt="Profile"></img>
                        </div>  
                    </div>
                    <div className="contactList">
                        <div>
                            {/*maps through entire array of students*/}
                            {this.state.contacts.slice(1).map(contact => (
                                <Toggle render = {({on, toggle}) => (
                                <div key={contact.id} className="contact">
                                    <div className="image">
                                        <img className="profile-img" src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" alt="Profile"></img>
                                    </div>                               
                                    <div className="information">
                                        <div className="nested">
                                            <div className="full-name">{contact.name.toUpperCase()}</div>
                                            <div>
                                                <button className="expand-btn" onClick={toggle}>
                                                    {on && <div>HIDE</div>}
                                                    {!on && <div>EXPAND</div>}
                                                </button>
                                            </div>                                           
                                        </div>
                                        <div className="subinfo">Email: {contact.email}</div>
                                        <div className="subinfo">Phone: {contact.phone}</div>
                                        <div className="subinfo">Username: {contact.username}</div>
                                    </div>                               
                                </div> 
                                )} />       
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}