"use client";
import { useRef, useState } from "react";
import { sliderLists } from "../../constants";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

const Menu = () => {
  const contentRef = useRef<HTMLDivElement | null>(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("l");

  const goToSlide = (i: number) => {
    const newI = (i + sliderLists.length) % sliderLists.length;

    if (newI < currentIndex) setDirection("r");
    else setDirection("l");

    setCurrentIndex(newI);
  };

  const getCocktail = (offset: number) => {
    return sliderLists[
      (currentIndex + offset + sliderLists.length) % sliderLists.length
    ];
  };

  const currentCocktail = getCocktail(0);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#menu",
        start: "top 70%",
        end: "bottom bottom",
        scrub: true,
      },
    });

    tl.from("#m-right-leaf", {
      yPercent: -100,
      xPercent: 100,
      opacity: 0,
      height: 0,
      width: 0,
      ease: "power1.inOut",
    }).from(
      "#m-left-leaf",
      {
        yPercent: 100,
        xPercent: -100,
        opacity: 0,
        height: 0,
        width: 0,
        ease: "power1.inOut",
      },
      "<",
    );
  });

  useGSAP(() => {
    gsap.from("#title", { opacity: 0, duration: 1 });

    gsap.from("#cocktail-img", {
      opacity: 0,
      xPercent: direction === "r" ? -100 : 100,
    });

    gsap.from(".details h2", { opacity: 0, yPercent: 100 });
    gsap.from(".details p", { opacity: 0, yPercent: 100, delay: 0.05 });
  }, [currentIndex]);

  return (
    <section
      id="menu"
      className="overflow-hidden pt-0 sm:px-40"
      aria-labelledby="menu-heading"
    >
      <div id="m-right-leaf" className="absolute sm:block hidden top-0 right-0">
        <Image
          width={241}
          height={355}
          src="/images/slider-right-leaf.png"
          alt="right-leaf"
        />
      </div>
      <div
        id="m-left-leaf"
        className="absolute sm:block hidden bottom-0 left-0"
      >
        <Image
          width={275}
          height={304}
          src="/images/slider-left-leaf.png"
          alt="left-leaf"
        />
      </div>

      <h2 id="menu-heading" className="sr-only">
        Cocktail Menu
      </h2>
      <nav className="cocktail-tabs" aria-label="cocktail-navigation">
        {sliderLists.map(({ id, name }, i) => {
          const isActive = i === currentIndex;

          return (
            <button
              className={`${isActive ? "text-white border-white" : "text-white/50 border-white/50"}`}
              key={id}
              onClick={() => goToSlide(id)}
            >
              {name}
            </button>
          );
        })}
      </nav>
      <div className="content">
        <div className="flex items-center justify-between  h-[60vh] w-full">
          <button
            onClick={() => goToSlide(currentIndex - 1)}
            className="size-20 mb-40"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#ffffff"
              className="hover:fill-yellow transition-colors"
            >
              <path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path>
            </svg>
          </button>
          <Image
            id="cocktail-img"
            fill
            src={currentCocktail.image}
            className="object-contain mx-auto max-w-150 "
            alt={currentCocktail.name}
          />
          <button
            onClick={() => goToSlide(currentIndex + 1)}
            className="size-20 mb-40"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#ffffff"
              className="hover:fill-yellow transition-colors"
            >
              <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path>
            </svg>
          </button>
        </div>
        <div className="recipe sm:items-end">
          <div ref={contentRef} className="info">
            <p>Recipe for:</p>
            <p id="title">{currentCocktail.name}</p>
          </div>
          <div className="details">
            <h2>{currentCocktail.title}</h2>
            <p>{currentCocktail.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
