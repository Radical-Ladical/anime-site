import React, {Component} from 'react';
import Api from './api';
import axios from 'axios';


function SignIn() {
    return(
        <React.Fragment>
        <div class ="parent">
            <ul class="children">
                <li>
                    <a href="default.asp"class="username"><Api/></a>
                </li>
                <li>
                    <a href="news" class ="password">asds</a>
                </li>
            </ul>
        </div>
        </React.Fragment>
    )
}

export default SignIn;