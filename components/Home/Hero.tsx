import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const isMobile = useMediaQuery({ maxWidth: 767 });

  useGSAP(() => {
    const tl = gsap.timeline();

    const title = SplitText.create(".title", { type: "chars" });
    tl.to(".title", { opacity: 1, duration: 0 });
    const subtitle = SplitText.create(".subtitle", { type: "lines" });
    tl.to(".subtitle", { opacity: 1, duration: 0 });

    tl.from(title.chars, {
      opacity: 0,
      yPercent: 100,
      stagger: {
        amount: 0.4,
      },
    });

    tl.from(subtitle.lines, {
      opacity: 0,
      y: "100%",
      stagger: {
        amount: 0.4,
      },
    });

    gsap.to(".left-leaf", {
      yPercent: -60,
      scrollTrigger: {
        trigger: "left-leaf",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
    gsap.to(".right-leaf", {
      yPercent: 150,
      scrollTrigger: {
        trigger: "right-leaf",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    const startValue = isMobile ? "top 50%" : "center 60%";
    const endValue = isMobile ? "120% top" : "bottom top";

    const videoTl = gsap.timeline({
      scrollTrigger: {
        trigger: "video",
        start: startValue,
        end: endValue,
        scrub: true,
        pin: true,
      },
    });

    if (videoRef.current) {
      videoTl.to(videoRef.current, {
        currentTime: videoRef.current?.duration,
      });
    }
  });

  return (
    <>
      <section id="hero" className="noisy">
        <h1 className="title uppercase overflow-hidden text-gradient opacity-0">
          Jadeite
        </h1>
        <img
          src="/images/hero-left-leaf.png"
          alt="left leaf"
          className="left-leaf"
        />
        <img
          src="/images/hero-right-leaf.png"
          alt="right leaf"
          className="right-leaf"
        />
        <div className="body">
          <div className="content">
            <div className="space-y-5 hidden md:block">
              <p>Cool. Crisp. Classic.</p>
              <p className="subtitle opacity-0 capitalize">
                Sip the soul
                <br /> of summer
              </p>
            </div>
            <div className="view-cocktails">
              <p className=" subtitle opacity-0">
                Every cocktail on our menu is a blend of premium ingredients,
                creative flair, and timeless recipes — designed to delight your
                senses.
              </p>
              <a href="#cocktails">View Cocktails</a>
            </div>
          </div>
        </div>
      </section>
      <div className="video absolute inset-0">
        <video
          src="/videos/output.mp4"
          muted
          playsInline
          preload="auto"
          ref={videoRef}
        ></video>
      </div>
    </>
  );
};

export default Hero;
