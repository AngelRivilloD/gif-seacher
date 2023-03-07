import { getGifs } from "../../helpers/getGifs";

describe('Pruebas en getGids()', () => {
    test('should return gifs array', async () => {
        const gifs = await getGifs('Dragon Ball');
        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        });
    });
});