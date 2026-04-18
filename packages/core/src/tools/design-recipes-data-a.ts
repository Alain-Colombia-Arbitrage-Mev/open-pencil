export type RecipeType =
  | 'hero'
  | 'pricing'
  | 'features'
  | 'nav'
  | 'footer'
  | 'cta'
  | 'testimonial'
  | 'dashboard'
  | 'mobile'
  | 'card'
  | 'stats'
  | 'logo-cloud'
  | 'content'
  | 'product'

export type RecipeStyle =
  | 'stripe'
  | 'linear'
  | 'notion'
  | 'vercel'
  | 'apple'
  | 'editorial'
  | 'playful'
  | 'brutalist'
  | 'minimal'
  | 'fintech'
  | 'glassmorphism'
  | 'claymorphism'
  | 'neon'
  | 'aurora'
  | '3d'
  | 'retro'
  | 'luxury'
  | 'noise'

export interface Recipe {
  name: string
  type: RecipeType
  style: RecipeStyle
  description: string
  dimensions: string
  palette: string[]
  font: string
  jsx: string
}

export const HERO_STRIPE_GRADIENT: Recipe = {
  name: 'hero-stripe-gradient',
  type: 'hero',
  style: 'stripe',
  description:
    'Payments/fintech style hero. Gradient sky background, centered oversized display type, dual CTAs. Best for SaaS landing pages.',
  dimensions: '1440×680',
  palette: ['#0A2540', '#635BFF', '#00D4FF', '#FFFFFF', '#ADBDCC'],
  font: 'Inter',
  jsx: `<Frame name="HeroSection" w={1440} h={680} bg="#0A2540" flex="col" items="center" justify="center" px={48}>
  <Frame name="HeroGradientOverlay" x={0} y={0} w={1440} h={680} opacity={0.6}>
    <Rectangle name="GradientBand1" x={0} y={120} w={1440} h={200} bg="#635BFF" rotate={-8} blur={120} opacity={0.4} />
    <Rectangle name="GradientBand2" x={200} y={280} w={1440} h={160} bg="#00D4FF" rotate={-4} blur={100} opacity={0.35} />
  </Frame>
  <Frame name="HeroContent" flex="col" items="center" gap={32} w={900}>
    <Frame name="HeroEyebrow" flex="row" items="center" gap={8} px={12} py={6} bg="#FFFFFF14" rounded={999}>
      <Ellipse w={6} h={6} bg="#00D4FF" />
      <Text color="#ADBDCC" size={13} weight="medium" letterSpacing={0.5}>Introducing Payments 2.0</Text>
    </Frame>
    <Text color="#FFFFFF" size={72} weight="bold" textAlign="center" lineHeight={78} letterSpacing={-2} font="Inter" w="fill">
      Financial infrastructure for the internet
    </Text>
    <Text color="#ADBDCC" size={20} textAlign="center" lineHeight={30} w={680}>
      Millions of companies of all sizes use our platform online and in person to accept payments, send payouts, and automate financial processes.
    </Text>
    <Frame name="HeroCTAs" flex="row" gap={12} items="center">
      <Frame name="CTAPrimary" h={48} px={24} bg="#635BFF" rounded={24} flex="row" items="center" gap={8}>
        <Text color="#FFFFFF" size={15} weight="medium">Start now</Text>
        <Icon name="lucide:arrow-right" size={16} color="#FFFFFF" />
      </Frame>
      <Frame name="CTASecondary" h={48} px={24} bg="#FFFFFF1A" rounded={24} flex="row" items="center" gap={8}>
        <Text color="#FFFFFF" size={15} weight="medium">Contact sales</Text>
      </Frame>
    </Frame>
  </Frame>
</Frame>`
}

