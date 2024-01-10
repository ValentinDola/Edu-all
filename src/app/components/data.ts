

type Dos = string[];
type Education = string[];
type Skills = string[];
type Salaries = {
  MAW: string;
  MHW: string;
  TEN: string;
};
type Schools = /* type for schools data */ any; // Please replace this with the actual type

interface CareerCategory {
  name: string;
  categories?: CareerCategory[];
  description?: string;
  dos?: Dos;
  education?: Education;
  skills?: Skills;
  salaries?: Salaries;
  schools?: Schools;
  skillsArray?: Skills;
}



export const Unis = [
  {
    name: "Accra Technical University",
    nickname: "ATU",
    founded: 1949,
    location: "Accra, Greater Accra",
    logo: "https://sites.myatu.net/wp-content/uploads/2020/05/unnamed-1-300x113.png",
    icon: "https://scontent.facc6-1.fna.fbcdn.net/v/t1.18169-9/16299227_679045162266964_8594593577193386850_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeGbNEN96B9dX1jqx6vUwY_lkvi0ePYsIkuS-LR49iwiS4y2OxcfmIMooF1N7OGGDRYlb8e52gwRj2Nvaw M4yD62&_nc_ohc=IRrZ0dBmBUkAX_VrFNu&_nc_oc=AQkMcTlnFAW6fXcuQnMfI9hcPGtRi0dDtjYAEF S3jSgnRHHfnePixpg4s07MQqL90-8&tn=AtI92sas6d_Eo8cX&_nc_ht=scontent.facc6-1.fna&oh =00_AT8QVwtQYrfkm5yBRbmaUViFaRupkRCpeqVhTKVa4iZiPQ&oe=628F3976",
    website: "https://atu.edu.gh",
    type: "public",
  },
  {
    name: "Bolgatanga Technical University",
    nickname: "BTU",
    founded: 1999,
    location: "Bolgatanga, Upper East Region",
    logo: "https://www.bolgatu.edu.gh/wp-content/uploads/2021/11/IMG-20211110-WA0005-removebg-preview.png",
    icon: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Bolgatanga_Technical_University_logo.jpg",
    website: "https://www.bolgatu.edu.gh",
    type: "public",
  },
  {
    name: "Cape Coast Technical University",
    nickname: "CCTU",
    founded: 1984,
    location: "Cape Coast, Central",
    logo: "https://cctu.edu.gh/site/img/logo/logo_header.png",
    icon: "https://globaltalentmentoring.org/wp-content/uploads/2020/10/CCTU_logo.png",
    website: "https://cctu.edu.gh",
    type: "public",
  },
  {
    name: "Kumasi Technical University",
    nickname: "KsTU",
    founded: 1954,
    location: "Kumasi, Ashanti",
    logo: "https://kstu.edu.gh/sites/default/files/logo.png",
    icon: "https://kstu.edu.gh/sites/default/files/logo.png",
    website: "https://kstu.edu.gh",
    type: "public",
  },
  {
    name: "Koforidua Technical University",
    nickname: "KTU",
    founded: 1997,
    location: "Koforidua, Eastern",
    logo: "https://www.ktu.edu.gh/wp-content/uploads/2022/02/ktu_logo1.png",
    icon: "https://www.ktu.edu.gh/wp-content/uploads/2022/02/KTULOGO-768x768.png",
    website: "https://ktu.edu.gh",
    type: "public",
  },
  {
    name: "Tamale Technical University",
    nickname: "TATU",
    founded: 1951,
    location: "Tamale, Northern",
    logo: "https://tatu.edu.gh/wp-content/uploads/2021/08/finallogo-1.png",
    icon: "https://pbs.twimg.com/profile_images/1335414406830809090/2tVb_ub5_400 x400.jpg",
    website: "https://tatu.edu.gh",
    type: "public",
  },
  {
    name: "Ho Technical University",
    nickname: "HTU",
    founded: 1968,
    location: "Ho, Volta",
    logo: "https://htu.edu.gh/images/logo.jpg",
    icon: "https://scontent.facc6-1.fna.fbcdn.net/v/t1.18169-9/15895259_614869888724082_8590272208077335825_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeGAKYUo_3fhFf6a2AsDUUO7KUc0HQw530QpRzQdDDnfRBN82k4OgDC6BR-v21rercQKLwvTjX1lvoumMt KBFEs-&_nc_ohc=4FKKtEliYqgAX_Oae61&_nc_ht=scontent.facc6-1.fna&oh=00_AT-RqHmmu89 E8qf2M9tPrk9NU2GXgxFbrCVhsY3_SR9myg&oe=6291A498",
    website: "https://htu.edu.gh",
    type: "public",
  },
  {
    name: "Takoradi Technical University",
    nickname: "TTU",
    founded: 1954,
    location: "Takoradi, Western",
    logo: "https://ttu.edu.gh/sites/default/files/TTU%20FINAL%20LOGO-02.png",
    icon: "https://scontent.facc6-1.fna.fbcdn.net/v/t1.6435-9/38672487_292015831565086_1993573507832741888_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeGhuGiZyt5-_lc3fs3IwwOLrdjJgdfIBVyt2MmB18gFXJSv19FIBSEf_Q4P7f7pT4BGFkhPDlx-VXv5zEK NiFR4&_nc_ohc=gIpGXz90slIAX8zdLuZ&_nc_ht=scontent.facc6-1.fna&oh=00_AT9B3jRRp8ZX meIyx1f3gczFxUsITwuYIJC2yBPmUFZfyw&oe=628E5B2D",
    website: "https://ttu.edu.gh",
    type: "public",
  },
  {
    name: "Sunyani Technical University",
    nickname: "STU",
    founded: 1967,
    location: "Sunyani, Bono",
    logo: "https://stu.edu.gh/images/stulogo.jpg",
    icon: "https://stu.edu.gh/images/stulogo.jpg",
    website: "https://stu.edu.gh",
    type: "public",
  },
  {
    name: "University of Energy and Natural Resources",
    nickname: "UENR",
    founded: 2011,
    location: "Sunyani, Bono",
    logo: "https://www.uenr.edu.gh/images/logo.png",
    icon: "https://www.uenr.edu.gh/images/logo.png",
    website: "https://www.uenr.edu.gh",
    type: "public",
  },
  {
    name: "University of Mines and Technology",
    nickname: "UMaT",
    founded: 2004,
    location: "Tarkwa, Western",
    logo: "https://www.umat.edu.gh/wp-content/uploads/2017/09/UMaT-logo.png",
    icon: "https://www.umat.edu.gh/wp-content/uploads/2017/09/UMaT-logo.png",
    website: "https://www.umat.edu.gh",
    type: "public",
  },
  {
    name: "University of Professional Studies, Accra",
    nickname: "UPSA",
    founded: 1965,
    location: "Accra, Greater Accra",
    logo: "https://www.upsa.edu.gh/assets/images/upsa/logo.png",
    icon: "https://upload.wikimedia.org/wikipedia/en/3/30/University_of_Professional_Studies%2C_Accra_logo.png",
    website: "https://www.upsa.edu.gh",
    type: "public",
  },
  {
    name: "Valley View University",
    nickname: "VVU",
    founded: 1979,
    location: "Oyibi, Greater Accra",
    logo: "https://www.vvu.edu.gh/sites/default/files/logo.png",
    icon: "https://www.vvu.edu.gh/sites/default/files/logo.png",
    website: "https://www.vvu.edu.gh",
    type: "private",
  },
  {
    name: "Regent University College of Science and Technology",
    nickname: "RUCST",
    founded: 2003,
    location: "Accra, Greater Accra",
    logo: "https://www.regent.edu.gh/images/logo.png",
    icon: "https://www.regent.edu.gh/images/logo.png",
    website: "https://www.regent.edu.gh",
    type: "private",
  },
  {
    name: "All Nations University College",
    nickname: "ANUC",
    founded: 2002,
    location: "Koforidua, Eastern",
    logo: "https://www.anuc.edu.gh/anuc/wp-content/uploads/2017/10/logo.png",
    icon: "https://www.anuc.edu.gh/anuc/wp-content/uploads/2017/10/logo.png",
    website: "https://www.anuc.edu.gh",
    type: "private",
  },
  {
    name: "Ashesi University",
    nickname: "Ashesi",
    founded: 2002,
    location: "Berekuso, Eastern",
    logo: "https://www.ashesi.edu.gh/wp-content/uploads/2022/08/ashesi-university-logo.svg",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Ashesi_University_logo.svg/800px-Ashesi_University_logo.svg.png",
    website: "https://www.ashesi.edu.gh",
    type: "private",
  },
  {
    name: "Central University",
    nickname: "CUCG",
    founded: 1998,
    location: "Miotso, Greater Accra",
    logo: "https://www.central.edu.gh/wp-content/uploads/2017/02/logo.png",
    icon: "https://www.central.edu.gh/wp-content/uploads/2017/02/logo.png",
    website: "https://www.central.edu.gh",
    type: "private",
  },
  {
    name: "Ghana Baptist University College",
    nickname: "GBUC",
    founded: 2006,
    location: "Kumasi, Ashanti",
    logo: "https://gbuc.edu.gh/assets/img/logo.png",
    icon: "https://gbuc.edu.gh/assets/img/logo.png",
    website: "https://gbuc.edu.gh",
    type: "private",
  },
  {
    name: "Lancaster University Ghana",
    nickname: "LUG",
    founded: 2003,
    location: "Accra, Greater Accra",
    logo: "https://www.lancaster.edu.gh/sites/default/files/logo/lug_logo_300x116px.jpg",
    icon: "https://www.lancaster.edu.gh/sites/default/files/logo/lug_logo_300x116px.jpg",
    website: "https://www.lancaster.edu.gh",
    type: "private",
  },
  {
    name: "Radford University College",
    nickname: "RUC",
    founded: 1987,
    location: "Accra, Greater Accra",
    logo: "https://www.radford.edu.gh/images/logo.png",
    icon: "https://www.radford.edu.gh/images/logo.png",
    website: "https://www.radford.edu.gh",
    type: "private",
  },
  {
    name: "Regional Maritime University",
    nickname: "RMU",
    founded: 1958,
    location: "Accra, Greater Accra",
    logo: "https://rmu.edu.gh/sites/default/files/logo-rmu.png",
    icon: "https://rmu.edu.gh/sites/default/files/logo-rmu.png",
    website: "https://rmu.edu.gh",
    type: "public",
  },
  {
    name: "University of Ghana",
    nickname: "legon",
    founded: 1948,
    location: "Legon, Accra, Korle Bu and Atomic, Greater Accra",
    logo: "https://www.ug.edu.gh/sites/default/files/ug_standard_new_sl_1.png",
    icon: "https://upload.wikimedia.org/wikipedia/commons/6/64/University_of_Ghana.png",
    website: "https://www.ug.edu.gh",
    type: "public",
  },
  {
    name: "Kwame Nkrumah University of Science and Technology",
    nickname: "KNUST",
    founded: 1952,
    location: "Kumasi, Ashanti",
    logo: "https://www.knust.edu.gh/themes/custom/adepts/images/knustlogo.png",
    icon: "https://upload.wikimedia.org/wikipedia/en/b/b4/Knust_seal.jpg",
    website: "https://www.knust.edu.gh",
    type: "public",
  },
  {
    name: "University of Cape Coast",
    nickname: "Cape Vars",
    founded: 1961,
    location: "Cape Coast, Central",
    logo: "https://www.ucc.edu.gh/sites/default/files/ucc_logo_new.png",
    icon: "https://ucc.edu.gh/sites/default/files/ucc-logo.webp",
    website: "https://www.ucc.edu.gh",
    type: "public",
  },
  {
    name: "CK Tadem University for Technology and Applied Sciences",
    nickname: "CKT-UTAS",
    founded: 2020,
    location: "Navrongo, Upper East",
    logo: "https://cktutas.edu.gh/wp-content/uploads/2021/05/logo.png",
    icon: "https://cktutas.edu.gh/wp-content/uploads/2020/06/CK-LOGO-symbol-300x297.png",
    website: "https://www.cktutas.edu.gh",
    type: "public",
  },
  {
    name: "University of Education, Winneba",
    nickname: "UEW",
    founded: 1992,
    location: "Winneba, Central",
    logo: "https://www.uew.edu.gh/sites/default/files/uew_logo_web.png",
    icon: "https://www.uew.edu.gh/sites/default/files/uew_logo_web.png",
    website: "https://www.uew.edu.gh",
    type: "public",
  },
  {
    name: "Simon Diedong Dombo University for Business and Integrated Development Studies",
    nickname: "SDD-UBIDS",
    founded: 2020,
    location: "Wa, Upper West",
    logo: "https://ubids.edu.gh/wp-content/uploads/2021/12/UBIDS-LOGO-HEADER.jpg",
    icon: "https://media-exp1.licdn.com/dms/image/C4D0BAQFdPWknOAl79A/company-logo_200_200/0/1604669766842?e=2147483647&v=beta&t=7zlwjmPwLECHSH1KQd4uk9wczBfITrNCdqWjKJlIg_Q",
    website: "https://www.ubids.edu.gh",
    type: "public",
  },
  {
    name: "Akenten Appiah Menkah University of Skills Training and Entrepreneurial Development, Kumasi",
    nickname: "AAMUSTED",
    founded: 2020,
    location: "Kumasi and Mampong, Ashanti",
    logo: "https://aamusted.edu.gh/web/resources/img/uniname.jpg",
    icon: "https://scontent.facc6-1.fna.fbcdn.net/v/t39.30808-6/273934791_366398808661850_4516587644913768999_n.jpg?stp=cp0_dst-jpg_e15_p64x64_q65&_nc_cat=104&ccb=1-5&_nc_sid=85a577&efg=eyJpIjoidCJ9&_nc_eui2=AeFUQHR_lNmXiaZey6nh1tkX0bAQuKfmqKrRsBC4p-aoqiRphGSIbXnkAdkTcSaQjP55_MeEhWEqCQO3AEr0QHI4&_nc_ohc=O8rtGQznYVIAX8Sj_5n&_nc_zt=23&_nc_ht=scontent.facc6-1.fna&oh=00_AT_my1G9oxZaquK5UeuBknftUPpzPbujmWgZ0t40zMFsPg&oe=626E701F",
    website: "https://aamusted.edu.gh",
    type: "public",
  },
  {
    name: "University for Development Studies",
    nickname: "UDS",
    founded: 1992,
    location: "Tamale, Northern",
    logo: "https://uds.edu.gh/images/logo_header.png",
    icon: "https://uds.edu.gh/images/uds_emblem.png",
    website: "https://uds.edu.gh",
    type: "public",
  },
  {
    name: "University of Professional Studies",
    nickname: "UPS",
    founded: 1965,
    location: "Accra, Greater Accra",
    logo: "https://upsa.edu.gh/wp-content/uploads/2020/11/upsa-logoacbsp.png",
    icon: "https://admissions.upsa.edu.gh/wp-content/uploads/2020/04/upsa-favi.png",
    website: "https://upsa.edu.gh",
    type: "public",
  },
  {
    name: "University of Mines and Technology",
    nickname: "UMAT",
    founded: 2001,
    location: "Tarkwa, Western",
    logo: "https://umat.edu.gh/templates/gk_university/images/logo.png",
    icon: "https://conference.umat.edu.gh/wp-content/uploads/2018/01/UMaT-logo-238x300.jpg",
    website: "https://umat.edu.gh",
    type: "public",
  },
  {
    name: "University of Health and Allied Sciences",
    nickname: "UHAS",
    founded: 2011,
    location: "Ho, Volta",
    logo: "https://www.uhas.edu.gh/images/sampledata/icetheme/2021uhas-web-logo.png",
    icon: "https://www.uhas.edu.gh/logo.png",
    website: "https://uhas.edu.gh",
    type: "public",
  },
  {
    name: "University of Energy And Natural Resources",
    nickname: "UENR",
    founded: 2012,
    location: "Sunyani, Bono",
    logo: "https://uenr.edu.gh/humputsu/2021/01/Artboard-1.png",
    icon: "https://uenr.edu.gh/humputsu/2021/02/uenr-logo-768x998.png",
    website: "https://uenr.edu.gh",
    type: "public",
  },
  {
    name: "University of Environment and Sustainable Development",
    nickname: "UESD",
    founded: 2020,
    location: "Somanya, Eastern Region",
    logo: "https://apps.uesd.edu.gh/admissions/public/assets/img/mini-banner.jpg",
    icon: "https://apps.uesd.edu.gh/admissions/public/assets/img/mini-banner.jpg",
    website: "https://uesd.edu.gh",
    type: "public",
  },
  {
    name: "Ghana Institute of Management and Public Administration",
    nickname: "GIMPA",
    founded: 1961,
    location: "Legon, Accra",
    logo: "https://www.gimpa.edu.gh/wp-content/themes/GIMPS/images/logo_g.png",
    icon: "https://upload.wikimedia.org/wikipedia/commons/d/d9/GIMPA_%28Ghana_Institute_of_Management_and_Public_Administration%29_logo.jpg",
    website: "https://gimpa.edu.gh",
    type: "public",
  },
  {
    name: "Ghana Communication Technology University",
    nickname: "GCTU",
    founded: 2005,
    location: "Tesano, Accra",
    logo: "https://site.gctu.edu.gh/wp-content/themes/gtuc/assets/images/logo.png",
    icon: "https://scontent.facc6-1.fna.fbcdn.net/v/t1.6435-9/121963455_3213940908728742_5776996561519349599_n.png?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeG4p6jDWU_90aIDeT3x9-AAjQvwBGNCMYyNC_AEY0IxjB1WaO5fJjGaLrhDHb_Zm8sNqw9i4gaC2n0FB-F108op&_nc_ohc=MmW8JI-w5eAAX_Cp1nU&tn=AtI92sas6d_Eo8cX&_nc_ht=scontent.facc6-1.fna&oh=00_AT-hPCJEc1DE6H5ge1SUaGKRyBIokr7Uk4SuZm0el3yPFQ&oe=62919916",
    website: "https://site.gctu.edu.gh",
    type: "public",
  },
];

