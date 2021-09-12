import { NextSeo } from 'next-seo'

import LinkWrapper from 'components/LinkWrapper'
import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'

import dynamic from 'next/dynamic'
import { MapProps } from 'components/Map'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <NextSeo
        title="Viagens"
        description="Site de viagens para conhecer o mundo"
        canonical="https://marcioandradeblog.netlify.app/"
        openGraph={{
          url: 'https://viagens-marcioandradejs.vercel.app',
          title: 'Viagens',
          description:
            'A simple project to show in a map the places that I went and show more informations and photos when clicked.',
          images: [
            {
              url: 'https://viagens-marcioandradejs.vercel.app/img/cover.png',
              width: 1280,
              height: 720,
              alt: 'Viagens',
            },
          ],
          site_name: 'Viagens',
        }}
      />
      <LinkWrapper href="/sobre">
        <InfoOutline size={32} aria-label="sobre" />
      </LinkWrapper>
      <Map places={places} />
    </>
  )
}
