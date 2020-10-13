import React from 'react';
import { JumbotronContainer } from "../containers/JumbotronContainer";
import { FooterContainer } from "../containers/FooterContainer";
import { FaqsContainer } from "../containers/FaqsContainer";
import { HeaderContainer } from "../containers/HeaderContainer";
import { OptForm } from "../components";

export function Home () {
    return (
        <>
            <HeaderContainer>
                <OptForm>
                    <OptForm.Input type="email" placeholder="Email Address" />
                    <OptForm.Button type="submit">Try It Now</OptForm.Button>
                    <OptForm.Break />
                    <OptForm.Text>Ready to watch? Enter your email to create or restart your membership</OptForm.Text>
                </OptForm>
            </HeaderContainer>

            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />
        </>
    );
}

