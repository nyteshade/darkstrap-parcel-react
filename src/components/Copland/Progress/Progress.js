import React from 'react'
import '../../../css/components/Copland/Progress/Progress.css'

export default class Progress extends React.Component
{
  render() {
    return (
      <div className="progress red p43">
        <div className="bar">
          <div className="slice slice1"></div>
          <div className="slice slice2"></div>
          <div className="slice sliceN"></div>
          <div className="slice slice3"></div>
          <div className="slice slice4"></div>
          <div className="slice slice5"></div>  
        </div>
        <div className="track">
          <div className="slice barborder"></div>
          <div className="slice barshadow"></div>
          <div className="slice trackstart"></div>
          <div className="slice trackmiddle"></div>
          <div className="slice trackend"></div>
        </div>
      </div>      
    )
  }
}