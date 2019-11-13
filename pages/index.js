import Footer from '../components/Footer'
import Card from '../components/Card'
import List from '../components/List'
import Header from '../components/Header'
import sections from '../static/sections.js'
import s from 'styled-components'

const Hover = s.div`
  transform: scale(1);
  transition: all 0.5s ease;
  cursor: default;
  &:hover {
    transform: scale(1.08);
`

const Index = () => (
  <div>
    <div className="columns is-centered is-desktop" style={{padding: '0rem 4rem'}}>
      <div className="column is-10">
      <Header />
      { sections.main.map(section => {
        const imgSection = (
          <Hover>
            <a target="_blank" href={section.link}>
                <img src={section.doodle}/>
            </a>
          </Hover>
        )

        const infoSection = (
          <div>
            <img src={section.titleImg} />
            { section.things.map(thing => (
              <Hover>
                <Card
                  src={ thing.icon }
                  title={ thing.name }
                  github={ thing.github }
                  link={ thing.link }
                  desc={ thing.desc }
                  role={ thing.role } />
              </Hover>
            )) }
          </div>
        )

        return (
          <section>
            <div className="columns" style={{ paddingBottom: '4rem' }}>
              { section.imgConfig === "left" ? (
                <>
                  <div className={"column is-5 is-flex"} style={{alignItems: "center"}}>
                    { imgSection }
                  </div>
                  <div className="column is-7">
                    { infoSection }
                  </div>
                </>
              ) : (
                <>
                  <div className={"column is-5 is-flex is-hidden-tablet"} style={{alignItems: "center"}}>
                    { imgSection }
                  </div>
                  <div className="column is-7">
                    { infoSection }
                  </div>
                  <div className={"column is-5 is-flex is-hidden-mobile"} style={{alignItems: "center"}}>
                    { imgSection }
                  </div>
                </>
              )}
            </div>
          </section>
        )
      })}

      <section id="inspir-aspr-rumin-ations">
        <div className="is-flex is-centered" style={{padding: '0', margin: '0', display: "flex", justifyContent: "center"}}>
          <Hover>
            <a target="_blank" href="https://artsandculture.google.com/asset/viva-la-vida/bAGbsL-eW4XUXg">
              <img src="/static/img/thinking.png" width="500px"/>
            </a>
          </Hover>
        </div>

        <div className="columns">
          { sections.other.map(section => (
            <div className="column is-one-third">
              <img src={section.titleImg}/>
              { section.things.map(thing => (
                <Hover>
                  <List title={thing.title} desc={thing.desc} link={thing.link} />
                </Hover>
              ))}
            </div>
          ))}
        </div>
      </section>

    </div>
  </div>
  <Footer/>
</div>);

export default Index;
