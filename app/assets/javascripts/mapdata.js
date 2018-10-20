var simplemaps_usmap_mapdata={
  main_settings: {
   //General settings
    width: "responsive", //'700' or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    border_color: "#ffffff",
    popups: "detect",
    
    //State defaults
    state_description: "coming soon!",
    state_color: "",
    state_hover_color: "#CCCCCC",
    state_url: "",
    border_size: "1.5",
    all_states_inactive: "no",
    all_states_zoomable: "no",
    
    //Location defaults
    location_description: "Add location markers using latitude and longitude!",
    location_color: "#2041D4",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_url: "",
    location_size: 25,
    location_type: "square",
    location_image_source: "frog.png",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",
    
    //Label defaults
    label_color: "#ffffff",
    label_hover_color: "#000000",
    label_size: 22,
    label_font: "Arial",
    hide_labels: "no",
    hide_eastern_labels: "no",
    manual_zoom: "no",
    back_image: "no",
    initial_back: "no",
    initial_zoom: -1,
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,
    
    //Popup settings
    popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",
    
    //Advanced settings
    div: "map",
    auto_load: "yes",
    url_new_tab: "yes",
    images_directory: "/static/lib/simplemaps/map_images/",
    fade_time: 0.1,
    import_labels: "no",
    link_text: "View Website",
    state_image_url: "",
    state_image_position: "",
    location_image_url: ""
  },
  state_specific: {
    HI: {
      name: "Hawaii",
      color: "#577BF2"
    },
    AK: {
      name: "Alaska",
      color: "#A0B5F7"
    },
    FL: {
      name: "Florida",
      color: "#ED6352"
    },
    NH: {
      name: "New Hampshire",
      color: "#EFCDCB"
    },
    VT: {
      name: "Vermont",
      color: "#A0B5F7"
    },
    ME: {
      name: "Maine",
      color: "#A0B5F7"
    },
    RI: {
      name: "Rhode Island",
      color: "#F2A29D"
    },
    NY: {
      name: "New York",
      color: "#A0B5F7"
    },
    PA: {
      name: "Pennsylvania",
      color: "#ED6352"
    },
    NJ: {
      name: "New Jersey",
      color: "#A0B5F7"
    },
    DE: {
      name: "Delaware",
      color: "#EFCDCB"
    },
    MD: {
      name: "Maryland",
      color: "#A0B5F7"
    },
    VA: {
      name: "Virginia",
      color: "#ED6352"
    },
    WV: {
      name: "West Virginia",
      color: "#F2A29D"
    },
    OH: {
      name: "Ohio",
      color: "#ED6352"
    },
    IN: {
      name: "Indiana",
      color: "#ED6352"
    },
    IL: {
      name: "Illinois",
      color: "#A0B5F7"
    },
    CT: {
      name: "Connecticut",
      color: "#577BF2"
    },
    WI: {
      name: "Wisconsin",
      color: "#ED6352"
    },
    NC: {
      name: "North Carolina",
      color: "#ED6352"
    },
    DC: {
      name: "District of Columbia",
      hide: "yes"
    },
    MA: {
      name: "Massachusetts",
      color: "#EFCDCB"
    },
    TN: {
      name: "Tennessee",
      color: "#ED6352"
    },
    AR: {
      name: "Arkansas",
      color: "#ED6352",
      url: '/arkansas',
      description: '<div id="bar-chart"><div class="graph"><ul class="y-axis"><li><span>1.25M</span></li><li><span>1M</span></li><li><span>750,000</span></li><li><span>500,000</span></li><li><span>250,000</span></li></ul><ul class="x-axis"<li><span>Anti-Choice</span></li><li><span>Pro-Choice</span></li></ul><div class="bars"><div class="bar-group"><div class="bar bar-1 stat-2" style="height: 18%;"><span>NARAL</span></div></div><div class="bar-group"><div class="bar bar-4 stat-1" style="height: 73%;"><span>Pro Life</span></div></div></div></div></div></div>'

    },
    MO: {
      name: "Missouri",
      color: "#ED6352"
    },
    GA: {
      name: "Georgia",
      color: "#ED6352"
    },
    SC: {
      name: "South Carolina",
      color: "#ED6352"
    },
    KY: {
      name: "Kentucky",
      color: "#ED6352"
    },
    AL: {
      name: "Alabama",
      color: "#ED6352"
    },
    LA: {
      name: "Louisiana",
      color: "#ED6352"
    },
    MS: {
      name: "Mississippi",
      color: "#ED6352"
    },
    IA: {
      name: "Iowa",
      color: "#EFCDCB"
    },
    MN: {
      name: "Minnesota",
      color: "#EFCDCB"
    },
    OK: {
      name: "Oklahoma",
      color: "#ED6352"
    },
    TX: {
      name: "Texas",
      color: "#ED6352"
    },
    NM: {
      name: "New Mexico",
      color: "#A0B5F7"
    },
    KS: {
      name: "Kansas",
      color: "#ED6352"
    },
    NE: {
      name: "Nebraska",
      color: "#ED6352"
    },
    SD: {
      name: "South Dakota",
      color: "#ED6352"
    },
    ND: {
      name: "North Dakota",
      color: "#ED6352"
    },
    WY: {
      name: "Wyoming",
      color: "#F2A29D"
    },
    MT: {
      name: "Montana",
      color: "#577BF2"
    },
    CO: {
      name: "Colorado",
      color: "#EFCDCB"
    },
    UT: {
      name: "Utah",
      color: "#ED6352"
    },
    AZ: {
      name: "Arizona",
      color: "#ED6352"
    },
    NV: {
      name: "Nevada",
      color: "#A0B5F7"
    },
    OR: {
      name: "Oregon",
      color: "#577BF2"
    },
    WA: {
      name: "Washington",
      color: "#577BF2",
      url: '/washington',
      description: '<div id="bar-chart"><div class="graph"><ul class="y-axis"><li><span>1.25M</span></li><li><span>1M</span></li><li><span>750,000</span></li><li><span>500,000</span></li><li><span>250,000</span></li></ul><ul class="x-axis"<li><span>Anti-Choice</span></li><li><span>Pro-Choice</span></li></ul><div class="bars"><div class="bar-group"><div class="bar bar-1 stat-2" style="height: 83%;"><span>NARAL</span></div></div><div class="bar-group"><div class="bar bar-4 stat-1" style="height: 18%;"><span>Pro Life</span></div></div></div></div></div></div>'
    },
    CA: {
      name: "California",
      color: "#577BF2"
    },
    MI: {
      name: "Michigan",
      color: "#ED6352"
    },
    ID: {
      name: "Idaho",
      color: "#ED6352"
    },
    GU: {
      name: "Guam",
      hide: "yes"
    },
    VI: {
      name: "Virgin Islands",
      hide: "yes"
    },
    PR: {
      name: "Puerto Rico",
      hide: "yes"
    },
    MP: {
      name: "Northern Mariana Islands",
      hide: "yes"
    },
    AS: {
      name: "American Samoa",
      hide: "yes"
    }
  },
  locations: {},
  labels: {
    NH: {
      parent_id: "NH",
      x: "932",
      y: "183",
      width: 45
    },
    VT: {
      parent_id: "VT",
      x: "883",
      y: "243",
      width: 45
    },
    RI: {
      parent_id: "RI",
      x: "932",
      y: "273",
      width: 45
    },
    NJ: {
      parent_id: "NJ",
      x: "883",
      y: "273",
      width: 45
    },
    DE: {
      parent_id: "DE",
      x: "883",
      y: "303",
      width: 45
    },
    MD: {
      parent_id: "MD",
      x: "932",
      y: "303",
      width: 45
    },
    DC: {
      parent_id: "DC",
      x: "884",
      y: "332",
      width: 45
    },
    MA: {
      parent_id: "MA",
      x: "932",
      y: "213",
      width: 45
    },
    CT: {
      parent_id: "CT",
      x: "932",
      y: "243",
      width: 45
    },
    HI: {
      parent_id: "HI",
      x: 305,
      y: 565
    },
    AK: {
      parent_id: "AK",
      x: "113",
      y: "495"
    },
    FL: {
      parent_id: "FL",
      x: "773",
      y: "510"
    },
    ME: {
      parent_id: "ME",
      x: "893",
      y: "85"
    },
    NY: {
      parent_id: "NY",
      x: "815",
      y: "158"
    },
    PA: {
      parent_id: "PA",
      x: "786",
      y: "210"
    },
    VA: {
      parent_id: "VA",
      x: "790",
      y: "282"
    },
    WV: {
      parent_id: "WV",
      x: "744",
      y: "270"
    },
    OH: {
      parent_id: "OH",
      x: "700",
      y: "240"
    },
    IN: {
      parent_id: "IN",
      x: "650",
      y: "250"
    },
    IL: {
      parent_id: "IL",
      x: "600",
      y: "250"
    },
    WI: {
      parent_id: "WI",
      x: "575",
      y: "155"
    },
    NC: {
      parent_id: "NC",
      x: "784",
      y: "326"
    },
    TN: {
      parent_id: "TN",
      x: "655",
      y: "340"
    },
    AR: {
      parent_id: "AR",
      x: "548",
      y: "368"
    },
    MO: {
      parent_id: "MO",
      x: "548",
      y: "293"
    },
    GA: {
      parent_id: "GA",
      x: "718",
      y: "405"
    },
    SC: {
      parent_id: "SC",
      x: "760",
      y: "371"
    },
    KY: {
      parent_id: "KY",
      x: "680",
      y: "300"
    },
    AL: {
      parent_id: "AL",
      x: "655",
      y: "405"
    },
    LA: {
      parent_id: "LA",
      x: "550",
      y: "435"
    },
    MS: {
      parent_id: "MS",
      x: "600",
      y: "405"
    },
    IA: {
      parent_id: "IA",
      x: "525",
      y: "210"
    },
    MN: {
      parent_id: "MN",
      x: "506",
      y: "124"
    },
    OK: {
      parent_id: "OK",
      x: "460",
      y: "360"
    },
    TX: {
      parent_id: "TX",
      x: "425",
      y: "435"
    },
    NM: {
      parent_id: "NM",
      x: "305",
      y: "365"
    },
    KS: {
      parent_id: "KS",
      x: "445",
      y: "290"
    },
    NE: {
      parent_id: "NE",
      x: "420",
      y: "225"
    },
    SD: {
      parent_id: "SD",
      x: "413",
      y: "160"
    },
    ND: {
      parent_id: "ND",
      x: "416",
      y: "96"
    },
    WY: {
      parent_id: "WY",
      x: "300",
      y: "180"
    },
    MT: {
      parent_id: "MT",
      x: "280",
      y: "95"
    },
    CO: {
      parent_id: "CO",
      x: "320",
      y: "275"
    },
    UT: {
      parent_id: "UT",
      x: "223",
      y: "260"
    },
    AZ: {
      parent_id: "AZ",
      x: "205",
      y: "360"
    },
    NV: {
      parent_id: "NV",
      x: "140",
      y: "235"
    },
    OR: {
      parent_id: "OR",
      x: "100",
      y: "120"
    },
    WA: {
      parent_id: "WA",
      x: "130",
      y: "55"
    },
    ID: {
      parent_id: "ID",
      x: "200",
      y: "150"
    },
    CA: {
      parent_id: "CA",
      x: "79",
      y: "285"
    },
    MI: {
      parent_id: "MI",
      x: "663",
      y: "185"
    },
    PR: {
      parent_id: "PR",
      x: "620",
      y: "545"
    },
    GU: {
      parent_id: "GU",
      x: "550",
      y: "540"
    },
    VI: {
      parent_id: "VI",
      x: "680",
      y: "519"
    },
    MP: {
      parent_id: "MP",
      x: "570",
      y: "575"
    },
    AS: {
      parent_id: "AS",
      x: "665",
      y: "580"
    }
  },
  regions: {}
};