import fs from "fs";
import path from "path";

// Persistent on disk: mounted as a Docker volume in production
// (see docker-compose.prod.yml), a plain local folder in dev.
const DATA_DIR = process.env.BUSINESS_DATA_DIR || path.join(process.cwd(), "data/business");

function ensureDir() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
}

export function slugify(name: string): string {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

function slugPath(slug: string): string {
  return path.join(DATA_DIR, `${slug}.html`);
}

export function uniqueSlug(baseSlug: string): string {
  ensureDir();
  let slug = baseSlug;
  let n = 2;
  while (fs.existsSync(slugPath(slug))) {
    slug = `${baseSlug}-${n}`;
    n++;
  }
  return slug;
}

export function saveBusinessHtml(slug: string, html: string) {
  ensureDir();
  fs.writeFileSync(slugPath(slug), html, "utf8");
}

export function getBusinessHtml(slug: string): string | null {
  const p = slugPath(slug);
  if (!fs.existsSync(p)) return null;
  return fs.readFileSync(p, "utf8");
}

export function listBusinessSlugs(): { slug: string; savedAt: Date }[] {
  ensureDir();
  return fs
    .readdirSync(DATA_DIR)
    .filter((f) => f.endsWith(".html"))
    .map((f) => {
      const slug = f.replace(/\.html$/, "");
      const stat = fs.statSync(path.join(DATA_DIR, f));
      return { slug, savedAt: stat.mtime };
    })
    .sort((a, b) => b.savedAt.getTime() - a.savedAt.getTime());
}
