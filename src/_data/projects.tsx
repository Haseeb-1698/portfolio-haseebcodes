import GithubFillIcon from 'remixicon-react/GithubFillIcon'
import ExternalLinkFillIcon from 'remixicon-react/ExternalLinkFillIcon'
import InlineLink from '@/components/common/reusable/InlineLink'
import constants from '@/constants'
import ProjectProps from '@/types/components/ProjectProps'
import LinkProps from '@/types/LinkProps'
import getGitHubUrl from '@/utils/getGitHubUrl'

const github: LinkProps = {
  label: 'Source code',
  icon: <GithubFillIcon size={22} />
}

const live: LinkProps = {
  label: 'Live',
  icon: <ExternalLinkFillIcon size={22} />
}

const getLinks = (githubRepo: string, url?: string): LinkProps[] => {
  const links: LinkProps[] = [{ ...github, url: getGitHubUrl(githubRepo) }]
  if (url) {
    links.push({ ...live, url })
  }
  return links
}

const filters: string[] = [
  'React',
  'Typescript',
  'Tailwind CSS',
  'Firebase',
  'Axios',
  'Python',
  'Flask',
  'TensorFlow',
  'Bootstrap',
  'Genetic Algorithm',
  'CNN',
  'HTML',
  'CSS',
  'JavaScript',
  'Assembly',
  'x86',
  'Next.js',
  'API',
  'jQuery'
]

