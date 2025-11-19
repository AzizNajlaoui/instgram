import { treaty } from "@elysiajs/eden";

import type { TApp } from "@instgram/server";
const eden = treaty<TApp>("http://localhost:3000");

export default eden;
