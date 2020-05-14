import React from 'react';
import "./Contacts.css";

const Contacts = ({ contacts, triggerUpdate }) => {
    return (
        <div className="contactList">
            <div>
                {contacts.map(contact => (
                     <div key={contact.id} className="contact">
                        <div className="image">
                            <img className="profile-img" src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" alt="Profile"></img>
                        </div>                               
                        <div className="information">
                             <div className="nested">
                                <div className="full-name">{contact.name.toUpperCase()}</div>
                                <div>
                                    <button className="expand-btn" onClick={()=>triggerUpdate(contact.id - 1)}>
                                            SHOW
                                    </button>                                    
                                </div>                                           
                            </div>
                            <div className="subinfo">Email: {contact.email}</div>
                            <div className="subinfo">Phone: {contact.phone}</div>
                            <div className="subinfo">Username: {contact.username}</div>
                        </div>                               
                    </div> 
                ))}
            </div>
        </div>
    )
};

export default Contacts;