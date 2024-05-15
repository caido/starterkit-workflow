import type { RequestResponse, SDK, Bytes } from "@caido/sdk-workflow";

/// This function is the entry point for your script.
/// It receives two arguments:
/// - input: The input of the script, depends on the workflow kind.
///   - Active/Passive: RequestResponse
///   - Convert: Bytes
/// - sdk: The SDK object, which provides access to Caido functions
export async function run(
  input: RequestResponse | Bytes,
  sdk: SDK,
): Promise<Bytes | undefined> {
  // Your code here
  return "Hello, World!";
}
