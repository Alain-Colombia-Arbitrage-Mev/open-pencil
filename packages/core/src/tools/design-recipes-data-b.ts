import type { Recipe } from './design-recipes-data-a'

export const FOOTER_4_COL_DARK: Recipe = {
  name: 'footer-4col-dark',
  type: 'footer',
  style: 'linear',
  description:
    'Dark footer with 4 columns of links + brand area + newsletter signup + bottom copyright row.',
  dimensions: '1440×420',
  palette: ['#08090A', '#F4F5F8', '#5E6AD2', '#8A8F98', '#1F2024'],
  font: 'Inter',
  jsx: `<Frame name="Footer" w={1440} flex="col" bg="#08090A" px={48} pt={64} pb={32} gap={48}>
  <Frame name="FooterTop" w="fill" flex="row" gap={48} items="start">
    <Frame name="FooterBrand" w={320} flex="col" gap={16}>
      <Frame flex="row" gap={8} items="center">
        <Rectangle w={24} h={24} bg="#5E6AD2" rounded={6} />
        <Text color="#F4F5F8" size={17} weight="semibold">Linear</Text>
      </Frame>
      <Text color="#8A8F98" size={13} lineHeight={22} w="fill">Purpose-built for planning and building modern products.</Text>
      <Frame name="NewsletterForm" w="fill" flex="row" gap={8} items="center">
        <Frame grow={1} h={40} bg="#1F2024" rounded={8} flex="row" items="center" px={14}>
          <Text color="#8A8F98" size={13}>you@company.com</Text>
        </Frame>
        <Frame h={40} px={16} bg="#F4F5F8" rounded={8} flex="row" items="center">
          <Text color="#08090A" size={13} weight="semibold">Subscribe</Text>
        </Frame>
      </Frame>
    </Frame>
    <Frame name="FooterLinks" grow={1} flex="row" gap={48} items="start">
      <Frame name="FooterColProduct" flex="col" gap={12} grow={1}>
        <Text color="#F4F5F8" size={13} weight="semibold">Product</Text>
        <Text color="#8A8F98" size={13}>Features</Text>
        <Text color="#8A8F98" size={13}>Integrations</Text>
        <Text color="#8A8F98" size={13}>Pricing</Text>
        <Text color="#8A8F98" size={13}>Download</Text>
      </Frame>
      <Frame name="FooterColCompany" flex="col" gap={12} grow={1}>
        <Text color="#F4F5F8" size={13} weight="semibold">Company</Text>
        <Text color="#8A8F98" size={13}>About</Text>
        <Text color="#8A8F98" size={13}>Customers</Text>
        <Text color="#8A8F98" size={13}>Careers</Text>
        <Text color="#8A8F98" size={13}>Blog</Text>
      </Frame>
      <Frame name="FooterColResources" flex="col" gap={12} grow={1}>
        <Text color="#F4F5F8" size={13} weight="semibold">Resources</Text>
        <Text color="#8A8F98" size={13}>Documentation</Text>
        <Text color="#8A8F98" size={13}>Changelog</Text>
        <Text color="#8A8F98" size={13}>Help center</Text>
        <Text color="#8A8F98" size={13}>API reference</Text>
      </Frame>
      <Frame name="FooterColLegal" flex="col" gap={12} grow={1}>
        <Text color="#F4F5F8" size={13} weight="semibold">Legal</Text>
        <Text color="#8A8F98" size={13}>Terms</Text>
        <Text color="#8A8F98" size={13}>Privacy</Text>
        <Text color="#8A8F98" size={13}>Security</Text>
      </Frame>
    </Frame>
  </Frame>
  <Rectangle w="fill" h={1} bg="#1F2024" />
  <Frame name="FooterBottom" w="fill" flex="row" items="center" justify="between">
    <Text color="#8A8F98" size={12}>© 2026 Linear, Inc. All rights reserved.</Text>
    <Frame flex="row" gap={16} items="center">
      <Icon name="lucide:twitter" size={16} color="#8A8F98" />
      <Icon name="lucide:github" size={16} color="#8A8F98" />
      <Icon name="lucide:linkedin" size={16} color="#8A8F98" />
      <Icon name="lucide:youtube" size={16} color="#8A8F98" />
    </Frame>
  </Frame>
</Frame>`
}

export const DASHBOARD_SIDEBAR: Recipe = {
  name: 'dashboard-sidebar-dark',
  type: 'dashboard',
  style: 'linear',
  description:
    'Dark app sidebar with logo, primary nav sections, team switcher, user menu at bottom. 240w standard.',
  dimensions: '240×800',
  palette: ['#101114', '#F4F5F8', '#5E6AD2', '#8A8F98', '#1F2024'],
  font: 'Inter',
  jsx: `<Frame name="Sidebar" w={240} h={800} bg="#101114" flex="col" justify="between" py={16}>
  <Frame name="SidebarTop" w="fill" flex="col" gap={24}>
    <Frame name="WorkspaceSwitcher" w="fill" h={36} flex="row" items="center" gap={8} px={12}>
      <Rectangle w={24} h={24} bg="#5E6AD2" rounded={6} />
      <Text color="#F4F5F8" size={13} weight="semibold" grow={1}>Acme Inc</Text>
      <Icon name="lucide:chevrons-up-down" size={14} color="#8A8F98" />
    </Frame>
    <Frame name="NavPrimary" w="fill" flex="col" gap={2} px={8}>
      <Frame w="fill" h={32} flex="row" items="center" gap={10} px={8} bg="#1F2024" rounded={6}>
        <Icon name="lucide:inbox" size={16} color="#F4F5F8" />
        <Text color="#F4F5F8" size={13} weight="medium" grow={1}>Inbox</Text>
        <Text color="#8A8F98" size={11} weight="medium">12</Text>
      </Frame>
      <Frame w="fill" h={32} flex="row" items="center" gap={10} px={8} rounded={6}>
        <Icon name="lucide:my-issues" size={16} color="#8A8F98" />
        <Text color="#8A8F98" size={13} weight="medium" grow={1}>My issues</Text>
      </Frame>
      <Frame w="fill" h={32} flex="row" items="center" gap={10} px={8} rounded={6}>
        <Icon name="lucide:view" size={16} color="#8A8F98" />
        <Text color="#8A8F98" size={13} weight="medium" grow={1}>Views</Text>
      </Frame>
    </Frame>
    <Frame name="NavTeams" w="fill" flex="col" gap={4} px={8}>
      <Frame w="fill" px={8} flex="row" items="center" justify="between">
        <Text color="#8A8F98" size={11} weight="semibold" letterSpacing={0.5} textCase="upper">Your teams</Text>
        <Icon name="lucide:plus" size={12} color="#8A8F98" />
      </Frame>
      <Frame w="fill" h={32} flex="row" items="center" gap={10} px={8} rounded={6}>
        <Rectangle w={16} h={16} bg="#5E6AD2" rounded={4} />
        <Text color="#8A8F98" size={13} weight="medium" grow={1}>Design</Text>
      </Frame>
      <Frame w="fill" h={32} flex="row" items="center" gap={10} px={8} rounded={6}>
        <Rectangle w={16} h={16} bg="#00C7B7" rounded={4} />
        <Text color="#8A8F98" size={13} weight="medium" grow={1}>Engineering</Text>
      </Frame>
      <Frame w="fill" h={32} flex="row" items="center" gap={10} px={8} rounded={6}>
        <Rectangle w={16} h={16} bg="#F5A623" rounded={4} />
        <Text color="#8A8F98" size={13} weight="medium" grow={1}>Marketing</Text>
      </Frame>
    </Frame>
  </Frame>
  <Frame name="SidebarBottom" w="fill" flex="row" items="center" gap={10} px={16} h={48}>
    <Ellipse w={24} h={24} bg="#5E6AD2" />
    <Frame flex="col" grow={1}>
      <Text color="#F4F5F8" size={12} weight="semibold">Ana Torres</Text>
      <Text color="#8A8F98" size={11}>ana@acme.com</Text>
    </Frame>
    <Icon name="lucide:settings" size={14} color="#8A8F98" />
  </Frame>
</Frame>`
}

