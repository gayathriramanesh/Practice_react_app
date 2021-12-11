import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class countchar extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };
  }

  onmessagechange(text) {
    this.setState({
      message: 'message has' + text.length + 'number of characters'
    });
  }

  render()
  {
    return <div>
      <p>enter a message:<input type="text" onChange={e => this.onmessagechange(e.target.value)}></input></p>
    </div>
  }
}


const element = <countchar></countchar>
ReactDOM.render(element,
  document.getElementById("root"));




