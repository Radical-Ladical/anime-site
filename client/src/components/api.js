import React, {Component} from 'react';
import axios from 'axios';

export default class Api extends Component {
    constructor(props) {
      super(props);
      this.state= {
        isLoaded:false,
        data:[]
      }
    }
    
    componentDidMount() {
      let one ="https://kitsu.io/api/edge";
  
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
        <React.Fragment>
            <div>
                <h2>wow</h2>
                <h4>{this.state.data[0]}</h4>
            </div>
        </React.Fragment>
      )
    }
  }
  
  