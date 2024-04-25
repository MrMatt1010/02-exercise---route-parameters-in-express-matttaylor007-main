import { render, screen } from "@testing-library/react";
import properties from "./properties.json";
import App from "../App";

beforeAll(() => jest.spyOn(window, "fetch"));

test("displays all the properties and their information", async () => {
  window.fetch.mockResolvedValueOnce({
    ok: true,
    json: async () => properties,
  });

  render(<App />);

  expect.assertions(properties.length * 5);

  for (const property of properties) {
    const title = await screen.findByText(property.title);
    expect(title).toBeInTheDocument();
    const askingPrice = await screen.findByText(property.askingPrice);
    expect(askingPrice).toBeInTheDocument();
    const description = await screen.findByText(property.description);
    expect(description).toBeInTheDocument();
    const address = await screen.findByText(property.address);
    expect(address).toBeInTheDocument();
    const img = document.querySelector(`img[src="${property.img}"]`);
    expect(img).toBeInTheDocument();
  }
});
