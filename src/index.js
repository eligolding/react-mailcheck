import { useState, useEffect } from 'react';
import mailcheck from 'mailcheck';

function useMailCheck({
  domainThreshold,
  secondLevelThreshold,
  topLevelThreshold,
  domains,
  topLevelDomains,
  secondLevelDomains,
  distanceFunction,
  email,
}) {
  const [suggestion, setSuggestion] = useState(null);

  useEffect(() => {
    mailcheck.domainThreshold = domainThreshold || mailcheck.domainThreshold;
    mailcheck.secondLevelThreshold = secondLevelThreshold || mailcheck.secondLevelThreshold;
    mailcheck.topLevelThreshold = topLevelThreshold || mailcheck.topLevelThreshold;

    mailcheck.run({
      email,
      domains,
      topLevelDomains,
      secondLevelDomains,
      distanceFunction,
      suggested: setSuggestion,
      empty: () => {
        setSuggestion(null);
      },
    });
  }, [
    email,
    domainThreshold,
    secondLevelThreshold,
    topLevelThreshold,
    setSuggestion,
    distanceFunction,
    domains,
    secondLevelDomains,
    topLevelDomains,
  ]);

  return suggestion;
}

function MailCheck(props) {
  const suggestion = useMailCheck(props);
  return props.children(suggestion);
}

export { useMailCheck, MailCheck }