import { defineConfig } from 'vite-plugin-windicss'
import plugin from 'windicss/plugin'

export default defineConfig({
  darkMode: 'class',
  plugins: [
    plugin(({ addComponents }) => {
      addComponents({
        '.base-input': {
          'boxShadow': [
            'rgb(0 0 0 / 0%) 0px 0px 0px 0px',
            'rgb(0 0 0 / 0%) 0px 0px 0px 0px',
            'rgb(0 0 0 / 0%) 0px 0px 0px 0px',
            'rgb(60 66 87 / 16%) 0px 0px 0px 1px',
            'rgb(0 0 0 / 0%) 0px 0px 0px 0px',
            'rgb(0 0 0 / 0%) 0px 0px 0px 0px',
            'rgb(0 0 0 / 0%) 0px 0px 0px 0px',
          ].join(', '),

          '&:focus': {
            boxShadow: [
              'rgb(0 0 0 / 0%) 0px 0px 0px 0px',
              'rgb(58 151 212 / 36%) 0px 0px 0px 0px',
              'rgb(0 0 0 / 0%) 0px 0px 0px 0px',
              'rgb(60 66 87 / 16%) 0px 0px 0px 1px',
              'rgb(0 0 0 / 0%) 0px 0px 0px 0px',
              'rgb(0 0 0 / 0%) 0px 0px 0px 0px',
              'rgb(0 0 0 / 0%) 0px 0px 0px 0px',
            ].join(', '),
          },

          'transition': 'background-color .24s,box-shadow .24s',
          'transitionProperty': 'background-color, box-shadow',
          'transitionDuration': '0.24s, 0.24s',
          'transitionTimingFunction': 'ease, ease',
          'transitionDelay': '0s, 0s',
        },
      })
    }),
  ],
  attributify: true,
  theme: {
    zIndex: {
      1: 1,
      2: 2,
      3: 3,
      4: 4,
      5: 5,
      6: 6,
      7: 7,
      8: 8,
      9: 9,
      10: 10,
    },
  },
})
