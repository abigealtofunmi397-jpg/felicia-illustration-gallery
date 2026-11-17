import { useCallback, type MouseEvent } from "react";

/** Gentle 3D tilt that follows the pointer. Returns handlers for the tilting element. */
export function useTilt(strength = 8) {
  const onMouseMove = useCallback(
    (e: MouseEvent<HTMLElement>) => {
      const el = e.currentTarget;
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      el.style.setProperty("--ry", `${x * strength}deg`);
      el.style.setProperty("--rx", `${-y * strength}deg`);
    },
    [strength],
  );
  const onMouseLeave = useCallback((e: MouseEvent<HTMLElement>) => {
    e.currentTarget.style.setProperty("--ry", "0deg");
    e.currentTarget.style.setProperty("--rx", "0deg");
  }, []);
  return { onMouseMove, onMouseLeave };
}
