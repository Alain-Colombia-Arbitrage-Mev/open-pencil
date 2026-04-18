import type { Recipe } from './design-recipes-data-a'

export const STATS_COUNTER_ROW: Recipe = {
  name: 'stats-counter-row',
  type: 'stats',
  style: 'minimal',
  description:
    'Big-number metrics row for landing pages (users, countries, uptime). 4 columns, giant numerals + label. Place under hero.',
  dimensions: '1200×180',
  palette: ['#FFFFFF', '#0A0A0A', '#71717A', '#0070F3'],
  font: 'Inter',
  jsx: `<Frame name="StatsCounters" w={1200} h={180} bg="#FFFFFF" flex="row" items="center" justify="between" px={64}>
  <Frame name="Counter1" flex="col" gap={8} items="start" grow={1}>
    <Text color="#0A0A0A" size={56} weight="bold" letterSpacing={-2}>2.4M+</Text>
    <Text color="#71717A" size={14} weight="medium">Active users worldwide</Text>
  </Frame>
  <Rectangle w={1} h={80} bg="#E4E4E7" />
  <Frame name="Counter2" flex="col" gap={8} items="start" grow={1} px={32}>
    <Text color="#0A0A0A" size={56} weight="bold" letterSpacing={-2}>180+</Text>
    <Text color="#71717A" size={14} weight="medium">Countries served</Text>
  </Frame>
  <Rectangle w={1} h={80} bg="#E4E4E7" />
  <Frame name="Counter3" flex="col" gap={8} items="start" grow={1} px={32}>
    <Text color="#0A0A0A" size={56} weight="bold" letterSpacing={-2}>99.99%</Text>
    <Text color="#71717A" size={14} weight="medium">Uptime last 12 months</Text>
  </Frame>
  <Rectangle w={1} h={80} bg="#E4E4E7" />
  <Frame name="Counter4" flex="col" gap={8} items="start" grow={1} px={32}>
    <Frame flex="row" gap={6} items="end">
      <Text color="#0A0A0A" size={56} weight="bold" letterSpacing={-2}>47ms</Text>
      <Frame pb={12} flex="row" items="center" gap={2}>
        <Icon name="lucide:trending-down" size={14} color="#10B981" />
        <Text color="#10B981" size={12} weight="semibold">-8%</Text>
      </Frame>
    </Frame>
    <Text color="#71717A" size={14} weight="medium">Average response time</Text>
  </Frame>
</Frame>`
}

export const ECOMMERCE_PRODUCT_CARD: Recipe = {
  name: 'ecommerce-product-card',
  type: 'card',
  style: 'minimal',
  description:
    'Product card for e-commerce grid: image placeholder, brand, name, price, rating, wishlist heart. 4-across grid-ready.',
  dimensions: '280×420',
  palette: ['#FFFFFF', '#1A1A1A', '#6B6B6B', '#F5F5F5', '#D4382C'],
  font: 'Inter',
  jsx: `<Frame name="ProductCard" w={280} flex="col" gap={12} bg="#FFFFFF">
  <Frame name="ProductImageWrap" w="fill" h={320} bg="#F5F5F5" rounded={12} overflow="hidden">
    <Rectangle name="ProductImage" w="fill" h="fill" bg="#EBEBEB" />
    <Frame name="WishlistBtn" x={240} y={12} w={32} h={32} bg="#FFFFFFE6" rounded={16} flex="row" items="center" justify="center">
      <Icon name="lucide:heart" size={16} color="#1A1A1A" />
    </Frame>
    <Frame name="BadgeNew" x={12} y={12} px={10} py={4} bg="#1A1A1A" rounded={4}>
      <Text color="#FFFFFF" size={10} weight="semibold" letterSpacing={0.5} textCase="upper">New</Text>
    </Frame>
  </Frame>
  <Frame name="ProductMeta" w="fill" flex="col" gap={4} px={2}>
    <Text color="#6B6B6B" size={11} weight="medium" letterSpacing={0.5} textCase="upper">Everyday Studio</Text>
    <Text color="#1A1A1A" size={15} weight="medium" maxLines={1} w="fill">Minimal Leather Tote Bag</Text>
    <Frame flex="row" items="center" justify="between" w="fill">
      <Text color="#1A1A1A" size={16} weight="semibold">$148</Text>
      <Frame flex="row" gap={4} items="center">
        <Icon name="lucide:star" size={12} color="#1A1A1A" />
        <Text color="#1A1A1A" size={12} weight="medium">4.8</Text>
        <Text color="#6B6B6B" size={12}>(214)</Text>
      </Frame>
    </Frame>
  </Frame>
</Frame>`
}

