class BeeComponent {
  constructor(props = {}) {
    this.props = props;
  }

  render() {
    throw 'Render method should be implemented by subclass';
  }
}

export default BeeComponent;
