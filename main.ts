// News-image entry (Node 22, standard library only): the front-page image is
// entry.png beside this file, and the program copies it to /output/entry.png.
// The image itself was composed in-session (PIL layout + generated photo);
// the program only moves the finished bytes, so two runs are identical.
// The gate takes a whole PNG or JPEG of at most 1 MiB and 1024 by 1024 pixels,
// and the judge sees exactly the bytes copied. Run locally with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from "node:fs";
import { join } from "node:path";

copyFileSync(
  new URL("./entry.png", import.meta.url),
  join(process.env.MAKEFUN_OUTPUT_DIR ?? "/output", "entry.png"),
);
