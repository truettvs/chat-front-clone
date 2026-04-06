export function formatDateTime(iso: string) {
  try {
    return new Intl.DateTimeFormat(undefined, {
      dateStyle: "medium",
      timeStyle: "short",
    }).format(new Date(iso));
  } catch {
    return iso;
  }
}

export function formatTimeOnly(iso: string) {
  try {
    return new Intl.DateTimeFormat(undefined, {
      timeStyle: "short",
    }).format(new Date(iso));
  } catch {
    return iso;
  }
}
