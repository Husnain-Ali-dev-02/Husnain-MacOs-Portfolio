import { WindowControls } from "#components";
import { locations } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";
import useLocationStore from "#store/location";
import useWindowStore from "#store/window";
import clsx from "clsx";
import { Search } from "lucide-react";
import { useCallback } from "react";

const Finder = () => {
  const { openWindow } = useWindowStore();
  const { activeLocation, setActiveLocation } = useLocationStore();

  const openItem = (item) => {
    if (item.fileType === "pdf") return openWindow("resume");
    if (item.kind === "folder") return setActiveLocation(item);
    if (["fig", "url"].includes(item.fileType) && item.href)
      return window.open(item.href, "_blank");

    openWindow(`${item.fileType}${item.kind}`, item);
  };

  const renderList = useCallback(
    (items) =>
      items.map((item) => (
        <li
          key={item.id}
          onClick={() => setActiveLocation(item)}
          className={clsx(
            "sidebar-item",
            item.id === activeLocation?.id && "active"
          )}
        >
          <img src={item.icon} className="w-4" alt={item.name} />
          <p className="text-sm font-medium truncate">{item.name}</p>
        </li>
      )),
    [activeLocation, setActiveLocation]
  );

  return (
    <>
      <div id="window-header">
        <WindowControls target="finder" />
        <Search className="icon" />
      </div>

      <div className="bg-white flex h-full">
        {/* Sidebar */}
        <aside className="sidebar">
          <section>
            <h3>Favorites</h3>
            <ul>{renderList(Object.values(locations))}</ul>
          </section>

          <section>
            <h3>Work</h3>
            <ul>{renderList(locations.work.children)}</ul>
          </section>
        </aside>

        {/* Content area */}
        <ul className="content">
          {activeLocation?.children?.map((item) => (
            <li
              key={item.id}
              className={clsx("content-item", item.position || "")}
              onClick={() => openItem(item)}
            >
              <img src={item.icon} alt={item.name} />
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const FinderWindow = WindowWrapper(Finder, "finder");
export default FinderWindow;
