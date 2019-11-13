import s from 'styled-components'

const Container = s.div`
  font-family: Roboto;
  color: black;
  font-weight: bold;
  padding: 2rem 0;
`

const Hover = s.div`
  transform: scale(1);
  transition: all 0.5s ease;
  cursor: default;
  &:hover {
    transform: scale(1.08);
`

export default () => (
  <Container>
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Eva Killenberg</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.2/css/bulma.min.css" />
      <link href="https://fonts.googleapis.com/css?family=Zeyada" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Open+Sans|Oxygen|Roboto" rel="stylesheet"/>
      <script defer src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"/>
    </head>
    <Hover>
      <img src="/static/img/header.png" style={{ padding:'3rem 0rem' }}/>
    </Hover>
    <p className="is-size-4 is-size-6-mobile">
      And this is my website.
      <br/>
      <br/>
      <br/>
      I'm a builder, storyteller, and adventurer. I strive for balance and growth.
      I seek opportunities to lift others up. I'm happiest when learning, exploring, and connecting with people.
      <br/>
      <br/>
      I'm originally from Little Compton, Rhode Island, but I have found homes in
      Providence, Newport, Chapel Hill, The Outer Banks, Philadelphia, San Francisco, and Raleigh.
      I'm currently living and learning at the University of Pennsylvania, with a major in
      Computer Science and a minor in Urban Studies.
      <br/>
      <br/>
    </p>
  </Container>
)
