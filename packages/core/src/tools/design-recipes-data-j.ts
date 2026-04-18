import type { Recipe } from './design-recipes-data-a'

export const HERO_WITH_VIDEO: Recipe = {
  name: 'hero-with-video-placeholder',
  type: 'hero',
  style: 'stripe',
  description:
    'Split hero with left copy (eyebrow, title, sub, dual CTAs) and right video placeholder with play button overlay.',
  dimensions: '1440×620',
  palette: ['#FFFFFF', '#0A2540', '#635BFF', '#425466', '#F6F9FC'],
  font: 'Inter',
  jsx: `<Frame name="HeroWithVideo" w={1440} h={620} bg="#FFFFFF" flex="row" items="center" px={64} gap={64}>
  <Frame name="HeroCopy" w={580} flex="col" gap={24}>
    <Frame flex="row" gap={8} items="center">
      <Frame px={10} py={4} bg="#635BFF14" rounded={999}><Text color="#635BFF" size={11} weight="semibold" letterSpacing={0.5}>NEW · Season 3</Text></Frame>
      <Text color="#425466" size={13}>3 min watch</Text>
    </Frame>
    <Text color="#0A2540" size={56} weight="bold" letterSpacing={-2} lineHeight={62}>Watch how teams ship 3× faster with AI planning</Text>
    <Text color="#425466" size={18} lineHeight={28}>See how Ramp, Vercel, and 200+ teams replaced status meetings with live dashboards.</Text>
    <Frame flex="row" gap={12} items="center">
      <Frame h={48} px={22} bg="#0A2540" rounded={24} flex="row" items="center" gap={8}><Text color="#FFFFFF" size={14} weight="semibold">Start free trial</Text><Icon name="lucide:arrow-right" size={14} color="#FFFFFF" /></Frame>
      <Frame h={48} px={22} flex="row" items="center" gap={8}><Icon name="lucide:play-circle" size={18} color="#0A2540" /><Text color="#0A2540" size={14} weight="semibold">Watch demo</Text></Frame>
    </Frame>
  </Frame>
  <Frame name="HeroVideo" grow={1} h={440} bg="#F6F9FC" rounded={16} stroke="#E3E8EE" strokeWidth={1} flex="row" items="center" justify="center" overflow="hidden">
    <Rectangle x={0} y={0} w={780} h={440} bg="#0A2540" opacity={0.04} />
    <Frame flex="col" items="center" gap={16}>
      <Frame w={80} h={80} bg="#FFFFFF" rounded={40} flex="row" items="center" justify="center" shadow="0 20 40 #0000001F">
        <Icon name="lucide:play" size={32} color="#635BFF" />
      </Frame>
      <Frame flex="col" items="center" gap={4}>
        <Text color="#0A2540" size={14} weight="semibold">How Ramp replaced Jira</Text>
        <Text color="#425466" size={12}>2:48 · 412k views</Text>
      </Frame>
    </Frame>
  </Frame>
</Frame>`
}

