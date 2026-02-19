"use client";

import { useState, useEffect } from "react";
import { T, Num } from "gt-next";

const EVENT_DATE = new Date("2026-09-15T09:00:00Z");

function getTimeLeft() {
  const now = new Date();
  const diff = EVENT_DATE.getTime() - now.getTime();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function Countdown() {
  const [time, setTime] = useState(getTimeLeft);

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <T>
      <div className="grid grid-cols-4 gap-3 sm:gap-6 max-w-md mx-auto">
        <div className="text-center">
          <div className="text-3xl sm:text-5xl font-bold text-neutral-100 tabular-nums">
            <Num>{time.days}</Num>
          </div>
          <div className="text-xs sm:text-sm text-neutral-500 mt-1">Days</div>
        </div>
        <div className="text-center">
          <div className="text-3xl sm:text-5xl font-bold text-neutral-100 tabular-nums">
            <Num>{time.hours}</Num>
          </div>
          <div className="text-xs sm:text-sm text-neutral-500 mt-1">Hours</div>
        </div>
        <div className="text-center">
          <div className="text-3xl sm:text-5xl font-bold text-neutral-100 tabular-nums">
            <Num>{time.minutes}</Num>
          </div>
          <div className="text-xs sm:text-sm text-neutral-500 mt-1">Minutes</div>
        </div>
        <div className="text-center">
          <div className="text-3xl sm:text-5xl font-bold text-neutral-100 tabular-nums">
            <Num>{time.seconds}</Num>
          </div>
          <div className="text-xs sm:text-sm text-neutral-500 mt-1">Seconds</div>
        </div>
      </div>
    </T>
  );
}