export const STATS_KPI_ROW: Recipe = {
  name: 'stats-kpi-row',
  type: 'stats',
  style: 'linear',
  description:
    'Dashboard KPI row: 4 cards with label + big number + delta badge (up/down). Use above charts in admin/SaaS.',
  dimensions: '1200×140',
  palette: ['#FFFFFF', '#0A0A0A', '#10B981', '#EF4444', '#F4F4F5', '#71717A'],
  font: 'Inter',
  jsx: `<Frame name="StatsRow" w={1200} flex="row" gap={16} items="stretch">
  <Frame name="StatMRR" grow={1} flex="col" gap={12} bg="#FFFFFF" rounded={12} p={20} stroke="#F4F4F5" strokeWidth={1}>
    <Frame flex="row" items="center" justify="between">
      <Text color="#71717A" size={12} weight="medium" letterSpacing={0.3} textCase="upper">MRR</Text>
      <Icon name="lucide:dollar-sign" size={14} color="#71717A" />
    </Frame>
    <Text color="#0A0A0A" size={30} weight="bold" letterSpacing={-0.5}>$48,294</Text>
    <Frame flex="row" items="center" gap={4}>
      <Frame px={6} py={2} bg="#10B98114" rounded={4} flex="row" items="center" gap={2}>
        <Icon name="lucide:trending-up" size={10} color="#10B981" />
        <Text color="#10B981" size={11} weight="semibold">+12.4%</Text>
      </Frame>
      <Text color="#71717A" size={11}>vs last month</Text>
    </Frame>
  </Frame>
  <Frame name="StatUsers" grow={1} flex="col" gap={12} bg="#FFFFFF" rounded={12} p={20} stroke="#F4F4F5" strokeWidth={1}>
    <Frame flex="row" items="center" justify="between">
      <Text color="#71717A" size={12} weight="medium" letterSpacing={0.3} textCase="upper">Active users</Text>
      <Icon name="lucide:users" size={14} color="#71717A" />
    </Frame>
    <Text color="#0A0A0A" size={30} weight="bold" letterSpacing={-0.5}>12,493</Text>
    <Frame flex="row" items="center" gap={4}>
      <Frame px={6} py={2} bg="#10B98114" rounded={4} flex="row" items="center" gap={2}>
        <Icon name="lucide:trending-up" size={10} color="#10B981" />
        <Text color="#10B981" size={11} weight="semibold">+8.2%</Text>
      </Frame>
      <Text color="#71717A" size={11}>vs last month</Text>
    </Frame>
  </Frame>
  <Frame name="StatChurn" grow={1} flex="col" gap={12} bg="#FFFFFF" rounded={12} p={20} stroke="#F4F4F5" strokeWidth={1}>
    <Frame flex="row" items="center" justify="between">
      <Text color="#71717A" size={12} weight="medium" letterSpacing={0.3} textCase="upper">Churn</Text>
      <Icon name="lucide:user-minus" size={14} color="#71717A" />
    </Frame>
    <Text color="#0A0A0A" size={30} weight="bold" letterSpacing={-0.5}>2.1%</Text>
    <Frame flex="row" items="center" gap={4}>
      <Frame px={6} py={2} bg="#EF444414" rounded={4} flex="row" items="center" gap={2}>
        <Icon name="lucide:trending-up" size={10} color="#EF4444" />
        <Text color="#EF4444" size={11} weight="semibold">+0.4%</Text>
      </Frame>
      <Text color="#71717A" size={11}>vs last month</Text>
    </Frame>
  </Frame>
  <Frame name="StatConversion" grow={1} flex="col" gap={12} bg="#FFFFFF" rounded={12} p={20} stroke="#F4F4F5" strokeWidth={1}>
    <Frame flex="row" items="center" justify="between">
      <Text color="#71717A" size={12} weight="medium" letterSpacing={0.3} textCase="upper">Conversion</Text>
      <Icon name="lucide:target" size={14} color="#71717A" />
    </Frame>
    <Text color="#0A0A0A" size={30} weight="bold" letterSpacing={-0.5}>3.8%</Text>
    <Frame flex="row" items="center" gap={4}>
      <Frame px={6} py={2} bg="#10B98114" rounded={4} flex="row" items="center" gap={2}>
        <Icon name="lucide:trending-up" size={10} color="#10B981" />
        <Text color="#10B981" size={11} weight="semibold">+1.1%</Text>
      </Frame>
      <Text color="#71717A" size={11}>vs last month</Text>
    </Frame>
  </Frame>
</Frame>`
}

export const MOBILE_TAB_BAR: Recipe = {
  name: 'mobile-tab-bar-ios',
  type: 'mobile',
  style: 'apple',
  description:
    'iOS-style bottom tab bar. 5 tabs with icon + label. Active state uses accent color, inactive are muted.',
  dimensions: '390×83',
  palette: ['#FFFFFF', '#0071E3', '#8E8E93'],
  font: 'Inter',
  jsx: `<Frame name="TabBar" w={390} h={83} bg="#FFFFFFF5" flex="col" stroke="#E5E5EA" strokeWidth={0.5} strokeAlign="INSIDE">
  <Frame name="TabBarTabs" w="fill" h={49} flex="row" items="center" justify="between" px={8}>
    <Frame name="TabHome" flex="col" items="center" gap={3} grow={1}>
      <Icon name="lucide:home" size={24} color="#0071E3" />
      <Text color="#0071E3" size={10} weight="medium">Home</Text>
    </Frame>
    <Frame name="TabSearch" flex="col" items="center" gap={3} grow={1}>
      <Icon name="lucide:search" size={24} color="#8E8E93" />
      <Text color="#8E8E93" size={10} weight="medium">Search</Text>
    </Frame>
    <Frame name="TabCreate" flex="col" items="center" gap={3} grow={1}>
      <Icon name="lucide:plus-circle" size={24} color="#8E8E93" />
      <Text color="#8E8E93" size={10} weight="medium">Create</Text>
    </Frame>
    <Frame name="TabInbox" flex="col" items="center" gap={3} grow={1}>
      <Icon name="lucide:bell" size={24} color="#8E8E93" />
      <Text color="#8E8E93" size={10} weight="medium">Alerts</Text>
    </Frame>
    <Frame name="TabProfile" flex="col" items="center" gap={3} grow={1}>
      <Icon name="lucide:user" size={24} color="#8E8E93" />
      <Text color="#8E8E93" size={10} weight="medium">Profile</Text>
    </Frame>
  </Frame>
  <Frame w="fill" h={34} flex="row" items="center" justify="center">
    <Rectangle w={134} h={5} bg="#000000" rounded={3} />
  </Frame>
</Frame>`
}

