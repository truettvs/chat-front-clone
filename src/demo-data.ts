/**
 * Demo placeholder data — edit this file to change copy, users, and conversations.
 * All dates are ISO 8601 strings (you can paste from `new Date().toISOString()`).
 */
import type { DemoAccount, DemoChat } from "@/types/chat";
import { demoChat1} from "./demo-chat-1";
import { demoChat2 } from "./demo-chat-2";
import { demoChat3 } from "./demo-chat-3";
import { demoChat4 } from "./demo-chat-4";
import { demoChat5 } from "./demo-chat-5";
import { demoChat6 } from "./demo-chat-6";
import { demoChat7 } from "./demo-chat-7";

export const demoAccount: DemoAccount = {
  displayName: "Truett Van Slyke",
  email: "truettvs@gmail.com",
  planLabel: "Upgrade to Pro",
  initials: "TVS",
  // Optional image for the account avatar:
  // avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
};

/**
 * Sign-in gate (client-side only — fine for a private preview, not real security).
 * Use an email-shaped id so the UI can match a normal product sign-in.
 */
export const demoAuth = {
  email: "truettvs@gmail.com",
  password: "robot135792",
};

/** Shown in the empty composer and subtle UI hints */
export const demoAppStrings = {
  appName: "Axel",
  newChatLabel: "New chat",
  searchPlaceholder: "Search chats",
  composerPlaceholder: "Message Axel…",
  emptyThreadTitle: "Start a conversation",
  emptyThreadBody:
    "Your workspace is ready. Upgrade when you're prepared to sync live conversations.",
  /** Announced to screen readers while the empty thread shows the loading UI */
  loadingThreadAriaLabel: "Loading conversation",
  /** Shown under the composer and as a placeholder assistant turn on limited workspaces */
  upgradeToProChat:
    "Sending isn’t available on this workspace yet. Upgrade your plan to continue.",
  dateFilterHeading: "Created between",
  dateFilterButtonAriaLabel: "Filter chats by creation date",
  dateFilterFrom: "From",
  dateFilterTo: "To",
  dateFilterClear: "Clear dates",
  noChatsMatchFilters:
    "No chats match your search or date filter. Try clearing dates or widening the range.",
  noChatsInWorkspace:
    "No conversations are available in this workspace yet.",
  loginEyebrow: "Axel",
  loginTitle: "Sign in",
  loginSubtitle: "Welcome back — sign in to pick up where you left off.",
  loginHeroHeadline: "Your workspace for focused conversations.",
  loginHeroCopy:
    "Chat, search threads, and keep context across projects—without losing the thread.",
  loginHeroBullets: [
    "Shared history across every conversation",
    "Built for teams who live in long-form context",
    "Encrypted in transit, region-aware by default",
  ],
  loginEmailLabel: "Work email",
  loginPasswordLabel: "Password",
  loginButton: "Continue",
  loginInvalidMessage:
    "That email or password doesn’t match our records. Try again.",
  loginForgotPassword: "Forgot password?",
  loginCreateCta: "Create an account",
  loginCreateHint: "New to Axel?",
  loginFooterTerms: "Terms",
  loginFooterPrivacy: "Privacy",
  loginFooterCopyright: "© 2026 Axel. All rights reserved.",
  createAccountLoadingTitle: "Setting up your workspace",
  createAccountLoadingBody:
    "We’re provisioning your tenant, applying security defaults, and syncing preferences. Most setups finish in under a minute—hang tight.",
  createAccountBackToSignIn: "Back to sign in",
  createAccountStep1: "Securing your organization",
  createAccountStep2: "Applying workspace policies",
  createAccountStep3: "Preparing your assistant profile",
};

/** Sidebar order: newest `createdAt` first (same idea as newly created chats). */
export function sortDemoChatsByCreatedAt(chats: DemoChat[]): DemoChat[] {
  return [...chats].sort(
    (a, b) =>
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  );
}

