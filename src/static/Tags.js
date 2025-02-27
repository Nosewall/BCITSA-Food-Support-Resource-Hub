import _ from "underscore";

const tags = {
  free: {
    category: "cost",
    displayName: "Free",
    color: "green",
    show: true,
    TopTen: true,
  },
  lowCost: {
    category: "cost",
    displayName: "Low-Cost",
    show: true,
    TopTen: false,
  },

  // end of cost category
  
  northVancouver: {
    category: "Location",
    displayName: "North Vancouver",
    color: "#1971BD",
    show: true,
    TopTen: true,
  },
  vancouver: {
    category: "Location",
    displayName: "Vancouver",
    color: "#254F73",
    show: true,
    TopTen: true,
  },
  richmond: {
    category: "Location",
    displayName: "Richmond",
    color: "#920110",
    show: true,
    TopTen: true,
  },
  burnaby: {
    category: "Location",
    displayName: "Burnaby",
    color: "#B6595B",
    show: true,
    TopTen: true,
  },
  surrey: {
    category: "Location",
    displayName: "Surrey",
    color: "#1A79A8",
    show: true,
    TopTen: true,
  },
  newWest: {
    category: "Location",
    displayName: "New Westminster",
    color: "#BB7E15",
    show: true,
    TopTen: true,
  },
  triCities: {
    category: "Location",
    displayName: "Tri-Cities",
    color: "#B6595B",
    show: true,
    TopTen: true,
  },
  langley: {
    category: "Location",
    displayName: "Langley",
    color: "#63d4ce",
    show: true,
    TopTen: true,
  },
  virtual: {
    category: "Location",
    displayName: "Virtual",
    color: "#B6595B",
    show: true,
    TopTen: true,
  },

  // end of location

  groceries: {
    category: "Type",
    displayName: "Groceries",
    color: "rgba(218, 68, 68, 0.88)",
    show: true,
    TopTen: true,
  },
  meals: {
    category: "Type",
    displayName: "Meals",
    color: "#2C8551",
    show: true,
    TopTen: true,
  },
  hampers: {
    category: "Type",
    displayName: "Hampers",
    color: "#75DDDD",
    show: true,
    TopTen: true,
  },
  freshFood: {
    category: "Type",
    displayName: "Fresh Food",
    color: "#84C7D0",
    show: true,
    TopTen: true,
  },
  nutrition: {
    category: "Type",
    displayName: "Nutrition / Education",
    color: "#9297C4",
    show: true,
    TopTen: true,
  },
  kitchen: {
    category: "Type",
    displayName: "Kitchen Programs",
    color: "#9368b7",
    show: true,
    TopTen: true,
  },
  growingFood: {
    category: "Type",
    displayName: "Growing Food / Community Gardens",
    color: "#aa3e98",
    show: true,
    TopTen: true,
  },
  sustainable: {
    category: "Type",
    displayName: "Sustainable",
    color: "#de6b48",
    show: true,
    TopTen: true,
  },
  financialAssistance: {
    category: "Type",
    displayName: "Financial Assistance",
    color: "#F7DD72",
    show: true,
    TopTen: true,
  },

  // end of Type category

  families: {
    category: "Group",
    displayName: "Families",
    color: "#5B3758",
    show: true,
    TopTen: true,
  },
  newcomers: {
    category: "Group",
    displayName: "Newcomers",
    color: "#1E8843",
    show: true,
  },

  //end of Severity

  yes: {
    category: "Referral Needed",
    displayName: "Referral Needed",
    color: "#8660C3",
    show: true,
    TopTen: true,
  },
  no: {
    category: "Referral Needed",
    displayName: "No Referral Needed",
    color: "#000000",
    show: true,
    TopTen: true,
  },
};

const returnTags = {
  getAllTags: () => tags,
  getAllTagKeys: () => _.keys(tags),
  getCategories: () => _.uniq(_.map(_.values(tags), (obj) => obj.category)),
  getDisplayNameForTag: (tag) => tags[tag].displayName,
  getTopValue: (tag) => tags[tag].TopTen,
  getColorForTag: (tag) => tags[tag].color || "#aaaaaa",
};

export default returnTags;
