import type { IExperience } from '$lib/component/experience.svelte';

export const experience: IExperience[] = [
  {
    "enterprise": "Laboratoire Infomatique Paris Nord (LIPN)",
    "position": "Research and Development",
    "startDate": new Date("2024-04-01"),
    "endDate": new Date("2024-09-28"),
    "description": "Research internship at LIPN, focusing on optimizing the Hydro Unit Commitment (HUC) problem",
    "missions": [
      {
        "title": "HUC Problem Optimization",
        "description": "Optimization of the Hydro Unit Commitment (HUC) problem using advanced operational research techniques. Implementation in Julia and experimentation with AMPL to compare different approaches and solvers.",
        "skills": [
          {
            "name": "julia",
            "category": "other"
          },
          {
            "name": "python",
            "category": "backend"
          },
          {
            "name": "AMPL",
            "category": "other"
          },
          {
            "name": "Operational Research",
            "category": "other"
          },
          {
            "name": "Research",
            "category": "other"
          }
        ],
        "snapshot": true
      },
    ]
  }
]
