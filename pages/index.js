import Footer from '../components/Footer'
import Card from '../components/Card'
import List from '../components/List'
import Header from '../components/Header'
import sections from '../static/sections.js'

const Index = () => (
  <div>
    <div className="columns  is-centered is-desktop" style={{padding: '0rem 4rem'}}>
      <div className="column is-10">
      <Header />

      { sections.main.map(section => {
        const imgSection = (
          <a target="_blank" href={section.link}>
            <img src={section.doodle}/>
          </a>
        )

        const infoSection = (
          <div>
            <img src={section.titleImg} />
            { section.things.map(thing => (
              <Card
                src={ thing.icon }
                title={ thing.name }
                github={ thing.github }
                link={ thing.link }
                desc={ thing.desc }
                role={ thing.role } />
            )) }
          </div>
        )

        return (
          <section>
            <div className="columns">
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
          <a target="_blank" href="https://artsandculture.google.com/asset/viva-la-vida/bAGbsL-eW4XUXg">
            <img src="/static/img/thinking.png" width="500px"/>
          </a>
        </div>

        <div className="columns">
          { sections.other.map(section => (
            <div className="column is-one-third" style={{padding: '0', margin: '0'}}>
              <img src={section.titleImg}/>
              { section.things.map(thing => (
                <List title={thing.title} desc={thing.desc} link={thing.link} />
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
