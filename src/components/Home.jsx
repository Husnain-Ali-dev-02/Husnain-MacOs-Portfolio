import { locations } from "#constants";
import useLocationStore from "#store/location";
import useWindowStore from "#store/window";

import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

import { useEffect, useRef } from "react";
import clsx from "clsx";

gsap.registerPlugin(Draggable);

const Home = () => {
  const projects = locations.work?.children ?? [];

  const { setActiveLocation } = useLocationStore();
  const { openWindow } = useWindowStore();

  const folderRefs = useRef([]);

  const handleOpenProjectFinder = (project) => {
    setActiveLocation(project);
    openWindow("finder");
    if (project.id) openWindow(project.id);
  };

  useEffect(() => {
    folderRefs.current.forEach((folder, index) => {
      if (!folder) return;

      // Responsive positioning
      const isMobile = window.innerWidth < 640; // Tailwind sm breakpoint
      let startX = 0;
      let startY = 0;

      if (isMobile) {
        // Mobile: wrap in single column with spacing
        startX = 20; // margin from left
        startY = index * 140; // vertical spacing
      } else {
        // Desktop: grid layout
        startX = 50 + (index % 5) * 160;
        startY = 50 + Math.floor(index / 5) * 140;
      }

      gsap.set(folder, { x: startX, y: startY });

      Draggable.create(folder, {
        type: "x,y",
        bounds: "body",
        inertia: true,
      });
    });
  }, [projects]);

  return (
    <section id="home">
      <ul>
        {projects.map((project, index) => (
          <li
            key={project.id}
            ref={(el) => (folderRefs.current[index] = el)}
            className={clsx("group folder absolute")}
            onClick={() => handleOpenProjectFinder(project)}
          >
            <img src="/images/folder.png" alt={project.name} />
            <p>{project.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Home;
