export const APP_CONFIG = {
  name: "XCinema Plus",
  tagline: "Your Personal Entertainment Organizer & High-Performance Media Player",
  version: "Version 0.0.0-alpha.0 (100)",
  versionShort: "v0.0.0-alpha.0",
  buildNumber: "100",
  releaseDate: "September 2026",
  status: "Public Alpha",
  apkDownloadUrl: "https://github.com/XGlobal-Studio/XCinema-Plus/releases/download/v0.0.0-alpha.0/XCinema-Plus-0.0.0-alpha.0-release.apk",
  githubReleaseUrl: "https://github.com/XGlobal-Studio/XCinema-Plus/releases/tag/v0.0.0-alpha.0",
  githubRepoUrl: "https://github.com/XGlobal-Studio/XCinema-Plus",
  author: "Carl27102",
  packageFileName: "XCinema-Plus-0.0.0-alpha.0-release.apk",
  fileSize: "48 MB",
  minimumAndroid: "Android 7.0 (Nougat) or higher",
};

export const APP_SCREENSHOTS = [
  {
    id: "home",
    title: "Home & Trending",
    subtitle: "Personalized Discovery Hub",
    description: "Explore what's trending, browse recently added titles, and track top 10 rankings with an intuitive, fluid dark interface.",
    image: "./screenshots/Screenshot_20260913-183935.jpg",
    highlight: "Curated Feed & Dynamic Lists",
    tag: "Home Screen"
  },
  {
    id: "search",
    title: "Instant Search & Discovery",
    subtitle: "Filter By Type, Catalog & Genre",
    description: "Find exactly what you want in milliseconds. Filter seamlessly across catalogs, content types, and genre categories.",
    image: "./screenshots/Screenshot_20260913-183946.jpg",
    highlight: "Multi-Filter Search Engine",
    tag: "Search Screen"
  },
  {
    id: "library",
    title: "Personal Library",
    subtitle: "Manage Your Watchlist & Collections",
    description: "Organize movies and television series into custom saved lists, bookmark favorites, and sort by recently added items.",
    image: "./screenshots/Screenshot_20260913-184052.jpg",
    highlight: "Unified Watchlist Manager",
    tag: "Library Screen"
  },
  {
    id: "detail",
    title: "Rich Metadata & Player",
    subtitle: "Complete Synopsis, Cast & Ratings",
    description: "View verified IMDb scores, comprehensive synopsis, full cast rosters with photos, and launch high-definition playback instantly.",
    image: "./screenshots/Screenshot_20260913-202216.jpg",
    highlight: "IMDb Rating & Cast Info",
    tag: "Movie Detail Screen"
  }
];

export const CORE_FEATURES = [
  {
    title: "Hardware-Accelerated Playback",
    badge: "Fluid & Fast",
    description: "Engineered with a lightweight, native video core for smooth 60fps playback, zero stutter, and low battery consumption on all Android devices.",
    icon: "zap"
  },
  {
    title: "Intelligent Media Discovery",
    badge: "Smart Sorting",
    description: "Quickly browse trending releases, curated recommendations, and top rankings across all major genres and categories.",
    icon: "compass"
  },
  {
    title: "Unified Personal Library",
    badge: "Stay Organized",
    description: "Keep your movies, series, and watch history organized in one clean, searchable space with instant offline caching.",
    icon: "bookmark"
  },
  {
    title: "Rich Cast & Metadata Explorer",
    badge: "IMDb & TMDB Integrated",
    description: "Dive deep into character backgrounds, full actor biographies, production years, runtime specs, and verified audience ratings.",
    icon: "film"
  },
  {
    title: "Minimalist Cinema Dark UI",
    badge: "Modern Design",
    description: "Designed following modern human interface principles: pure OLED blacks, crisp typography, and responsive touch gestures.",
    icon: "palette"
  },
  {
    title: "Open & Transparent Release",
    badge: "GitHub Verified",
    description: "Distributed directly via GitHub Releases. Inspect release notes, verify file checksums, and get direct APK installations without bloatware.",
    icon: "shield"
  }
];

export const ALPHA_SPECS = {
  version: "Version 0.0.0-alpha.0 (100)",
  tag: "v0.0.0-alpha.0",
  build: "100",
  architecture: "Universal Android APK (arm64-v8a / armeabi-v7a / x86_64)",
  targetSdk: "Android 7.0+",
  license: "Open Source / Independent Developer Release",
  notes: [
    "Initial public Alpha release (Build 100).",
    "Introduces unified Home, Search, Library, and Media Detail views.",
    "Integrated filter chips for content type, catalogs, and genres.",
    "Native hardware-accelerated video rendering engine.",
    "Direct APK deployment via GitHub Releases."
  ]
};

export const FAQ_ITEMS = [
  {
    q: "What is XCinema Plus?",
    a: "XCinema Plus is a personal media management, tracking, and high-performance video player application for Android. It allows users to discover trending entertainment, organize their personal watchlist in a clean library, and view comprehensive media details including cast lists and ratings."
  },
  {
    q: "Where can I download the official APK for Version 0.0.0-alpha.0 (100)?",
    a: "You can download the official release directly from our GitHub Releases page: https://github.com/XGlobal-Studio/XCinema-Plus/releases. The direct download button on this website links directly to the verified APK asset hosted on GitHub."
  },
  {
    q: "Does XCinema Plus provide or host media files?",
    a: "No. XCinema Plus is a software client and media organizer. It does not host, distribute, or stream proprietary copyrighted video content. It acts as an interface for managing personal collections and viewing publicly available metadata via open APIs."
  },
  {
    q: "How do I install an APK on my Android phone or tablet?",
    a: "1. Click 'Download APK' to download XCinema-Plus-0.0.0-alpha.0-release.apk. 2. When prompted by Android, tap 'Open'. 3. If prompted to allow installation from unknown sources, toggle 'Allow from this source' for your browser or file manager. 4. Tap 'Install' and launch the app."
  },
  {
    q: "Is Version 0.0.0-alpha.0 safe and ad-free?",
    a: "Yes. Build 100 is distributed directly via GitHub Releases, contains zero malware, no intrusive ad networks, and respects user privacy without background data harvesting."
  }
];
