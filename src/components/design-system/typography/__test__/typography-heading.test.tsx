import { render } from '@testing-library/react'
import Typography from '../typography'

const { Heading } = Typography;
describe("Typography Heading Component", () => {
  it("Check is render", () => {
    const testID = "test-heading"
    const { getByTestId } = render(<Heading data-testid={testID}>Hello world</Heading>)
    const dom = getByTestId(testID);
    expect(dom).toBeInTheDocument();
  });

  it("Check is render with variant : h1", () => {
    const testID = "test-heading-h1"
    const { getByTestId } = render(<Heading variant='h1' data-testid={testID}>Hello world</Heading>)
    const dom = getByTestId(testID);
    expect(dom).toBeInTheDocument();
  });

  it("Check is render with variant : h2", () => {
    const testID = "test-heading-h2"
    const { getByTestId } = render(<Heading variant='h2' data-testid={testID}>Hello world</Heading>)
    const dom = getByTestId(testID);
    expect(dom).toBeInTheDocument();
  });

  it("Check is render with variant : h3", () => {
    const testID = "test-heading-h3"
    const { getByTestId } = render(<Heading variant='h3' data-testid={testID}>Hello world</Heading>)
    const dom = getByTestId(testID);
    expect(dom).toBeInTheDocument();
  });

  it("Check is render with variant : h4", () => {
    const testID = "test-heading-h4"
    const { getByTestId } = render(<Heading variant='h4' data-testid={testID}>Hello world</Heading>)
    const dom = getByTestId(testID);
    expect(dom).toBeInTheDocument();
  });

  it("Check is render with variant : h5", () => {
    const testID = "test-heading-h5"
    const { getByTestId } = render(<Heading variant='h5' data-testid={testID}>Hello world</Heading>)
    const dom = getByTestId(testID);
    expect(dom).toBeInTheDocument();
  });

  it("Check is render with variant : h6", () => {
    const testID = "test-heading-h6"
    const { getByTestId } = render(<Heading variant='h6' data-testid={testID}>Hello world</Heading>)
    const dom = getByTestId(testID);
    expect(dom).toBeInTheDocument();
  });
});