import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TestWithMockDataWithBranching from "../components/TestWithMockDataWithBranching";
import { mockData } from "../App";

describe("TestWithMockDataWithBranching component", () => {
  // test("List renders successfully", () => {
  //   render(
  //     <TestWithMockDataWithBranching
  //       data={mockData}
  //       displayUnorderedList={true}
  //     />
  //   );

  //   expect(screen.getByText(/Abdi/i)).toBeInTheDocument();
  // });

  test("Ordered list renders", () => {
    render(
      <TestWithMockDataWithBranching
        data={mockData}
        displayUnorderedList={false}
      />
    );

    expect(screen.getByText(/muhaba/i)).toBeInTheDocument();
  });

  test("Email link click handler called", async () => {
    const mockFn = jest.fn();

    render(
      <TestWithMockDataWithBranching
        data={mockData}
        displayUnorderedList={true}
        handleClick={mockFn}
      />
    );

    await userEvent.click(screen.getByText(/abel@gmail.com/i));
    expect(mockFn).toHaveBeenCalled();
  });
});
