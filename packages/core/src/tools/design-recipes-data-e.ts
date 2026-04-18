import type { Recipe } from './design-recipes-data-a'

export const INTEGRATIONS_GRID: Recipe = {
  name: 'integrations-grid',
  type: 'features',
  style: 'minimal',
  description:
    'Grid of 12 integration cards (logo + name + short line). Shows the breadth of supported tools. 4×3 layout.',
  dimensions: '1200×560',
  palette: ['#FFFFFF', '#0A0A0A', '#71717A', '#F4F4F5', '#E4E4E7'],
  font: 'Inter',
  jsx: `<Frame name="IntegrationsSection" w={1200} flex="col" gap={48} py={96} px={32} bg="#FFFFFF" items="center">
  <Frame name="IntegrationsHeader" flex="col" gap={12} items="center" w={640}>
    <Text color="#71717A" size={13} weight="semibold" letterSpacing={1} textCase="upper">Integrations</Text>
    <Text color="#0A0A0A" size={40} weight="bold" textAlign="center" letterSpacing={-1}>Connect every tool your team uses</Text>
    <Text color="#71717A" size={16} textAlign="center" lineHeight={24}>60+ native integrations. One click to connect, zero config to maintain.</Text>
  </Frame>
  <Frame name="IntegrationsGrid" w="fill" flex="col" gap={16}>
    <Frame w="fill" flex="row" gap={16}>
      <Frame grow={1} h={120} stroke="#E4E4E7" strokeWidth={1} rounded={12} p={20} flex="col" gap={12}>
        <Frame w={36} h={36} bg="#F4F4F5" rounded={8} flex="row" items="center" justify="center"><Icon name="lucide:slack" size={20} color="#0A0A0A" /></Frame>
        <Frame flex="col" gap={2}><Text color="#0A0A0A" size={14} weight="semibold">Slack</Text><Text color="#71717A" size={12}>Real-time notifications</Text></Frame>
      </Frame>
      <Frame grow={1} h={120} stroke="#E4E4E7" strokeWidth={1} rounded={12} p={20} flex="col" gap={12}>
        <Frame w={36} h={36} bg="#F4F4F5" rounded={8} flex="row" items="center" justify="center"><Icon name="lucide:github" size={20} color="#0A0A0A" /></Frame>
        <Frame flex="col" gap={2}><Text color="#0A0A0A" size={14} weight="semibold">GitHub</Text><Text color="#71717A" size={12}>Issues & pull requests</Text></Frame>
      </Frame>
      <Frame grow={1} h={120} stroke="#E4E4E7" strokeWidth={1} rounded={12} p={20} flex="col" gap={12}>
        <Frame w={36} h={36} bg="#F4F4F5" rounded={8} flex="row" items="center" justify="center"><Icon name="lucide:figma" size={20} color="#0A0A0A" /></Frame>
        <Frame flex="col" gap={2}><Text color="#0A0A0A" size={14} weight="semibold">Figma</Text><Text color="#71717A" size={12}>Design files inline</Text></Frame>
      </Frame>
      <Frame grow={1} h={120} stroke="#E4E4E7" strokeWidth={1} rounded={12} p={20} flex="col" gap={12}>
        <Frame w={36} h={36} bg="#F4F4F5" rounded={8} flex="row" items="center" justify="center"><Icon name="lucide:mail" size={20} color="#0A0A0A" /></Frame>
        <Frame flex="col" gap={2}><Text color="#0A0A0A" size={14} weight="semibold">Gmail</Text><Text color="#71717A" size={12}>Turn emails into tasks</Text></Frame>
      </Frame>
    </Frame>
    <Frame w="fill" flex="row" gap={16}>
      <Frame grow={1} h={120} stroke="#E4E4E7" strokeWidth={1} rounded={12} p={20} flex="col" gap={12}>
        <Frame w={36} h={36} bg="#F4F4F5" rounded={8} flex="row" items="center" justify="center"><Icon name="lucide:calendar" size={20} color="#0A0A0A" /></Frame>
        <Frame flex="col" gap={2}><Text color="#0A0A0A" size={14} weight="semibold">Google Calendar</Text><Text color="#71717A" size={12}>Sync milestones</Text></Frame>
      </Frame>
      <Frame grow={1} h={120} stroke="#E4E4E7" strokeWidth={1} rounded={12} p={20} flex="col" gap={12}>
        <Frame w={36} h={36} bg="#F4F4F5" rounded={8} flex="row" items="center" justify="center"><Icon name="lucide:database" size={20} color="#0A0A0A" /></Frame>
        <Frame flex="col" gap={2}><Text color="#0A0A0A" size={14} weight="semibold">Notion</Text><Text color="#71717A" size={12}>Two-way page sync</Text></Frame>
      </Frame>
      <Frame grow={1} h={120} stroke="#E4E4E7" strokeWidth={1} rounded={12} p={20} flex="col" gap={12}>
        <Frame w={36} h={36} bg="#F4F4F5" rounded={8} flex="row" items="center" justify="center"><Icon name="lucide:zap" size={20} color="#0A0A0A" /></Frame>
        <Frame flex="col" gap={2}><Text color="#0A0A0A" size={14} weight="semibold">Zapier</Text><Text color="#71717A" size={12}>7000+ app triggers</Text></Frame>
      </Frame>
      <Frame grow={1} h={120} stroke="#E4E4E7" strokeWidth={1} rounded={12} p={20} flex="col" gap={12}>
        <Frame w={36} h={36} bg="#F4F4F5" rounded={8} flex="row" items="center" justify="center"><Icon name="lucide:trello" size={20} color="#0A0A0A" /></Frame>
        <Frame flex="col" gap={2}><Text color="#0A0A0A" size={14} weight="semibold">Jira</Text><Text color="#71717A" size={12}>Import existing projects</Text></Frame>
      </Frame>
    </Frame>
    <Frame w="fill" flex="row" gap={16}>
      <Frame grow={1} h={120} stroke="#E4E4E7" strokeWidth={1} rounded={12} p={20} flex="col" gap={12}>
        <Frame w={36} h={36} bg="#F4F4F5" rounded={8} flex="row" items="center" justify="center"><Icon name="lucide:message-circle" size={20} color="#0A0A0A" /></Frame>
        <Frame flex="col" gap={2}><Text color="#0A0A0A" size={14} weight="semibold">Intercom</Text><Text color="#71717A" size={12}>Support conversations</Text></Frame>
      </Frame>
      <Frame grow={1} h={120} stroke="#E4E4E7" strokeWidth={1} rounded={12} p={20} flex="col" gap={12}>
        <Frame w={36} h={36} bg="#F4F4F5" rounded={8} flex="row" items="center" justify="center"><Icon name="lucide:credit-card" size={20} color="#0A0A0A" /></Frame>
        <Frame flex="col" gap={2}><Text color="#0A0A0A" size={14} weight="semibold">Stripe</Text><Text color="#71717A" size={12}>Revenue events</Text></Frame>
      </Frame>
      <Frame grow={1} h={120} stroke="#E4E4E7" strokeWidth={1} rounded={12} p={20} flex="col" gap={12}>
        <Frame w={36} h={36} bg="#F4F4F5" rounded={8} flex="row" items="center" justify="center"><Icon name="lucide:bar-chart-3" size={20} color="#0A0A0A" /></Frame>
        <Frame flex="col" gap={2}><Text color="#0A0A0A" size={14} weight="semibold">Segment</Text><Text color="#71717A" size={12}>Analytics events</Text></Frame>
      </Frame>
      <Frame grow={1} h={120} stroke="#E4E4E7" strokeWidth={1} rounded={12} p={20} flex="col" gap={12}>
        <Frame w={36} h={36} bg="#F4F4F5" rounded={8} flex="row" items="center" justify="center"><Icon name="lucide:plus" size={20} color="#71717A" /></Frame>
        <Frame flex="col" gap={2}><Text color="#0A0A0A" size={14} weight="semibold">+ 52 more</Text><Text color="#71717A" size={12}>Browse all</Text></Frame>
      </Frame>
    </Frame>
  </Frame>
</Frame>`
}

