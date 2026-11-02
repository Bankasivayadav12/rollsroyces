export interface DivisionSpec {
  label: string;
  value: string;
}

export interface DivisionCapability {
  title: string;
  description: string;
  badge?: string;
}

export interface DivisionData {
  id: string;
  slug: string;
  title: string;
  category: string;
  subtitle: string;
  heroTagline: string;
  cardDesc: string;
  description: string;
  highlight: string;
  image: string;
  secondaryImage?: string;
  specs: DivisionSpec[];
  capabilities: DivisionCapability[];
  featuredPrograms: {
    name: string;
    description: string;
    stat: string;
  }[];
}

export const divisionsData: Record<string, DivisionData> = {
  submarines: {
    id: "submarines",
    slug: "submarines",
    title: "Submarines",
    category: "Submarines",
    subtitle: "Powering continuous at-sea deterrence and underwater defence",
    heroTagline: "Nuclear Marine Propulsion Plants Delivering Mission-Critical Silent Endurance",
    cardDesc:
      "For over 60 years, Rolls Royces has been the exclusive designer and manufacturer of nuclear steam raising plants powering the UK Royal Navy's nuclear submarine fleet with mission-critical silent endurance.",
    description:
      "Rolls Royces Submarines designs, manufactures, and supports the naval nuclear reactor propulsion plants for the Astute, Vanguard, and future Dreadnought and SSN-AUKUS submarine fleets. Headquartered at Raynesway in Derby, Rolls Royces provides sovereign nuclear capabilities ensuring continuous at-sea deterrence and mission-critical silent endurance across the globe.",
    highlight: "Over 18 million miles travelled underwater powered by Rolls Royces nuclear reactor technology.",
    image: "/assets/images/submarine-hero.jpg",
    secondaryImage: "/assets/images/carrier-deck.jpg",
    specs: [
      { label: "Operational Heritage", value: "60+ Years Nuclear" },
      { label: "Propulsion Plant", value: "Pressurised Water Reactor (PWR)" },
      { label: "Submarine Fleet", value: "Astute, Vanguard & Dreadnought" },
      { label: "Global Alliance", value: "SSN-AUKUS Trilateral Partnership" },
      { label: "Engineering Workforce", value: "4,000+ Nuclear Specialists" },
      { label: "UK Sovereign Site", value: "Raynesway, Derby, UK" },
    ],
    capabilities: [
      {
        title: "Pressurised Water Reactors (PWR)",
        description:
          "Custom-designed naval nuclear propulsion reactors delivering silent operation, unprecedented power density, and decades of mission endurance without refueling.",
        badge: "Core Technology",
      },
      {
        title: "SSN-AUKUS Nuclear Propulsion",
        description:
          "Rolls Royces is selected to deliver the nuclear reactors for the revolutionary SSN-AUKUS attack submarine program serving the Royal Navy and the Royal Australian Navy.",
        badge: "Strategic Program",
      },
      {
        title: "Lifecycle Fleet In-Service Support",
        description:
          "End-to-end technical support, continuous acoustic monitoring, refit engineering, and digital reactor telemetry protecting submarine operations 24/7/365.",
        badge: "Support",
      },
    ],
    featuredPrograms: [
      {
        name: "Dreadnought Class",
        description: "Next-generation ballistic missile submarines carrying the UK's strategic nuclear deterrent into the 2060s.",
        stat: "100% Sovereign UK Reactor",
      },
      {
        name: "Astute Class",
        description: "World's most advanced nuclear-powered attack submarines engineered for deep-sea reconnaissance and strike capabilities.",
        stat: "7 Attack Submarines",
      },
      {
        name: "SSN-AUKUS",
        description: "Groundbreaking multinational partnership developing common attack submarines for the UK and Australian armed forces.",
        stat: "Next-Gen Subsurface Fleet",
      },
    ],
  },
  defence: {
    id: "defence",
    slug: "defence",
    title: "Defence",
    category: "Defence",
    subtitle: "Powering security on land, at sea and in the air",
    heroTagline: "World-Leading Combat Aircraft Engines and Naval Propulsion Systems",
    cardDesc:
      "We provide world-leading power and propulsion systems for military aircraft, naval combatants and nuclear submarines, supporting the armed forces of more than 100 nations across safety-critical mission profiles.",
    description:
      "Rolls Royces is one of the world's leading suppliers of defence aircraft engines and naval propulsion systems. Powering fighter jets like Eurofighter Typhoon, the F-35B Lightning II, and the future Global Combat Air Programme (GCAP), as well as naval combatants across 100+ armed forces worldwide.",
    highlight: "Exclusive provider of nuclear propulsion for the UK Royal Navy's Vanguard and Astute submarines, and the innovative LiftSystem for the F-35B.",
    image: "/assets/images/prod-defence.jpg",
    secondaryImage: "/assets/images/carrier-deck.jpg",
    specs: [
      { label: "Armed Forces Supported", value: "100+ Nations" },
      { label: "Engines in Military Service", value: "16,000+ Military Engines" },
      { label: "Combat Propulsion", value: "F-35B & Eurofighter Typhoon" },
      { label: "Naval Gas Turbine Power", value: "MT30 (36-40MW Output)" },
      { label: "Global Presence", value: "Over 70 Armed Forces Air Arms" },
      { label: "Future Combat Air", value: "GCAP / Tempest Initiative" },
    ],
    capabilities: [
      {
        title: "Combat Jet Propulsion",
        description:
          "Advanced reheat turbofans including the EJ200 powering Eurofighter Typhoon and the revolutionary Rolls Royces LiftSystem enabling STOVL operations on the F-35B.",
        badge: "Air Power",
      },
      {
        title: "Naval Marine Gas Turbines",
        description:
          "The MT30 marine gas turbine delivers unmatched power density and reliability for aircraft carriers, destroyers, and frigates worldwide.",
        badge: "Naval Power",
      },
      {
        title: "Military Transport & Helicopters",
        description:
          "Dependable propulsion for heavy-lift transport aircraft such as the C-130J Super Hercules, V-22 Osprey, and frontline tactical helicopters.",
        badge: "Tactical Fleet",
      },
    ],
    featuredPrograms: [
      {
        name: "F-35B Lightning II LiftSystem",
        description: "The world's only supersonic short takeoff and vertical landing propulsion system, developed and built by Rolls Royces.",
        stat: "Over 40,000 lbs Vertical Thrust",
      },
      {
        name: "Eurofighter Typhoon (EJ200)",
        description: "Twin EJ200 engines providing Mach 2+ supercruise capability with supreme thrust-to-weight performance.",
        stat: "2 Million+ Flying Hours",
      },
      {
        name: "Queen Elizabeth Class Aircraft Carriers",
        description: "Integrated full electric propulsion powered by dual Rolls Royces MT30 gas turbines and diesel generators.",
        stat: "65,000 Tonnes Flagships",
      },
    ],
  },
  "power-systems": {
    id: "power-systems",
    slug: "power-systems",
    title: "Power Systems",
    category: "Power Systems",
    subtitle: "Powering sustainability in propulsion and energy",
    heroTagline: "Pioneering mtu Power Solutions for Clean Energy, Marine, and Critical Infrastructure",
    cardDesc:
      "Our mtu brand products contribute to the energy transition - as emergency power supplies for safety-critical installations and as integrated propulsion systems for ships and heavy land vehicles.",
    description:
      "Rolls Royces Power Systems develops and produces high-speed mtu engines, complete propulsion systems, and distributed energy power generation systems worldwide. From Series 8000 marine engines powering high-speed ferries and mega-yachts, to containerized battery energy storage and hydrogen-ready microgrids powering mission-critical data centres and healthcare facilities.",
    highlight: "mtu Hydrogen microgrid and battery storage systems delivering resilient zero-carbon power at scale.",
    image: "/assets/images/series-8000.jpg",
    secondaryImage: "/assets/images/powersystems-landscape.svg",
    specs: [
      { label: "Max Engine Power", value: "Up to 10,000 kW per unit" },
      { label: "Microgrid Energy", value: "Zero-Carbon & Hydrogen Ready" },
      { label: "Marine Applications", value: "Ferries, Naval & Mega-Yachts" },
      { label: "Critical Power", value: "Global Data Centres & Hospitals" },
      { label: "Global mtu Network", value: "1,200+ Service Locations" },
      { label: "Decarbonization Goal", value: "Net Zero Ready by 2030" },
    ],
    capabilities: [
      {
        title: "mtu Series 8000 Marine Engines",
        description:
          "Benchmark high-power diesel and sustainable fuel marine engines offering the highest power-to-weight ratio in the 10,000 kW class.",
        badge: "Marine Benchmark",
      },
      {
        title: "Battery Energy Storage Systems (BESS)",
        description:
          "Intelligent mtu EnergyPack containerized battery storage solutions enabling dynamic grid balancing, renewable integration, and uninterrupted power.",
        badge: "Clean Energy",
      },
      {
        title: "Continuous & Standby Power Generation",
        description:
          "Emergency standby generator sets and combined heat and power (CHP) systems trusted by the world's leading mission-critical facilities.",
        badge: "Critical Power",
      },
    ],
    featuredPrograms: [
      {
        name: "mtu Series 8000",
        description: "High-performance marine propulsion engines installed on fast commercial catamarans, patrol vessels, and luxury yachts globally.",
        stat: "10,000 kW Engine Output",
      },
      {
        name: "mtu Hydrogen & Microgrid Solutions",
        description: "Zero-emission microgrid systems combining solar, battery energy storage, and hydrogen combustion engines.",
        stat: "100% Renewable Capable",
      },
      {
        name: "Data Centre Mission-Critical Power",
        description: "Rapid-response emergency standby diesel and HVO generator sets safeguarding world cloud infrastructure.",
        stat: "99.999% Reliability Record",
      },
    ],
  },
};

