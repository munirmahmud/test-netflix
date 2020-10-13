import React from "react";
import { FooterContainer } from "../containers/FooterContainer";
import { HeaderContainer } from "../containers/HeaderContainer";
import { Form } from "../components";


export function Signin() {
    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Text>Sign In</Form.Text>

                    <Form.Base method="POST">
                        <Form.Input type="email" placeholder="Email Address" />
                        <Form.Input type="password" placeholder="Password" autocomplete="off" />
                        <Form.Submit type="submit">Sign In</Form.Submit>
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