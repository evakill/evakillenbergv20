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
      h1: false
    }
  }

  render() {
    return(
      <div className="is-flex columns" style={{padding: "0.25rem"}}>
        <div className="column is-2 is-2-mobile is-flex" style={{alignItems: "center"}}>
          <img src={this.props.src}/>
        </div>
        <div className="column is-10">
          <b className="is-size-5 is-size-6-mobile" style={ styles.p }>{this.props.title} </b>
          { this.props.role ? <p className="is-size-6 is-size-7-mobile" style={{fontFamily: "Roboto", color: "gray"}}>{this.props.role}</p> : <div></div> }
          <p className="is-size-6" style={ styles.p }>{this.props.desc} </p>
          <div className="container is-flex" style={{alignItems: "flex-end", justifyContent: "space-between"}}>
            { this.props.link ? (
              <Square
              pose={this.state.h1 ? "hovered" : "idle"}
              onMouseEnter={() => this.setState({ h1: true })}
              onMouseLeave={() => this.setState({ h1: false })}>
                <a href={this.props.link}>
                  <span className="tag has-text-grey is-size-7" style={{padding: '0px 5px', margin: '0px 10px 0px 0px'}}>
                    {this.props.link}
                  </span>
                </a>
              </Square>
              ) : <div></div> }
          </div>
        </div>
      </div>
    );
  }
}


//<i className="fas fa-angle-down has-text-grey" style={{marginLeft: 10}}></i>
  export default Card;
