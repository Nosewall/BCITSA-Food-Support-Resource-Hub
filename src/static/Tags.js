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
    displayName: "North vancouver",
    color: "#1971BD",
    show: true,
    TopTen: true,
  },

  vancouver: {
    category: "Location",
    displayName: "Vancouver",
    color: "#254F73",
    show: true,
  },
  richmond: {
    category: "Location",
    displayName: "Richmond",
    color: "#920110",
    show: true,
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
  },
  newWest: {
    category: "Location",
    displayName: "New Westminster",
    color: "#BB7E15",
    show: false,
  },
  triCities: {
    category: "Location",
    displayName: "Tri-Cities",
    color: "#B6595B",
    show: false,
  },
  virtual: {
    category: "Location",
    displayName: "Virtual",
    color: "#B6595B",
    show: false,
  },
  // end of location
  groceries: {
    category: "Type",
    displayName: "Groceries",
    color: "rgba(218, 68, 68, 0.88)",
    show: true,
  },
  meals: {
    category: "Type",
    displayName: "Meals",
    color: "#2C8551",
    show: true,
  },
  hampers: {
    category: "Type",
    displayName: "Hampers",
    color: "#2C8551",
    show: true,
  },
  freshFood: {
    category: "Type",
    displayName: "Fresh Food",
    color: "#2C8551",
    show: false,
  },
  nutrition: {
    category: "Type",
    displayName: "Nutrition / Education",
    color: "#2C8551",
    show: false,
  },
  kitchen: {
    category: "Type",
    displayName: "Kitchen Programs",
    color: "#2C8551",
    show: false,
  },
  growingFood: {
    category: "Type",
    displayName: "Growing Food / Community Gardens",
    color: "#2C8551",
    show: false,
  },
  sustainable: {
    category: "Type",
    displayName: "Sustainable",
    color: "#2C8551",
    show: false,
  },
  financialAssistance: {
    category: "Type",
    displayName: "Financial Assistance",
    color: "#2C8551",
    show: false,
  },
  // end of Type category

  families: {
    category: "Group",
    displayName: "Families",
    color: "#2C8551",
    show: true,
  },
  newcomers: {
    category: "Group",
    displayName: "Newcomers",
    color: "#1E8843",
    show: true,
  },

  //end of Severity

  yes: {
    category: "Refferal Needed",
    displayName: "Yes",
    color: "#8660C3",
    show: true,
    TopTen: true,
  },
  no: {
    category: "Refferal Needed",
    displayName: "No",
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
