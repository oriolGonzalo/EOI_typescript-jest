import { countChars } from "../src/adapters";
import { removeExclamations } from "../src/exclamator";

jest.mock("../src/adapters", () => ({countChars: jest.fn() }))

describe('exclamator', () => {
    describe('', () => {
        it('menos de 50 ocurrencias', () => {
            expect(removeExclamations('Salo!!!!!!!!!!!!!!!!!!!!!!!!!!!')).toBe(undefined)
        })
        it('entre 50 y 100 ocurrencias', () => {
            jest.mocked(countChars).mockReturnValue(60);
            expect(removeExclamations('Hola que tal')).toEqual({total: 60, value: 'Hola que tal', limit: 'It has passed first limit'})
        });
        it('entre 100 y 150 ocurrencias', () => {
            jest.mocked(countChars).mockReturnValue(120);
            expect(removeExclamations('Hola que tal')).toEqual({total: 120, value: 'Hola que tal', limit: 'It has passed second limit'})
        });
    });
});