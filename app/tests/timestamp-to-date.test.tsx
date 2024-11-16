import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { TimestampToDateOutput } from "~/components/timestamp-to-date";

describe("(component) TimestampToDate", () => {
  const testProps = {
    timestamp: "1700000000",
  };

  const nodes = {
    get unit() {
      return screen.queryByText("unit");
    },
    get utc() {
      return screen.queryByText("utc");
    },
    get localTime() {
      return screen.queryByText("your timezone");
    },
    get iso() {
      return screen.queryByText("iso 8601");
    },
    get relative() {
      return screen.queryByText("relative");
    },
  };

  test("should not render fields in output for invalid timestamp", () => {
    render(<TimestampToDateOutput timestamp="an invalid timestamp" />);
    expect(nodes.unit).not.toBeInTheDocument();
  });

  test("should render all fields in output for valid timestamp", () => {
    render(<TimestampToDateOutput {...testProps} />);
    expect(nodes.unit).toBeInTheDocument();
    expect(nodes.utc).toBeInTheDocument();
    expect(nodes.localTime).toBeInTheDocument();
    expect(nodes.iso).toBeInTheDocument();
    expect(nodes.relative).toBeInTheDocument();
  });
});
