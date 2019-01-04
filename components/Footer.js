import posed from "react-pose";

const Square = posed.div({
  idle: { scale: 1 },
  hovered: { scale: 1.25 }
});

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      h1: false,
      h2: false,
      h3: false,
    }
  }

  render() {
    return(
      <section>
        <div className="hero is-small" style={{marginTop: '4rem', backgroundColor: "#f5f5f5"}}>
          <div className="hero-body">
            <div className="is-flex" style={{flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
              <b className="is-size-5" style={{color: "black"}}> Eva Killenberg </b>
              <div style={{display:"flex", justifyContent:"center"}}>
                <Square
                pose={this.state.h1 ? "hovered" : "idle"}
                onMouseEnter={() => this.setState({ h1: true })}
                onMouseLeave={() => this.setState({ h1: false })}>
                  <a href="https://github.com/evakill">
                    <span className="icon" style={{color: "black"}}>
                      <i className="fab fa-github-square"></i>
                    </span>
                  </a>
                </Square>
                <Square
                pose={this.state.h2 ? "hovered" : "idle"}
                onMouseEnter={() => this.setState({ h2: true })}
                onMouseLeave={() => this.setState({ h2: false })}>
                  <a href="https://www.linkedin.com/in/eva-k-752386b4/">
                    <span className="icon" style={{color: "black"}}>
                      <i className="fab fa-linkedin"></i>
                    </span>
                  </a>
                </Square>
                <Square
                pose={this.state.h3 ? "hovered" : "idle"}
                onMouseEnter={() => this.setState({ h3: true })}
                onMouseLeave={() => this.setState({ h3: false })}>
                  <a href="mailto:evakill@seas.upenn.edu">
                    <span className="icon" style={{color: "black"}}>
                      <i className="fa fa-envelope-square"></i>
                    </span>
                  </a>
                </Square>
              </div>
              <em className="subtitle is-size-7" style={{color: "black"}}> 2018 </em>
            </div>
          </div>
        </div>
      </section>
    )
  }
}


export default Footer;
