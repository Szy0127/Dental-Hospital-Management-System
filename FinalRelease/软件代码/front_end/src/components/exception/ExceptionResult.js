import React, { useState } from 'react'
import { Result, Button, Drawer } from 'antd'
import { useNavigate } from 'react-router-dom'
const showInfo = [
    {
        describe: "公众需要通过患者通道登陆注册才能开启预约功能"
    },
    {
        describe: "患者登陆后可以通过侧边栏进行预约和查看就诊记录"
    },
]
export default function ExceptionResult() {
    const [visible, setVisible] = useState(false);
    const navigate = useNavigate();
    function goBack() {
        navigate(-1)
    }
    function help() {
        return showInfo.map(
            (item) =>
            (
                <p>{item.describe}</p>
            )
        )
    }
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };
    return (
        <>
            <Result
                status="404"
                title="404"
                subTitle="不存在该页面"
                extra={[<Button type="primary" onClick={showDrawer}>Help</Button>, <Button type="primary" onClick={goBack}>Back</Button>]}
            />
            <Drawer title="帮助栏" placement="right" onClose={onClose} visible={visible}>
                {help()}
            </Drawer>
        </>
    )
}
