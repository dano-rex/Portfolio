import { useCallback, useRef } from "react";

/**
 * Plays a short, quiet sine-wave blip. Disabled by default and only ever
 * called with `enabled = true` when the user has opted in via the command
 * menu. Fails silently in environments without the Web Audio API.
 */
export function useSound() {
  const ctxRef = useRef<AudioContext | null>(null);

  const play = useCallback(
    (enabled: boolean, freq: number = 440, duration: number = 0.045) => {
      if (!enabled) return;
      try {
        if (!ctxRef.current) {
          const AudioCtx =
            window.AudioContext ||
            (window as typeof window & { webkitAudioContext?: typeof AudioContext })
              .webkitAudioContext;
          if (!AudioCtx) return;
          ctxRef.current = new AudioCtx();
        }
        const ctx = ctxRef.current;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(0.05, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + duration);
      } catch {
        // Audio unavailable — never block the interaction on this.
      }
    },
    []
  );

  return play;
}
