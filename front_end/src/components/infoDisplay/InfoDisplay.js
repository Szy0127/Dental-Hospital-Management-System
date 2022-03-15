import React from 'react';
import { Carousel } from 'antd';
import "./InfoDisplay.css";
export default class InfoDisplay extends React.Component{

    constructor(props) {
        super(props);
    }



    render(){
        const title = (
            <h2>
                {this.props.title}
            </h2>

        )
        return (
            <React.Fragment>
                {title}
                <ul className="list-group">
                    <li className="list-group-item">An item</li>
                    <li className="list-group-item">A second item</li>
                    <li className="list-group-item">A third item</li>
                    <li className="list-group-item">A fourth item</li>
                    <li className="list-group-item">And a fifth one</li>
                </ul>
            </React.Fragment>

        )
    }
}