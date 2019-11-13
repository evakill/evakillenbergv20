import s from 'styled-components'

const styles = {
  p: {
    fontFamily: "Roboto",
    color: "black",
  }
}

const Link = s.span`
  padding: 0px 5px;
  margin: '0px 10px 0px 0px';
  font-size: 12px;
`

class Card extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      modal: "modal",
    }
  }

  modalToggle = (e) => {
    var newClass = (this.state.modal === "modal") ? "modal is-active" : "modal";
    this.setState({modalClass: newClass});
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
              <a target="_blank" href={this.props.link == "Coming Soon!" ? "" : this.props.link}>
                <Link className="tag has-text-grey is-size-7">
                  {this.props.link}
                </Link>
              </a>
              ) : <div></div> }
          </div>
        </div>
      </div>
    );
  }
}


//<i className="fas fa-angle-down has-text-grey" style={{marginLeft: 10}}></i>
  export default Card;
