import { Component } from 'react';

interface AppState {
  message: string;
  inputValue: string;
  postResponse: string;
}

class App extends Component<{}, AppState> {

  state: AppState = {
    message: '',
    inputValue: '',
    postResponse: ''
  };

  async componentDidMount() {
    const response = await fetch('/api/hello');
    const data: { message: string } = await response.json();
    this.setState({ message: data.message });
  }

  handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch('/api/world', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ post: this.state.inputValue })
    });

    const data: { message: string } = await response.json();
    console.log(data); // تحقق فالconsole واش كيوصل الجواب
    this.setState({ postResponse: data.message });
  };

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>

        <form onSubmit={this.handleSubmit}>
          <h2>Post to Server:</h2>
          <input
            type="text"
            value={this.state.inputValue}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
              this.setState({ inputValue: e.target.value })
            }
          />
          <button type="submit">Submit</button>
        </form>

        {this.state.postResponse && (
          <p>{this.state.postResponse}</p>
        )}
      </div>
    );
  }
}

export default App;