export const HERO_LINEAR_DARK: Recipe = {
  name: 'hero-linear-dark-minimal',
  type: 'hero',
  style: 'linear',
  description:
    'Ultra-dark minimalist hero. Huge display, tight tracking, single accent CTA. Best for dev tools, productivity, modern SaaS.',
  dimensions: '1440×720',
  palette: ['#08090A', '#5E6AD2', '#F4F5F8', '#8A8F98', '#1F2024'],
  font: 'Inter',
  jsx: `<Frame name="HeroSection" w={1440} h={720} bg="#08090A" flex="col" items="center" justify="center" px={48} gap={40}>
  <Frame name="HeroBadge" flex="row" items="center" gap={8} px={12} py={6} bg="#1F2024" rounded={999} stroke="#FFFFFF0D" strokeWidth={1}>
    <Rectangle w={8} h={8} bg="#5E6AD2" rounded={2} />
    <Text color="#F4F5F8" size={13} weight="medium">Linear 2026 · Out now</Text>
    <Icon name="lucide:arrow-right" size={12} color="#8A8F98" />
  </Frame>
  <Text color="#F4F5F8" size={96} weight="bold" textAlign="center" lineHeight={96} letterSpacing={-4} w={1100}>
    Linear is a purpose-built tool for planning and building products
  </Text>
  <Text color="#8A8F98" size={20} textAlign="center" lineHeight={32} w={640}>
    Meet the system for modern software development. Streamline issues, projects, and product roadmaps.
  </Text>
  <Frame name="HeroCTAs" flex="row" gap={12} items="center">
    <Frame name="CTAPrimary" h={44} px={20} bg="#F4F5F8" rounded={8} flex="row" items="center" gap={8}>
      <Text color="#08090A" size={14} weight="medium">Start building</Text>
      <Icon name="lucide:arrow-up-right" size={14} color="#08090A" />
    </Frame>
    <Frame name="CTASecondary" h={44} px={20} flex="row" items="center" gap={8}>
      <Text color="#F4F5F8" size={14} weight="medium">Introducing Linear Agents</Text>
    </Frame>
  </Frame>
</Frame>`
}

export const HERO_EDITORIAL_SPLIT: Recipe = {
  name: 'hero-editorial-split',
  type: 'hero',
  style: 'editorial',
  description:
    'Magazine/editorial split hero. Left: serif display text with tight leading. Right: large image placeholder. Best for lifestyle, news, luxury, creator brands.',
  dimensions: '1440×640',
  palette: ['#F7F3EE', '#0F1923', '#C4A57B', '#5C5044'],
  font: 'Playfair Display',
  jsx: `<Frame name="HeroSection" w={1440} h={640} bg="#F7F3EE" flex="row" items="center" px={64} gap={64}>
  <Frame name="HeroContent" flex="col" gap={32} w={560}>
    <Frame name="HeroCategory" flex="row" items="center" gap={12}>
      <Rectangle w={32} h={2} bg="#C4A57B" />
      <Text color="#5C5044" size={12} weight="medium" letterSpacing={2} textCase="upper">The Journal · Issue 47</Text>
    </Frame>
    <Text color="#0F1923" size={64} weight="bold" lineHeight={68} letterSpacing={-1} font="Playfair Display" w="fill">
      The quiet return of craftsmanship
    </Text>
    <Text color="#5C5044" size={18} lineHeight={30} w="fill" font="Georgia">
      In a world of algorithmic sameness, a new generation of makers is choosing patience over scale. We spent six months with five of them.
    </Text>
    <Frame name="HeroMeta" flex="row" items="center" gap={16}>
      <Ellipse w={40} h={40} bg="#C4A57B" />
      <Frame flex="col" gap={2}>
        <Text color="#0F1923" size={14} weight="medium">Ana Torres</Text>
        <Text color="#5C5044" size={12}>Editor-in-chief · 12 min read</Text>
      </Frame>
    </Frame>
  </Frame>
  <Rectangle name="HeroImage" grow={1} h={512} bg="#E0D4C8" rounded={4} />
</Frame>`
}

