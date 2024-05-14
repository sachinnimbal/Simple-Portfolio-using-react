import React, { useEffect } from "react";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Career from "./components/Career";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";

export default function App() {
  useEffect(() => {
    document.getElementById("currentYear").textContent = new Date().getFullYear();
  }, []);

  useEffect(() => {
    const buttons = document.querySelectorAll(".button");
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        button.classList.toggle("active");
      });
    });
  }, []);

  useEffect(() => {
    document.querySelector(".about-btn a").addEventListener("click", (e) => {
      e.preventDefault();
      const href = e.target.getAttribute("href");
      if ("scrollBehavior" in document.documentElement.style) {
        window.scroll({
          top: document.querySelector(href).offsetTop,
          behavior: "smooth",
        });
      } else {
        window.location.href = href;
      }
    });
  }, []);

  useEffect(() => {
    document.querySelectorAll(".footer-nav a").forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        e.preventDefault();
        const href = e.target.getAttribute("href");
        const targetSection = document.querySelector(href);
        if (targetSection) {
          if ("scrollBehavior" in document.documentElement.style) {
            window.scroll({
              top: targetSection.offsetTop,
              behavior: "smooth",
            });
          } else {
            window.location.href = href;
          }
        }
      });
    });
  }, []);

  useEffect(() => {
    const skillsSection = document.querySelector("#skills");
    const circles = document.querySelectorAll(".progress-ring__circle");
    const skills = [65, 90, 80, 55, 80, 85, 85, 60];

    circles.forEach((circle, index) => {
      const radius = circle.r.baseVal.value;
      const circumference = radius * 2 * Math.PI;
      circle.style.strokeDasharray = `${circumference} ${circumference}`;
      if (window.innerWidth < 768) {
        const offset = circumference - (skills[index] / 100) * circumference;
        circle.style.strokeDashoffset = offset;
      } else {
        circle.style.strokeDashoffset = circumference;
      }
    });

    if (window.innerWidth >= 768) {
      const animateSkills = (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            circles.forEach((circle, index) => {
              setTimeout(() => {
                const radius = circle.r.baseVal.value;
                const circumference = radius * 2 * Math.PI;
                const offset = circumference - (skills[index] / 100) * circumference;
                circle.style.transition = "stroke-dashoffset 2s ease-out";
                circle.style.strokeDashoffset = offset;
              }, index * 250);
            });
            observer.unobserve(entry.target);
          }
        });
      };

      const observer = new IntersectionObserver(animateSkills, {
        root: null,
        threshold: 0.5,
      });

      observer.observe(skillsSection);
    }
  }, []);

  return (
    <div className="App">
      <Home />
      <About />
      <Skills />
      <Portfolio />
      <Career />
      <Contact />
      <Footer />
    </div>
  );
}
