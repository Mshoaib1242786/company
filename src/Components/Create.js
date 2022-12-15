import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import axios from 'axios';
import Layout from './Layout';


export default function Create() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [company, setCompany] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNo, setPhoneNo] =  useState('');
    const [message, setMessage] =  useState('');
    const [checkbox, setCheckbox] = useState(false);
    
    const postData = () => {
        axios.post(`https://63919872ac688bbe4c4c98bd.mockapi.io/fakeData`, {
            firstName,
            lastName,
            company,
            email,
            phoneNo,
            message,
            checkbox
        })
    }
    return (
        <div className="create-form">
          <Form>
                <div className='first'>
                <form >
                    <label>First Name</label>
                    <input  placeholder='First Name' onChange={(e) => setFirstName(e.target.value)}/>
                </form>
                <form>
                    <label>Last Name</label>
                    <input placeholder='Last Name' onChange={(e) => setLastName(e.target.value)}/>
                </form>

                <form>
                <label>Company</label>
                    <input placeholder='Company' onChange={(e) => setCompany(e.target.value)}/>
                </form>

                <form>
                <label>Email</label>
                    <input placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
                </form>
                
                <form>
                <label>PhoneNo</label>
                    <input placeholder='Phone No' onChange={(e) => setPhoneNo(e.target.value)}/>
                </form>

                <form>
                <label>Message</label>
                    <input  placeholder='Message' onChange={(e) => setMessage(e.target.value)}/>
                </form>

                <form>
                    <Checkbox label='I agree to the Terms and Conditions' onChange={(e) => setCheckbox(!checkbox)}/>
                </form>
                <Button onClick={postData} type='submit'>Submit</Button><br/>
                <Layout />
                </div>
            </Form>
        

        </div>
    )
}