import React, {Component} from 'react';
import SignIn from './components/display';
import Api from './components/api';
import './App.css';
import axios from 'axios';


export default class app extends Component {



  render() {
    return(
      <body class="body">
      <SignIn/>
      </body>
    )
  }
}
