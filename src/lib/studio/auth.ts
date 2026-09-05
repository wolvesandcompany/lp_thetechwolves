export const STUDIO_COOKIE = "studio_session";

// Uses Web Crypto (available in both the Node runtime and the Edge
// middleware runtime) so the same token can be computed on login and
// verified on every request without a Node-only crypto dependency.
async function sha256Hex(input: string): Promise<string> {
  const data = new TextEncoder().encode(input);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export async function expectedSessionToken(): Promise<string> {
  const secret = process.env.STUDIO_PASSWORD || "";
  return sha256Hex(`studio:${secret}`);
}

export async function checkPassword(password: string): Promise<boolean> {
  const secret = process.env.STUDIO_PASSWORD || "";
  if (!secret) return false;
  return password === secret;
}
