import { helloWorld } from "@bodnar/core";
import { BunRuntime } from "@effect/platform-bun";
import { Effect } from "effect";

const program = Effect.gen(function* () {
	const message = yield* helloWorld;
	yield* Effect.log(message);
});

BunRuntime.runMain(program);