export const HERO_MOBILE_APP: Recipe = {
  name: 'hero-mobile-app',
  type: 'mobile',
  style: 'apple',
  description:
    'Apple-style mobile app hero screen. Status bar + large title + hero visual + dual CTAs stacked. 390×844 iOS dimensions.',
  dimensions: '390×844',
  palette: ['#FFFFFF', '#1D1D1F', '#F5F5F7', '#0071E3'],
  font: 'Inter',
  jsx: `<Frame name="MobileHeroScreen" w={390} h={844} bg="#FFFFFF" flex="col">
  <Frame name="StatusBar" w="fill" h={47} flex="row" items="center" justify="between" px={20}>
    <Text color="#1D1D1F" size={17} weight="semibold">9:41</Text>
    <Frame flex="row" gap={5} items="center">
      <Icon name="lucide:signal" size={16} color="#1D1D1F" />
      <Icon name="lucide:wifi" size={16} color="#1D1D1F" />
      <Icon name="lucide:battery-full" size={18} color="#1D1D1F" />
    </Frame>
  </Frame>
  <Frame name="TopBar" w="fill" h={44} flex="row" items="center" justify="between" px={20}>
    <Icon name="lucide:chevron-left" size={24} color="#0071E3" />
    <Frame flex="row" gap={20} items="center">
      <Icon name="lucide:search" size={22} color="#0071E3" />
      <Icon name="lucide:more-horizontal" size={22} color="#0071E3" />
    </Frame>
  </Frame>
  <Frame name="HeroContent" w="fill" flex="col" gap={24} px={20} pt={32} grow={1}>
    <Text color="#1D1D1F" size={34} weight="bold" letterSpacing={-1} lineHeight={40}>Your day, perfectly planned.</Text>
    <Rectangle name="HeroVisual" w="fill" h={320} bg="#F5F5F7" rounded={24} />
    <Text color="#86868B" size={17} lineHeight={24}>Let intelligence design your ideal schedule and keep everything in sync.</Text>
  </Frame>
  <Frame name="CTASection" w="fill" flex="col" gap={8} px={20} pb={32}>
    <Frame name="CTAPrimary" w="fill" h={52} bg="#0071E3" rounded={14} flex="row" items="center" justify="center">
      <Text color="#FFFFFF" size={17} weight="semibold">Get started</Text>
    </Frame>
    <Frame name="CTASecondary" w="fill" h={52} flex="row" items="center" justify="center">
      <Text color="#0071E3" size={17} weight="medium">Learn more</Text>
    </Frame>
  </Frame>
</Frame>`
}

