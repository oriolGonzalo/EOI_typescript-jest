import { countChars } from "../src/adapters";

describe('adapters', () => {
    it("There's nothing to look for", () => {
        expect(() => countChars('', 'Hola que tal')).toThrow(Error);
    });
    it("There's nothing to look for", () => {
        expect(() => countChars('!', '')).toThrow(Error);
    });
    it("There's no match when string is empty", () => {
        expect(() => countChars('', '')).toThrow(Error);
    });
    it("Throw an error when no parameters are given", () => {
        expect(() => countChars()).toThrow(Error);
    });
    it("Throw an error when one parameter is missing", () => {
        expect(() => countChars("o")).toThrow(Error);
    });

    it("")
});