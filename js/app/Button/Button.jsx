import React from 'react';
import './Button.less';
import {Row, Item, Column} from 'react-plan';

type Props = {
  state: ?string
}

const baseClass = 'button-base';

const strings = {
  saving: 'Saving ...',
  success: 'Complete'
};

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
    let children = null;
    let disabled = false;
    className = (className) ? `${baseClass} ${className}` : baseClass;
    switch (this.props.state) {
      case 'SAVING':
        disabled = true;
        children = <span><i span data-icon="z" className="icon"></i> { this.props.saving || strings.saving }</span>;
        break;
      case 'SUCCESS':
        disabled = true;
        children = <span><i className="icon-check"></i> { this.props.success || strings.success }</span>;
        break;
      default:
        children = this.props.children;
        break;
    }
    return (
      <button className={ className } { ...others } disabled={ disabled }>{ children }</button>
    );
  }
  /* End React Component LifeCycle Methods */
}

export default Button;

//Unit test entry point
export const ButtonTest = Button;