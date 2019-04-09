/*
    Empty template:
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
    }
*/

export default [
    {
        name: "UBC Counselling Service", 
        description: "Professional counselling for students feeling  persistently stressed, anxious, or sad.",
        logo: "https://ubyssey.storage.googleapis.com/media/images/2016/11/jack-skate-1-2_A1HlLVn-medium.jpg",
        tags: ["onCampus", "professional", "appointment", "walkIn"],
        phone:"604-822-3811",
        social: {
            "website": "https://students.ubc.ca/health/counselling-services",
        },
        address: "Brock Hall Room 1040\n1874 East Mall\nVancouver, BC V6T 1Z1",
        hours: {
            "monday": "8:30am-3:30pm",
            "tuesday": "8:30am-3:30pm",
            "wednesday": "8:30am-6:00pm",
            "thursday": "10:00am-3:30pm",
            "friday": "8:30am-3:30pm",
        }
    },
    {
        name: "UBC Yoga Club", 
        description: "We provide affordable and accessible yoga to the UBC and greater Vancouver community to support mental health and physical health", 
        logo: "https://ubcyogaclub.files.wordpress.com/2014/12/10486_10151094924483521_1103997231_n-1.png",
        tags: ["onCampus", "generalAwareness"], 
        phone:"n/a",
        social: {
            "website": "ubcyogaclub.com",
        }, 
        email: "info.ubcyogaclub@gmail.com",
        address: "AMS Student Nest\n6133 University Blvd\nVancouver, BC V6T 1Z1", 
        hours:{
            "others": "Our class schedule is available at ubcyogaclub.com/schedule with the most current times and class locations",
        }
    },
    {
        name: "University Multifaith Chaplains Association", 
        description: "One-on-one pastoral/spiritual counselling and opportunities to engage in exploring in the faith tradition they represent (Buddhist, Muslim, Jewish, Christian, and Bahá'í).",
        logo: "https://scontent.fyvr3-1.fna.fbcdn.net/v/t1.0-9/11173354_939496622751482_114544511837677719_n.jpg?_nc_cat=108&_nc_ht=scontent.fyvr3-1.fna&oh=1eb4418bec882fffd6fd47326e0353a6&oe=5D04DB48",
        tags: ["onCampus", "professional", "walkIn", "spiritual"],
        phone:"n/a",
        social: {
            "website": "https://students.ubc.ca/campus-life/religion-spirituality/chaplains",
            "facebook": "https://www.facebook.com/UMCAssociation/",
        },
        address: "University Multifaith Chaplains Association\nUBC Life Room 1303\n6000 Student Union Blvd\nVancouver, BC V6T 1Z1",
    },
    {
        name: "UBC Student Health Service", 
        description: "A wide range of health assessments and treatments provided by doctors, nurses, and specialists. ",
        logo: "https://thethunderbird.ca/wp-content/uploads//2016/11/StudentHealth1-1-1024x680.jpg",
        tags: ["onCampus", "medical", "appointment", "walkIn"],
        phone:"604-822-7011",
        social: {
            "website": "https://students.ubc.ca/health/student-health-service",
        },
        email: "student.health@ubc.ca",
        address: "Student Health Services\nUBC Hospital Room M334\n2211 Wesbrook Mall\nVancouver, BC V6T 2A1",
        hours: {
            "monday": "8:00am-4:00pm",
            "tuesday": "8:00am-4:00pm",
            "wednesday": "8:00am-8:00pm",
            "thursday": "9:00am-4:00pm",
            "friday": "8:00am-4:00pm",
            "saturday": "8:00am-4:00pm",
        },
    },
    {
        name: "Centre for Accessibility", 
        description: "Facilitates accommodations and programs to remove barriers for students with disabilities and medical conditions.",
        logo: "https://ubyssey.storage.googleapis.com/media/images/2016/10/20161026Cherihan_Hassun-medium.jpg",
        tags: ["onCampus", "professional", "appointment", "walkIn"], // filters to be added: disability
        phone:"604-822-5844",
        social: {
            "website": "https://students.ubc.ca/about-student-services/centre-for-accessibility",
        },
        email: "info.accessibility@ubc.ca",
        address: "Brock Hall\nURoom 1203\n1874 East Mall\nVancouver, BC V6T 1Z1",
        hours: {
            "monday": "8:30am-4:30pm",
            "tuesday": "8:30am-5:00pm",
            "wednesday": "8:30am-4:30pm",
            "thursday": "8:30am-4:00pm",
            "friday": "8:30am-4:30pm",
            "saturday": "closed",
            "sunday": "closed",
        },
    },
    {
        name: "University Village Medical Clinic - UBC Village", 
        description: "Walk-in medical clinic located on Allison Road in UBC Village.",
        logo: "http://www.universityvillageclinic.com/DSC_0206resize.jpg",
        tags: ["onCampus", "medical", "walkIn"],
        phone:"604-222-2273 (ext. 2)",
        social: {
            "website": "http://www.universityvillageclinic.com/",
        },
        email: "n/a",
        address: "#228 2155 Allison Road\nVancouver, BC V6T 1T5",
        hours: {
            "monday": "8:00am-6:00pm",
            "tuesday": "8:00am-6:00pm",
            "wednesday": "8:00am-6:00pm",
            "thursday": "8:00am-6:00pm",
            "friday": "8:00am-6:00pm",
            "saturday": "10:00am-4:00pm",
            "sunday": "closed",
        },
    },
    {
        name: "University Village Medical Clinic - Wesbrook Village", 
        description: "Walk-in medical clinic located on Birney Avenue in Wesbrook Village.",
        logo: "http://www.universityvillageclinic.com/DSC_0226resize.jpg",
        tags: ["onCampus", "medical", "walkIn"],
        phone:"604-222-2273 (ext. 1)",
        social: {
            "website": "http://www.universityvillageclinic.com/",
        },
        email: "n/a",
        address: "5933 Birney Avenue\nVancouver, BC V6T 1W5",
        hours: {
            "monday": "8:00am-6:00pm",
            "tuesday": "8:00am-4:00pm",
            "wednesday": "8:00am-4:00pm",
            "thursday": "8:00am-4:00pm",
            "friday": "8:00am-4:00pm",
            "saturday": "closed",
            "sunday": "closed",
        },
    },
    {
        name: "Nurses on Campus", 
        description: "Booths around campus where you can get personalized tips, resources, and health advice from registered nurses.",
        logo: "http://robstef.com/wrk/uploads/2018/03/IMG_2794_2opt.jpg",
        tags: ["onCampus", "medical", "walkIn"],
        phone:"604-822-7011",
        social: {
            "website": "https://students.ubc.ca/health/student-health-service/nurse-campus",
        },
        email: "student.health@ubc.ca",
        address: "Dependent on Schedule - Refer to website",
        hours: {
            "monday": "12:00pm-6:00pm",
            "tuesday": "10:00am-6:00pm",
            "wednesday": "12:00pm-6:00pm",
            "thursday": "12:00pm-6:00pm",
            "friday": "closed",
            "saturday": "closed",
            "sunday": "closed",
        },
    },
    {
        name: "UBC Psychology Clinic", 
        description: "The UBC Psychology Clinic offers professional psychological services in the form of (mostly) individual therapy and group treatment.",
        logo: "https://www.indstate.edu/cas/sites/arts.indstate.edu/files/Psych-Clinic/Psych1_0.jpg",
        tags: ["onCampus", "professional", "appointment"],
        phone:"604-822-3005",
        social: {
            "website": "https://clinic.psych.ubc.ca/",
        },
        email: "clinic@psych.ubc.ca",
        address: "Douglas T. Kenny Building\n2136 West Mall\nVancouver, BC V6T 1Z4",
        hours: {
            "monday": "n/a",
            "tuesday": "n/a",
            "wednesday": "n/a",
            "thursday": "n/a",
            "friday": "n/a",
            "saturday": "n/a",
            "sunday": "n/a",
        },
    },
    {
        name: "Wellness Centre", 
        description: "Speak with and ask Wellness Peer Educators about everyday concerns related to health, relationships, and workload.",
        logo: "https://i.imgur.com/KwUsppr.jpg",
        tags: ["onCampus", "peer", "walkIn"],
        phone:"604-822-8450",
        social: {
            "website": "https://students.ubc.ca/health/wellness-centre",
        },
        email: "wellness.centre@ubc.ca",
        address: "Wellness Centre\nUBC Life Building\nRoom 1400\n6138 Student Union Blvd\nVancouver, BC V6T 1Z3",
        hours: {
            "monday": "10:00pm-5:00pm",
            "tuesday": "10:00pm-4:00pm",
            "wednesday": "10:00pm-5:00pm",
            "thursday": "10:00pm-5:00pm",
            "friday": "10:00pm-5:00pm",
            "saturday": "closed",
            "sunday": "closed",
        },
    },
    {
        name: "AMS Speakeasy", 
        description: "Speakeasy provides free, confidential, one-on-one peer support for UBC students and staff and helps connect students to other resources.",
        logo: "https://cdn-az.allevents.in/banners/81acff4f3843844b6f526bf5ca6ee7af",
        tags: ["onCampus", "walkIn"],
        phone:"604-822-9246",
        social: {
            "website": "https://www.ams.ubc.ca/student-services/speakeasy/",
        },
        email: "speak@ams.ubc.ca",
        address: "UBC AMS Nest\nRoom 3125",
        hours: {
            "monday": "10:00pm-6:00pm",
            "tuesday": "10:00pm-6:00pm",
            "wednesday": "10:00pm-6:00pm",
            "thursday": "10:00pm-6:00pm",
            "friday": "10:00pm-6:00pm",
            "saturday": "closed",
            "sunday": "closed",
        },
    },
    {
        name: "AMS Sexual Assault Support Centre (SASC)", 
        description: "Crisis/short-term assistance, support groups, and advocacy for survivors of sexualized violence.",
        logo: "http://amssasc.ca/wp-content/uploads/2015/08/logo.png",
        tags: ["onCampus", "professional", "appointment", "walkIn"], //add: sexualHealth
        phone:"604-827-5180",
        social: {
            "website": "https://amssasc.ca/",
            "facebook": "https://www.facebook.com/AMSSASCUBC/"
        },
        email: "sasc@ams.ubc.ca",
        address: "UBC AMS Nest\nRoom 3127",
        hours: {
            "monday": "8:00am-10:00pm",
            "tuesday": "8:00am-10:00pm",
            "wednesday": "8:00am-10:00pm",
            "thursday": "8:00am-10:00pm",
            "friday": "8:00am-10:00pm",
            "saturday": "8:00am-10:00pm",
            "sunday": "8:00am-10:00pm",
        },
    },
    {
        name: "AMS VICE", 
        description: "Free, confidential peer dialogue sessions or mentorship to provide guidance on addiction/substance abuse challenges.",
        logo: "https://scontent.fyvr3-1.fna.fbcdn.net/v/t1.0-9/17021860_100910457107461_488025490832043254_n.png?_nc_cat=106&_nc_ht=scontent.fyvr3-1.fna&oh=d9d7b240caa7db4bf74865e18af22bf8&oe=5D33684F",
        tags: ["onCampus", "peer", "recurring", "walkIn"], //add: substanceAbuse
        phone:"604-827-1728",
        social: {
            "website": "https://www.ams.ubc.ca/student-services/vice/",
            "facebook": "https://www.facebook.com/UBC.AMS.Vice/"
        },
        email: "vice@ams.ubc.ca",
        address: "UBC AMS Nest\nRoom 3107",
        hours: {
            "monday": "n/a",
            "tuesday": "n/a",
            "wednesday": "n/a",
            "thursday": "n/a",
            "friday": "n/a",
            "saturday": "n/a",
            "sunday": "n/a",
        },
    },
    {
        name: "AMS The Pride Collective", 
        description: "Support, guidance, and information for people who identify as LGBTQ+. Provides folks with assistance in coming out and more.",
        logo: "https://static.wixstatic.com/media/f781ec_124a33daa3f74bc1b5df27c0f6718405.jpeg",
        tags: ["onCampus", "recurring"], //add: LGBTQ+
        phone:"n/a",
        social: {
            "website": "https://www.prideubc.com/",
            "facebook": "https://www.facebook.com/prideubc/"
        },
        email: "prideubc@gmail.com",
        address: "UBC AMS Nest\nRoom 2103",
        hours: {
            "monday": "n/a",
            "tuesday": "n/a",
            "wednesday": "n/a",
            "thursday": "n/a",
            "friday": "n/a",
            "saturday": "n/a",
            "sunday": "n/a",
        },
    },
    {
        name: "Women’s Center", 
        description: "Support and resources for women on campus, including informational brochures, menstrual products, safer sex products, pregnancy tests, and more.",
        logo: "https://scontent.fyvr3-1.fna.fbcdn.net/v/t1.0-9/947350_691791094293185_3385537979808396418_n.jpg?_nc_cat=108&_nc_ht=scontent.fyvr3-1.fna&oh=d4c2ef5b46dfce60eda2b55fdaa64ebb&oe=5D36A399",
        tags: ["onCampus", "walkIn"], //add: WomensHealth
        phone:"n/a",
        social: {
            "website": "http://www.ubcwomenscentre.com",
            "facebook": "https://www.facebook.com/ubcwomenscentre/"
        },
        email: "ubcwomenscentre@gmail.com",
        address: "UBC AMS Nest\nRoom 2113",
        hours: {
            "monday": "n/a",
            "tuesday": "n/a",
            "wednesday": "n/a",
            "thursday": "n/a",
            "friday": "n/a",
            "saturday": "n/a",
            "sunday": "n/a",
        },
    },
    {
        name: "The Kaleidoscope", 
        description: "The Kaleidoscope provides a safe, confidential, and stigma-free support group for all individuals who have experienced mental health concerns/difficulties.",
        logo: "https://scontent.fyvr3-1.fna.fbcdn.net/v/t1.0-9/527664_372531339461153_287434995_n.jpg?_nc_cat=106&_nc_ht=scontent.fyvr3-1.fna&oh=03a81708aeb0a15b50d92e23325e6858&oe=5D38F31C",
        tags: ["onCampus", "peer", "recurring"],
        phone:"n/a",
        social: {
            "website": "http://the-kaleidoscope.com/",
            "facebook": "https://www.facebook.com/kaleidoscopeUBC"
        },
        email: "info@the-kaleidoscope.com",
        address: "Weekly Meeting Location\nBuchanan Block D312",
        hours: {
            "monday": "n/a",
            "tuesday": "n/a",
            "wednesday": "5:30pm-6:30pm",
            "thursday": "n/a",
            "friday": "n/a",
            "saturday": "n/a",
            "sunday": "n/a",
        },
    }
];