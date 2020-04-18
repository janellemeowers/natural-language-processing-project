import { handleSubmit } from "./formHandler.js";

// adds the 'fetchMock' global variable
global.fetch = require("jest-fetch-mock");

describe('handleSubmit test', () => {
    it('handleSubmit submits data from fetch request', () => {
        document.body.innerHTML = `<main>
                <section>
                    <form class="" onsubmit="return Client.handleSubmit(event)">
                        <input id="name" type="text" name="input" value="https://www.google.com/" onblur="onBlur()" placeholder="URL">
                        <input type="submit" URL="" value="submit" required="required" onclick="return Client.handleSubmit(event)" onsubmit="return Client.handleSubmit(event)">
                    </form>
                    <p id ="error"></p>
                <section>

                <section>
                    <h3>Form Results:</h3>
                    <div id="results">
                                          <ul>
                                              <li>
                                                  <h3>Text Polarity:</h3>
                                                  <i>Is the tone positive, neutral or negative?</i>
                                                  <p id="polarity"></p>
                                              </li>

                                              <li>
                                                  <h3>Polarity Confidence:</h3>
                                                  <i>The confidence of the prediction</i>
                                                  <p id="pConfidence"></p>
                                                  </li>

                                          </ul>
                                      </section>
            </main>`;


        fetch.mockResponseOnce(JSON.stringify({ text: 'test' }));
        handleSubmit({ preventDefault: () => {} });

        expect(fetch.mock.calls.length).toEqual(1);

    })
});