export const BEFORE_AFTER_SECTION: Recipe = {
  name: 'before-after-comparison',
  type: 'features',
  style: 'minimal',
  description:
    'Split comparison: "Before" card with pain points (red icons) vs "After" card with benefits (green icons). Shows transformation.',
  dimensions: '1200×520',
  palette: ['#FFFFFF', '#0A0A0A', '#71717A', '#10B981', '#EF4444', '#F4F4F5'],
  font: 'Inter',
  jsx: `<Frame name="BeforeAfter" w={1200} flex="col" gap={48} py={96} px={32} bg="#FFFFFF" items="center">
  <Frame flex="col" gap={10} items="center" w={640}>
    <Text color="#71717A" size={13} weight="semibold" letterSpacing={1} textCase="upper">The difference</Text>
    <Text color="#0A0A0A" size={40} weight="bold" textAlign="center" letterSpacing={-1}>Stop juggling tools. Start shipping.</Text>
  </Frame>
  <Frame w="fill" flex="row" gap={24} items="stretch">
    <Frame name="BeforeCard" grow={1} flex="col" gap={20} bg="#FEF2F2" rounded={16} p={32} stroke="#FECACA" strokeWidth={1}>
      <Frame flex="row" items="center" gap={10}>
        <Frame w={36} h={36} bg="#EF444414" rounded={18} flex="row" items="center" justify="center"><Icon name="lucide:x" size={18} color="#EF4444" /></Frame>
        <Text color="#991B1B" size={18} weight="bold">Before</Text>
      </Frame>
      <Frame flex="col" gap={14}>
        <Frame flex="row" gap={10} items="start"><Icon name="lucide:circle-x" size={18} color="#EF4444" /><Text color="#0A0A0A" size={14} lineHeight={22} grow={1}>Status meetings eat 6 hours a week per PM</Text></Frame>
        <Frame flex="row" gap={10} items="start"><Icon name="lucide:circle-x" size={18} color="#EF4444" /><Text color="#0A0A0A" size={14} lineHeight={22} grow={1}>Specs live in 5 tools, never stay in sync</Text></Frame>
        <Frame flex="row" gap={10} items="start"><Icon name="lucide:circle-x" size={18} color="#EF4444" /><Text color="#0A0A0A" size={14} lineHeight={22} grow={1}>Engineers don't know what's next until Monday</Text></Frame>
        <Frame flex="row" gap={10} items="start"><Icon name="lucide:circle-x" size={18} color="#EF4444" /><Text color="#0A0A0A" size={14} lineHeight={22} grow={1}>Leadership has zero real-time visibility</Text></Frame>
      </Frame>
    </Frame>
    <Frame flex="col" items="center" justify="center" gap={8}>
      <Frame w={48} h={48} bg="#FFFFFF" stroke="#E4E4E7" strokeWidth={1} rounded={24} flex="row" items="center" justify="center" shadow="0 4 12 #00000014"><Icon name="lucide:arrow-right" size={20} color="#0A0A0A" /></Frame>
    </Frame>
    <Frame name="AfterCard" grow={1} flex="col" gap={20} bg="#ECFDF5" rounded={16} p={32} stroke="#86EFAC" strokeWidth={1}>
      <Frame flex="row" items="center" gap={10}>
        <Frame w={36} h={36} bg="#10B98114" rounded={18} flex="row" items="center" justify="center"><Icon name="lucide:check" size={18} color="#10B981" /></Frame>
        <Text color="#065F46" size={18} weight="bold">After</Text>
      </Frame>
      <Frame flex="col" gap={14}>
        <Frame flex="row" gap={10} items="start"><Icon name="lucide:check-circle-2" size={18} color="#10B981" /><Text color="#0A0A0A" size={14} lineHeight={22} grow={1}>Status is always live — no meetings needed</Text></Frame>
        <Frame flex="row" gap={10} items="start"><Icon name="lucide:check-circle-2" size={18} color="#10B981" /><Text color="#0A0A0A" size={14} lineHeight={22} grow={1}>One source of truth, syncs with every tool</Text></Frame>
        <Frame flex="row" gap={10} items="start"><Icon name="lucide:check-circle-2" size={18} color="#10B981" /><Text color="#0A0A0A" size={14} lineHeight={22} grow={1}>AI queues engineers with exactly what's ready</Text></Frame>
        <Frame flex="row" gap={10} items="start"><Icon name="lucide:check-circle-2" size={18} color="#10B981" /><Text color="#0A0A0A" size={14} lineHeight={22} grow={1}>Leadership dashboards update in real time</Text></Frame>
      </Frame>
    </Frame>
  </Frame>
</Frame>`
}

