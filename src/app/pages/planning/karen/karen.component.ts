// src/app/pages/planning/karen/karen.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TravelerPlanningComponent, TravelerPlan } from '../../../components/traveler-planning/traveler-planning.component';

@Component({
  selector: 'app-karen',
  standalone: true,
  imports: [CommonModule, TravelerPlanningComponent],
  template: `
    <app-traveler-planning 
      [plan]="karenPlan" 
      heroImage="cefalu.jpg">
    </app-traveler-planning>
  `
})
export class KarenComponent {
  
  karenPlan: TravelerPlan = {
    travelerName: "Karen",
    travelerDescription: "Enthusiastic traveler with focus on cultural immersion and local experiences",
    priorities: [
      "Local cultural experiences",
      "Sicilian cuisine and cooking",
      "Art and architecture appreciation",
      "Shopping for local crafts",
      "Family time and relaxation"
    ],
    
    specialConsiderations: [
      // Add Karen's specific considerations
    ],

    accommodations: [
      // Add Karen's hotel preferences
    ],

    destinations: [
      // Add Karen's destination notes
    ],

    generalNotes: [
      {
        category: "Cultural Interests",
        notes: [
          "Interest in local markets and food experiences",
          "Art galleries and craft workshops",
          "Traditional Sicilian cooking classes"
        ]
      }
    ]
  };
}