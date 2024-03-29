# Cloudflare Workers OpenAPI 3.1

- [Cloudflare Workers OpenAPI 3.1](#cloudflare-workers-openapi-31)
  - [Use this template](#use-this-template)
  - [Get started](#get-started)
  - [Project structure](#project-structure)
  - [Development](#development)
  - [Compared to the stock template](#compared-to-the-stock-template)


This is a Cloudflare Worker with OpenAPI 3.1 using [itty-router-openapi](https://github.com/cloudflare/itty-router-openapi).

This is an example project made to be used as a quick start into building OpenAPI compliant Workers that generates the
`openapi.json` schema automatically from code and validates the incoming request to the defined parameters or request body.

## Use this template

```
alias c3='npm create cloudflare@latest'
c3 -- --template https://github.com/tddschn/cf-worker-template-itty-router-openapi <name-of-your-project>
```

## Get started

1. Sign up for [Cloudflare Workers](https://workers.dev). The free tier is more than enough for most use cases.
2. Clone this project and install dependencies with `npm install`
3. Run `wrangler login` to login to your Cloudflare account in wrangler
4. Run `wrangler deploy` to publish the API to Cloudflare Workers

## Project structure

1. Your main router is defined in `src/index.ts`.
2. Each endpoint has its own file in `src/endpoints/`.
3. For more information read the [itty-router-openapi official documentation](https://cloudflare.github.io/itty-router-openapi/).

## Development

1. Run `wrangler dev` to start a local instance of the API.
2. Open `http://localhost:9000/` in your browser to see the Swagger interface where you can try the endpoints.
3. Changes made in the `src/` folder will automatically trigger the server to reload, you only need to refresh the Swagger interface.

## Compared to the stock template

- CORS example
- 404 undefined routes
- removes `task` example
- custom domain in `wrangler.toml`