export const TESTIMONIAL_3_COL: Recipe = {
  name: 'testimonial-3-col',
  type: 'testimonial',
  style: 'stripe',
  description:
    '3-column testimonial grid with avatar + name + role + quote + company logo. Use below hero or features.',
  dimensions: '1200×380',
  palette: ['#FAFAFA', '#0A2540', '#635BFF', '#425466', '#E3E8EE'],
  font: 'Inter',
  jsx: `<Frame name="TestimonialsSection" w={1200} flex="col" gap={48} py={96} bg="#FAFAFA" items="center">
  <Frame name="TestimonialsHeader" flex="col" gap={12} items="center" w={600}>
    <Text color="#635BFF" size={13} weight="semibold" letterSpacing={1} textCase="upper">Loved by teams everywhere</Text>
    <Text color="#0A2540" size={40} weight="bold" textAlign="center" letterSpacing={-0.5}>What our customers say</Text>
  </Frame>
  <Frame name="TestimonialsGrid" w="fill" flex="row" gap={24} px={24} items="stretch">
    <Frame name="TestimonialA" grow={1} flex="col" gap={24} bg="#FFFFFF" rounded={16} p={32} stroke="#E3E8EE" strokeWidth={1}>
      <Icon name="lucide:quote" size={24} color="#635BFF" />
      <Text color="#0A2540" size={17} lineHeight={28} grow={1} w="fill">We replaced three tools with one platform. Our team finally has a single source of truth, and velocity is up 40%.</Text>
      <Frame flex="row" gap={12} items="center">
        <Ellipse w={40} h={40} bg="#635BFF" />
        <Frame flex="col" gap={2} grow={1}>
          <Text color="#0A2540" size={14} weight="semibold">Sarah Chen</Text>
          <Text color="#425466" size={12}>VP Engineering · Ramp</Text>
        </Frame>
      </Frame>
    </Frame>
    <Frame name="TestimonialB" grow={1} flex="col" gap={24} bg="#FFFFFF" rounded={16} p={32} stroke="#E3E8EE" strokeWidth={1}>
      <Icon name="lucide:quote" size={24} color="#635BFF" />
      <Text color="#0A2540" size={17} lineHeight={28} grow={1} w="fill">The best developer experience I've used in a decade. It gets out of the way and lets me ship.</Text>
      <Frame flex="row" gap={12} items="center">
        <Ellipse w={40} h={40} bg="#00D4FF" />
        <Frame flex="col" gap={2} grow={1}>
          <Text color="#0A2540" size={14} weight="semibold">Marcus Delgado</Text>
          <Text color="#425466" size={12}>Founder · Peek</Text>
        </Frame>
      </Frame>
    </Frame>
    <Frame name="TestimonialC" grow={1} flex="col" gap={24} bg="#FFFFFF" rounded={16} p={32} stroke="#E3E8EE" strokeWidth={1}>
      <Icon name="lucide:quote" size={24} color="#635BFF" />
      <Text color="#0A2540" size={17} lineHeight={28} grow={1} w="fill">Migration took one afternoon. Three months later we're still finding features that delight us.</Text>
      <Frame flex="row" gap={12} items="center">
        <Ellipse w={40} h={40} bg="#F5A623" />
        <Frame flex="col" gap={2} grow={1}>
          <Text color="#0A2540" size={14} weight="semibold">Priya Ramachandran</Text>
          <Text color="#425466" size={12}>CTO · Folio</Text>
        </Frame>
      </Frame>
    </Frame>
  </Frame>
</Frame>`
}

export const CTA_GRADIENT_CARD: Recipe = {
  name: 'cta-gradient-card',
  type: 'cta',
  style: 'vercel',
  description:
    'Large gradient CTA card. Bold headline, supporting sub, single primary button. Use before footer.',
  dimensions: '1200×320',
  palette: ['#0A0A0A', '#FFFFFF', '#0070F3', '#A1A1AA'],
  font: 'Inter',
  jsx: `<Frame name="CTASection" w={1200} h={320} bg="#0A0A0A" rounded={24} flex="col" items="center" justify="center" gap={24} px={48} overflow="hidden">
  <Frame name="CTAGlow" x={0} y={0} w={1200} h={320}>
    <Rectangle name="Glow1" x={200} y={80} w={800} h={200} bg="#0070F3" rotate={-6} blur={180} opacity={0.5} />
    <Rectangle name="Glow2" x={600} y={40} w={400} h={140} bg="#7928CA" rotate={8} blur={140} opacity={0.4} />
  </Frame>
  <Text color="#FFFFFF" size={48} weight="bold" textAlign="center" letterSpacing={-1} w={700}>Ship faster. Sleep better.</Text>
  <Text color="#A1A1AA" size={17} textAlign="center" lineHeight={26} w={560}>Start your 14-day free trial. No credit card required. Cancel anytime.</Text>
  <Frame name="CTAPrimary" h={48} px={24} bg="#FFFFFF" rounded={999} flex="row" items="center" gap={8}>
    <Text color="#0A0A0A" size={15} weight="semibold">Start free trial</Text>
    <Icon name="lucide:arrow-right" size={16} color="#0A0A0A" />
  </Frame>
</Frame>`
}

