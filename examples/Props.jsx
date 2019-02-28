// Hello.jsx
class Hello extends Component {
  render() {
    return <h1>Hello {this.props.name}!</h1>;
  }
}

// A Separate File
import Hello from './Hello.jsx';

<Hello name="CS Club" />; // Hello CS Club!
<Hello name={'S' + 'tevens'} />; // Hello Stevens!
