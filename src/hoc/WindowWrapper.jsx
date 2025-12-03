import useWindowStore from "#store/window";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { Draggable } from "gsap/Draggable";

const WindowWrapper = (Component, windowKey) => {
  const Wrapped = (props) => {
    const { focusWindow, windows } = useWindowStore();
    const win = windows[windowKey]; // get win first

    const ref = useRef(null);

    // --- Always run hooks, even if win is undefined --- //

    useEffect(() => {
      if (!win) return; // safe check inside hook

      const el = ref.current;
      if (!el) return;

      if (win.isOpen) {
        el.style.display = "block";

        gsap.fromTo(
          el,
          { opacity: 0.8, scale: 0.8, y: 40 },
          { opacity: 1, scale: 1, duration: 0.4, ease: "power3.out" }
        );
      } else {
        gsap.to(el, {
          opacity: 0,
          scale: 0.9,
          duration: 0.25,
          ease: "power3.in",
          onComplete: () => {
            el.style.display = "none";
          },
        });
      }
    }, [win?.isOpen]); // safe dependency

    useGSAP(() => {
      const el = ref.current;
      if (!el || !win) return;

      const [instance] = Draggable.create(el, {
        onPress: () => focusWindow(windowKey),
      });

      return () => instance.kill();
    }, []);

    // --- After hooks, now conditional return is allowed --- //

    if (!win) {
      console.error(`❌ Window key "${windowKey}" NOT found in WINDOW_CONFIG`);
      return null;
    }

    return (
      <section
        id={windowKey}
        ref={ref}
        style={{
          zIndex: win.zIndex,
          display: "none",
          transformOrigin: "center",
        }}
        className="absolute"
      >
        <Component {...props} />
      </section>
    );
  };

  Wrapped.displayName = `WindowWrapper(${Component.displayName || Component.name || "Component"})`;

  return Wrapped;
};

export default WindowWrapper;