export const CASE_STUDY_CARD: Recipe = {
  name: 'case-study-card',
  type: 'card',
  style: 'stripe',
  description:
    'Customer case study hero card: left large image/logo + quote, right stats (3 metrics with big numbers). Premium landing piece.',
  dimensions: '1120×400',
  palette: ['#FFFFFF', '#0A2540', '#635BFF', '#425466', '#F6F9FC'],
  font: 'Inter',
  jsx: `<Frame name="CaseStudyCard" w={1120} h={400} bg="#F6F9FC" rounded={16} flex="row" overflow="hidden">
  <Frame name="CaseStudyLeft" w={560} h="fill" bg="#0A2540" flex="col" justify="between" p={40}>
    <Frame flex="col" gap={20}>
      <Text color="#FFFFFF" size={22} weight="bold" letterSpacing={-0.5}>Ramp</Text>
      <Text color="#FFFFFF" size={22} weight="medium" lineHeight={32} w="fill">"We replaced 4 tools and shaved 6 hours a week off every PM's calendar. It paid for itself in the first month."</Text>
    </Frame>
    <Frame flex="row" gap={12} items="center">
      <Ellipse w={44} h={44} bg="#635BFF" />
      <Frame flex="col" gap={2}>
        <Text color="#FFFFFF" size={14} weight="semibold">Sarah Chen</Text>
        <Text color="#ADBDCC" size={12}>VP Engineering · Ramp</Text>
      </Frame>
      <Frame flex="row" gap={6} items="center" px={12} py={6} stroke="#FFFFFF22" strokeWidth={1} rounded={999}><Icon name="lucide:play" size={11} color="#FFFFFF" /><Text color="#FFFFFF" size={11} weight="medium">Watch story</Text></Frame>
    </Frame>
  </Frame>
  <Frame name="CaseStudyRight" grow={1} flex="col" justify="center" gap={28} p={40}>
    <Frame flex="col" gap={6}>
      <Text color="#635BFF" size={48} weight="bold" letterSpacing={-2}>3×</Text>
      <Text color="#425466" size={14} lineHeight={22}>Faster ship velocity measured across 6 months of commits and releases</Text>
    </Frame>
    <Rectangle w="fill" h={1} bg="#E3E8EE" />
    <Frame flex="col" gap={6}>
      <Text color="#635BFF" size={48} weight="bold" letterSpacing={-2}>6h</Text>
      <Text color="#425466" size={14} lineHeight={22}>Saved per PM per week by removing status meetings</Text>
    </Frame>
    <Rectangle w="fill" h={1} bg="#E3E8EE" />
    <Frame flex="col" gap={6}>
      <Text color="#635BFF" size={48} weight="bold" letterSpacing={-2}>$420k</Text>
      <Text color="#425466" size={14} lineHeight={22}>Annual tool spend eliminated across the engineering org</Text>
    </Frame>
  </Frame>
</Frame>`
}

export const APP_DOWNLOAD_BANNER: Recipe = {
  name: 'app-download-banner',
  type: 'cta',
  style: 'apple',
  description:
    'App download section with phone mockup on left, copy + App Store/Google Play buttons + QR code on right.',
  dimensions: '1200×480',
  palette: ['#FFFFFF', '#1D1D1F', '#86868B', '#0071E3', '#F5F5F7'],
  font: 'Inter',
  jsx: `<Frame name="AppDownloadBanner" w={1200} h={480} bg="#F5F5F7" rounded={24} flex="row" items="center" px={64} gap={64} overflow="hidden">
  <Frame name="PhoneMockup" w={280} h={420} bg="#1D1D1F" rounded={36} stroke="#1D1D1F" strokeWidth={8} flex="col" overflow="hidden">
    <Frame w="fill" h={24} bg="#1D1D1F" flex="row" items="center" justify="center" gap={4}>
      <Rectangle w={60} h={8} bg="#000000" rounded={4} />
    </Frame>
    <Frame w="fill" grow={1} bg="#FFFFFF" flex="col" p={16} gap={12}>
      <Rectangle w="fill" h={40} bg="#F5F5F7" rounded={10} />
      <Rectangle w="fill" h={120} bg="#0071E314" rounded={12} />
      <Rectangle w="fill" h={80} bg="#F5F5F7" rounded={10} />
      <Rectangle w="fill" h={80} bg="#F5F5F7" rounded={10} />
    </Frame>
  </Frame>
  <Frame name="AppDownloadCopy" grow={1} flex="col" gap={24}>
    <Frame flex="col" gap={12}>
      <Text color="#86868B" size={12} weight="semibold" letterSpacing={1} textCase="upper">Now on mobile</Text>
      <Text color="#1D1D1F" size={42} weight="bold" letterSpacing={-1.5} lineHeight={48} w="fill">Take your workflow everywhere</Text>
      <Text color="#86868B" size={16} lineHeight={24} w={420}>Native iOS and Android apps. Full feature parity. Syncs instantly with desktop.</Text>
    </Frame>
    <Frame flex="row" gap={12} items="center">
      <Frame h={56} px={20} bg="#1D1D1F" rounded={12} flex="row" items="center" gap={10}>
        <Icon name="lucide:apple" size={28} color="#FFFFFF" />
        <Frame flex="col" gap={0}>
          <Text color="#FFFFFF" size={10} letterSpacing={0.5}>Download on the</Text>
          <Text color="#FFFFFF" size={17} weight="semibold">App Store</Text>
        </Frame>
      </Frame>
      <Frame h={56} px={20} bg="#1D1D1F" rounded={12} flex="row" items="center" gap={10}>
        <Icon name="lucide:play" size={26} color="#FFFFFF" />
        <Frame flex="col" gap={0}>
          <Text color="#FFFFFF" size={10} letterSpacing={0.5}>GET IT ON</Text>
          <Text color="#FFFFFF" size={17} weight="semibold">Google Play</Text>
        </Frame>
      </Frame>
      <Frame w={72} h={72} bg="#FFFFFF" rounded={12} flex="row" items="center" justify="center" stroke="#E4E4E7" strokeWidth={1}>
        <Icon name="lucide:qr-code" size={56} color="#1D1D1F" />
      </Frame>
    </Frame>
    <Frame flex="row" gap={16} items="center">
      <Frame flex="row" gap={2}><Icon name="lucide:star" size={14} color="#FCD34D" /><Icon name="lucide:star" size={14} color="#FCD34D" /><Icon name="lucide:star" size={14} color="#FCD34D" /><Icon name="lucide:star" size={14} color="#FCD34D" /><Icon name="lucide:star" size={14} color="#FCD34D" /></Frame>
      <Text color="#1D1D1F" size={13} weight="semibold">4.9 on App Store</Text>
      <Ellipse w={3} h={3} bg="#86868B" />
      <Text color="#86868B" size={13}>84,392 reviews</Text>
    </Frame>
  </Frame>
</Frame>`
}