export const FAQ_VERTICAL: Recipe = {
  name: 'faq-vertical',
  type: 'features',
  style: 'minimal',
  description:
    'Centered single-column FAQ with title on top. Cleaner, simpler than the 2-col variant — use when FAQ is the main content.',
  dimensions: '800×640',
  palette: ['#FFFFFF', '#0A0A0A', '#71717A', '#E4E4E7'],
  font: 'Inter',
  jsx: `<Frame name="FAQVertical" w={800} flex="col" gap={48} py={96} bg="#FFFFFF" items="center">
  <Frame flex="col" gap={12} items="center">
    <Text color="#0A0A0A" size={36} weight="bold" letterSpacing={-1} textAlign="center">Questions, answered</Text>
    <Text color="#71717A" size={16} textAlign="center" lineHeight={24} w={480}>If you can't find what you're looking for, ping us in chat.</Text>
  </Frame>
  <Frame name="FAQList" w="fill" flex="col" gap={0} px={24}>
    <Frame w="fill" flex="col" gap={12} py={20} stroke="#E4E4E7" strokeWidth={1} strokeAlign="INSIDE">
      <Frame flex="row" justify="between" items="center"><Text color="#0A0A0A" size={16} weight="semibold">Is my data encrypted?</Text><Icon name="lucide:minus" size={18} color="#0A0A0A" /></Frame>
      <Text color="#71717A" size={14} lineHeight={22}>Yes. All data is encrypted in transit (TLS 1.3) and at rest (AES-256). Backups are encrypted with per-tenant keys.</Text>
    </Frame>
    <Frame w="fill" flex="row" justify="between" items="center" py={20} stroke="#E4E4E7" strokeWidth={1} strokeAlign="INSIDE"><Text color="#0A0A0A" size={16} weight="semibold">Do you have SOC 2 compliance?</Text><Icon name="lucide:plus" size={18} color="#71717A" /></Frame>
    <Frame w="fill" flex="row" justify="between" items="center" py={20} stroke="#E4E4E7" strokeWidth={1} strokeAlign="INSIDE"><Text color="#0A0A0A" size={16} weight="semibold">Can I export my data?</Text><Icon name="lucide:plus" size={18} color="#71717A" /></Frame>
    <Frame w="fill" flex="row" justify="between" items="center" py={20} stroke="#E4E4E7" strokeWidth={1} strokeAlign="INSIDE"><Text color="#0A0A0A" size={16} weight="semibold">What happens if I cancel?</Text><Icon name="lucide:plus" size={18} color="#71717A" /></Frame>
    <Frame w="fill" flex="row" justify="between" items="center" py={20} stroke="#E4E4E7" strokeWidth={1} strokeAlign="INSIDE"><Text color="#0A0A0A" size={16} weight="semibold">Is there a self-hosted option?</Text><Icon name="lucide:plus" size={18} color="#71717A" /></Frame>
    <Frame w="fill" flex="row" justify="between" items="center" py={20}><Text color="#0A0A0A" size={16} weight="semibold">Do you offer education discounts?</Text><Icon name="lucide:plus" size={18} color="#71717A" /></Frame>
  </Frame>
</Frame>`
}

