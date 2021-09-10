import client from 'graphql/client'
import { GET_PAGES } from 'graphql/queries'
import AboutTemplate from 'templates/About'

export default function AboutPage() {
  return <AboutTemplate />
}

export const getStaticProps = async () => {
  const { pages } = await client.request(GET_PAGES)

  console.log(pages)

  return {
    props: {},
  }
}

// getStaticPaths => serve para gerar as urls em build time /about /trip/petropolis
// getStaticProps => Serve para buscar dados da página (props) - build time - estático
// getServerSideProps => Serve para buscar dados da página (props) - Runtime - rota requisição (Bundle fica no server)
// getInitialProps = > Serve para buscar dados da página (props) - Runtime - rota requisição (Bundle também vem para o client) - hydrate (Pouca gente usa e o NextJs não recomenda)