export const MODAL_CONFIRM_DESTRUCTIVE: Recipe = {
  name: 'modal-confirm-destructive',
  type: 'card',
  style: 'minimal',
  description:
    'Confirmation modal for destructive actions. Warning icon, clear title, explanation, cancel + destructive CTA buttons.',
  dimensions: '480×280',
  palette: ['#FFFFFF', '#0A0A0A', '#71717A', '#EF4444', '#E4E4E7'],
  font: 'Inter',
  jsx: `<Frame name="ConfirmModal" w={480} bg="#FFFFFF" rounded={14} flex="col" shadow="0 25 50 #00000033" overflow="hidden">
  <Frame name="ModalBody" w="fill" flex="col" gap={16} p={28}>
    <Frame name="ModalIconWrap" w={40} h={40} bg="#EF444414" rounded={20} flex="row" items="center" justify="center">
      <Icon name="lucide:alert-triangle" size={20} color="#EF4444" />
    </Frame>
    <Frame flex="col" gap={6}>
      <Text color="#0A0A0A" size={18} weight="semibold">Delete workspace?</Text>
      <Text color="#71717A" size={14} lineHeight={22} w="fill">
        This will permanently delete the <Text color="#0A0A0A" size={14} weight="semibold">Acme Marketing</Text> workspace, including all projects and data. This action cannot be undone.
      </Text>
    </Frame>
  </Frame>
  <Frame name="ModalFooter" w="fill" h={64} bg="#F9FAFB" flex="row" items="center" justify="end" gap={8} px={20} stroke="#E4E4E7" strokeWidth={1} strokeAlign="INSIDE">
    <Frame name="CancelBtn" h={36} px={16} stroke="#E4E4E7" strokeWidth={1} rounded={6} bg="#FFFFFF" flex="row" items="center">
      <Text color="#0A0A0A" size={13} weight="medium">Cancel</Text>
    </Frame>
    <Frame name="DeleteBtn" h={36} px={16} bg="#EF4444" rounded={6} flex="row" items="center">
      <Text color="#FFFFFF" size={13} weight="semibold">Delete workspace</Text>
    </Frame>
  </Frame>
</Frame>`
}

export const EMPTY_STATE: Recipe = {
  name: 'empty-state',
  type: 'card',
  style: 'minimal',
  description:
    'Centered empty state for lists/tables with no data. Subtle illustration, title, short explanation, primary CTA.',
  dimensions: '560×360',
  palette: ['#FAFAFA', '#0A0A0A', '#71717A', '#0070F3', '#E4E4E7'],
  font: 'Inter',
  jsx: `<Frame name="EmptyState" w={560} h={360} flex="col" items="center" justify="center" gap={24} bg="#FAFAFA" rounded={12}>
  <Frame name="EmptyIllustration" w={96} h={96} bg="#FFFFFF" rounded={48} stroke="#E4E4E7" strokeWidth={1} flex="row" items="center" justify="center">
    <Icon name="lucide:inbox" size={40} color="#71717A" />
  </Frame>
  <Frame flex="col" gap={8} items="center">
    <Text color="#0A0A0A" size={18} weight="semibold">No projects yet</Text>
    <Text color="#71717A" size={14} textAlign="center" lineHeight={22} w={360}>
      Create your first project to start collaborating with your team. You can always rename or delete it later.
    </Text>
  </Frame>
  <Frame name="EmptyCTA" h={40} px={20} bg="#0070F3" rounded={8} flex="row" items="center" gap={6}>
    <Icon name="lucide:plus" size={14} color="#FFFFFF" />
    <Text color="#FFFFFF" size={14} weight="semibold">New project</Text>
  </Frame>
</Frame>`
}