export const PRICING_COMPARISON_TABLE: Recipe = {
  name: 'pricing-comparison-table',
  type: 'pricing',
  style: 'minimal',
  description:
    'Feature matrix table comparing 4 plans. Sticky header with plan name + price, rows of features with checkmarks/text per plan.',
  dimensions: '1200×560',
  palette: ['#FFFFFF', '#0A0A0A', '#71717A', '#0070F3', '#F4F4F5'],
  font: 'Inter',
  jsx: `<Frame name="ComparisonTable" w={1200} flex="col" bg="#FFFFFF" rounded={16} stroke="#F4F4F5" strokeWidth={1} overflow="hidden">
  <Frame name="TableHeader" w="fill" h={120} flex="row" stroke="#F4F4F5" strokeWidth={1} strokeAlign="INSIDE">
    <Frame w={340} h="fill" flex="col" justify="end" p={24}><Text color="#71717A" size={12} weight="semibold" letterSpacing={0.5} textCase="upper">Compare plans</Text></Frame>
    <Frame grow={1} h="fill" flex="col" justify="center" gap={4} p={24} items="start" stroke="#F4F4F5" strokeWidth={1} strokeAlign="INSIDE">
      <Text color="#0A0A0A" size={15} weight="semibold">Free</Text>
      <Text color="#0A0A0A" size={22} weight="bold" letterSpacing={-0.5}>$0</Text>
    </Frame>
    <Frame grow={1} h="fill" flex="col" justify="center" gap={4} p={24} items="start" stroke="#F4F4F5" strokeWidth={1} strokeAlign="INSIDE">
      <Text color="#0A0A0A" size={15} weight="semibold">Pro</Text>
      <Text color="#0A0A0A" size={22} weight="bold" letterSpacing={-0.5}>$12</Text>
    </Frame>
    <Frame grow={1} h="fill" flex="col" justify="center" gap={4} p={24} items="start" bg="#0070F30A" stroke="#F4F4F5" strokeWidth={1} strokeAlign="INSIDE">
      <Frame flex="row" gap={8} items="center"><Text color="#0A0A0A" size={15} weight="semibold">Team</Text><Frame px={8} py={2} bg="#0070F3" rounded={999}><Text color="#FFFFFF" size={10} weight="semibold">POPULAR</Text></Frame></Frame>
      <Text color="#0A0A0A" size={22} weight="bold" letterSpacing={-0.5}>$24</Text>
    </Frame>
    <Frame grow={1} h="fill" flex="col" justify="center" gap={4} p={24} items="start">
      <Text color="#0A0A0A" size={15} weight="semibold">Enterprise</Text>
      <Text color="#0A0A0A" size={22} weight="bold" letterSpacing={-0.5}>Custom</Text>
    </Frame>
  </Frame>
  <Frame name="FeatureSectionA" w="fill" flex="col">
    <Frame w="fill" h={36} bg="#FAFAFA" flex="row" items="center" px={24}><Text color="#71717A" size={12} weight="semibold" letterSpacing={0.5} textCase="upper">Core</Text></Frame>
    <Frame w="fill" h={56} flex="row" stroke="#F4F4F5" strokeWidth={1} strokeAlign="INSIDE">
      <Frame w={340} h="fill" flex="row" items="center" p={24}><Text color="#0A0A0A" size={14}>Projects</Text></Frame>
      <Frame grow={1} h="fill" flex="row" items="center" p={24} stroke="#F4F4F5" strokeWidth={1} strokeAlign="INSIDE"><Text color="#71717A" size={14}>3</Text></Frame>
      <Frame grow={1} h="fill" flex="row" items="center" p={24} stroke="#F4F4F5" strokeWidth={1} strokeAlign="INSIDE"><Text color="#0A0A0A" size={14}>Unlimited</Text></Frame>
      <Frame grow={1} h="fill" flex="row" items="center" p={24} bg="#0070F305" stroke="#F4F4F5" strokeWidth={1} strokeAlign="INSIDE"><Text color="#0A0A0A" size={14}>Unlimited</Text></Frame>
      <Frame grow={1} h="fill" flex="row" items="center" p={24}><Text color="#0A0A0A" size={14}>Unlimited</Text></Frame>
    </Frame>
    <Frame w="fill" h={56} flex="row" stroke="#F4F4F5" strokeWidth={1} strokeAlign="INSIDE">
      <Frame w={340} h="fill" flex="row" items="center" p={24}><Text color="#0A0A0A" size={14}>Team members</Text></Frame>
      <Frame grow={1} h="fill" flex="row" items="center" p={24} stroke="#F4F4F5" strokeWidth={1} strokeAlign="INSIDE"><Text color="#71717A" size={14}>1</Text></Frame>
      <Frame grow={1} h="fill" flex="row" items="center" p={24} stroke="#F4F4F5" strokeWidth={1} strokeAlign="INSIDE"><Text color="#0A0A0A" size={14}>5</Text></Frame>
      <Frame grow={1} h="fill" flex="row" items="center" p={24} bg="#0070F305" stroke="#F4F4F5" strokeWidth={1} strokeAlign="INSIDE"><Text color="#0A0A0A" size={14}>25</Text></Frame>
      <Frame grow={1} h="fill" flex="row" items="center" p={24}><Text color="#0A0A0A" size={14}>Unlimited</Text></Frame>
    </Frame>
    <Frame w="fill" h={56} flex="row" stroke="#F4F4F5" strokeWidth={1} strokeAlign="INSIDE">
      <Frame w={340} h="fill" flex="row" items="center" p={24}><Text color="#0A0A0A" size={14}>SSO</Text></Frame>
      <Frame grow={1} h="fill" flex="row" items="center" p={24} stroke="#F4F4F5" strokeWidth={1} strokeAlign="INSIDE"><Icon name="lucide:x" size={16} color="#A1A1AA" /></Frame>
      <Frame grow={1} h="fill" flex="row" items="center" p={24} stroke="#F4F4F5" strokeWidth={1} strokeAlign="INSIDE"><Icon name="lucide:x" size={16} color="#A1A1AA" /></Frame>
      <Frame grow={1} h="fill" flex="row" items="center" p={24} bg="#0070F305" stroke="#F4F4F5" strokeWidth={1} strokeAlign="INSIDE"><Icon name="lucide:check" size={16} color="#10B981" /></Frame>
      <Frame grow={1} h="fill" flex="row" items="center" p={24}><Icon name="lucide:check" size={16} color="#10B981" /></Frame>
    </Frame>
    <Frame w="fill" h={56} flex="row">
      <Frame w={340} h="fill" flex="row" items="center" p={24}><Text color="#0A0A0A" size={14}>Priority support</Text></Frame>
      <Frame grow={1} h="fill" flex="row" items="center" p={24} stroke="#F4F4F5" strokeWidth={1} strokeAlign="INSIDE"><Icon name="lucide:x" size={16} color="#A1A1AA" /></Frame>
      <Frame grow={1} h="fill" flex="row" items="center" p={24} stroke="#F4F4F5" strokeWidth={1} strokeAlign="INSIDE"><Icon name="lucide:check" size={16} color="#10B981" /></Frame>
      <Frame grow={1} h="fill" flex="row" items="center" p={24} bg="#0070F305" stroke="#F4F4F5" strokeWidth={1} strokeAlign="INSIDE"><Icon name="lucide:check" size={16} color="#10B981" /></Frame>
      <Frame grow={1} h="fill" flex="row" items="center" p={24}><Text color="#0A0A0A" size={14}>Dedicated</Text></Frame>
    </Frame>
  </Frame>
</Frame>`
}

