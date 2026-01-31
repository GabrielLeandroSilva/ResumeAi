export function parseLog(log: string) {
  // "14:06:47 - POST /chat - 200"
  const parts = log.split(" - ");

  const time = parts[0] ?? "";
  const request = parts[1] ?? "";
  const status = parts[2] ?? "";

  const [method, route] = request.split(" ");

  return {
    time,
    method,
    route,
    status,
  };
}
