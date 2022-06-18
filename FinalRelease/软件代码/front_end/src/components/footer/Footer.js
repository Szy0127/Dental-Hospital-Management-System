import React from 'react'
import './Footer.css'


const Part = function (props) {
    return (
        <React.Fragment>
            <h3 style={{color:'white'}}>
                {props.title}
            </h3>
            <div style={{color:'white'}}>
                {props.content}
            </div>
        </React.Fragment>
    )
}

export default function Footer() {

    const content1 = (
        <div className='footer-list'>
            <ul className="list-group">
                <li className="list-group-item1">东川路800号</li>
                <li className="list-group-item1">东川路700号</li>
                <li className="list-group-item1">东川路600号</li>
            </ul>
        </div>
    )
    const content2 = (
        <div className='footer-list'>
            <h4 style={{color:'white'}}>擅长领域</h4>
            <p style={{color:'white'}}>	口腔外科 口腔内科 口腔矫正</p>
            <h4 style={{color:'white'}}>获得荣誉</h4>
            <p style={{color:'white'}}>国家卫健委2020-2021年度“私立医疗机构经济管理年”活动优秀单位</p>
        </div>
    )
    const content3 = (
        <div className='footer-list'>
            <ul className="list-group">
                <li className="list-group-item1">54749110</li>
                <li className="list-group-item1">54749111</li>
                <li className="list-group-item1">54749112</li>
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
