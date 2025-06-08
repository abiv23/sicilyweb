// src/app/pages/planning/nonna/nonna.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TravelerPlanningComponent, TravelerPlan } from '../../../components/traveler-planning/traveler-planning.component';

@Component({
  selector: 'app-nonna',
  standalone: true,
  imports: [CommonModule, TravelerPlanningComponent],
  template: `
    <app-traveler-planning 
      [plan]="nonnaPlan" 
      heroImage="mountain_village.jpg">
    </app-traveler-planning>
  `
})
export class NonnaComponent {
  
  nonnaPlan: TravelerPlan = {
    travelerName: "Nonna",
    travelerDescription: "Thoughtful planning with emphasis on accessibility, parking, and family-friendly accommodations",
    priorities: [
      "Central hotel locations for easy walking",
      "Free parking availability", 
      "Senior-friendly accessibility",
      "Family connection in Gioiosa Marea",
      "Quality breakfast included"
    ],
    
    specialConsiderations: [
      "Taormina is very hilly with steep stairs - central location essential",
      "Free parking is not available at all hotels",
      "Check accessibility features for mixed-age group",
      "Laundry services needed for longer stays"
    ],

    accommodations: [
      {
        destination: "Palermo",
        generalNotes: [
          "Look for hotels with free parking as not all offer parking",
          "Centrally located hotels preferred for walking to attractions"
        ],
        recommendations: [
          {
            name: "BB22 and BB22 Palace",
            type: "Boutique B&B / Apartments",
            highlights: [
              "Quaint, charming, and interesting small boutique property",
              "Possible apartment options for longer stays",
              "Breakfast received very good reviews",
              "Good location on quiet side street",
              "Parking available in garage",
              "Laundry services available",
              "Unique experiences offered"
            ],
            website: "https://www.bb22.it/esperienze/",
            bookingInfo: "Check their website for special experiences and packages"
          }
        ]
      },
      {
        destination: "Siracusa",
        generalNotes: [
          "Rick Steves recommends staying on Ortigia island rather than 'charmless' mainland",
          "Staying on Ortigia eliminates bridge crossing and most parking issues"
        ],
        recommendations: [
          {
            name: "Former Convent (Rick Steves Recommendation)",
            type: "Historic Convent Hotel",
            highlights: [
              "Simple rooms with authentic atmosphere",
              "No elevator - consider accessibility needs",
              "Nuns still walk the halls - unique cultural experience",
              "Located on charming Ortigia island"
            ],
            bookingInfo: "Rick Steves recommended - check his guidebook for specifics"
          },
          {
            name: "Algila Ortigia Charme Hotel",
            type: "Charming Boutique Hotel",
            highlights: [
              "Located on beautiful Ortigia island",
              "Charming atmosphere with modern amenities"
            ]
          },
          {
            name: "Charme Hotel Henry's House",
            type: "Boutique Hotel",
            highlights: [
              "Ortigia island location",
              "Good reviews and central position"
            ]
          },
          {
            name: "Hotel Livingston",
            type: "Modern Hotel",
            highlights: [
              "Contemporary accommodations on Ortigia",
              "Good amenities and location"
            ]
          }
        ]
      },
      {
        destination: "Catania",
        generalNotes: [
          "Fewer hotel recommendations available",
          "Consider as potential alternative to Taormina for final nights"
        ],
        recommendations: [
          {
            name: "Grand Hotel Baia Verde",
            type: "Grand Hotel",
            highlights: [
              "Rooms have private terraces",
              "Good location in Catania",
              "Traditional grand hotel experience"
            ]
          },
          {
            name: "Manganelli Palace",
            type: "Palace Hotel",
            highlights: [
              "Air conditioning available",
              "Elevator access",
              "Parking available",
              "Historic palace setting"
            ]
          }
        ]
      }
    ],

    destinations: [
      {
        name: "Gioiosa Marea",
        region: "Northern Sicily - Family Connection",
        priority: "must-see",
        duration: "1-2 days",
        highlights: ["Family heritage", "Biviano family connections", "Coastal views", "Authentic village life"],
        activities: [
          {
            name: "Family Heritage Research",
            description: "Hope to discover if any Biviano family members still live in the area",
            tips: [
              "Check video sent with suggested viewing points",
              "Visit both beaches and town areas",
              "Research local records if possible"
            ],
            timing: "Allow full day for exploration"
          },
          {
            name: "Beach and Town Exploration",
            description: "Explore the beautiful coastline and historic town center",
            tips: [
              "Check suggested stop points from video",
              "Bring camera for family heritage documentation"
            ]
          }
        ],
        practicalities: {
          parking: "Generally good parking availability in smaller town",
          accessibility: "Check specific areas - some coastal areas may have limited access"
        },
        personalNotes: [
          "Need to find out if any Biviano's still live there",
          "Video has suggested points for stops to see beaches and town"
        ]
      },
      {
        name: "Cefalù",
        region: "Northern Sicily",
        priority: "recommended", 
        duration: "Half day stop",
        highlights: ["Beautiful beaches", "Norman cathedral", "La Rocca fortress", "Interesting town"],
        activities: [
          {
            name: "Cathedral and Town Walk",
            description: "Visit the stunning Norman cathedral and explore medieval streets",
            tips: [
              "Worth a stop for beautiful beaches",
              "Town is very interesting to explore",
              "Can be combined with other northern Sicily destinations"
            ],
            timing: "Half day sufficient"
          },
          {
            name: "La Rocca Climb (Optional)",
            description: "Hike up the dramatic rock formation above town for panoramic views",
            tips: [
              "About 1 hour from Palermo",
              "Assess group's energy level before attempting climb"
            ]
          }
        ],
        practicalities: {
          parking: "Limited in historic center - use designated areas",
          accessibility: "Historic center walkable, La Rocca climb not suitable for all ages"
        },
        personalNotes: [
          "Beautiful beaches make it worth the stop",
          "Interesting town to explore",
          "One hour drive from Palermo - easy day trip"
        ]
      },
      {
        name: "Palermo",
        region: "Western Sicily - Capital",
        priority: "must-see",
        duration: "2-3 days",
        highlights: ["Teatro Massimo", "Street food markets", "Norman heritage", "Multicultural history"],
        activities: [
          {
            name: "Teatro Massimo Opera House",
            description: "Visit the largest opera house in Europe and 3rd largest in the world",
            tips: [
              "Guided tours available",
              "Check performance schedule",
              "Impressive architecture and acoustics"
            ],
            timing: "Allow 2 hours for tour"
          },
          {
            name: "Street Food Market Experience", 
            description: "Palermo is famous for its street food scene - sample from market carts",
            tips: [
              "Suggest lunch one day sampling from carts",
              "Capo or Ballarò markets (closed Sundays)",
              "Vucciria Market - trendy after-hours night spot"
            ],
            timing: "Best for lunch experience",
            cost: "Budget €10-20 per person for tastings"
          }
        ],
        practicalities: {
          parking: "Use hotel garage or paid lots - limited street parking",
          accessibility: "Historic center mostly walkable",
          timing: "Markets close on Sundays - plan accordingly"
        },
        personalNotes: [
          "Teatro Massimo is must-see - largest opera house in Italy",
          "Street food scene is famous - perfect for lunch sampling",
          "Markets closed on Sunday - plan market visits accordingly"
        ]
      },
      {
        name: "Agrigento",
        region: "Southern Sicily",
        priority: "must-see", 
        duration: "1-2 days",
        highlights: ["Valley of Temples", "Most impressive historic site", "Archaeological Museum", "8 Greek temples"],
        activities: [
          {
            name: "Valley of the Temples",
            description: "Of all historic sites in Sicily, this is considered the most impressive",
            tips: [
              "Best to visit early morning or late afternoon in September",
              "Open late and illuminated at night",
              "Takes about 2 hours to explore the archaeological park",
              "Drive from park to museum (only ½ mile apart)"
            ],
            timing: "Early morning or late afternoon best",
            cost: "€10-15 entrance fee",
            bookingRequired: false
          },
          {
            name: "Archaeological Museum",
            description: "Complements the temple visit with artifacts and context",
            tips: [
              "Allow 1 hour for museum visit",
              "Only ½ mile from park but need to drive between them"
            ],
            timing: "Can combine with temple visit"
          }
        ],
        practicalities: {
          parking: "Free parking at both park and museum",
          accessibility: "Park has some uneven ancient surfaces",
          timing: "Early morning or late afternoon best in September heat"
        },
        personalNotes: [
          "Considered the most impressive historic site in all of Sicily",
          "Park and museum are separate but only ½ mile apart",
          "Open late with night illumination - beautiful evening option"
        ]
      },
      {
        name: "Piazza Armerina",
        region: "Central Sicily", 
        priority: "recommended",
        duration: "Half day",
        highlights: ["Villa Romana del Casale", "World famous Roman mosaics", "UNESCO site"],
        activities: [
          {
            name: "Villa Romana del Casale",
            description: "World famous villa built around AD 300 by Romans with incredible mosaics",
            tips: [
              "Located about 3 miles SW of Piazza Armerina",
              "2 hours drive from Agrigento", 
              "Best to visit before 10 AM or after 4 PM",
              "Book guide ahead of time or use Rick Steves guidebook for self-guided tour",
              "Skip the audio tour",
              "Don't book tour guide hanging out in parking lot"
            ],
            timing: "Before 10 AM or after 4 PM",
            cost: "€10 entrance fee",
            bookingRequired: true
          },
          {
            name: "Dining at Arione Café",
            description: "Recommended restaurant near the villa - avoid the cafeteria",
            tips: [
              "Eat at Arione Café",
              "Avoid the cafeteria option",
              "Good break after villa visit"
            ]
          }
        ],
        practicalities: {
          parking: "Free parking at villa entrance",
          accessibility: "Some walking on ancient surfaces",
          timing: "Before 10 AM or after 4 PM best",
          booking: "Book guide in advance or use Rick Steves guidebook"
        },
        personalNotes: [
          "If Dad and I are only ones interested, we could drive from Noto directly to Agrigento",
          "Could visit on our own that afternoon or early next morning",
          "2 hours drive from Agrigento - plan accordingly"
        ],
        logisticsNotes: [
          "Located 3 miles SW of Piazza Armerina town",
          "2 hours drive from Agrigento",
          "Can be combined with Noto to Agrigento route if only some family members interested"
        ]
      },
      {
        name: "Ragusa",
        region: "Southeastern Sicily",
        priority: "optional",
        duration: "Half day or skip",
        highlights: ["Off-the-beaten path", "Two towns on hillside", "Baroque architecture", "Less touristy"],
        activities: [
          {
            name: "Town Exploration",
            description: "Actually 2 towns - one above the other on steep hillside",
            tips: [
              "Off-the-beaten-path country town",
              "Less touristy atmosphere",
              "Steep climb from lower town to upper town",
              "We drive through it to get to Piazza Armerina"
            ],
            timing: "Could just stop for a look"
          },
          {
            name: "Duomo Restaurant",
            description: "Fancy and pricey lunch option",
            tips: [
              "Appears to be many other lunch options available",
              "Consider budget and group preferences"
            ],
            cost: "Expensive option"
          }
        ],
        practicalities: {
          parking: "Check parking for steep hillside location",
          accessibility: "Steep climb between upper and lower towns - challenging"
        },
        personalNotes: [
          "Might want to skip this stop and go directly to Piazza Armerina from Noto",
          "Could just stop for a look since we drive through it",
          "2½ hours drive from Noto to Piazza Armerina"
        ],
        logisticsNotes: [
          "We drive through Ragusa to get to Piazza Armerina",
          "2½ hours total drive from Noto to Piazza Armerina",
          "Could be quick photo stop rather than full visit"
        ]
      },
      {
        name: "Noto",
        region: "Southeastern Sicily",
        priority: "must-see",
        duration: "1 day",
        highlights: ["Pristine small city", "Garden in Stone", "Baroque architecture", "UNESCO site"],
        activities: [
          {
            name: "Historic Center Walking Tour",
            description: "Nicknamed 'the Garden in Stone' - stroll through the magnificent piazzas",
            tips: [
              "Take self-guided walk using Rick Steves guidebook",
              "Original town destroyed by 1693 earthquake",
              "Residents decided to build 5 miles south rather than rebuild",
              "New city considered masterpiece of urban planning",
              "Unity of single architectural style makes it visually striking"
            ],
            timing: "Allow full day for proper exploration"
          },
          {
            name: "Breakfast or Lunch at Caffè Sicilia",
            description: "Highly recommended local café experience",
            tips: [
              "Perfect break during town exploration",
              "Try local Sicilian specialties"
            ]
          }
        ],
        practicalities: {
          parking: "Look for designated parking areas outside historic center",
          accessibility: "Historic center is walkable with some steps"
        },
        personalNotes: [
          "Called 'the Garden in Stone' - very beautiful",
          "Fascinating history of rebuilding after 1693 earthquake",
          "Urban planning creates visual unity - very striking"
        ]
      },
      {
        name: "Siracusa (Syracuse)",
        region: "Southeastern Sicily", 
        priority: "must-see",
        duration: "2-3 days minimum",
        highlights: ["Greek history", "Ortigia island", "Archaeological park", "Two main areas"],
        activities: [
          {
            name: "Neapolis Archaeological Park",
            description: "Morning visit to archaeological park - opens at 8:30 AM",
            tips: [
              "Visit in morning when it opens at 8:30 AM",
              "Might want to tour nearby catacombs",
              "Basilica of Santa Lucia al Sepolcro also nearby"
            ],
            timing: "Morning start recommended",
            cost: "€10-15 entrance fee"
          },
          {
            name: "Ortigia Island Exploration",
            description: "Head to island of Ortigia - browse market and have lunch",
            tips: [
              "Browse the market on the island",
              "Have lunch in the market area",
              "See if puppet show is available",
              "Stroll the harbor promenade",
              "Check out Piazza Duomo - 'living room of the island'",
              "Have dinner on the island"
            ],
            timing: "Afternoon and evening"
          }
        ],
        practicalities: {
          parking: "Driving across to island might be limited - parking can be difficult",
          accessibility: "Park only with white lines - yellow lines for locals (car will be towed!)",
          timing: "Suggest staying only one night due to parking/driving limitations"
        },
        personalNotes: [
          "Two main parts: modern mainland city and island of Ortigia",
          "Ortigia is the charming historic part",
          "Parking very important - white lines only, yellow lines will get you towed!"
        ],
        logisticsNotes: [
          "Driving across to island may be limited",
          "Parking difficult - follow white line parking rules strictly",
          "Consider staying just one night due to logistics"
        ]
      },
      {
        name: "Catania", 
        region: "Eastern Sicily",
        priority: "optional",
        duration: "1-2 nights",
        highlights: ["Mount Etna proximity", "Baroque architecture", "Alternative to Taormina"],
        activities: [
          {
            name: "Mount Etna Day Trip",
            description: "Use as base for Mount Etna exploration instead of Taormina",
            tips: [
              "Original itinerary had 2 nights Taormina with one Etna day",
              "Alternative: 1 night Taormina, 1 night Catania",
              "Catania day would be for Mount Etna visit",
              "Would give afternoon and dinner in Catania",
              "Closer to departure airport by about 40 minutes"
            ],
            timing: "Full day for Etna adventure"
          },
          {
            name: "City Exploration",
            description: "Sits at foot of Mount Etna - baroque city with volcano views",
            tips: [
              "Would be our last night",
              "Closer to airport for departure",
              "Good option if group wants to split Taormina time"
            ]
          }
        ],
        practicalities: {
          parking: "Better parking than Taormina",
          accessibility: "More modern city layout"
        },
        personalNotes: [
          "Alternative to spending 2 nights in Taormina",
          "Could do 1 night Taormina, 1 night Catania",
          "Closer to airport by 40 minutes - good for departure",
          "Sits at foot of Mount Etna"
        ],
        logisticsNotes: [
          "40 minutes closer to departure airport",
          "Good alternative for last night accommodation",
          "Better parking situation than Taormina"
        ]
      },
      {
        name: "Taormina",
        region: "Eastern Sicily",
        priority: "must-see", 
        duration: "1-2 days",
        highlights: ["Classic resort town", "Mount Etna views", "Grand Tour elegance", "Greek Roman Theater"],
        activities: [
          {
            name: "Greek Roman Theater",
            description: "Can be seen by taking a walk in town - single day enough to see the city",
            tips: [
              "Classic resort town with Mount Etna views",
              "Has 19th century 'Grand Tour' elegance",
              "Location of HBO's White Lotus filming",
              "Single day is enough to see the city",
              "Greek Roman Theater accessible by walking in town"
            ],
            timing: "One day sufficient for main sights"
          }
        ],
        practicalities: {
          parking: "Very limited and expensive - central location essential",
          accessibility: "Very hilly with steep stairs - central hotel location critical"
        },
        personalNotes: [
          "Very hilly with steep stairs - central hotel location absolutely essential",
          "Classic resort town with elegant atmosphere",
          "HBO White Lotus filming location",
          "Single day enough to see main city attractions"
        ],
        logisticsNotes: [
          "VERY hilly with steep stairs - hotel location critical for group",
          "Parking limited and expensive",
          "Central location essential for accessibility"
        ]
      }
    ],

    generalNotes: [
      {
        category: "Accommodation Strategy",
        notes: [
          "Look for hotels with free parking - not all offer parking",
          "For Taormina, Syracuse, Palermo and Catania we need centrally located hotels",
          "Especially important in Taormina due to very hilly terrain with steep stairs",
          "Check accessibility features for mixed-age group",
          "Laundry services helpful for longer stays"
        ]
      },
      {
        category: "Logistics & Transportation", 
        notes: [
          "Rick Steves recommends staying on Ortigia island in Syracuse to avoid bridge and parking issues",
          "In Syracuse: park only with white lines - yellow lines are for locals and car will be towed",
          "Catania could be alternative to second night in Taormina - closer to airport by 40 minutes",
          "Drive from Noto to Piazza Armerina is 2½ hours",
          "We drive through Ragusa to get to Piazza Armerina - could be just a photo stop"
        ]
      },
      {
        category: "Timing & Reservations",
        notes: [
          "Agrigento: best to visit early morning or late afternoon in September",
          "Piazza Armerina: best before 10 AM or after 4 PM",
          "Book guides ahead of time or use Rick Steves guidebook",
          "Palermo markets closed on Sundays - plan accordingly",
          "Syracuse archaeological park opens at 8:30 AM"
        ]
      },
      {
        category: "Family Considerations",
        notes: [
          "If only Dad and I want to see Villa Casale, we could drive from Noto directly to Agrigento",
          "Would allow us to visit on our own that afternoon or early next morning",
          "Consider splitting group for different interests/energy levels",
          "Gioiosa Marea is priority for family heritage connection"
        ]
      }
    ]
  };
}