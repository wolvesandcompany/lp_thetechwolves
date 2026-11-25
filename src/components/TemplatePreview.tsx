import type { TemplateMeta } from "@/lib/templates-data";

/** #rrggbb + alpha (0-1) -> rgba() string */
function alpha(hex: string, a: number): string {
  const h = hex.replace("#", "");
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

/**
 * A self-contained, on-brand mini-preview of a template — a faux browser frame
 * wrapping a landing-page hero mock rendered in the template's real theme
 * colors. Adapts automatically to light and dark templates. No image assets.
 */
export function TemplatePreview({ t }: { t: TemplateMeta }) {
  const c = t.colors;
  const line = alpha(c.fg, 0.08);

  return (
    <div
      className="relative h-full w-full overflow-hidden"
      style={{ background: c.bg }}
      aria-hidden
    >
      {/* ambient accent glow */}
      <div
        className="pointer-events-none absolute -right-10 -top-12 h-44 w-44 rounded-full blur-3xl"
        style={{ background: c.accent, opacity: t.dark ? 0.3 : 0.16 }}
      />

      {/* browser chrome */}
      <div
        className="relative flex items-center gap-1.5 px-3 py-2"
        style={{ background: c.surface, borderBottom: `1px solid ${line}` }}
      >
        <span className="h-2 w-2 rounded-full" style={{ background: "#ff5f57" }} />
        <span className="h-2 w-2 rounded-full" style={{ background: "#febc2e" }} />
        <span className="h-2 w-2 rounded-full" style={{ background: "#28c840" }} />
        <span
          className="ml-2 max-w-[60%] truncate rounded px-2 py-0.5 text-[8px] leading-none"
          style={{ background: alpha(c.fg, 0.06), color: c.muted }}
        >
          thetechwolves.com/templates/{t.slug}
        </span>
      </div>

      {/* hero mock */}
      <div className="relative px-5 py-5">
        {/* brand chip */}
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full" style={{ background: c.accent }} />
          <span
            className="text-[10px] font-semibold tracking-wide"
            style={{ color: c.fg }}
          >
            {t.brand}
          </span>
        </div>

        {/* headline bars */}
        <div className="mt-4 space-y-1.5">
          <div
            className="h-2.5 w-4/5 rounded-full"
            style={{ background: c.fg, opacity: 0.9 }}
          />
          <div className="h-2.5 w-3/5 rounded-full" style={{ background: c.accent }} />
        </div>
        <div
          className="mt-2 h-1.5 w-2/3 rounded-full"
          style={{ background: c.muted, opacity: 0.55 }}
        />

        {/* cta button */}
        <div
          className="mt-4 h-4 w-16 rounded-full"
          style={{ background: c.primary }}
        />

        {/* feature cards row */}
        <div className="mt-5 grid grid-cols-3 gap-1.5">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="h-9 rounded-md p-1.5"
              style={{ background: c.surface, border: `1px solid ${line}` }}
            >
              <div
                className="h-1 w-2/3 rounded-full"
                style={{ background: c.accent, opacity: 0.65 }}
              />
              <div
                className="mt-1 h-1 w-1/2 rounded-full"
                style={{ background: c.muted, opacity: 0.4 }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