export const LOGO_CLOUD: Recipe = {
  name: 'logo-cloud-trusted',
  type: 'logo-cloud',
  style: 'minimal',
  description:
    'Social proof logo row. "Trusted by" label + 5-6 muted company names/marks. Place between hero and features.',
  dimensions: '1200×160',
  palette: ['#FFFFFF', '#425466', '#8792A2'],
  font: 'Inter',
  jsx: `<Frame name="LogoCloud" w={1200} h={160} bg="#FFFFFF" flex="col" items="center" justify="center" gap={24}>
  <Text color="#8792A2" size={12} weight="semibold" letterSpacing={2} textCase="upper">Trusted by teams at</Text>
  <Frame name="LogoRow" flex="row" gap={64} items="center">
    <Text color="#425466" size={22} weight="bold" letterSpacing={-0.5} opacity={0.7}>Ramp</Text>
    <Text color="#425466" size={22} weight="bold" letterSpacing={-0.5} opacity={0.7}>Vercel</Text>
    <Text color="#425466" size={22} weight="bold" letterSpacing={-0.5} opacity={0.7}>Notion</Text>
    <Text color="#425466" size={22} weight="bold" letterSpacing={-0.5} opacity={0.7}>Figma</Text>
    <Text color="#425466" size={22} weight="bold" letterSpacing={-0.5} opacity={0.7}>Stripe</Text>
    <Text color="#425466" size={22} weight="bold" letterSpacing={-0.5} opacity={0.7}>Linear</Text>
  </Frame>
</Frame>`
}

export const FINTECH_CARD: Recipe = {
  name: 'fintech-balance-card',
  type: 'card',
  style: 'fintech',
  description:
    'Mobile fintech balance card. Dark gradient, large balance, account info, action row. For banking/wallet apps.',
  dimensions: '350×200',
  palette: ['#0A1628', '#D4B87A', '#F5F3EE', '#8B94A6'],
  font: 'Inter',
  jsx: `<Frame name="BalanceCard" w={350} h={200} bg="#0A1628" rounded={20} flex="col" justify="between" p={24} overflow="hidden">
  <Frame name="CardGlow" x={220} y={-80} w={200} h={200}>
    <Ellipse w={200} h={200} bg="#D4B87A" blur={80} opacity={0.25} />
  </Frame>
  <Frame name="BalanceHeader" flex="row" items="start" justify="between">
    <Frame flex="col" gap={4}>
      <Text color="#8B94A6" size={12} weight="medium" letterSpacing={0.3}>Available balance</Text>
      <Frame flex="row" items="end" gap={4}>
        <Text color="#F5F3EE" size={32} weight="bold" letterSpacing={-0.5}>$12,438</Text>
        <Text color="#8B94A6" size={14} weight="medium" pb={6}>.52</Text>
      </Frame>
    </Frame>
    <Icon name="lucide:eye" size={18} color="#8B94A6" />
  </Frame>
  <Frame name="BalanceFooter" flex="row" items="center" justify="between">
    <Frame flex="col" gap={2}>
      <Text color="#8B94A6" size={10} letterSpacing={0.3}>•••• 4829</Text>
      <Text color="#F5F3EE" size={13} weight="medium">Checking</Text>
    </Frame>
    <Frame flex="row" gap={8}>
      <Frame w={36} h={36} bg="#13233E" rounded={18} flex="row" items="center" justify="center"><Icon name="lucide:arrow-up-right" size={16} color="#D4B87A" /></Frame>
      <Frame w={36} h={36} bg="#13233E" rounded={18} flex="row" items="center" justify="center"><Icon name="lucide:arrow-down-left" size={16} color="#D4B87A" /></Frame>
      <Frame w={36} h={36} bg="#13233E" rounded={18} flex="row" items="center" justify="center"><Icon name="lucide:more-horizontal" size={16} color="#F5F3EE" /></Frame>
    </Frame>
  </Frame>
</Frame>`
}

