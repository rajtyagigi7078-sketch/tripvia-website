// ============================================
// DYNAMIC HERO TEXTS
// ============================================
export const HERO_TEXTS = [
  "Plan your next journey, one place at a time",
  "Where every trip begins with an idea",
  "Discover places. Plan better trips.",
  "Turn travel ideas into real journeys",
  "Your guide to unforgettable trips",
  "Explore destinations the smart way",
  "From planning to exploring — all in one place",
  "Travel smarter, not harder",
  "Find places, food, stays & experiences",
  "Every destination has a story — start yours"
];

// ============================================
// BACKGROUND IMAGES FOR SLIDESHOW
// ============================================
export const BACKGROUND_IMAGES = [
  { 
    id: 1, 
    type: "mountains", 
    url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80"
  },
  { 
    id: 2, 
    type: "beach", 
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80"
  },
  { 
    id: 3, 
    type: "city", 
    url: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1920&q=80"
  },
  { 
    id: 4, 
    type: "forest", 
    url: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=1920&q=80"
  },
  { 
    id: 5, 
    type: "temple", 
    url: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1920&q=80"
  }
];

// ============================================
// MOCK DATA STRUCTURES (Backend-Ready)
// ============================================
export const CITIES_DATA = [
  {
    city_id: "rishikesh",
    city_name: "Rishikesh",
    short_description: "Yoga capital & spiritual destination",
    long_description: "Rishikesh is a city in India's northern state of Uttarakhand, in the Himalayan foothills beside the Ganges River. The river is considered holy, and the city is renowned as a center for studying yoga and meditation.",
    hero_image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=1920&q=80",
    state: "Uttarakhand",
    country: "India",
    weather: { temp: "25°C", condition: "Pleasant", season: "Winter" },
    best_time: "September to November, February to April",
    lat: 30.0869,
    lng: 78.2676
  },
  {
    city_id: "goa",
    city_name: "Goa",
    short_description: "Beaches & nightlife",
    long_description: "Goa is a state in western India with coastlines stretching along the Arabian Sea. Its long history as a Portuguese colony prior to 1961 is evident in its preserved 17th-century churches and the area's tropical spice plantations.",
    hero_image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1920&q=80",
    state: "Goa",
    country: "India",
    weather: { temp: "28°C", condition: "Sunny", season: "Winter" },
    best_time: "November to February",
    lat: 15.2993,
    lng: 74.1240
  },
  {
    city_id: "manali",
    city_name: "Manali",
    short_description: "Mountain adventures",
    long_description: "Manali is a high-altitude Himalayan resort town in India's northern Himachal Pradesh state. It has a reputation as a backpacking center and honeymoon destination.",
    hero_image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1920&q=80",
    state: "Himachal Pradesh",
    country: "India",
    weather: { temp: "10°C", condition: "Cold", season: "Winter" },
    best_time: "October to June",
    lat: 32.2432,
    lng: 77.1892
  },
  {
    city_id: "jaipur",
    city_name: "Jaipur",
    short_description: "Pink city heritage",
    long_description: "Jaipur is the capital of India's Rajasthan state. It evokes the royal family that once ruled the region and that, in 1727, founded what is now called the Old City.",
    hero_image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=1920&q=80",
    state: "Rajasthan",
    country: "India",
    weather: { temp: "22°C", condition: "Clear", season: "Winter" },
    best_time: "November to February",
    lat: 26.9124,
    lng: 75.7873
  }
];

