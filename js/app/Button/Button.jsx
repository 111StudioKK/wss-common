import React from 'react';
import './Button.less';
import {Row, Item, Column} from 'react-plan';

type Props = {

}

const baseClass = 'button-base';

class Button extends React.Component {

  description: 'A responsive and styled button.'

  props: Props

  constructor(props: Props) {
    super(props);
  }

  /* Component Custom Methods */
  /* End Component Custom Methods */

  /* React Component LifeCycle Methods */
  //componentWillMount() {}
  //componentDidMount() {}
  //componentWillReceiveProps(nextProps) {}
  //shouldComponentUpdate(nextProps, nextState) {}
  //componentWillUpdate(nextProps, nextState) {}
  //componentDidUpdate(prevProps, prevState) {}
  //componentWillUnmount() {}
  render() {
    let { className, ...others } = this.props;
    className = (className) ? `${baseClass} ${className}` : baseClass;
    return (
      <button className={ className } { ...others } >{ this.props.children }</button>
    );
  }
  /* End React Component LifeCycle Methods */
}

export default Button;

//Unit test entry point
export const ButtonTest = Button;