export const PRICING_3_TIER: Recipe = {
  name: 'pricing-3-tier-highlight',
  type: 'pricing',
  style: 'stripe',
  description:
    'Classic 3-tier pricing with middle highlighted. Each card: name, price, 4-6 features with checkmarks, CTA. Used by Stripe, Linear, Notion, Vercel.',
  dimensions: '1200×620',
  palette: ['#FAFAFA', '#0A2540', '#635BFF', '#697386', '#E3E8EE'],
  font: 'Inter',
  jsx: `<Frame name="PricingSection" w={1200} flex="col" gap={48} py={96} bg="#FAFAFA" items="center">
  <Frame name="PricingHeader" flex="col" gap={12} items="center" w={600}>
    <Text color="#635BFF" size={13} weight="semibold" letterSpacing={1} textCase="upper">Pricing</Text>
    <Text color="#0A2540" size={48} weight="bold" textAlign="center" letterSpacing={-1}>Choose the plan that fits</Text>
    <Text color="#697386" size={17} textAlign="center" lineHeight={26}>Start free, scale as you grow. Cancel anytime.</Text>
  </Frame>
  <Frame name="PricingGrid" flex="row" gap={24} items="stretch" w="fill" px={24}>
    <Frame name="TierStarter" grow={1} flex="col" gap={24} bg="#FFFFFF" rounded={16} p={32} stroke="#E3E8EE" strokeWidth={1}>
      <Frame flex="col" gap={8}>
        <Text color="#0A2540" size={18} weight="semibold">Starter</Text>
        <Text color="#697386" size={14} lineHeight={22}>For individuals getting started.</Text>
      </Frame>
      <Frame flex="row" items="end" gap={4}>
        <Text color="#0A2540" size={48} weight="bold" letterSpacing={-1}>$0</Text>
        <Text color="#697386" size={14} weight="medium">/mo</Text>
      </Frame>
      <Frame flex="col" gap={12} grow={1}>
        <Frame flex="row" gap={10} items="center"><Icon name="lucide:check" size={16} color="#635BFF" /><Text color="#0A2540" size={14}>Up to 3 projects</Text></Frame>
        <Frame flex="row" gap={10} items="center"><Icon name="lucide:check" size={16} color="#635BFF" /><Text color="#0A2540" size={14}>Community support</Text></Frame>
        <Frame flex="row" gap={10} items="center"><Icon name="lucide:check" size={16} color="#635BFF" /><Text color="#0A2540" size={14}>Basic analytics</Text></Frame>
      </Frame>
      <Frame name="StarterCTA" w="fill" h={44} bg="#FFFFFF" stroke="#E3E8EE" strokeWidth={1} rounded={8} flex="row" items="center" justify="center">
        <Text color="#0A2540" size={14} weight="medium">Get started free</Text>
      </Frame>
    </Frame>
    <Frame name="TierPro" grow={1} flex="col" gap={24} bg="#0A2540" rounded={16} p={32}>
      <Frame flex="row" items="center" justify="between">
        <Text color="#FFFFFF" size={18} weight="semibold">Pro</Text>
        <Frame px={10} py={4} bg="#635BFF" rounded={999}><Text color="#FFFFFF" size={11} weight="semibold" textCase="upper" letterSpacing={0.5}>Popular</Text></Frame>
      </Frame>
      <Frame flex="row" items="end" gap={4}>
        <Text color="#FFFFFF" size={48} weight="bold" letterSpacing={-1}>$24</Text>
        <Text color="#ADBDCC" size={14} weight="medium">/mo</Text>
      </Frame>
      <Frame flex="col" gap={12} grow={1}>
        <Frame flex="row" gap={10} items="center"><Icon name="lucide:check" size={16} color="#00D4FF" /><Text color="#FFFFFF" size={14}>Unlimited projects</Text></Frame>
        <Frame flex="row" gap={10} items="center"><Icon name="lucide:check" size={16} color="#00D4FF" /><Text color="#FFFFFF" size={14}>Priority support</Text></Frame>
        <Frame flex="row" gap={10} items="center"><Icon name="lucide:check" size={16} color="#00D4FF" /><Text color="#FFFFFF" size={14}>Advanced analytics</Text></Frame>
        <Frame flex="row" gap={10} items="center"><Icon name="lucide:check" size={16} color="#00D4FF" /><Text color="#FFFFFF" size={14}>Custom integrations</Text></Frame>
      </Frame>
      <Frame name="ProCTA" w="fill" h={44} bg="#635BFF" rounded={8} flex="row" items="center" justify="center">
        <Text color="#FFFFFF" size={14} weight="semibold">Start 14-day trial</Text>
      </Frame>
    </Frame>
    <Frame name="TierEnterprise" grow={1} flex="col" gap={24} bg="#FFFFFF" rounded={16} p={32} stroke="#E3E8EE" strokeWidth={1}>
      <Frame flex="col" gap={8}>
        <Text color="#0A2540" size={18} weight="semibold">Enterprise</Text>
        <Text color="#697386" size={14} lineHeight={22}>Custom for large teams.</Text>
      </Frame>
      <Frame flex="row" items="end" gap={4}>
        <Text color="#0A2540" size={40} weight="bold" letterSpacing={-1}>Custom</Text>
      </Frame>
      <Frame flex="col" gap={12} grow={1}>
        <Frame flex="row" gap={10} items="center"><Icon name="lucide:check" size={16} color="#635BFF" /><Text color="#0A2540" size={14}>Everything in Pro</Text></Frame>
        <Frame flex="row" gap={10} items="center"><Icon name="lucide:check" size={16} color="#635BFF" /><Text color="#0A2540" size={14}>Dedicated manager</Text></Frame>
        <Frame flex="row" gap={10} items="center"><Icon name="lucide:check" size={16} color="#635BFF" /><Text color="#0A2540" size={14}>SLA + SSO</Text></Frame>
        <Frame flex="row" gap={10} items="center"><Icon name="lucide:check" size={16} color="#635BFF" /><Text color="#0A2540" size={14}>Audit logs</Text></Frame>
      </Frame>
      <Frame name="EnterpriseCTA" w="fill" h={44} bg="#FFFFFF" stroke="#E3E8EE" strokeWidth={1} rounded={8} flex="row" items="center" justify="center">
        <Text color="#0A2540" size={14} weight="medium">Contact sales</Text>
      </Frame>
    </Frame>
  </Frame>
</Frame>`
}

