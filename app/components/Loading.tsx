"use client";
import { useEffect, useState, useRef } from "react";
import "@/app/styles/Loading.css";
import { useLoading } from "@/app/context/LoadingProvider";
import Marquee from "react-fast-marquee";

const Loading = ({ percent }: { percent: number }) => {
  const { setIsLoading } = useLoading();
  const [loaded, setLoaded] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [clicked, setClicked] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Update --progress CSS var for the progress bar
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.setProperty("--progress", `${Math.min(percent, 100)}%`);
    }
  }, [percent]);

  // When 100%: show "Welcome", then trigger exit animation
  useEffect(() => {
    if (percent < 100) return;
    const t1 = setTimeout(() => {
      setLoaded(true);          // slides "Loading%" up, "Welcome" into view
      const t2 = setTimeout(() => {
        setIsLoaded(true);      // triggers pill expansion
      }, 1000);
      return () => clearTimeout(t2);
    }, 600);
    return () => clearTimeout(t1);
  }, [percent]);

  // After isLoaded: expand pill, call initialFX, unmount loader
  useEffect(() => {
    if (!isLoaded) return;
    import("@/app/utils/initialFX").then((module) => {
      setClicked(true);
      setTimeout(() => {
        if (module.initialFX) module.initialFX();
        setIsLoading(false);
      }, 900);
    });
  }, [isLoaded, setIsLoading]);

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const { currentTarget: target } = e;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  }

  return (
    <>
      {/* Header: name on left, animated bars on right */}
      <div className="loading-header">
        <a href="/#" className="loader-title" data-cursor="disable">
          Abhishek Kachhap
        </a>
        <div className={`loaderGame ${clicked ? "loader-out" : ""}`}>
          <div className="loaderGame-container">
            <div className="loaderGame-in">
              {[...Array(27)].map((_, index) => (
                <div className="loaderGame-line" key={index} />
              ))}
            </div>
            <div className="loaderGame-ball" />
          </div>
        </div>
      </div>

      {/* Full-screen lavender overlay */}
      <div className="loading-screen">
        {/* Big marquee text — centered, behind the pill */}
        <div className="loading-marquee">
          <Marquee speed={60} gradient={false}>
            <span>A Creative Developer</span>
            <span>A Creative Designer</span>
            <span>A Creative Developer</span>
            <span>A Creative Designer</span>
          </Marquee>
        </div>

        {/* Black pill — expands to fill entire screen when clicked */}
        <div
          className={`loading-wrap ${clicked ? "loading-clicked" : ""}`}
          onMouseMove={handleMouseMove}
        >
          {/* Purple glow follows cursor */}
          <div className="loading-hover" />

          {/* The visible pill content */}
          <div className={`loading-button ${loaded ? "loading-complete" : ""}`}>
            {/*
              loading-container has overflow:hidden — clips both text rows.
              "Loading X%" slides up when loaded=true.
              "Welcome" starts below and slides up when loaded=true.
            */}
            <div className="loading-container" ref={containerRef}>
              <div className="loading-content">
                <div className="loading-content-in">
                  Loading <span>{Math.min(percent, 100)}%</span>
                </div>
              </div>
              <div className="loading-content2">
                <span>Welcome</span>
              </div>
              {/* Progress bar grows as percent increases */}
              <div className="loading-box" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loading;

/* ---- Progress controller — used by LoadingWrapper ---- */
export const setProgress = (setLoading: (value: number) => void) => {
  let percent = 0;

  // Phase 1: fast ramp 0→50%
  let interval = setInterval(() => {
    if (percent <= 50) {
      const rand = Math.round(Math.random() * 5);
      percent = percent + rand;
      setLoading(percent);
    } else {
      clearInterval(interval);
      // Phase 2: slow crawl 50→91%
      interval = setInterval(() => {
        percent = percent + Math.round(Math.random());
        setLoading(percent);
        if (percent > 91) clearInterval(interval);
      }, 2000);
    }
  }, 100);

  function clear() {
    clearInterval(interval);
    setLoading(100);
  }

  function loaded() {
    return new Promise<number>((resolve) => {
      clearInterval(interval);
      interval = setInterval(() => {
        if (percent < 100) {
          percent++;
          setLoading(percent);
        } else {
          resolve(percent);
          clearInterval(interval);
        }
      }, 2);
    });
  }

  return { loaded, percent, clear };
};