export const CHANGELOG_SECTION: Recipe = {
  name: 'changelog-section',
  type: 'content',
  style: 'minimal',
  description:
    'Changelog entries with date gutter on left, title + tags + body on right. Developer-focused product updates.',
  dimensions: '960×620',
  palette: ['#FFFFFF', '#0A0A0A', '#71717A', '#10B981', '#F4F4F5'],
  font: 'Inter',
  jsx: `<Frame name="Changelog" w={960} flex="col" gap={48} py={64} px={24} bg="#FFFFFF">
  <Frame flex="col" gap={8}>
    <Text color="#0A0A0A" size={36} weight="bold" letterSpacing={-1}>Changelog</Text>
    <Text color="#71717A" size={15}>New features, improvements, and fixes.</Text>
  </Frame>
  <Frame name="ChangelogList" w="fill" flex="col" gap={48}>
    <Frame name="EntryApr2026" w="fill" flex="row" gap={48} items="start">
      <Frame w={120} flex="col" gap={4}>
        <Text color="#0A0A0A" size={14} weight="semibold">Apr 16, 2026</Text>
        <Text color="#71717A" size={12}>v2.4.0</Text>
      </Frame>
      <Frame grow={1} flex="col" gap={16}>
        <Frame flex="row" gap={8} items="center">
          <Text color="#0A0A0A" size={20} weight="semibold">AI-powered search</Text>
          <Frame px={8} py={2} bg="#10B98114" rounded={4}><Text color="#10B981" size={11} weight="semibold">NEW</Text></Frame>
        </Frame>
        <Rectangle w="fill" h={240} bg="#F4F4F5" rounded={10} />
        <Text color="#71717A" size={15} lineHeight={24} w="fill">Search now understands intent. Ask questions in plain language ("issues assigned to me last week") and get exact results. 3× faster than keyword search on average.</Text>
      </Frame>
    </Frame>
    <Frame name="EntryMar2026" w="fill" flex="row" gap={48} items="start">
      <Frame w={120} flex="col" gap={4}>
        <Text color="#0A0A0A" size={14} weight="semibold">Mar 28, 2026</Text>
        <Text color="#71717A" size={12}>v2.3.2</Text>
      </Frame>
      <Frame grow={1} flex="col" gap={12}>
        <Frame flex="row" gap={8} items="center">
          <Text color="#0A0A0A" size={20} weight="semibold">Custom views</Text>
          <Frame px={8} py={2} bg="#0070F314" rounded={4}><Text color="#0070F3" size={11} weight="semibold">IMPROVED</Text></Frame>
        </Frame>
        <Text color="#71717A" size={15} lineHeight={24}>Save filter combinations as named views. Share them with your team. Switch with a keystroke.</Text>
      </Frame>
    </Frame>
    <Frame name="EntryMar15" w="fill" flex="row" gap={48} items="start">
      <Frame w={120} flex="col" gap={4}><Text color="#0A0A0A" size={14} weight="semibold">Mar 15, 2026</Text><Text color="#71717A" size={12}>v2.3.1</Text></Frame>
      <Frame grow={1} flex="col" gap={12}>
        <Text color="#0A0A0A" size={20} weight="semibold">Bug fixes & performance</Text>
        <Text color="#71717A" size={15} lineHeight={24}>Resolved an intermittent sync issue on large workspaces. Sidebar reload 40% faster. Dark mode contrast fixes.</Text>
      </Frame>
    </Frame>
  </Frame>
</Frame>`
}