export const FEATURES_BENTO: Recipe = {
  name: 'features-bento-grid',
  type: 'features',
  style: 'vercel',
  description:
    'Bento grid of 4-6 features with varied cell sizes. Large featured cell top-left, smaller cells surrounding. Ideal for showcasing product capabilities.',
  dimensions: '1200×700',
  palette: ['#FAFAFA', '#0A0A0A', '#F4F4F5', '#0070F3'],
  font: 'Inter',
  jsx: `<Frame name="BentoSection" w={1200} flex="col" gap={48} py={96} bg="#FAFAFA" items="center">
  <Frame name="BentoHeader" flex="col" gap={12} items="center" w={640}>
    <Text color="#0A0A0A" size={48} weight="bold" textAlign="center" letterSpacing={-1}>Everything you need, nothing you don't</Text>
    <Text color="#71717A" size={18} textAlign="center" lineHeight={28}>A platform built for speed, ergonomics, and developer happiness.</Text>
  </Frame>
  <Frame name="BentoGrid" w="fill" flex="col" gap={16} px={24}>
    <Frame name="BentoRow1" w="fill" flex="row" gap={16} h={320}>
      <Frame name="BentoMain" grow={2} flex="col" gap={24} bg="#0A0A0A" rounded={16} p={32} overflow="hidden">
        <Frame flex="col" gap={8}>
          <Text color="#0070F3" size={12} weight="semibold" letterSpacing={1} textCase="upper">Edge network</Text>
          <Text color="#FFFFFF" size={32} weight="bold" letterSpacing={-0.5}>Serve from 300+ POPs</Text>
          <Text color="#A1A1AA" size={15} lineHeight={24} w={400}>Every request routes to the closest edge. Sub-50ms TTFB worldwide.</Text>
        </Frame>
        <Rectangle w="fill" grow={1} bg="#171717" rounded={12} />
      </Frame>
      <Frame name="BentoSide" grow={1} flex="col" gap={16} bg="#FFFFFF" rounded={16} p={24} stroke="#F4F4F5" strokeWidth={1}>
        <Frame w={48} h={48} bg="#0070F314" rounded={12} flex="row" items="center" justify="center"><Icon name="lucide:zap" size={24} color="#0070F3" /></Frame>
        <Frame flex="col" gap={6}>
          <Text color="#0A0A0A" size={18} weight="semibold">Instant builds</Text>
          <Text color="#71717A" size={14} lineHeight={22}>Ship to production in under 30 seconds with incremental builds.</Text>
        </Frame>
      </Frame>
    </Frame>
    <Frame name="BentoRow2" w="fill" flex="row" gap={16} h={220}>
      <Frame name="BentoB" grow={1} flex="col" gap={12} bg="#FFFFFF" rounded={16} p={24} stroke="#F4F4F5" strokeWidth={1}>
        <Icon name="lucide:shield-check" size={28} color="#0A0A0A" />
        <Text color="#0A0A0A" size={17} weight="semibold">Enterprise-ready</Text>
        <Text color="#71717A" size={13} lineHeight={20}>SOC 2, HIPAA, and custom SSO out of the box.</Text>
      </Frame>
      <Frame name="BentoC" grow={1} flex="col" gap={12} bg="#FFFFFF" rounded={16} p={24} stroke="#F4F4F5" strokeWidth={1}>
        <Icon name="lucide:git-branch" size={28} color="#0A0A0A" />
        <Text color="#0A0A0A" size={17} weight="semibold">Preview per PR</Text>
        <Text color="#71717A" size={13} lineHeight={20}>Automatic URLs for every branch, with comments.</Text>
      </Frame>
      <Frame name="BentoD" grow={1} flex="col" gap={12} bg="#FFFFFF" rounded={16} p={24} stroke="#F4F4F5" strokeWidth={1}>
        <Icon name="lucide:bar-chart-3" size={28} color="#0A0A0A" />
        <Text color="#0A0A0A" size={17} weight="semibold">Analytics built-in</Text>
        <Text color="#71717A" size={13} lineHeight={20}>Real-user monitoring. Web Vitals per route.</Text>
      </Frame>
    </Frame>
  </Frame>
</Frame>`
}

