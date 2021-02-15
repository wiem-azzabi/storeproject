import React from "react";
import ImageFadeIn from "react-image-fade-in";
import img from './imgcov.jpg'

function Cover() {
    return (
        <div>
        <ImageFadeIn width={900} height={480} src={img} opacityTransition="1.5" />;
        <br/>  <br/>
        </div>
    )
}
export default Cover
