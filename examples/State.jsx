class StateFulComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Stevens'
    };
  }

  handleChange(ev) {
    this.setState({ name: ev.target.value });
  }

  render() {
    return (
      <div className="App">
        <h1>Hello {this.state.name}!</h1>
        <input value={this.state.name} onChange={e => this.handleChange(e)} />
      </div>
    );
  }
}
