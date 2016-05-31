import React from 'react';
import mailcheck from 'mailcheck';

const { string, array, func } = React.PropTypes;

class MailCheck extends React.Component {

  static propTypes = {
    email: string.isRequired,
    children: func.isRequired,
    domains: array,
    topLevelDomains: array,
    secondLevelDomains: array,
    distanceFunction: func,
  };

  state = {
    suggestion: null,
  };

  componentWillMount() {
    this.checkEmail(this.props.email);
  }

  componentWillReceiveProps(nextProps) {
    this.checkEmail(nextProps.email);
  }

  checkEmail = (email) => {
    const { domains, topLevelDomains, secondLevelDomains, distanceFunction } = this.props;
    mailcheck.run({
      email,
      domains,
      topLevelDomains,
      secondLevelDomains,
      distanceFunction,
      suggested: (suggestion) => {
        this.setState({
          suggestion,
        });
      },
      empty: () => {
        if (this.state.suggestion) {
          this.setState({ suggestion: null });
        }
      },
    });
  }

  render() {
    return this.props.children(this.state.suggestion);
  }
}

export default MailCheck;
