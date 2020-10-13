import React, { useState, useContext } from "react";
import { useHistory } from 'react-router-dom';
import { FooterContainer } from "../containers/FooterContainer";
import { HeaderContainer } from "../containers/HeaderContainer";
import { Form } from "../components";
import { FirebaseContext } from "../context/firebase";
import * as ROUTES from '../constants/routes';


export function Signin() {
    const history = useHistory()
    const { firebase } = useContext(FirebaseContext);

    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const isInvalid = emailAddress === '' || password === '';

    const handleSubmit = (e) => {
        e.preventDefault();

        firebase.auth()
            .signInWithEmailAndPassword(emailAddress, password)
            .then(() => {
                history.push(ROUTES.BROWSE);
            })
            .catch((error) => {
                setEmailAddress('');
                setPassword('');
                setError(error.message);
            });
    }

    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Text>Sign In</Form.Text>
                    {error && <Form.Error>{error}</Form.Error>}

                    <Form.Base onSubmit={handleSubmit} method="POST">
                        <Form.Input type="email" value={emailAddress} onChange={({target}) => setEmailAddress(target.value)} placeholder="Email Address" />
                        <Form.Input type="password" value={password} onChange={({target}) => setPassword(target.value)} placeholder="Password" autocomplete="off" />
                        <Form.Submit type="submit" disabled={isInvalid}>Sign In</Form.Submit>
                    </Form.Base>

                    <Form.Text>
                        New to Netflix? <Form.Link to="/signup">Sign Up</Form.Link>
                    </Form.Text>
                    <Form.Text>This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.</Form.Text>
                </Form>
            </HeaderContainer>

            <FooterContainer />
        </>
    )
}