import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ru">
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat:300,400,600,700&display=swap&subset=cyrillic"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400&display=swap"
            rel="stylesheet"
          />
          <link rel="shortcut icon" href="/static/k.png" type="image/png" />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
          <meta
            name="description"
            content="Магазин детских игрушек в Беларуси Klaksa. В нашем магазине вы найдете настольные и напольные игры, развивающие игры, головоломки, куклы, мозаику, и многое другое для ваших детей."
          />
          <meta
            name="Keywords"
            content="детские игрушки Беларусь, детские игры, настольные и напольные игры, развивающие игры, куклы "
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument