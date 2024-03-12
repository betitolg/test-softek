import { describe, expect, it, vi, test } from "vitest";
import { render, screen } from "@testing-library/react";

import Loading from "./loading";
import React from "react";

describe("Loading", () => {
 describe("When initialized", () => {
 	test("should render correctly", () => {
 		const { getByTestId } = render(<Loading />);
 		const element = getByTestId("loading");
 	});
 });
});
