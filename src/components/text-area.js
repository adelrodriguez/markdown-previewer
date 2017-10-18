import React, { Component } from 'react';

class TextArea extends Component {
  constructor(props) {
    super(props);
    
    this.state = { text: '# A Markdown Previewer\n## Pretty neat\nThis was made with **React** and parsed with [_marked_](https://github.com/chjj/marked).\n## Credit\nMade by [Adel Rodríguez](http://www.adelrodriguez.com/). Checkout my [GitHub](https://github.com/adelrodriguez).'};
    
    // Initialize with state text
    this.props.onTextInput(this.state.text);
  }

  onInputChange(text) {
    this.setState({ text });
    this.props.onTextInput(text);
  }

  render() {
    return (
      <div className="text-area eight wide column">
        <textarea
          type="text"
          cols="40"
          rows="30"
          value={ this.state.text }
          onChange={ event => this.onInputChange(event.target.value) }
        />
      </div>
    );
  }
};

export default TextArea;