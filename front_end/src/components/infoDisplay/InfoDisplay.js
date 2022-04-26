import React from 'react';
import {Link} from 'react-router-dom'
import "./InfoDisplay.css";
export default class InfoDisplay extends React.Component{

    constructor(props) {
        super(props);
    }



    render(){
        const title = (
            <h2 className="infoTitle">
                {this.props.title}
            </h2>

        )
        let infoItems=[];
        for(let i = 0 ;i < this.props.items.length ;i++){
            infoItems.push(
                <Link to={{
                    pathname: '/info/'+this.props.type+'/',
                    search: '?id=' + i
                }}>
                    <li className="list-group-item infoItem">
                        {this.props.items[i].title}
                        <span className="badge bg-primary  pull-right date">{this.props.items[i].date}</span>
                    </li>
                </Link>
            )
        }
        return (
            <React.Fragment>
                {title}
                <ul className="list-group">
                    {infoItems}
                </ul>
            </React.Fragment>

        )
    }
}