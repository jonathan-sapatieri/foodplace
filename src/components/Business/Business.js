import React from 'react';
import './Business.css';

import BkgBusiness from './bkg_business.jpg'

class Business extends React.Component {
  constructor(props) {
    super(props);
    
    this.business = {
      imageSrc: './src/components/Business/bkg_business.jpg',
    }
  }

  render() {
    return (
      <div className="Business">
        <div className="image-container">
          <img
            src={this.props.business.imageSrc ? this.props.business.imageSrc : BkgBusiness}
            alt=""
          />
        </div>
        <h2>{this.props.business.name}</h2>
        <div className="Business-information">
          <div className="Business-address">
            <p>{this.props.business.address}</p>
            <p>{this.props.business.city}</p>
            <p>{`${this.props.business.state} ${this.props.business.zipCode}`}</p>
          </div>
          <div className="Business-reviews">
            <h3>{this.props.business.category}</h3>
            <h3>{this.props.business.rating}</h3>
            <h3>{this.props.business.reviewCount}</h3>
          </div>
        </div>
      </div>
    );
  }
};

export default Business;
