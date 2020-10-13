import React from 'react';
import { JumbotronContainer } from "../containers/JumbotronContainer";
import { FooterContainer } from "../containers/FooterContainer";
import { FaqsContainer } from "../containers/FaqsContainer";
import { HeaderContainer } from "../containers/HeaderContainer";
import { OptForm, Feature } from "../components";

export function Home () {
    return (
        <>
            <HeaderContainer>
                <Feature>
                    <Feature.Title>Unlimited movies, TV shows, and more.</Feature.Title>
                    <Feature.SubTitle>Watch anywhere. Cancel anytime. Ready to watch? Enter your email to create or restart your membership.</Feature.SubTitle>

                    <OptForm>
                        <OptForm.Input type="email" placeholder="Email Address" />
                        <OptForm.Button type="submit">Try It Now</OptForm.Button>
                        <OptForm.Break />
                        <OptForm.Text>Ready to watch? Enter your email to create or restart your membership</OptForm.Text>
                    </OptForm>
                </Feature>
            </HeaderContainer>

            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />
        </>
    );
}

