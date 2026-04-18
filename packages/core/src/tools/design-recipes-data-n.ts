import type { Recipe } from './design-recipes-data-a'

export const HERO_GLASSMORPHISM: Recipe = {
  name: 'hero-glassmorphism',
  type: 'hero',
  style: 'glassmorphism',
  description:
    'Glassmorphism hero on dark gradient bg. Central frosted-glass card with headline + dual CTAs + floating glass pills. Trendy on Dribbble.',
  dimensions: '1440×720',
  palette: ['#0F0A28', '#FFFFFF', '#B794F4', '#FBCFE8', '#FFFFFF1F'],
  font: 'Inter',
  jsx: `<Frame name="HeroGlass" w={1440} h={720} bg="#0F0A28" flex="col" items="center" justify="center" gap={40} px={48} overflow="hidden">
  <Frame name="BGBlobs" x={0} y={0} w={1440} h={720}>
    <Ellipse x={180} y={80} w={560} h={400} bg="#8B5CF6" blur={140} opacity={0.6} />
    <Ellipse x={700} y={300} w={480} h={360} bg="#EC4899" blur={140} opacity={0.55} />
    <Ellipse x={200} y={420} w={400} h={280} bg="#06B6D4" blur={120} opacity={0.45} />
  </Frame>
  <Frame name="FloatingPillTop" x={540} y={80} h={36} px={14} bg="#FFFFFF1F" stroke="#FFFFFF33" strokeWidth={1} rounded={999} flex="row" items="center" gap={8}>
    <Ellipse w={6} h={6} bg="#4ADE80" />
    <Text color="#FFFFFF" size={12} weight="medium">New · AI copilot is live</Text>
    <Icon name="lucide:arrow-right" size={12} color="#FFFFFF" />
  </Frame>
  <Frame name="GlassCard" w={900} bg="#FFFFFF14" stroke="#FFFFFF26" strokeWidth={1} rounded={24} flex="col" items="center" gap={24} p={56}>
    <Text color="#FFFFFF" size={64} weight="bold" textAlign="center" letterSpacing={-2} lineHeight={68}>The design tool that feels like magic</Text>
    <Text color="#FFFFFFCC" size={18} textAlign="center" lineHeight={28} w={600}>Collaborative, real-time, and astonishingly fast. Built for teams who ship weekly, not yearly.</Text>
    <Frame flex="row" gap={12} items="center">
      <Frame h={48} px={24} bg="#FFFFFF" rounded={24} flex="row" items="center" gap={8}>
        <Text color="#0F0A28" size={15} weight="semibold">Start designing</Text>
        <Icon name="lucide:arrow-right" size={14} color="#0F0A28" />
      </Frame>
      <Frame h={48} px={24} bg="#FFFFFF14" stroke="#FFFFFF33" strokeWidth={1} rounded={24} flex="row" items="center" gap={8}>
        <Icon name="lucide:play" size={14} color="#FFFFFF" />
        <Text color="#FFFFFF" size={15} weight="medium">Watch demo</Text>
      </Frame>
    </Frame>
  </Frame>
  <Frame name="FloatingChips" flex="row" gap={10}>
    <Frame h={32} px={12} bg="#FFFFFF14" stroke="#FFFFFF26" strokeWidth={1} rounded={999} flex="row" items="center" gap={6}><Icon name="lucide:shield-check" size={12} color="#4ADE80" /><Text color="#FFFFFF" size={12} weight="medium">SOC 2</Text></Frame>
    <Frame h={32} px={12} bg="#FFFFFF14" stroke="#FFFFFF26" strokeWidth={1} rounded={999} flex="row" items="center" gap={6}><Icon name="lucide:zap" size={12} color="#FBCFE8" /><Text color="#FFFFFF" size={12} weight="medium">Edge-native</Text></Frame>
    <Frame h={32} px={12} bg="#FFFFFF14" stroke="#FFFFFF26" strokeWidth={1} rounded={999} flex="row" items="center" gap={6}><Icon name="lucide:users" size={12} color="#B794F4" /><Text color="#FFFFFF" size={12} weight="medium">12,000+ teams</Text></Frame>
  </Frame>
</Frame>`
}

