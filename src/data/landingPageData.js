import {
  Workflow,
  Zap,
  ShieldCheck,
  BarChart3,
  Puzzle,
  Bell,
  Search,
  Settings,
  Rocket,
  Users,
} from 'lucide-react';

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#process' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export const trustedLogos = [
  'Northwind', 'Vertex', 'Loomly', 'Cascade', 'Brightline', 'Orbital',
];

export const features = [
  {
    icon: Workflow,
    title: 'Visual workflow builder',
    description: 'Drag-and-drop automations across your entire stack without writing a single line of code.',
  },
  {
    icon: Zap,
    title: 'Real-time triggers',
    description: 'React to events the moment they happen, from a new signup to a support ticket going stale.',
  },
  {
    icon: Puzzle,
    title: '120+ integrations',
    description: 'Connect the tools your team already uses — Slack, Notion, Salesforce, GitHub, and more.',
  },
  {
    icon: BarChart3,
    title: 'Pipeline analytics',
    description: 'See exactly where work slows down with live dashboards built for operations teams.',
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise-grade security',
    description: 'SOC 2 Type II compliant with SSO, audit logs, and granular role-based permissions.',
  },
  {
    icon: Bell,
    title: 'Smart notifications',
    description: 'Keep the right people in the loop with contextual alerts instead of noisy channels.',
  },
];

export const stats = [
  { value: 10000, suffix: '+', label: 'Active users' },
  { value: 98, suffix: '%', label: 'Customer satisfaction' },
  { value: 250000, suffix: '+', label: 'Tasks completed' },
  { value: 40, suffix: '%', label: 'Avg. time saved' },
];

export const timelineSteps = [
  {
    number: '01',
    icon: Search,
    title: 'Discover',
    description: 'Audit your team\'s repetitive work and identify where automation saves the most time.',
  },
  {
    number: '02',
    icon: Settings,
    title: 'Configure',
    description: 'Build workflows visually, connect your tools, and set the rules that matter to your team.',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Launch',
    description: 'Go live in minutes. Flowbase runs quietly in the background while your team keeps moving.',
  },
  {
    number: '04',
    icon: BarChart3,
    title: 'Analyze',
    description: 'Track outcomes with real-time dashboards and keep refining what works best.',
  },
];

export const testimonials = [
  {
    name: 'Amelia Ford',
    role: 'Head of Operations',
    company: 'Northwind Logistics',
    avatarSeed: 'Amelia Ford',
    quote: 'Flowbase cut our manual handoffs by more than half in the first month. Our ops team finally has room to breathe.',
    rating: 5,
  },
  {
    name: 'Daniel Osei',
    role: 'Engineering Manager',
    company: 'Vertex Cloud',
    avatarSeed: 'Daniel Osei',
    quote: 'The integration library alone saved us weeks of custom scripting. Setup felt closer to configuration than engineering.',
    rating: 5,
  },
  {
    name: 'Priya Nair',
    role: 'Customer Success Lead',
    company: 'Loomly',
    avatarSeed: 'Priya Nair',
    quote: 'Our support escalation time dropped noticeably once tickets started routing themselves. It just works quietly in the background.',
    rating: 4,
  },
  {
    name: 'Marcus Lee',
    role: 'COO',
    company: 'Cascade Health',
    avatarSeed: 'Marcus Lee',
    quote: 'We evaluated four platforms. Flowbase was the only one our non-technical team could actually build workflows in themselves.',
    rating: 5,
  },
];

export const pricingPlans = [
  {
    name: 'Starter',
    price: '$0',
    period: 'forever',
    description: 'For individuals and small teams getting started with automation.',
    features: [
      'Up to 3 active workflows',
      '2 team members',
      'Core integrations',
      'Community support',
    ],
    cta: 'Start for free',
    highlighted: false,
  },
  {
    name: 'Professional',
    price: '$29',
    period: 'per user / month',
    description: 'For growing teams that need more power and visibility.',
    features: [
      'Unlimited workflows',
      'Up to 25 team members',
      'All 120+ integrations',
      'Pipeline analytics dashboard',
      'Priority email support',
    ],
    cta: 'Start free trial',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'billed annually',
    description: 'For organizations with advanced security and scale needs.',
    features: [
      'Everything in Professional',
      'Unlimited team members',
      'SSO & audit logs',
      'Dedicated success manager',
      '99.9% uptime SLA',
    ],
    cta: 'Contact sales',
    highlighted: false,
  },
];

export const faqs = [
  {
    question: 'Do I need to know how to code to use Flowbase?',
    answer: 'No. Flowbase is built around a visual, drag-and-drop workflow builder. Most teams never write a line of code, though we do offer a scripting step for advanced use cases.',
  },
  {
    question: 'How long does it take to set up my first workflow?',
    answer: 'Most teams launch their first automation in under 15 minutes using one of our pre-built templates, then customize it from there.',
  },
  {
    question: 'Can I try Flowbase before paying?',
    answer: 'Yes. The Starter plan is free forever, and every paid plan includes a 14-day free trial with no credit card required.',
  },
  {
    question: 'What happens to my data if I cancel?',
    answer: 'You can export all of your workflow data and history at any time. We retain your data for 30 days after cancellation in case you change your mind.',
  },
  {
    question: 'Does Flowbase integrate with our existing tools?',
    answer: 'Flowbase connects with 120+ tools including Slack, Salesforce, Notion, GitHub, HubSpot, and Google Workspace, with new integrations added monthly.',
  },
];

export const footerLinks = {
  Product: ['Features', 'Pricing', 'Integrations', 'Changelog'],
  Company: ['About', 'Careers', 'Blog', 'Contact'],
  Resources: ['Documentation', 'Community', 'Support', 'API Reference'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Security'],
};
