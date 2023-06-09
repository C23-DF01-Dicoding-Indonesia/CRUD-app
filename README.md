# CRUD-app
This is a backend for CRUD app for discussion forum Demo.

## Before using this backend
Run the ML endpoint and change the `auto_tag_ml_endpoint` and `search_ml_endpoint` on the `addDiscussionHandler` and `searchDiscussionHandler`
at `/src/handler.js` with your flask application.
### Please refer this link:
[Auto-tag Endpoint](https://github.com/C23-DF01-Dicoding-Indonesia/auto-tagging-endpoint)
and
[Semantic-search Endpoint](https://github.com/C23-DF01-Dicoding-Indonesia/search-endpoint)

## How to use
To run it locally, simply use this command:
```bash
npm install
npm start
```
