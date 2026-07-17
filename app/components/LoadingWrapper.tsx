"use client";
import { useState, useEffect } from "react";
import { useLoading } from "@/app/context/LoadingProvider";
import Loading, { setProgress } from "@/app/components/Loading";

export default function LoadingWrapper({ children }: { children: React.ReactNode }) {
  const { isLoading } = useLoading();
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const controller = setProgress(setPercent);

    // Simulate resources loading — call loaded() after a short delay
    const timer = setTimeout(() => {
      controller.loaded();
    }, 1500);

    return () => {
      clearTimeout(timer);
      controller.clear();
    };
  }, []);

  return (
    <>
      {/* Loading screen — always rendered until isLoading = false */}
      {isLoading && <Loading percent={percent} />}

      {/* Main app content — hidden behind loading screen until ready */}
      <div
        style={{
          opacity: isLoading ? 0 : 1,
          transition: "opacity 0.4s ease",
          pointerEvents: isLoading ? "none" : "auto",
        }}
      >
        {children}
      </div>
    </>
  );
}
