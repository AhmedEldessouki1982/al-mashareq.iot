import {
  Camera,
  Code,
  Cpu,
  Lightbulb,
  Lock,
  Mail,
  MessageCircle,
  Network,
  Phone,
  Plug,
  Radio,
  Server,
  Workflow,
  type LucideIcon,
} from 'lucide-react'

export interface Point {
  x: number
  y: number
}

export interface SignalNode extends Point {
  label: string
  icon: LucideIcon
}

export interface Service {
  title: string
  desc: string
  to: string
  icon: LucideIcon
  tags: string[]
  wide?: boolean
}

export interface ProcessItem {
  title: string
  desc: string
}

export interface TerminalLine {
  id: number
  time: string
  device: string
  action: string
}

export interface Stat {
  value: string
  label: string
}

export interface FaqItem {
  q: string
  a: string
}

export interface ContactLink {
  icon: LucideIcon
  label: string
  value: string
  href?: string
  external?: boolean
}

export const hub: SignalNode = { label: 'Core', x: 50, y: 50, icon: Cpu }

export const signalNodes: SignalNode[] = [
  { label: 'Smart lock', x: 22, y: 14, icon: Lock },
  { label: 'CCTV', x: 78, y: 14, icon: Camera },
  { label: 'Lighting', x: 8, y: 50, icon: Lightbulb },
  { label: 'Sensors', x: 92, y: 50, icon: Radio },
  { label: 'Local server', x: 22, y: 86, icon: Server },
  { label: 'Network', x: 78, y: 86, icon: Network },
]

export const terminalLines: TerminalLine[] = [
  { id: 1, time: '08:02:11', device: 'lock.main', action: 'unlocked · app' },
  { id: 2, time: '08:02:14', device: 'light.office', action: 'scene: morning' },
  { id: 3, time: '08:05:40', device: 'cam.gate', action: 'motion · recording' },
  { id: 4, time: '08:06:02', device: 'sensor.hall', action: 'occupied → lights on' },
  { id: 5, time: '22:00:00', device: 'lock.main', action: 'locked · schedule' },
  { id: 6, time: '22:00:03', device: 'alarm', action: 'armed · 2 zones' },
]

export const services: Service[] = [
  {
    title: 'Integration',
    desc: 'Locks, cameras, lights and sensors from different brands, on one network and one app.',
    to: '/contact',
    icon: Plug,
    tags: ['Protocols', 'Bridges', 'APIs'],
    wide: true,
  },
  {
    title: 'Software',
    desc: 'Dashboards, device apps and monitoring tools built around how your site actually runs.',
    to: '/contact',
    icon: Code,
    tags: ['Dashboards', 'Alerts', 'Logs'],
  },
  {
    title: 'Automation',
    desc: 'Scenes, schedules and rules. Lights follow occupancy, doors lock at night, alerts reach your phone.',
    to: '/contact',
    icon: Workflow,
    tags: ['Scenes', 'Schedules', 'Triggers'],
  },
  {
    title: 'Hardware',
    desc: 'The devices we integrate: smart home gear, networking and local servers, tested before install.',
    to: '/shop',
    icon: Cpu,
    tags: ['Shop', 'Networking', 'Servers'],
    wide: true,
  },
]

export const pipeline: ProcessItem[] = [
  { title: 'Survey', desc: 'Free site visit. We map rooms, wiring and network reach.' },
  { title: 'Design', desc: 'A written plan: which device goes where, what it talks to, and the price.' },
  { title: 'Integrate', desc: 'Hardware joined on one platform. Each device tested end to end.' },
  { title: 'Automate', desc: 'Scenes, schedules and alerts written for how you live or work.' },
  { title: 'Handover', desc: 'Walkthrough, app setup and training. You run it yourself.' },
]

export const stats: Stat[] = [
  { value: '250+', label: 'Installs completed' },
  { value: '6', label: 'Years active' },
  { value: '140+', label: 'Systems deployed' },
  { value: 'Egypt', label: 'Service area' },
]

export const contactLinks: ContactLink[] = [
  { icon: Phone, label: 'Phone', value: '+20 128 569 6767', href: 'tel:+201285696767' },
  { icon: Mail, label: 'Email', value: 'ahmed@almashareq.com', href: 'mailto:ahmed@almashareq.com' },
  { icon: MessageCircle, label: 'WhatsApp', value: 'Chat with me', href: 'https://wa.me/201285696767', external: true },
]

export const faqs: FaqItem[] = [
  {
    q: 'How does the install process work?',
    a: 'Free site visit, then a room-by-room plan showing where each device goes. You approve the hardware list and price before any work starts. Installation is typically done in 1-3 days, and we finish with a full walkthrough so you can operate everything yourself.',
  },
  {
    q: 'How do you price a project?',
    a: 'Hardware at list price plus a fixed install fee per device or wiring point. No hourly billing, no surprise add-ons, no subscription required after the job. You get a written quote before we buy or install anything.',
  },
  {
    q: 'Where do you work?',
    a: 'All of Egypt. Cairo and Giza get same-week visits; other governorates are scheduled per project. Larger commercial and warehouse jobs get a dedicated schedule regardless of location.',
  },
  {
    q: 'What is included in the price?',
    a: 'Devices, wiring and mounting, network configuration, app setup on your phone, and operator training. Every install includes 30 days of after-install support. Payment in EGP — Fawry, Vodafone Cash, or card.',
  },
]
