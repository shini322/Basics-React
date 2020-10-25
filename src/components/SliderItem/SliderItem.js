import React from 'react';
const SliderItem = (props) => {
    const bgImage = {backgroundImage: `url(../../images/${props.bgImage})`}
    return(
        <div className="features-slider_item">
            <div className="features-img" style={bgImage}></div>
            <div className="features-feature"> {props.label} </div>
        </div>
    )
}

export default SliderItem;