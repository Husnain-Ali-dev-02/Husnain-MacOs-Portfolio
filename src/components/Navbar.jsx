import dayjs from "dayjs";
import { navIcons, navLinks } from "#constants";
import useWindowStore from "#store/window";

const Navbar = () => {
  const { toggleWindow, openWindow } = useWindowStore();

  return (
    <nav>
      <div>
        <img src="/images/logo.svg" alt="Apple logo" />
        <p className="font-bold">Husnain's Portfolio</p>

        <ul>
          {navLinks.map(({ id, name, type }) => (
            <li key={id}>
              <button
                type="button"
                onClick={() =>
                  name.toLowerCase() === "resume"
                    ? toggleWindow(type) // ⚡ toggle resume
                    : openWindow(type) // other windows open normally
                }
                className="text-sm font-medium cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400 rounded px-2 py-1"
                aria-label={name}
              >
                {name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <ul>
          {navIcons.map(({ id, img }) => (
            <li key={id}>
              <img src={img} className="icon-hover" alt={`icon-${id}`} />
            </li>
          ))}
        </ul>

        <time>{dayjs().format("ddd MMM D h:mm A")}</time>
      </div>
    </nav>
  );
};

export default Navbar;
