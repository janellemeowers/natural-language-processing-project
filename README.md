# Evaluate a News Article using Aylien API

Project requires full setup of Webpack, plugins, and loaders to create a site that takes a URL and returns sentiment from NLP API "Aylien." Also practices use of Service Workers and Jest. Aylien is a powerful Natural Language Processing API that can give us pertinent information about an article. I'll be making a call to the Sentiment parameter which will provide a response of whether an article is "Positive", "negative" or "Neutral".

#Run Project

<b> View in prod: </b>
To start the Webpack prod server at port 8080:

$ npm run build-prod
$ npm start

#Project Goals

- Set up Webpack with plugins, loaders and service Workers
- Make a call to Aylien API with a Fetch request
- Parse the response and update the HTML with information
- Validate URL input with Regex
