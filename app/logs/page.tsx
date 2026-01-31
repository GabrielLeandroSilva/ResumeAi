"use client"

import { useEffect, useState } from "react";
import { getLogs } from "../services/resumeApi";
import { LogsResponse } from "../types/Log";
import { LogItem } from "../components/LogItem";

export default function LogsPage() {

  const [data, setData] = useState<LogsResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getLogs()
      .then((res) => {
        setData({
          ...res,
          logs: [...res.logs].reverse(),
        })
      })
      .finally(() => setLoading(false));
  }, []);


  if (loading) {
    return <p className="text-sm text-gray-500">Carregando logs…</p>;
  }

  return (
    <div className="max-w-5xl mx-auto p-4 space-y-4">
      <h1 className="text-xl font-semibold">
        Logs da API ({data?.total})
      </h1>

      <ul className="space-y-2 border border-gray-700 bg-gray-50 dark:bg-gray-900 p-4 rounded-md">
        {data?.logs.map((log, index) => (
          <li
            key={index}
            className="border-b last:border-0 border-gray-200 dark:border-gray-800 py-2"
          >
            <LogItem log={log} />
          </li>
        ))}
      </ul>
    </div>
  );
}