export const PRICING_GLASSMORPHISM: Recipe = {
  name: 'pricing-glassmorphism-tiers',
  type: 'pricing',
  style: 'glassmorphism',
  description:
    '3 glass-effect pricing cards on dark gradient bg. Middle card has stronger glow and brighter stroke.',
  dimensions: '1200×620',
  palette: ['#0F0A28', '#FFFFFF', '#B794F4', '#EC4899', '#FFFFFF1F'],
  font: 'Inter',
  jsx: `<Frame name="PricingGlass" w={1200} h={620} bg="#0F0A28" flex="col" items="center" justify="center" gap={40} px={24} overflow="hidden">
  <Frame x={0} y={0} w={1200} h={620}>
    <Ellipse x={400} y={120} w={500} h={360} bg="#8B5CF6" blur={160} opacity={0.5} />
    <Ellipse x={500} y={300} w={400} h={280} bg="#EC4899" blur={140} opacity={0.4} />
  </Frame>
  <Frame flex="col" items="center" gap={10}>
    <Text color="#FFFFFFCC" size={12} weight="semibold" letterSpacing={2} textCase="upper">Pricing</Text>
    <Text color="#FFFFFF" size={44} weight="bold" textAlign="center" letterSpacing={-1.5}>Pick your plan</Text>
  </Frame>
  <Frame flex="row" gap={16} items="stretch">
    <Frame name="TierStarter" w={320} bg="#FFFFFF0D" stroke="#FFFFFF1A" strokeWidth={1} rounded={20} flex="col" gap={20} p={28}>
      <Frame flex="col" gap={6}><Text color="#FFFFFFCC" size={12} weight="semibold" letterSpacing={1} textCase="upper">Starter</Text><Text color="#FFFFFF" size={38} weight="bold" letterSpacing={-1}>$0</Text></Frame>
      <Frame flex="col" gap={10}>
        <Frame flex="row" gap={8} items="center"><Icon name="lucide:check" size={14} color="#B794F4" /><Text color="#FFFFFFE6" size={13}>3 projects</Text></Frame>
        <Frame flex="row" gap={8} items="center"><Icon name="lucide:check" size={14} color="#B794F4" /><Text color="#FFFFFFE6" size={13}>Community support</Text></Frame>
        <Frame flex="row" gap={8} items="center"><Icon name="lucide:check" size={14} color="#B794F4" /><Text color="#FFFFFFE6" size={13}>1 GB storage</Text></Frame>
      </Frame>
      <Frame w="fill" h={40} bg="#FFFFFF14" stroke="#FFFFFF26" strokeWidth={1} rounded={12} flex="row" items="center" justify="center"><Text color="#FFFFFF" size={13} weight="semibold">Start free</Text></Frame>
    </Frame>
    <Frame name="TierPro" w={340} bg="#FFFFFF1F" stroke="#FFFFFF40" strokeWidth={1} rounded={20} flex="col" gap={20} p={28} shadow="0 20 50 #8B5CF666">
      <Frame flex="row" items="center" justify="between"><Text color="#FFFFFF" size={12} weight="semibold" letterSpacing={1} textCase="upper">Pro</Text><Frame px={8} py={3} bg="#FFFFFF" rounded={999}><Text color="#0F0A28" size={10} weight="bold">POPULAR</Text></Frame></Frame>
      <Frame flex="row" items="end" gap={4}><Text color="#FFFFFF" size={38} weight="bold" letterSpacing={-1}>$24</Text><Text color="#FFFFFFCC" size={13} pb={6}>/mo</Text></Frame>
      <Frame flex="col" gap={10}>
        <Frame flex="row" gap={8} items="center"><Icon name="lucide:check" size={14} color="#FBCFE8" /><Text color="#FFFFFF" size={13}>Unlimited projects</Text></Frame>
        <Frame flex="row" gap={8} items="center"><Icon name="lucide:check" size={14} color="#FBCFE8" /><Text color="#FFFFFF" size={13}>Priority support</Text></Frame>
        <Frame flex="row" gap={8} items="center"><Icon name="lucide:check" size={14} color="#FBCFE8" /><Text color="#FFFFFF" size={13}>50 GB storage</Text></Frame>
        <Frame flex="row" gap={8} items="center"><Icon name="lucide:check" size={14} color="#FBCFE8" /><Text color="#FFFFFF" size={13}>Advanced AI</Text></Frame>
      </Frame>
      <Frame w="fill" h={44} bg="#FFFFFF" rounded={12} flex="row" items="center" justify="center"><Text color="#0F0A28" size={13} weight="semibold">Start 14-day trial</Text></Frame>
    </Frame>
    <Frame name="TierTeam" w={320} bg="#FFFFFF0D" stroke="#FFFFFF1A" strokeWidth={1} rounded={20} flex="col" gap={20} p={28}>
      <Frame flex="col" gap={6}><Text color="#FFFFFFCC" size={12} weight="semibold" letterSpacing={1} textCase="upper">Team</Text><Frame flex="row" items="end" gap={4}><Text color="#FFFFFF" size={38} weight="bold" letterSpacing={-1}>$49</Text><Text color="#FFFFFFCC" size={13} pb={6}>/user</Text></Frame></Frame>
      <Frame flex="col" gap={10}>
        <Frame flex="row" gap={8} items="center"><Icon name="lucide:check" size={14} color="#B794F4" /><Text color="#FFFFFFE6" size={13}>Everything in Pro</Text></Frame>
        <Frame flex="row" gap={8} items="center"><Icon name="lucide:check" size={14} color="#B794F4" /><Text color="#FFFFFFE6" size={13}>SSO & SCIM</Text></Frame>
        <Frame flex="row" gap={8} items="center"><Icon name="lucide:check" size={14} color="#B794F4" /><Text color="#FFFFFFE6" size={13}>Audit logs</Text></Frame>
      </Frame>
      <Frame w="fill" h={40} bg="#FFFFFF14" stroke="#FFFFFF26" strokeWidth={1} rounded={12} flex="row" items="center" justify="center"><Text color="#FFFFFF" size={13} weight="semibold">Contact sales</Text></Frame>
    </Frame>
  </Frame>
</Frame>`
}

