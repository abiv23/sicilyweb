// src/app/pages/planning/andrew/andrew.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TravelerPlanningComponent, TravelerPlan } from '../../../components/traveler-planning/traveler-planning.component';

@Component({
  selector: 'app-andrew',
  standalone: true,
  imports: [CommonModule, TravelerPlanningComponent],
  template: `
    <app-traveler-planning 
      [plan]="andrewPlan" 
      heroImage="taormina.jpg">
    </app-traveler-planning>
  `
})
export class AndrewComponent {
  
  andrewPlan: TravelerPlan = {
    travelerName: "Andrew",
    travelerDescription: "Trip organizer focused on maximizing cultural experiences and historical sites",
    priorities: [
      "UNESCO World Heritage sites",
      "Ancient Greek and Roman archaeology", 
      "Norman and Byzantine architecture",
      "Authentic cultural experiences",
      "Photography opportunities"
    ],
    
    specialConsiderations: [
      "Balance group interests with historical depth",
      "Ensure accessibility for senior family members",
      "Coordinate logistics and reservations"
    ],

    accommodations: [
      // Add Andrew's specific hotel preferences
    ],

    destinations: [
      // Add Andrew's destination notes and priorities
    ],

    generalNotes: [
      {
        category: "Trip Organization",
        notes: [
          "Coordinate all family member preferences",
          "Book major attractions in advance",
          "Balance active days with relaxation"
        ]
      }
    ]
  };
}