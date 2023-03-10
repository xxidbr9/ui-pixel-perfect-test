import { render } from '@testing-library/react'
import Card from './card'

describe("Card Component", () => {
  it("Check is render", () => {
    const testID = "card-test"
    const { getByTestId } = render(<Card data-testid={testID}>Hello world</Card>)
    const dom = getByTestId(testID);
    expect(dom).toBeInTheDocument();
  })
})