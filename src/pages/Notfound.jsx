import React from 'react';
import PageNotFound from '../shared/PageNotFound.jpg';
import '../styles/notfound.css'
const Notfound = () => {
    return (
        <div >
           
           <img src={PageNotFound} alt="page not found"  class="img-fluid"/>
         
        </div>
    );
};

export default Notfound;