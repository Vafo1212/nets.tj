import React, { useState } from 'react'
import './RouterSlider.scss'
import RouterCards from './RouterCards/RouterCards';
import Form from '../../General/Form/Form';
const RouterSlider = ({ title, data, titleText }) => {
    const [activeTitle, setActiveTitle] = useState(0);
    const [active, setActive] = useState(false) 
  return (
    <div className="routerSlider_container"  >
      <div className="routerSlider_block">
        <h1>{titleText}</h1>
        {/* <div className="routerSlider_title">
          {title?.map((e, index) => (
            <div className="routerSliderTitle_text" key={index}>
              <p
                style={{ borderBottom: activeTitle === index && '2px solid #FF1749' }}
                onClick={() => setActiveTitle(index)}
              >
                {e.name}
              </p>
            </div>
          ))}
        </div> */}
        <div className="routerSlider_item">
          <RouterCards data={data} setActive={setActive}/>
        </div>
      </div>
      {
    active &&
    <div className="form_container">
      <div className="form_block">
        <Form show={true} setShowModal={setActive}/>
      </div>
    </div>
    }
    </div>
  )
}

export default RouterSlider
