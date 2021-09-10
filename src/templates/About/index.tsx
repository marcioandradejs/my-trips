import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import LinkWrapper from 'components/LinkWrapper'

import * as S from './styles'

const AboutTemplate = () => (
  <S.Content>
    <LinkWrapper href="/">
      <CloseOutline size={32} aria-label="Close" />
    </LinkWrapper>

    <S.Heading>My Trips</S.Heading>
    <S.Body>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
        consectetur nostrum in ea dolorem enim adipisci accusantium officiis
        saepe laudantium, quibusdam rem? Eaque iure corrupti laboriosam, ex
        necessitatibus non dolore?
      </p>
    </S.Body>
  </S.Content>
)

export default AboutTemplate
