import React from 'react';
import { Carousel } from 'antd';
import "./NewsCarousel.css";
export default class NewsCarousel extends React.Component{

    constructor(props) {
        super(props);
    }
    createContent = (ctx) => {
        const images = ctx.keys().map(ctx);
        console.log(images);
        let result = [];
        for (let i = 0; i < ctx.keys().length; i++) {
            let img = images[i];
            console.log(img);
            result.push(<div><img alt={i} src={img}/></div>);
        }
        return result;
    };


    render(){

        return (
            <Carousel autoplay effect='fade'>
                {this.createContent(this.props.context)}
            </Carousel>
        )
    }
}


