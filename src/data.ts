import { Tool } from './types';

export const TOOLS: Tool[] = [
  {
    id: 'payment-estimate',
    title: 'Payment Estimate Tool',
    description: 'Estimate program payments based on planted acres, payment rate, and share interest. Useful for ARC/PLC style base estimations.',
    category: 'Payment Estimation',
    primaryOutcome: 'Estimated Payment Amount'
  },
  {
    id: 'acreage-calc',
    title: 'Acreage Input Calculator',
    description: 'Calculate total planted, eligible, and reported acres for program benchmarking and insurance planning.',
    category: 'Acreage',
    primaryOutcome: 'Acreage Summary'
  },
  {
    id: 'disaster-summary',
    title: 'Disaster Payment Summary',
    description: 'Review potential emergency support values based on loss percentages and standard coverage limits.',
    category: 'Disaster Support',
    primaryOutcome: 'Disaster Support Estimate'
  },
  {
    id: 'program-compare',
    title: 'Program Comparison Tool',
    description: 'Compare scenario outcomes between different farm support programs using generic benchmarks.',
    category: 'Decision Tools',
    primaryOutcome: 'Scenario Comparison'
  },
  {
    id: 'record-organizer',
    title: 'Record Organizer',
    description: 'A checklist and input structured guide for organizing farm records ahead of USDA reporting.',
    category: 'Records',
    primaryOutcome: 'Organized Inputs & Checklist'
  },
  {
    id: 'eligibility-checker',
    title: 'Eligibility Input Checker',
    description: 'Review common eligibility benchmarks and gather necessary AGI, conservation, and structure data.',
    category: 'Decision Tools',
    primaryOutcome: 'Eligibility Verification List'
  },
  {
    id: 'resource-hub',
    title: 'USDA Resource Hub',
    description: 'Quick links and summaries of useful external calculators, fact sheets, and planning pages.',
    category: 'Resources',
    primaryOutcome: 'External Resource Links'
  }
];