export const careers : CareerCategory[] = [
  {
    name: "Architecture and Engineering Occupations",
    categories: [
      {
        name: "Agricultural Engineers",
        description:
          "Apply knowledge of engineering technology and biological science to agricultural problems concerned with power and machinery, electrification, structures, soil and water conservation, and processing of agricultural products.",
        dos: [
          "Conduct Educational Programs that provide farmers or farm cooperative members with information that can help them improve agricultural productivity.",
          "Discuss plans with clients, contractors, consultants, and other engineers so that they can be evaluated and necessary changes made.",
          "Meet with clients, such as district or regional councils, farmers, and developers, to discuss their normalize Repeated Slashes",
          "Prepare reports, sketches, working drawings, specifications, proposals, and budgets for proposed sites or systems.",
          "Plan and direct construction of rural electric-power distribution systems, and irrigation, drainage, and flood control systems for soil and water conservation.",
          "Provide advice on water quality and issues related to pollution management, river control, and ground and surface water resources.",
        ],
        education: ["Agricultural Engineering"],
        skills: [
          "Critical Thinking: Using logic and reasoning to identify the strengths and weaknesses of alternative solutions, conclusions, or approaches to problems.",
          "Complex Problem Solving: Identifying complex problems and reviewing related information to develop and evaluate options and implement solutions.",
          "Judgment and Decision Making: Considering the relative costs and benefits of potential actions to choose the most appropriate one.",
          "Reading Comprehension: Understanding written sentences and paragraphs in work-related documents.",
          "Active Listening: Giving full attention to what other people are saying, taking time to understand the points being made, asking questions as appropriate, and not interrupting at inappropriate times.",
          "Writing: Communicating effectively in writing as appropriate for the needs of the audience.",
          "Speaking: Talking to others to convey information effectively.",
          "Mathematics: Using mathematics to solve problems.",
          "Systems Analysis: Determining how a system should work and how changes in conditions, operations, and the environment will affect outcomes.",
          "Systems Evaluation: Identifying measures or indicators of system performance and the actions needed to improve or correct performance, relative to the goals of the system.",
          "Science: Using scientific rules and methods to solve problems.",
          "Social Perceptiveness: Being aware of others' reactions and understanding why they react as they do.",
          "Time Management: Managing one's own time and the time of others.",
          "Active Learning: Understanding the implications of new information for both current and future problem-solving and decision-making.",
          "Operations Monitoring: Watching gauges, dials, or other indicators to make sure a machine is working properly.",
          "Monitoring: Monitoring/Assessing performance of yourself, other individuals, or organizations to make improvements or take corrective action.",
          "Coordination: Adjusting actions in relation to others' actions.",
          "Persuasion: Persuading others to change their minds or behavior.",
          "Negotiation: Bringing others together and trying to reconcile differences.",
          "Instructing: Teaching others how to do something.",
          "Service Orientation: Actively looking for ways to help people.",
          "Operations Analysis: Analyzing needs and product requirements to create a design.",
          "Management of Personnel Resources: Motivating, developing, and directing people as they work, identifying the best people for the job.",
          "Learning Strategies: Selecting and using training/instructional methods and procedures appropriate for the situation when learning or teaching new things.",
          "Technology Design: Generating or adapting equipment and technology to serve user needs.",
          "Quality Control Analysis: Conducting tests and inspections of products, services, or processes to evaluate quality or performance.",
        ],
        salaries: {
          MAW: "$71,070",
          MHW: "$34.17",
          TEN: "11,970",
        },
        schools: Unis,
        skillsArray : [
  "Critical Thinking",
  "Complex Problem Solving",
  "Judgment and Decision Making",
  "Reading Comprehension",
  "Active Listening",
  "Writing",
  "Speaking",
  "Mathematics",
  "Systems Analysis",
  "Systems Evaluation",
  "Science",
  "Social Perceptiveness",
  "Time Management",
  "Active Learning",
  "Operations Monitoring",
  "Monitoring",
  "Coordination",
  "Persuasion",
  "Negotiation",
  "Instructing",
  "Service Orientation",
  "Operations Analysis",
  "Management of Personnel Resources",
  "Learning Strategies",
  "Technology Design",
  "Quality Control Analysis"
]

      },
      {
        name: "Architects, Except Landscape and Naval",
        description:
          "Plan and design structures, such as private residences, office buildings, theaters, factories, and other structural property.",
        dos: [
          "Conduct periodic on-site observations of construction work to monitor compliance with plans.",
          "Consult with clients to determine functional or spatial requirements of structures.",
          "Develop final construction plans that include aesthetic representations of the structure or details for its construction.",
          "Develop marketing materials, proposals, or presentations to generate new work opportunities.",
          "Gather information related to projects' environmental sustainability or operational efficiency.",
          "Integrate engineering elements into unified architectural designs.",
          "Meet with clients to review or discuss architectural drawings.",
          "Monitor the work of specialists, such as electrical engineers, mechanical engineers, interior designers, or sound specialists to ensure optimal form or function of designs or final structures.",
          "Perform predesign services, such as feasibility or environmental impact studies.",
          "Plan or design structures such as residences, office buildings, theatres, factories, or other structural properties in accordance with environmental, safety, or other regulations.",
          "Prepare information regarding design, structure specifications, materials, color, equipment, estimated costs, or construction time.",
          "Prepare scale drawings or architectural designs, using computer-aided design or other tools.",
          "Represent clients in obtaining bids or awarding construction contracts.",
          "Design or plan construction of green building projects to minimize adverse environmental impact or conserve energy.",
          "Direct activities of technicians engaged in preparing drawings or specification documents.",
          "Inspect proposed building sites to determine suitability for construction.",
          "Plan layouts of structural architectural projects.",
          "Prepare contract documents for building contractors.",
          "Administer construction contracts.",
          "Create three-dimensional or interactive representations of designs, using computer-assisted design software.",
          "Design environmentally sound structural upgrades to existing buildings, such as natural lighting systems, green roofs, or rainwater collection systems.",
          "Calculate potential energy savings by comparing estimated energy consumption of proposed design to baseline standards.",
          "Design structures that incorporate environmentally friendly building practices or concepts, such as Leadership in Energy and Environmental Design (LEED) standards.",
          "Prepare operating and maintenance manuals, studies, or reports.",
        ],
        education: [
          "Architectural History and Criticism, General",
          "Architecture",
          "Environmental Design/Architecture",
        ],
        skills: [
          "Reading Comprehension: Understanding written sentences and paragraphs in work-related documents.",
          "Speaking: Talking to others to convey information effectively.",
          "Critical Thinking: Using logic and reasoning to identify the strengths and weaknesses of alternative solutions, conclusions, or approaches to problems.",
          "Operations Analysis: Analyzing needs and product requirements to create a design.",
          "Active Listening: Giving full attention to what other people are saying, taking time to understand the points being made, asking questions as appropriate, and not interrupting at inappropriate times.",
          "Writing: Communicating effectively in writing as appropriate for the needs of the audience.",
          "Monitoring: Monitoring/Assessing performance of yourself, other individuals, or organizations to make improvements or take corrective action.",
          "Judgment and Decision Making: Considering the relative costs and benefits of potential actions to choose the most appropriate one.",
          "Complex Problem Solving: Identifying complex problems and reviewing related information to develop and evaluate options and implement solutions.",
          "Active Learning: Understanding the implications of new information for both current and future problem-solving and decision-making.",
          "Mathematics: Using mathematics to solve problems.",
          "Systems Analysis: Determining how a system should work and how changes in conditions, operations, and the environment will affect outcomes.",
          "Coordination: Adjusting actions in relation to others' actions.",
          "Systems Evaluation: Identifying measures or indicators of system performance and the actions needed to improve or correct performance, relative to the goals of the system.",
          "Learning Strategies: Selecting and using training/instructional methods and procedures appropriate for the situation when learning or teaching new things.",
          "Social Perceptiveness: Being aware of others' reactions and understanding why they react as they do.",
          "Persuasion: Persuading others to change their minds or behavior.",
          "Negotiation: Bringing others together and trying to reconcile differences.",
          "Quality Control Analysis: Conducting tests and inspections of products, services, or processes to evaluate quality or performance.",
          "Management of Personnel Resources: Motivating, developing, and directing people as they work, identifying the best people for the job.",
          "Instructing: Teaching others how to do something.",
          "Time Management: Managing one's own time and the time of others.",
          "Service Orientation: Actively looking for ways to help people.",
          "Science: Using scientific rules and methods to solve problems.",
          "Management of Financial Resources: Determining how money will be spent to get the work done, and accounting for these expenditures.",
          "Management of Material Resources: Obtaining and seeing to the appropriate use of equipment, facilities, and materials needed to do certain work.",
        ],
        salaries: {
          MAW: "$84,470",
          MHW: "$40.61",
          TEN: "99,860",
        },
        schools: Unis,
        skillsArray : [
  "Reading Comprehension",
  "Speaking",
  "Critical Thinking",
  "Operations Analysis",
  "Active Listening",
  "Writing",
  "Monitoring",
  "Judgment and Decision Making",
  "Complex Problem Solving",
  "Active Learning",
  "Mathematics",
  "Systems Analysis",
  "Coordination",
  "Systems Evaluation",
  "Learning Strategies",
  "Social Perceptiveness",
  "Persuasion",
  "Negotiation",
  "Quality Control Analysis",
  "Management of Personnel Resources",
  "Instructing",
  "Time Management",
  "Service Orientation",
  "Science",
  "Management of Financial Resources",
  "Management of Material Resources"
]
      },
      { name: "Architectural and Civil Drafters" },
      { name: "Architectural Drafters" },
      { name: "Automotive Engineering Technicians" },
      { name: "Automotive Engineers" },
      { name: "Biochemical Engineers" },
      { name: "Chemical Engineers" },
      { name: "Civil Drafters" },
      { name: "Civil Engineering Technicians" },
      { name: "Civil Engineers" },
      { name: "Computer Hardware Engineers" },
    ],
  },
  {
    name: "Arts, Design, Entertainment, Sports, and Media Occupations",
    categories: [
      {
        name: "Agricultural Engineers",
        description:
          "Apply knowledge of engineering technology and biological science to agricultural problems concerned with power and machinery, electrification, structures, soil and water conservation, and processing of agricultural products.",
        dos: [
          "Conduct Educational Programs that provide farmers or farm cooperative members with information that can help them improve agricultural productivity.",
          "Discuss plans with clients, contractors, consultants, and other engineers so that they can be evaluated and necessary changes made.",
          "Meet with clients, such as district or regional councils, farmers, and developers, to discuss their normalize Repeated Slashes",
          "Prepare reports, sketches, working drawings, specifications, proposals, and budgets for proposed sites or systems.",
          "Plan and direct construction of rural electric-power distribution systems, and irrigation, drainage, and flood control systems for soil and water conservation.",
          "Provide advice on water quality and issues related to pollution management, river control, and ground and surface water resources.",
        ],
        education: ["Agricultural Engineering"],
        skills: [
          "Critical Thinking: Using logic and reasoning to identify the strengths and weaknesses of alternative solutions, conclusions, or approaches to problems.",
          "Complex Problem Solving: Identifying complex problems and reviewing related information to develop and evaluate options and implement solutions.",
          "Judgment and Decision Making: Considering the relative costs and benefits of potential actions to choose the most appropriate one.",
          "Reading Comprehension: Understanding written sentences and paragraphs in work-related documents.",
          "Active Listening: Giving full attention to what other people are saying, taking time to understand the points being made, asking questions as appropriate, and not interrupting at inappropriate times.",
          "Writing: Communicating effectively in writing as appropriate for the needs of the audience.",
          "Speaking: Talking to others to convey information effectively.",
          "Mathematics: Using mathematics to solve problems.",
          "Systems Analysis: Determining how a system should work and how changes in conditions, operations, and the environment will affect outcomes.",
          "Systems Evaluation: Identifying measures or indicators of system performance and the actions needed to improve or correct performance, relative to the goals of the system.",
          "Science: Using scientific rules and methods to solve problems.",
          "Social Perceptiveness: Being aware of others' reactions and understanding why they react as they do.",
          "Time Management: Managing one's own time and the time of others.",
          "Active Learning: Understanding the implications of new information for both current and future problem-solving and decision-making.",
          "Operations Monitoring: Watching gauges, dials, or other indicators to make sure a machine is working properly.",
          "Monitoring: Monitoring/Assessing performance of yourself, other individuals, or organizations to make improvements or take corrective action.",
          "Coordination: Adjusting actions in relation to others' actions.",
          "Persuasion: Persuading others to change their minds or behavior.",
          "Negotiation: Bringing others together and trying to reconcile differences.",
          "Instructing: Teaching others how to do something.",
          "Service Orientation: Actively looking for ways to help people.",
          "Operations Analysis: Analyzing needs and product requirements to create a design.",
          "Management of Personnel Resources: Motivating, developing, and directing people as they work, identifying the best people for the job.",
          "Learning Strategies: Selecting and using training/instructional methods and procedures appropriate for the situation when learning or teaching new things.",
          "Technology Design: Generating or adapting equipment and technology to serve user needs.",
          "Quality Control Analysis: Conducting tests and inspections of products, services, or processes to evaluate quality or performance.",
        ],
        salaries: {
          MAW: "$51,550",
          MHW: "$24.78",
          TEN: "173,330",
        },
        schools: Unis,
      },
    ],
  },
  {
    name: "Building and Grounds Cleaning and Maintenance Occupations",
    categories: [
      {
        name: "Agricultural Engineers",
        description:
          "Apply knowledge of engineering technology and biological science to agricultural problems concerned with power and machinery, electrification, structures, soil and water conservation, and processing of agricultural products.",
        dos: [
          "Conduct Educational Programs that provide farmers or farm cooperative members with information that can help them improve agricultural productivity.",
          "Discuss plans with clients, contractors, consultants, and other engineers so that they can be evaluated and necessary changes made.",
          "Meet with clients, such as district or regional councils, farmers, and developers, to discuss their normalize Repeated Slashes",
          "Prepare reports, sketches, working drawings, specifications, proposals, and budgets for proposed sites or systems.",
          "Plan and direct construction of rural electric-power distribution systems, and irrigation, drainage, and flood control systems for soil and water conservation.",
          "Provide advice on water quality and issues related to pollution management, river control, and ground and surface water resources.",
        ],
        education: ["Agricultural Engineering"],
        skills: [
          "Critical Thinking: Using logic and reasoning to identify the strengths and weaknesses of alternative solutions, conclusions, or approaches to problems.",
          "Complex Problem Solving: Identifying complex problems and reviewing related information to develop and evaluate options and implement solutions.",
          "Judgment and Decision Making: Considering the relative costs and benefits of potential actions to choose the most appropriate one.",
          "Reading Comprehension: Understanding written sentences and paragraphs in work-related documents.",
          "Active Listening: Giving full attention to what other people are saying, taking time to understand the points being made, asking questions as appropriate, and not interrupting at inappropriate times.",
          "Writing: Communicating effectively in writing as appropriate for the needs of the audience.",
          "Speaking: Talking to others to convey information effectively.",
          "Mathematics: Using mathematics to solve problems.",
          "Systems Analysis: Determining how a system should work and how changes in conditions, operations, and the environment will affect outcomes.",
          "Systems Evaluation: Identifying measures or indicators of system performance and the actions needed to improve or correct performance, relative to the goals of the system.",
          "Science: Using scientific rules and methods to solve problems.",
          "Social Perceptiveness: Being aware of others' reactions and understanding why they react as they do.",
          "Time Management: Managing one's own time and the time of others.",
          "Active Learning: Understanding the implications of new information for both current and future problem-solving and decision-making.",
          "Operations Monitoring: Watching gauges, dials, or other indicators to make sure a machine is working properly.",
          "Monitoring: Monitoring/Assessing performance of yourself, other individuals, or organizations to make improvements or take corrective action.",
          "Coordination: Adjusting actions in relation to others' actions.",
          "Persuasion: Persuading others to change their minds or behavior.",
          "Negotiation: Bringing others together and trying to reconcile differences.",
          "Instructing: Teaching others how to do something.",
          "Service Orientation: Actively looking for ways to help people.",
          "Operations Analysis: Analyzing needs and product requirements to create a design.",
          "Management of Personnel Resources: Motivating, developing, and directing people as they work, identifying the best people for the job.",
          "Learning Strategies: Selecting and using training/instructional methods and procedures appropriate for the situation when learning or teaching new things.",
          "Technology Design: Generating or adapting equipment and technology to serve user needs.",
          "Quality Control Analysis: Conducting tests and inspections of products, services, or processes to evaluate quality or performance.",
        ],
        salaries: {
          MAW: "$51,550",
          MHW: "$24.78",
          TEN: "173,330",
        },
        schools: Unis,
      },
    ],
  },
  {
    name: "Business and Financial Operations Occupations",
    categories: [
      {
        name: "Agricultural Engineers",
        description:
          "Apply knowledge of engineering technology and biological science to agricultural problems concerned with power and machinery, electrification, structures, soil and water conservation, and processing of agricultural products.",
        dos: [
          "Conduct Educational Programs that provide farmers or farm cooperative members with information that can help them improve agricultural productivity.",
          "Discuss plans with clients, contractors, consultants, and other engineers so that they can be evaluated and necessary changes made.",
          "Meet with clients, such as district or regional councils, farmers, and developers, to discuss their normalize Repeated Slashes",
          "Prepare reports, sketches, working drawings, specifications, proposals, and budgets for proposed sites or systems.",
          "Plan and direct construction of rural electric-power distribution systems, and irrigation, drainage, and flood control systems for soil and water conservation.",
          "Provide advice on water quality and issues related to pollution management, river control, and ground and surface water resources.",
        ],
        education: ["Agricultural Engineering"],
        skills: [
          "Critical Thinking: Using logic and reasoning to identify the strengths and weaknesses of alternative solutions, conclusions, or approaches to problems.",
          "Complex Problem Solving: Identifying complex problems and reviewing related information to develop and evaluate options and implement solutions.",
          "Judgment and Decision Making: Considering the relative costs and benefits of potential actions to choose the most appropriate one.",
          "Reading Comprehension: Understanding written sentences and paragraphs in work-related documents.",
          "Active Listening: Giving full attention to what other people are saying, taking time to understand the points being made, asking questions as appropriate, and not interrupting at inappropriate times.",
          "Writing: Communicating effectively in writing as appropriate for the needs of the audience.",
          "Speaking: Talking to others to convey information effectively.",
          "Mathematics: Using mathematics to solve problems.",
          "Systems Analysis: Determining how a system should work and how changes in conditions, operations, and the environment will affect outcomes.",
          "Systems Evaluation: Identifying measures or indicators of system performance and the actions needed to improve or correct performance, relative to the goals of the system.",
          "Science: Using scientific rules and methods to solve problems.",
          "Social Perceptiveness: Being aware of others' reactions and understanding why they react as they do.",
          "Time Management: Managing one's own time and the time of others.",
          "Active Learning: Understanding the implications of new information for both current and future problem-solving and decision-making.",
          "Operations Monitoring: Watching gauges, dials, or other indicators to make sure a machine is working properly.",
          "Monitoring: Monitoring/Assessing performance of yourself, other individuals, or organizations to make improvements or take corrective action.",
          "Coordination: Adjusting actions in relation to others' actions.",
          "Persuasion: Persuading others to change their minds or behavior.",
          "Negotiation: Bringing others together and trying to reconcile differences.",
          "Instructing: Teaching others how to do something.",
          "Service Orientation: Actively looking for ways to help people.",
          "Operations Analysis: Analyzing needs and product requirements to create a design.",
          "Management of Personnel Resources: Motivating, developing, and directing people as they work, identifying the best people for the job.",
          "Learning Strategies: Selecting and using training/instructional methods and procedures appropriate for the situation when learning or teaching new things.",
          "Technology Design: Generating or adapting equipment and technology to serve user needs.",
          "Quality Control Analysis: Conducting tests and inspections of products, services, or processes to evaluate quality or performance.",
        ],
        salaries: {
          MAW: "$51,550",
          MHW: "$24.78",
          TEN: "173,330",
        },
        schools: Unis,
      },
    ],
  },
  {
    name: "Community and Social Services Occupations",
    categories: [
      {
        name: "Agricultural Engineers",
        description:
          "Apply knowledge of engineering technology and biological science to agricultural problems concerned with power and machinery, electrification, structures, soil and water conservation, and processing of agricultural products.",
        dos: [
          "Conduct Educational Programs that provide farmers or farm cooperative members with information that can help them improve agricultural productivity.",
          "Discuss plans with clients, contractors, consultants, and other engineers so that they can be evaluated and necessary changes made.",
          "Meet with clients, such as district or regional councils, farmers, and developers, to discuss their normalize Repeated Slashes",
          "Prepare reports, sketches, working drawings, specifications, proposals, and budgets for proposed sites or systems.",
          "Plan and direct construction of rural electric-power distribution systems, and irrigation, drainage, and flood control systems for soil and water conservation.",
          "Provide advice on water quality and issues related to pollution management, river control, and ground and surface water resources.",
        ],
        education: ["Agricultural Engineering"],
        skills: [
          "Critical Thinking: Using logic and reasoning to identify the strengths and weaknesses of alternative solutions, conclusions, or approaches to problems.",
          "Complex Problem Solving: Identifying complex problems and reviewing related information to develop and evaluate options and implement solutions.",
          "Judgment and Decision Making: Considering the relative costs and benefits of potential actions to choose the most appropriate one.",
          "Reading Comprehension: Understanding written sentences and paragraphs in work-related documents.",
          "Active Listening: Giving full attention to what other people are saying, taking time to understand the points being made, asking questions as appropriate, and not interrupting at inappropriate times.",
          "Writing: Communicating effectively in writing as appropriate for the needs of the audience.",
          "Speaking: Talking to others to convey information effectively.",
          "Mathematics: Using mathematics to solve problems.",
          "Systems Analysis: Determining how a system should work and how changes in conditions, operations, and the environment will affect outcomes.",
          "Systems Evaluation: Identifying measures or indicators of system performance and the actions needed to improve or correct performance, relative to the goals of the system.",
          "Science: Using scientific rules and methods to solve problems.",
          "Social Perceptiveness: Being aware of others' reactions and understanding why they react as they do.",
          "Time Management: Managing one's own time and the time of others.",
          "Active Learning: Understanding the implications of new information for both current and future problem-solving and decision-making.",
          "Operations Monitoring: Watching gauges, dials, or other indicators to make sure a machine is working properly.",
          "Monitoring: Monitoring/Assessing performance of yourself, other individuals, or organizations to make improvements or take corrective action.",
          "Coordination: Adjusting actions in relation to others' actions.",
          "Persuasion: Persuading others to change their minds or behavior.",
          "Negotiation: Bringing others together and trying to reconcile differences.",
          "Instructing: Teaching others how to do something.",
          "Service Orientation: Actively looking for ways to help people.",
          "Operations Analysis: Analyzing needs and product requirements to create a design.",
          "Management of Personnel Resources: Motivating, developing, and directing people as they work, identifying the best people for the job.",
          "Learning Strategies: Selecting and using training/instructional methods and procedures appropriate for the situation when learning or teaching new things.",
          "Technology Design: Generating or adapting equipment and technology to serve user needs.",
          "Quality Control Analysis: Conducting tests and inspections of products, services, or processes to evaluate quality or performance.",
        ],
        salaries: {
          MAW: "$51,550",
          MHW: "$24.78",
          TEN: "173,330",
        },
        schools: Unis,
      },
    ],
  },
  {
    name: "Computer and Mathematical Occupations",
    categories: [
      {
        name: "Agricultural Engineers",
        description:
          "Apply knowledge of engineering technology and biological science to agricultural problems concerned with power and machinery, electrification, structures, soil and water conservation, and processing of agricultural products.",
        dos: [
          "Conduct Educational Programs that provide farmers or farm cooperative members with information that can help them improve agricultural productivity.",
          "Discuss plans with clients, contractors, consultants, and other engineers so that they can be evaluated and necessary changes made.",
          "Meet with clients, such as district or regional councils, farmers, and developers, to discuss their normalize Repeated Slashes",
          "Prepare reports, sketches, working drawings, specifications, proposals, and budgets for proposed sites or systems.",
          "Plan and direct construction of rural electric-power distribution systems, and irrigation, drainage, and flood control systems for soil and water conservation.",
          "Provide advice on water quality and issues related to pollution management, river control, and ground and surface water resources.",
        ],
        education: ["Agricultural Engineering"],
        skills: [
          "Critical Thinking: Using logic and reasoning to identify the strengths and weaknesses of alternative solutions, conclusions, or approaches to problems.",
          "Complex Problem Solving: Identifying complex problems and reviewing related information to develop and evaluate options and implement solutions.",
          "Judgment and Decision Making: Considering the relative costs and benefits of potential actions to choose the most appropriate one.",
          "Reading Comprehension: Understanding written sentences and paragraphs in work-related documents.",
          "Active Listening: Giving full attention to what other people are saying, taking time to understand the points being made, asking questions as appropriate, and not interrupting at inappropriate times.",
          "Writing: Communicating effectively in writing as appropriate for the needs of the audience.",
          "Speaking: Talking to others to convey information effectively.",
          "Mathematics: Using mathematics to solve problems.",
          "Systems Analysis: Determining how a system should work and how changes in conditions, operations, and the environment will affect outcomes.",
          "Systems Evaluation: Identifying measures or indicators of system performance and the actions needed to improve or correct performance, relative to the goals of the system.",
          "Science: Using scientific rules and methods to solve problems.",
          "Social Perceptiveness: Being aware of others' reactions and understanding why they react as they do.",
          "Time Management: Managing one's own time and the time of others.",
          "Active Learning: Understanding the implications of new information for both current and future problem-solving and decision-making.",
          "Operations Monitoring: Watching gauges, dials, or other indicators to make sure a machine is working properly.",
          "Monitoring: Monitoring/Assessing performance of yourself, other individuals, or organizations to make improvements or take corrective action.",
          "Coordination: Adjusting actions in relation to others' actions.",
          "Persuasion: Persuading others to change their minds or behavior.",
          "Negotiation: Bringing others together and trying to reconcile differences.",
          "Instructing: Teaching others how to do something.",
          "Service Orientation: Actively looking for ways to help people.",
          "Operations Analysis: Analyzing needs and product requirements to create a design.",
          "Management of Personnel Resources: Motivating, developing, and directing people as they work, identifying the best people for the job.",
          "Learning Strategies: Selecting and using training/instructional methods and procedures appropriate for the situation when learning or teaching new things.",
          "Technology Design: Generating or adapting equipment and technology to serve user needs.",
          "Quality Control Analysis: Conducting tests and inspections of products, services, or processes to evaluate quality or performance.",
        ],
        salaries: {
          MAW: "$51,550",
          MHW: "$24.78",
          TEN: "173,330",
        },
        schools: Unis,
      },
    ],
  },
  {
    name: "Construction and Extraction Occupations",
    categories: [
      {
        name: "Agricultural Engineers",
        description:
          "Apply knowledge of engineering technology and biological science to agricultural problems concerned with power and machinery, electrification, structures, soil and water conservation, and processing of agricultural products.",
        dos: [
          "Conduct Educational Programs that provide farmers or farm cooperative members with information that can help them improve agricultural productivity.",
          "Discuss plans with clients, contractors, consultants, and other engineers so that they can be evaluated and necessary changes made.",
          "Meet with clients, such as district or regional councils, farmers, and developers, to discuss their normalize Repeated Slashes",
          "Prepare reports, sketches, working drawings, specifications, proposals, and budgets for proposed sites or systems.",
          "Plan and direct construction of rural electric-power distribution systems, and irrigation, drainage, and flood control systems for soil and water conservation.",
          "Provide advice on water quality and issues related to pollution management, river control, and ground and surface water resources.",
        ],
        education: ["Agricultural Engineering"],
        skills: [
          "Critical Thinking: Using logic and reasoning to identify the strengths and weaknesses of alternative solutions, conclusions, or approaches to problems.",
          "Complex Problem Solving: Identifying complex problems and reviewing related information to develop and evaluate options and implement solutions.",
          "Judgment and Decision Making: Considering the relative costs and benefits of potential actions to choose the most appropriate one.",
          "Reading Comprehension: Understanding written sentences and paragraphs in work-related documents.",
          "Active Listening: Giving full attention to what other people are saying, taking time to understand the points being made, asking questions as appropriate, and not interrupting at inappropriate times.",
          "Writing: Communicating effectively in writing as appropriate for the needs of the audience.",
          "Speaking: Talking to others to convey information effectively.",
          "Mathematics: Using mathematics to solve problems.",
          "Systems Analysis: Determining how a system should work and how changes in conditions, operations, and the environment will affect outcomes.",
          "Systems Evaluation: Identifying measures or indicators of system performance and the actions needed to improve or correct performance, relative to the goals of the system.",
          "Science: Using scientific rules and methods to solve problems.",
          "Social Perceptiveness: Being aware of others' reactions and understanding why they react as they do.",
          "Time Management: Managing one's own time and the time of others.",
          "Active Learning: Understanding the implications of new information for both current and future problem-solving and decision-making.",
          "Operations Monitoring: Watching gauges, dials, or other indicators to make sure a machine is working properly.",
          "Monitoring: Monitoring/Assessing performance of yourself, other individuals, or organizations to make improvements or take corrective action.",
          "Coordination: Adjusting actions in relation to others' actions.",
          "Persuasion: Persuading others to change their minds or behavior.",
          "Negotiation: Bringing others together and trying to reconcile differences.",
          "Instructing: Teaching others how to do something.",
          "Service Orientation: Actively looking for ways to help people.",
          "Operations Analysis: Analyzing needs and product requirements to create a design.",
          "Management of Personnel Resources: Motivating, developing, and directing people as they work, identifying the best people for the job.",
          "Learning Strategies: Selecting and using training/instructional methods and procedures appropriate for the situation when learning or teaching new things.",
          "Technology Design: Generating or adapting equipment and technology to serve user needs.",
          "Quality Control Analysis: Conducting tests and inspections of products, services, or processes to evaluate quality or performance.",
        ],
        salaries: {
          MAW: "$51,550",
          MHW: "$24.78",
          TEN: "173,330",
        },
        schools: Unis,
      },
    ],
  },
  {
    name: "Education, Training, and Library Occupations",
    categories: [
      {
        name: "Agricultural Engineers",
        description:
          "Apply knowledge of engineering technology and biological science to agricultural problems concerned with power and machinery, electrification, structures, soil and water conservation, and processing of agricultural products.",
        dos: [
          "Conduct Educational Programs that provide farmers or farm cooperative members with information that can help them improve agricultural productivity.",
          "Discuss plans with clients, contractors, consultants, and other engineers so that they can be evaluated and necessary changes made.",
          "Meet with clients, such as district or regional councils, farmers, and developers, to discuss their normalize Repeated Slashes",
          "Prepare reports, sketches, working drawings, specifications, proposals, and budgets for proposed sites or systems.",
          "Plan and direct construction of rural electric-power distribution systems, and irrigation, drainage, and flood control systems for soil and water conservation.",
          "Provide advice on water quality and issues related to pollution management, river control, and ground and surface water resources.",
        ],
        education: ["Agricultural Engineering"],
        skills: [
          "Critical Thinking: Using logic and reasoning to identify the strengths and weaknesses of alternative solutions, conclusions, or approaches to problems.",
          "Complex Problem Solving: Identifying complex problems and reviewing related information to develop and evaluate options and implement solutions.",
          "Judgment and Decision Making: Considering the relative costs and benefits of potential actions to choose the most appropriate one.",
          "Reading Comprehension: Understanding written sentences and paragraphs in work-related documents.",
          "Active Listening: Giving full attention to what other people are saying, taking time to understand the points being made, asking questions as appropriate, and not interrupting at inappropriate times.",
          "Writing: Communicating effectively in writing as appropriate for the needs of the audience.",
          "Speaking: Talking to others to convey information effectively.",
          "Mathematics: Using mathematics to solve problems.",
          "Systems Analysis: Determining how a system should work and how changes in conditions, operations, and the environment will affect outcomes.",
          "Systems Evaluation: Identifying measures or indicators of system performance and the actions needed to improve or correct performance, relative to the goals of the system.",
          "Science: Using scientific rules and methods to solve problems.",
          "Social Perceptiveness: Being aware of others' reactions and understanding why they react as they do.",
          "Time Management: Managing one's own time and the time of others.",
          "Active Learning: Understanding the implications of new information for both current and future problem-solving and decision-making.",
          "Operations Monitoring: Watching gauges, dials, or other indicators to make sure a machine is working properly.",
          "Monitoring: Monitoring/Assessing performance of yourself, other individuals, or organizations to make improvements or take corrective action.",
          "Coordination: Adjusting actions in relation to others' actions.",
          "Persuasion: Persuading others to change their minds or behavior.",
          "Negotiation: Bringing others together and trying to reconcile differences.",
          "Instructing: Teaching others how to do something.",
          "Service Orientation: Actively looking for ways to help people.",
          "Operations Analysis: Analyzing needs and product requirements to create a design.",
          "Management of Personnel Resources: Motivating, developing, and directing people as they work, identifying the best people for the job.",
          "Learning Strategies: Selecting and using training/instructional methods and procedures appropriate for the situation when learning or teaching new things.",
          "Technology Design: Generating or adapting equipment and technology to serve user needs.",
          "Quality Control Analysis: Conducting tests and inspections of products, services, or processes to evaluate quality or performance.",
        ],
        salaries: {
          MAW: "$51,550",
          MHW: "$24.78",
          TEN: "173,330",
        },
        schools: Unis,
      },
    ],
  },
  {
    name: "Farming, Fishing, and Forestry Occupations",
    categories: [
      {
        name: "Agricultural Engineers",
        description:
          "Apply knowledge of engineering technology and biological science to agricultural problems concerned with power and machinery, electrification, structures, soil and water conservation, and processing of agricultural products.",
        dos: [
          "Conduct Educational Programs that provide farmers or farm cooperative members with information that can help them improve agricultural productivity.",
          "Discuss plans with clients, contractors, consultants, and other engineers so that they can be evaluated and necessary changes made.",
          "Meet with clients, such as district or regional councils, farmers, and developers, to discuss their normalize Repeated Slashes",
          "Prepare reports, sketches, working drawings, specifications, proposals, and budgets for proposed sites or systems.",
          "Plan and direct construction of rural electric-power distribution systems, and irrigation, drainage, and flood control systems for soil and water conservation.",
          "Provide advice on water quality and issues related to pollution management, river control, and ground and surface water resources.",
        ],
        education: ["Agricultural Engineering"],
        skills: [
          "Critical Thinking: Using logic and reasoning to identify the strengths and weaknesses of alternative solutions, conclusions, or approaches to problems.",
          "Complex Problem Solving: Identifying complex problems and reviewing related information to develop and evaluate options and implement solutions.",
          "Judgment and Decision Making: Considering the relative costs and benefits of potential actions to choose the most appropriate one.",
          "Reading Comprehension: Understanding written sentences and paragraphs in work-related documents.",
          "Active Listening: Giving full attention to what other people are saying, taking time to understand the points being made, asking questions as appropriate, and not interrupting at inappropriate times.",
          "Writing: Communicating effectively in writing as appropriate for the needs of the audience.",
          "Speaking: Talking to others to convey information effectively.",
          "Mathematics: Using mathematics to solve problems.",
          "Systems Analysis: Determining how a system should work and how changes in conditions, operations, and the environment will affect outcomes.",
          "Systems Evaluation: Identifying measures or indicators of system performance and the actions needed to improve or correct performance, relative to the goals of the system.",
          "Science: Using scientific rules and methods to solve problems.",
          "Social Perceptiveness: Being aware of others' reactions and understanding why they react as they do.",
          "Time Management: Managing one's own time and the time of others.",
          "Active Learning: Understanding the implications of new information for both current and future problem-solving and decision-making.",
          "Operations Monitoring: Watching gauges, dials, or other indicators to make sure a machine is working properly.",
          "Monitoring: Monitoring/Assessing performance of yourself, other individuals, or organizations to make improvements or take corrective action.",
          "Coordination: Adjusting actions in relation to others' actions.",
          "Persuasion: Persuading others to change their minds or behavior.",
          "Negotiation: Bringing others together and trying to reconcile differences.",
          "Instructing: Teaching others how to do something.",
          "Service Orientation: Actively looking for ways to help people.",
          "Operations Analysis: Analyzing needs and product requirements to create a design.",
          "Management of Personnel Resources: Motivating, developing, and directing people as they work, identifying the best people for the job.",
          "Learning Strategies: Selecting and using training/instructional methods and procedures appropriate for the situation when learning or teaching new things.",
          "Technology Design: Generating or adapting equipment and technology to serve user needs.",
          "Quality Control Analysis: Conducting tests and inspections of products, services, or processes to evaluate quality or performance.",
        ],
        salaries: {
          MAW: "$51,550",
          MHW: "$24.78",
          TEN: "173,330",
        },
        schools: Unis,
      },
    ],
  },
  {
    name: "Food Preparation and Serving Related Occupations",
    categories: [
      {
        name: "Agricultural Engineers",
        description:
          "Apply knowledge of engineering technology and biological science to agricultural problems concerned with power and machinery, electrification, structures, soil and water conservation, and processing of agricultural products.",
        dos: [
          "Conduct Educational Programs that provide farmers or farm cooperative members with information that can help them improve agricultural productivity.",
          "Discuss plans with clients, contractors, consultants, and other engineers so that they can be evaluated and necessary changes made.",
          "Meet with clients, such as district or regional councils, farmers, and developers, to discuss their normalize Repeated Slashes",
          "Prepare reports, sketches, working drawings, specifications, proposals, and budgets for proposed sites or systems.",
          "Plan and direct construction of rural electric-power distribution systems, and irrigation, drainage, and flood control systems for soil and water conservation.",
          "Provide advice on water quality and issues related to pollution management, river control, and ground and surface water resources.",
        ],
        education: ["Agricultural Engineering"],
        skills: [
          "Critical Thinking: Using logic and reasoning to identify the strengths and weaknesses of alternative solutions, conclusions, or approaches to problems.",
          "Complex Problem Solving: Identifying complex problems and reviewing related information to develop and evaluate options and implement solutions.",
          "Judgment and Decision Making: Considering the relative costs and benefits of potential actions to choose the most appropriate one.",
          "Reading Comprehension: Understanding written sentences and paragraphs in work-related documents.",
          "Active Listening: Giving full attention to what other people are saying, taking time to understand the points being made, asking questions as appropriate, and not interrupting at inappropriate times.",
          "Writing: Communicating effectively in writing as appropriate for the needs of the audience.",
          "Speaking: Talking to others to convey information effectively.",
          "Mathematics: Using mathematics to solve problems.",
          "Systems Analysis: Determining how a system should work and how changes in conditions, operations, and the environment will affect outcomes.",
          "Systems Evaluation: Identifying measures or indicators of system performance and the actions needed to improve or correct performance, relative to the goals of the system.",
          "Science: Using scientific rules and methods to solve problems.",
          "Social Perceptiveness: Being aware of others' reactions and understanding why they react as they do.",
          "Time Management: Managing one's own time and the time of others.",
          "Active Learning: Understanding the implications of new information for both current and future problem-solving and decision-making.",
          "Operations Monitoring: Watching gauges, dials, or other indicators to make sure a machine is working properly.",
          "Monitoring: Monitoring/Assessing performance of yourself, other individuals, or organizations to make improvements or take corrective action.",
          "Coordination: Adjusting actions in relation to others' actions.",
          "Persuasion: Persuading others to change their minds or behavior.",
          "Negotiation: Bringing others together and trying to reconcile differences.",
          "Instructing: Teaching others how to do something.",
          "Service Orientation: Actively looking for ways to help people.",
          "Operations Analysis: Analyzing needs and product requirements to create a design.",
          "Management of Personnel Resources: Motivating, developing, and directing people as they work, identifying the best people for the job.",
          "Learning Strategies: Selecting and using training/instructional methods and procedures appropriate for the situation when learning or teaching new things.",
          "Technology Design: Generating or adapting equipment and technology to serve user needs.",
          "Quality Control Analysis: Conducting tests and inspections of products, services, or processes to evaluate quality or performance.",
        ],
        salaries: {
          MAW: "$51,550",
          MHW: "$24.78",
          TEN: "173,330",
        },
        schools: Unis,
      },
    ],
  },
  {
    name: "Healthcare Practitioners and Technical Occupations",
    categories: [
      {
        name: "Agricultural Engineers",
        description:
          "Apply knowledge of engineering technology and biological science to agricultural problems concerned with power and machinery, electrification, structures, soil and water conservation, and processing of agricultural products.",
        dos: [
          "Conduct Educational Programs that provide farmers or farm cooperative members with information that can help them improve agricultural productivity.",
          "Discuss plans with clients, contractors, consultants, and other engineers so that they can be evaluated and necessary changes made.",
          "Meet with clients, such as district or regional councils, farmers, and developers, to discuss their normalize Repeated Slashes",
          "Prepare reports, sketches, working drawings, specifications, proposals, and budgets for proposed sites or systems.",
          "Plan and direct construction of rural electric-power distribution systems, and irrigation, drainage, and flood control systems for soil and water conservation.",
          "Provide advice on water quality and issues related to pollution management, river control, and ground and surface water resources.",
        ],
        education: ["Agricultural Engineering"],
        skills: [
          "Critical Thinking: Using logic and reasoning to identify the strengths and weaknesses of alternative solutions, conclusions, or approaches to problems.",
          "Complex Problem Solving: Identifying complex problems and reviewing related information to develop and evaluate options and implement solutions.",
          "Judgment and Decision Making: Considering the relative costs and benefits of potential actions to choose the most appropriate one.",
          "Reading Comprehension: Understanding written sentences and paragraphs in work-related documents.",
          "Active Listening: Giving full attention to what other people are saying, taking time to understand the points being made, asking questions as appropriate, and not interrupting at inappropriate times.",
          "Writing: Communicating effectively in writing as appropriate for the needs of the audience.",
          "Speaking: Talking to others to convey information effectively.",
          "Mathematics: Using mathematics to solve problems.",
          "Systems Analysis: Determining how a system should work and how changes in conditions, operations, and the environment will affect outcomes.",
          "Systems Evaluation: Identifying measures or indicators of system performance and the actions needed to improve or correct performance, relative to the goals of the system.",
          "Science: Using scientific rules and methods to solve problems.",
          "Social Perceptiveness: Being aware of others' reactions and understanding why they react as they do.",
          "Time Management: Managing one's own time and the time of others.",
          "Active Learning: Understanding the implications of new information for both current and future problem-solving and decision-making.",
          "Operations Monitoring: Watching gauges, dials, or other indicators to make sure a machine is working properly.",
          "Monitoring: Monitoring/Assessing performance of yourself, other individuals, or organizations to make improvements or take corrective action.",
          "Coordination: Adjusting actions in relation to others' actions.",
          "Persuasion: Persuading others to change their minds or behavior.",
          "Negotiation: Bringing others together and trying to reconcile differences.",
          "Instructing: Teaching others how to do something.",
          "Service Orientation: Actively looking for ways to help people.",
          "Operations Analysis: Analyzing needs and product requirements to create a design.",
          "Management of Personnel Resources: Motivating, developing, and directing people as they work, identifying the best people for the job.",
          "Learning Strategies: Selecting and using training/instructional methods and procedures appropriate for the situation when learning or teaching new things.",
          "Technology Design: Generating or adapting equipment and technology to serve user needs.",
          "Quality Control Analysis: Conducting tests and inspections of products, services, or processes to evaluate quality or performance.",
        ],
        salaries: {
          MAW: "$51,550",
          MHW: "$24.78",
          TEN: "173,330",
        },
        schools: Unis,
      },
    ],
  },
];

