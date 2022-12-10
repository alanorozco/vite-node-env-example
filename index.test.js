import { readFile } from "fs/promises";
import { expect, test } from "vitest";
import { build } from "vite";

test("import.meta.env.PROD", async () => {
  await build({
    logLevel: "error",
    build: {
      minify: false,
      lib: {
        entry: "index.js",
        fileName: "index",
        formats: ["es"],
      },
    },
  });

  const contents = await readFile("dist/index.js", "utf8");
  expect(contents.trim()).to.equal("console.log(true);");
});
