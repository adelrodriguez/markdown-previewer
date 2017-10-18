import React, { Component } from 'react';
import marked from 'marked';

// Components
import TextArea from './components/text-area';
import DisplayArea from './components/display-area';

// Set marked options
marked.setOptions({
  sanitize: true,
});

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayText: ''
    }
  }
  
  render() {
    const parseMarkdown = (text) => {
      this.setState({
        displayText: marked(text)
      });
    }

    return (
      <div className="App ui two column stackable grid">
        <TextArea onTextInput={ parseMarkdown } />
        <DisplayArea displayText={ this.state.displayText } />
      </div>
    );
  }
};

export default App;
