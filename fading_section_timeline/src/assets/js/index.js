import  '../scss/style.scss';

let sections = gsap.utils.toArray("section"),
    currentSection = sections[0];

gsap.defaults({overwrite: 'auto', duration: 1});

let links = gsap.utils.toArray("nav a");

// stretch out the body height according to however many sections there are. 
gsap.set("body", {height: (sections.length * 100) + "%"});

// create a ScrollTrigger for each section
sections.forEach((section, i) => {
  ScrollTrigger.create({
    // use dynamic scroll positions based on the window height (offset by half to make it feel natural)
    start: () => (i - 0.5) * innerHeight,
    end: () => (i + 0.5) * innerHeight,
    scrub: true,
    markers: true,
    toggleActions: "play reset play reset",
    // when a new section activates (from either direction), set the section accordingly.
    onToggle: self => self.isActive && setSection(section),
    onEnter: () => {
      links.forEach((e) => {
        e.classList.remove("active");
      });
      links[i].classList.add("active");
    },
    onEnterBack: () => {
      links.forEach((e) => {
        e.classList.remove("active");
      });
      links[i].classList.add("active");
    }
  });
});

function setSection(newSection) {
  if (newSection !== currentSection) {
   gsap.timeline()
     .to(currentSection.querySelector("h1"), {y:-30, autoAlpha:0, duration:0.3})
     .to(currentSection, {autoAlpha:0, duration:0.5})
    
    gsap.timeline()
      .to(newSection, {autoAlpha:1, duration:0.5})
      .fromTo(newSection.querySelector("h1"), {y:30, autoAlpha:0}, {autoAlpha: 1, y: 0, duration:.3})
    
    currentSection = newSection;    
  }
}