export const DASHBOARD_ACTIVITY_FEED: Recipe = {
  name: 'dashboard-activity-feed',
  type: 'dashboard',
  style: 'linear',
  description:
    'Right-side activity feed card for dashboards. Header, filter chips, timestamped events with avatars. Real product usage.',
  dimensions: '380×560',
  palette: ['#FFFFFF', '#0A0A0A', '#71717A', '#5E6AD2', '#F4F4F5'],
  font: 'Inter',
  jsx: `<Frame name="ActivityFeed" w={380} h={560} bg="#FFFFFF" rounded={12} stroke="#F4F4F5" strokeWidth={1} flex="col">
  <Frame name="FeedHeader" w="fill" flex="row" items="center" justify="between" px={20} py={16} stroke="#F4F4F5" strokeWidth={1} strokeAlign="INSIDE">
    <Frame flex="col" gap={2}>
      <Text color="#0A0A0A" size={15} weight="semibold">Activity</Text>
      <Text color="#71717A" size={12}>Last 24 hours</Text>
    </Frame>
    <Icon name="lucide:more-horizontal" size={16} color="#71717A" />
  </Frame>
  <Frame name="FeedFilters" w="fill" flex="row" items="center" gap={6} px={20} py={12} stroke="#F4F4F5" strokeWidth={1} strokeAlign="INSIDE">
    <Frame px={10} py={4} bg="#0A0A0A" rounded={999}><Text color="#FFFFFF" size={11} weight="semibold">All</Text></Frame>
    <Frame px={10} py={4} stroke="#E4E4E7" strokeWidth={1} rounded={999}><Text color="#71717A" size={11} weight="medium">Mentions</Text></Frame>
    <Frame px={10} py={4} stroke="#E4E4E7" strokeWidth={1} rounded={999}><Text color="#71717A" size={11} weight="medium">Assigned</Text></Frame>
  </Frame>
  <Frame name="FeedList" w="fill" grow={1} flex="col">
    <Frame name="Event1" w="fill" flex="row" gap={12} p={16} stroke="#F4F4F5" strokeWidth={1} strokeAlign="INSIDE" items="start">
      <Ellipse w={32} h={32} bg="#5E6AD2" />
      <Frame flex="col" gap={4} grow={1}>
        <Text color="#0A0A0A" size={13} lineHeight={20} w="fill">
          <Text color="#0A0A0A" size={13} weight="semibold">Maya Chen</Text> merged <Text color="#5E6AD2" size={13} weight="medium">#1847 Refine onboarding copy</Text>
        </Text>
        <Text color="#71717A" size={11}>2 minutes ago</Text>
      </Frame>
    </Frame>
    <Frame name="Event2" w="fill" flex="row" gap={12} p={16} stroke="#F4F4F5" strokeWidth={1} strokeAlign="INSIDE" items="start">
      <Ellipse w={32} h={32} bg="#00C7B7" />
      <Frame flex="col" gap={4} grow={1}>
        <Text color="#0A0A0A" size={13} lineHeight={20} w="fill">
          <Text color="#0A0A0A" size={13} weight="semibold">Dan Kim</Text> commented on <Text color="#5E6AD2" size={13} weight="medium">Design review · Payments v2</Text>
        </Text>
        <Text color="#71717A" size={11}>12 minutes ago</Text>
      </Frame>
    </Frame>
    <Frame name="Event3" w="fill" flex="row" gap={12} p={16} stroke="#F4F4F5" strokeWidth={1} strokeAlign="INSIDE" items="start">
      <Ellipse w={32} h={32} bg="#F5A623" />
      <Frame flex="col" gap={4} grow={1}>
        <Text color="#0A0A0A" size={13} lineHeight={20} w="fill">
          <Text color="#0A0A0A" size={13} weight="semibold">Priya R.</Text> created <Text color="#5E6AD2" size={13} weight="medium">Q2 OKRs</Text> in Goals
        </Text>
        <Text color="#71717A" size={11}>1 hour ago</Text>
      </Frame>
    </Frame>
    <Frame name="Event4" w="fill" flex="row" gap={12} p={16} stroke="#F4F4F5" strokeWidth={1} strokeAlign="INSIDE" items="start">
      <Ellipse w={32} h={32} bg="#EF4444" />
      <Frame flex="col" gap={4} grow={1}>
        <Text color="#0A0A0A" size={13} lineHeight={20} w="fill">
          <Text color="#0A0A0A" size={13} weight="semibold">Marcus D.</Text> assigned you to <Text color="#5E6AD2" size={13} weight="medium">Prep customer call · Stripe</Text>
        </Text>
        <Text color="#71717A" size={11}>3 hours ago</Text>
      </Frame>
    </Frame>
    <Frame name="Event5" w="fill" flex="row" gap={12} p={16} items="start">
      <Ellipse w={32} h={32} bg="#A855F7" />
      <Frame flex="col" gap={4} grow={1}>
        <Text color="#0A0A0A" size={13} lineHeight={20} w="fill">
          <Text color="#0A0A0A" size={13} weight="semibold">Sarah C.</Text> shipped <Text color="#5E6AD2" size={13} weight="medium">v2.4.0 to production</Text>
        </Text>
        <Text color="#71717A" size={11}>5 hours ago</Text>
      </Frame>
    </Frame>
  </Frame>
  <Frame name="FeedFooter" w="fill" h={44} flex="row" items="center" justify="center" stroke="#F4F4F5" strokeWidth={1} strokeAlign="INSIDE">
    <Text color="#5E6AD2" size={12} weight="semibold">View all activity</Text>
  </Frame>
</Frame>`
}

