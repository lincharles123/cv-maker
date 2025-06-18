import type { IExperience } from '$lib/component/experience.svelte';

export const experience: IExperience[] = [
  {
    "enterprise": "Laboratoire Infomatique Paris Nord (LIPN)",
    "position": "Recherche et Développement",
    "startDate": new Date("2024-04-01"),
    "endDate": new Date("2024-09-28"),
    "description": "Stage de recherche au sein du LIPN, impliquant l'optimisation de la résolution de problème de plannifation hydro-électrique HUC (Hydro Unit Commitment)",
    "missions": [
      {
        "title": "Optimsation de la résolution de problème HUC",
        "description": "Optimisation de la résolution de problème de plannifation hydro-électrique HUC (Hydro Unit Commitment), en utilisant des techniques avancées de recherche opérationnelle. Implémentation en Julia et exprérimention avec AMPL pour comparer différentes approches et solveurs.",
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
            "name": "Recherche Opérationnelle",
            "category": "other"
          },
          {
            "name": "Recherche",
            "category": "other"
          }
        ],
        "snapshot": true
      },
    ]
  }
]
