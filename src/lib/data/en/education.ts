// Filename : education.ts
import type { IEducation } from '$lib/component/education.svelte';

export const education: IEducation[] = [
  {
    "level": "Master",
    "title": "RNCP Level I",
    "school": "ESGI - Paris",
    "startDate": new Date("2019-09-01"),
    "endDate": new Date("2021-07-01"),
    "description": "Formation approfondie en Ingénierie Backend et pratiques DevOps, axée sur Go, Python et les technologies Cloud. Exploration de l'architecture microservices, de la conteneurisation et de l'automatisation de l'infrastructure.",
    "skills": [
      {
        "name": "golang",
        "category": "backend"
      },
      {
        "name": "python",
        "category": "backend"
      },
      {
        "name": "nodejs",
        "category": "frontend"
      },
      {
        "name": "reactjs",
        "category": "frontend"
      },
      {
        "name": "vuejs",
        "category": "frontend"
      },
      {
        "name": "docker",
        "category": "devops"
      },
      {
        "name": "terraform",
        "category": "devops"
      },
      {
        "name": "kubernetes",
        "category": "devops"
      },
      {
        "name": "google cloud",
        "category": "devops"
      },
      {
        "name": "aws",
        "category": "devops"
      },
      {
        "name": "azure",
        "category": "devops"
      },
      {
        "name": "git",
        "category": "other"
      },
      {
        "name": "sql",
        "category": "data"
      },
      {
        "name": "mongodb",
        "category": "data"
      },
      {
        "name": "linux",
        "category": "devops"
      },
      {
        "name": "agile",
        "category": "other"
      }
    ]
  }
];