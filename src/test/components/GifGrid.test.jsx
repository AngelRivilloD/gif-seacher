import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../components";
import { useFetchGifs } from "../../hooks/useFetchGifs";

jest.mock("../../hooks/useFetchGifs");

describe('Test gifGrid', () => {
    const category = 'One punch';

    test('should show loading', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })

        render(<GifGrid category={category} />);
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));
    })

    test('should show the items when the images are loading from useFetchGifs', () => {

        const gifs = [{
            id: 'ABC',
            title: 'Saitama',
            url: 'https://localhost/saitama.jpg'
        },
        {
            id: '123',
            title: 'goku',
            url: 'https://localhost/goku.jpg'
        }];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        })

        render(<GifGrid category={category} />);
        expect(screen.getAllByRole('img').length).toBe(2);
    })
})