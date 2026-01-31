import { methodColor, statusColor } from "../utils/logStyles";
import { parseLog } from "../utils/parseLog";

type Props = {
    log: string;
}

export function LogItem({ log }: Props) {
    const { time, method, route, status } = parseLog(log);
  
    return (
      <div className="flex items-center gap-3 text-sm font-mono">
        
        <span className="text-gray-500 dark:text-gray-400 w-[70px]">
          {time}
        </span>
  
        
        <span
          className={`px-2 py-0.5 rounded-md text-xs font-semibold ${methodColor(
            method
          )}`}
        >
          {method}
        </span>
  
       
        <span className="flex-1 text-gray-800 dark:text-gray-200">
          {route}
        </span>
  
        
        <span
          className={`font-semibold ${statusColor(status)}`}
        >
          {status}
        </span>
      </div>
    );
  }