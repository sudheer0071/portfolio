"use client";
import { ReactLenis } from "@studio-freight/react-lenis";

function SmoothScrolling({ children }: {children:React.ReactNode}) {
  return (
    <ReactLenis root options={{ lerp: 0.06, duration:1.5, smoothWheel:true}}>
      {children}
    </ReactLenis>
  );
}

export default SmoothScrolling;