export const CTA_NEWSLETTER_BANNER: Recipe = {
  name: 'cta-newsletter-banner',
  type: 'cta',
  style: 'minimal',
  description:
    'Full-width newsletter signup strip with left headline/sub and right email input + submit. Place before footer.',
  dimensions: '1200×200',
  palette: ['#FAFAFA', '#0A0A0A', '#71717A', '#0A0A0A', '#E4E4E7'],
  font: 'Inter',
  jsx: `<Frame name="NewsletterBanner" w={1200} h={200} bg="#FAFAFA" flex="row" items="center" justify="between" px={64} gap={48} rounded={16}>
  <Frame name="NewsletterCopy" flex="col" gap={8} grow={1}>
    <Text color="#0A0A0A" size={28} weight="bold" letterSpacing={-0.5}>Get product updates</Text>
    <Text color="#71717A" size={15} lineHeight={22} w="fill">One email per month. New features, case studies, no fluff. Unsubscribe anytime.</Text>
  </Frame>
  <Frame name="NewsletterForm" flex="row" gap={8} items="center" w={420}>
    <Frame grow={1} h={48} bg="#FFFFFF" stroke="#E4E4E7" strokeWidth={1} rounded={8} flex="row" items="center" px={16}>
      <Text color="#A1A1AA" size={14}>you@company.com</Text>
    </Frame>
    <Frame h={48} px={20} bg="#0A0A0A" rounded={8} flex="row" items="center">
      <Text color="#FAFAFA" size={14} weight="semibold">Subscribe</Text>
    </Frame>
  </Frame>
</Frame>`
}

export const MOBILE_ONBOARDING_STEP: Recipe = {
  name: 'mobile-onboarding-step',
  type: 'mobile',
  style: 'apple',
  description:
    'Mobile onboarding screen: top skip button, hero illustration area, title + description, dots indicator, dual-size CTA + secondary.',
  dimensions: '390×844',
  palette: ['#FFFFFF', '#1D1D1F', '#86868B', '#0071E3', '#F5F5F7'],
  font: 'Inter',
  jsx: `<Frame name="OnboardingScreen" w={390} h={844} bg="#FFFFFF" flex="col">
  <Frame name="StatusBar" w="fill" h={47} flex="row" items="center" justify="between" px={20}>
    <Text color="#1D1D1F" size={17} weight="semibold">9:41</Text>
    <Frame flex="row" gap={5} items="center">
      <Icon name="lucide:signal" size={16} color="#1D1D1F" />
      <Icon name="lucide:wifi" size={16} color="#1D1D1F" />
      <Icon name="lucide:battery-full" size={18} color="#1D1D1F" />
    </Frame>
  </Frame>
  <Frame name="SkipRow" w="fill" h={44} flex="row" items="center" justify="end" px={20}>
    <Text color="#86868B" size={15} weight="medium">Skip</Text>
  </Frame>
  <Frame name="IllustrationArea" w="fill" grow={1} flex="row" items="center" justify="center" px={40}>
    <Frame w={280} h={280} bg="#F5F5F7" rounded={140} flex="row" items="center" justify="center">
      <Icon name="lucide:sparkles" size={120} color="#0071E3" />
    </Frame>
  </Frame>
  <Frame name="OnboardingContent" w="fill" flex="col" gap={16} items="center" px={24}>
    <Text color="#1D1D1F" size={28} weight="bold" letterSpacing={-0.5} textAlign="center" w="fill">
      Designed for the way you work
    </Text>
    <Text color="#86868B" size={16} textAlign="center" lineHeight={24} w="fill">
      Smart suggestions learn your habits and adapt. The more you use it, the better it gets.
    </Text>
  </Frame>
  <Frame name="DotsIndicator" w="fill" flex="row" items="center" justify="center" gap={6} py={24}>
    <Rectangle w={24} h={6} bg="#0071E3" rounded={3} />
    <Ellipse w={6} h={6} bg="#D2D2D7" />
    <Ellipse w={6} h={6} bg="#D2D2D7" />
  </Frame>
  <Frame name="OnboardingActions" w="fill" flex="col" gap={12} px={20} pb={32}>
    <Frame name="NextBtn" w="fill" h={52} bg="#0071E3" rounded={14} flex="row" items="center" justify="center">
      <Text color="#FFFFFF" size={17} weight="semibold">Continue</Text>
    </Frame>
  </Frame>
</Frame>`
}

