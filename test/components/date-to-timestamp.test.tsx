import { createRemixStub } from "@remix-run/testing";
import { cleanup, render, screen } from "@testing-library/react";
import { Theme, ThemeProvider } from "remix-themes";
import { afterEach, describe, expect, test } from "vitest";
import {
  DateToTimestampForm,
  DateToTimestampOutput,
} from "~/components/date-to-timestamp";

describe("(component) DateToTimestamp", () => {
  const nodes = {
    get timestamp() {
      return screen.queryByText("timestamp");
    },
    get dateTimeInput() {
      return screen.queryByLabelText("datetime");
    },
  };

  afterEach(() => {
    cleanup();
  });

  test("should not render timestamp in output for invalid date", () => {
    render(<DateToTimestampOutput isoDate="invalid iso date" />);
    expect(nodes.timestamp).not.toBeInTheDocument();
  });

  test("should render timestamp in output for date without time", () => {
    render(<DateToTimestampOutput isoDate="2024-01-10" />);
    expect(nodes.timestamp).toBeVisible();
  });

  test("should render timestamp in output for full datetime", () => {
    render(<DateToTimestampOutput isoDate="2014-11-01T12:45" />);
    expect(nodes.timestamp).toBeVisible();
  });

  test("should set time in input to 00:00 if ISO date string does not contain time", () => {
    const isoDate = "2024-10-01";

    const RemixStub = createRemixStub([
      {
        path: "/",
        Component: () => (
          <ThemeProvider
            specifiedTheme={Theme.DARK}
            themeAction="/action/set-theme"
          >
            <DateToTimestampForm isoDate={isoDate} />
          </ThemeProvider>
        ),
      },
    ]);

    render(<RemixStub />);
    expect(nodes.dateTimeInput).toBeVisible();
    expect(nodes.dateTimeInput).toHaveValue(`${isoDate}T00:00`);
  });
});
