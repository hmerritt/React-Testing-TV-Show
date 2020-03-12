import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
//import { fetchShow } from "../api/fetchShow";

import App from "../App";

//jest.mock("../api/fetchShow");

const shows = {
    "Season 1": [
        {}
    ]
};

test("renders App without crashing", () => {
    render(<App />);
});

test("renders loading text and content after api call", async () => {
    const { getByText, findAllByText } = render(<App />);

    getByText(/Fetching data.../i);
    await wait();
    findAllByText(/Stranger Things/i);
    findAllByText(/Select a season/i);
});
//
// test("renders App properly", async () => {
//     const { getByText, getByTestId } = render(<App />);
//
//     getByText(/Fetching data.../i);
// });
