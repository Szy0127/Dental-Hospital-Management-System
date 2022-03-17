import React from 'react'
import './Footer.css'


const Part = function (props) {
    return (
        <React.Fragment>
            <h3>
                {props.title}
            </h3>
            <div>
                {props.content}
            </div>
        </React.Fragment>
    )
}

export default function Footer() {

    const content1 = (
        <div>
            <ul className="list-group">
                <li className="list-group-item">东川路800号</li>
                <li className="list-group-item">东川路700号</li>
                <li className="list-group-item">东川路600号</li>
            </ul>
        </div>
    )
    const content2 = (
        <div>
            <h4>擅长领域</h4>
            <p>123124123123123123123</p>
            <h4>获得荣誉</h4>
            <p>123124123123123123123</p>
        </div>
    )
    const content3 = (
        <div>
            <ul className="list-group">
                <li className="list-group-item">54749110</li>
                <li className="list-group-item">54749111</li>
                <li className="list-group-item">54749112</li>
            </ul>
        </div>
    )
    return (
        <footer>
            <div className="part"><Part title="医院地址" content={content1}/></div>
            <div className="part"><Part title="诊疗内容" content={content2}/></div>
            <div className="part"><Part title="联系方式" content={content3}/></div>
            <br/>
            <div className="hospital">Dental-Hospital</div>
        </footer>
    )
}
