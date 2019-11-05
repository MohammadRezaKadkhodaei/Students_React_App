import React from 'react';
import Button from '../../UI/button/button';
import './SignIn.css';
const SignIn =(props)=>(
    <React.Fragment>
        <h1 style={{textAlign: 'center'}}>کدخدایی</h1>
        <input type="text" placeholder="username" />
        <input type="password" placeholder="password" />
        <div style={{textAlign: 'center'}}>
            <Button btnType="Success" >ورود</Button>
        </div>
        
    </React.Fragment>
)
export default SignIn;