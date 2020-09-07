import React from "react";
import { Col } from "react-bootstrap";

const MatchDisplay = ({ matchCount }) => {
    
    return <div>Match: {matchCount}</div>;
};
MatchDisplay.defaultProps = {
    matchCount: 1,
};

export default MatchDisplay;
