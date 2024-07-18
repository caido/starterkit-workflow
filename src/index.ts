import { Body, type RequestResponse, type Bytes } from "caido:utils";
import type { SDK } from "caido:workflow";
import { testLog } from "@caido/dependency-example";

/// This function is the entry point for your script.
/// It receives two arguments:
/// - input: The input of the script, depends on the workflow kind.
///   - Active/Passive: RequestResponse
///   - Convert: Bytes
/// - sdk: The SDK object, which provides access to Caido functions
export async function run(
  input: RequestResponse | Bytes, // Remove the type that you don't need
  sdk: SDK,
): Promise<Bytes | undefined> {
  testLog();
  sdk.console.log(new Body("test")); // Example from utils
  // Your code here
  return "Hello, World!";
}
