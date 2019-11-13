import s from 'styled-components'

const Icon = s.span`
  color: black !important;
  font-size: 18px;
  padding: 5;
  &:hover {
    transform: scale(1.1);
    transition: all .1s ease-in-out;
  }
`

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
            <em className="subtitle is-size-7" style={{color: "black", padding: 0, margin: 0 }}> site + graphics by</em>
              <b className="is-size-5" style={{color: "black"}}> Eva Killenberg </b>
              <div style={{display:"flex", justifyContent:"center", padding: 0, margin: 0}}>
                  <a target="_blank" href="https://github.com/evakill">
                    <Icon className="icon">
                      <i className="fab fa-github-square"/>
                    </Icon>
                  </a>
                  <a target="_blank" href="https://www.linkedin.com/in/evakill/">
                    <Icon className="icon">
                      <i className="fab fa-linkedin"/>
                    </Icon>
                  </a>
                  <a target="_blank" href="mailto:evakill@seas.upenn.edu">
                    <Icon className="icon">
                      <i className="fa fa-envelope-square"/>
                    </Icon>
                  </a>
                  <a target="_blank" href="/static/resume.pdf">
                    <Icon className="icon">
                    <i class="fa fa-file-pdf"/>
                    </Icon>
                  </a>
              </div>
              <em className="subtitle is-size-7" style={{color: "black", padding: 0, margin: 0}}>2019</em>
            </div>
          </div>
        </div>
      </section>
    )
  }
}


export default Footer;
