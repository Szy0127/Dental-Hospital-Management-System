import { Steps, Divider } from 'antd';
import React from 'react';
const { Step } = Steps;

class PatientConsult extends React.Component {

    constructor(props) {
      super(props);
    }

  state = {
    current: this.props.step
  };

  onChange = current => {
    console.log('onChange:', current);
    this.setState({ current });
  };

  render() {
    const { current } = this.state;

    return (
      <>
        <Steps current={current} onChange={this.onChange}>
          <Step title="Step 1" description="挂号" />
          <Step title="Step 2" description="抽血采样" />
          <Step title="Step 3" description="拍片" />
          <Step title="Step 4" description="初步诊断" />
          <Step title="Step 5" description="开药" />
          <Step title="Step 6" description="住院" />
        </Steps>

        <Divider />

        <Steps current={current} onChange={this.onChange} direction="vertical">
        <Step title="Step 1" description="挂号" />
          <Step title="Step 2" description="抽血采样" />
          <Step title="Step 3" description="拍片" />
          <Step title="Step 4" description="初步诊断" />
          <Step title="Step 5" description="开药" />
          <Step title="Step 6" description="住院" />
        </Steps>
      </>
    );
  }
}
export default PatientConsult;