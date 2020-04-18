import { checkForUrl } from "./nameChecker.js";

describe('should test URL', () => {
    it('Returns true on valid url', () => {
        expect(checkForUrl('https://www.google.com/')).toBe(true);
    })

    it('Returns false on invalid url', () => {
        expect(checkForUrl('nothing')).toBe(false);
    })
})
