// src/app/pages/planning/poppop/poppop.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TravelerPlanningComponent, TravelerPlan } from '../../../components/traveler-planning/traveler-planning.component';

@Component({
  selector: 'app-poppop',
  standalone: true,
  imports: [CommonModule, TravelerPlanningComponent],
  template: `
    <app-traveler-planning 
      [plan]="poppopPlan" 
      heroImage="palermo.jpg">
    </app-traveler-planning>
  `
})
export class PoppopComponent {
  
  poppopPlan: TravelerPlan = {
    travelerName: "Poppop",
    travelerDescription: "Senior traveler prioritizing comfort, accessibility, and meaningful experiences",
    priorities: [
      "Comfortable accommodations",
      "Easy walking distances",
      "Historical significance",
      "Family heritage connections",
      "Relaxed pacing"
    ],
    
    specialConsiderations: [
      "Limited walking distances preferred",
      "Accessible accommodations essential",
      "Rest periods needed between activities",
      "Elevator access important"
    ],

    accommodations: [
      // Add Poppop's accessibility-focused hotel needs
    ],

    destinations: [
      // Add Poppop's destination preferences
    ],

    generalNotes: [
      {
        category: "Accessibility Needs",
        notes: [
          "Hotels with elevators essential",
          "Short walking distances to attractions",
          "Comfortable seating areas needed",
          "Easy parking proximity"
        ]
      },
      {
        category: "Interest Areas",
        notes: [
          "Historical significance of sites",
          "Family heritage connections",
          "Scenic viewing opportunities"
        ]
      }
    ]
  };
}