export const BLOG_INDEX: Recipe = {
  name: 'blog-index',
  type: 'content',
  style: 'editorial',
  description:
    'Blog homepage with featured large post + 3-col grid of recent posts. Mixes editorial feel with modern clarity.',
  dimensions: '1200×720',
  palette: ['#FFFFFF', '#0F1923', '#5C5044', '#D4382C', '#E0D4C8'],
  font: 'Playfair Display',
  jsx: `<Frame name="BlogIndex" w={1200} flex="col" gap={48} py={64} px={24} bg="#FFFFFF">
  <Frame name="BlogHeader" flex="row" items="end" justify="between" w="fill">
    <Text color="#0F1923" size={44} weight="bold" letterSpacing={-1} font="Playfair Display">Stories</Text>
    <Frame flex="row" gap={20} items="center">
      <Text color="#0F1923" size={13} weight="semibold">All</Text>
      <Text color="#5C5044" size={13}>Product</Text>
      <Text color="#5C5044" size={13}>Engineering</Text>
      <Text color="#5C5044" size={13}>Design</Text>
      <Text color="#5C5044" size={13}>Culture</Text>
    </Frame>
  </Frame>
  <Frame name="FeaturedPost" w="fill" flex="row" gap={32} items="center">
    <Rectangle w={640} h={360} bg="#E0D4C8" rounded={4} />
    <Frame grow={1} flex="col" gap={16}>
      <Frame flex="row" gap={12} items="center">
        <Rectangle w={24} h={2} bg="#D4382C" />
        <Text color="#D4382C" size={11} weight="semibold" letterSpacing={2} textCase="upper">Featured · Engineering</Text>
      </Frame>
      <Text color="#0F1923" size={36} weight="bold" letterSpacing={-0.5} lineHeight={42} font="Playfair Display">How we rebuilt our rendering engine in 90 days</Text>
      <Text color="#5C5044" size={16} lineHeight={26} w="fill">Migrating from canvas to WebGL sounded impossible. Here's the plan, the setbacks, and the 4× performance gain that made it worthwhile.</Text>
      <Frame flex="row" items="center" gap={12}>
        <Ellipse w={32} h={32} bg="#0F1923" />
        <Frame flex="col" gap={2}>
          <Text color="#0F1923" size={13} weight="semibold">Marcus Delgado</Text>
          <Text color="#5C5044" size={12}>Apr 14 · 12 min read</Text>
        </Frame>
      </Frame>
    </Frame>
  </Frame>
  <Rectangle w="fill" h={1} bg="#E0D4C8" />
  <Frame name="PostsGrid" w="fill" flex="row" gap={24}>
    <Frame grow={1} flex="col" gap={12}>
      <Rectangle w="fill" h={200} bg="#E0D4C8" rounded={4} />
      <Text color="#D4382C" size={11} weight="semibold" letterSpacing={1} textCase="upper">Product</Text>
      <Text color="#0F1923" size={20} weight="bold" letterSpacing={-0.3} lineHeight={26} font="Playfair Display">Our design philosophy for keyboard shortcuts</Text>
      <Text color="#5C5044" size={13}>Apr 10 · 6 min read</Text>
    </Frame>
    <Frame grow={1} flex="col" gap={12}>
      <Rectangle w="fill" h={200} bg="#E0D4C8" rounded={4} />
      <Text color="#D4382C" size={11} weight="semibold" letterSpacing={1} textCase="upper">Culture</Text>
      <Text color="#0F1923" size={20} weight="bold" letterSpacing={-0.3} lineHeight={26} font="Playfair Display">How a remote-first team handles async calibration</Text>
      <Text color="#5C5044" size={13}>Apr 8 · 8 min read</Text>
    </Frame>
    <Frame grow={1} flex="col" gap={12}>
      <Rectangle w="fill" h={200} bg="#E0D4C8" rounded={4} />
      <Text color="#D4382C" size={11} weight="semibold" letterSpacing={1} textCase="upper">Design</Text>
      <Text color="#0F1923" size={20} weight="bold" letterSpacing={-0.3} lineHeight={26} font="Playfair Display">A color system that respects user context</Text>
      <Text color="#5C5044" size={13}>Apr 4 · 5 min read</Text>
    </Frame>
  </Frame>
</Frame>`
}

