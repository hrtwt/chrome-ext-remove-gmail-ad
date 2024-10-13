import * as esbuild from "esbuild";
import { denoPlugins } from "esbuild_deno_loader";
import { resolve } from "@std/path";

await esbuild.build({
  plugins: [...denoPlugins()],
  entryPoints: ["content.ts"],
  bundle: true,
  outdir: resolve("dist"),
  minify: true,
});

await esbuild.stop();
