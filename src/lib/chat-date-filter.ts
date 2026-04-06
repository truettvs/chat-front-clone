/** Local calendar day bounds for `<input type="date">` values (`YYYY-MM-DD`). */

function startOfLocalDay(ymd: string): number {
  const [y, m, d] = ymd.split("-").map(Number);
  if (!y || !m || !d) return NaN;
  return new Date(y, m - 1, d, 0, 0, 0, 0).getTime();
}

function endOfLocalDay(ymd: string): number {
  const [y, m, d] = ymd.split("-").map(Number);
  if (!y || !m || !d) return NaN;
  return new Date(y, m - 1, d, 23, 59, 59, 999).getTime();
}

/**
 * Whether a chat's `createdAt` (ISO instant) falls in the inclusive local-date range.
 * Omit `from` / `to` for an open-ended bound. Omit both to allow all dates.
 */
export function chatCreatedInLocalRange(
  createdAtIso: string,
  fromYmd: string | undefined,
  toYmd: string | undefined,
): boolean {
  if (!fromYmd && !toYmd) return true;

  const t = new Date(createdAtIso).getTime();
  if (Number.isNaN(t)) return false;

  if (fromYmd) {
    const start = startOfLocalDay(fromYmd);
    if (Number.isNaN(start) || t < start) return false;
  }

  if (toYmd) {
    const end = endOfLocalDay(toYmd);
    if (Number.isNaN(end) || t > end) return false;
  }

  return true;
}