export const NAV_GLASSMORPHISM: Recipe = {
  name: 'nav-glassmorphism-floating',
  type: 'nav',
  style: 'glassmorphism',
  description:
    'Floating glassmorphism navigation bar. Pill-shaped, centered at top, works over any image/gradient. Very 2025-Dribbble.',
  dimensions: '1200×96',
  palette: ['#0F0A28', '#FFFFFF', '#FFFFFF1F'],
  font: 'Inter',
  jsx: `<Frame name="NavGlass" w={1200} h={96} bg="#0F0A28" flex="row" items="center" justify="center" overflow="hidden">
  <Frame x={0} y={0} w={1200} h={96}>
    <Ellipse x={200} y={-40} w={400} h={200} bg="#8B5CF6" blur={100} opacity={0.4} />
    <Ellipse x={700} y={-20} w={400} h={160} bg="#EC4899" blur={100} opacity={0.35} />
  </Frame>
  <Frame h={56} bg="#FFFFFF1A" stroke="#FFFFFF26" strokeWidth={1} rounded={32} flex="row" items="center" gap={6} px={10}>
    <Frame flex="row" gap={8} items="center" pl={8} pr={16} py={6}>
      <Rectangle w={24} h={24} bg="#FFFFFF" rounded={6} />
      <Text color="#FFFFFF" size={15} weight="bold" letterSpacing={-0.3}>Lumen</Text>
    </Frame>
    <Frame flex="row" gap={4}>
      <Frame h={36} px={14} rounded={20} flex="row" items="center"><Text color="#FFFFFF" size={13} weight="medium">Product</Text></Frame>
      <Frame h={36} px={14} rounded={20} flex="row" items="center"><Text color="#FFFFFFB3" size={13} weight="medium">Solutions</Text></Frame>
      <Frame h={36} px={14} rounded={20} flex="row" items="center"><Text color="#FFFFFFB3" size={13} weight="medium">Customers</Text></Frame>
      <Frame h={36} px={14} rounded={20} flex="row" items="center"><Text color="#FFFFFFB3" size={13} weight="medium">Pricing</Text></Frame>
    </Frame>
    <Rectangle w={1} h={24} bg="#FFFFFF1F" />
    <Frame h={36} px={14} rounded={20} flex="row" items="center"><Text color="#FFFFFFB3" size={13} weight="medium">Sign in</Text></Frame>
    <Frame h={36} px={16} bg="#FFFFFF" rounded={20} flex="row" items="center" gap={6}><Text color="#0F0A28" size={13} weight="semibold">Get started</Text><Icon name="lucide:arrow-right" size={12} color="#0F0A28" /></Frame>
  </Frame>
</Frame>`
}

