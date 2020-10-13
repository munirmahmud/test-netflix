import React from "react";
import faqsData from '../fixtures/faqs.json';
import { Accordion } from '../components';
import { OptForm } from "../components";

export function FaqsContainer() {
    return (
        <Accordion>
            <Accordion.Title>Frequently Asked Questions</Accordion.Title>

            {faqsData.map((faq) => (
                <Accordion.Item key={faq.id}>
                    <Accordion.Header>{faq.header}</Accordion.Header>
                    <Accordion.Body>{faq.body}</Accordion.Body>
                </Accordion.Item>
            ))}

            <OptForm>
                <OptForm.Input type="email" placeholder="Email Address" />
                <OptForm.Button type="submit">Try It Now</OptForm.Button>
                <OptForm.Break />
                <OptForm.Text>Ready to watch? Enter your email to create or restart your membership</OptForm.Text>
            </OptForm>
        </Accordion>
    );
}