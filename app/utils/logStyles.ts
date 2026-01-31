export function methodColor(method: string) {
    switch (method) {
      case "POST":
        return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300";
      case "GET":
        return "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300";
      case "HEAD":
        return "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300";
      default:
        return "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300";
    }
}
  
export function statusColor(status: string) {
  const code = status?.trim();
    if (code?.startsWith("2")) {
      return "text-green-600 dark:text-green-400";
    }
    if (code?.startsWith("4")) {
      return "text-yellow-600 dark:text-yellow-400";
    }
    return "text-red-600 dark:text-red-400";
  }