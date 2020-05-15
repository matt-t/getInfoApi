import React, { Component } from "react";
import Contacts from './Contacts';
import "./Home.css";
import iconPhone from '../images/phone.png';
import iconEmail from '../images/email.png';
import iconAddress from '../images/address.png';


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
                    <div className="personal">
                        <div className="header">
                            <div className="pic">
                                <img className="profile-pic" src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" alt="Profile"></img>
                            </div>
                            <div>
                                <div className="connect">
                                    <div className="icon-text">
                                        {this.state.contacts[this.state.curr].phone}   
                                    </div>
                                    <div>
                                    <img className="icon" src={iconPhone} alt="icon"></img>
                                    </div>
                                    <div className="icon-text">
                                        {this.state.contacts[this.state.curr].email}   
                                    </div>
                                    <div>
                                    <img className="icon" src={iconEmail} alt="icon"></img>
                                    </div>
                                    <div className="icon-text">
                                        {this.state.contacts[this.state.curr].address.street},&nbsp; {this.state.contacts[this.state.curr].address.city}   
                                    </div>
                                    <div>
                                    <img className="icon" src={iconAddress} alt="icon"></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="name">
                            {this.state.contacts[this.state.curr].name}
                        </div>
                        <div className="temp2">
                            <div>
                            {this.state.contacts[this.state.curr].website}
                            </div>
                            <div>
                            {this.state.contacts[this.state.curr].company.name}
                            </div>    
                            <div>
                            {this.state.contacts[this.state.curr].company.catchPhrase}    
                            </div>
                            <div>
                            {this.state.contacts[this.state.curr].company.bs}      
                            </div>  
                        </div>
                    </div>
                    <Contacts contacts={this.state.contacts} triggerUpdate={this.updateCurr.bind(this)} />
                </div>
            </div>
        );
    }
}