/**
 * Sidebar + main thread content. Each item is a single chat.
 * - `title`: shown in the sidebar
 * - `createdAt`: shown under the title in the main header
 * - `messages`: alternating user / assistant (and optional `system`) with `message` text
 */
const fillerChats: DemoChat[] = [
  {
    id: "travel-itinerary-planner",
    title: "Travel Itinerary Planner",
    createdAt: new Date("2026-02-15T09:12:00-05:00").toISOString(),
    messages: [],
  },
  {
    id: "javascript-debugging-help",
    title: "JavaScript Debugging Help",
    createdAt: new Date("2026-02-16T14:45:00-05:00").toISOString(),
    messages: [],
  },
  {
    id: "healthy-meal-recipes",
    title: "Healthy Meal Recipes",
    createdAt: new Date("2026-02-17T18:22:00-05:00").toISOString(),
    messages: [],
  },
  {
    id: "resume-writing-tips",
    title: "Resume Writing Tips",
    createdAt: new Date("2026-02-18T11:30:00-05:00").toISOString(),
    messages: [],
  },
  {
    id: "fitness-workout-plan",
    title: "Fitness Workout Plan",
    createdAt: new Date("2026-02-19T07:50:00-05:00").toISOString(),
    messages: [],
  },
  {
    id: "budget-tracking-advice",
    title: "Budget Tracking Advice",
    createdAt: new Date("2026-02-20T20:15:00-05:00").toISOString(),
    messages: [],
  },
  {
    id: "python-data-analysis",
    title: "Python Data Analysis",
    createdAt: new Date("2026-02-21T13:05:00-05:00").toISOString(),
    messages: [],
  },
  {
    id: "car-maintenance-guide",
    title: "Car Maintenance Guide",
    createdAt: new Date("2026-02-22T16:40:00-05:00").toISOString(),
    messages: [],
  },
  {
    id: "home-decor-ideas",
    title: "Home Decor Ideas",
    createdAt: new Date("2026-02-23T10:25:00-05:00").toISOString(),
    messages: [],
  },
  {
    id: "book-recommendation-list",
    title: "Book Recommendation List",
    createdAt: new Date("2026-02-24T21:10:00-05:00").toISOString(),
    messages: [],
  },
  {
    id: "ai-project-brainstorm",
    title: "AI Project Brainstorm",
    createdAt: new Date("2026-02-25T08:55:00-05:00").toISOString(),
    messages: [],
  },
  {
    id: "daily-productivity-hacks",
    title: "Daily Productivity Hacks",
    createdAt: new Date("2026-02-26T12:35:00-05:00").toISOString(),
    messages: [],
  },
  {
    id: "history-essay-outline",
    title: "History Essay Outline",
    createdAt: new Date("2026-02-27T15:18:00-05:00").toISOString(),
    messages: [],
  },
  {
    id: "math-homework-solutions",
    title: "Math Homework Solutions",
    createdAt: new Date("2026-02-28T19:42:00-05:00").toISOString(),
    messages: [],
  },
  {
    id: "startup-idea-validation",
    title: "Startup Idea Validation",
    createdAt: new Date("2026-03-01T09:05:00-05:00").toISOString(),
    messages: [],
  },
  {
    id: "guitar-chord-practice",
    title: "Guitar Chord Practice",
    createdAt: new Date("2026-03-02T17:22:00-05:00").toISOString(),
    messages: [],
  },
  {
    id: "video-editing-tutorial",
    title: "Video Editing Tutorial",
    createdAt: new Date("2026-03-03T20:48:00-05:00").toISOString(),
    messages: [],
  },
  {
    id: "job-interview-preparation",
    title: "Job Interview Preparation",
    createdAt: new Date("2026-03-04T11:11:00-05:00").toISOString(),
    messages: [],
  },
  {
    id: "language-learning-strategy",
    title: "Language Learning Strategy",
    createdAt: new Date("2026-03-05T06:30:00-05:00").toISOString(),
    messages: [],
  },
  {
    id: "mobile-app-design",
    title: "Mobile App Design",
    createdAt: new Date("2026-03-06T14:09:00-05:00").toISOString(),
    messages: [],
  },
  {
    id: "stock-market-basics",
    title: "Stock Market Basics",
    createdAt: new Date("2026-03-07T18:55:00-05:00").toISOString(),
    messages: [],
  },
  {
    id: "creative-writing-prompts",
    title: "Creative Writing Prompts",
    createdAt: new Date("2026-03-08T22:17:00-05:00").toISOString(),
    messages: [],
  },
  {
    id: "photography-lighting-tips",
    title: "Photography Lighting Tips",
    createdAt: new Date("2026-03-09T10:02:00-05:00").toISOString(),
    messages: [],
  },
  {
    id: "cooking-technique-guide",
    title: "Cooking Technique Guide",
    createdAt: new Date("2026-03-10T13:26:00-05:00").toISOString(),
    messages: [],
  },
  {
    id: "mental-health-advice",
    title: "Mental Health Advice",
    createdAt: new Date("2026-03-11T16:49:00-05:00").toISOString(),
    messages: [],
  },
  {
    id: "web-development-roadmap",
    title: "Web Development Roadmap",
    createdAt: new Date("2026-03-11T09:33:00-05:00").toISOString(),
    messages: [],
  },
  {
    id: "data-visualization-ideas",
    title: "Data Visualization Ideas",
    createdAt: new Date("2026-03-13T12:14:00-05:00").toISOString(),
    messages: [],
  },
  {
    id: "cloud-computing-overview",
    title: "Cloud Computing Overview",
    createdAt: new Date("2026-03-14T19:58:00-05:00").toISOString(),
    messages: [],
  },
  {
    id: "cybersecurity-best-practices",
    title: "Cybersecurity Best Practices",
    createdAt: new Date("2026-03-15T08:21:00-05:00").toISOString(),
    messages: [],
  },
  {
    id: "marketing-strategy-plan",
    title: "Marketing Strategy Plan",
    createdAt: new Date("2026-03-16T11:47:00-05:00").toISOString(),
    messages: [],
  },
  {
    id: "social-media-growth",
    title: "Social Media Growth",
    createdAt: new Date("2026-03-17T15:05:00-05:00").toISOString(),
    messages: [],
  },
  {
    id: "email-writing-assistance",
    title: "Email Writing Assistance",
    createdAt: new Date("2026-03-18T18:29:00-05:00").toISOString(),
    messages: [],
  },
  {
    id: "presentation-slide-design",
    title: "Presentation Slide Design",
    createdAt: new Date("2026-03-19T09:50:00-05:00").toISOString(),
    messages: [],
  },
  {
    id: "game-development-concepts",
    title: "Game Development Concepts",
    createdAt: new Date("2026-03-20T13:37:00-05:00").toISOString(),
    messages: [],
  },
  {
    id: "blockchain-technology-explained",
    title: "Blockchain Technology Explained",
    createdAt: new Date("2026-03-21T17:12:00-05:00").toISOString(),
    messages: [],
  },
  {
    id: "meditation-practice-guide",
    title: "Meditation Practice Guide",
    createdAt: new Date("2026-03-22T07:41:00-05:00").toISOString(),
    messages: [],
  },
  {
    id: "time-management-techniques",
    title: "Time Management Techniques",
    createdAt: new Date("2026-03-23T10:59:00-05:00").toISOString(),
    messages: [],
  },
  {
    id: "college-application-advice",
    title: "College Application Advice",
    createdAt: new Date("2026-03-24T14:23:00-05:00").toISOString(),
    messages: [],
  },
  {
    id: "travel-packing-checklist",
    title: "Travel Packing Checklist",
    createdAt: new Date("2026-03-25T18:06:00-05:00").toISOString(),
    messages: [],
  },
  {
    id: "smart-home-automation",
    title: "Smart Home Automation",
    createdAt: new Date("2026-03-26T21:44:00-05:00").toISOString(),
    messages: [],
  },
  {
    id: "linux-command-basics",
    title: "Linux Command Basics",
    createdAt: new Date("2026-03-27T08:18:00-05:00").toISOString(),
    messages: [],
  },
  {
    id: "api-integration-help",
    title: "API Integration Help",
    createdAt: new Date("2026-03-28T12:52:00-05:00").toISOString(),
    messages: [],
  },
  {
    id: "database-schema-design",
    title: "Database Schema Design",
    createdAt: new Date("2026-02-16T06:42:00-05:00").toISOString(),
    messages: [],
  },
  {
    id: "docker-container-setup",
    title: "Docker Container Setup",
    createdAt: new Date("2026-02-18T22:11:00-05:00").toISOString(),
    messages: [],
  },
  {
    id: "kubernetes-cluster-guide",
    title: "Kubernetes Cluster Guide",
    createdAt: new Date("2026-02-20T05:55:00-05:00").toISOString(),
    messages: [],
  },
  {
    id: "unit-testing-strategies",
    title: "Unit Testing Strategies",
    createdAt: new Date("2026-02-22T13:08:00-05:00").toISOString(),
    messages: [],
  },
  {
    id: "css-layout-techniques",
    title: "CSS Layout Techniques",
    createdAt: new Date("2026-02-24T17:33:00-05:00").toISOString(),
    messages: [],
  },
  {
    id: "react-state-management",
    title: "React State Management",
    createdAt: new Date("2026-02-26T09:19:00-05:00").toISOString(),
    messages: [],
  },
  {
    id: "nodejs-performance-tuning",
    title: "Nodejs Performance Tuning",
    createdAt: new Date("2026-02-28T14:02:00-05:00").toISOString(),
    messages: [],
  },
  {
    id: "typescript-type-safety",
    title: "Typescript Type Safety",
    createdAt: new Date("2026-03-03T07:27:00-05:00").toISOString(),
    messages: [],
  },
  {
    id: "ai-chatbot-design",
    title: "AI Chatbot Design",
    createdAt: new Date("2026-02-15T13:44:00-05:00").toISOString(),
    messages: [],
  },
  {
    id: "machine-learning-basics",
    title: "Machine Learning Basics",
    createdAt: new Date("2026-02-16T08:12:00-05:00").toISOString(),
    messages: [],
  },
  {
    id: "deep-learning-explained",
    title: "Deep Learning Explained",
    createdAt: new Date("2026-02-17T19:05:00-05:00").toISOString(),
    messages: [],
  },
  {
    id: "neural-network-guide",
    title: "Neural Network Guide",
    createdAt: new Date("2026-02-18T10:28:00-05:00").toISOString(),
    messages: [],
  },
  {
    id: "api-design-patterns",
    title: "API Design Patterns",
    createdAt: new Date("2026-02-19T15:42:00-05:00").toISOString(),
    messages: [],
  },
  {
    id: "backend-architecture-overview",
    title: "Backend Architecture Overview",
    createdAt: new Date("2026-02-20T21:11:00-05:00").toISOString(),
    messages: [],
  },
  {
    id: "frontend-performance-optimization",
    title: "Frontend Performance Optimization",
    createdAt: new Date("2026-02-21T09:34:00-05:00").toISOString(),
    messages: [],
  },
  {
    id: "ui-ux-design-principles",
    title: "UI UX Design",
    createdAt: new Date("2026-02-22T14:50:00-05:00").toISOString(),
    messages: [],
  },
  {
    id: "color-theory-basics",
    title: "Color Theory Basics",
    createdAt: new Date("2026-02-23T17:03:00-05:00").toISOString(),
    messages: [],
  },
  {
    id: "typography-selection-guide",
    title: "Typography Selection Guide",
    createdAt: new Date("2026-02-24T08:25:00-05:00").toISOString(),
    messages: [],
  },
  {
    id: "seo-optimization-tips",
    title: "SEO Optimization Tips",
    createdAt: new Date("2026-02-25T12:18:00-05:00").toISOString(),
    messages: [],
  },
  {
    id: "content-marketing-strategy",
    title: "Content Marketing Strategy",
    createdAt: new Date("2026-02-26T16:40:00-05:00").toISOString(),
    messages: [],
  },
  {
    id: "copywriting-best-practices",
    title: "Copywriting Best Practices",
    createdAt: new Date("2026-02-27T20:55:00-05:00").toISOString(),
    messages: [],
  },
  {
    id: "brand-identity-development",
    title: "Brand Identity Development",
    createdAt: new Date("2026-02-28T11:07:00-05:00").toISOString(),
    messages: [],
  },
  {
    id: "ecommerce-store-setup",
    title: "Ecommerce Store Setup",
    createdAt: new Date("2026-03-01T18:33:00-05:00").toISOString(),
    messages: [],
  },
  {
    id: "product-management-workflow",
    title: "Product Management Workflow",
    createdAt: new Date("2026-03-02T07:58:00-05:00").toISOString(),
    messages: [],
  },
  {
    id: "agile-sprint-planning",
    title: "Agile Sprint Planning",
    createdAt: new Date("2026-03-03T13:26:00-05:00").toISOString(),
    messages: [],
  },
  {
    id: "scrum-ceremony-guide",
    title: "Scrum Ceremony Guide",
    createdAt: new Date("2026-03-04T17:44:00-05:00").toISOString(),
    messages: [],
  },
  {
    id: "kanban-board-setup",
    title: "Kanban Board Setup",
    createdAt: new Date("2026-03-05T09:19:00-05:00").toISOString(),
    messages: [],
  },
  {
    id: "remote-work-productivity",
    title: "Remote Work Productivity",
    createdAt: new Date("2026-03-06T21:02:00-05:00").toISOString(),
    messages: [],
  },
  {
    id: "team-collaboration-tools",
    title: "Team Collaboration Tools",
    createdAt: new Date("2026-03-07T14:37:00-05:00").toISOString(),
    messages: [],
  },
  {
    id: "note-taking-methods",
    title: "Note Taking Methods",
    createdAt: new Date("2026-03-08T10:11:00-05:00").toISOString(),
    messages: [],
  },
  {
    id: "study-techniques-guide",
    title: "Study Techniques Guide",
    createdAt: new Date("2026-03-09T18:49:00-05:00").toISOString(),
    messages: [],
  },
  {
    id: "exam-preparation-strategy",
    title: "Exam Preparation Strategy",
    createdAt: new Date("2026-03-10T06:55:00-05:00").toISOString(),
    messages: [],
  },
  {
    id: "career-path-exploration",
    title: "Career Path Exploration",
    createdAt: new Date("2026-03-11T12:22:00-05:00").toISOString(),
    messages: [],
  },
  {
    id: "freelancing-client-management",
    title: "Freelancing Client Management",
    createdAt: new Date("2026-03-13T20:14:00-05:00").toISOString(),
    messages: [],
  },
  {
    id: "side-hustle-ideas",
    title: "Side Hustle Ideas",
    createdAt: new Date("2026-03-14T09:46:00-05:00").toISOString(),
    messages: [],
  },
  {
    id: "passive-income-strategies",
    title: "Passive Income Strategies",
    createdAt: new Date("2026-03-15T13:59:00-05:00").toISOString(),
    messages: [],
  },
  {
    id: "real-estate-investing",
    title: "Real Estate Investing",
    createdAt: new Date("2026-03-16T18:07:00-05:00").toISOString(),
    messages: [],
  },
  {
    id: "retirement-planning-basics",
    title: "Retirement Planning Basics",
    createdAt: new Date("2026-03-17T07:35:00-05:00").toISOString(),
    messages: [],
  },
  {
    id: "credit-score-improvement",
    title: "Credit Score Improvement",
    createdAt: new Date("2026-03-18T11:51:00-05:00").toISOString(),
    messages: [],
  },
  {
    id: "debt-repayment-strategies",
    title: "Debt Repayment Strategies",
    createdAt: new Date("2026-03-19T15:24:00-05:00").toISOString(),
    messages: [],
  },
  {
    id: "insurance-policy-explained",
    title: "Insurance Policy Explained",
    createdAt: new Date("2026-03-20T19:48:00-05:00").toISOString(),
    messages: [],
  },
  {
    id: "tax-filing-guide",
    title: "Tax Filing Guide",
    createdAt: new Date("2026-03-21T08:09:00-05:00").toISOString(),
    messages: [],
  },
  {
    id: "legal-contract-basics",
    title: "Legal Contract Basics",
    createdAt: new Date("2026-03-22T13:27:00-05:00").toISOString(),
    messages: [],
  },
  {
    id: "public-speaking-tips",
    title: "Public Speaking Tips",
    createdAt: new Date("2026-03-23T17:56:00-05:00").toISOString(),
    messages: [],
  },
  {
    id: "negotiation-skills-training",
    title: "Negotiation Skills Training",
    createdAt: new Date("2026-03-24T21:19:00-05:00").toISOString(),
    messages: [],
  },
  {
    id: "conflict-resolution-strategies",
    title: "Conflict Resolution Strategies",
    createdAt: new Date("2026-03-25T10:03:00-05:00").toISOString(),
    messages: [],
  },
  {
    id: "leadership-development-plan",
    title: "Leadership Development Plan",
    createdAt: new Date("2026-03-26T14:41:00-05:00").toISOString(),
    messages: [],
  },
  {
    id: "decision-making-frameworks",
    title: "Decision Making Frameworks",
    createdAt: new Date("2026-03-27T18:28:00-05:00").toISOString(),
    messages: [],
  },
  {
    id: "critical-thinking-exercises",
    title: "Critical Thinking Exercises",
    createdAt: new Date("2026-03-28T09:57:00-05:00").toISOString(),
    messages: [],
  },
  {
    id: "problem-solving-techniques",
    title: "Problem Solving Techniques",
    createdAt: new Date("2026-02-17T06:33:00-05:00").toISOString(),
    messages: [],
  },
  {
    id: "logic-puzzle-solutions",
    title: "Logic Puzzle Solutions",
    createdAt: new Date("2026-02-19T22:47:00-05:00").toISOString(),
    messages: [],
  },
  {
    id: "brain-training-games",
    title: "Brain Training Games",
    createdAt: new Date("2026-02-21T11:15:00-05:00").toISOString(),
    messages: [],
  },
  {
    id: "memory-improvement-techniques",
    title: "Memory Improvement Techniques",
    createdAt: new Date("2026-02-23T15:39:00-05:00").toISOString(),
    messages: [],
  },
  {
    id: "sleep-optimization-guide",
    title: "Sleep Optimization Guide",
    createdAt: new Date("2026-02-25T19:26:00-05:00").toISOString(),
    messages: [],
  },
  {
    id: "nutrition-meal-planning",
    title: "Nutrition Meal Planning",
    createdAt: new Date("2026-02-27T08:04:00-05:00").toISOString(),
    messages: [],
  },
  {
    id: "weight-loss-strategies",
    title: "Weight Loss Strategies",
    createdAt: new Date("2026-03-01T12:58:00-05:00").toISOString(),
    messages: [],
  },
  {
    id: "strength-training-routine",
    title: "Strength Training Routine",
    createdAt: new Date("2026-03-03T16:21:00-05:00").toISOString(),
    messages: [],
  },
];

export const demoChats: DemoChat[] = sortDemoChatsByCreatedAt([
  demoChat1,
  demoChat2,
  demoChat3,
  demoChat4,
  demoChat5,
  demoChat6,
  demoChat7,
  ...fillerChats,
]);

