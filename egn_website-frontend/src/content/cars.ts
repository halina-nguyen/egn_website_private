export let cars = [
  {
    name: 'egn27',
    image: 'assets/images/cars/egn_abgedeckt.jpg',
    season: '2027',
  },
  {
    name: 'egn26',
    image: 'assets/images/cars/egn26.jpg',
    season: '2026',
    events: ['Formula Student Germany', 'Formula Student Czech Republic', 'Formula Student Austria'],
    details: [
      {
        title: 'Max. Speed',
        value: '120 kph',
      },
      {
        title: 'Acceleration 0-100 kph',
        value: '3.6 sec',
      },
    ],
    achievements: [
      "First Place FSG Driverless Cup",
    ]
  },
  {
    name: 'egn25',
    image: 'assets/images/cars/egn25.jpg',
    season: '2025',
    events: ['Formula Student Austria', 'Formula Student Czech Republic', 'Formula Student Germany'],
    achievements: [
      "2nd in FSG Trackdrive, Top 5 FSG Driverless Cup Team",
    ]
  },
  {
    name: 'egn24',
    image: 'assets/images/cars/egn24.jpg',
    season: '2024',
    events: ['Formula Student Germany', 'Formula Student East', 'Formula Student Alpe Adria'],
    details: [
      {
        title: 'Max. Speed',
        value: '120 kph',
      },
      {
        title: 'Acceleration 0-100 kph',
        value: '<3 sec',
      },
    ],
    advancements: [
      "Higher Gear Ratio compared to egn23",
    ]
  },
  {
    name: 'egn23',
    image: 'assets/images/cars/egn23.jpg',
    season: '2023',
    events: ['Formula Student Germany', 'Formula Student East', 'Formula Student Austria'],
    details: [
      {
        title: 'Max. Speed',
        value: '120 kph',
      },
      {
        title: 'Acceleration 0-100 kph',
        value: '<3 sec'
      },
      {
        title: 'Weight',
        value: '207 kg'
      }
    ],
  },
  {
    name: 'egn22',
    image: 'assets/images/cars/egn22.jpg',
    season: "2022",
    events: ['Formula Student Germany', 'Formula Student East', 'Formula Student Austria'],
    details: [
      {
        title: 'Max. Speed',
        value: '105 kph',
      },
      {
        title: 'Acceleration 0-100 kph',
        value: '2.6 sec'
      },
      {
        title: 'Weight',
        value: '200 kg'
      }
    ],
    achievements: [
      '1st Platz DV Skidpad (FSG)',
      '2nd Platz Overall (FSA)',
      '2nd Platz Efficiency Award (FSA)',
      '2nd Platz Endurance Run (FSA)',
      '2nd Platz DV Skidpad (FSEast)'
    ],
  },
  {
    name: 'egn20',
    image: 'assets/images/cars/egn20.jpg',
    season: "2021",
    events: ['Formula Student Germany', 'Formula Student East', 'Formula Student Austria'],
    details: [
      {
        title: 'Max. Speed',
        value: '120 kph',
      },
      {
        title: 'Acceleration 0-100 kph',
        value: '2.6 sec'
      },
      {
        title: 'Weight',
        value: '187 kg'
      }
    ],
    achievements: [
      '1st Platz FS Online',
      '2nd Platz EV Efficiency (FS East)',
      '3rd Platz DV Design (FSG)',
      '3rd Platz Platz DV Business Plan (FSG)',
    ],
  },
  {
    name: 'egn19-ev',
    image: 'assets/images/cars/egn19-ev.jpg',
    season: "2019",
    events: ['Formula Student Germany', 'Formula Student East', 'Formula Student Austria'],
    details: [
      {
        title: 'Max. Speed',
        value: '120 kph',
      },
      {
        title: 'Acceleration 0-100 kph',
        value: '2.6 sec'
      },
      {
        title: 'Weight',
        value: '185 kg'
      }
    ],
    achievements: [
      '1st Platz Efficiency (FSA)',
    ],
  },
  {
    name: 'egn19-dv',
    image: 'assets/images/cars/egn19-dv.jpg',
    season: "2019",
    events: ['Formula Student Germany', 'Formula Student East'],
    details: [
      {
        title: 'Max. Speed',
        value: '120 kph',
      },
      {
        title: 'Acceleration 0-100 kph',
        value: '2.6 sec'
      },
      {
        title: 'Weight',
        value: '220 kg'
      }
    ],
    achievements: [
      '2nd Platz Cost report (FS East)',
      '2nd Platz Acceleration (FS East)',
      '3rd Platz Skidpad (FS East)',
      '3rd Platz Overall (FS East)',
      '3rd Platz Autocross (FSG)',
    ],
  },
  {
    name: 'egn18-ev',
    image: 'assets/images/cars/egn18-ev.jpg',
    season: "2018",
    events: ['Formula Student Netherlands', 'Formula Student Germany', 'Formula Student Austria'],
    details: [
      {
        title: 'Max. Speed',
        value: '130 kph',
      },
      {
        title: 'Acceleration 0-100 kph',
        value: '2.8 sec'
      },
      {
        title: 'Weight',
        value: '198 kg'
      }
    ],
    achievements: [
      '1st Platz Overaall (FSA)',
      '1st Platz Autocross (FSN)',
      '2nd Platz Endurance (FSA)',
      '3rd Platz Cost Report (FSG)',
    ],
  },
  {
    name: 'egn18-dv',
    image: 'assets/images/cars/egn18-dv.jpg',
    season: "2018",
    events: ['Formula Student Germany'],
    details: [
      {
        title: 'Max. Speed',
        value: '120 kph',
      },
      {
        title: 'Acceleration 0-100 kph',
        value: '2.6 sec'
      },
      {
        title: 'Weight',
        value: '220 kg'
      }
    ],
    achievements: [
      '2nd Platz Trackdrive (FSG)',
      '3rd Platz Overall (FSG)',
      '3rd Platz Skidpad (FSG)',
    ],
  },
  {
    name: 'egn17-ev',
    image: 'assets/images/cars/egn17-ev.jpg',
    season: "2017",
    events: ['Formula Student Germany', 'Formula Student Austria', 'Formula Student East'],
    details: [
      {
        title: 'Max. Speed',
        value: '122 kph',
      },
      {
        title: 'Acceleration 0-100 kph',
        value: '3.1 sec'
      },
      {
        title: 'Weight',
        value: '230 kg'
      }
    ],
    achievements: [
      '1st Platz Autonomous Design Award',
      '2nd Platz Trackdrive (FSG)',
      '2nd Platz Skidpad (FSG)',
      '3rd Platz Overall (FSG)',
    ],
  },
  {
    name: 'egn17-dv',
    image: 'assets/images/cars/egn17-dv.jpg',
    season: "2017",
    events: ['Formula Student Germany'],
    details: [
      {
        title: 'Max. Speed',
        value: '120 kph',
      },
      {
        title: 'Acceleration 0-100 kph',
        value: '2.6 sec'
      },
      {
        title: 'Weight',
        value: '220 kg'
      }
    ],
    achievements: [
      '1st Platz National Instruments Special Award',
    ],
  },
  {
    name: 'egn16',
    image: 'assets/images/cars/egn16.jpg',
    season: "2016",
    events: ['Formula Student Germany', 'Formula Student Austria', 'Formula Student UK'],
    details: [
      {
        title: 'Max. Speed',
        value: '122 kph',
      },
      {
        title: 'Acceleration 0-100 kph',
        value: '3.1 sec'
      },
      {
        title: 'Weight',
        value: '220 kg'
      }
    ],
    achievements: [
      '1st Platz Skipad (FSH)',
      '1st Platz Efficiency (FSA)',
      '3rd Platz Efficiency (FSUK)',
    ],
  },
  {
    name: 'egn15',
    image: 'assets/images/cars/egn15.jpg',
    season: "2015",
    events: ['Formula Student Germany', 'Formula Student Hungary', 'Formula Student UK'],
    details: [
      {
        title: 'Max. Speed',
        value: '130 kph',
      },
      {
        title: 'Acceleration 0-100 kph',
        value: '3.1 sec'
      },
      {
        title: 'Weight',
        value: '220 kg'
      }
    ],
    achievements: [
      '1st Platz Video Special Award (FSH)',
    ],
  },
  {
    name: 'egn14',
    image: 'assets/images/cars/egn14.jpg',
    season: "2014",
    events: ['Formula Student Germany', 'Formula Student Austria', 'Formula Student Hungary'],
    details: [
      {
        title: 'Max. Speed',
        value: '125 kph',
      },
      {
        title: 'Acceleration 0-100 kph',
        value: '3.5 sec'
      },
      {
        title: 'Weight',
        value: '220 kg'
      }
    ],
    achievements: [
      '1st Platz Eco Design Award (FSA)',
    ],
  },
  {
    name: 'egn13',
    image: 'assets/images/cars/egn13.jpg',
    season: "2013",
    events: ['Formula Student Germany'],  
    details: [
      {
        title: 'Max. Speed',
        value: '135 kph',
      },
      {
        title: 'Acceleration 0-100 kph',
        value: '3.9 sec'
      },
      {
        title: 'Weight',
        value: '272 kg'
      }
    ],
  },
  {
    name: 'egn12',
    image: 'assets/images/cars/egn12.jpg',
    season: "2012",
    events: ['Formula Student Germany', 'Formula Student UK'],
    details: [
      {
        title: 'Max. Speed',
        value: '125 kph',
      },
      {
        title: 'Acceleration 0-100 kph',
        value: '4.4 sec'
      },
      {
        title: 'Weight',
        value: '325 kg'
      }
    ],
  },

]
