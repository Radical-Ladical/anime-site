import React, {Component} from 'react';
import axios from 'axios';

export default class App extends Component {
    constructor(props) {
      super(props);
      this.state= {
        isLoaded:false,
        data:[]
      }
    }
    
    componentDidMount() {
      let one ="";
  
      const requestOne = axios.get(one);
  
      axios.all([requestOne]).then(axios.spread((...responses) =>{
        console.log(responses)
        const responseOne = responses[0].data.born
  
        this.setState({
          data:[responseOne]
        })
  
      })).catch(errors => {
        console.log ('Error fetching data')
      })  
    }
  
  
    render() {
      return(
        <div>
          <h2></h2>
          <h4>{this.state.data[0]}</h4>
        </div>
      )
    }
  }
  
  