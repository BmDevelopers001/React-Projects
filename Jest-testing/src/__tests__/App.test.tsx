import { render, screen,fireEvent } from "@testing-library/react";

import App from "../App";

test('Renders main page correctly', async () => {
    render(<App />);
    const buttonCount = await screen.findByRole('button');
    const codeCount = await screen.queryByText(/The count is now :/);

    expect(buttonCount.innerHTML).toBe('count is: 0');
    expect(codeCount).not.toBeInTheDocument();
    
    fireEvent.click(buttonCount);
    fireEvent.click(buttonCount);

    expect(buttonCount.innerHTML).toBe('count is: 2');
    expect(await screen.queryByText(/The count is now :/)).toBeInTheDocument();

});