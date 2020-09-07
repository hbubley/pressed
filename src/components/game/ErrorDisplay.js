import React from "react";
import { Col } from "react-bootstrap";
const ErrorDisplay = ({ errorCount }) => {
    return <div>Error: {errorCount}</div>;
};
ErrorDisplay.defaultProps = {
    errorCount: 1,
};
export default ErrorDisplay;