export const majors = [
  {
    name: "Education",
    MidMajor: [
      {
        name: "Bilingual, Multilingual, and Multicultural Education",
        lastMajor: [
          {
            name: "Bilingual and Multilingual Education",

            description:
              " A program that focuses on the design and provision of teaching and other educational services to bilingual/bicultural children or adults, and/or the design and implementation of educational programs having the goal of producing bilingual/bicultural individuals. Includes preparation to serve as teachers and administrators in bilingual/bicultural education programs.",
            Courses: [
              "Composition",
              "Education",
              "Foreign Language",
              "Linguistics",
            ],
            Careers: [
              "Adult Basic and Secondary Education and Literacy Teachers and Instructors",
              "Elementary School Teachers",
              " Except Special Education",
              " Kindergarten Teachers",
              "Except Special Education",
              "Middle School Teachers",
              " Except Special and Career / Technical Education",
              "Secondary School Teachers",
              "Except Special and Career / Technical Education",
              "Teachers and Instructors",
            ],
            Salaries: {
              MAW: "$51,550",
              MHW: "$24.78",
              TEN: "173,330",
            },
            Schools: Unis,
          },
          {
            name: "Indian/Native American Education",
            description:
              "A program that focuses on the design and implementation of instructional and advising services for American Indian, Alaska Native, and Hawaiian Native students at various learning levels and that prepares individuals to perform teaching and administrative functions in Tribal/First Nation schools. Includes instruction in the cultural traditions and social patterns, history and politics, learning styles and issues, curriculum design, LEP and minority education strategies, counseling techniques and social issues, rural education services, distance education, adult education techniques, school administration, applicable laws and regulations, and research issues.",
            Courses: [
              "Anthropology",
              "Art",
              "Ethnobiology",
              "History",
              "Language Studies",
              "Religion",
              "Sociology",
            ],
            Careers: ["Teachers and Instructors, All Other"],
            Salaries: {},
          },
          {
            name: "Multicultural Education",
            description:
              "A program that focuses on the design, and implementation of instructional and advising services for culturally diverse learning populations. Includes instruction in cultural diversity, at-risk populations, multilingual and ESL education, program and curriculum design, instructional technology, information resources, LEP and minority education strategies, counseling and communicating with multicultural populations, law and regulations, and applications to specific cultural groups, educational services, and research issues.",
            Courses: [],
            Careers: [
              "Adult Basic and Secondary Education and Literacy Teachers and Instructors",
              "Teachers and Instructors, All Other",
            ],
            Salaries: {
              MAW: "$51,080",
              MHW: "$24.56",
              TEN: "68,510",
            },
            Schools: Unis,
          },
        ],
      },
      {
        name: "Curriculum and Instruction",
        lastMajor: [
          {
            name: "Curriculum and Instruction",
            description:
              "A program that focuses on the curriculum and related instructional processes and tools, and that may prepare individuals to serve as professional curriculum specialists. Includes instruction in curriculum theory, curriculum design and planning, instructional material design and evaluation, curriculum evaluation, and applications to specific subject matter, programs or educational levels.",
            Courses: [
              "Cirriculum Application",
              "Cirriculum Evaluation",
              "Cirriculum Planning",
              "Curriculum Design",
            ],
            Careers: ["Instructional Coordinators"],
            Salaries: {
              MAW: "$61,270",
              MHW: "$29.46",
              TEN: "128,780",
            },
            Schools: Unis,
          },
        ],
      },
      {
        name: "Educational Administration and Supervision",
        lastMajor: [
          {
            name: "Adult and Continuing Education Administration",
            description:
              "A program that focuses on the curriculum and related instructional processes and tools, and that may prepare individuals to serve as professional curriculum specialists. Includes instruction in curriculum theory, curriculum design and planning, instructional material design and evaluation, curriculum evaluation, and applications to specific subject matter, programs or educational levels.",
            Courses: [
              "Cirriculum Application",
              "Cirriculum Evaluation",
              "Cirriculum Planning",
              "Curriculum Design",
            ],
            Careers: ["Instructional Coordinators"],
            Salaries: {
              MAW: "$61,270",
              MHW: "$29.46",
              TEN: "128,780",
            },
            Schools: Unis,
          },

          {
            name: "Higher Education/Higher Education Administration",
            description:
              "A program that focuses on the curriculum and related instructional processes and tools, and that may prepare individuals to serve as professional curriculum specialists. Includes instruction in curriculum theory, curriculum design and planning, instructional material design and evaluation, curriculum evaluation, and applications to specific subject matter, programs or educational levels.",
            Courses: [
              "Cirriculum Application",
              "Cirriculum Evaluation",
              "Cirriculum Planning",
              "Curriculum Design",
            ],
            Careers: ["Instructional Coordinators"],
            Salaries: {
              MAW: "$61,270",
              MHW: "$29.46",
              TEN: "128,780",
            },
            Schools: Unis,
          },
          {
            name: "Secondary School Administration/Principalship",
            description:
              "A program that focuses on the curriculum and related instructional processes and tools, and that may prepare individuals to serve as professional curriculum specialists. Includes instruction in curriculum theory, curriculum design and planning, instructional material design and evaluation, curriculum evaluation, and applications to specific subject matter, programs or educational levels.",
            Courses: [
              "Cirriculum Application",
              "Cirriculum Evaluation",
              "Cirriculum Planning",
              "Curriculum Design",
            ],
            Careers: ["Instructional Coordinators"],
            Salaries: {
              MAW: "$61,270",
              MHW: "$29.46",
              TEN: "128,780",
            },
            Schools: Unis,
          },
          {
            name: "Superintendency and Educational System Administration",
            description:
              "A program that focuses on the curriculum and related instructional processes and tools, and that may prepare individuals to serve as professional curriculum specialists. Includes instruction in curriculum theory, curriculum design and planning, instructional material design and evaluation, curriculum evaluation, and applications to specific subject matter, programs or educational levels.",
            Courses: [
              "Cirriculum Application",
              "Cirriculum Evaluation",
              "Cirriculum Planning",
              "Curriculum Design",
            ],
            Careers: ["Instructional Coordinators"],
            Salaries: {
              MAW: "$61,270",
              MHW: "$29.46",
              TEN: "128,780",
            },
            Schools: Unis,
          },
        ],
      },
      {
        name: "Educational Assessment, Evaluation, and Research",
        lastMajor: [
          {
            name: "Educational Assessment, Testing, and Measurement",
            description:
              "A program that focuses on the curriculum and related instructional processes and tools, and that may prepare individuals to serve as professional curriculum specialists. Includes instruction in curriculum theory, curriculum design and planning, instructional material design and evaluation, curriculum evaluation, and applications to specific subject matter, programs or educational levels.",
            Courses: [
              "Cirriculum Application",
              "Cirriculum Evaluation",
              "Cirriculum Planning",
              "Curriculum Design",
            ],
            Careers: ["Instructional Coordinators"],
            Salaries: {
              MAW: "$61,270",
              MHW: "$29.46",
              TEN: "128,780",
            },
            Schools: Unis,
          },
          {
            name: "Educational Evaluation and Research",
            description:
              "A program that focuses on the curriculum and related instructional processes and tools, and that may prepare individuals to serve as professional curriculum specialists. Includes instruction in curriculum theory, curriculum design and planning, instructional material design and evaluation, curriculum evaluation, and applications to specific subject matter, programs or educational levels.",
            Courses: [
              "Cirriculum Application",
              "Cirriculum Evaluation",
              "Cirriculum Planning",
              "Curriculum Design",
            ],
            Careers: ["Instructional Coordinators"],
            Salaries: {
              MAW: "$61,270",
              MHW: "$29.46",
              TEN: "128,780",
            },
            Schools: Unis,
          },
          {
            name: "Educational Statistics and Research Methods",
            description:
              "A program that focuses on the curriculum and related instructional processes and tools, and that may prepare individuals to serve as professional curriculum specialists. Includes instruction in curriculum theory, curriculum design and planning, instructional material design and evaluation, curriculum evaluation, and applications to specific subject matter, programs or educational levels.",
            Courses: [
              "Cirriculum Application",
              "Cirriculum Evaluation",
              "Cirriculum Planning",
              "Curriculum Design",
            ],
            Careers: ["Instructional Coordinators"],
            Salaries: {
              MAW: "$61,270",
              MHW: "$29.46",
              TEN: "128,780",
            },
            Schools: Unis,
          },
          {
            name: "Learning Sciences",
            description:
              "A program that focuses on the curriculum and related instructional processes and tools, and that may prepare individuals to serve as professional curriculum specialists. Includes instruction in curriculum theory, curriculum design and planning, instructional material design and evaluation, curriculum evaluation, and applications to specific subject matter, programs or educational levels.",
            Courses: [
              "Cirriculum Application",
              "Cirriculum Evaluation",
              "Cirriculum Planning",
              "Curriculum Design",
            ],
            Careers: ["Instructional Coordinators"],
            Salaries: {
              MAW: "$61,270",
              MHW: "$29.46",
              TEN: "128,780",
            },
            Schools: Unis,
          },
        ],
      },
      {
        name: "Educational/Instructional Media Design",
        lastMajor: [
          {
            name: "Educational/Instructional Technology",
            description:
              "A program that focuses on the curriculum and related instructional processes and tools, and that may prepare individuals to serve as professional curriculum specialists. Includes instruction in curriculum theory, curriculum design and planning, instructional material design and evaluation, curriculum evaluation, and applications to specific subject matter, programs or educational levels.",
            Courses: [
              "Cirriculum Application",
              "Cirriculum Evaluation",
              "Cirriculum Planning",
              "Curriculum Design",
            ],
            Careers: ["Instructional Coordinators"],
            Salaries: {
              MAW: "$61,270",
              MHW: "$29.46",
              TEN: "128,780",
            },
            Schools: Unis,
          },
        ],
      },

      {
        name: "Education",
        lastMajor: [
          {
            name: "Education",
            description:
              "A program that focuses on the curriculum and related instructional processes and tools, and that may prepare individuals to serve as professional curriculum specialists. Includes instruction in curriculum theory, curriculum design and planning, instructional material design and evaluation, curriculum evaluation, and applications to specific subject matter, programs or educational levels.",
            Courses: [
              "Cirriculum Application",
              "Cirriculum Evaluation",
              "Cirriculum Planning",
              "Curriculum Design",
            ],
            Careers: ["Instructional Coordinators"],
            Salaries: {
              MAW: "$61,270",
              MHW: "$29.46",
              TEN: "128,780",
            },
            Schools: Unis,
          },
        ],
      },
      {
        name: "Teaching English or French as a Second or Foreign Language",
        lastMajor: [
          {
            name: "Teaching English as a Second or Foreign Language/ESL Language Instructor",
            description:
              "A program that focuses on the curriculum and related instructional processes and tools, and that may prepare individuals to serve as professional curriculum specialists. Includes instruction in curriculum theory, curriculum design and planning, instructional material design and evaluation, curriculum evaluation, and applications to specific subject matter, programs or educational levels.",
            Courses: [
              "Cirriculum Application",
              "Cirriculum Evaluation",
              "Cirriculum Planning",
              "Curriculum Design",
            ],
            Careers: ["Instructional Coordinators"],
            Salaries: {
              MAW: "$61,270",
              MHW: "$29.46",
              TEN: "128,780",
            },
            Schools: Unis,
          },
          {
            name: "Teaching French as a Second or Foreign Language",
            description:
              "A program that focuses on the curriculum and related instructional processes and tools, and that may prepare individuals to serve as professional curriculum specialists. Includes instruction in curriculum theory, curriculum design and planning, instructional material design and evaluation, curriculum evaluation, and applications to specific subject matter, programs or educational levels.",
            Courses: [
              "Cirriculum Application",
              "Cirriculum Evaluation",
              "Cirriculum Planning",
              "Curriculum Design",
            ],
            Careers: ["Instructional Coordinators"],
            Salaries: {
              MAW: "$61,270",
              MHW: "$29.46",
              TEN: "128,780",
            },
            Schools: Unis,
          },
        ],
      },
      {
        name: "Teaching Assistants/Aides",
        lastMajor: [
          {
            name: "Adult Literacy Tutor/Instructor",
            description:
              "A program that focuses on the curriculum and related instructional processes and tools, and that may prepare individuals to serve as professional curriculum specialists. Includes instruction in curriculum theory, curriculum design and planning, instructional material design and evaluation, curriculum evaluation, and applications to specific subject matter, programs or educational levels.",
            Courses: [
              "Cirriculum Application",
              "Cirriculum Evaluation",
              "Cirriculum Planning",
              "Curriculum Design",
            ],
            Careers: ["Instructional Coordinators"],
            Salaries: {
              MAW: "$61,270",
              MHW: "$29.46",
              TEN: "128,780",
            },
            Schools: Unis,
          },
          {
            name: "Teacher Assistant/Aide",
            description:
              "A program that focuses on the curriculum and related instructional processes and tools, and that may prepare individuals to serve as professional curriculum specialists. Includes instruction in curriculum theory, curriculum design and planning, instructional material design and evaluation, curriculum evaluation, and applications to specific subject matter, programs or educational levels.",
            Courses: [
              "Cirriculum Application",
              "Cirriculum Evaluation",
              "Cirriculum Planning",
              "Curriculum Design",
            ],
            Careers: ["Instructional Coordinators"],
            Salaries: {
              MAW: "$61,270",
              MHW: "$29.46",
              TEN: "128,780",
            },
            Schools: Unis,
          },
        ],
      },
    ],
  },
  {
    name: "Engineering",

    MidMajor: [
      {
        name: "Agricultural Engineering",
        lastMajor: [
          {
            name: "Agricultural Engineering",
            description:
              "A program that focuses on the curriculum and related instructional processes and tools, and that may prepare individuals to serve as professional curriculum specialists. Includes instruction in curriculum theory, curriculum design and planning, instructional material design and evaluation, curriculum evaluation, and applications to specific subject matter, programs or educational levels.",
            Courses: [
              "Cirriculum Application",
              "Cirriculum Evaluation",
              "Cirriculum Planning",
              "Curriculum Design",
            ],
            Careers: ["Instructional Coordinators"],
            Salaries: {
              MAW: "$61,270",
              MHW: "$29.46",
              TEN: "128,780",
            },
            Schools: Unis,
          },
        ],
      },
      {
        name: "Architectural Engineering",
        lastMajor: [
          {
            name: "Architectural Engineering",
            description:
              "A program that focuses on the curriculum and related instructional processes and tools, and that may prepare individuals to serve as professional curriculum specialists. Includes instruction in curriculum theory, curriculum design and planning, instructional material design and evaluation, curriculum evaluation, and applications to specific subject matter, programs or educational levels.",
            Courses: [
              "Cirriculum Application",
              "Cirriculum Evaluation",
              "Cirriculum Planning",
              "Curriculum Design",
            ],
            Careers: ["Instructional Coordinators"],
            Salaries: {
              MAW: "$61,270",
              MHW: "$29.46",
              TEN: "128,780",
            },
            Schools: Unis,
          },
        ],
      },

      {
        name: "Civil Engineering",
        lastMajor: [
          {
            name: "Civil Engineering",
            description:
              "A program that focuses on the curriculum and related instructional processes and tools, and that may prepare individuals to serve as professional curriculum specialists. Includes instruction in curriculum theory, curriculum design and planning, instructional material design and evaluation, curriculum evaluation, and applications to specific subject matter, programs or educational levels.",
            Courses: [
              "Cirriculum Application",
              "Cirriculum Evaluation",
              "Cirriculum Planning",
              "Curriculum Design",
            ],
            Careers: ["Instructional Coordinators"],
            Salaries: {
              MAW: "$61,270",
              MHW: "$29.46",
              TEN: "128,780",
            },
            Schools: Unis,
          },
          {
            name: "Geotechnical and Geoenvironmental Engineering",
            description:
              "A program that focuses on the curriculum and related instructional processes and tools, and that may prepare individuals to serve as professional curriculum specialists. Includes instruction in curriculum theory, curriculum design and planning, instructional material design and evaluation, curriculum evaluation, and applications to specific subject matter, programs or educational levels.",
            Courses: [
              "Cirriculum Application",
              "Cirriculum Evaluation",
              "Cirriculum Planning",
              "Curriculum Design",
            ],
            Careers: ["Instructional Coordinators"],
            Salaries: {
              MAW: "$61,270",
              MHW: "$29.46",
              TEN: "128,780",
            },
            Schools: Unis,
          },
          {
            name: "Structural Engineering",
            description:
              "A program that focuses on the curriculum and related instructional processes and tools, and that may prepare individuals to serve as professional curriculum specialists. Includes instruction in curriculum theory, curriculum design and planning, instructional material design and evaluation, curriculum evaluation, and applications to specific subject matter, programs or educational levels.",
            Courses: [
              "Cirriculum Application",
              "Cirriculum Evaluation",
              "Cirriculum Planning",
              "Curriculum Design",
            ],
            Careers: ["Instructional Coordinators"],
            Salaries: {
              MAW: "$61,270",
              MHW: "$29.46",
              TEN: "128,780",
            },
            Schools: Unis,
          },
          {
            name: "Transportation and Highway Engineering",
            description:
              "A program that focuses on the curriculum and related instructional processes and tools, and that may prepare individuals to serve as professional curriculum specialists. Includes instruction in curriculum theory, curriculum design and planning, instructional material design and evaluation, curriculum evaluation, and applications to specific subject matter, programs or educational levels.",
            Courses: [
              "Cirriculum Application",
              "Cirriculum Evaluation",
              "Cirriculum Planning",
              "Curriculum Design",
            ],
            Careers: ["Instructional Coordinators"],
            Salaries: {
              MAW: "$61,270",
              MHW: "$29.46",
              TEN: "128,780",
            },
            Schools: Unis,
          },
          {
            name: "Water Resources Engineering",
            description:
              "A program that focuses on the curriculum and related instructional processes and tools, and that may prepare individuals to serve as professional curriculum specialists. Includes instruction in curriculum theory, curriculum design and planning, instructional material design and evaluation, curriculum evaluation, and applications to specific subject matter, programs or educational levels.",
            Courses: [
              "Cirriculum Application",
              "Cirriculum Evaluation",
              "Cirriculum Planning",
              "Curriculum Design",
            ],
            Careers: ["Instructional Coordinators"],
            Salaries: {
              MAW: "$61,270",
              MHW: "$29.46",
              TEN: "128,780",
            },
            Schools: Unis,
          },
        ],
      },
      {
        name: "Computer Engineering",
        lastMajor: [
          {
            name: "Computer Engineering",
            description:
              "A program that focuses on the curriculum and related instructional processes and tools, and that may prepare individuals to serve as professional curriculum specialists. Includes instruction in curriculum theory, curriculum design and planning, instructional material design and evaluation, curriculum evaluation, and applications to specific subject matter, programs or educational levels.",
            Courses: [
              "Cirriculum Application",
              "Cirriculum Evaluation",
              "Cirriculum Planning",
              "Curriculum Design",
            ],
            Careers: ["Instructional Coordinators"],
            Salaries: {
              MAW: "$61,270",
              MHW: "$29.46",
              TEN: "128,780",
            },
            Schools: Unis,
          },
          {
            name: "Computer Hardware Engineering",
            description:
              "A program that focuses on the curriculum and related instructional processes and tools, and that may prepare individuals to serve as professional curriculum specialists. Includes instruction in curriculum theory, curriculum design and planning, instructional material design and evaluation, curriculum evaluation, and applications to specific subject matter, programs or educational levels.",
            Courses: [
              "Cirriculum Application",
              "Cirriculum Evaluation",
              "Cirriculum Planning",
              "Curriculum Design",
            ],
            Careers: ["Instructional Coordinators"],
            Salaries: {
              MAW: "$61,270",
              MHW: "$29.46",
              TEN: "128,780",
            },
            Schools: Unis,
          },
          {
            name: "Computer Software Engineering",
            description:
              "A program that focuses on the curriculum and related instructional processes and tools, and that may prepare individuals to serve as professional curriculum specialists. Includes instruction in curriculum theory, curriculum design and planning, instructional material design and evaluation, curriculum evaluation, and applications to specific subject matter, programs or educational levels.",
            Courses: [
              "Cirriculum Application",
              "Cirriculum Evaluation",
              "Cirriculum Planning",
              "Curriculum Design",
            ],
            Careers: ["Instructional Coordinators"],
            Salaries: {
              MAW: "$61,270",
              MHW: "$29.46",
              TEN: "128,780",
            },
            Schools: Unis,
          },
        ],
      },
      {
        name: "Engineering Mechanics",
        lastMajor: [
          {
            name: "Engineering Mechanics",
            description:
              "A program that focuses on the curriculum and related instructional processes and tools, and that may prepare individuals to serve as professional curriculum specialists. Includes instruction in curriculum theory, curriculum design and planning, instructional material design and evaluation, curriculum evaluation, and applications to specific subject matter, programs or educational levels.",
            Courses: [
              "Cirriculum Application",
              "Cirriculum Evaluation",
              "Cirriculum Planning",
              "Curriculum Design",
            ],
            Careers: ["Instructional Coordinators"],
            Salaries: {
              MAW: "$61,270",
              MHW: "$29.46",
              TEN: "128,780",
            },
            Schools: Unis,
          },
        ],
      },
      {
        name: "Electrical, Electronics and Communications Engineering",
        lastMajor: [
          {
            name: " Electrical and Electronics Engineering",
            description:
              "A program that focuses on the curriculum and related instructional processes and tools, and that may prepare individuals to serve as professional curriculum specialists. Includes instruction in curriculum theory, curriculum design and planning, instructional material design and evaluation, curriculum evaluation, and applications to specific subject matter, programs or educational levels.",
            Courses: [
              "Cirriculum Application",
              "Cirriculum Evaluation",
              "Cirriculum Planning",
              "Curriculum Design",
            ],
            Careers: ["Instructional Coordinators"],
            Salaries: {
              MAW: "$61,270",
              MHW: "$29.46",
              TEN: "128,780",
            },
            Schools: Unis,
          },
          {
            name: "Laser and Optical Engineering",
            description:
              "A program that focuses on the curriculum and related instructional processes and tools, and that may prepare individuals to serve as professional curriculum specialists. Includes instruction in curriculum theory, curriculum design and planning, instructional material design and evaluation, curriculum evaluation, and applications to specific subject matter, programs or educational levels.",
            Courses: [
              "Cirriculum Application",
              "Cirriculum Evaluation",
              "Cirriculum Planning",
              "Curriculum Design",
            ],
            Careers: ["Instructional Coordinators"],
            Salaries: {
              MAW: "$61,270",
              MHW: "$29.46",
              TEN: "128,780",
            },
            Schools: Unis,
          },
          {
            name: "Telecommunications Engineering",
            description:
              "A program that focuses on the curriculum and related instructional processes and tools, and that may prepare individuals to serve as professional curriculum specialists. Includes instruction in curriculum theory, curriculum design and planning, instructional material design and evaluation, curriculum evaluation, and applications to specific subject matter, programs or educational levels.",
            Courses: [
              "Cirriculum Application",
              "Cirriculum Evaluation",
              "Cirriculum Planning",
              "Curriculum Design",
            ],
            Careers: ["Instructional Coordinators"],
            Salaries: {
              MAW: "$61,270",
              MHW: "$29.46",
              TEN: "128,780",
            },
            Schools: Unis,
          },
        ],
      },
      {
        name: "Engineering Science",
        lastMajor: [
          {
            name: "Engineering Science",
            description:
              "A program that focuses on the curriculum and related instructional processes and tools, and that may prepare individuals to serve as professional curriculum specialists. Includes instruction in curriculum theory, curriculum design and planning, instructional material design and evaluation, curriculum evaluation, and applications to specific subject matter, programs or educational levels.",
            Courses: [
              "Cirriculum Application",
              "Cirriculum Evaluation",
              "Cirriculum Planning",
              "Curriculum Design",
            ],
            Careers: ["Instructional Coordinators"],
            Salaries: {
              MAW: "$61,270",
              MHW: "$29.46",
              TEN: "128,780",
            },
            Schools: Unis,
          },
        ],
      },
      {
        name: "Engineering",
        lastMajor: [
          {
            name: " Engineering",
            description:
              "A program that focuses on the curriculum and related instructional processes and tools, and that may prepare individuals to serve as professional curriculum specialists. Includes instruction in curriculum theory, curriculum design and planning, instructional material design and evaluation, curriculum evaluation, and applications to specific subject matter, programs or educational levels.",
            Courses: [
              "Cirriculum Application",
              "Cirriculum Evaluation",
              "Cirriculum Planning",
              "Curriculum Design",
            ],
            Careers: ["Instructional Coordinators"],
            Salaries: {
              MAW: "$61,270",
              MHW: "$29.46",
              TEN: "128,780",
            },
            Schools: Unis,
          },
          {
            name: " Pre-Engineering",
            description:
              "A program that focuses on the curriculum and related instructional processes and tools, and that may prepare individuals to serve as professional curriculum specialists. Includes instruction in curriculum theory, curriculum design and planning, instructional material design and evaluation, curriculum evaluation, and applications to specific subject matter, programs or educational levels.",
            Courses: [
              "Cirriculum Application",
              "Cirriculum Evaluation",
              "Cirriculum Planning",
              "Curriculum Design",
            ],
            Careers: ["Instructional Coordinators"],
            Salaries: {
              MAW: "$61,270",
              MHW: "$29.46",
              TEN: "128,780",
            },
            Schools: Unis,
          },
        ],
      },
    ],
  },
];

