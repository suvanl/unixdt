import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { DateToTimestampOutput } from "~/components/date-to-timestamp";

describe("(component) DateToTimestamp", () => {
  const testProps = {
    isoDate: "2014-11-01T12:45",
  };

  const nodes = {
    get timestamp() {
      return screen.queryByText("timestamp");
    },
  };

  test("should not render timestamp in output for invalid date", () => {
    render(<DateToTimestampOutput isoDate="invalid iso date" />);
    expect(nodes.timestamp).not.toBeInTheDocument();
  });

  test("should render timestamp in output for date without time", () => {
    render(<DateToTimestampOutput isoDate="2024-01-10" />);
    expect(nodes.timestamp).toBeInTheDocument();
  });

  test("should render timestamp in output for full datetime", () => {
    render(<DateToTimestampOutput {...testProps} />);
  });
});