export const ARTICLE_HEADER: Recipe = {
  name: 'article-header',
  type: 'content',
  style: 'editorial',
  description:
    'Blog post hero: category, large serif title, author + date, and cover image. Wide container, centered column.',
  dimensions: '800×540',
  palette: ['#FFFFFF', '#0F1923', '#5C5044', '#D4382C', '#E0D4C8'],
  font: 'Playfair Display',
  jsx: `<Frame name="ArticleHeader" w={800} flex="col" gap={24} py={64} bg="#FFFFFF">
  <Frame flex="col" gap={12} items="start">
    <Frame flex="row" gap={10} items="center">
      <Rectangle w={24} h={2} bg="#D4382C" />
      <Text color="#D4382C" size={11} weight="semibold" letterSpacing={2} textCase="upper">Engineering · Infrastructure</Text>
    </Frame>
    <Text color="#0F1923" size={48} weight="bold" letterSpacing={-1} lineHeight={54} font="Playfair Display" w="fill">
      How we rebuilt our rendering engine in 90 days
    </Text>
    <Text color="#5C5044" size={18} lineHeight={28} w="fill" font="Georgia">
      Migrating from canvas to WebGL sounded impossible until we found an unexpected ally in a 10-year-old research paper.
    </Text>
  </Frame>
  <Frame flex="row" items="center" gap={16}>
    <Ellipse w={44} h={44} bg="#D4382C" />
    <Frame flex="col" gap={2}>
      <Text color="#0F1923" size={14} weight="semibold">Marcus Delgado</Text>
      <Text color="#5C5044" size={13}>CTO · April 14, 2026 · 12 min read</Text>
    </Frame>
  </Frame>
  <Rectangle w="fill" h={360} bg="#E0D4C8" rounded={6} />
  <Text color="#5C5044" size={13} font="Georgia">Photo: Apple Newton, one of the canvases we studied.</Text>
</Frame>`
}

