import React, { Component } from 'react';

export default class BoxClass extends Component {

    constructor(props) {

        super(props);
        
        this.state = {
            city : "서울",
            cnt:0,
            num:0,
            value:0,
        }
    }

    inc = () => {
        this.setState({
            cnt: this.state.cnt+1
        });
    }

  render() {  // 클래스 컴포넌트에서는 render함수 필요
    return (
      <div>
        <h1>Class Component, <br />
            {this.props.name} in {this.state.city}
            <hr />
            <p>클릭 횟수 : {this.state.cnt}</p>
            <button onClick={this.inc}>클릭!</button>
            </h1>
      </div>
    )
  }
}
