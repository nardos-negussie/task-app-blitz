// stitches.config.ts
import { gray, grayDark, teal, tealDark } from "@radix-ui/colors"
import { createStitches } from "@stitches/react"

export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config } =
  createStitches({
    theme: {
      colors: {
        ...gray,
        ...teal,
      },
    },
    media: {
      bp1: "(min-width: 480px)",
    },
    utils: {
      m: (value: String | Number) => ({ margin: value }),
      my: (value: String | Number) => ({ marginTop: value, marginBottom: value }),
      mt: (value: String | Number) => ({ marginTop: value }),
      mb: (value: String | Number) => ({ marginBottom: value }),
      mx: (value: String | Number) => ({ marginLeft: value, marginRight: value }),
      ml: (value: String | Number) => ({ marginLeft: value }),
      mr: (value: String | Number) => ({ marginRight: value }),

      p: (value: String | Number) => ({ padding: value }),
      px: (value: String | Number) => ({ paddingLeft: value, paddingRight: value }),
      py: (value: String | Number) => ({ paddingTop: value, paddingBottom: value }),
      pt: (value: String | Number) => ({ paddingTop: value }),
      pb: (value: String | Number) => ({ paddingBottom: value }),
      pl: (value: String | Number) => ({ paddingLeft: value }),
      pr: (value: String | Number) => ({ paddingRight: value }),
    },
  })

export const darkTheme = createTheme("dark-theme", {
  colors: {
    ...grayDark,
    ...tealDark,
  },
})
