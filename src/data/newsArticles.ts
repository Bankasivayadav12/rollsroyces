export interface NewsArticle {
  id: string;
  numericId: number;
  title: string;
  subtitle: string;
  image: string;
  type: string;
  date: string;
  readTime: string;
  author: string;
  location: string;
  summary: string;
  content: string[];
  quote?: {
    text: string;
    speaker: string;
    role: string;
  };
  keyStats: {
    label: string;
    value: string;
    description?: string;
  }[];
  tags: string[];
}

export const newsArticlesData: NewsArticle[] = [
  {
    id: "freighter-market-trent-7000",
    numericId: 1,
    title: "Rolls Royces strengthens freighter market position with Trent 7000 agreements",
    subtitle: "Landmark long-term propulsion commitments signed for modern widebody freighter aircraft fleets worldwide.",
    image: "/assets/images/news-a350f.jpg",
    type: "PRESS RELEASES",
    date: "29 SEPTEMBER 2026",
    readTime: "4 MIN READ",
    author: "Rolls Royces Media Relations",
    location: "London, UK",
    summary: "Rolls Royces has secured multi-billion dollar long-term propulsion agreements to supply Trent 7000 engines powering modern widebody freighters for major international cargo and logistics operators.",
    content: [
      "Rolls Royces has cemented its commercial leadership in the international air freight sector with major new fleet commitments for the Trent 7000 engine, powering the newest generation of widebody cargo aircraft including the Airbus A350F.",
      "As global supply chains place an increasing premium on time-definite logistics and environmental efficiency, air cargo carriers are modernizing their fleets with modern, fuel-efficient widebody aircraft. The Trent 7000 delivers a transformative 14% improvement in fuel burn and carbon emission reduction per tonne compared to predecessor freighter engines.",
      "Drawing directly on technologies proven across more than 150 million flight hours on the Trent engine family, the Trent 7000 incorporates single-crystal high-pressure turbine blades, advanced aerodynamic ceramic matrix coatings, and next-generation acoustic nacelle treatments.",
      "All delivered engines are fully covered by Rolls Royces TotalCare® long-term service agreements, providing cargo carriers with 24/7 predictive engine health diagnostics, proactive component replacements, and comprehensive maintenance predictability across the globe.",
      "The agreement also guarantees 100% Sustainable Aviation Fuel (SAF) operational readiness from day one, ensuring our cargo airline partners can seamlessly meet international CORSIA carbon offset mandates and corporate sustainability benchmarks."
    ],
    quote: {
      text: "The global freight industry demands relentless reliability and superior operating economics. These landmark commitments demonstrate clear market confidence in the Trent 7000 as the engine of choice for modern widebody cargo aircraft.",
      speaker: "Ewen McDonald",
      role: "Chief Customer Officer – Civil Aerospace, Rolls Royces"
    },
    keyStats: [
      { label: "Fuel Efficiency Advantage", value: "14%", description: "Lower fuel burn per tonne vs previous gen" },
      { label: "Gross Payload Capability", value: "111 Tonnes", description: "Long-range cargo carrying capacity" },
      { label: "SAF Compatibility", value: "100%", description: "Certified for Sustainable Aviation Fuel" },
      { label: "TotalCare Service Fleet", value: "24/7", description: "Real-time AI digital health monitoring" }
    ],
    tags: ["Civil Aerospace", "Trent 7000", "Air Cargo", "TotalCare", "Sustainability"]
  },
  {
    id: "uk-manufacturing-investment",
    numericId: 2,
    title: "Rolls Royces invests £300 million in UK manufacturing facilities to boost aerospace capabilities",
    subtitle: "Strategic multi-facility investment in Derby, Bristol, and Rotherham accelerates next-gen UltraFan and defence production.",
    image: "/assets/images/news-turbine.jpg",
    type: "PRESS RELEASES",
    date: "28 SEPTEMBER 2026",
    readTime: "5 MIN READ",
    author: "Rolls Royces Corporate Communications",
    location: "Derby, UK",
    summary: "A landmark £300 million capital investment committed across Rolls Royces core UK manufacturing sites in Derby, Bristol, and Rotherham to scale advanced manufacturing technologies and support over 1,200 high-skill jobs.",
    content: [
      "Rolls Royces has announced an extensive £300 million investment across its primary UK engineering and manufacturing hubs, reaffirming its commitment to domestic industrial leadership and advanced aerospace engineering.",
      "The investment programme focuses on modernizing precision machining centers in Derby, expanding composite carbon-titanium fan blade fabrication in Bristol, and deploying automated robotic casting cells at the Advanced Blade Casting Facility in Rotherham.",
      "The capital injection directly accelerates serial production readiness for the UltraFan® engine demonstrator—the world's largest aero-engine, which sets new standards in propulsive efficiency—while simultaneously expanding production capacity for combat air and naval defence programmes.",
      "Crucially, the programme safeguards and creates more than 1,200 advanced engineering and manufacturing apprenticeships, graduate roles, and specialist positions across the Midlands, South West, and Yorkshire.",
      "State-of-the-art Industry 4.0 digital twins and closed-loop robotic inspection cells will be integrated across all three manufacturing campuses, driving energy consumption reductions of over 30% per manufactured component."
    ],
    quote: {
      text: "This £300 million investment represents our unwavering confidence in UK high-value manufacturing and our exceptional engineering workforce. By embedding state-of-the-art robotic automation and sustainable processes, we ensure Rolls Royces remains the benchmark for world-class aerospace engineering.",
      speaker: "Tufan Erginbilgic",
      role: "Chief Executive Officer, Rolls Royces"
    },
    keyStats: [
      { label: "Total Capital Investment", value: "£300M", description: "Dedicated to UK aerospace infrastructure" },
      { label: "High-Skill Engineering Jobs", value: "1,200+", description: "Apprenticeships, graduate and specialist roles" },
      { label: "Facilities Upgraded", value: "3 Sites", description: "Derby, Bristol, and Rotherham facilities" },
      { label: "Energy Efficiency Gain", value: "30%", description: "Lower factory carbon footprint per engine" }
    ],
    tags: ["Manufacturing", "UK Industry", "UltraFan", "Investment", "Apprenticeships"]
  },
  {
    id: "global-advanced-manufacturing",
    numericId: 3,
    title: "Rolls Royces Completes $1 Billion Investment in Global Advanced Manufacturing Footprint",
    subtitle: "Global milestone reached with the inauguration of cutting-edge robotic production campuses across North America, Europe, and Asia.",
    image: "/assets/images/news-ribbon.jpg",
    type: "PRESS RELEASES",
    date: "27 AUGUST 2026",
    readTime: "4 MIN READ",
    author: "Rolls Royces Global Operations",
    location: "Singapore & Indianapolis",
    summary: "Rolls Royces marks the formal completion of its comprehensive $1 billion global advanced manufacturing transformation, expanding production efficiency across 8 global technology centers.",
    content: [
      "Rolls Royces has officially concluded a multi-year $1.0 billion capital transformation across its worldwide manufacturing footprint, inaugurating modern manufacturing and assembly campuses spanning Europe, North America, and the Asia-Pacific region.",
      "The comprehensive programme has transformed eight primary manufacturing hubs into interconnected smart factories, utilizing synchronized digital twins, automated guided vehicle (AGV) logistics, and real-time cloud analytics to accelerate engine delivery times.",
      "Key facilities benefiting from the expansion include modernized defence engine assembly complexes in Indianapolis (USA), advanced fan blade manufacturing in Singapore, and high-precision marine turbine assembly facilities in Friedrichshafen (Germany).",
      "In addition to manufacturing velocity gains, the upgraded footprint achieves 100% renewable electricity procurement across all newly built manufacturing halls, supporting Rolls Royces pathway to net zero operational greenhouse gas emissions.",
      "The completion of this programme provides Rolls Royces with the resilient global capacity needed to support surging airline deliveries and expanding defence contracts well into the next decade."
    ],
    quote: {
      text: "Completing this $1 billion investment ensures our manufacturing network operates with unprecedented precision, resilience, and agility. Our customers around the world will benefit directly from accelerated deliveries and higher quality standards.",
      speaker: "Nicola Grady-Smith",
      role: "Chief Operations & Supply Chain Officer, Rolls Royces"
    },
    keyStats: [
      { label: "Worldwide Investment", value: "$1.0B", description: "Multi-year capital transformation" },
      { label: "Smart Campuses", value: "8 Centers", description: "Inaugurated across 3 continents" },
      { label: "Renewable Power", value: "100%", description: "Clean electricity for all new sites" },
      { label: "Lead Time Reduction", value: "35%", description: "Accelerated engine delivery cycle" }
    ],
    tags: ["Global Footprint", "Industry 4.0", "Digital Twin", "Operations", "Expansion"]
  },
  {
    id: "reliance-clean-energy-partnership",
    numericId: 4,
    title: "Reliance Industries and Rolls Royces announce strategic partnership for clean energy development",
    subtitle: "Historic multi-billion dollar alliance to co-develop hydrogen combustion engines and distributed industrial microgrids.",
    image: "/assets/images/news-hq.jpg",
    type: "PRESS RELEASES",
    date: "14 AUGUST 2026",
    readTime: "6 MIN READ",
    author: "Rolls Royces Strategic Communications",
    location: "Mumbai, India",
    summary: "Reliance Industries Limited and Rolls Royces have forged a long-term strategic alliance to accelerate green hydrogen engine technology and scalable zero-carbon microgrids for industrial and maritime applications.",
    content: [
      "In a landmark development for the international clean energy transition, Reliance Industries Limited and Rolls Royces Power Systems have announced a long-term strategic partnership to co-develop and manufacture green hydrogen power systems.",
      "The partnership brings together Reliance's massive green energy ecosystem—including solar gigafactories and green hydrogen generation in Jamnagar, Gujarat—with Rolls Royces world-leading mtu hydrogen reciprocating engine technology and microgrid automation.",
      "Initial projects under the alliance will deploy 100% hydrogen-fuelled mtu Series 4000 combined heat and power (CHP) generation units at large-scale industrial facilities, data centers, and port operations across South Asia and the Gulf.",
      "The companies will also collaborate on establishing a joint Clean Propulsion Engineering Hub in Gujarat, developing advanced fuel cell systems, hydrogen refuelling infrastructure, and modular containerized battery storage solutions.",
      "This alliance directly accelerates India's National Green Hydrogen Mission while positioning Rolls Royces as the foremost technology partner for commercial zero-carbon distributed power generation in emerging economies."
    ],
    quote: {
      text: "Clean hydrogen is the bridge to a decarbonized industrial future. By pairing Reliance's green hydrogen infrastructure with Rolls Royces cutting-edge propulsion and engine engineering, we are establishing a global template for sustainable industrial power.",
      speaker: "Mukesh Ambani",
      role: "Chairman and Managing Director, Reliance Industries"
    },
    keyStats: [
      { label: "Clean Energy Target", value: "Multi-GW", description: "Planned clean hydrogen generation pipeline" },
      { label: "Emission Reduction", value: "Up to 95%", description: "Net lifecycle carbon savings vs diesel" },
      { label: "Joint R&D Hub", value: "Jamnagar", description: "Advanced Hydrogen Engineering Center" },
      { label: "Application Scope", value: "3 Sectors", description: "Industrial microgrids, data centers, and marine" }
    ],
    tags: ["Clean Energy", "Hydrogen", "Reliance Industries", "Power Systems", "Partnership"]
  }
];

export function getArticleByIdOrNumeric(idOrNumeric: string): NewsArticle | undefined {
  return newsArticlesData.find(
    (item) => item.id === idOrNumeric || item.numericId.toString() === idOrNumeric
  );
}

