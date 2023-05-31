import { render, waitFor, screen } from "@testing-library/react";
import TestingAPICalls from "../components/TestingAPICalls";
import * as services from "../utils/services";

describe("TestingAPICalls component", () => {
  test("Fetch Data API Called", () => {
    const mockFetch = jest
      .spyOn(services, "FetchData")
      .mockImplementation(async () => {
        return [{ name: "Abel" }];
      });

    render(<TestingAPICalls />);

    expect(mockFetch).toHaveBeenCalled();

    waitFor(() => {
      expect(screen.getByText(/Abel/i)).toBeInTheDocument();
    });
  });
});