export const CARD_CLAYMORPHISM: Recipe = {
  name: 'card-claymorphism-settings',
  type: 'card',
  style: 'claymorphism',
  description:
    'Claymorphism settings card: soft puffy 3D shapes with double shadows (dark + light). Rounded 24+, pastel pink bg.',
  dimensions: '380×480',
  palette: ['#FFD6E0', '#FFFFFF', '#5B1D4E', '#FF7AB2', '#A8E6CF'],
  font: 'Inter',
  jsx: `<Frame name="ClayCard" w={380} h={480} bg="#FFD6E0" flex="col" gap={20} p={24} rounded={32}>
  <Frame flex="row" items="center" justify="between">
    <Text color="#5B1D4E" size={18} weight="bold">Preferences</Text>
    <Frame w={44} h={44} bg="#FFFFFF" rounded={22} flex="row" items="center" justify="center" shadow="0 6 16 #E91F6E33"><Icon name="lucide:settings" size={20} color="#FF7AB2" /></Frame>
  </Frame>
  <Frame name="ProfilePuff" w="fill" bg="#FFFFFF" rounded={24} flex="row" items="center" gap={14} p={16} shadow="0 8 20 #E91F6E26">
    <Frame w={52} h={52} bg="#FF7AB2" rounded={26} flex="row" items="center" justify="center" shadow="0 4 10 #E91F6E40"><Text color="#FFFFFF" size={20} weight="bold">S</Text></Frame>
    <Frame flex="col" gap={2} grow={1}>
      <Text color="#5B1D4E" size={14} weight="semibold">Sarah Chen</Text>
      <Text color="#A86688" size={12}>Pro member · since 2024</Text>
    </Frame>
  </Frame>
  <Frame name="ToggleRows" flex="col" gap={10}>
    <Frame w="fill" bg="#FFFFFF" rounded={20} flex="row" items="center" gap={12} p={14} shadow="0 6 14 #E91F6E1F">
      <Frame w={36} h={36} bg="#FFD6E0" rounded={18} flex="row" items="center" justify="center"><Icon name="lucide:bell" size={16} color="#FF7AB2" /></Frame>
      <Text color="#5B1D4E" size={14} weight="medium" grow={1}>Notifications</Text>
      <Frame w={48} h={28} bg="#A8E6CF" rounded={14} flex="row" items="center" px={3} justify="end" shadow="inset 0 2 4 #00000014"><Ellipse w={22} h={22} bg="#FFFFFF" shadow="0 2 6 #00000026" /></Frame>
    </Frame>
    <Frame w="fill" bg="#FFFFFF" rounded={20} flex="row" items="center" gap={12} p={14} shadow="0 6 14 #E91F6E1F">
      <Frame w={36} h={36} bg="#FFD6E0" rounded={18} flex="row" items="center" justify="center"><Icon name="lucide:moon" size={16} color="#FF7AB2" /></Frame>
      <Text color="#5B1D4E" size={14} weight="medium" grow={1}>Dark mode</Text>
      <Frame w={48} h={28} bg="#F5D6E0" rounded={14} flex="row" items="center" px={3}><Ellipse w={22} h={22} bg="#FFFFFF" shadow="0 2 6 #00000026" /></Frame>
    </Frame>
    <Frame w="fill" bg="#FFFFFF" rounded={20} flex="row" items="center" gap={12} p={14} shadow="0 6 14 #E91F6E1F">
      <Frame w={36} h={36} bg="#FFD6E0" rounded={18} flex="row" items="center" justify="center"><Icon name="lucide:globe" size={16} color="#FF7AB2" /></Frame>
      <Text color="#5B1D4E" size={14} weight="medium" grow={1}>Language</Text>
      <Text color="#A86688" size={13}>English</Text>
    </Frame>
  </Frame>
  <Frame name="SavePuff" w="fill" h={52} bg="#FF7AB2" rounded={26} flex="row" items="center" justify="center" shadow="0 8 20 #E91F6E66"><Text color="#FFFFFF" size={15} weight="semibold">Save changes</Text></Frame>
</Frame>`
}

