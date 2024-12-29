"use client";
// @ts-ignore
import { ReactLenis } from "lenis/react";

export default function SmoothScrolling({ children }: { children: any }) {
  return (
    <ReactLenis root>
      {children}
    </ReactLenis>
  );
}