export const majorsSkills = {
  "majors": [
    {
      "name": "Business Administration",
      "description": 'Business Administration is a versatile field that focuses on the management and organization of business operations. It covers a wide range of activities and skills related to planning, organizing, directing, and controlling the resources and processes required for the efficient functioning of an organization. Business administrators play a crucial role in ensuring that an organization achieves its goals and operates effectively.',
      "skills": ["Time Management", "Leadership", "Problem Solving", "Organization", "Leadership", "Communication", "Problem Solving", "Strategic Planning", "Decision Making"],
      "careers" : [
  "Business Analyst",
  "Financial Analyst",
  "Marketing Manager",
  "Human Resources Manager",
  "Operations Manager",
  "Entrepreneur",
  "Management Consultant",
  "Supply Chain Manager",
  "Sales Manager",
  "Executive Assistant",
]
    },
    {
    "name": "Computer Science",
    "description": "Computer Science involves the study of computers and computational systems. It encompasses various areas such as programming, algorithm design, and problem-solving.",
    "skills": ["Time Management", "Analytical Skills", "Programming", "Problem Solving", "Programming", "Algorithm Design", "Problem Solving", "Adaptability", "Research Skills"],
    "careers": [
      "Software Developer",
      "Data Scientist",
      "Computer Systems Analyst",
      "Network Administrator",
      "Cybersecurity Analyst",
      "Database Administrator",
      "AI/Machine Learning Engineer",
      "Web Developer",
      "IT Project Manager",
      "Computer Science Professor"
    ]
  },
    {
    "name": "Psychology",
    "description": "Psychology is the scientific study of the mind and behavior. It explores various aspects of human cognition, emotion, and behavior.",
    "skills": ["Time Management", "Communication", "Research Skills", "Communication", "Research Skills", "Adaptability" , "Critical Thinking"],
    "careers": [
      "Clinical Psychologist",
      "Counselor",
      "Industrial-Organizational Psychologist",
      "School Psychologist",
      "Forensic Psychologist",
      "Sports Psychologist",
      "Human Resources Specialist",
      "Market Research Analyst",
      "Behavioral Therapist",
      "Neuropsychologist"
    ]
  },
    
    {
    "name": "Management Information Systems",
    "description": "Management Information Systems (MIS) focuses on the use of technology to solve business problems and improve organizational efficiency.",
    "skills": ["Organization", "Problem Solving", "Technology"],
    "careers": [
      "IT Manager",
      "Systems Analyst",
      "Database Administrator",
      "Business Intelligence Analyst",
      "IT Consultant",
      "Network Administrator",
      "Project Manager",
      "Data Analyst",
      "Cybersecurity Analyst",
      "Software Developer"
    ]
  },
    {
    "name": "Public Administration",
    "description": "Public Administration involves the implementation of government policies and programs. It focuses on effective public service delivery and governance.",
    "skills": ["Organization", "Policy Analysis", "Public Management"],
    "careers": [
      "Public Administrator",
      "Policy Analyst",
      "City Manager",
      "Public Relations Specialist",
      "Nonprofit Manager",
      "Political Analyst",
      "Government Consultant",
      "Urban Planner",
      "Public Health Administrator",
      "Public Affairs Specialist"
    ]
  },
    {
    "name": "Communication Studies",
    "description": "Communication Studies explores the processes of human communication, including verbal and nonverbal communication, rhetoric, and media studies.",
    "skills": ["Effective Communication", "Public Speaking", "Interpersonal Skills"],
    "careers": [
      "Public Relations Specialist",
      "Media Planner",
      "Social Media Manager",
      "Speechwriter",
      "Event Planner",
      "Market Research Analyst",
      "Journalist",
      "Corporate Trainer",
      "Human Resources Specialist",
      "Communication Consultant"
    ]
  },
    {
    "name": "Journalism",
    "description": "Journalism involves gathering, analyzing, and presenting news and information to the public through various media channels.",
    "skills": ["Effective Communication", "Writing", "Interviewing", "Writing and Editing", "Communication", "Research Skills", "Writing and Editing", "Communication", "Research Skills"],
    "careers": [
      "Journalist",
      "Editor",
      "News Anchor",
      "Reporter",
      "Content Strategist",
      "Copywriter",
      "Public Relations Specialist",
      "Media Producer",
      "Multimedia Journalist",
      "Photojournalist"
    ]
  },
    {
    "name": "Marketing",
    "description": "Marketing focuses on promoting products or services through various strategies, including advertising, market research, and brand management.",
    "skills": ["Effective Communication", "Advertising", "Market Research"],
    "careers": [
      "Marketing Manager",
      "Advertising Manager",
      "Market Research Analyst",
      "Brand Manager",
      "Digital Marketing Specialist",
      "Public Relations Specialist",
      "Sales Manager",
      "Social Media Manager",
      "Content Marketing Manager",
      "Event Planner"
    ]
  },
    {
    "name": "Philosophy",
    "description": "Philosophy involves the study of fundamental questions related to existence, knowledge, values, reason, mind, and language.",
    "skills": ["Critical Thinking", "Logic", "Analytical Skills"],
    "careers": [
      "Philosopher",
      "Ethics Consultant",
      "Policy Analyst",
      "Lawyer",
      "Academic Researcher",
      "Editor",
      "Public Relations Specialist",
      "Think Tank Analyst",
      "Critical Thinking Trainer",
      "Content Strategist"
    ]
  },
    {
    "name": "Biology",
    "description": "Biology is the scientific study of living organisms and their interactions with each other and their environments.",
    "skills": ["Research Skills", "Lab Techniques", "Analytical Skills", "Research Skills", "Lab Techniques", "Analytical Skills"],
    "careers": [
      "Biologist",
      "Research Scientist",
      "Biomedical Engineer",
      "Environmental Scientist",
      "Pharmaceutical Researcher",
      "Laboratory Technician",
      "Zoologist",
      "Conservation Scientist",
      "Forensic Scientist",
      "Genetic Counselor"
    ]
  },
    {
    "name": "English Literature",
    "description": "English Literature involves the study of written works in the English language, including novels, poetry, and drama, from various periods and cultures.",
    "skills": ["Writing and Editing", "Critical Thinking", "Writing and Editing", "Critical Thinking"],
    "careers": [
      "Writer",
      "Editor",
      "Literary Critic",
      "Content Strategist",
      "Copywriter",
      "Academic Researcher",
      "Librarian",
      "Publishing Specialist",
      "Communications Officer",
      "Teaching/Professor"
    ]
  },
   
    {
  "name": "Engineering",
  "description": "Engineering involves the application of scientific and mathematical principles to design and create systems, structures, devices, and processes that solve practical problems.",
  "skills": ["Problem Solving", "Mathematics", "Technical Analysis"],
  "careers": [
    "Civil Engineer",
    "Mechanical Engineer",
    "Electrical Engineer",
    "Aerospace Engineer",
    "Chemical Engineer",
    "Biomedical Engineer",
    "Environmental Engineer",
    "Computer Hardware Engineer",
    "Structural Engineer",
    "Materials Engineer"
  ]
},
    {
    "name": "Creative Writing",
    "description": "Creative Writing involves the creation of original works of fiction, nonfiction, poetry, and other forms of literary expression.",
    "skills": ["Writing and Editing", "Creativity"],
    "careers": [
      "Author",
      "Screenwriter",
      "Copywriter",
      "Content Creator",
      "Editor",
      "Creative Writing Professor",
      "Journalist",
      "Literary Agent",
      "Ghostwriter",
      "Advertising Copywriter"
    ]
  },
  ]
}

