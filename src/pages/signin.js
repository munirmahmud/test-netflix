import React, { useState, useContext } from "react";
import { FirebaseContext } from '../context/firebase';
import {HeaderContainer} from "../containers/header";
import {FooterContainer} from "../containers/footer";
import { Form } from '../components';

export default function Signin() {
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const isInvalid = password === '' || emailAddress === '';
    const handleSignIn = (e) => {
        e.preventDefault();


    }

    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign In</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}

                    <Form.Base onSubmit={handleSignIn} method="POST">
                        <Form.Input type="text" placeholder="Email address" value={emailAddress} onChange={({ target }) => setEmailAddress(target.value)} />
                        <Form.Input type="password" placeholder="Password" value={password} autocomplete="off" onChange={({ target }) => setPassword(target.value)} />
                        <Form.Submit type="submit" disabled={isInvalid}>Sign In</Form.Submit>
                    </Form.Base>

                    <Form.Text>
                        New to Netflix? <Form.Link to="/signup">Sign up now</Form.Link>
                    </Form.Text>
                    <Form.TextSmall>
                        This page is protected by Google reCaptcha to ensure you're not a bot. Learn more
                    </Form.TextSmall>
                </Form>
            </HeaderContainer>
            <FooterContainer />
        </>
    );
};