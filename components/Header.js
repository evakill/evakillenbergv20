import s from 'styled-components'
import Head from 'next/head'

const Container = s.div`
  font-family: Roboto;
  color: black;
  font-weight: 500;
  padding: 2rem 0;
`

export default function Header() {
    return (
        <Container>
            <Head>
                <meta charset="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <title>Eva Killenberg</title>
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css"
                />
                <script
                    defer
                    src="https://use.fontawesome.com/releases/v5.14.0/js/all.js"
                ></script>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <div>
                <img src="/img/header.png" style={{ padding: '3rem 0rem' }} />
            </div>
            <p className="is-size-4 is-size-6-mobile">
                And this is my website.
                <br />
                <br />
                <br />
                I'm a builder, storyteller, and adventurer. I strive for balance
                and growth. I seek opportunities to lift others up. I'm happiest
                when learning, exploring, and connecting with people.
                <br />
                <br />
                I'm originally from Little Compton, Rhode Island, but I have
                found homes in Providence, Newport, Chapel Hill, Philadelphia,
                San Francisco, Raleigh, Dunedin, and Thames. I'm currently
                living and learning at the University of Pennsylvania, with a
                major in Computer Science and a minor in Urban Studies.
                <br />
                <br />
            </p>
        </Container>
    )
}
