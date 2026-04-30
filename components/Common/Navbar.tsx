import { useGSAP } from "@gsap/react";
import { navLinks } from "../../constants";
import gsap from "gsap";

const Navbar = () => {
  useGSAP(() => {
    gsap.to("nav", {
      scrollTrigger: {
        trigger: "nav",
        start: "bottom top",
        scrub: true,
      },
      backgroundColor: "#00000050",
      backdropFilter: "blur(10px)",
      duration: 1,
    });
  });

  return (
    <nav>
      <div>
        <a href="#">
          <div className="flex flex-row items-center m-0 p-0">
            <div className="p-0 m-0 w-fit">
              <img src="/images/logo.svg" alt="logo" />
            </div>
            <p className="p-0<<<">Golden Sip</p>
          </div>
        </a>

        <ul>
          {navLinks.map(({ id, title }) => (
            <a key={id} href={`#${id}`}>
              {title}
            </a>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