export const careerSkills = {
  'skill' : [
    {
      "name": "Project Manager",
      "skills": ["Time Management", "Leadership", "Communication"]
    },
    {
      "name": "Executive Assistant",
      "skills": ["Time Management", "Organization", "Attention to Detail"]
    },
    {
      "name": "Event Planner",
      "skills": ["Time Management", "Creativity", "Problem Solving"]
  },
    {
      "name": "Logistics Coordinator",
      "skills": ["Organization", "Problem Solving", "Communication"]
  },
    {
      "name": "Public Relations Specialist",
      "skills": ["Effective Communication", "Media Relations", "Writing"]
    },
    {
      "name": "Marketing Manager",
      "skills": ["Effective Communication", "Strategic Planning", "Market Research"]
    },
    {
      "name": "Human Resources Manager",
      "skills": ["Effective Communication", "Employee Relations", "Recruitment"]
  },
    {
      "name": "Management Consultant",
      "skills": ["Critical Thinking", "Problem Solving", "Analytical Skills"]
    },
    {
      "name": "Data Scientist",
      "skills": ["Critical Thinking", "Data Analysis", "Statistical Modeling"]
    },
    {
      "name": "Research Analyst",
      "skills": ["Critical Thinking", "Research Skills", "Attention to Detail"]
  },
    {
      "name": "Software Developer",
      "skills": ["Problem Solving", "Programming", "Logical Thinking"]
    },
    {
      "name": "Mechanical Engineer",
      "skills": ["Problem Solving", "Engineering Design", "Analytical Skills"]
    },
    {
      "name": "Financial Analyst",
      "skills": ["Problem Solving", "Financial Modeling", "Data Analysis"]
  },
    {
      "name": "Content Writer",
      "skills": ["Writing and Editing", "Creativity", "Adaptability"]
    },
    {
      "name": "Editor",
      "skills": ["Writing and Editing", "Attention to Detail", "Communication"]
    },
    {
      "name": "Technical Writer",
      "skills": ["Writing and Editing", "Research Skills", "Clarity"]
  },
    {
      "name": "Change Management Consultant",
      "skills": ["Adaptability", "Communication", "Problem Solving"]
    },
    {
      "name": "Entrepreneur",
      "skills": ["Adaptability", "Risk-taking", "Innovativeness"]
    },
    {
      "name": "Project Manager",
      "skills": ["Adaptability", "Leadership", "Critical Thinking"]
  },
    {
      "name": "Market Research Analyst",
      "skills": ["Research Skills", "Analytical Skills", "Problem Solving"]
    },
    {
      "name": "Scientific Researcher",
      "skills": ["Research Skills", "Critical Thinking", "Attention to Detail"]
    },
    {
      "name": "Academic Researcher",
      "skills": ["Research Skills", "Writing and Editing", "Data Analysis"]
    },
  ]
}

