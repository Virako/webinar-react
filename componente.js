class Card extends React.Component {
	constructor(props) { // se ejecuta al empezar a montar
		super(props);
		this.state = {
			value: “”
		}
  }
  componentDidMount() {}  // después de montar el componente, antes del render

  render() {  // se ejecuta cuando existe un cambio de estado
    return (
      <span>Props: {this.props.value} State: {this.state.value}</span>
    );
  }

  componentWillUnmount() {}  // desmontamos el componente
}

class Main extends React.Component {
  render() {
    return(
      <div>
        <Card prop1=value prop2=value />
      </div>
    );
  }
}
