import { INITIAL_Z_INDEX, WINDOW_CONFIG } from "#constants";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const useWindowStore = create(
  immer((set) => ({
    windows: { ...WINDOW_CONFIG },
    nextZIndex: INITIAL_Z_INDEX + 1,

    openWindow: (windowKey, data = null) =>
      set((state) => {
        const win = state.windows[windowKey];
        if (!win) return state;

        win.isOpen = true;
        win.zIndex = state.nextZIndex++;
        if (data) win.data = data;

        return state;
      }),

    closeWindow: (windowKey) =>
      set((state) => {
        const win = state.windows[windowKey];
        if (!win) return state;

        win.isOpen = false;
        win.zIndex = INITIAL_Z_INDEX;
        win.data = null;

        return state;
      }),

    // 🔥 Clean Toggle
    toggleWindow: (windowKey, data = null) =>
      set((state) => {
        const win = state.windows[windowKey];
        if (!win) return state;

        if (win.isOpen) {
          // CLOSE
          win.isOpen = false;
          win.zIndex = INITIAL_Z_INDEX;
          win.data = null;
        } else {
          // OPEN
          win.isOpen = true;
          win.zIndex = state.nextZIndex++;
          if (data) win.data = data;
        }

        return state;
      }),

    focusWindow: (windowKey) =>
      set((state) => {
        const win = state.windows[windowKey];
        if (!win) return state;

        win.zIndex = state.nextZIndex++;

        return state;
      }),
  }))
);

export default useWindowStore;
