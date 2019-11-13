import things from './things.js'

export default {
  main: [
    {
      link: "https://github.com/evakill",
      doodle: "/static/img/working.png",
      titleImg: "/static/img/built.png",
      things: things.built,
      imgConfig: "left"
    },
    {
      link: "https://en.wikipedia.org/wiki/Q.E.D.",
      doodle: "/static/img/learning.png",
      titleImg: "/static/img/learned.png",
      things: things.learned,
      imgConfig: "right"
    },
    {
      link: "https://www.youtube.com/watch?v=smOzHzUOr-g",
      doodle: "/static/img/juggling.png",
      titleImg: "/static/img/do.png",
      things: things.do,
      imgConfig: "left"
    },
  ],
  other: [
    {
      titleImg: "/static/img/inspirations.png",
      things: things.inspirations
    },
    {
      titleImg: "/static/img/aspirations.png",
      things: things.aspirations
    },
    {
      titleImg: "/static/img/ruminations.png",
      things: things.ruminations
    }

  ]
}
