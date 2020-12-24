import things from './things.js'

export default {
    main: [
        {
            link: 'https://github.com/evakill',
            doodle: '/img/working.png',
            titleImg: '/img/built.png',
            things: things.built,
            imgConfig: 'left',
        },
        {
            link: 'https://en.wikipedia.org/wiki/Q.E.D.',
            doodle: '/img/learning.png',
            titleImg: '/img/learned.png',
            things: things.learned,
            imgConfig: 'right',
        },
        {
            link: 'https://www.youtube.com/watch?v=smOzHzUOr-g',
            doodle: '/img/juggling.png',
            titleImg: '/img/do.png',
            things: things.do,
            imgConfig: 'left',
        },
    ],
    other: [
        {
            titleImg: '/img/inspirations.png',
            things: things.inspirations,
        },
        {
            titleImg: '/img/aspirations.png',
            things: things.aspirations,
        },
        {
            titleImg: '/img/ruminations.png',
            things: things.ruminations,
        },
    ],
}
