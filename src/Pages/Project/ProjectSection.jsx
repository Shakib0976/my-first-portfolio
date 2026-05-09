import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis } from "lenis/react";
import { Link } from "react-router";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectSection() {
  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      // Desktop: full spread animation
      const leftXValues = [-400, -800, -400];
      const rightXValues = [400, 800, 400];

      gsap.utils.toArray(".row").forEach((row, index) => {
        const cardLeft = row.querySelector(".card-left");
        const cardRight = row.querySelector(".card-right");

        gsap.to(cardLeft, {
          x: leftXValues[index],
          scrollTrigger: {
            trigger: ".main",
            start: "top center",
            end: "200% bottom",
            scrub: true,
          },
        });

        gsap.to(cardRight, {
          x: rightXValues[index],
          scrollTrigger: {
            trigger: ".main",
            start: "top center",
            end: "200% bottom",
            scrub: true,
          },
        });
      });
    });

    mm.add("(max-width: 1023px)", () => {
      // Mobile/tablet: subtle scale-in only, no x spread
      gsap.utils.toArray(".card").forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });
    });

    const scrollTriggerSettings = {
      trigger: ".main",
      start: "top 25%",
      toggleActions: "play reverse play reverse",
    };

    gsap.to(".line p", {
      y: 0,
      duration: 0.5,
      ease: "power1.out",
      scrollTrigger: scrollTriggerSettings,
    });

    gsap.to(".button", {
      y: 0,
      opacity: 1,
      delay: 0.25,
      duration: 0.5,
      ease: "power1.out",
      scrollTrigger: scrollTriggerSettings,
    });

    return () => {
      mm.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const generateRows = () => {
    const rows = [];
    for (let i = 1; i <= 3; i++) {
      rows.push(
        <div className="row" key={i}>
          <div className="card card-left">
            <img src={`/img-${2 * i - 1}.jpg`} alt="" />
          </div>
          <div className="card card-right">
            <img src={`/img-${2 * i}.jpg`} alt="" />
          </div>
        </div>,
      );
    }
    return rows;
  };

  return (
    <ReactLenis root>
      <section className="main mainSection">
        <div className="main-content">
          <div className="copy">
            <div className="line">
              <p>Dive into coding without clutter</p>
            </div>
            <div className="line">
              <p>Build faster, ship smarter</p>
            </div>
            <div className="line">
              <p>Your projects, beautifully organized</p>
            </div>
          </div>
          <div className="mt-8">
            <Link to="/projects">
              <button className=" translate-y-10 rounded-full bg-black px-8 py-3 text-sm font-semibold text-white opacity-0 transition hover:scale-105 hover:bg-gray-200 sm:px-10 sm:py-4 sm:text-base">
                View All Projects
              </button>
            </Link>
          </div>
        </div>

        <div className="rows-wrapper">{generateRows()}</div>
      </section>
    </ReactLenis>
  );
}
