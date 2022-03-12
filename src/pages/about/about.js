import React from 'react';
import { CONTENT } from'./../../utils/constants';

const About = () => {
    const { ABOUT : {BODY} } = CONTENT;
    return (<p>{BODY}</p>);
};

export default About;