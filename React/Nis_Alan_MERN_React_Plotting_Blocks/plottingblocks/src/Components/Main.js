import React from 'react';
import Subcontent from './Subcontent';
import Advertisement from './Advertisement';

const Main = (props) => {
    return(
        <div className='main'>
            <div className='mainrow'>
        <Subcontent />
        <Subcontent />
        <Subcontent />
      </div>
      <div className='mainrowbot'>
      <Advertisement/>
      </div>
        </div>
    )
}
export default Main;