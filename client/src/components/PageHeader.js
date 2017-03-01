import React, { Component } from 'react';

export default class PageHeader extends Component {
  render () {
    const { title, subText } = this.props;

    return <div className="page-header">
      <div className="page-header-content">
        <div className="page-title">
          <h4>
            <span className="text-semibold">{title}</span>
            <small className="display-block">{subText}</small>
          </h4>
        </div>
      </div>

    </div>
  }
}