export const RICH_BLOG_LAYOUT: Recipe = {
  name: 'rich-blog-layout',
  type: 'content',
  style: 'editorial',
  description:
    'Rich blog post body: paragraphs, H2 headings, blockquote, image with caption, code block placeholder. 680px reading column.',
  dimensions: '680×1200',
  palette: ['#FFFFFF', '#0F1923', '#5C5044', '#D4382C', '#F4F4F5'],
  font: 'Georgia',
  jsx: `<Frame name="RichBlogBody" w={680} flex="col" gap={28} py={48} bg="#FFFFFF">
  <Text color="#0F1923" size={20} lineHeight={32} font="Georgia" w="fill">
    In early 2025, our rendering pipeline was on its knees. What started as a simple 2D canvas had grown into a 14,000-line monster spanning five teams. We knew something had to change.
  </Text>
  <Text color="#0F1923" size={18} lineHeight={30} font="Georgia" w="fill">
    The first milestone: benchmark the current system to understand exactly where the bottlenecks lived. We found three hotspots — path tessellation, text shaping, and shadow blurring — each consuming 30%+ of every frame.
  </Text>
  <Text color="#0F1923" size={28} weight="bold" letterSpacing={-0.5} lineHeight={36} font="Playfair Display" w="fill">
    Finding the research paper
  </Text>
  <Text color="#0F1923" size={18} lineHeight={30} font="Georgia" w="fill">
    After weeks of reading, one of our engineers stumbled onto <Text color="#D4382C" size={18} textDecoration="underline" font="Georgia">"Resolution-independent curve rendering"</Text> — a 2015 paper by Loop & Blinn. It proposed something radical: render cubic Bézier curves directly in a fragment shader.
  </Text>
  <Frame name="PullQuote" w="fill" flex="col" gap={12} py={20} px={32} stroke="#D4382C" strokeWidth={3} strokeAlign="INSIDE">
    <Text color="#0F1923" size={24} weight="medium" lineHeight={34} font="Playfair Display">
      "The paper was ten years old. The technique had never made it to production anywhere. That was both exciting and terrifying."
    </Text>
    <Text color="#5C5044" size={13} weight="medium" letterSpacing={0.5} textCase="upper">— Dan Kim, Head of Engineering</Text>
  </Frame>
  <Rectangle w="fill" h={380} bg="#F4F4F5" rounded={6} />
  <Text color="#5C5044" size={13} textAlign="center" font="Georgia">Figure 1 — The inflection map that made real-time Bézier curves feasible.</Text>
  <Text color="#0F1923" size={28} weight="bold" letterSpacing={-0.5} lineHeight={36} font="Playfair Display" w="fill">
    Ninety days of prototyping
  </Text>
  <Text color="#0F1923" size={18} lineHeight={30} font="Georgia" w="fill">
    We gave ourselves three months. Four engineers. One rule: if by week 8 we didn't see a path to production, we'd shelve it.
  </Text>
  <Frame name="CodeBlock" w="fill" bg="#0F1923" rounded={8} p={20} flex="col" gap={4}>
    <Text color="#A0AEC0" size={12} weight="medium" letterSpacing={0.5} textCase="upper">main.wgsl</Text>
    <Text color="#E0D4C8" size={13} font="JetBrains Mono" lineHeight={20}>fn fragment_main(input: VertexOutput) -> Color</Text>
    <Text color="#E0D4C8" size={13} font="JetBrains Mono" lineHeight={20}>  let k = input.bezier_coords;</Text>
    <Text color="#E0D4C8" size={13} font="JetBrains Mono" lineHeight={20}>  let d = k.x * k.x - k.y;</Text>
    <Text color="#E0D4C8" size={13} font="JetBrains Mono" lineHeight={20}>  discard_if d positive;</Text>
    <Text color="#E0D4C8" size={13} font="JetBrains Mono" lineHeight={20}>  return vec4(input.color, 1.0);</Text>
  </Frame>
  <Text color="#0F1923" size={18} lineHeight={30} font="Georgia" w="fill">
    By week 6, we had a working prototype. By week 10, it was 2× faster than the old pipeline on our benchmark suite. By week 13, it was 4×.
  </Text>
</Frame>`
}

