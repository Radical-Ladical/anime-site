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
      axios.get('https://kitsu.io/api/edge')
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
    }
  
    render() {
      return(
        <React.Fragment>
            <div>
                <h2>wow</h2>
                {/* <h4>{this.state.data[0]}</h4> */}
            </div>
        </React.Fragment>
      )
    }
  }
  
  