export const ITEMS_DATA = [
  // Rishikesh Places
  { item_id: "r1", city_id: "rishikesh", title: "Laxman Jhula", type: "place", budget_type: "budget", short_description: "Iconic suspension bridge", image: null, approx_price_range: "Free", booking_url: "" },
  { item_id: "r2", city_id: "rishikesh", title: "Beatles Ashram", type: "place", budget_type: "budget", short_description: "Historic meditation center", image: null, approx_price_range: "₹150", booking_url: "" },
  { item_id: "r3", city_id: "rishikesh", title: "River Rafting", type: "activity", budget_type: "standard", short_description: "Thrilling water adventure", image: null, approx_price_range: "₹500-₹1500", booking_url: "" },
  { item_id: "r4", city_id: "rishikesh", title: "Chotiwala Restaurant", type: "food", budget_type: "budget", short_description: "Famous North Indian cuisine", image: null, approx_price_range: "₹200-₹400", booking_url: "" },
  { item_id: "r5", city_id: "rishikesh", title: "Zostel Rishikesh", type: "stay", budget_type: "budget", short_description: "Backpacker hostel", image: null, approx_price_range: "₹500-₹800/night", booking_url: "" },
  { item_id: "r6", city_id: "rishikesh", title: "Ganga Beach Resort", type: "stay", budget_type: "premium", short_description: "Luxury riverside resort", image: null, approx_price_range: "₹5000+/night", booking_url: "" },
  
  // Goa
  { item_id: "g1", city_id: "goa", title: "Baga Beach", type: "place", budget_type: "budget", short_description: "Popular beach destination", image: null, approx_price_range: "Free", booking_url: "" },
  { item_id: "g2", city_id: "goa", title: "Water Sports", type: "activity", budget_type: "standard", short_description: "Parasailing, jet ski", image: null, approx_price_range: "₹1000-₹3000", booking_url: "" },
  { item_id: "g3", city_id: "goa", title: "Vinayak Family Restaurant", type: "food", budget_type: "budget", short_description: "Authentic Goan seafood", image: null, approx_price_range: "₹300-₹600", booking_url: "" },
  { item_id: "g4", city_id: "goa", title: "Backpacker Panda", type: "stay", budget_type: "budget", short_description: "Beach hostel", image: null, approx_price_range: "₹600-₹1000/night", booking_url: "" },
  
  // Manali
  { item_id: "m1", city_id: "manali", title: "Rohtang Pass", type: "place", budget_type: "standard", short_description: "High mountain pass", image: null, approx_price_range: "₹500 permit", booking_url: "" },
  { item_id: "m2", city_id: "manali", title: "Paragliding", type: "activity", budget_type: "standard", short_description: "Mountain paragliding", image: null, approx_price_range: "₹2000-₹3000", booking_url: "" },
  { item_id: "m3", city_id: "manali", title: "Johnson's Cafe", type: "food", budget_type: "standard", short_description: "Popular cafe & bakery", image: null, approx_price_range: "₹400-₹800", booking_url: "" },
  { item_id: "m4", city_id: "manali", title: "Zostel Manali", type: "stay", budget_type: "budget", short_description: "Mountain hostel", image: null, approx_price_range: "₹700-₹1200/night", booking_url: "" },
  
  // Jaipur
  { item_id: "j1", city_id: "jaipur", title: "Hawa Mahal", type: "place", budget_type: "budget", short_description: "Palace of Winds", image: null, approx_price_range: "₹200", booking_url: "" },
  { item_id: "j2", city_id: "jaipur", title: "City Palace Tour", type: "activity", budget_type: "standard", short_description: "Royal palace exploration", image: null, approx_price_range: "₹500-₹1000", booking_url: "" },
  { item_id: "j3", city_id: "jaipur", title: "Laxmi Mishthan Bhandar", type: "food", budget_type: "budget", short_description: "Famous sweets & snacks", image: null, approx_price_range: "₹200-₹500", booking_url: "" },
  { item_id: "j4", city_id: "jaipur", title: "Jaipur Inn", type: "stay", budget_type: "budget", short_description: "Heritage guesthouse", image: null, approx_price_range: "₹800-₹1500/night", booking_url: "" }
];

export const ICONIC_PLACES_DATA = [
  { id: "ip1", name: "Taj Mahal", tagline: "Symbol of eternal love", image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=600&q=80" },
  { id: "ip2", name: "Golden Temple", tagline: "Spiritual sanctuary", image: "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?w=600&q=80" },
  { id: "ip3", name: "Gateway of India", tagline: "Historic monument", image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=600&q=80" },
  { id: "ip4", name: "Hawa Mahal", tagline: "Palace of winds", image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=600&q=80" },
  { id: "ip5", name: "Amber Fort", tagline: "Majestic hilltop palace", image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=600&q=80" },
  { id: "ip6", name: "Victoria Memorial", tagline: "Colonial architecture", image: "https://images.unsplash.com/photo-1558431382-27e303142255?w=600&q=80" }
];

export const COMMUNITY_PHOTOS_DATA = [
  { id: "cp1", username: "traveler_raj", photo: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=400&q=80", caption: "Sunset at Goa beach" },
  { id: "cp2", username: "wanderlust_priya", photo: "https://images.unsplash.com/photo-1504276048855-f3d60e69632f?w=400&q=80", caption: "Rishikesh rafting adventure" },
  { id: "cp3", username: "explorer_amit", photo: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=400&q=80", caption: "Manali snow views" },
  { id: "cp4", username: "foodie_neha", photo: "https://images.unsplash.com/photo-1567337710282-00832b415979?w=400&q=80", caption: "Street food in Jaipur" },
  { id: "cp5", username: "mountain_lover", photo: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80", caption: "Himalayan sunrise" }
];

export const TRAVEL_INFO_DATA = [
  { from_city: "Delhi", to_city: "Rishikesh", travel_type: "bus", approx_price_range: "₹400-₹800", booking_url: "" },
  { from_city: "Delhi", to_city: "Manali", travel_type: "bus", approx_price_range: "₹800-₹1500", booking_url: "" },
  { from_city: "Mumbai", to_city: "Goa", travel_type: "bus", approx_price_range: "₹600-₹1200", booking_url: "" }
];
