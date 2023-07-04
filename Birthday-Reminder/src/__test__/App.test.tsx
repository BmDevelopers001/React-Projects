import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";
import List from '../Components/List';
import data from "../data";

describe("Birthday app testing", () => {

    test('Renders main page correctly', async () => {
        render(<App />);

        const birthdayHeading = await screen.getByRole('heading', {level:3});

        expect(birthdayHeading.textContent).toBe(`${data.length} Birthdays today`);

    });

    test('Clear All buttons works properly', async () => {
        render(<App />);

        const birthdayHeading = await screen.getByRole('heading', { level: 3 });
        const clearBtn = await screen.findByRole('button');

        fireEvent.click(clearBtn);
        expect(birthdayHeading.textContent).toBe(`0 Birthdays today`);

    });

    test('List component render', async () => {
        render(<List list={data}/>);
        const articleTag = document.querySelectorAll('.person');

        data.map((item,index) => {
            const {name,age, image} = item;

            expect(articleTag[index]).toContainHTML(`<img src="${image}" alt="${name}" />`);
            expect(articleTag[index]).toContainHTML(`<h4>${name}</h4>`);
            expect(articleTag[index]).toContainHTML(`<p>${age} years</p>`);
        })

        expect(articleTag.length).toBe(data.length);
    })

    test('List does not render when no data is provided', () => {
        render(<List list={[]}/>);

        const articleTag = screen.queryAllByRole('.person');

        expect(articleTag.length).toBe(0);

    })


})