import React from "react";
import './MemoryCard.css'

class MemoryCard extends React.Component {

     render() {
          return(
               <>
               <div className="MemoryCard" onClick={this.props.pickCard}>
                    <div className= {!this.props.isFlipped ? 'MemoryCardInner' : 'MemoryCardInner flipped'}>
                         <div className="MemoryCardBack">
                              <img className="image" src="./digitalcrafts-logo-white-y.png" alt="DC-Logo" />
                          </div>
                         <div className="MemoryCardFront">
                              {this.props.symbol}
                         </div> 
                    </div>
               </div>
               </>            
          )
     }

}

export default MemoryCard;