export const HERO_AURORA_GRADIENT: Recipe = {
  name: 'hero-aurora-gradient',
  type: 'hero',
  style: 'aurora',
  description:
    'Hero with flowing aurora-like gradient background (overlapping blurred colored shapes). Strong hero for creative brands.',
  dimensions: '1440×720',
  palette: ['#FAFAFA', '#1A0F2E', '#FF6B9D', '#FFB84D', '#06B6D4', '#8B5CF6'],
  font: 'Inter',
  jsx: `<Frame name="HeroAurora" w={1440} h={720} bg="#FAFAFA" flex="col" items="center" justify="center" gap={32} px={48} overflow="hidden">
  <Frame x={0} y={0} w={1440} h={720}>
    <Ellipse x={-100} y={-50} w={700} h={500} bg="#FF6B9D" blur={160} opacity={0.55} />
    <Ellipse x={300} y={200} w={600} h={400} bg="#FFB84D" blur={140} opacity={0.5} />
    <Ellipse x={700} y={-40} w={700} h={500} bg="#06B6D4" blur={170} opacity={0.55} />
    <Ellipse x={800} y={300} w={600} h={380} bg="#8B5CF6" blur={150} opacity={0.5} />
    <Ellipse x={400} y={460} w={700} h={400} bg="#FF6B9D" blur={160} opacity={0.45} />
  </Frame>
  <Frame h={30} px={14} bg="#FFFFFF80" stroke="#FFFFFFCC" strokeWidth={1} rounded={999} flex="row" items="center" gap={8}>
    <Text color="#1A0F2E" size={12} weight="semibold" letterSpacing={0.3}>🎨 Creator edition · Just launched</Text>
  </Frame>
  <Text color="#1A0F2E" size={88} weight="bold" textAlign="center" letterSpacing={-3} lineHeight={88} w={1100}>Create things that feel alive</Text>
  <Text color="#1A0F2EBF" size={20} textAlign="center" lineHeight={30} w={680}>A design tool for the post-template era. Fluid, expressive, and built for people who want to make things that don't look like everything else.</Text>
  <Frame flex="row" gap={14} items="center">
    <Frame h={56} px={30} bg="#1A0F2E" rounded={28} flex="row" items="center" gap={8}><Text color="#FFFFFF" size={16} weight="semibold">Start creating</Text><Icon name="lucide:arrow-right" size={15} color="#FFFFFF" /></Frame>
    <Frame h={56} px={30} bg="#FFFFFF99" stroke="#1A0F2E1F" strokeWidth={1} rounded={28} flex="row" items="center" gap={8}><Icon name="lucide:play-circle" size={18} color="#1A0F2E" /><Text color="#1A0F2E" size={16} weight="semibold">Watch the film</Text></Frame>
  </Frame>
</Frame>`
}

export const CTA_AURORA_BLOB: Recipe = {
  name: 'cta-aurora-blob-card',
  type: 'cta',
  style: 'aurora',
  description:
    'Rounded 32 CTA card with vibrant aurora blobs behind text. Perfect sign-up section before footer.',
  dimensions: '1200×360',
  palette: ['#FFFFFF', '#1A0F2E', '#FF6B9D', '#06B6D4', '#FFB84D'],
  font: 'Inter',
  jsx: `<Frame name="CTAAurora" w={1200} h={360} bg="#FAFAFA" rounded={32} flex="col" items="center" justify="center" gap={20} px={48} overflow="hidden">
  <Frame x={0} y={0} w={1200} h={360}>
    <Ellipse x={60} y={60} w={400} h={280} bg="#FF6B9D" blur={120} opacity={0.6} />
    <Ellipse x={400} y={0} w={500} h={300} bg="#06B6D4" blur={140} opacity={0.55} />
    <Ellipse x={800} y={80} w={400} h={280} bg="#FFB84D" blur={120} opacity={0.55} />
  </Frame>
  <Frame h={28} px={12} bg="#FFFFFF80" stroke="#FFFFFFCC" strokeWidth={1} rounded={999}><Text color="#1A0F2E" size={11} weight="semibold" letterSpacing={0.5}>✨ FREE FOR 14 DAYS</Text></Frame>
  <Text color="#1A0F2E" size={52} weight="bold" textAlign="center" letterSpacing={-2} lineHeight={56} w={720}>Ready to make something remarkable?</Text>
  <Frame flex="row" gap={12} items="center">
    <Frame h={52} px={28} bg="#1A0F2E" rounded={26} flex="row" items="center" gap={8}><Text color="#FFFFFF" size={15} weight="semibold">Start free trial</Text><Icon name="lucide:sparkles" size={14} color="#FFFFFF" /></Frame>
    <Frame h={52} px={28} bg="#FFFFFF80" stroke="#1A0F2E33" strokeWidth={1} rounded={26} flex="row" items="center"><Text color="#1A0F2E" size={15} weight="semibold">Book a demo</Text></Frame>
  </Frame>
  <Text color="#1A0F2E99" size={12}>No credit card required · Cancel anytime</Text>
</Frame>`
}

