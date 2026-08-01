"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <a
      href="#top"
      aria-label="Volver arriba"
      className="fixed right-6 bottom-6 z-40 flex size-11 items-center justify-center border border-foreground/25 bg-background text-foreground transition-colors hover:border-foreground"
    >
      <ArrowUp className="size-5" strokeWidth={1.5} />
    </a>
  );
}
