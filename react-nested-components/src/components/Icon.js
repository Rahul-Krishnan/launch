/* jshint esversion: 6 */
import React, {Component} from 'react';

class Icon extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let iconClass = "fa fa-2x fa-fw " + this.props.fontAwesomeSymbol;
    let iconName = this.props.iconName;
    let descriptionAlert = () => alert(this.props.description);

    return(
      <li onClick={descriptionAlert} >
        <i className={iconClass} /> - {iconName}
      </li>
    );
  }
};

export default Icon;
