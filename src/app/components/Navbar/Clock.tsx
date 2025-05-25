"use client";
import { useEffect, useRef, useState } from "react";

const Clock = () => {
  const [date, setDate] = useState(new Date());
  const interval= useRef<NodeJS.Timeout | null>(null);
  useEffect(() => {
    interval.current = setInterval(() => {
      tick();
    }, 1000);
    return () => {
      if (interval.current) {
        clearInterval(interval.current);
      }
    };
  }, []);

  const tick = () => {
    setDate(new Date());
  };

  const format = (val: string | number) => {
    if (typeof val === "number" && val < 10) {
      val = "0" + val;
    }
    return val;
  };

  return (
    <div className="">{`${date.getHours()} : ${format(date.getMinutes())}`}</div>
  );
};

export default Clock;
