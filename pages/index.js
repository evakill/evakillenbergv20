import Footer from '../components/Footer'
import Card from '../components/Card'
import List from '../components/List'
import Header from '../components/Header'
import sections from '../public/sections.js'

function getImageSection(section) {
    return (
        <div>
            <a target="_blank" href={section.link}>
                <img src={section.doodle} />
            </a>
        </div>
    )
}

function getInfoSection(section) {
    return (
        <div>
            <img src={section.titleImg} />
            {section.things.map((thing) => (
                <Card
                    src={thing.icon}
                    title={thing.name}
                    github={thing.github}
                    link={thing.link}
                    desc={thing.desc}
                    role={thing.role}
                />
            ))}
        </div>
    )
}

const Index = () => (
    <div>
        <div className="columns is-centered is-desktop columns-container">
            <div className="column is-10">
                <Header />
                {sections.main.map((section) => (
                    <div className="columns section-container">
                        {section.imgConfig === 'left' ? (
                            <>
                                <div className="column is-5 is-flex is-align-content-center">
                                    {getImageSection(section)}
                                </div>
                                <div className="column is-7">
                                    {getInfoSection(section)}
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="column is-5 is-flex is-hidden-tablet is-align-content-center">
                                    {getImageSection(section)}
                                </div>
                                <div className="column is-7">
                                    {getInfoSection(section)}
                                </div>
                                <div className="column is-5 is-flex is-hidden-mobile is-align-content-center">
                                    {getImageSection(section)}
                                </div>
                            </>
                        )}
                    </div>
                ))}

                <section id="inspir-aspr-rumin-ations">
                    <div className="is-flex is-centered is-justify-content-center">
                        <div>
                            <a
                                target="_blank"
                                href="https://artsandculture.google.com/asset/viva-la-vida/bAGbsL-eW4XUXg"
                            >
                                <img src="/img/thinking.png" width="500px" />
                            </a>
                        </div>
                    </div>

                    <div className="columns">
                        {sections.other.map((section) => (
                            <div className="column is-one-third">
                                <img src={section.titleImg} />
                                {section.things.map((thing) => (
                                    <List
                                        title={thing.title}
                                        desc={thing.desc}
                                        link={thing.link}
                                    />
                                ))}
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
        <Footer />
    </div>
)

export default Index
