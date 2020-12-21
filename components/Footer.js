import s from 'styled-components'

const tags = [
  {
    link: "https://github.com/evakill",
    icon: "fab fa-github-square"
  },
  {
    link: "https://www.linkedin.com/in/evakill/",
    icon: "fab fa-linkedin"
  },
  {
    link: "mailto:evakill@seas.upenn.edu",
    icon: "fa fa-envelope-square"
  },
  {
    link: "/static/resume.pdf",
    icon: "fa fa-file-pdf"
  }
]

const Icon = s.span`
  color: black !important;
  font-size: 18px;
  &:hover {
    transform: scale(1.1);
    transition: all .1s ease-in-out;
  }
`

const Container = s.div`
  margin-top: 4rem;
  padding: 2rem 0;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;
  font-family: Roboto;
`

export default function Footer () {
    return (
        <Container>
          <em style={{ fontSize: 12 }}> site + graphics by</em>
          <b className="is-size-5"> Eva Killenberg </b>
          <div style={{ display:"flex", justifyContent:"center" }}>
            { tags.map(tag => (
              <a target="_blank" href={tag.link} style={{ margin: 5}}>
                <Icon>
                  <i className={tag.icon}/>
                </Icon>
              </a>
            ))}
          </div>
          <em style={{ fontSize: 12 }}>Last Updated: December 2020</em>
        </Container>
    )
}
