import Head from "../components/Head";
import Footer from "../components/Footer";
import Card from "../components/Card";
import List from "../components/List";

const styles = {
  p: {
    fontFamily: "Roboto",
    color: "black",
    fontWeight: "bold",
  },
}
const Index = () => (
  <div>

    <Head />
    <div className="columns is-desktop" style={{padding: '0rem 4rem'}}>
      <div className="column is-1"></div>
      <div className="column is-10">

        <section id="header" style={{paddingBottom: '4rem'}}>
          <div className="hero" style={{padding: '3rem 0rem'}}>
            <div className="hero-body is-flex" style={{flexDirection: "column", alignItems: "flex-start", padding: 0}}>
              <img src="/static/img/header.png" style={{padding:'3rem 0rem'}}/>
              <p className="is-size-4 is-size-6-mobile" style={styles.p}>And this is my website.</p>
            </div>
          </div>
          <p className="is-size-4 is-size-6-mobile" style={styles.p}>
          I'm a builder, storyteller, and adventurer. I strive for balance and growth.
          I seek opportunities to lift others up. I'm happiest when learning, exploring, and connecting with people.
          <br/>
          <br/>
          I'm originally from Little Compton, Rhode Island, but I have found homes in
          Providence, Newport, Chapel Hill, The Outer Banks, Philadelphia, and San Francisco.
          I'm currently living and learning at the University of Pennsylvania, with a major in
          Computer Science and a minor in Systems Engineering. </p>
        </section>

        <section id="things-ive-built">
          <div className="columns" style={{padding: '4rem 0rem'}}>
            <div className="column is-5 is-flex" style={{alignItems: "center"}}>
              <a href="https://github.com/evakill">
                <img src="/static/img/working.png"/>
              </a>
            </div>
            <div className="column is-7">
              <img src="/static/img/built.png" />
              <Card src="/static/img/labsLine.png" title="Penn Labs Website" github="https://github.com/pennlabs/pennlabs.org" link="https://pennlabs.org" desc="Converted the organizational website of Penn Labs, a software development organization at Penn, from HTML to React and added style and functionality components." />
              <Card src="/static/img/ergbotLine.png" title="Ergbot Web and iOS App" link="https://www.ergbotrowing.com" desc="Contributing code to both the iOS and Web app for ErgBot, a erg-logging software startup, in React Native and React." />
              <Card src="/static/img/mindbankLine.png" title="MindBank Website" link="Coming Soon!" github="https://github.com/evakill/mindbank-web" desc="Designing and creating the organizational website of The MindBank, a consulting group at Penn, in React." />
              <Card src="/static/img/grapevineLine.png" title="Grapevine" github="https://github.com/evakill/grapevine-mobile" desc="Created the concept, design, and codebase for Grapevine, a platform for small business owners to crowdsource event marketing, on mobile and web platforms in React Native and React." />
              <Card src="/static/img/setLine.png" title="Set" github="https://github.com/evakill/set" desc="Implemented a digital version of the Set card game in Java." />
            </div>
          </div>
        </section>

        <section id="things-ive-learned">
          <div className="columns" style={{padding: '0rem 0rem'}}>
            <div className="column is-5 is-flex is-hidden-tablet" style={{alignItems: "center"}}>
              <a href="https://en.wikipedia.org/wiki/Q.E.D.">
                <img src="/static/img/learning.png"/>
              </a>
            </div>
            <div className="column is-7">
              <img src="/static/img/learned.png" />
              <Card src="/static/img/121.png" title="Data Structures and Algorithms" desc="Learned about the theory, implementation, and runtime of basic data structures and algorithms in a computer science course." />
              <Card src="/static/img/160.png" title="Discrete Math" desc="Covered topics of combinatorics, functions, probability, set operations, graph theory, and induction in a mathematical, proof-based computer science course." />
              <Card src="/static/img/systems.png" title="Dynamic Systems" desc="Applied linear algebra concepts to model and analyze multi-dimentional systems of equations." />
              <Card src="/static/img/nets.png" title="Network Theory" desc="Learned about graph stuctures and algorithms in relation to social networks, recommendation systems, and search engines." />
              <Card src="/static/img/designthink.png" title="Design Thinking" desc="Participated in a series of workshops on design thinking through IBM then implemented a design thinking program at my school." />
            </div>
            <div className="column is-5 is-flex is-hidden-mobile" style={{alignItems: "center"}}>
              <a href="https://en.wikipedia.org/wiki/Q.E.D.">
                <img src="/static/img/learning.png"/>
              </a>
            </div>
          </div>
        </section>

        <section id="things-i-do">
          <div className="columns" style={{padding: '4rem 0rem'}}>
            <div className="column is-5 is-flex" style={{alignItems: "center"}}>
              <a href="https://www.youtube.com/watch?v=smOzHzUOr-g">
                <img src="/static/img/juggling.png"/>
              </a>
            </div>
            <div className="column is-7">
              <img src="/static/img/do.png" />
              <Card src="/static/img/mindbankLine.png" title="The MindBank" role="President" desc="The MindBank is a student consulting group at Penn which provides advice and insights to companies, businesses, and startups focused on the campus environment." link="https://www.themindbank.net" />
              <Card src="/static/img/labsLine.png" title="Penn Labs" role="Platform Team" desc="Penn Labs is a student-run, open-source software development organization at Penn that creates and maintains products for Penn students." link="https://www.pennlabs.org" />
              <Card src="/static/img/whiskLine.png" title="Penn Appetit" role="Culinary Team" desc="Penn Appetit is a culinary club at Penn which produces food magazines each semester." link="https://www.pennappetit.com" />
              <Card src="/static/img/soccerLine.png" title="Penn Women's Club Soccer" role="Center Midfielder" desc="Penn Women's Club soccer competes competitively with schools in the mid-Atlantic region." />
              <Card src="/static/img/oaxLine.png" title="OAX" role="Standards Committee" desc="OAX is a social philanthropic organization at Penn which fund-raises for Women Against Abuse, a non-profit dedicated to domestic violence prevention and awareness." />
            </div>
          </div>
        </section>

        <section id="inspir-aspr-rumin-ations">
         <div className="columns" style={{padding: '0rem 0rem'}}>
           <div className="column is-3" style={{padding: '0', margin: '0'}}></div>
           <div className="column is-6" style={{padding: '0', margin: '0'}}>
            <a href="https://artsandculture.google.com/asset/viva-la-vida/bAGbsL-eW4XUXg">
              <img src="/static/img/thinking.png" />
            </a>
           </div>
           <div className="column is-3" style={{padding: '0', margin: '0'}}></div>
         </div>
         <div className="columns">
           <div className="column is-one-third" style={{padding: '0', margin: '0'}}>
             <img src="/static/img/inspirations.png"/>
             <List title="Frida Khalo" desc="A bold artist and woman."/>
             <List title="Invisible Cities" desc="A beautiful text by Italo Calvino."/>
             <List title="On Vegetables" desc="Jeremy Fox's ode to modern, plant-based cooking." link="https://www.eater.com/cookbooks/2017/4/14/15300286/cookbook-on-vegetables-jeremy-fox"/>
           </div>
           <div className="column is-one-third" style={{padding: '0', margin: '0'}}>
             <img src="/static/img/aspirations.png"/>
             <List title="Build in Python" desc="Looking to learn and apply a new language."/>
             <List title="Learn Spanish" desc="Inspired by a trip to Mexico City."/>
             <List title="Sketch a day" desc="Keep in touch with good ol' pen and paper."/>
             <List title="Roadtrip across the US" desc="Ideally in a camper van with a dog or best friend."/>
           </div>
           <div className="column is-one-third" style={{padding: '0', margin: '0'}}>
             <img src="/static/img/ruminations.png"/>
             <List title="The 'Software Apocalypse'" desc="A change of perspective stimulated by an article in The Atlantic." link="https://www.theatlantic.com/technology/archive/2017/09/saving-the-world-from-code/540393/"/>
             <List title="Resolutions vs. Habits" desc="Debating the optimal way to make to make meaningful and systematic life changes." />
           </div>
         </div>
         </section>
      </div>
      <div className="column is-1"></div>
    </div>
    <Footer/>
  </div>);

export default Index;
