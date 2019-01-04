import posed from "react-pose";

const Square = posed.div({
  idle: {
    scale: 1,
  },
  hovered: {
    scale: 1.05,
  }
});

const styles = {
  p: {
    fontFamily: "Roboto",
    color: "black",
  }
}

class Card extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      hovering: false,
    }
  }

  render() {
    return(
      <Square
      pose={this.state.hovering ? "hovered" : "idle"}
      onMouseEnter={() => this.setState({ hovering: true })}
      onMouseLeave={() => this.setState({ hovering: false })}>
        <a href={this.props.github}>
          <div className="is-flex columns" style={{padding: "0.25rem"}}>
            <div className="column is-2 is-2-mobile is-flex" style={{alignItems: "center"}}>
              <img src={this.props.src}/>
            </div>
            <div className="column is-10">
              <b className="is-size-5 is-size-6-mobile" style={ styles.p }>{this.props.title}</b>
              <br/>
              { this.props.link ? <a className="is-size-6 is-size-7-mobile" href={this.props.link.href}>{this.props.link.label}</a> : <div></div> }
              { this.props.role ? <p className="is-size-6 is-size-7-mobile" style={{fontFamily: "Roboto", color: "gray"}}>{this.props.role}</p> : <div></div> }
              <div>
                <p className="is-size-6" style={ styles.p }>{this.props.desc} </p>
              </div>
            </div>
          </div>
        </a>
      </Square>
    );
  }
}


//<i className="fas fa-angle-down has-text-grey" style={{marginLeft: 10}}></i>
  export default Card;
