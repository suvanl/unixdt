import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, test } from "vitest";
import { TimestampToDateOutput } from "~/components/timestamp-to-date";

describe("(component) TimestampToDate", () => {
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

  afterEach(() => {
    cleanup();
  });

  test("should not render fields in output for invalid timestamp", () => {
    render(<TimestampToDateOutput timestamp="an invalid timestamp" />);
    expect(nodes.unit).not.toBeInTheDocument();
  });

  test("should render all fields in output for valid timestamp", () => {
    render(<TimestampToDateOutput timestamp="1700000000" />);
    expect(nodes.unit).toBeVisible();
    expect(nodes.utc).toBeVisible();
    expect(nodes.localTime).toBeVisible();
    expect(nodes.iso).toBeVisible();
    expect(nodes.relative).toBeVisible();
  });
});