export const ROADMAP_TIMELINE: Recipe = {
  name: 'roadmap-timeline',
  type: 'features',
  style: 'linear',
  description:
    'Public product roadmap showing Now / Next / Later columns with cards (ship status, votes, ETA).',
  dimensions: '1200×520',
  palette: ['#FFFFFF', '#0A0A0A', '#71717A', '#5E6AD2', '#10B981', '#F4F4F5'],
  font: 'Inter',
  jsx: `<Frame name="Roadmap" w={1200} flex="col" gap={32} py={64} px={32} bg="#FFFFFF">
  <Frame flex="col" gap={10} items="start">
    <Text color="#71717A" size={12} weight="semibold" letterSpacing={1} textCase="upper">Public roadmap</Text>
    <Text color="#0A0A0A" size={32} weight="bold" letterSpacing={-1}>What we're building next</Text>
    <Text color="#71717A" size={15} lineHeight={22} w={640}>Vote on features, follow updates, and shape the product with us.</Text>
  </Frame>
  <Frame w="fill" flex="row" gap={16} items="start">
    <Frame name="RoadmapNow" grow={1} flex="col" gap={12}>
      <Frame flex="row" items="center" gap={8}>
        <Ellipse w={8} h={8} bg="#10B981" />
        <Text color="#0A0A0A" size={14} weight="semibold">Shipping now</Text>
        <Text color="#71717A" size={12}>4</Text>
      </Frame>
      <Frame w="fill" flex="col" gap={12} bg="#ECFDF5" rounded={10} p={14} stroke="#86EFAC" strokeWidth={1}>
        <Frame flex="col" gap={6}>
          <Text color="#0A0A0A" size={14} weight="semibold">AI-powered search</Text>
          <Text color="#71717A" size={12} lineHeight={18}>Ask questions in plain language. 3× faster than keyword.</Text>
        </Frame>
        <Frame flex="row" items="center" justify="between">
          <Frame h={22} px={8} bg="#10B981" rounded={4}><Text color="#FFFFFF" size={10} weight="semibold">IN PROGRESS</Text></Frame>
          <Frame flex="row" gap={4} items="center"><Icon name="lucide:arrow-up" size={11} color="#71717A" /><Text color="#71717A" size={11} weight="medium">482</Text></Frame>
        </Frame>
      </Frame>
      <Frame w="fill" flex="col" gap={12} bg="#FFFFFF" stroke="#E4E4E7" strokeWidth={1} rounded={10} p={14}>
        <Frame flex="col" gap={6}>
          <Text color="#0A0A0A" size={14} weight="semibold">Dark mode for mobile</Text>
          <Text color="#71717A" size={12} lineHeight={18}>Matches system appearance. Full theme support.</Text>
        </Frame>
        <Frame flex="row" items="center" justify="between">
          <Text color="#71717A" size={11}>Ships Apr 22</Text>
          <Frame flex="row" gap={4} items="center"><Icon name="lucide:arrow-up" size={11} color="#71717A" /><Text color="#71717A" size={11} weight="medium">219</Text></Frame>
        </Frame>
      </Frame>
    </Frame>
    <Frame name="RoadmapNext" grow={1} flex="col" gap={12}>
      <Frame flex="row" items="center" gap={8}>
        <Ellipse w={8} h={8} bg="#5E6AD2" />
        <Text color="#0A0A0A" size={14} weight="semibold">Next up</Text>
        <Text color="#71717A" size={12}>6</Text>
      </Frame>
      <Frame w="fill" flex="col" gap={12} bg="#FFFFFF" stroke="#E4E4E7" strokeWidth={1} rounded={10} p={14}>
        <Frame flex="col" gap={6}>
          <Text color="#0A0A0A" size={14} weight="semibold">Real-time multiplayer</Text>
          <Text color="#71717A" size={12} lineHeight={18}>See your teammates' cursors, selections, and edits live.</Text>
        </Frame>
        <Frame flex="row" items="center" justify="between">
          <Frame h={22} px={8} bg="#5E6AD214" rounded={4}><Text color="#5E6AD2" size={10} weight="semibold">MAY 2026</Text></Frame>
          <Frame flex="row" gap={4} items="center"><Icon name="lucide:arrow-up" size={11} color="#5E6AD2" /><Text color="#5E6AD2" size={11} weight="semibold">1.2k</Text></Frame>
        </Frame>
      </Frame>
      <Frame w="fill" flex="col" gap={12} bg="#FFFFFF" stroke="#E4E4E7" strokeWidth={1} rounded={10} p={14}>
        <Frame flex="col" gap={6}>
          <Text color="#0A0A0A" size={14} weight="semibold">Custom dashboards</Text>
          <Text color="#71717A" size={12} lineHeight={18}>Drag-drop widgets. Pin to home. Share with your team.</Text>
        </Frame>
        <Frame flex="row" items="center" justify="between">
          <Text color="#71717A" size={11}>Q2 2026</Text>
          <Frame flex="row" gap={4} items="center"><Icon name="lucide:arrow-up" size={11} color="#71717A" /><Text color="#71717A" size={11} weight="medium">687</Text></Frame>
        </Frame>
      </Frame>
    </Frame>
    <Frame name="RoadmapLater" grow={1} flex="col" gap={12}>
      <Frame flex="row" items="center" gap={8}>
        <Ellipse w={8} h={8} bg="#71717A" />
        <Text color="#0A0A0A" size={14} weight="semibold">Later</Text>
        <Text color="#71717A" size={12}>12</Text>
      </Frame>
      <Frame w="fill" flex="col" gap={12} bg="#FFFFFF" stroke="#E4E4E7" strokeWidth={1} rounded={10} p={14}>
        <Frame flex="col" gap={6}>
          <Text color="#0A0A0A" size={14} weight="semibold">Public API & SDKs</Text>
          <Text color="#71717A" size={12} lineHeight={18}>Build on top of our platform. JavaScript, Python, Go.</Text>
        </Frame>
        <Frame flex="row" items="center" justify="between">
          <Text color="#71717A" size={11}>H2 2026</Text>
          <Frame flex="row" gap={4} items="center"><Icon name="lucide:arrow-up" size={11} color="#71717A" /><Text color="#71717A" size={11} weight="medium">2.1k</Text></Frame>
        </Frame>
      </Frame>
      <Frame w="fill" flex="col" gap={12} bg="#FFFFFF" stroke="#E4E4E7" strokeWidth={1} rounded={10} p={14}>
        <Frame flex="col" gap={6}>
          <Text color="#0A0A0A" size={14} weight="semibold">On-premise deployment</Text>
          <Text color="#71717A" size={12} lineHeight={18}>Self-hosted. Air-gapped ready for regulated industries.</Text>
        </Frame>
        <Frame flex="row" items="center" justify="between">
          <Text color="#71717A" size={11}>2027</Text>
          <Frame flex="row" gap={4} items="center"><Icon name="lucide:arrow-up" size={11} color="#71717A" /><Text color="#71717A" size={11} weight="medium">894</Text></Frame>
        </Frame>
      </Frame>
    </Frame>
  </Frame>
</Frame>`
}

