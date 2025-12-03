import { locations } from "#constants";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const DEFAULT_LOCATION = locations.work;

const useLocationStore = create(
  immer((set) => ({
    activeLocation: DEFAULT_LOCATION,

    setActiveLocation: (location) => {
      // Validate input: expect a truthy object with at least an `id` property
      if (!location || typeof location !== "object" || !Object.prototype.hasOwnProperty.call(location, "id")) {
        // invalid input: reset to default location and warn
        console.warn("setActiveLocation called with invalid location:", location);
        return set((state) => {
          state.activeLocation = DEFAULT_LOCATION;
        });
      }

      return set((state) => {
        state.activeLocation = location;
      });
    },

    resetActiveLocation: () =>
      set((state) => {
        state.activeLocation = DEFAULT_LOCATION;
      }),
  }))
);

export default useLocationStore;