export const AUTHOR_BIO_CARD: Recipe = {
  name: 'author-bio-card',
  type: 'content',
  style: 'minimal',
  description:
    'Author bio card for end of article: avatar, name, role, short bio, social links, "more from" link.',
  dimensions: '680×200',
  palette: ['#FAFAFA', '#0A0A0A', '#71717A', '#0070F3', '#E4E4E7'],
  font: 'Inter',
  jsx: `<Frame name="AuthorBioCard" w={680} flex="row" gap={20} p={28} bg="#FAFAFA" rounded={14} items="start">
  <Ellipse name="AuthorAvatar" w={72} h={72} bg="#0070F3" />
  <Frame grow={1} flex="col" gap={10}>
    <Frame flex="col" gap={4}>
      <Text color="#71717A" size={11} weight="semibold" letterSpacing={0.5} textCase="upper">About the author</Text>
      <Text color="#0A0A0A" size={18} weight="bold">Marcus Delgado</Text>
      <Text color="#71717A" size={13}>CTO & Co-founder · Ex-Figma, ex-Google</Text>
    </Frame>
    <Text color="#0A0A0A" size={14} lineHeight={22} w="fill">Building tools that get out of your way. Writing occasionally about rendering, performance, and the engineering that makes design feel instant.</Text>
    <Frame flex="row" gap={16} items="center">
      <Frame flex="row" gap={6} items="center"><Icon name="lucide:twitter" size={14} color="#71717A" /><Text color="#71717A" size={12}>@marcusd</Text></Frame>
      <Frame flex="row" gap={6} items="center"><Icon name="lucide:github" size={14} color="#71717A" /><Text color="#71717A" size={12}>marcusd</Text></Frame>
      <Text color="#0070F3" size={12} weight="semibold">More from Marcus →</Text>
    </Frame>
  </Frame>
</Frame>`
}
