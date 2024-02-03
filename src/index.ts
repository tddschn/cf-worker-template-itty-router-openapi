import { OpenAPIRouter } from "@cloudflare/itty-router-openapi";
import { Hello } from "endpoints/hello";

export const router = OpenAPIRouter({
  // https://cloudflare.github.io/itty-router-openapi/user-guide/router-options
	docs_url: "/docs",
});

// router.get("/api/tasks/", TaskList);
// router.post("/api/tasks/", TaskCreate);
// router.get("/api/tasks/:taskSlug/", TaskFetch);
// router.delete("/api/tasks/:taskSlug/", TaskDelete);
router.get('/hello', Hello)

// 404 for everything else
router.all("*", () =>
	Response.json(
		{
			success: false,
			error: "Route not found",
		},
		{ status: 404 }
	)
);

export default {
	fetch: router.handle,
};
