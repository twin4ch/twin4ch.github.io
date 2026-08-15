// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-people",
          title: "people",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-news",
          title: "news",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-twin4ch-was-present-at-the-bi-annual-cipa-symposium-in-seoul-south-korea",
          title: 'Twin4CH was present at the bi-annual CIPA Symposium in Seoul, South Korea.',
          description: "",
          section: "News",},{id: "news-warm-welcome-to-dario-billi-thodoris-betsas-and-widiatmoko-azis-fadilah-to-our-team-read-more-about-their-upcoming-research-with-twin4ch-here",
          title: 'Warm welcome to Dario Billi, Thodoris Betsas, and Widiatmoko Azis Fadilah to our...',
          description: "",
          section: "News",},{id: "news-arnadi-murtiyoso-attended-arif-eu-cost-action-core-group-meeting-in-lisbon-portugal-read-more-here",
          title: 'Arnadi Murtiyoso attended ARiF EU COST Action Core Group meeting in Lisbon, Portugal....',
          description: "",
          section: "News",},{id: "news-twin4ch-members-attended-the-intergeo-expo-in-frankfurt-germany-read-more-here",
          title: 'Twin4CH members attended the INTERGEO Expo in Frankfurt, Germany. Read more here.',
          description: "",
          section: "News",},{id: "news-a-seminar-and-data-acquisition-mission-was-conducted-at-the-kasepuhan-palace-historical-complex-in-cirebon-indonesia-read-more-here",
          title: 'A seminar and data acquisition mission was conducted at the Kasepuhan Palace historical...',
          description: "",
          section: "News",},{id: "news-twin4ch-attended-the-isprs-and-cipa-hd-11th-3darch-workshop-in-ancona-italy-widiatmoko-azis-fadilah-and-thodoris-betsas-presented-their-papers-while-arnadi-murtiyoso-delivered-an-keynote-talk-on-the-twin4ch-project-read-more-here",
          title: 'Twin4CH attended the ISPRS and CIPA HD 11th 3DARCH Workshop in Ancona, Italy....',
          description: "",
          section: "News",},{id: "news-arnadi-murtiyoso-was-invited-to-present-twin4ch-s-work-during-a-stakeholder-forum-for-ai-in-3d-digital-twins-of-cultural-heritage-organised-by-the-european-commission-dg-connect-and-3d-4ch-competence-centre-read-more-here",
          title: 'Arnadi Murtiyoso was invited to present Twin4CH’s work during a stakeholder forum for...',
          description: "",
          section: "News",},{id: "news-widiatmoko-azis-fadilah-was-invited-to-brussels-to-present-his-work-on-3d-gaussian-splatting-semantic-segmentation-during-the-european-data-space-for-cultural-heritage-cedche-expert-group-meeting-organised-by-the-european-commission-dg-connect-and-3d-4ch-competence-centre-read-more-here",
          title: 'Widiatmoko Azis Fadilah was invited to Brussels to present his work on 3D...',
          description: "",
          section: "News",},{id: "projects-gaussian-splatting-for-3d-representation",
          title: 'Gaussian splatting for 3D representation',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Gaussian%20splatting%20for%203D%20representation/";
            },},{id: "projects-radiance-fields-based-3d-surface-reconstruction",
          title: 'Radiance fields-based 3D surface reconstruction',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Radiance%20fields-based%203D%20surface%20reconstruction/";
            },},{id: "projects-semantic-gaussian-splatting",
          title: 'Semantic Gaussian splatting',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Semantic%20Gaussian%20splatting/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
