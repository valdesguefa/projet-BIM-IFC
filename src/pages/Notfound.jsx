import React, { useEffect } from 'react';
import PageNotFound from '../shared/PageNotFound.jpg';
import '../styles/notfound.css'
const Notfound = (props) => {

    useEffect(() => {
        props.setdisableSidebar(false)
        props.setshowAppBar(false)
      }, [])

    return (
        <div >
           
           <img src={PageNotFound} alt="page not found"  class="img-fluid"/>
         
        </div>
    );
};

export default Notfound;