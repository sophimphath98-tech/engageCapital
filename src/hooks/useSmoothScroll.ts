/**
 * ============================================================================
 * File: useSmoothScroll.ts
 * Author: Atonnydev
 * Date: 2026-06-09
 * Component/Module: Smooth Scroll Hook
 * Description: Custom React hook that handles smooth scrolling to page anchors
 *              with a fixed pixel offset for the sticky navigation bar.
 * ============================================================================
 */
import React, { useCallback } from "react";

/**
 * Hook: useSmoothScroll
 * Description: Returns a click handler that intercepts anchor clicks, calculates 
 *              the target element's position, and scrolls to it smoothly.
 * 
 * @param {number} offset - The height of the sticky navbar to offset the scroll
 * @returns {Function} handleSmoothScroll function to be attached to onClick events
 */
export function useSmoothScroll(offset: number = 72) {
  const handleSmoothScroll = useCallback((e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  }, [offset]);

  return { handleSmoothScroll };
}
