import React from "react";
import img0 from "../../kanye/2.png";
import img1 from "../../kanye/3.png";
import img2 from "../../kanye/4.png";
import img3 from "../../kanye/5.png";
import img4 from "../../kanye/1.png";
import img5 from "../../kanye/6.png";

const ErrorDisplay = ({ errorCount }) => {
    const images = [img0, img1, img2, img3, img4, img5];

    return <img width="500px" src={images[errorCount]} alt="yeezus" />;
};
ErrorDisplay.defaultProps = {
    errorCount: 1,
};
export default ErrorDisplay;
