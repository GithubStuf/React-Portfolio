import { useEffect, useState } from 'react'
import './App.css'
import { About } from './pages/about/About'
import { Aside } from './pages/aside/Aside'
import { Contact } from './pages/contact/Contact'
import { Home } from './pages/home/Home'
import { Portfolio } from './pages/portfolio/Portfolio'
import { Service } from './pages/services/Services'

function App() {

  const [activeStyle, setActiveStyle] = useState('color-1');
  const [isStyleSwitcherOpen, setIsStyleSwitcherOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const navs = document.querySelector(".nav");
  const navLists = navs?.querySelectorAll("li");
  const allSection = document.querySelectorAll(".section");
  const navTogglerBtn = document.querySelector(".nav-toggler"), aside = document.querySelector(".aside");
  const hireMe = document.querySelector(".hire-me");

  const showSection = (element: HTMLAnchorElement | null) => {
    for (let i = 0; i < allSection.length; i++) {
      allSection[i].classList.remove("active");
    }
    const target = element?.getAttribute("href")?.split("#")[1];
    document.querySelector("#" + target)?.classList.add("active");
  }

  const linkClick = function (this: HTMLAnchorElement) {
    for (let i = 0; i < allSection.length; i++) {
      allSection[i].classList.remove("back-section");
    }
    if (navLists) {
      for (let j = 0; j < navLists.length; j++) {
        if (navs && navLists[j]?.querySelector("a")?.classList.contains("active")) {
          allSection[j].classList.add("back-section");
        }
        navLists[j]?.querySelector("a")?.classList.remove("active");
      }
    }
    this.classList.add("active");
    showSection(this);
    if (window.innerWidth < 1200) {
      aside?.classList.toggle("open");
      navTogglerBtn?.classList.toggle("open");
      for (let i = 0; i < allSection.length; i++) {
        allSection[i].classList.toggle("open");
      }
    }
  };

  if (navLists) {
    for (let i = 0; i < navLists?.length; i++) {
      const a = navLists[i].querySelector("a");
      a?.addEventListener("click", linkClick);
    }
  }
  function updateNav(element: HTMLAnchorElement | null) {
    if (navLists) {
      for (let i = 0; i < navLists?.length; i++) {
        navLists[i]?.querySelector("a")?.classList.remove("active");
        const target = element?.getAttribute("href")?.split("#")[1];
        if (target === navLists[i]?.querySelector("a")?.getAttribute("href")?.split("#")) {
          navLists[i]?.querySelector("a")?.classList.add("active")
        };
      }
    }
  }

  hireMe?.addEventListener("click", function (this: HTMLAnchorElement) {
    const sectionIndex = parseInt(this.getAttribute("data-section-index") || "0", 10);
    showSection(this);
    updateNav(this);
    if (sectionIndex) {
      allSection[sectionIndex].classList.add("back-section");
    }
    for (let i = 0; i < allSection.length; i++) {
      allSection[i].classList.remove("back-section");
    }
  });


  useEffect(() => {
    const dayNightIcon = document.querySelector(".day-night i");
    if (dayNightIcon) {
      if (isDarkMode) {
        dayNightIcon.classList.add("fa-moon");
        dayNightIcon.classList.remove("fa-sun");
        document.querySelector("body")?.classList.add("dark");
      } else {
        dayNightIcon.classList.add("fa-sun");
        dayNightIcon.classList.remove("fa-moon");
        document.querySelector("body")?.classList.remove("dark");
      }
    }
  }, [isDarkMode]);


  const handleClick = (color: string) => {
    setActiveStyle(color);
    const alternateStyles = document.querySelectorAll('.alternate-style');
    alternateStyles.forEach((style) => {
      if (color === style.getAttribute('title')) {
        style.removeAttribute("disabled");
      } else {
        style.setAttribute("disabled", "true");
      }
    });
  };
  const handleToggleSwitcher = () => {
    setIsStyleSwitcherOpen(!isStyleSwitcherOpen);
  };

  const handleToggleDayNight = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <div className="main-container">
        <input type="hidden" value={activeStyle} />
        <Aside />
        <div className="main-content">
          <Home />
          <About />
          <Service />
          <Portfolio />
          <Contact />
        </div>
        <div className="style-switcher">
          <div className="style-switcher-toggler s-icon" onClick={handleToggleSwitcher}>
            <i className="fas fa-cog fa-spin"></i>
          </div>
          <div className={`style-switcher ${isStyleSwitcherOpen ? 'open' : ''}`}>
            <h4>Theme Colors</h4>
            <div className="colors">
              <span className="color-1" onClick={() => handleClick('color-1')}></span>
              <span className="color-2" onClick={() => handleClick('color-2')}></span>
              <span className="color-3" onClick={() => handleClick('color-3')}></span>
              <span className="color-4" onClick={() => handleClick('color-4')}></span>
              <span className="color-5" onClick={() => handleClick('color-5')}></span>
            </div>
          </div>
          <div className="day-night s-icon" onClick={handleToggleDayNight}>
            <i className={`fas ${isDarkMode ? 'fa-sun' : 'fa-moon'}`}></i>
          </div>
        </div>
      </div>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.1.0/typed.umd.js"
        integrity="sha512-+2pW8xXU/rNr7VS+H62aqapfRpqFwnSQh9ap6THjsm41AxgA0MhFRtfrABS+Lx2KHJn82UOrnBKhjZOXpom2LQ=="
        crossOrigin="anonymous" referrerPolicy="no-referrer"></script>
    </>
  )
}

export default App
