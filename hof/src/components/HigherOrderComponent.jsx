import React, { Component } from 'react';

class HighOrderComponent extends Component {
    constructor() {
        super();
        this.state = {
            udata: [
                { id: '1', name: 'Alex', role: 'Developer', age: 31, experience: 11 },
                { id: '2', name: 'Eva', role: 'Designer', age: 26, experience: 4 },
                { id: '3', name: 'Bob', role: 'Teacher', age: 24, experience: 2 },
                { id: '4', name: 'Jarah', role: 'Entrepreneur', age: 58, experience: 25 },
                { id: '5', name: 'Mia', role: 'Designer', age: 43, experience: 18 }
            ]
        }
    }

    renderItems = () => {
        const data = this.state.udata;
        return (
            <div className="item-container">
                {data.map(item => (
                    <div key={item.id} className="item-box">
                        <span>Id: {item.id}</span>
                        <span>Name: {item.name}</span>
                        <span>User Type: {item.role}</span>
                    </div>
                ))}
            </div>
        );
    };

    renderBasedOnUserType = (userType) => {
        const filteredData = this.state.udata.filter(item => item.role === userType);
        return (
            <div className="item-container">
                {filteredData.map(item => (
                    <div key={item.id} className="item-box">
                        <span>Id: {item.id}</span>
                        <span>Name: {item.name}</span>
                        <span>User Type: {item.role}</span>
                    </div>
                ))}
            </div>
        );
    };

    renderNamesStartingWithJ = () => {
        const filteredData = this.state.udata.filter(item => item.name.startsWith('J'));
        return (
            <div className="item-container">
                {filteredData.map(item => (
                    <div key={item.id} className="item-box">
                        <span>Id: {item.id}</span>
                        <span>Name: {item.name}</span>
                        <span>User Type: {item.role}</span>
                    </div>
                ))}
            </div>
        );
    };

    renderByAgeRange = (minAge, maxAge) => {
        const filteredData = this.state.udata.filter(item => item.age > minAge && item.age <= maxAge);
        return (
            <div className="item-container">
                {filteredData.map(item => (
                    <div key={item.id} className="item-box">
                        <span> Id: {item.id} </span>
                        <span> Name: {item.name} </span>
                        <span> User Type: {item.role} </span>
                    </div>
                ))}
            </div>
        );
    };

    calculateTotalDesignerExperience = () => {
        const totalExperience = this.state.udata
            .filter(item => item.role === 'Designer')
            .reduce((total, item) => total + item.experience, 0);
        return (
            <div id="item-box">
                Total Experience of Designers: {totalExperience}
            </div>
        );
    };

    render() {
        return (
            <React.Fragment>
                <h1>All Customer Data</h1>
                {this.renderItems()}
                <h2>Display based on user type</h2>
                {this.renderBasedOnUserType('Designer')}
                <h2>Filter all data starting with J</h2>
                {this.renderNamesStartingWithJ()}
                <h2>Filter all data based on age</h2>
                {this.renderByAgeRange(28, 50)}
                <h2>Total years of designers experience</h2>
                {this.calculateTotalDesignerExperience()}
            </React.Fragment>
        );
    }
}

export default HighOrderComponent;
