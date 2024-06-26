import { links } from "../data/data"

const SocialLinks = () => {
  return (
    <div>
      <ul className="flex gap-5">
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center gap-1 cursor-pointer h-6 w-6" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center hover:scale-105"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
