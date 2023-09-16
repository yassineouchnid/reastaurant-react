import React, { useEffect, useState } from 'react';
import "./Loading.css"

const Loading = () => {
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }, []);
  return (
    <div className='preloader' style={{ display: loading ? 'block' : 'none'}}>
        <div className="onload">
            <div className="load-1"></div>
            <div className="load-2"></div>
            <div className="load-3"></div>
            <div className="load-4"></div>
            <div className="load-5"></div>
        </div>
    </div>
  )
}

export default Loading