const ProjectAPI = {
  projects: [
    {
      slug: "crossfit-ripped",
      name: "Crossfit Ripped",
      description: "Web development & responsive design for Crossfit Ripped, a Florida based CrossFit Box. Concept and design by Alvaro Morin (www.alvaromorin.com).",
      tag: "Web development",
      thumb: "../img/projects/thumbs/crossfit.jpg",
      images: ["../img/projects/hd/crossfit1.jpg", "../img/projects/hd/crossfit2.jpg"],
      imagesMobile: ["../img/projects/mobile/crossfit1.jpg", "../img/projects/mobile/crossfit2.jpg"]
    },
    {
      slug: "cyc-ology-time",
      name: "Cyc-ology Time",
      description: "A full redesign for Cyco-ology Time, a health studio based in Davie, FL. Alvaro Morin (www.alvaromorin.com) designed this beautiful and modern website, and we helped him in the whole development process.",
      tag: "Web development",
      thumb: "../img/projects/thumbs/cycology.jpg",
      images: ["../img/projects/hd/cycology1.jpg", "../img/projects/hd/cycology2.jpg"],
      imagesMobile: ["../img/projects/mobile/cycology1.jpg", "../img/projects/mobile/cycology2.jpg"]
    },
    {
      slug: "elizabeth-mosler",
      name: "Elizabeth Mosler",
      description: "We created this site for Elizabeth Mosler, a wonderful Venezuelan photographer, living in Madrid, Spain. She wanted and easy to maintain website which could show her Instagram photos. The simple and minimalist layout is perfect for showing the beauty of her photos.",
      tag: "Web design & development",
      thumb: "../img/projects/thumbs/elizabethmosler.jpg",
      images: ["../img/projects/hd/elizabethmosler1.jpg"],
      imagesMobile: ["../img/projects/mobile/elizabethmosler1.jpg"]
    },
    {
      slug: "carmen-araujo-arte",
      name: "Carmen Araujo Arte",
      description: "Carmen Araujo Arte is an outstanding gallery in Caracas, Venezuela. Our task consisted of designing and developing a beautiful minimalist Wordpress Site.",
      tag: "Web development",
      thumb: "../img/projects/thumbs/carmenaraujoarte.jpg",
      images: ["../img/projects/hd/carmenaraujoarte1.jpg", "../img/projects/hd/carmenaraujoarte2.jpg", "../img/projects/hd/carmenaraujoarte3.jpg"],
      imagesMobile: ["../img/projects/mobile/carmenaraujoarte1.jpg", "../img/projects/mobile/carmenaraujoarte2.jpg", "../img/projects/mobile/carmenaraujoarte3.jpg"]
    },
    {
      slug: "bebek",
      name: "Bebek",
      description: "Product modeling and Rendering for Bebek Baby Products. The client needed some photo-realistic renders with some artistic touches. This cool website was designed by MediaWorx (mwxdigital.com)",
      tag: "3D modeling & rendering",
      thumb: "../img/projects/thumbs/bebek.jpg",
      images: ["../img/projects/hd/bebek2.jpg"],
      imagesMobile: ["../img/projects/mobile/bebek2.jpg"]
    },
    {
      slug: "c-com",
      name: "C-COM",
      description: "Wordpress development for Florida based Branding Agency C-COM Group. Web design and project supervision by Daniela Stolk (danielastolk.com)",
      tag: "3D modeling & rendering",
      thumb: "../img/projects/thumbs/ccom.jpg",
      images: ["../img/projects/hd/ccom1.jpg"],
      imagesMobile: ["../img/projects/mobile/ccom1.jpg"]
    },
    {
      slug: "cybertrends",
      name: "Cybertrends",
      description: "HTML5 / CSS3 & JS development for Florida International University event: Trends in Cybersecurity. Beautifully designed by Alvaro Morin (www.alvaromorin.com)",
      tag: "Web development",
      thumb: "../img/projects/thumbs/fiu.jpg",
      images: ["../img/projects/hd/fiu1.jpg", "../img/projects/hd/fiu2.jpg"],
      imagesMobile: ["../img/projects/mobile/fiu1.jpg", "../img/projects/mobile/fiu2.jpg"]
    },
    {
      slug: "beonwave",
      name: "BeonWave",
      description: "Web Design & Development for BeonWave, a cool new platform for immigrants and entrepreneurs around the world. A fully designed WordPress theme from scratch",
      tag: "Web design & development",
      thumb: "../img/projects/thumbs/beonwave.jpg",
      images: ["../img/projects/hd/beonwave1.jpg", "../img/projects/hd/beonwave2.jpg"],
      imagesMobile: ["../img/projects/mobile/beonwave1.jpg", "../img/projects/mobile/beonwave2.jpg"]
    }
  ],
  all: function () { return this.projects },
  get: function (id) {
    const isProject = p => p.slug === id
    return this.projects.find(isProject)
  }
}

export default ProjectAPI
