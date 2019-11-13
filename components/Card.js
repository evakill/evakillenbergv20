import s from 'styled-components'

const Link = s.span`
  padding: 0px 5px;
  margin: '0px 10px 0px 0px';
  font-size: 12px;
`

const Container = s.div`
  padding: 0.25rem;
  align-items: center;
  font-family: Roboto !important;
  color: black !important;
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
      <Container className="columns is-flex">
        <div className="column is-2 is-2-mobile is-flex">
          <img src={this.props.src}/>
        </div>
        <div className="column is-10">
          <b className="is-size-5 is-size-6-mobile">{this.props.title} </b>
          { this.props.role ? <p className="is-size-6 is-size-7-mobile" style={{color: "gray"}}>{this.props.role}</p> : '' }
          <p className="is-size-6">{this.props.desc} </p>
          <div className="container is-flex">
            { this.props.link ? (
              <a target="_blank" href={this.props.link == "Coming Soon!" ? "" : this.props.link}>
                <Link className="tag has-text-grey is-size-7">
                  {this.props.link}
                </Link>
              </a>
              ) : <div></div> }
          </div>
        </div>
      </Container>
    );
  }
}

export default Card;
