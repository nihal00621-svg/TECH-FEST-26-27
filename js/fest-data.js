/**
 * ==============================================================================
 * TECH FEST CENTRALIZED EVENT DATA REPOSITORY
 * ==============================================================================
 * This file serves as the single source of truth for the Tech Fest website.
 * Update details here and all sections (Hero, Programs, Schedule, Venues,
 * Coordinators, Emergency, FAQs, Sponsors) will dynamically update across
 * the entire website without modifying the HTML structure.
 * ==============================================================================
 */

const FEST_DATA = {
  // ----------------------------------------------------------------------------
  // 1. GENERAL FEST & COLLEGE CONFIGURATION
  // ----------------------------------------------------------------------------
  config: {
    festName: "ELECSPHIRE 2026",
    festShortName: "ELECSPHIRE",
    festLogoText: "ELEC",
    collegeName: "Vidya Academy of Science And Technology (VAST)",
    department: "Department of Electrical & Electronics Engineering (EEE)",
    tagline: "Where Technology Meets Innovation",
    themeDescription: "The premier national-level technical symposium hosted by the Department of Electrical & Electronics Engineering (EEE), Vidya Academy of Science and Technology (VAST), Thalakottukara.",
    eventDate: "October 16 – 17, 2026",
    eventDaysCount: 2,
    venue: "South Block, VAST Campus, Thalakottukara",
    collegeAddress: "Vidya Academy of Science and Technology (VAST), Thalakottukara P.O., Thrissur, Kerala - 680501",
    collegeEmail: "elecsphire.vast@gmail.com",
    collegePhone: "+91 91885 80811",
    helpDeskPhone: "+91 91885 80811",
    whatsappNumber: "919188580811",
    whatsappLink: "https://wa.me/919188580811?text=Hi%20Elecsphire%20Team%2C%20I%20have%20an%20inquiry%20regarding%20the%20Tech%20Fest",
    instagramLink: "https://www.instagram.com/psych_eee_vast?stkn=aDQxZ2R6dTVyb3U3",
    linkedinLink: "https://linkedin.com/school/vidya-academy-of-science-and-technology",
    youtubeLink: "https://youtube.com/@VidyaAcademyThrissur",
    googleMapsLink: "https://maps.app.goo.gl/1ZoqouDMHwZgBVuo8",
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3921.905626359567!2d76.1362629!3d10.6052731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba792a7dc4c9597%3A0xb3a824cbfe08e82a!2sVidya%20Academy%20of%20Science%20and%20Technology!5e0!3m2!1sen!2sin!4v1690000000000!5m2!1sen!2sin",
    brochureDownloadUrl: "#download-brochure",
    registrationPortalUrl: "#register-now",
    // Target timestamp for the real-time countdown timer (YYYY-MM-DDTHH:MM:SS)
    countdownTarget: "2026-10-16T09:00:00",
    
    // Quick statistics highlights shown in Hero and About sections
    stats: [
      { label: "Tech Programs", value: "24+", icon: "code" },
      { label: "Cash Prize Pool", value: "₹2,50,000+", icon: "trophy" },
      { label: "Participating Colleges", value: "60+", icon: "building" },
      { label: "Attending Delegates", value: "3,000+", icon: "users" }
    ]
  },

  // ----------------------------------------------------------------------------
  // 2. VENUES & LOCATIONS DIRECTORY
  // ----------------------------------------------------------------------------
  venues: [
    {
      id: "venue-audi",
      name: "South Block Main Auditorium",
      shortName: "South Block Audi",
      building: "South Block, VAST",
      floor: "Ground Floor",
      roomNumber: "Auditorium SB-01",
      capacity: "1,000 Attendees",
      directions: "Enter through VAST Main Gate. Walk straight toward the South Block portico. Entrance doors on the right.",
      facilities: ["High-Definition Projection", "Dolby Audio", "Central Air Conditioning", "Live Stream Control"],
      googleMapsQuery: "Vidya+Academy+of+Science+and+Technology+Thalakottukara",
      highlightEvents: ["Grand Inauguration", "ELECSPHIRE Keynote", "Valedictory & Awards"]
    },
    {
      id: "venue-lab1",
      name: "Computing & Circuit Simulation Lab",
      shortName: "Simulation Lab",
      building: "South Block, VAST",
      floor: "2nd Floor",
      roomNumber: "Room S-204",
      capacity: "90 Workstations",
      directions: "From South Block lobby, take elevator or central stairs to 2nd Floor. Follow EEE signboards.",
      facilities: ["MATLAB, Simulink & Keil", "Gigabit LAN", "Dual OS Systems", "Interactive Smart Board"],
      googleMapsQuery: "Vidya+Academy+of+Science+and+Technology+Thalakottukara",
      highlightEvents: ["CodeSprint Algorithmic Challenge", "Circuit Debugging Derby"]
    },
    {
      id: "venue-lab2",
      name: "Power Electronics & IoT Innovation Lab",
      shortName: "IoT & Embedded Lab",
      building: "South Block, VAST",
      floor: "2nd Floor",
      roomNumber: "Room S-208",
      capacity: "85 High-End Workstations",
      directions: "Directly opposite to Simulation Lab on 2nd Floor of South Block.",
      facilities: ["Dedicated Internet", "Microcontroller Testbenches", "DSO & Function Generators"],
      googleMapsQuery: "Vidya+Academy+of+Science+and+Technology+Thalakottukara",
      highlightEvents: ["24-Hour Hack-a-Futurism", "EV Tech Showcase"]
    },
    {
      id: "venue-seminar",
      name: "South Block Executive Seminar Hall",
      shortName: "Seminar Hall",
      building: "South Block, VAST",
      floor: "1st Floor",
      roomNumber: "Room S-101",
      capacity: "260 Seats",
      directions: "Enter South Block and take the central staircase to the 1st floor.",
      facilities: ["Interactive Smart Podiums", "Acoustic Insulation", "High-Definition Projection"],
      googleMapsQuery: "Vidya+Academy+of+Science+and+Technology+Thalakottukara",
      highlightEvents: ["EEE Tech Paper Presentations", "Renewable Energy Summit"]
    },
    {
      id: "venue-arena",
      name: "Robotics Arena & Mechatronics Bay",
      shortName: "Robotics Arena",
      building: "South Block Annex, VAST",
      floor: "Ground Floor Annex",
      roomNumber: "Workshop Bay S-G05",
      capacity: "450 Spectators",
      directions: "Walk toward South Block East Annex. Follow illuminated ELECSPHIRE arrow signboards.",
      facilities: ["Reinforced Polycarbonate Safety Arena", "Fast Battery Charging Benches", "Soldering & Tool Station"],
      googleMapsQuery: "Vidya+Academy+of+Science+and+Technology+Thalakottukara",
      highlightEvents: ["RoboWars Heavyweight Combat", "Line Follower Championship"]
    },
    {
      id: "venue-gaming",
      name: "CyberDome eSports Arena",
      shortName: "Indoor Sports Center",
      building: "VAST Student Activities Complex",
      floor: "Ground Level",
      roomNumber: "Indoor Arena Hall 2",
      capacity: "500 Spectators + LAN Stations",
      directions: "Proceed toward student activities complex adjacent to South Block lawn.",
      facilities: ["Low-Latency LAN Backbone", "Tournament Live Spectator Screens", "Gaming Peripherals"],
      googleMapsQuery: "Vidya+Academy+of+Science+and+Technology+Thalakottukara",
      highlightEvents: ["Valorant Showdown", "BGMI Mobile Warfare"]
    },
    {
      id: "venue-quad",
      name: "South Block Quadrangle & Expo Lawn",
      shortName: "South Block Quad",
      building: "Open Air South Block Quadrangle",
      floor: "Ground Level",
      roomNumber: "Open Exhibition Space",
      capacity: "1,500 Visitors",
      directions: "Central courtyard enclosed by South Block. Follow the central festive canopy.",
      facilities: ["Covered Project Stalls", "230V AC Power Supplies", "Project Display Stands"],
      googleMapsQuery: "Vidya+Academy+of+Science+and+Technology+Thalakottukara",
      highlightEvents: ["National Project Exhibition", "Hardware & EV Drone Showcase"]
    },
    {
      id: "venue-oat",
      name: "Open Air Amphitheatre (OAT)",
      shortName: "Open Air Theatre",
      building: "Cultural Zone",
      floor: "Ground Level",
      roomNumber: "OAT-Main",
      capacity: "2,000 Audience",
      directions: "South lawn behind Mechanical Block, illuminated pathways with fest neon signposts.",
      facilities: ["Concert Grade Line-Array Sound", "Dynamic Beam Moving Lights", "Massive LED Backdrop"],
      googleMapsQuery: "Open+Air+Theatre",
      highlightEvents: ["Tech Fashion Fusion", "Laser & Drone Light Symphony", "DJ Night Celebration"]
    }
  ],

  // ----------------------------------------------------------------------------
  // 3. EVENT CATEGORIES
  // ----------------------------------------------------------------------------
  categories: [
    { id: "all", name: "All Programs", icon: "grid" },
    { id: "technical", name: "Technical Events", icon: "cpu" },
    { id: "workshops", name: "Workshops", icon: "book-open" },
    { id: "coding", name: "Coding Events", icon: "terminal" },
    { id: "hackathons", name: "Hackathons", icon: "zap" },
    { id: "exhibitions", name: "Project Exhibitions", icon: "layers" },
    { id: "competitions", name: "Competitions", icon: "award" },
    { id: "gaming", name: "Gaming & eSports", icon: "play-circle" },
    { id: "talks", name: "Talks / Sessions", icon: "mic" },
    { id: "cultural", name: "Cultural / Fun Events", icon: "sparkles" }
  ],

  // ----------------------------------------------------------------------------
  // 4. DETAILED PROGRAMS & EVENTS REPOSITORY
  // ----------------------------------------------------------------------------
  programs: [
    {
      id: "prog-hackathon",
      name: "Hack-a-Futurism: 24Hr National Hackathon",
      category: "Hackathons",
      categorySlug: "hackathons",
      shortDesc: "An intense 24-hour sprint to build AI-driven, decentralized, and sustainable solutions solving real-world challenges.",
      fullDesc: "Hack-a-Futurism is the flagship 24-hour non-stop hackathon of INNOVA TECH FEST 2026. Teams will collaborate, ideate, and engineer functional software or hardware prototypes addressing problem statements across Generative AI, Smart Healthcare, FinTech, Cyber Security, and Green Sustainable Cities. Mentors from top tech unicorns will guide teams throughout the night.",
      day: 1,
      dayLabel: "Day 1 to Day 2 (24 Hours)",
      date: "Oct 16 – 17, 2026",
      startTime: "11:00 AM",
      endTime: "11:00 AM (Next Day)",
      timeDisplay: "Day 1, 11:00 AM – Day 2, 11:00 AM (24 Hours)",
      venueId: "venue-lab2",
      venueName: "Ada Lovelace Cloud & AI Innovation Lab (CS Block B)",
      registrationStatus: "Filling Fast", // "Open" | "Filling Fast" | "Closing Soon" | "Closed"
      registrationFee: "₹400 per team",
      registrationDeadline: "October 14, 2026 at 11:59 PM",
      teamSize: "2 – 4 Members",
      eligibility: "Open to all registered undergraduate, postgraduate, and diploma engineering students with valid College IDs.",
      prizes: {
        first: "₹50,000 Cash + Incubation Support + Trophy",
        second: "₹25,000 Cash + Direct Interview Fast-Track",
        third: "₹15,000 Cash + Cloud Credits Voucher",
        special: "Certificates of Excellence to Top 10 Teams & Participation Certificates for all"
      },
      coordinator: {
        name: "Arjun R. Nair",
        role: "Lead Student Organizer",
        department: "Computer Science & Engineering",
        phone: "+91 98451 12340",
        email: "arjun.hackathon@college.edu.in",
        whatsapp: "919845112340"
      },
      facultyMentor: "Dr. K. S. Sharma (Prof. CSE)",
      requiredMaterials: [
        "Personal Laptops with pre-installed developer tools / IDEs",
        "Ethernet adapters / Wi-Fi enabled laptops",
        "Hardware components / microcontrollers (if building IoT/hardware prototypes)",
        "College Identity Card (Mandatory for entry)"
      ],
      rules: [
        "All code, designs, and prototypes must be freshly written during the official 24-hour hackathon period.",
        "Use of open-source libraries, APIs, and public frameworks is allowed provided they are declared in the README.",
        "Pre-built full projects are strictly prohibited and will lead to immediate disqualification.",
        "Three mandatory checkpoint evaluation rounds will take place at T+4 hours, T+12 hours, and T+20 hours.",
        "Final pitch presentation must not exceed 5 minutes, followed by 3 minutes of jury Q&A."
      ],
      instructions: [
        "Report to Computer Lab 2 by 10:00 AM for registration verification and Wi-Fi credential provisioning.",
        "Dedicated midnight refreshments, energy drinks, and resting zones are provided.",
        "Mentorship rounds start at 04:00 PM on Day 1."
      ]
    },
    {
      id: "prog-codesprint",
      name: "CodeSprint: Speed Debugging & DSA Duel",
      category: "Coding Events",
      categorySlug: "coding",
      shortDesc: "Race against time to optimize code, solve algorithmic puzzles, and debug buggy legacy systems in rapid rounds.",
      fullDesc: "CodeSprint tests your core mastery of algorithms, time complexity, and rapid debugging. Spanning two intense rounds, contestants will tackle dynamic programming, graph theory puzzles, and reverse-engineer obfuscated bugs under tight countdown constraints.",
      day: 1,
      dayLabel: "Day 1 (Friday)",
      date: "Oct 16, 2026",
      startTime: "02:00 PM",
      endTime: "04:30 PM",
      timeDisplay: "02:00 PM – 04:30 PM",
      venueId: "venue-lab1",
      venueName: "Alan Turing High Performance Lab (Room B-204)",
      registrationStatus: "Open",
      registrationFee: "₹100 per participant",
      registrationDeadline: "October 15, 2026 at 05:00 PM",
      teamSize: "Individual Participation (Solo)",
      eligibility: "Any college student with a passion for algorithms and data structures.",
      prizes: {
        first: "₹15,000 Cash + Gold Medal + Certificate",
        second: "₹8,000 Cash + Silver Medal + Certificate",
        third: "₹4,000 Cash + Bronze Medal + Certificate",
        special: "LeetCode Premium Vouchers to Top 5 performers"
      },
      coordinator: {
        name: "Pooja Hegde",
        role: "Coding Club Lead",
        department: "Information Science & Engg",
        phone: "+91 98452 23451",
        email: "pooja.codesprint@college.edu.in",
        whatsapp: "919845223451"
      },
      facultyMentor: "Prof. Anitha Rao (Dept of ISE)",
      requiredMaterials: [
        "College ID card",
        "Systems with C++, Java, Python 3, and Go runtimes provided on-site"
      ],
      rules: [
        "Supported languages: C, C++, Java 17, Python 3.11, Rust, Go.",
        "Round 1: 30-minute rapid bug hunt (find syntax, logical, and race condition flaws).",
        "Round 2: 90-minute competitive algorithmic problem set on local judging platform.",
        "Plagiarism detectors and browser lockdown mode are enforced on lab machines."
      ],
      instructions: [
        "No personal pen drives or external storage devices allowed in the lab.",
        "Seating allocation list will be pinned on the CS Block notice board by 01:30 PM."
      ]
    },
    {
      id: "prog-robowars",
      name: "RoboWars: Heavyweight BattleBots Clash",
      category: "Technical Events",
      categorySlug: "technical",
      shortDesc: "High-octane robotic combat where custom-engineered steel combat bots battle inside an enclosed titanium arena.",
      fullDesc: "Witness adrenaline-pumping sparks, spinning kinetic blades, and hydraulic flippers! RoboWars brings together top university robotics clubs to pit custom wireless combat robots against each other in weight-category knockout brackets inside an ISO-certified bulletproof glass arena.",
      day: 1,
      dayLabel: "Day 1 (Friday)",
      date: "Oct 16, 2026",
      startTime: "03:00 PM",
      endTime: "06:30 PM",
      timeDisplay: "03:00 PM – 06:30 PM",
      venueId: "venue-arena",
      venueName: "Robotics Arena & Mechatronics Bay (Block D)",
      registrationStatus: "Filling Fast",
      registrationFee: "₹500 per team bot",
      registrationDeadline: "October 14, 2026",
      teamSize: "2 – 6 Members",
      eligibility: "Open to college teams with bots meeting weight regulations (15kg & 30kg classes).",
      prizes: {
        first: "₹40,000 Cash + RoboWars Champion Belt",
        second: "₹20,000 Cash + Runner-up Trophy",
        third: "₹10,000 Cash + Best Mechanical Design Shield",
        special: "Most Destructive Weapon Award: ₹5,000"
      },
      coordinator: {
        name: "Vikramaditya Verma",
        role: "Robotics Society President",
        department: "Mechanical & Mechatronics",
        phone: "+91 98453 34562",
        email: "vikram.robowars@college.edu.in",
        whatsapp: "919845334562"
      },
      facultyMentor: "Dr. Ramesh Babu (HOD Mechanical)",
      requiredMaterials: [
        "Combat Bot with safe fail-safe radio control link (2.4 GHz)",
        "LiPo battery fire-safe charging bags and chargers",
        "Safety goggles and maintenance toolkits"
      ],
      rules: [
        "Bots must adhere to the 15kg or 30kg weight limit (+/- 2% tolerance allowed).",
        "Radio fail-safe kill switch is strictly mandatory.",
        "Match duration: 3 minutes active combat per bout.",
        "Flamethrowers, liquid chemicals, EMP, and untethered projectiles are strictly forbidden.",
        "Judged on Aggression, Damage inflicted, and Control."
      ],
      instructions: [
        "Safety and weapon inspection begins at 01:30 PM in Workshop Bay D-G05.",
        "Spectators must remain behind safety barrier zones at all times."
      ]
    },
    {
      id: "prog-ai-workshop",
      name: "Hands-on Workshop: Building Agentic LLMs & Vision AI",
      category: "Workshops",
      categorySlug: "workshops",
      shortDesc: "Master practical autonomous AI agents, tool-calling architectures, and multimodal computer vision with industry experts.",
      fullDesc: "Conducted by senior AI research scientists from premier tech firms, this 4-hour hands-on masterclass dives deep into constructing modern AI agent workflows, function calling, Retrieval-Augmented Generation (RAG), and deploying real-time vision pipelines with PyTorch and open weights.",
      day: 1,
      dayLabel: "Day 1 (Friday)",
      date: "Oct 16, 2026",
      startTime: "10:30 AM",
      endTime: "02:00 PM",
      timeDisplay: "10:30 AM – 02:00 PM",
      venueId: "venue-seminar",
      venueName: "Sir C.V. Raman Executive Seminar Hall (Tower C)",
      registrationStatus: "Open",
      registrationFee: "₹250 per attendee (Includes lunch & kit)",
      registrationDeadline: "October 15, 2026",
      teamSize: "Individual / Solo Attendee",
      eligibility: "Students & faculty with foundational knowledge of Python and machine learning basics.",
      prizes: {
        first: "Certificate of Completion with Industry Accreditation",
        second: "Cloud GPU Compute Credits ($100 per attendee)",
        third: "Access to exclusive GitHub repo & learning path",
        special: "Top 3 project capstones receive direct internship referrals"
      },
      coordinator: {
        name: "Sneha Mukhopadhyay",
        role: "AI Student Lead",
        department: "Artificial Intelligence & Data Science",
        phone: "+91 98454 45673",
        email: "sneha.workshop@college.edu.in",
        whatsapp: "919845445673"
      },
      facultyMentor: "Dr. Radhika Sen (Associate Prof. AI & DS)",
      requiredMaterials: [
        "Personal laptop with Google Chrome / Modern browser",
        "Active Google account for Google Colab GPU environment"
      ],
      rules: [
        "Attendees must bring their own fully charged laptop and charger.",
        "100% session attendance is required to receive the verified digital credential certificate."
      ],
      instructions: [
        "Workshop starter kit and notebooks link will be shared via QR code at check-in.",
        "High-speed 1 Gbps campus Wi-Fi access will be issued upon badge verification."
      ]
    },
    {
      id: "prog-project-expo",
      name: "InnoVenture: National Student Project Exhibition",
      category: "Project Exhibitions",
      categorySlug: "exhibitions",
      shortDesc: "Showcase working engineering projects, hardware innovations, and breakthrough research before investors and academic juries.",
      fullDesc: "InnoVenture provides a premier national stage for final-year engineering projects, startup MVPs, patentable inventions, and innovative social tech. Exhibitors receive designated display stalls with power and networking to showcase their live demos to angel investors, industry leaders, and delegates.",
      day: 2,
      dayLabel: "Day 2 (Saturday)",
      date: "Oct 17, 2026",
      startTime: "10:00 AM",
      endTime: "03:30 PM",
      timeDisplay: "10:00 AM – 03:30 PM",
      venueId: "venue-quad",
      venueName: "Central Quadrangle & Innovation Expo Lawn",
      registrationStatus: "Open",
      registrationFee: "₹300 per project stall",
      registrationDeadline: "October 13, 2026",
      teamSize: "2 – 5 Members",
      eligibility: "Any undergraduate or postgraduate technical students with a functional working hardware or software prototype.",
      prizes: {
        first: "₹35,000 Cash + Best Innovation Trophy + Seed Grant Advisory",
        second: "₹20,000 Cash + Startup Incubation Pitch Access",
        third: "₹10,000 Cash + Jury Commendation Award",
        special: "Social Impact Tech Award: ₹5,000"
      },
      coordinator: {
        name: "Karthik Sundaram",
        role: "Innovation Cell Secretary",
        department: "Electronics & Communication Engg",
        phone: "+91 98455 56784",
        email: "karthik.expo@college.edu.in",
        whatsapp: "919845556784"
      },
      facultyMentor: "Prof. M. N. Balaji (Convener, IIC)",
      requiredMaterials: [
        "Functional working model / prototype",
        "Project Banner / Poster (Standard A1 size recommended)",
        "Laptops, extension boards, connecting cables"
      ],
      rules: [
        "Teams must set up their stalls before 09:30 AM on Day 2.",
        "Hazardous chemicals, open flames, or volatile substances must be pre-approved by the safety committee.",
        "Jury will evaluate on Originality, Technical Depth, Market Feasibility, and Clarity of Demo."
      ],
      instructions: [
        "Standard 230V AC socket and 1 display table with 2 chairs are provided per stall.",
        "Visitor voting ballot tokens will contribute 20% to the People's Choice Award."
      ]
    },
    {
      id: "prog-ctf",
      name: "ZeroDay CTF: Cyber Security & Ethical Hacking",
      category: "Competitions",
      categorySlug: "competitions",
      shortDesc: "Jeopardy-style offensive and defensive cybersecurity tournament spanning cryptography, web exploitation, and reverse engineering.",
      fullDesc: "Crack cryptographic ciphers, analyze pcap network dumps, exploit memory vulnerabilities, and capture hidden digital flags! ZeroDay CTF is organized in partnership with leading cybersecurity threat intelligence agencies for ethical hackers and security researchers.",
      day: 2,
      dayLabel: "Day 2 (Saturday)",
      date: "Oct 17, 2026",
      startTime: "10:30 AM",
      endTime: "02:30 PM",
      timeDisplay: "10:30 AM – 02:30 PM",
      venueId: "venue-lab1",
      venueName: "Alan Turing High Performance Lab (Room B-204)",
      registrationStatus: "Open",
      registrationFee: "₹200 per team",
      registrationDeadline: "October 15, 2026",
      teamSize: "1 – 3 Members",
      eligibility: "Open to all enrolled university students.",
      prizes: {
        first: "₹20,000 Cash + Certified Security Vouchers",
        second: "₹12,000 Cash + Pentesting Tool Licenses",
        third: "₹6,000 Cash + Certificate",
        special: "First Blood Bounty for every challenge solved first"
      },
      coordinator: {
        name: "Tanvi Deshmukh",
        role: "CyberSec Cell Lead",
        department: "Information Security",
        phone: "+91 98456 67895",
        email: "tanvi.ctf@college.edu.in",
        whatsapp: "919845667895"
      },
      facultyMentor: "Prof. S. Venkatesh (Dept of CSE)",
      requiredMaterials: [
        "Laptops equipped with Kali Linux / Parrot OS or virtualized environments",
        "Personal Wi-Fi dongle (optional fallback, isolated CTF LAN is provided)"
      ],
      rules: [
        "Attacking the CTF scoring infrastructure itself is strictly forbidden and results in an immediate ban.",
        "Sharing flags between teams will disqualify both parties immediately.",
        "Automated denial of service (DoS) attacks on challenge servers are prohibited."
      ],
      instructions: [
        "Challenge categories include: Web, Pwn, Crypto, Forensics, Reverse, and OSINT.",
        "Dynamic scoring is enabled (points decay as more teams solve the challenge)."
      ]
    },
    {
      id: "prog-valorant",
      name: "CyberDome: Valorant 5v5 Championship",
      category: "Gaming & eSports",
      categorySlug: "gaming",
      shortDesc: "Electrifying PC tactical shooter tournament on 240Hz monitors with shoutcasters and massive arena projection.",
      fullDesc: "Assemble your squad, lock in your agents, and execute site takes with pinpoint crosshair accuracy! CyberDome Valorant brings high-tier college esports into an electric arena with professional shoutcasters, tournament-grade low-latency LAN, and live crowd streaming.",
      day: 1,
      dayLabel: "Day 1 (Friday)",
      date: "Oct 16, 2026",
      startTime: "12:30 PM",
      endTime: "07:00 PM",
      timeDisplay: "12:30 PM – 07:00 PM",
      venueId: "venue-gaming",
      venueName: "CyberDome eSports Arena (Indoor Sports Center)",
      registrationStatus: "Closing Soon",
      registrationFee: "₹500 per 5-player squad",
      registrationDeadline: "October 13, 2026 (Max 16 Squads)",
      teamSize: "5 Players + 1 Optional Substitute",
      eligibility: "College students with valid Riot ID and institutional credentials.",
      prizes: {
        first: "₹25,000 Cash + Gaming Headsets + Champions Cup",
        second: "₹12,000 Cash + Mechanical Keyboards",
        third: "₹6,000 Cash + Gaming Mousepads",
        special: "Tournament MVP Trophy + ₹3,000 Cash"
      },
      coordinator: {
        name: "Aditya 'Apex' Pillai",
        role: "eSports Convener",
        department: "Electronics & Communication",
        phone: "+91 98457 78906",
        email: "aditya.gaming@college.edu.in",
        whatsapp: "919845778906"
      },
      facultyMentor: "Dr. P. S. Mohan (Physical Education & Activities)",
      requiredMaterials: [
        "Own Gaming Headsets / In-ear earphones (Recommended)",
        "Own Gaming Mouse and Mousepad (Optional, standard peripherals provided)"
      ],
      rules: [
        "Standard Tournament Mode: Competitive rules, map veto, overtime rules apply.",
        "Preliminary matches are Best of 1; Semi-Finals and Grand Finals are Best of 3.",
        "Third-party scripts, crosshair overlays, or cheats will incur lifetime ban from college tournaments."
      ],
      instructions: [
        "Team Captains must report to the Gaming Registration desk by 11:45 AM for seed draws.",
        "Spectator seating is free for all Tech Fest pass holders."
      ]
    },
    {
      id: "prog-keynote",
      name: "Visionary Keynote: 'The Post-Silicon Quantum Epoch'",
      category: "Talks / Sessions",
      categorySlug: "talks",
      shortDesc: "Distinguished global guest lecture exploring quantum computational supremacy, neuromorphic chips, and beyond.",
      fullDesc: "Join Dr. Arvind Subramanian, Chief Quantum Architect and former NASA JPL Fellow, for a captivating discourse on how superconducting qubits, room-temperature superconductors, and neuromorphic computing paradigms are poised to reshape computer science in the coming decade.",
      day: 1,
      dayLabel: "Day 1 (Friday)",
      date: "Oct 16, 2026",
      startTime: "11:30 AM",
      endTime: "01:00 PM",
      timeDisplay: "11:30 AM – 01:00 PM",
      venueId: "venue-audi",
      venueName: "Dr. APJ Abdul Kalam Main Auditorium",
      registrationStatus: "Open",
      registrationFee: "Free with Fest Entry Pass",
      registrationDeadline: "Walk-in basis (First-come first-seated)",
      teamSize: "Open to All Guests & Visitors",
      eligibility: "All fest visitors, guests, faculty members, and students.",
      prizes: {
        first: "Open Interactive Q&A Session with the Speaker",
        second: "Signed copies of 'Quantum Horizons' for Top 5 Audience Questions",
        third: "Digital Certificate of Attendance",
        special: "Networking Tea Reception with Keynote Panelists"
      },
      coordinator: {
        name: "Divya Prakash",
        role: "Academic Conclave Lead",
        department: "Department of Physics & CS",
        phone: "+91 98458 89017",
        email: "divya.keynote@college.edu.in",
        whatsapp: "919845889017"
      },
      facultyMentor: "Prof. S. R. Krishnan (Dean, Research & Academics)",
      requiredMaterials: [
        "College / Visitor entry wristband",
        "Notepads for interactive questions"
      ],
      rules: [
        "Attendees must take their seats 10 minutes prior to keynote commencement.",
        "Mobile phones must be switched to silent mode during the lecture."
      ],
      instructions: [
        "Live English audio captioning will be broadcasted to mobile devices inside the auditorium.",
        "A 20-minute open house audience Q&A follows the lecture."
      ]
    },
    {
      id: "prog-drone-race",
      name: "AeroSprint: FPV Micro-Drone Obstacle Sprint",
      category: "Technical Events",
      categorySlug: "technical",
      shortDesc: "Pilots navigate agile high-speed First-Person-View (FPV) drones through illuminated neon neon gates and complex hoops.",
      fullDesc: "Feel the speed and aerodynamic precision as micro-drones zip at 80 km/h through glowing LED neon obstacle hoops, vertical corkscrews, and sudden drop-chicanes. Equipped with low-latency analog/digital video transmitters, pilots race against the clock in thrilling elimination heats.",
      day: 2,
      dayLabel: "Day 2 (Saturday)",
      date: "Oct 17, 2026",
      startTime: "01:30 PM",
      endTime: "05:00 PM",
      timeDisplay: "01:30 PM – 05:00 PM",
      venueId: "venue-arena",
      venueName: "Robotics Arena & Open Air Flight Zone",
      registrationStatus: "Open",
      registrationFee: "₹300 per pilot",
      registrationDeadline: "October 15, 2026",
      teamSize: "1 Pilot + 1 Spotter",
      eligibility: "Open to collegiate and independent aeromodelling drone pilots with 2S-4S class FPV drones.",
      prizes: {
        first: "₹25,000 Cash + Carbon Fibre Trophy",
        second: "₹15,000 Cash + FPV Goggles Accessory Kit",
        third: "₹8,000 Cash + Runner-up Plaque",
        special: "Fastest Lap Circuit Record: ₹3,000"
      },
      coordinator: {
        name: "Rohit Bansal",
        role: "Aeronautics Club Lead",
        department: "Aeronautical / Mechanical Engg",
        phone: "+91 98459 90128",
        email: "rohit.drones@college.edu.in",
        whatsapp: "919845990128"
      },
      facultyMentor: "Dr. K. V. Sastry (Aeronautical Dept)",
      requiredMaterials: [
        "FPV Drone compliant with under 250g regulations",
        "FPV Video Goggles / Monitor (5.8 GHz)",
        "Fail-safe enabled Radio Controller"
      ],
      rules: [
        "Drones must have propeller guards during indoor track laps.",
        "Frequency management is handled strictly by the technical desk; unauthorized video transmissions will result in forfeiture.",
        "Each pilot gets 3 timed qualifying runs of 2 laps each."
      ],
      instructions: [
        "Frequency check and failsafe verification at 12:45 PM.",
        "Live pilot POV view is broadcasted to the main arena LED displays."
      ]
    },
    {
      id: "prog-webcraft",
      name: "WebCraft: Fast-Paced UI/UX & Frontend Sprint",
      category: "Coding Events",
      categorySlug: "coding",
      shortDesc: "Design and code a high-converting, accessible, and responsive web product landing page based on a surprise brief.",
      fullDesc: "WebCraft challenges digital designers and modern frontend developers to translate a surprise creative brief into a pixel-perfect, responsive, and animated web experience within 3 hours. Judged on aesthetic finesse, accessibility (WCAG), code cleanliness, and intuitive user experience.",
      day: 2,
      dayLabel: "Day 2 (Saturday)",
      date: "Oct 17, 2026",
      startTime: "11:00 AM",
      endTime: "02:00 PM",
      timeDisplay: "11:00 AM – 02:00 PM",
      venueId: "venue-lab2",
      venueName: "Ada Lovelace Cloud & AI Innovation Lab (CS Block B)",
      registrationStatus: "Open",
      registrationFee: "₹150 per team",
      registrationDeadline: "October 15, 2026",
      teamSize: "1 – 2 Members",
      eligibility: "Undergraduate and postgraduate students.",
      prizes: {
        first: "₹15,000 Cash + UI/UX Design Trophy",
        second: "₹8,000 Cash + Figma Pro Annual Sponsorship",
        third: "₹4,000 Cash + Certificate",
        special: "Best Micro-Interactions Award: ₹2,500"
      },
      coordinator: {
        name: "Meera Krishnan",
        role: "Web Design Cell Lead",
        department: "Computer Science & Engg",
        phone: "+91 98450 01239",
        email: "meera.webcraft@college.edu.in",
        whatsapp: "919845001239"
      },
      facultyMentor: "Prof. Deepa V. (Dept of CSE)",
      requiredMaterials: [
        "College ID card",
        "Systems provided with VS Code, Chrome, Firefox, Node.js, and Figma"
      ],
      rules: [
        "Teams may use standard open frameworks (React, Vue, Tailwind CSS, or vanilla HTML/CSS/JS).",
        "Pre-made templates or website clone scrapers are strictly banned.",
        "Submission must be pushed to a designated GitHub repository before the 3-hour timer hits zero."
      ],
      instructions: [
        "The theme and prompt envelope will be unsealed at exactly 11:00 AM."
      ]
    },
    {
      id: "prog-laser-show",
      name: "NeonNexus: Laser Symphony & Tech Cultural Night",
      category: "Cultural / Fun Events",
      categorySlug: "cultural",
      shortDesc: "Spectacular synchronized 3D laser projection mapping, cyberpunk musical performance, and festive celebration.",
      fullDesc: "Unwind after rigorous competitions with our signature evening celebration! NeonNexus blends high-intensity visual lasers, interactive LED suit performers, holographic displays, and an electrifying electronic music set by popular student artists and guest DJs.",
      day: 2,
      dayLabel: "Day 2 (Saturday Evening Finale)",
      date: "Oct 17, 2026",
      startTime: "06:00 PM",
      endTime: "09:30 PM",
      timeDisplay: "06:00 PM – 09:30 PM",
      venueId: "venue-oat",
      venueName: "Open Air Amphitheatre (Cultural Zone)",
      registrationStatus: "Open",
      registrationFee: "Free for all registered Tech Fest participants & guests",
      registrationDeadline: "Entry with Fest Badge",
      teamSize: "Open Audience",
      eligibility: "All guests, attendees, faculty, and participants with fest badges.",
      prizes: {
        first: "Grand Fest Lucky Draw Tech Hamper (Smartwatch, Earbuds, Goodies)",
        second: "Audience Choice Best Dressed Tech-Cosplay",
        third: "Memorabilia distribution",
        special: "Fest After-Movie Spotlight"
      },
      coordinator: {
        name: "Siddharth Menon",
        role: "Cultural & Fun Events Convener",
        department: "Student Affairs Council",
        phone: "+91 98451 10293",
        email: "siddharth.cultural@college.edu.in",
        whatsapp: "919845110293"
      },
      facultyMentor: "Dr. Leela Nair (Convener, Cultural Affairs)",
      requiredMaterials: [
        "Valid Tech Fest Delegate Badge / Entry Wristband"
      ],
      rules: [
        "Strict discipline and code of conduct must be observed inside the amphitheatre.",
        "Any form of intoxicants or disruptive behavior will result in immediate removal from campus."
      ],
      instructions: [
        "Gates to Open Air Theatre open at 05:30 PM.",
        "Food and beverage stalls are available adjacent to the amphitheatre lawns."
      ]
    },
    {
      id: "prog-inauguration",
      name: "Grand Inaugural Ceremony & Keynote Address",
      category: "Talks / Sessions",
      categorySlug: "talks",
      shortDesc: "Official opening of INNOVA TECH FEST 2026, lamp lighting, address by dignitaries, and festival curtain-raiser video.",
      fullDesc: "The ceremonial kick-off of the fest featuring ceremonial lamp lighting by distinguished chief guests from ISRO, leading tech corporate executives, college management, and the release of the festival tech souvenir.",
      day: 1,
      dayLabel: "Day 1 (Friday Morning)",
      date: "Oct 16, 2026",
      startTime: "09:00 AM",
      endTime: "10:30 AM",
      timeDisplay: "09:00 AM – 10:30 AM",
      venueId: "venue-audi",
      venueName: "Dr. APJ Abdul Kalam Main Auditorium",
      registrationStatus: "Open",
      registrationFee: "Complimentary Entry",
      registrationDeadline: "Walk-in",
      teamSize: "Open Seating",
      eligibility: "Open to all attendees, guests, faculty, and students.",
      prizes: {
        first: "Welcome Delegate Kits for first 500 early arrivals",
        second: "Networking session with chief guests",
        third: "Fest commemorative badge",
        special: "Exclusive fest brochure & schedule guide"
      },
      coordinator: {
        name: "Prof. Harish Chander",
        role: "Master of Ceremonies Lead",
        department: "Dean Student Affairs Office",
        phone: "+91 98452 39012",
        email: "inauguration@college.edu.in",
        whatsapp: "919845239012"
      },
      facultyMentor: "Dr. V. K. Ranganathan (Principal)",
      requiredMaterials: ["Fest Registration QR Code / ID"],
      rules: ["Audience must be seated by 08:45 AM"],
      instructions: ["Follow formal or smart-casual dress code."]
    }
  ],

  // ----------------------------------------------------------------------------
  // 5. EVENT TIMETABLE / SCHEDULE
  // ----------------------------------------------------------------------------
  // Dynamically filters by day, venue, and category
  schedule: [
    // DAY 1
    {
      day: 1,
      dayDate: "Friday, October 16, 2026",
      time: "08:00 AM – 09:00 AM",
      programName: "Delegate Registration & Welcome Desk Open",
      category: "Registration",
      categorySlug: "talks",
      venue: "Central Reception Portico, Admin Block",
      venueId: "venue-audi",
      description: "Collection of event badges, delegate ID cards, fest welcome kits, and food coupons.",
      programId: null
    },
    {
      day: 1,
      dayDate: "Friday, October 16, 2026",
      time: "09:00 AM – 10:30 AM",
      programName: "Grand Inaugural Ceremony & Keynote Address",
      category: "Talks / Sessions",
      categorySlug: "talks",
      venue: "Main Auditorium (Block A)",
      venueId: "venue-audi",
      description: "Ceremonial lamp lighting, dignitary keynote, and official launch of INNOVA '26.",
      programId: "prog-inauguration"
    },
    {
      day: 1,
      dayDate: "Friday, October 16, 2026",
      time: "10:30 AM – 02:00 PM",
      programName: "Hands-on Workshop: Building Agentic LLMs & Vision AI",
      category: "Workshops",
      categorySlug: "workshops",
      venue: "Executive Seminar Hall (Tower C)",
      venueId: "venue-seminar",
      description: "Practical deep-dive into autonomous AI agent workflows and PyTorch vision pipelines.",
      programId: "prog-ai-workshop"
    },
    {
      day: 1,
      dayDate: "Friday, October 16, 2026",
      time: "11:00 AM (Starts)",
      programName: "Hack-a-Futurism: 24Hr National Hackathon (Commences)",
      category: "Hackathons",
      categorySlug: "hackathons",
      venue: "Ada Lovelace Cloud & AI Lab (Block B)",
      venueId: "venue-lab2",
      description: "Problem statement unsealing and kick-off for 24 hours of non-stop innovation.",
      programId: "prog-hackathon"
    },
    {
      day: 1,
      dayDate: "Friday, October 16, 2026",
      time: "11:30 AM – 01:00 PM",
      programName: "Visionary Keynote: 'The Post-Silicon Quantum Epoch'",
      category: "Talks / Sessions",
      categorySlug: "talks",
      venue: "Main Auditorium (Block A)",
      venueId: "venue-audi",
      description: "Guest talk by Dr. Arvind Subramanian on quantum supremacy and neuromorphic chips.",
      programId: "prog-keynote"
    },
    {
      day: 1,
      dayDate: "Friday, October 16, 2026",
      time: "01:00 PM – 02:00 PM",
      programName: "Lunch & Networking Intermission",
      category: "Break",
      categorySlug: "cultural",
      venue: "Campus Dining Quadrangle & Food Courts",
      venueId: "venue-quad",
      description: "Complimentary lunch served for all registered delegates with valid meal passes.",
      programId: null
    },
    {
      day: 1,
      dayDate: "Friday, October 16, 2026",
      time: "12:30 PM – 07:00 PM",
      programName: "CyberDome: Valorant 5v5 Championship (Qualifiers & Quarters)",
      category: "Gaming & eSports",
      categorySlug: "gaming",
      venue: "Indoor Sports Center Arena",
      venueId: "venue-gaming",
      description: "Intense competitive esports preliminary knockouts on dedicated 240Hz LAN systems.",
      programId: "prog-valorant"
    },
    {
      day: 1,
      dayDate: "Friday, October 16, 2026",
      time: "02:00 PM – 04:30 PM",
      programName: "CodeSprint: Speed Debugging & DSA Duel",
      category: "Coding Events",
      categorySlug: "coding",
      venue: "Alan Turing High Performance Lab (Room B-204)",
      venueId: "venue-lab1",
      description: "Rapid debugging, edge case challenges, and algorithmic duel under tight time pressure.",
      programId: "prog-codesprint"
    },
    {
      day: 1,
      dayDate: "Friday, October 16, 2026",
      time: "03:00 PM – 06:30 PM",
      programName: "RoboWars: Heavyweight BattleBots Clash (Prelims)",
      category: "Technical Events",
      categorySlug: "technical",
      venue: "Robotics Arena & Mechatronics Bay",
      venueId: "venue-arena",
      description: "Round 1 and Quarter Finals of 15kg and 30kg combat robots inside bulletproof cage.",
      programId: "prog-robowars"
    },

    // DAY 2
    {
      day: 2,
      dayDate: "Saturday, October 17, 2026",
      time: "09:00 AM – 10:00 AM",
      programName: "Day 2 Morning Check-In & Breakfast Stall Open",
      category: "General",
      categorySlug: "cultural",
      venue: "Central Reception Portico",
      venueId: "venue-audi",
      description: "Morning roll call and breakfast coffee for delegates and hackathon participants.",
      programId: null
    },
    {
      day: 2,
      dayDate: "Saturday, October 17, 2026",
      time: "10:00 AM – 03:30 PM",
      programName: "InnoVenture: National Student Project Exhibition",
      category: "Project Exhibitions",
      categorySlug: "exhibitions",
      venue: "Central Quadrangle & Innovation Expo Lawn",
      venueId: "venue-quad",
      description: "Showcase of over 60+ selected university hardware and software prototypes to judges.",
      programId: "prog-project-expo"
    },
    {
      day: 2,
      dayDate: "Saturday, October 17, 2026",
      time: "10:30 AM – 02:30 PM",
      programName: "ZeroDay CTF: Cyber Security & Ethical Hacking",
      category: "Competitions",
      categorySlug: "competitions",
      venue: "Alan Turing High Performance Lab (Room B-204)",
      venueId: "venue-lab1",
      description: "High-stakes Jeopardy ethical hacking, reverse engineering, and web vulnerability hunt.",
      programId: "prog-ctf"
    },
    {
      day: 2,
      dayDate: "Saturday, October 17, 2026",
      time: "11:00 AM (Concludes)",
      programName: "Hack-a-Futurism: 24Hr National Hackathon (Coding Stops)",
      category: "Hackathons",
      categorySlug: "hackathons",
      venue: "Ada Lovelace Cloud & AI Lab (Block B)",
      venueId: "venue-lab2",
      description: "Code freeze! Teams submit pull requests and transition to the jury pitch sessions.",
      programId: "prog-hackathon"
    },
    {
      day: 2,
      dayDate: "Saturday, October 17, 2026",
      time: "11:00 AM – 02:00 PM",
      programName: "WebCraft: Fast-Paced UI/UX & Frontend Sprint",
      category: "Coding Events",
      categorySlug: "coding",
      venue: "Computer Science Block B (Lab 2 Annex)",
      venueId: "venue-lab2",
      description: "3-hour creative sprint to build responsive, accessible web interfaces from surprise briefs.",
      programId: "prog-webcraft"
    },
    {
      day: 2,
      dayDate: "Saturday, October 17, 2026",
      time: "01:30 PM – 05:00 PM",
      programName: "AeroSprint: FPV Micro-Drone Obstacle Sprint",
      category: "Technical Events",
      categorySlug: "technical",
      venue: "Robotics Arena & Flight Zone",
      venueId: "venue-arena",
      description: "High-speed drone racing with lit neon gates and live pilot FPV arena projection.",
      programId: "prog-drone-race"
    },
    {
      day: 2,
      dayDate: "Saturday, October 17, 2026",
      time: "04:30 PM – 06:00 PM",
      programName: "Grand Valedictory & Prize Distribution Gala",
      category: "Talks / Sessions",
      categorySlug: "talks",
      venue: "Main Auditorium (Block A)",
      venueId: "venue-audi",
      description: "Announcement of winners across all events, cash prize award ceremony, and closing remarks.",
      programId: null
    },
    {
      day: 2,
      dayDate: "Saturday, October 17, 2026",
      time: "06:00 PM – 09:30 PM",
      programName: "NeonNexus: Laser Symphony & Tech Cultural Night",
      category: "Cultural / Fun Events",
      categorySlug: "cultural",
      venue: "Open Air Amphitheatre (Cultural Zone)",
      venueId: "venue-oat",
      description: "Spectacular 3D laser mapping, electronic DJ set, and celebration party for all attendees.",
      programId: "prog-laser-show"
    }
  ],

  // ----------------------------------------------------------------------------
  // 6. COORDINATORS DIRECTORY
  // ----------------------------------------------------------------------------
  coordinators: [
    {
      id: "coord-overall-1",
      name: "Dr. Mary P. Varghese",
      role: "Chief Faculty Convener (HOD EEE)",
      group: "faculty",
      department: "Dept. of Electrical & Electronics Engineering, VAST",
      programHandled: "Overall Fest Administration & Protocol",
      phone: "+91 91885 80811",
      email: "elecsphire.vast@gmail.com",
      whatsapp: "919188580811",
      avatarBg: "linear-gradient(135deg, #00f2fe, #4facfe)"
    },
    {
      id: "coord-overall-2",
      name: "Abhishek S. Menon",
      role: "Lead Student Convener",
      group: "overall",
      department: "Final Year EEE, VAST",
      programHandled: "General Inquiries & Inter-College Relations",
      phone: "+91 91885 80811",
      email: "elecsphire.vast@gmail.com",
      whatsapp: "919188580811",
      avatarBg: "linear-gradient(135deg, #7928ca, #ff0080)"
    },
    {
      id: "coord-overall-3",
      name: "Aiswarya Raj",
      role: "Student President (EEE Association)",
      group: "student",
      department: "Final Year EEE, VAST",
      programHandled: "Guest Protocol, Hospitality & Registrations",
      phone: "+91 91885 80811",
      email: "elecsphire.vast@gmail.com",
      whatsapp: "919188580811",
      avatarBg: "linear-gradient(135deg, #43e97b, #38f9d7)"
    },
    {
      id: "coord-faculty-1",
      name: "Prof. Praveesh V. V.",
      role: "Faculty Co-Convener (Technical Tracks)",
      group: "faculty",
      department: "Dept. of Electrical & Electronics Engg, VAST",
      programHandled: "Hardware & Robotics Competitions Safety",
      phone: "+91 91885 80811",
      email: "elecsphire.vast@gmail.com",
      whatsapp: "919188580811",
      avatarBg: "linear-gradient(135deg, #fa709a, #fee140)"
    },
    {
      id: "coord-faculty-2",
      name: "Prof. Akhila R.",
      role: "Faculty In-Charge (Workshops & Talks)",
      group: "faculty",
      department: "Dept. of Electrical & Electronics Engg, VAST",
      programHandled: "Hackathon & Hands-on Workshops Coordination",
      phone: "+91 91885 80811",
      email: "elecsphire.vast@gmail.com",
      whatsapp: "919188580811",
      avatarBg: "linear-gradient(135deg, #667eea, #764ba2)"
    },
    {
      id: "coord-student-1",
      name: "Rahul Krishnan",
      role: "Head of Robotics & Mechatronics",
      group: "student",
      department: "Pre-Final Year EEE, VAST",
      programHandled: "RoboWars, AeroSprint & Arena Management",
      phone: "+91 91885 80811",
      email: "elecsphire.vast@gmail.com",
      whatsapp: "919188580811",
      avatarBg: "linear-gradient(135deg, #f093fb, #f5576c)"
    },
    {
      id: "coord-student-2",
      name: "Anjali S. Kumar",
      role: "Coding & Circuit Design Lead",
      group: "student",
      department: "Pre-Final Year EEE, VAST",
      programHandled: "CodeSprint & Simulation Lab Servers",
      phone: "+91 91885 80811",
      email: "elecsphire.vast@gmail.com",
      whatsapp: "919188580811",
      avatarBg: "linear-gradient(135deg, #00c6ff, #0072ff)"
    },
    {
      id: "coord-program-1",
      name: "Kiran P. Mohan",
      role: "Exhibition & Startup Lead",
      group: "program",
      department: "Final Year EEE, VAST",
      programHandled: "InnoVenture Project Exhibition Stalls",
      phone: "+91 91885 80811",
      email: "elecsphire.vast@gmail.com",
      whatsapp: "919188580811",
      avatarBg: "linear-gradient(135deg, #ff9a9e, #fecfef)"
    },
    {
      id: "coord-program-2",
      name: "Vishnu Prasad",
      role: "eSports Tournament Director",
      group: "program",
      department: "Pre-Final Year, VAST",
      programHandled: "CyberDome Gaming Tournaments",
      phone: "+91 91885 80811",
      email: "elecsphire.vast@gmail.com",
      whatsapp: "919188580811",
      avatarBg: "linear-gradient(135deg, #ff0844, #ffb199)"
    },
    {
      id: "coord-tech-1",
      name: "Sujith K. S.",
      role: "IT & Network Infrastructure Head",
      group: "support",
      department: "VAST Systems & Network Administration",
      programHandled: "Campus Wi-Fi, LAN, Streaming & Power Backup",
      phone: "+91 91885 80811",
      email: "elecsphire.vast@gmail.com",
      whatsapp: "919188580811",
      avatarBg: "linear-gradient(135deg, #0ba360, #3cba92)"
    },
    {
      id: "coord-tech-2",
      name: "Midhun Murali",
      role: "Audio-Visual & Stage Engineering",
      group: "support",
      department: "Central Media & Instrumentation Cell, VAST",
      programHandled: "Auditorium AV, Lighting, Sound & Live Display",
      phone: "+91 91885 80811",
      email: "elecsphire.vast@gmail.com",
      whatsapp: "919188580811",
      avatarBg: "linear-gradient(135deg, #4facfe, #00f2fe)"
    }
  ],

  // ----------------------------------------------------------------------------
  // 7. EMERGENCY & QUICK HELP DIRECTORY
  // ----------------------------------------------------------------------------
  emergency: [
    {
      role: "Event Help Desk (Central)",
      contactPerson: "Student Central Assistance Desk (EEE)",
      phone: "+91 91885 80811",
      tel: "tel:+919188580811",
      whatsapp: "https://wa.me/919188580811?text=Emergency%20Help%20Needed%20at%20ELECSPHIRE%20Tech%20Fest",
      location: "South Block Reception & Information Kiosk, Ground Floor",
      availability: "24 Hours during Fest"
    },
    {
      role: "Campus Security & Safety",
      contactPerson: "VAST Campus Security Control",
      phone: "+91 91885 80811",
      tel: "tel:+919188580811",
      whatsapp: "https://wa.me/919188580811",
      location: "VAST Main Gate Security Station",
      availability: "24 Hours on-site"
    },
    {
      role: "Medical Emergency & First Aid",
      contactPerson: "VAST Campus Health Center & On-Duty Medical Unit",
      phone: "+91 91885 80811",
      tel: "tel:+919188580811",
      whatsapp: "https://wa.me/919188580811",
      location: "Campus Health Care Center + Dedicated Ambulance",
      availability: "24 Hours + First Aid Team"
    },
    {
      role: "Chief Faculty Convener (EEE)",
      contactPerson: "HOD & Staff Conveners, Dept. of EEE",
      phone: "+91 91885 80811",
      tel: "tel:+919188580811",
      whatsapp: "https://wa.me/919188580811",
      location: "EEE Department Office, South Block Room S-105",
      availability: "08:00 AM – 10:00 PM"
    },
    {
      role: "IT & Technical Support Desk",
      contactPerson: "Systems & Network Administration Cell",
      phone: "+91 91885 80811",
      tel: "tel:+919188580811",
      whatsapp: "https://wa.me/919188580811",
      location: "Central Computing Facility, South Block",
      availability: "08:00 AM – 11:00 PM"
    }
  ],

  // ----------------------------------------------------------------------------
  // 8. IMPORTANT INFORMATION & GUEST INSTRUCTIONS
  // ----------------------------------------------------------------------------
  importantInfo: [
    {
      title: "Registration & Badge Verification",
      icon: "clipboard-check",
      badge: "Mandatory",
      details: "All external participants, faculty mentors, and visitors must first report to the Central Registration Desk at Admin Block Portico with a valid College Identity Card and registration confirmation QR code to receive the official fest delegate wristband."
    },
    {
      title: "Reporting Time & Punctuality",
      icon: "clock",
      badge: "Strict",
      details: "Day 1 Registration starts at 08:00 AM. Participants for morning events (Hackathon, Workshops, CodeSprint) must report at least 30 minutes before the scheduled start time. Late arrivals may risk slot forfeiture to waitlisted candidates."
    },
    {
      title: "Campus Entry & Security Pass",
      icon: "shield-check",
      badge: "Security",
      details: "Entry to academic blocks and labs is strictly permitted only upon displaying the official fest badge. Security personnel will conduct non-intrusive baggage screening at the entrance. Outside eatables are restricted inside computer labs and auditorium."
    },
    {
      title: "Free Designated Parking Zones",
      icon: "truck",
      badge: "Free Parking",
      details: "Designated visitor parking is located at Gate 2 (Two-Wheelers: North Quad parking bay, Four-Wheelers: Open Sports Ground East Wing). Parking is completely free for all registered guests. Please follow traffic volunteer directions."
    },
    {
      title: "Food, Refreshments & Water Stations",
      icon: "coffee",
      badge: "Hygienic",
      details: "Complimentary lunch and high-tea coupons are provided in delegate welcome kits. Multiple food kiosks, coffee stalls, and packaged juice counters are operating at the Central Canteen Quadrangle. RO purified drinking water stations are installed on every floor."
    },
    {
      title: "Accommodation for Outstation Teams",
      icon: "home",
      badge: "Pre-Booking",
      details: "Subsidized clean campus hostel accommodation (separate wings for boys and girls) is available on a first-come, first-served basis for teams traveling more than 100 km. Reach out to the Hospitality Coordinator at least 48 hours in advance."
    },
    {
      title: "Medical Assistance & Cloakroom",
      icon: "heart-pulse",
      badge: "Facilities",
      details: "A fully equipped First-Aid clinic with on-duty physician and 24/7 dedicated campus ambulance is stationed next to the Indoor Sports Center. A secure cloakroom is available at Block A Room 12 to safely deposit luggage."
    },
    {
      title: "Code of Conduct & Ethics",
      icon: "award",
      badge: "Standard",
      details: "We are committed to providing a friendly, safe, and inclusive environment. Any form of harassment, malicious interference with hardware or judging systems, or damage to campus infrastructure will attract disciplinary actions and immediate expulsion."
    }
  ],

  // ----------------------------------------------------------------------------
  // 9. FREQUENTLY ASKED QUESTIONS (FAQ)
  // ----------------------------------------------------------------------------
  faqs: [
    {
      question: "Can students from any college or university participate?",
      answer: "Yes! INNOVA TECH FEST 2026 is an open national-level festival. Undergraduate and postgraduate students from any recognized university, engineering college, polytechnic, or science institute across India can participate with a valid college ID card.",
      category: "Eligibility"
    },
    {
      question: "Is spot / on-campus registration available?",
      answer: "On-spot registration is available for select events (such as Talk Sessions, Project Exhibition viewing, CTF, and Fun Events) subject to slot availability. However, flagship events like Hack-a-Futurism, RoboWars, and Valorant have capped capacity and strongly require advance online registration.",
      category: "Registration"
    },
    {
      question: "Can I participate in multiple events happening on the same day?",
      answer: "Yes, you can register for multiple events as long as their timetable schedules do not overlap. Please cross-check our detailed Schedule section to ensure you have adequate buffer time between venues.",
      category: "Events"
    },
    {
      question: "Will certificates and trophies be issued to all participants?",
      answer: "Every participant who attends and completes their scheduled event will receive an official verifiable digital Certificate of Participation. Winners and runners-up will be awarded physical certificates, cash prizes, and trophies during the Valedictory Gala.",
      category: "Certification"
    },
    {
      question: "What hardware or equipment should participants bring?",
      answer: "For Hackathon and Coding events: bring your own laptops, chargers, and pre-installed developer tools. For RoboWars / Drone Racing: bring your own bots, batteries, chargers, and replacement parts. High-speed Wi-Fi, power extension points, and monitors will be provided at the venues.",
      category: "Requirements"
    },
    {
      question: "What are the accommodation arrangements for outstation participants?",
      answer: "Clean hostel accommodation with basic amenities is provided for outstation participants on nominal charge (₹250/night including breakfast). Please select the accommodation option during online registration or contact our hospitality desk at least 48 hours prior.",
      category: "Accommodation"
    },
    {
      question: "How do I reach the college campus from the railway station / airport?",
      answer: "The campus is 6.5 km from the Central Railway Station (15 minutes by metro/cab) and 34 km from the International Airport. Dedicated college shuttle buses will operate from the nearest metro station (Central Line, Tech Park Stop) every 30 minutes from 07:30 AM onwards.",
      category: "Directions"
    }
  ],

  // ----------------------------------------------------------------------------
  // 10. GALLERY SHOWCASE
  // ----------------------------------------------------------------------------
  gallery: [
    {
      id: "gal-1",
      title: "24Hr Hackathon Midnight Crunch",
      category: "Hackathon",
      description: "Teams brainstorming and deploying AI architectures into the early morning hours.",
      thumbnail: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
      fullImage: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1600&q=85",
      tags: ["Hackathon", "Coding", "Innovation"]
    },
    {
      id: "gal-2",
      title: "RoboWars Combat Championship",
      category: "Robotics",
      description: "Sparks flying inside the reinforced combat arena as heavyweight bots battle for glory.",
      thumbnail: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
      fullImage: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1600&q=85",
      tags: ["Robotics", "Hardware", "Combat"]
    },
    {
      id: "gal-3",
      title: "National Student Project Exposition",
      category: "Exhibition",
      description: "Young innovators demonstrating IoT and healthcare prototypes to panel judges.",
      thumbnail: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
      fullImage: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1600&q=85",
      tags: ["Projects", "Research", "IoT"]
    },
    {
      id: "gal-4",
      title: "CyberDome Valorant LAN Arena",
      category: "Gaming",
      description: "High-octane esports duel with shoutcasters broadcasting to full house crowd.",
      thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80",
      fullImage: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1600&q=85",
      tags: ["Gaming", "eSports", "Arena"]
    },
    {
      id: "gal-5",
      title: "Grand Auditorium Keynote Session",
      category: "Sessions",
      description: "Packed auditorium listening to insights on quantum algorithms and AI safety.",
      thumbnail: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80",
      fullImage: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1600&q=85",
      tags: ["Auditorium", "Keynote", "Crowd"]
    },
    {
      id: "gal-6",
      title: "Neon Cultural Finale & Laser Symphony",
      category: "Cultural",
      description: "Electrifying laser projection and musical celebration at the Open Air Theatre.",
      thumbnail: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80",
      fullImage: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1600&q=85",
      tags: ["Concert", "Lasers", "Celebration"]
    }
  ],

  // ----------------------------------------------------------------------------
  // 11. SPONSORS & PARTNERS
  // ----------------------------------------------------------------------------
  sponsors: [
    {
      tier: "Title Sponsor",
      tierTag: "Powered By",
      items: [
        { name: "NEXUS CLOUD & AI CORP", type: "Global Cloud Partner", logoPlaceholder: "NEXUS CLOUD" }
      ]
    },
    {
      tier: "Main Sponsors",
      tierTag: "Platinum Partners",
      items: [
        { name: "QUANTUM CHIP SYSTEMS", type: "Hardware & Semiconductor Partner", logoPlaceholder: "QUANTUM CHIPS" },
        { name: "APEX CYBER DEFENSE", type: "Security Infrastructure Partner", logoPlaceholder: "APEX CYBER" },
        { name: "DEVSTUDIO ACCELERATOR", type: "Developer Tooling Partner", logoPlaceholder: "DEVSTUDIO" }
      ]
    },
    {
      tier: "Event & Technology Partners",
      tierTag: "Official Partners",
      items: [
        { name: "ROBOTIC DYNAMICS", type: "Robotics Arena Equipment", logoPlaceholder: "ROBODYNAMICS" },
        { name: "GAMELAB ESPORTS", type: "Gaming Hardware Partner", logoPlaceholder: "GAMELAB" },
        { name: "STREAMTECH BROADCASTS", type: "Media Streaming Partner", logoPlaceholder: "STREAMTECH" },
        { name: "STUDENT INNOVATE INDIA", type: "Student Community Partner", logoPlaceholder: "COMMUNITY IN" }
      ]
    }
  ]
};

// Make accessible to both browser window and potential modular imports
if (typeof window !== "undefined") {
  window.FEST_DATA = FEST_DATA;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = FEST_DATA;
}
