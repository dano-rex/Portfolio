import { useEffect, useRef } from "react";
import { KONAMI_CODE } from "../data/content";

/**
 * Listens for the classic Konami sequence anywhere on the page and calls
 * `onUnlock` once it's completed. This is the "hidden interaction" easter
 * egg — it rewards exploration without ever getting in the way.
 */
export function useKonamiCode(onUnlock: () => void) {
  const progress = useRef(0);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      const expected = KONAMI_CODE[progress.current];
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;

      if (key === expected) {
        progress.current += 1;
        if (progress.current === KONAMI_CODE.length) {
          progress.current = 0;
          onUnlock();
        }
      } else {
        progress.current = key === KONAMI_CODE[0] ? 1 : 0;
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onUnlock]);
}
