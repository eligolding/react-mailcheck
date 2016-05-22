# react-mailcheck
React component for the [mailcheck](https://github.com/mailcheck/mailcheck) library. Reduce user-misspelled email addresses in your forms by suggesting a right domain when your users misspell it in an email address.

# Installation
```
npm install react-mailcheck
```

#Usage
```
import MailCheck from 'react-mailcheck'

<MailCheck email={this.state.inputText}>
  {suggestion => (
    <div>
      <input
        type="email"
        value={this.state.inputText}
        onChange={(e) => { this.setState({ inputText: e.target.value }); }}
      />
      {suggestion &&
        <div>
          Did you mean {suggestion.full}?
        </div>
      }
    </div>
  )}
</MailCheck>
```

# License
MIT