export const DASHBOARD_GLASS_WIDGETS: Recipe = {
  name: 'dashboard-glass-widgets',
  type: 'dashboard',
  style: 'glassmorphism',
  description:
    'Glassmorphism dashboard widgets grid on dark aurora bg. Stats, chart, and activity in translucent cards.',
  dimensions: '1200×520',
  palette: ['#0F0A28', '#FFFFFF', '#8B5CF6', '#EC4899', '#FFFFFF14'],
  font: 'Inter',
  jsx: `<Frame name="DashboardGlass" w={1200} h={520} bg="#0F0A28" flex="col" gap={14} p={20} overflow="hidden">
  <Frame x={0} y={0} w={1200} h={520}>
    <Ellipse x={-50} y={100} w={500} h={380} bg="#8B5CF6" blur={160} opacity={0.45} />
    <Ellipse x={700} y={-50} w={600} h={400} bg="#EC4899" blur={180} opacity={0.4} />
  </Frame>
  <Frame w="fill" flex="row" items="center" justify="between">
    <Frame flex="col" gap={2}>
      <Text color="#FFFFFFCC" size={11} weight="semibold" letterSpacing={1} textCase="upper">Overview</Text>
      <Text color="#FFFFFF" size={22} weight="bold" letterSpacing={-0.5}>Good morning, Sarah</Text>
    </Frame>
    <Frame flex="row" gap={8}><Frame h={34} px={12} bg="#FFFFFF14" stroke="#FFFFFF26" strokeWidth={1} rounded={10} flex="row" items="center" gap={6}><Icon name="lucide:calendar" size={13} color="#FFFFFFCC" /><Text color="#FFFFFFCC" size={12}>Apr 9 – 16</Text></Frame><Frame h={34} w={34} bg="#FFFFFF14" stroke="#FFFFFF26" strokeWidth={1} rounded={10} flex="row" items="center" justify="center"><Icon name="lucide:share-2" size={14} color="#FFFFFFCC" /></Frame></Frame>
  </Frame>
  <Frame w="fill" flex="row" gap={12}>
    <Frame grow={1} flex="col" gap={8} bg="#FFFFFF0D" stroke="#FFFFFF1F" strokeWidth={1} rounded={16} p={18}>
      <Text color="#FFFFFFCC" size={11} weight="medium" letterSpacing={0.5} textCase="upper">Revenue</Text>
      <Text color="#FFFFFF" size={28} weight="bold" letterSpacing={-1}>$84,293</Text>
      <Frame h={20} px={8} bg="#4ADE8014" rounded={4} flex="row" items="center" gap={4} w={80}><Icon name="lucide:trending-up" size={10} color="#4ADE80" /><Text color="#4ADE80" size={11} weight="semibold">+12.4%</Text></Frame>
    </Frame>
    <Frame grow={1} flex="col" gap={8} bg="#FFFFFF0D" stroke="#FFFFFF1F" strokeWidth={1} rounded={16} p={18}>
      <Text color="#FFFFFFCC" size={11} weight="medium" letterSpacing={0.5} textCase="upper">Users</Text>
      <Text color="#FFFFFF" size={28} weight="bold" letterSpacing={-1}>12,493</Text>
      <Frame h={20} px={8} bg="#4ADE8014" rounded={4} flex="row" items="center" gap={4} w={70}><Icon name="lucide:trending-up" size={10} color="#4ADE80" /><Text color="#4ADE80" size={11} weight="semibold">+8.2%</Text></Frame>
    </Frame>
    <Frame grow={1} flex="col" gap={8} bg="#FFFFFF0D" stroke="#FFFFFF1F" strokeWidth={1} rounded={16} p={18}>
      <Text color="#FFFFFFCC" size={11} weight="medium" letterSpacing={0.5} textCase="upper">Sessions</Text>
      <Text color="#FFFFFF" size={28} weight="bold" letterSpacing={-1}>38.2k</Text>
      <Frame h={20} px={8} bg="#4ADE8014" rounded={4} flex="row" items="center" gap={4} w={80}><Icon name="lucide:trending-up" size={10} color="#4ADE80" /><Text color="#4ADE80" size={11} weight="semibold">+24.1%</Text></Frame>
    </Frame>
    <Frame grow={1} flex="col" gap={8} bg="#FFFFFF0D" stroke="#FFFFFF1F" strokeWidth={1} rounded={16} p={18}>
      <Text color="#FFFFFFCC" size={11} weight="medium" letterSpacing={0.5} textCase="upper">Churn</Text>
      <Text color="#FFFFFF" size={28} weight="bold" letterSpacing={-1}>2.1%</Text>
      <Frame h={20} px={8} bg="#F43F5E14" rounded={4} flex="row" items="center" gap={4} w={70}><Icon name="lucide:trending-up" size={10} color="#F43F5E" /><Text color="#F43F5E" size={11} weight="semibold">+0.4%</Text></Frame>
    </Frame>
  </Frame>
  <Frame w="fill" flex="row" gap={12} grow={1}>
    <Frame grow={2} bg="#FFFFFF0D" stroke="#FFFFFF1F" strokeWidth={1} rounded={16} p={18} flex="col" gap={10}>
      <Frame flex="row" items="center" justify="between"><Text color="#FFFFFF" size={13} weight="semibold">Revenue trend</Text><Text color="#FFFFFFCC" size={11}>Last 7 days</Text></Frame>
      <Frame w="fill" grow={1} flex="row" items="end" gap={4}>
        <Rectangle grow={1} h={60} bg="#8B5CF666" rounded={3} />
        <Rectangle grow={1} h={80} bg="#8B5CF680" rounded={3} />
        <Rectangle grow={1} h={100} bg="#8B5CF699" rounded={3} />
        <Rectangle grow={1} h={70} bg="#8B5CF680" rounded={3} />
        <Rectangle grow={1} h={130} bg="#8B5CF6" rounded={3} />
        <Rectangle grow={1} h={110} bg="#8B5CF6CC" rounded={3} />
        <Rectangle grow={1} h={150} bg="#EC4899" rounded={3} />
      </Frame>
    </Frame>
    <Frame grow={1} bg="#FFFFFF0D" stroke="#FFFFFF1F" strokeWidth={1} rounded={16} p={18} flex="col" gap={10}>
      <Text color="#FFFFFF" size={13} weight="semibold">Recent activity</Text>
      <Frame flex="col" gap={10}>
        <Frame flex="row" gap={8} items="center"><Ellipse w={24} h={24} bg="#EC4899" /><Frame flex="col" gap={1} grow={1}><Text color="#FFFFFF" size={12}>Maya signed up</Text><Text color="#FFFFFFCC" size={10}>2 min ago</Text></Frame></Frame>
        <Frame flex="row" gap={8} items="center"><Ellipse w={24} h={24} bg="#06B6D4" /><Frame flex="col" gap={1} grow={1}><Text color="#FFFFFF" size={12}>Payment succeeded</Text><Text color="#FFFFFFCC" size={10}>12 min ago</Text></Frame></Frame>
        <Frame flex="row" gap={8} items="center"><Ellipse w={24} h={24} bg="#FBCFE8" /><Frame flex="col" gap={1} grow={1}><Text color="#FFFFFF" size={12}>Priya created doc</Text><Text color="#FFFFFFCC" size={10}>1 hour ago</Text></Frame></Frame>
      </Frame>
    </Frame>
  </Frame>
</Frame>`
}
