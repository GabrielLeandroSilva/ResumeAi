type Props = {
    result: {
      ok: boolean;
      status?: number;
    } | null;
  };
export function BadgeHealth({ result }: Props) {
    if (!result) return null;

    const isOnline = result.ok;

    return (
        <span
          className={`
            inline-flex items-center gap-2
            px-3 py-1 rounded-lg text-xs font-medium
            ${isOnline
              ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
              : "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300"}
          `}
        >
          <span
            className={`w-2 h-2 rounded-full ${
              isOnline ? "bg-green-500" : "bg-red-500"
            }`}
          />
          {isOnline ? "API Online" : "API Offline"}
        </span>
      );
}