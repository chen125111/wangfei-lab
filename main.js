(() => {
  const navLinks = Array.from(document.querySelectorAll('.nav-links a[href^="#"]'));
  if (!navLinks.length) {
    return;
  }

  const sectionMap = new Map();
  navLinks.forEach((link) => {
    const href = link.getAttribute("href") || "";
    const id = href.startsWith("#") ? href.slice(1) : "";
    if (!id) {
      return;
    }

    const section = document.getElementById(id);
    if (section) {
      sectionMap.set(section, link);
    }
  });

  const setActiveLink = (id) => {
    navLinks.forEach((link) => {
      const isActive = link.getAttribute("href") === `#${id}`;
      link.classList.toggle("active", isActive);
      if (isActive) {
        link.setAttribute("aria-current", "location");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  };

  const initialHash = window.location.hash.replace("#", "");
  if (initialHash) {
    setActiveLink(initialHash);
  }

  if ("IntersectionObserver" in window && sectionMap.size) {
    const visibleRatios = new Map();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleRatios.set(entry.target.id, entry.intersectionRatio);
          } else {
            visibleRatios.delete(entry.target.id);
          }
        });

        if (!visibleRatios.size) {
          return;
        }

        const [activeId] = [...visibleRatios.entries()].sort((a, b) => b[1] - a[1])[0];
        if (activeId) {
          setActiveLink(activeId);
        }
      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: [0.1, 0.5, 0.9],
      }
    );

    sectionMap.forEach((_, section) => observer.observe(section));
  } else {
    const sections = Array.from(sectionMap.keys());
    let ticking = false;

    const updateActive = () => {
      const offset = 120;
      let currentId = sections[0] ? sections[0].id : "";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= offset && rect.bottom >= offset) {
          currentId = section.id;
        } else if (rect.top < offset) {
          currentId = section.id;
        }
      });

      if (currentId) {
        setActiveLink(currentId);
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateActive);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    updateActive();
  }
})();
