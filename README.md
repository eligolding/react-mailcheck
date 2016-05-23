# React-Mailcheck
React component for the [mailcheck](https://github.com/mailcheck/mailcheck) library. Reduce user-misspelled email addresses in your forms by suggesting a right domain when your users misspell it in an email address.

### Installation
```
npm install --save react-mailcheck
```

### Usage
```jsx
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

#### Props

##### - email: String
Required
The input email that you want to check.

##### - children: (suggestion: Object | null) => ReactElement
Required **function**.
- `suggestion`: The suggestion object passed back to you, or null if mailcheck has nothing to suggest. The suggestion object has the following members:
```js
{
  address: 'test',        // the address; part before the @ sign
  domain: 'gmail.com',    // the suggested domain
  full: 'test@gmail.com'  // the full suggested email
}
```
- Return: must return a React element to render.

## Thanks
- https://github.com/mailcheck/mailcheck

## License
MIT
