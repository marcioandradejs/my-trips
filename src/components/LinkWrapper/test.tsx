import { render, screen } from '@testing-library/react'
import LinkWrapper from '.'

describe('<LinkWrapper />', () => {
  it('should render link and children', () => {
    render(<LinkWrapper href="/mylink">Anything</LinkWrapper>)

    const children = screen.getByRole('link', { name: /Anything/i })

    expect(children).toBeInTheDocument()
    expect(children).toHaveAttribute('href', '/mylink')
  })
})