const projects: ProjectProps[] = [
  {
    slug: 'Haseeb-1698',
    featured: true,
    title: 'HaseebCODES',
    description: 'My personal portfolio website built with React, TypeScript, and Tailwind CSS.',
    techStacks: ['React', 'TypeScript', 'Tailwind CSS'],
    otherTechStacks: ['HTML/CSS', 'JavaScript'],
    category: 'Front-end development',
    links: getLinks('Haseeb-1698/portfolio-haseebcodes')
  },
  {
    slug: 'CREDO-Tech-Site',
    featured: true,
    title: 'CREDO Technology Services Website',
    description: 'A modern, secure business website built with React and Next.js 14, deployed on Vercel. It promotes CREDO\'s AI-powered cybersecurity services with responsive design, performance optimizations, and enterprise-grade deployment.',
    techStacks: ['React', 'Next.js 14', 'Tailwind CSS'],
    otherTechStacks: ['Webpack', 'Vercel', 'HSTS', 'Open Graph', 'Priority Hints'],
    category: 'Full-stack Web Development',
    links: [
      {
        label: 'Live',
        icon: <ExternalLinkFillIcon size={22} />,
        url: 'https://credots.com/'
      }
    ]
  },
  {
    slug: 'Steamdatabase',
    featured: true,
    title: 'SteamDB Clone',
    description: 'A React-based replica of the SteamDB website featuring real-time display of game data, charts, and trending titles, emulating the look and functionality of the original Steam database site.',
    techStacks: ['React', 'JavaScript', 'Tailwind CSS'],
    otherTechStacks: ['HTML', 'REST APIs', 'Routing'],
    category: 'Front-end development',
    links: getLinks('Haseeb-1698/Steamdatabase')
  },
  {
    slug: 'BraveTrace',
    featured: true,
    title: 'Brave Trace',
    description: (
      <span>
        A forensic tool designed to extract, analyze, and report browser artifacts from the Brave Browser. The tool enables the retrieval of browsing history, passwords, bookmarks, cache data, fillable form data, and more. It also includes support for decrypting saved passwords and analyzing prefetch execution history.
      </span>
    ),
    techStacks: ['Python'],
    otherTechStacks: ['HTML/CSS', 'JavaScript'],
    category: 'Digital forensics',
    links: getLinks('BraveTrace')
  },
  {
    slug: 'Filmception',
    featured: true,
    title: 'Filmception',
    description: "Filmception is an intelligent system that processes movie summaries, predicts movie genres using machine learning, and converts summaries into audio across multiple languages (Arabic, Urdu, and Korean).",
    techStacks: ['Python', 'Flask', 'TensorFlow', 'Bootstrap'],
    otherTechStacks: ['HTML/CSS'],
    category: 'Full-stack development',
    links: getLinks('Filmception')
  },
  {
    slug: 'Exam-Schedular',
    featured: true,
    title: 'Exam Schedular',
    description:
      'This project implements a Genetic Algorithm (GA) from scratch in Python to generate a valid and optimized university exam schedule. The system ensures all hard constraints are strictly enforced while attempting to satisfy multiple soft constraints to enhance the usability and efficiency of the exam timetable.',
    category: 'Full-stack development',
    techStacks: ['Python', 'Genetic Algorithm', 'Flask'],
    otherTechStacks: ['HTML/CSS'],
    links: getLinks('Exam-Schedular')
  },
  {
    slug: 'Traffic-Sign-Classifier-with-CNN',
    featured: true,
    title: 'Traffic Sign Classifier with CNN',
    description:
      "This project uses a Convolutional Neural Network (CNN) to classify images of road signs. It's a critical component in the development of autonomous vehicles, enabling them to detect and interpret traffic signs such as stop signs, speed limits, and yield signs—ensuring safety and lawful decision-making on the road.",
    techStacks: ['CNN', 'Python', 'TensorFlow', 'Flask'],
    otherTechStacks: ['HTML/CSS'],
    category: 'Full-stack development',
    links: getLinks('Traffic-Sign-Classifier-with-CNN')
  },
  {
    slug: 'Six-Degrees-of-Separation',
    featured: true,
    title: 'Six Degrees of Separation',
    description:
      "This project is a Python-based AI application that finds the **shortest connection path** between two actors based on the movies they've appeared in. It's inspired by the game Six Degrees of Kevin Bacon, where the goal is to show how any actor is linked to Kevin Bacon through no more than six film collaborations.",
    category: 'Full-stack development',
    techStacks: ['Python'],
    otherTechStacks: ['HTML/CSS', 'JavaScript', 'PHP'],
    links: getLinks('Six-Degrees-of-Separation')
  },
  {
    slug: 'candy-crush-x86',
    featured: false,
    title: 'Candy Crush x86',
    description: (
      <span>
        A graphical console-based Candy Crush clone implemented in x86 Assembly Language, using MS-DOS interrupts for graphics, text input/output, and file handling.
      </span>
    ),
    techStacks: ['Assembly', 'x86'],
    otherTechStacks: ['HTML/CSS'],
    category: 'Front-end development',
    links: getLinks('candy-crush-x86')
  },
  {
    slug: 'human-vs-ai-chess-minimax',
    title: 'Human vs AI Chess',
    description:
      "This project implements a simplified Human vs AI Chess Game in Python using the Minimax Algorithm (with Alpha-Beta Pruning). It includes a complete object-oriented design, supports standard chess rules and mechanics, and features a GUI for interaction.",
    category: 'Full-stack development',
    techStacks: ['Python', 'Alpha-Beta Pruning', 'Minimax'],
    otherTechStacks: ['HTML/CSS', 'JavaScript'],
    links: getLinks('Haseeb-1698/ChessGame-Assignment4')
  },
  {
    slug: 'RD-Tax-Incentive---NextJS',
    title: 'RD Tax Incentive Landing Page',
    description: "A Next.js landing page for R&D Tax Incentive, showcasing the benefits and process of claiming R&D tax incentives in Australia. The page is designed to be responsive and user-friendly, providing essential information to potential claimants.",
    category: 'Front-end development',
    techStacks: ['Next.js', 'HTML', 'CSS', 'JavaScript'],
    links: getLinks('RD-Tax-Incentive---NextJS')
  },
  {
    slug: 'Haseeb-1698-Database',
    featured: false,
    title: 'E-Commerce Database System',
    description: 'A relational database system modeling an online marketplace with ERD, SQL schema, and 25+ optimized queries for customer and sales analytics.',
    techStacks: ['SQL', 'ER Diagram', 'Relational Modeling'],
    otherTechStacks: ['Database Normalization', 'Complex Query Design'],
    category: 'Database Design & Analysis',
    links: getLinks('Haseeb-1698/Database')
  }
]

export { filters, projects }
