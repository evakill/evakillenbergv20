import posed from "react-pose";

const Square = posed.div({
  idle: { scale: 1 },
  hovered: { scale: 1.05 }
});

const styles = {
  p: {
    fontFamily: "Roboto",
    color: "black",
  },
  overflow: {
    fontFamily: "Roboto",
    color: "black",
    display: "block",
    textOverflow: "ellipsis",
    overflow: "hidden",
    maxHeight: "3.6em",
    lineHeight: "1.8em",
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
      <div>
        { this.props.link ? (
          <a target="_blank" href={this.props.link}>
            <div className="content" style={{padding: '.25rem 2rem'}}>
              <b className="is-size-6" style={ styles.p }>{this.props.title}</b>
              { this.props.role ? <p className="is-8" style={{fontFamily: "Roboto", color: "gray"}}>{this.props.role}</p> : <div></div> }
              <p className="is-size-7" style={ styles.p }>{this.props.desc}</p>
            </div>
          </a>
        ) : (
          <div className="content" style={{padding: '.25rem 2rem'}}>
            <b className="is-size-6" style={ styles.p }>{this.props.title}</b>
            { this.props.role ? <p className="is-8" style={{fontFamily: "Roboto", color: "gray"}}>{this.props.role}</p> : <div></div> }
            <p className="is-size-7" style={ styles.p }>{this.props.desc}</p>
          </div>
        )
      }
    </div>
    );
  }
}


//<i className="fas fa-angle-down has-text-grey" style={{marginLeft: 10}}></i>
export default Card;
