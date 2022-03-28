import { serve } from "https://deno.land/std@0.114.0/http/server.ts";
import { greet } from "https://deno.land/x/ntomlin_example@1.0.1/index.ts"

function handler(req) {
  const message = greet("Hardcoded name!!!")
  return new Response(message);
}

console.log("Listening on http://localhost:8000");
await serve(handler);