export const HERO_IMAGE_RIGHT: Recipe = {
  name: 'hero-image-right',
  type: 'hero',
  style: 'minimal',
  description:
    'Classic split hero with left text column (headline, sub, dual CTAs, trust stamp) and right large product screenshot placeholder.',
  dimensions: '1440×620',
  palette: ['#FFFFFF', '#0A0A0A', '#71717A', '#0070F3', '#F4F4F5'],
  font: 'Inter',
  jsx: `<Frame name="HeroImageRight" w={1440} h={620} bg="#FFFFFF" flex="row" items="center" px={64} gap={48}>
  <Frame name="HeroCopy" w={560} flex="col" gap={20}>
    <Text color="#71717A" size={12} weight="semibold" letterSpacing={1.5} textCase="upper">Project management · reimagined</Text>
    <Text color="#0A0A0A" size={60} weight="bold" letterSpacing={-2} lineHeight={64}>Plan less. Ship more.</Text>
    <Text color="#71717A" size={18} lineHeight={28} w="fill">The first project tool built around shipping, not status meetings. Track issues, milestones, and releases in one place.</Text>
    <Frame flex="row" gap={12} items="center">
      <Frame h={52} px={24} bg="#0A0A0A" rounded={8} flex="row" items="center" gap={8}><Text color="#FFFFFF" size={15} weight="semibold">Start for free</Text><Icon name="lucide:arrow-right" size={15} color="#FFFFFF" /></Frame>
      <Frame h={52} px={24} stroke="#E4E4E7" strokeWidth={1} rounded={8} flex="row" items="center" gap={8}><Icon name="lucide:book-open" size={15} color="#0A0A0A" /><Text color="#0A0A0A" size={15} weight="semibold">Read the docs</Text></Frame>
    </Frame>
    <Frame flex="row" gap={12} items="center" pt={8}>
      <Frame flex="row">
        <Ellipse w={28} h={28} bg="#0070F3" stroke="#FFFFFF" strokeWidth={2} />
        <Ellipse w={28} h={28} bg="#F5A623" stroke="#FFFFFF" strokeWidth={2} x={-8} />
        <Ellipse w={28} h={28} bg="#10B981" stroke="#FFFFFF" strokeWidth={2} x={-16} />
        <Ellipse w={28} h={28} bg="#A855F7" stroke="#FFFFFF" strokeWidth={2} x={-24} />
      </Frame>
      <Text color="#71717A" size={13}>Loved by <Text color="#0A0A0A" size={13} weight="semibold">12,400+ teams</Text></Text>
    </Frame>
  </Frame>
  <Frame name="HeroImageArea" grow={1} h={480} bg="#F4F4F5" rounded={16} stroke="#E4E4E7" strokeWidth={1} overflow="hidden">
    <Frame w="fill" h={44} bg="#FFFFFF" flex="row" items="center" gap={8} px={16} stroke="#E4E4E7" strokeWidth={1} strokeAlign="INSIDE">
      <Ellipse w={10} h={10} bg="#EF4444" />
      <Ellipse w={10} h={10} bg="#F59E0B" />
      <Ellipse w={10} h={10} bg="#10B981" />
    </Frame>
    <Frame w="fill" grow={1} flex="row">
      <Frame w={180} h="fill" bg="#FAFAFA" flex="col" gap={4} p={16}>
        <Rectangle w={100} h={12} bg="#E4E4E7" rounded={6} />
        <Rectangle w={140} h={10} bg="#F4F4F5" rounded={5} />
        <Rectangle w={120} h={10} bg="#F4F4F5" rounded={5} />
      </Frame>
      <Frame grow={1} h="fill" bg="#FFFFFF" flex="col" gap={10} p={20}>
        <Rectangle w={240} h={24} bg="#E4E4E7" rounded={6} />
        <Rectangle w="fill" h={80} bg="#F4F4F5" rounded={8} />
        <Rectangle w="fill" h={80} bg="#F4F4F5" rounded={8} />
        <Rectangle w="fill" h={80} bg="#F4F4F5" rounded={8} />
      </Frame>
    </Frame>
  </Frame>
</Frame>`
}
