import s from 'styled-components'

const Container = s.div`
  font-family: Roboto;
  color: black;
  font-weight: bold;
  padding: 4rem 0 2rem 0;
`

export default () => (
    <Container>
        <head>
            <meta charset="utf-8" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
            <title>Eva Killenberg</title>
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.2/css/bulma.min.css"
            />
            <link
                href="https://fonts.googleapis.com/css?family=Zeyada"
                rel="stylesheet"
            />
            <link
                href="https://fonts.googleapis.com/css?family=Open+Sans|Oxygen|Roboto"
                rel="stylesheet"
            />
            <script
                defer
                src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"
            />
        </head>
        <p className="is-size-4 is-size-6-mobile">And this is my</p>
        <div>
            <img
                src="/public/img/blog-header.png"
                style={{ padding: '3rem 0rem' }}
            />
        </div>
    </Container>
)