export const TEAM_GRID_4: Recipe = {
  name: 'team-grid-4',
  type: 'features',
  style: 'minimal',
  description:
    'Team section with 4 member cards: photo placeholder, name, role, short bio, social row. Common on About pages.',
  dimensions: '1200×440',
  palette: ['#FFFFFF', '#0A0A0A', '#71717A', '#F4F4F5', '#0070F3'],
  font: 'Inter',
  jsx: `<Frame name="TeamSection" w={1200} flex="col" gap={48} py={96} px={32} bg="#FFFFFF" items="center">
  <Frame name="TeamHeader" flex="col" gap={12} items="center" w={640}>
    <Text color="#0070F3" size={13} weight="semibold" letterSpacing={1} textCase="upper">The team</Text>
    <Text color="#0A0A0A" size={40} weight="bold" textAlign="center" letterSpacing={-1}>Built by a small team with deep expertise</Text>
  </Frame>
  <Frame name="TeamGrid" w="fill" flex="row" gap={24} items="stretch">
    <Frame name="MemberA" grow={1} flex="col" gap={16} bg="#FFFFFF">
      <Rectangle name="MemberAPhoto" w="fill" h={280} bg="#F4F4F5" rounded={12} />
      <Frame flex="col" gap={6}>
        <Text color="#0A0A0A" size={16} weight="semibold">Sarah Chen</Text>
        <Text color="#0070F3" size={12} weight="medium" letterSpacing={0.3} textCase="upper">CEO & Co-founder</Text>
        <Text color="#71717A" size={13} lineHeight={20}>Previously VP Product at Ramp. Stanford CS.</Text>
        <Frame flex="row" gap={10} items="center">
          <Icon name="lucide:linkedin" size={14} color="#71717A" />
          <Icon name="lucide:twitter" size={14} color="#71717A" />
        </Frame>
      </Frame>
    </Frame>
    <Frame name="MemberB" grow={1} flex="col" gap={16} bg="#FFFFFF">
      <Rectangle name="MemberBPhoto" w="fill" h={280} bg="#F4F4F5" rounded={12} />
      <Frame flex="col" gap={6}>
        <Text color="#0A0A0A" size={16} weight="semibold">Marcus Delgado</Text>
        <Text color="#0070F3" size={12} weight="medium" letterSpacing={0.3} textCase="upper">CTO & Co-founder</Text>
        <Text color="#71717A" size={13} lineHeight={20}>Early engineer at Figma. Built the rendering engine.</Text>
        <Frame flex="row" gap={10} items="center">
          <Icon name="lucide:github" size={14} color="#71717A" />
          <Icon name="lucide:twitter" size={14} color="#71717A" />
        </Frame>
      </Frame>
    </Frame>
    <Frame name="MemberC" grow={1} flex="col" gap={16} bg="#FFFFFF">
      <Rectangle name="MemberCPhoto" w="fill" h={280} bg="#F4F4F5" rounded={12} />
      <Frame flex="col" gap={6}>
        <Text color="#0A0A0A" size={16} weight="semibold">Priya Ramachandran</Text>
        <Text color="#0070F3" size={12} weight="medium" letterSpacing={0.3} textCase="upper">Head of Design</Text>
        <Text color="#71717A" size={13} lineHeight={20}>Design lead at Linear. Obsessed with craft.</Text>
        <Frame flex="row" gap={10} items="center">
          <Icon name="lucide:dribbble" size={14} color="#71717A" />
          <Icon name="lucide:linkedin" size={14} color="#71717A" />
        </Frame>
      </Frame>
    </Frame>
    <Frame name="MemberD" grow={1} flex="col" gap={16} bg="#FFFFFF">
      <Rectangle name="MemberDPhoto" w="fill" h={280} bg="#F4F4F5" rounded={12} />
      <Frame flex="col" gap={6}>
        <Text color="#0A0A0A" size={16} weight="semibold">Dan Kim</Text>
        <Text color="#0070F3" size={12} weight="medium" letterSpacing={0.3} textCase="upper">Head of Engineering</Text>
        <Text color="#71717A" size={13} lineHeight={20}>Infra at Vercel. Scaled to 10B req/day.</Text>
        <Frame flex="row" gap={10} items="center">
          <Icon name="lucide:github" size={14} color="#71717A" />
          <Icon name="lucide:linkedin" size={14} color="#71717A" />
        </Frame>
      </Frame>
    </Frame>
  </Frame>
</Frame>`
}
