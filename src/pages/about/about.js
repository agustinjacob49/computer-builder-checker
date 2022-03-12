const React = require('react');
const { CONTENT } = require('./../../utils/constants');

const About = () => {
    const { ABOUT : {BODY} } = CONTENT;
    return (<p>{BODY}</p>);
};

export default About;