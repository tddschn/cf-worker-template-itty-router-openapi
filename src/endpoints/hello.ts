// Import necessary modules and types
import { OpenAPIRoute, OpenAPIRouteSchema } from "@cloudflare/itty-router-openapi";
import {HELLO} from '../constants'

export class Hello extends OpenAPIRoute {
  static schema: OpenAPIRouteSchema = {
    tags: ["message", "hello", "test"],
    summary: "Get a message",
    responses: {
      "200": {
        description: "Returns a message",
        schema: {
          type: "object",
          properties: {
            message: { type: "string", description: "just a message" },
          },
          required: ["message"],
        },
      },
    },
  };

  async handle(
    request: Request,
    env: any,
    context: any
  ): Promise<Response> {
    const jsonResult = {message: HELLO}

    // Return the result in JSON format
    return new Response(JSON.stringify(jsonResult), {
      // headers: { 'Content-Type': 'application/json' }
      // allow CORS
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
        'Content-Type': 'application/json'
      },
    });
  }
}
