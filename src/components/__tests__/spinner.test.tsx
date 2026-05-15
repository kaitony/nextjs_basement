import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Spinner } from "../spinner";

describe("Spinner", () => {
  it("renders without crashing", () => {
    render(<Spinner />);
    const spinner = screen.getByRole("status");
    expect(spinner).toBeInTheDocument();
  });

  it("applies custom className", () => {
    render(<Spinner className="custom-class" />);
    const spinner = screen.getByRole("status");
    expect(spinner).toHaveClass("custom-class");
  });
});
