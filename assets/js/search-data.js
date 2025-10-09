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
          section: "News",},{id: "projects-gaussian-splatting-for-heritage",
          title: 'Gaussian splatting for heritage',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Gaussian%20splatting%20for%20heritage/";
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