export const NAV_DARK_PRODUCT: Recipe = {
  name: 'nav-dark-product',
  type: 'nav',
  style: 'linear',
  description:
    'Dark top navigation for SaaS products. Logo + primary links + sign-in + accent CTA. Sticky-ready at 64h.',
  dimensions: '1440×64',
  palette: ['#08090A', '#F4F5F8', '#5E6AD2', '#8A8F98'],
  font: 'Inter',
  jsx: `<Frame name="NavBar" w={1440} h={64} bg="#08090A" flex="row" items="center" justify="between" px={24} stroke="#FFFFFF0D" strokeWidth={1} strokeAlign="INSIDE">
  <Frame name="NavLeft" flex="row" gap={32} items="center">
    <Frame flex="row" gap={8} items="center">
      <Rectangle w={20} h={20} bg="#5E6AD2" rounded={5} />
      <Text color="#F4F5F8" size={15} weight="semibold">Linear</Text>
    </Frame>
    <Frame name="NavLinks" flex="row" gap={20} items="center">
      <Text color="#8A8F98" size={13} weight="medium">Features</Text>
      <Text color="#8A8F98" size={13} weight="medium">Method</Text>
      <Text color="#8A8F98" size={13} weight="medium">Customers</Text>
      <Text color="#8A8F98" size={13} weight="medium">Changelog</Text>
      <Text color="#8A8F98" size={13} weight="medium">Pricing</Text>
      <Text color="#8A8F98" size={13} weight="medium">Company</Text>
    </Frame>
  </Frame>
  <Frame name="NavRight" flex="row" gap={12} items="center">
    <Text color="#F4F5F8" size={13} weight="medium">Log in</Text>
    <Frame h={32} px={14} bg="#F4F5F8" rounded={6} flex="row" items="center" gap={6}>
      <Text color="#08090A" size={13} weight="semibold">Sign up</Text>
      <Icon name="lucide:arrow-right" size={12} color="#08090A" />
    </Frame>
  </Frame>
</Frame>`
}

export const NAV_LIGHT_CTA: Recipe = {
  name: 'nav-light-cta',
  type: 'nav',
  style: 'stripe',
  description:
    'Light top navigation with logo, center links, right side login + CTA. Standard for marketing sites.',
  dimensions: '1440×72',
  palette: ['#FFFFFF', '#0A2540', '#635BFF', '#425466'],
  font: 'Inter',
  jsx: `<Frame name="NavBar" w={1440} h={72} bg="#FFFFFF" flex="row" items="center" justify="between" px={48} stroke="#E3E8EE" strokeWidth={1} strokeAlign="INSIDE">
  <Frame name="NavLogo" flex="row" gap={8} items="center">
    <Rectangle w={28} h={28} bg="#635BFF" rounded={6} />
    <Text color="#0A2540" size={20} weight="bold" letterSpacing={-0.5}>Stripe</Text>
  </Frame>
  <Frame name="NavLinks" flex="row" gap={32} items="center">
    <Text color="#425466" size={14} weight="medium">Products</Text>
    <Text color="#425466" size={14} weight="medium">Solutions</Text>
    <Text color="#425466" size={14} weight="medium">Developers</Text>
    <Text color="#425466" size={14} weight="medium">Resources</Text>
    <Text color="#425466" size={14} weight="medium">Pricing</Text>
  </Frame>
  <Frame name="NavActions" flex="row" gap={16} items="center">
    <Text color="#425466" size={14} weight="medium">Sign in</Text>
    <Frame h={36} px={16} bg="#635BFF" rounded={18} flex="row" items="center" gap={6}>
      <Text color="#FFFFFF" size={14} weight="semibold">Contact sales</Text>
      <Icon name="lucide:arrow-right" size={12} color="#FFFFFF" />
    </Frame>
  </Frame>
</Frame>`
}
