import bcitsaLogo from "./logos/bcitsa.png";

/*
    ##last updated: May, 7, 2019##
    {
        name: "", 
        description: "",
        logo: "",
        tags: [],
        phone:"",
        social: {
            "website": "",
            "facebook": "",
            "twitter": "",
            "instagram": "",
        },
        email: "",
        address: "",
        hours: {
            "monday": "",
            "tuesday": "",
            "wednesday": "",
            "thursday": "",
            "friday": "",
            "saturday": "",
            "sunday": "",
            "others": "",
        },
        notes: ""
    }
*/

const resources = [
  // {
  //   name: "Suicide Attempt Follow-up, Education & Research ",
  //   description:
  //     "S.A.F.E.R. is a free, time-limited counselling service offered at Mental Health and Substance Use Outpatient Services. Intake is through the Access and Assessment Centre.",
  //   logo: VCHLogo,
  //   background: "",
  //   tags: [
  //     "free",
  //     "free4UBC",
  //     "general",
  //     "suicidal",
  //     "depressionAnxiety",
  //     "low",
  //     "medium",
  //     "high",
  //     "appointment",
  //     "walkIn",
  //     "phone",
  //     "professional",
  //   ],
  //   social: {
  //     website:
  //       "http://www.vch.ca/Pages/Suicide-Attempt-Follow-up,-Education---Research-SAFER.aspx",
  //   },
  //   phone: "604-675-3700",
  //   address: "803 West 12th Avenue \n Vancouver,BC \n V5Z 1N1",
  //   hours: {
  //     monday: "7:30am-11:00pm",
  //     tuesday: "7:30am-11:00pm",
  //     wednesday: "7:30am-11:00pm",
  //     thursday: "7:30am-11:00pm",
  //     friday: "7:30am-11:00pm",
  //     saturday: "7:30am-11:00pm",
  //     sunday: "7:30am-11:00pm",
  //   },
  //   notes:
  //     "Call the Access and Assessment Centre at 604-675-3700 to connect with S.A.F.E.R.",
  // },
  {
    name: "BCITSA Food Pantry", 
    description: "Students who need immediate food support can access free, healthy food through the Student Association Food Pantry, located in SE2, 2nd floor, next to the elevator <Wellness Link when page complete>",
    logo: bcitsaLogo,
    tags: [
      "burnaby",
      "groceries",
      "free",
      "no"
    ],
    social: {
        "website": "https://www.bcitsa.ca/wellness/",
        "facebook": "https://www.facebook.com/BCITSA",
        "instagram": "https://www.instagram.com/bcitsa/",
    },
    email: "wellness@bcitsa.ca",
    address: "BCIT Burnaby Campus, Building SE2, 2nd floor next to the elevator",
},
{
  name: "BCITSA Community Fridge", 
  description: "Located on the 2nd floor of SE2 between the Stand and the Elevator. Take what you need, give what you can",
  logo: bcitsaLogo,
  tags: [
    "burnaby",
    "groceries",
    "free",
    "no"
  ],
  social: {
    "website": "https://www.bcitsa.ca/wellness/",
    "facebook": "https://www.facebook.com/BCITSA",
    "instagram": "https://www.instagram.com/bcitsa/",
  },
  email: "wellness@bcitsa.ca",
  address: "BCIT Burnaby Campus, Building SE2, 2nd floor next to the elevator",
},
{
  name: "BCITSA Emergency Food Supports", 
  description: "Those unable to attend the BCITSA Food Pantry due to accessibility or location concerns are urged to submit a Wellness Request Form to discuss alternative supports. ",
  logo: bcitsaLogo,
  tags: [
    "free",
    "virtual",
    "groceries",
    "meals",
    "hampers",
    "freshFood",
    "nutrition",
    "kitchen",
    "financialAssistance",
    "yes"
  ],
  social: {
      "website": "https://app.smartsheet.com/b/form/e3bfced7574a4bada4ed4a233e748900 ",
      "facebook": "https://www.facebook.com/BCITSA",
      "instagram": "https://www.instagram.com/bcitsa/",
  },
  email: "",
  address: "",
  notes: "Email wellness@bcitsa.ca with any questions you may have"
},
{
  name: "BCITSA Nutrition Coaching", 
  description: "Book a free 50-minute consultation with a nutrition coach to discuss your health and nutrition needs.",
  logo: bcitsaLogo,
  tags: [
    "free",
    "virtual",
    "nutrition",
    "no"
  ],
  social: {
      "website": "https://app.smartsheet.com/b/form/e3bfced7574a4bada4ed4a233e748900 ",
      "facebook": "https://www.facebook.com/BCITSA",
      "instagram": "https://www.instagram.com/bcitsa/",
  },
  email: "wellness@bcitsa.ca",
},
{
  name: "Indigenous Initiatives Garden", 
  description: "Located in the courtyard between SW3 and SW1, the Indigenous Garden provides a peaceful green space and dedicated area that cultivates a range of Indigenous plants.",
  logo: "",
  tags: [
    "burnaby",
    "growingFood",
    "sustainable",
    "free",
    "no"
  ],
  social: {
      "instagram": "https://www.instagram.com/indigenous_bcit/ ",
  },
  email: "gathering_place@bcit.ca",
  address: "BCIT Burnaby Campus, in the courtyard between SW01 and SW03",
  notes: "For additional information, resources, and guidance contact the Indigenous Initiatives office gathering_place@bcit.ca"
},
{
  name: "Greater Vancouver Food Bank - Burnaby Location", 
  description: "The Greater Vancouver Food Bank was set up as a temporary relief to the hunger crisis in 1983, but the need still exists today. We receive no ongoing government funding and exist solely through the generosity of the public, our industry partners, and applicable grants.  Each month we provide healthy food to around 10,000 individuals and families in need, and 120 Community Agency Partners across Vancouver, Burnaby, New Westminster and the North Shore. Our mission is to provide healthy food to those in need.",
  logo: "",
  tags: ["burnaby", "free", "no", "groceries", "hampers"],
  phone:"604-876-3601 ",
  social: {
      "website": "https://www.foodbank.bc.ca/",
      "instagram": "https://www.instagram.com/vanfoodbank/"
  },
  email: "reception@foodbank.bc.ca",
  address: "8345 Winston Street, Burnaby",
  notes: "Registration required. Call 604-876-3601 option 6 to schedule a registration appointment. "
},
{
  name: "Greater Vancouver Food Bank - Vancouver Location", 
  description: "The Greater Vancouver Food Bank was set up as a temporary relief to the hunger crisis in 1983, but the need still exists today. We receive no ongoing government funding and exist solely through the generosity of the public, our industry partners, and applicable grants.  Each month we provide healthy food to around 10,000 individuals and families in need, and 120 Community Agency Partners across Vancouver, Burnaby, New Westminster and the North Shore. Our mission is to provide healthy food to those in need.",
  logo: "",
  tags: ["vancouver", "free", "no", "groceries", "hampers"],
  phone:"604-876-3601 ",
  social: {
      "website": "https://www.foodbank.bc.ca/",
      "instagram": "https://www.instagram.com/vanfoodbank/"
  },
  email: "reception@foodbank.bc.ca",
  address: "295 Terminal Avenue, Vancouver",
  notes: "Registration required. Call 604-876-3601 option 6 to schedule a registration appointment. "
},
{
  name: "Greater Vancouver Food Bank - New West Location", 
  description: "The Greater Vancouver Food Bank was set up as a temporary relief to the hunger crisis in 1983, but the need still exists today. We receive no ongoing government funding and exist solely through the generosity of the public, our industry partners, and applicable grants.  Each month we provide healthy food to around 10,000 individuals and families in need, and 120 Community Agency Partners across Vancouver, Burnaby, New Westminster and the North Shore. Our mission is to provide healthy food to those in need.",
  logo: "",
  tags: ["newWest", "free", "no", "groceries", "hampers"],
  phone:"604-876-3601 ",
  social: {
      "website": "https://www.foodbank.bc.ca/",
      "instagram": "https://www.instagram.com/vanfoodbank/"
  },
  email: "reception@foodbank.bc.ca",
  address: "Olivet Church – 613 Queens Avenue, New Westminster ",
  notes: "Registration required. Call 604-876-3601 option 6 to schedule a registration appointment. "
},
{
  name: "Greater Vancouver Food Bank - North Vancouver Location", 
  description: "The Greater Vancouver Food Bank was set up as a temporary relief to the hunger crisis in 1983, but the need still exists today. We receive no ongoing government funding and exist solely through the generosity of the public, our industry partners, and applicable grants.  Each month we provide healthy food to around 10,000 individuals and families in need, and 120 Community Agency Partners across Vancouver, Burnaby, New Westminster and the North Shore. Our mission is to provide healthy food to those in need.",
  logo: "",
  tags: ["northVancouver", "free", "no", "groceries", "hampers"],
  phone:"604-876-3601 ",
  social: {
      "website": "https://www.foodbank.bc.ca/",
      "instagram": "https://www.instagram.com/vanfoodbank/"
  },
  email: "reception@foodbank.bc.ca",
  address: "North Shore Neighbourhood House – 225 East 2nd Street, North Vancouver",
  notes: "Registration required. Call 604-876-3601 option 6 to schedule a registration appointment. "
},
{
  name: "Surrey Food Bank", 
  description: "The Surrey Food Bank provides food to families living in Surrey and North Delta. We pride ourselves in supplying nutritious food in a respectful and dignified environment. In addition, we believe it is our responsibility to connect our clients to other community services as a means of helping them become self-sufficient. We take pride that we “Invite, Inform, Involve and Inspire” our community.",
  logo: "",
  tags: ["surrey", "free", "no", "groceries", "hampers", "families"],
  phone:"604-581-5443",
  social: {
      "website": "http://www.surreyfoodbank.org/",
      "instagram": "https://www.instagram.com/surreyfoodbank/"
  },
  email: "info@surreyfoodbank.org",
  address: "Unit 1 – 13478 78th Ave, Surrey, V3W 8J6",
  notes: "Registration Required. Call 604-581-5443 to schedule a registration appointment."
},
{
  name: "Langley Food Bank", 
  description: "The Langley Food Bank is an incorporated society, registered with Revenue Canada as a non-profit organization, and is entirely funded through the support of local churches, organizations, and individuals. We receive very minimal support from a few local government agencies who give us yearly grants.",
  logo: "",
  tags: ["langley", "free", "no", "groceries", "hampers", "families"],
  phone:"604-533-0671",
  social: {
      "website": "https://langleyfoodbank.com/",
      "instagram": "https://www.instagram.com/thelangleyfoodbank/ "
  },
  email: "info@langleyfoodbank.com",
  address: "5768 203 St., Langley B.C., Canada V3A 1W3",
  notes: "Registration required. To learn about to application process, visit https://staging.langleyfoodbank.com/client/"
},
{
  name: "Richmond Food Bank", 
  description: "The Richmond Food Bank is a dynamic hub that connects people, food, and services that are essential to health and well-being – the hallmark of a caring community. The Richmond Food Bank gives healthy and nutritionally-balanced food to more than 2200 people in a typical week, providing Richmond residents with healthy food choices and connecting our clients to services that address the root causes of poverty.",
  logo: "",
  tags: ["richmond", "free", "no", "groceries", "hampers"],
  phone:"604-271-5609",
  social: {
      "website": "http://richmondfoodbank.org/",
      "instagram": "https://www.instagram.com/richmondfoodbank/",
      "facebook": "https://www.facebook.com/RichmondFoodBank"
  },
  email: "info@richmondfoodbank.org",
  address: "100-5800 Cedarbridge Way, Richmond, BC, V6X 2A7 ",
  notes: "Registration required. To register online, visit https://richmondfoodbank.org/get-help-our-services-and-covid-19-response/"
},
{
  name: "Quest Food Exchange", 
  description: "Low-cost grocery store operating on a referral-only basis – email wellness@bcitsa.ca to begin the referral process: https://www.questoutreach.org/",
  logo: "",
  tags: ["groceries", "virtual", "burnaby", "newWest", "northVancouver", "surrey", "vancouver", "yes"],
  phone:"604-602-0186",
  social: {
      "website": "https://www.questoutreach.org/ ",
      "instagram": "https://www.instagram.com/questfoodexchange/",
  },
  email: "info@questoutreach.org",
  address: "Multiple locations on the Lower Mainland.",
  notes: "Referral is required prior to membership."
},
{
  name: "BC Farmers’ Market Nutrition Coupon Program", 
  description: "Farmers Market coupons to lower-income families, pregnant people and seniors participating in their programs. https://bcfarmersmarket.org/coupon-program/where-it-operates/",
  logo: "",
  tags: ["burnaby", "newWest", "northVancouver", "surrey", "vancouver", "richmond", "triCities", "freshFood", "families", "yes"],
  phone:"604-734-9797",
  social: {
      "website": "https://bcfarmersmarket.org/coupon-program/where-it-operates/ ",
      "instagram": "https://www.instagram.com/bcfarmersmarket/ ",
  },
  email: "info@bcfarmersmarket.org ",
  address: "Multiple locations across the province",
  notes: "You must connect with a local community partner to join the program."
},
{
  name: "Ryan’s Rainbow Emergency Food Outreach", 
  description: "Provides weekly grocery hampers.",
  logo: "",
  tags: ["groceries", "hampers", "burnaby", "no", "freshFood",],
  phone:"604-761-4357",
  social: {
      "website": "https://ryansrainbowemergencyfoodoutreach.business.site/ ",
      "instagram": "https://www.instagram.com/rremergencyfoodoutreach/ ",
  },
  email: "No email, please call our text for information",
  address: "1600 Cliff Avenue, Burnaby, BC V5A 2K2",
  notes: "Call or text 604-761-4357 to learn more."
},
{
  name: "Food Stash Rescued Food Market", 
  description: "Zero waste grocery market, stocked with nutritious surplus food. Choose what you want, pay what you feel. Every Friday, 3:30-6:00PM. https://www.foodstash.ca/market ",
  logo: "",
  tags: ["vancouver", "groceries", "sustainable", "freshFood", "free", "lowCost", "no"],
  phone:"604-862-9701",
  social: {
      "website": "https://www.foodstash.ca/market ",
      "instagram": "https://www.instagram.com/foodstashfoundation/ ",
  },
  email: "coordinator@foodstash.ca",
  address: "340 West 2nd Avenue, Vancouver, BC",
  notes: "The market is open to everyone regardless of income and serves as a space to celebrate food and promote an equitable circular economy."
},
{
  name: "House of Omeed", 
  description: "Provides free culturally diverse food to low-income newcomers every week. Must book an appointment online or by phone.",
  logo: "",
  tags: ["burnaby", "groceries", "freshFood", "sustainable", "free", "yes"],
  phone:"604-565-4464",
  social: {
      "website": "https://houseofomeed.ca/",
      "instagram": "https://www.instagram.com/foodstashfoundation/ ",
  },
  email: "office@houseofomeed.ca ",
  address: "Unit 230, 3355 North Rd, Burnaby, BC,  V3J 7T9",
  notes: "Registration required to access this program."
},
{
  name: "Muslim Food Bank", 
  description: "Provides monthly food hampers designed to cater to specific dietary and cultural needs (vegan or religious dietary restrictions).",
  logo: "",
  tags: ["burnaby", "surrey", "freshFood", "hampers", "groceries", "families", "free", "no"],
  phone:"1.866.248.3868 Ext 1",
  social: {
      "website": "https://muslimfoodbank.com/food-bank/ ",
      "instagram": "https://www.instagram.com/muslimfoodbank/"
  },
  email: "coordinator@muslimfoodbank.com",
  address: "104-12941 115 Ave, Surrey,  BC, V3R 0E2",
  notes: "Registration required to access this program."
},
{
  name: "Saige Food Bank & Community Kitchen", 
  description: "Provides a no barrier safe space for transgender and gender non-conforming or queer individuals to access healthy food. ",
  logo: "",
  tags: ["freshFood", "groceries", "kitchen", "vancouver", "no"],
  phone:"Please email with any questions.",
  social: {
      "website": "https://saigecommunityfoodbank.com/ ",
      "facebook": "https://www.facebook.com/Saige-Community-Food-Bank-222007237889084/",
  },
  email: "info@saigecommunityfoodbank.com",
  address: "2425 Oxford St, Vancouver, BC, V5L 5C1",
  notes: "Visit https://saigecommunityfoodbank.com/dates/ to see upcoming days of operation. Location is wheelchair accessible. "
},
{
  name: "SHARE Food Bank", 
  description: "Provides weekly food hampers at their Port Moody, Coquitlam and Port Coquitlam locations. ",
  logo: "",
  tags: ["triCities", "freshFood", "kitchen"],
  phone:"604.540.9161",
  social: {
      "website": "https://sharesociety.ca/share-food-bank",
      "instagram": "https://www.instagram.com/sharesociety/ "
  },
  address: "Various locations across Tri-Cities",
  notes: "Please use their contact form to get in touch: https://sharesociety.ca/contact"
},

];

export default resources;
