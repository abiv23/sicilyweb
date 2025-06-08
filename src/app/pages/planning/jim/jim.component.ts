// src/app/pages/planning/jim/jim.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TravelerPlanningComponent, TravelerPlan } from '../../../components/traveler-planning/traveler-planning.component';

@Component({
  selector: 'app-jim',
  standalone: true,
  imports: [CommonModule, TravelerPlanningComponent],
  template: `
    <app-traveler-planning 
      [plan]="jimPlan" 
      heroImage="etna.jpg">
    </app-traveler-planning>
  `
})
export class JimComponent {
  
  jimPlan: TravelerPlan = {
    travelerName: "Jim",
    travelerDescription: "Adventure-focused traveler interested in active experiences and unique activities",
    priorities: [
      "Active adventures and outdoor activities",
      "Unique experiences",
      "Local wine and food culture",
      "Photography opportunities",
      "Off-the-beaten-path discoveries"
    ],
    
    specialConsiderations: [
      // Add Jim's specific considerations
    ],

    accommodations: [
      // Add Jim's hotel preferences
    ],

    destinations: [
      // Add Jim's destination notes and activity preferences
    ],

    generalNotes: [
      {
        category: "Adventure Interests",
        notes: [
          "Mount Etna hiking and exploration",
          "Wine tasting experiences",
          "Photography of landscapes and architecture",
          "Local food and market experiences"
        ]
      },
      {
        category: "Activity Preferences",
        notes: [
          "Active exploration over passive tours",
          "Authentic local experiences",
          "Flexibility for spontaneous discoveries"
        ]
      }
    ]
  };
}