import { handleSubmit } from "./formHandler.js";


describe("handleSubmit", () => {
  test("handleSubmit' takes fetch request and data from the server, parses data to update HTML with response", () => {
    document.body.innerHTML = `
      <form id="main-form">
          <input id="name" type="text" placeholder="URL" required>
        <input type="submit" URL="" value="submit">
      </form>
      <section>
        <div id="results"></div>
      </section>
    `;
    const url = document.querySelector("#name");
    const submitBtn = document.querySelector("input[type=submit]");
    const resultsSection= document.querySelector("#results");

    url.value = "http://example.com";
    handleSubmit(url.value, submitBtn, resultsSection).then(() => {
      expect(submitBtn.value).toBe("submit");
      expect(resultsSection.innerHTML).toEqual("<p>Polarity: positive</p><p>Polarity Confidence: number</p>")
    })

  });
});
