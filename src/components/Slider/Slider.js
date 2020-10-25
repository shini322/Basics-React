import React from 'react';
import SliderItem from '../SliderItem/SliderItem'
const Slider = () => {
    return(
    <div className="features-slider_items">
        <SliderItem bgImage={'1.svg'} label={'Первое целевое преимущество'}/>
        <SliderItem bgImage={'2.svg'} label={'Второе целевое преимущество'}/>
        <SliderItem bgImage={'3.svg'} label={'Третье целевое преимущество'}/>
        <SliderItem bgImage={'4.svg'} label={'Четвертое целевое преимущество'}/>
    </div>
    )
    
}

export default Slider;