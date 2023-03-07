import { render, screen } from "@testing-library/react"
import { GifItem } from "../../components"

describe('Pruebas GifItem', () => {

    const title = 'Dragon ball';
    const url = 'https://google.com/saitama.jpg';
    const alt = 'Dragon ball';

    test('show image with url and alt', () => {
        render(<GifItem title={title} url={url} />);
        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(alt);
    })

    test('should show the component title', () => {
        render(<GifItem title={title} url={url} />);
        expect(screen.getByText(title)).toBeTruthy();
    })
})