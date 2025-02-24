import exTheme from "@/libs/utils/themes"
import { ColorModeScript } from "@chakra-ui/react"
import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <ColorModeScript initialColorMode={exTheme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
