import { promises as fsp } from "fs";
import * as path from "path";

/**
 * Append a message (with a newline) to the given log file.
 * Creates any missing parent directories automatically.
 */
export async function logToFile(message: any, filePath: string = "logs.txt"): Promise<void> {
  const logDirectory = path.dirname(filePath);
  // Ensure directory exists (creates nested folders if needed)
  await fsp.mkdir(logDirectory, { recursive: true });

  const finalLog = `${formatMessage(message)}\n`;
  try {
    await fsp.appendFile(filePath, finalLog, "utf8");
  } catch (err) {
    console.error("Failed to write log:", err);
  }
}

/**
 * Convert any value into a string.
 * - Objects: pretty-printed JSON with two-space indentation.
 * - Others: coerced to string.
 */
export const formatMessage = (msg: any): string => {
  if (msg !== null && typeof msg === "object") {
    try {
      return JSON.stringify(msg, null, 2);
    } catch {
      return "[Unserializable Object]";
    }
  }
  return String(msg);
};
