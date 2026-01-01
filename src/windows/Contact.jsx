import { WindowControls } from "#components";
import { socials } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";

const Contact = () => {
  return (
    <>
      {/* Window header */}
      <div id="window-header" className="flex items-center justify-between p-2 bg-gray-100">
        <WindowControls target="contact" />
        <h2 className="text-lg font-semibold">Contact Me</h2>
      </div>

      {/* Window body */}
      <div className="p-5 space-y-5">
        <img
          src="/images/husnain.png" // corrected path, removed "/80x80"
          alt="Profile"
          className="w-20 h-20 rounded-full object-cover"
        />

        <h3 className="text-xl font-medium">Let's Connect</h3>
        <p>Got an idea? A bug to squash? Or just wanna talk tech? I'm in!</p>
        <p>
          <a
            href="mailto:husnainali41940@gmail.com"
            aria-label="Send email to Husnain"
            className="text-blue-500 hover:underline"
          >
            husnainali&#64;gmail&#46;com
          </a>
        </p>

        <ul className="flex flex-wrap gap-3">
          {socials.map(({ id, bg, link, icon, text }) => (
            <li
              key={id}
              className="rounded-md p-2"
              style={{ backgroundColor: bg }}
            >
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                title={text}
                className="flex items-center gap-2"
              >
                <img src={icon} alt={text} className="w-5 h-5" />
                <span className="text-white font-medium">{text}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const ContactWindow = WindowWrapper(Contact, "contact");

export default ContactWindow;
