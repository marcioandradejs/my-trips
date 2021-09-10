import client from 'graphql/client'
import { GET_PAGES, GET_PAGE_BY_SLUG } from 'graphql/queries'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/dist/client/router'
import PageTemplate, { PageTemplateProps } from 'templates/Pages'

export default function Page({ heading, body }: PageTemplateProps) {
  const router = useRouter()

  // retorna um loading ou qlqr coisa enquanto está sendo criado
  if (router.isFallback) return null

  return <PageTemplate heading={heading} body={body} />
}

export async function getStaticPaths() {
  const { pages } = await client.request(GET_PAGES, { first: 3 })
  const paths = pages.map(({ slug }) => ({
    params: { slug },
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { page } = await client.request(GET_PAGE_BY_SLUG, {
    slug: `${params?.slug}`,
  })

  if (!page) return { notFound: true }

  return {
    props: {
      heading: page.heading,
      body: page.body.html,
    },
  }
}

// getStaticPaths => serve para gerar as urls em build time /about /trip/petropolis
// getStaticProps => Serve para buscar dados da página (props) - build time - estático
// getServerSideProps => Serve para buscar dados da página (props) - Runtime - rota requisição (Bundle fica no server)
// getInitialProps = > Serve para buscar dados da página (props) - Runtime - rota requisição (Bundle também vem para o client) - hydrate (Pouca gente usa e o NextJs não recomenda)
