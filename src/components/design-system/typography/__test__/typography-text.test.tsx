import { render } from '@testing-library/react'
import Typography from '../typography'

const { Text } = Typography;
describe("Typography Text Component", () => {
  it("Check is render", () => {
    const testID = "test"
    const { getByTestId } = render(<Text data-testid={testID}>Hello world</Text>)
    const dom = getByTestId(testID);
    expect(dom).toBeInTheDocument();
  });

  it("Check is render with variant: 16-sb", () => {
    const testID = "test-16-sb"
    const { getByTestId } = render(<Text variant='16-sb' data-testid={testID}>Hello world</Text>)
    const dom = getByTestId(testID);
    expect(dom).toBeInTheDocument();
  });

  it("Check is render with variant: 16", () => {
    const testID = "test-16"
    const { getByTestId } = render(<Text variant='16' data-testid={testID}>Hello world</Text>)
    const dom = getByTestId(testID);
    expect(dom).toBeInTheDocument();
  });

  it("Check is render with variant: 16-text", () => {
    const testID = "test-16-text"
    const { getByTestId } = render(<Text variant='16-text' data-testid={testID}>Hello world</Text>)
    const dom = getByTestId(testID);
    expect(dom).toBeInTheDocument();
  });

  it("Check is render with variant: 13-b", () => {
    const testID = "test-13-b"
    const { getByTestId } = render(<Text variant='13-b' data-testid={testID}>Hello world</Text>)
    const dom = getByTestId(testID);
    expect(dom).toBeInTheDocument();
  });

  it("Check is render with variant: 13", () => {
    const testID = "test-13"
    const { getByTestId } = render(<Text variant='13' data-testid={testID}>Hello world</Text>)
    const dom = getByTestId(testID);
    expect(dom).toBeInTheDocument();
  });

  it("Check is render with variant: 11-sb", () => {
    const testID = "test-11-sb"
    const { getByTestId } = render(<Text variant='11-sb' data-testid={testID}>Hello world</Text>)
    const dom = getByTestId(testID);
    expect(dom).toBeInTheDocument();
  });

  it("Check is render with variant: 11-text", () => {
    const testID = "test-11-text"
    const { getByTestId } = render(<Text variant='11-text' data-testid={testID}>Hello world</Text>)
    const dom = getByTestId(testID);
    expect(dom).toBeInTheDocument();
  });
  it("Check is render with variant: 11", () => {
    const testID = "test-11"
    const { getByTestId } = render(<Text variant='11' data-testid={testID}>Hello world</Text>)
    const dom = getByTestId(testID);
    expect(dom).toBeInTheDocument();
  });
  it("Check is render with variant: 10-sb", () => {
    const testID = "test-10-sb"
    const { getByTestId } = render(<Text variant='10-sb' data-testid={testID}>Hello world</Text>)
    const dom = getByTestId(testID);
    expect(dom).toBeInTheDocument();
  });
  it("Check is render with variant: 10", () => {
    const testID = "test-10"
    const { getByTestId } = render(<Text variant='10' data-testid={testID}>Hello world</Text>)
    const dom = getByTestId(testID);
    expect(dom).toBeInTheDocument();
  });

  it("Check is render as: span", () => {
    const testID = "test-span"
    const { getByTestId } = render(<Text as="span" data-testid={testID}>Hello world</Text>)
    const dom = getByTestId(testID);
    expect(dom).toBeInTheDocument();
  });

  it("Check is render as: div", () => {
    const testID = "test-div"
    const { getByTestId } = render(<Text as="div" data-testid={testID}>Hello world</Text>)
    const dom = getByTestId(testID);
    expect(dom).toBeInTheDocument();
  });

  it("Check is render as: p", () => {
    const testID = "test-p"
    const { getByTestId } = render(<Text as="p" data-testid={testID}>Hello world</Text>)
    const dom = getByTestId(testID);
    expect(dom).toBeInTheDocument();
  });

})