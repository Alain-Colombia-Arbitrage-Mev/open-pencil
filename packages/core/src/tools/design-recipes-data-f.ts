import type { Recipe } from './design-recipes-data-a'

export const CHART_LINE_CARD: Recipe = {
  name: 'chart-line-card',
  type: 'dashboard',
  style: 'linear',
  description:
    'Dashboard card with line chart. Header with metric, delta, legend, and rendered line chart using polyline-style strokes.',
  dimensions: '640×320',
  palette: ['#FFFFFF', '#0A0A0A', '#71717A', '#5E6AD2', '#10B981', '#F4F4F5'],
  font: 'Inter',
  jsx: `<Frame name="LineChartCard" w={640} h={320} bg="#FFFFFF" rounded={12} stroke="#F4F4F5" strokeWidth={1} flex="col" p={24} gap={16}>
  <Frame w="fill" flex="row" items="start" justify="between">
    <Frame flex="col" gap={6}>
      <Text color="#71717A" size={12} weight="semibold" letterSpacing={0.5} textCase="upper">Revenue · Last 30 days</Text>
      <Frame flex="row" gap={10} items="end">
        <Text color="#0A0A0A" size={32} weight="bold" letterSpacing={-1}>$84,293</Text>
        <Frame pb={6} px={8} py={2} bg="#10B98114" rounded={4} flex="row" items="center" gap={2}>
          <Icon name="lucide:trending-up" size={10} color="#10B981" />
          <Text color="#10B981" size={11} weight="semibold">+12.4%</Text>
        </Frame>
      </Frame>
    </Frame>
    <Frame flex="row" gap={8}>
      <Frame h={28} px={10} stroke="#E4E4E7" strokeWidth={1} rounded={6} flex="row" items="center" gap={4}><Text color="#71717A" size={11} weight="medium">30D</Text></Frame>
      <Frame h={28} px={10} bg="#0A0A0A" rounded={6} flex="row" items="center"><Text color="#FFFFFF" size={11} weight="semibold">90D</Text></Frame>
      <Frame h={28} px={10} stroke="#E4E4E7" strokeWidth={1} rounded={6} flex="row" items="center"><Text color="#71717A" size={11} weight="medium">1Y</Text></Frame>
    </Frame>
  </Frame>
  <Frame name="ChartArea" w="fill" grow={1} flex="col" gap={8}>
    <Frame name="ChartPlot" w="fill" grow={1} flex="row" items="end" gap={2} px={4}>
      <Rectangle w={16} h={52} bg="#5E6AD240" rounded={2} />
      <Rectangle w={16} h={68} bg="#5E6AD240" rounded={2} />
      <Rectangle w={16} h={82} bg="#5E6AD240" rounded={2} />
      <Rectangle w={16} h={64} bg="#5E6AD240" rounded={2} />
      <Rectangle w={16} h={96} bg="#5E6AD2" rounded={2} />
      <Rectangle w={16} h={118} bg="#5E6AD240" rounded={2} />
      <Rectangle w={16} h={104} bg="#5E6AD240" rounded={2} />
      <Rectangle w={16} h={128} bg="#5E6AD2" rounded={2} />
      <Rectangle w={16} h={112} bg="#5E6AD240" rounded={2} />
      <Rectangle w={16} h={148} bg="#5E6AD240" rounded={2} />
      <Rectangle w={16} h={132} bg="#5E6AD240" rounded={2} />
      <Rectangle w={16} h={168} bg="#5E6AD2" rounded={2} />
      <Rectangle w={16} h={152} bg="#5E6AD240" rounded={2} />
      <Rectangle w={16} h={184} bg="#5E6AD240" rounded={2} />
      <Rectangle w={16} h={176} bg="#5E6AD2" rounded={2} />
      <Rectangle w={16} h={196} bg="#5E6AD240" rounded={2} />
      <Rectangle w={16} h={172} bg="#5E6AD240" rounded={2} />
      <Rectangle w={16} h={208} bg="#5E6AD2" rounded={2} />
    </Frame>
    <Frame name="ChartXAxis" w="fill" flex="row" justify="between" px={4}>
      <Text color="#A1A1AA" size={10}>Mar 1</Text>
      <Text color="#A1A1AA" size={10}>Mar 8</Text>
      <Text color="#A1A1AA" size={10}>Mar 15</Text>
      <Text color="#A1A1AA" size={10}>Mar 22</Text>
      <Text color="#A1A1AA" size={10}>Mar 29</Text>
      <Text color="#A1A1AA" size={10}>Apr 5</Text>
    </Frame>
  </Frame>
</Frame>`
}

export const CHART_BAR_COMPARISON: Recipe = {
  name: 'chart-bar-comparison',
  type: 'dashboard',
  style: 'linear',
  description:
    'Horizontal bar chart card comparing 5 categories. Label left, bar fill center, value right.',
  dimensions: '500×380',
  palette: ['#FFFFFF', '#0A0A0A', '#71717A', '#5E6AD2', '#F4F4F5'],
  font: 'Inter',
  jsx: `<Frame name="BarChartCard" w={500} bg="#FFFFFF" rounded={12} stroke="#F4F4F5" strokeWidth={1} p={24} flex="col" gap={20}>
  <Frame flex="col" gap={4}>
    <Text color="#0A0A0A" size={15} weight="semibold">Top sources</Text>
    <Text color="#71717A" size={12}>Breakdown by referrer · Last 7 days</Text>
  </Frame>
  <Frame w="fill" flex="col" gap={14}>
    <Frame w="fill" flex="col" gap={6}>
      <Frame flex="row" justify="between"><Text color="#0A0A0A" size={13} weight="medium">Direct</Text><Text color="#0A0A0A" size={13} weight="semibold">8,420</Text></Frame>
      <Frame w="fill" h={6} bg="#F4F4F5" rounded={3} overflow="hidden"><Rectangle w={440} h={6} bg="#5E6AD2" rounded={3} /></Frame>
    </Frame>
    <Frame w="fill" flex="col" gap={6}>
      <Frame flex="row" justify="between"><Text color="#0A0A0A" size={13} weight="medium">Google</Text><Text color="#0A0A0A" size={13} weight="semibold">5,294</Text></Frame>
      <Frame w="fill" h={6} bg="#F4F4F5" rounded={3} overflow="hidden"><Rectangle w={280} h={6} bg="#5E6AD2CC" rounded={3} /></Frame>
    </Frame>
    <Frame w="fill" flex="col" gap={6}>
      <Frame flex="row" justify="between"><Text color="#0A0A0A" size={13} weight="medium">Twitter</Text><Text color="#0A0A0A" size={13} weight="semibold">3,102</Text></Frame>
      <Frame w="fill" h={6} bg="#F4F4F5" rounded={3} overflow="hidden"><Rectangle w={172} h={6} bg="#5E6AD299" rounded={3} /></Frame>
    </Frame>
    <Frame w="fill" flex="col" gap={6}>
      <Frame flex="row" justify="between"><Text color="#0A0A0A" size={13} weight="medium">Product Hunt</Text><Text color="#0A0A0A" size={13} weight="semibold">1,847</Text></Frame>
      <Frame w="fill" h={6} bg="#F4F4F5" rounded={3} overflow="hidden"><Rectangle w={108} h={6} bg="#5E6AD266" rounded={3} /></Frame>
    </Frame>
    <Frame w="fill" flex="col" gap={6}>
      <Frame flex="row" justify="between"><Text color="#0A0A0A" size={13} weight="medium">Newsletter</Text><Text color="#0A0A0A" size={13} weight="semibold">924</Text></Frame>
      <Frame w="fill" h={6} bg="#F4F4F5" rounded={3} overflow="hidden"><Rectangle w={56} h={6} bg="#5E6AD244" rounded={3} /></Frame>
    </Frame>
  </Frame>
</Frame>`
}

export const FILTER_BAR: Recipe = {
  name: 'filter-bar',
  type: 'dashboard',
  style: 'linear',
  description:
    'Horizontal filter bar for list/table views: search input, filter chips (active + inactive), sort dropdown, view switcher, CTA.',
  dimensions: '1200×56',
  palette: ['#FFFFFF', '#0A0A0A', '#71717A', '#5E6AD2', '#F4F4F5'],
  font: 'Inter',
  jsx: `<Frame name="FilterBar" w={1200} h={56} bg="#FFFFFF" flex="row" items="center" gap={12} px={20} stroke="#F4F4F5" strokeWidth={1} strokeAlign="INSIDE">
  <Frame name="SearchInput" w={260} h={32} stroke="#E4E4E7" strokeWidth={1} rounded={8} flex="row" items="center" gap={8} px={10}>
    <Icon name="lucide:search" size={14} color="#A1A1AA" />
    <Text color="#A1A1AA" size={13}>Search issues...</Text>
  </Frame>
  <Rectangle w={1} h={20} bg="#E4E4E7" />
  <Frame flex="row" gap={6} items="center">
    <Frame h={28} px={10} bg="#0A0A0A" rounded={6} flex="row" items="center" gap={6}>
      <Icon name="lucide:circle" size={10} color="#FFFFFF" />
      <Text color="#FFFFFF" size={12} weight="semibold">Status · Open</Text>
      <Icon name="lucide:x" size={11} color="#FFFFFF" />
    </Frame>
    <Frame h={28} px={10} bg="#0A0A0A" rounded={6} flex="row" items="center" gap={6}>
      <Icon name="lucide:user" size={10} color="#FFFFFF" />
      <Text color="#FFFFFF" size={12} weight="semibold">Assignee · Me</Text>
      <Icon name="lucide:x" size={11} color="#FFFFFF" />
    </Frame>
    <Frame h={28} px={10} stroke="#E4E4E7" strokeWidth={1} rounded={6} flex="row" items="center" gap={6}>
      <Icon name="lucide:plus" size={11} color="#71717A" />
      <Text color="#71717A" size={12} weight="medium">Filter</Text>
    </Frame>
  </Frame>
  <Frame flex="row" gap={8} items="center">
    <Frame h={28} px={10} stroke="#E4E4E7" strokeWidth={1} rounded={6} flex="row" items="center" gap={6}>
      <Icon name="lucide:arrow-down-up" size={11} color="#71717A" />
      <Text color="#71717A" size={12} weight="medium">Sort · Priority</Text>
    </Frame>
    <Frame h={28} stroke="#E4E4E7" strokeWidth={1} rounded={6} flex="row" items="center">
      <Frame h={28} px={10} bg="#F4F4F5" flex="row" items="center"><Icon name="lucide:list" size={13} color="#0A0A0A" /></Frame>
      <Frame h={28} px={10} flex="row" items="center"><Icon name="lucide:kanban" size={13} color="#71717A" /></Frame>
      <Frame h={28} px={10} flex="row" items="center"><Icon name="lucide:calendar" size={13} color="#71717A" /></Frame>
    </Frame>
    <Frame h={32} px={12} bg="#5E6AD2" rounded={6} flex="row" items="center" gap={6}>
      <Icon name="lucide:plus" size={13} color="#FFFFFF" />
      <Text color="#FFFFFF" size={12} weight="semibold">New issue</Text>
    </Frame>
  </Frame>
</Frame>`
}

export const DATA_TABLE: Recipe = {
  name: 'data-table',
  type: 'dashboard',
  style: 'linear',
  description:
    'Data table with checkbox column, avatar, name, status badge, role, joined date, actions. Hover + zebra striping.',
  dimensions: '1200×420',
  palette: ['#FFFFFF', '#0A0A0A', '#71717A', '#10B981', '#F4F4F5'],
  font: 'Inter',
  jsx: `<Frame name="DataTable" w={1200} bg="#FFFFFF" rounded={12} stroke="#F4F4F5" strokeWidth={1} flex="col" overflow="hidden">
  <Frame name="TableHeader" w="fill" h={44} bg="#FAFAFA" flex="row" items="center" px={16} gap={12} stroke="#F4F4F5" strokeWidth={1} strokeAlign="INSIDE">
    <Rectangle w={16} h={16} stroke="#E4E4E7" strokeWidth={1} rounded={4} />
    <Frame w={280} flex="row" items="center" gap={4}><Text color="#71717A" size={11} weight="semibold" letterSpacing={0.5} textCase="upper">Name</Text><Icon name="lucide:arrow-down" size={10} color="#71717A" /></Frame>
    <Frame w={120} flex="row" items="center"><Text color="#71717A" size={11} weight="semibold" letterSpacing={0.5} textCase="upper">Status</Text></Frame>
    <Frame w={160} flex="row" items="center"><Text color="#71717A" size={11} weight="semibold" letterSpacing={0.5} textCase="upper">Role</Text></Frame>
    <Frame w={140} flex="row" items="center"><Text color="#71717A" size={11} weight="semibold" letterSpacing={0.5} textCase="upper">Team</Text></Frame>
    <Frame grow={1} flex="row" items="center"><Text color="#71717A" size={11} weight="semibold" letterSpacing={0.5} textCase="upper">Last active</Text></Frame>
    <Frame w={40}></Frame>
  </Frame>
  <Frame w="fill" h={60} flex="row" items="center" px={16} gap={12} stroke="#F4F4F5" strokeWidth={1} strokeAlign="INSIDE">
    <Rectangle w={16} h={16} stroke="#E4E4E7" strokeWidth={1} rounded={4} />
    <Frame w={280} flex="row" items="center" gap={10}>
      <Ellipse w={28} h={28} bg="#5E6AD2" />
      <Frame flex="col" gap={1}><Text color="#0A0A0A" size={13} weight="semibold">Sarah Chen</Text><Text color="#71717A" size={11}>sarah@acme.com</Text></Frame>
    </Frame>
    <Frame w={120}><Frame h={22} px={8} bg="#10B98114" rounded={4} flex="row" items="center" gap={4}><Ellipse w={6} h={6} bg="#10B981" /><Text color="#10B981" size={11} weight="semibold">Active</Text></Frame></Frame>
    <Text color="#0A0A0A" size={13} w={160}>Admin</Text>
    <Text color="#0A0A0A" size={13} w={140}>Design</Text>
    <Text color="#71717A" size={13} grow={1}>2 minutes ago</Text>
    <Icon name="lucide:more-horizontal" size={14} color="#71717A" />
  </Frame>
  <Frame w="fill" h={60} bg="#FAFAFA" flex="row" items="center" px={16} gap={12} stroke="#F4F4F5" strokeWidth={1} strokeAlign="INSIDE">
    <Rectangle w={16} h={16} stroke="#E4E4E7" strokeWidth={1} rounded={4} />
    <Frame w={280} flex="row" items="center" gap={10}>
      <Ellipse w={28} h={28} bg="#00C7B7" />
      <Frame flex="col" gap={1}><Text color="#0A0A0A" size={13} weight="semibold">Marcus Delgado</Text><Text color="#71717A" size={11}>marcus@acme.com</Text></Frame>
    </Frame>
    <Frame w={120}><Frame h={22} px={8} bg="#10B98114" rounded={4} flex="row" items="center" gap={4}><Ellipse w={6} h={6} bg="#10B981" /><Text color="#10B981" size={11} weight="semibold">Active</Text></Frame></Frame>
    <Text color="#0A0A0A" size={13} w={160}>Admin</Text>
    <Text color="#0A0A0A" size={13} w={140}>Engineering</Text>
    <Text color="#71717A" size={13} grow={1}>12 minutes ago</Text>
    <Icon name="lucide:more-horizontal" size={14} color="#71717A" />
  </Frame>
  <Frame w="fill" h={60} flex="row" items="center" px={16} gap={12} stroke="#F4F4F5" strokeWidth={1} strokeAlign="INSIDE">
    <Rectangle w={16} h={16} stroke="#E4E4E7" strokeWidth={1} rounded={4} />
    <Frame w={280} flex="row" items="center" gap={10}>
      <Ellipse w={28} h={28} bg="#F5A623" />
      <Frame flex="col" gap={1}><Text color="#0A0A0A" size={13} weight="semibold">Priya Ramachandran</Text><Text color="#71717A" size={11}>priya@acme.com</Text></Frame>
    </Frame>
    <Frame w={120}><Frame h={22} px={8} bg="#A1A1AA14" rounded={4} flex="row" items="center" gap={4}><Ellipse w={6} h={6} bg="#A1A1AA" /><Text color="#71717A" size={11} weight="semibold">Invited</Text></Frame></Frame>
    <Text color="#0A0A0A" size={13} w={160}>Member</Text>
    <Text color="#0A0A0A" size={13} w={140}>Design</Text>
    <Text color="#71717A" size={13} grow={1}>—</Text>
    <Icon name="lucide:more-horizontal" size={14} color="#71717A" />
  </Frame>
  <Frame w="fill" h={60} bg="#FAFAFA" flex="row" items="center" px={16} gap={12} stroke="#F4F4F5" strokeWidth={1} strokeAlign="INSIDE">
    <Rectangle w={16} h={16} stroke="#E4E4E7" strokeWidth={1} rounded={4} />
    <Frame w={280} flex="row" items="center" gap={10}>
      <Ellipse w={28} h={28} bg="#EF4444" />
      <Frame flex="col" gap={1}><Text color="#0A0A0A" size={13} weight="semibold">Dan Kim</Text><Text color="#71717A" size={11}>dan@acme.com</Text></Frame>
    </Frame>
    <Frame w={120}><Frame h={22} px={8} bg="#10B98114" rounded={4} flex="row" items="center" gap={4}><Ellipse w={6} h={6} bg="#10B981" /><Text color="#10B981" size={11} weight="semibold">Active</Text></Frame></Frame>
    <Text color="#0A0A0A" size={13} w={160}>Member</Text>
    <Text color="#0A0A0A" size={13} w={140}>Engineering</Text>
    <Text color="#71717A" size={13} grow={1}>3 hours ago</Text>
    <Icon name="lucide:more-horizontal" size={14} color="#71717A" />
  </Frame>
  <Frame w="fill" h={44} flex="row" items="center" justify="between" px={16}>
    <Text color="#71717A" size={12}>Showing 1–4 of 28</Text>
    <Frame flex="row" gap={4} items="center">
      <Frame w={28} h={28} stroke="#E4E4E7" strokeWidth={1} rounded={6} flex="row" items="center" justify="center"><Icon name="lucide:chevron-left" size={13} color="#71717A" /></Frame>
      <Frame w={28} h={28} bg="#0A0A0A" rounded={6} flex="row" items="center" justify="center"><Text color="#FFFFFF" size={12} weight="semibold">1</Text></Frame>
      <Frame w={28} h={28} stroke="#E4E4E7" strokeWidth={1} rounded={6} flex="row" items="center" justify="center"><Text color="#71717A" size={12}>2</Text></Frame>
      <Frame w={28} h={28} stroke="#E4E4E7" strokeWidth={1} rounded={6} flex="row" items="center" justify="center"><Text color="#71717A" size={12}>3</Text></Frame>
      <Frame w={28} h={28} stroke="#E4E4E7" strokeWidth={1} rounded={6} flex="row" items="center" justify="center"><Icon name="lucide:chevron-right" size={13} color="#71717A" /></Frame>
    </Frame>
  </Frame>
</Frame>`
}

export const PRODUCT_DETAIL_PAGE: Recipe = {
  name: 'ecommerce-product-detail',
  type: 'product',
  style: 'minimal',
  description:
    'Product detail hero: left gallery with thumbnails, right info (breadcrumb, title, price, variants, qty, add-to-bag, accordion).',
  dimensions: '1200×680',
  palette: ['#FFFFFF', '#1A1A1A', '#6B6B6B', '#F5F5F5', '#E4E4E7'],
  font: 'Inter',
  jsx: `<Frame name="ProductDetail" w={1200} flex="row" gap={48} py={48} px={24} bg="#FFFFFF" items="start">
  <Frame name="ProductGallery" w={600} flex="col" gap={12}>
    <Rectangle name="ProductMainImage" w="fill" h={540} bg="#F5F5F5" rounded={8} />
    <Frame flex="row" gap={12}>
      <Rectangle w={96} h={96} bg="#EBEBEB" rounded={6} stroke="#1A1A1A" strokeWidth={2} />
      <Rectangle w={96} h={96} bg="#E0E0E0" rounded={6} />
      <Rectangle w={96} h={96} bg="#D4D4D4" rounded={6} />
      <Rectangle w={96} h={96} bg="#CBCBCB" rounded={6} />
    </Frame>
  </Frame>
  <Frame name="ProductInfo" grow={1} flex="col" gap={20}>
    <Frame flex="row" gap={6} items="center">
      <Text color="#6B6B6B" size={12}>Accessories</Text>
      <Icon name="lucide:chevron-right" size={11} color="#6B6B6B" />
      <Text color="#6B6B6B" size={12}>Bags</Text>
      <Icon name="lucide:chevron-right" size={11} color="#6B6B6B" />
      <Text color="#1A1A1A" size={12}>Totes</Text>
    </Frame>
    <Frame flex="col" gap={8}>
      <Text color="#6B6B6B" size={12} weight="medium" letterSpacing={0.5} textCase="upper">Everyday Studio</Text>
      <Text color="#1A1A1A" size={32} weight="bold" letterSpacing={-1}>Minimal Leather Tote Bag</Text>
      <Frame flex="row" items="center" gap={12}>
        <Frame flex="row" gap={2}>
          <Icon name="lucide:star" size={14} color="#1A1A1A" />
          <Icon name="lucide:star" size={14} color="#1A1A1A" />
          <Icon name="lucide:star" size={14} color="#1A1A1A" />
          <Icon name="lucide:star" size={14} color="#1A1A1A" />
          <Icon name="lucide:star" size={14} color="#1A1A1A" />
        </Frame>
        <Text color="#6B6B6B" size={13}>4.8 (214 reviews)</Text>
      </Frame>
    </Frame>
    <Frame flex="row" items="end" gap={10}>
      <Text color="#1A1A1A" size={28} weight="bold">$148</Text>
      <Text color="#6B6B6B" size={15} textDecoration="strikethrough" pb={4}>$220</Text>
      <Frame pb={4} px={8} py={2} bg="#10B98114" rounded={4}><Text color="#10B981" size={11} weight="semibold">-33%</Text></Frame>
    </Frame>
    <Text color="#6B6B6B" size={14} lineHeight={22} w="fill">Handcrafted full-grain leather. Reinforced stitching. Interior pocket for laptop up to 15". Built to age beautifully for 10+ years.</Text>
    <Frame flex="col" gap={10}>
      <Text color="#1A1A1A" size={13} weight="semibold">Color · <Text color="#6B6B6B" size={13}>Cognac</Text></Text>
      <Frame flex="row" gap={8}>
        <Ellipse w={32} h={32} bg="#8B4513" stroke="#1A1A1A" strokeWidth={2} />
        <Ellipse w={32} h={32} bg="#1A1A1A" />
        <Ellipse w={32} h={32} bg="#D2B48C" />
        <Ellipse w={32} h={32} bg="#556B2F" />
      </Frame>
    </Frame>
    <Frame flex="row" gap={10} items="center">
      <Frame h={48} px={12} stroke="#E4E4E7" strokeWidth={1} rounded={8} flex="row" items="center" gap={12}>
        <Icon name="lucide:minus" size={14} color="#1A1A1A" />
        <Text color="#1A1A1A" size={14} weight="semibold">1</Text>
        <Icon name="lucide:plus" size={14} color="#1A1A1A" />
      </Frame>
      <Frame name="AddToBag" grow={1} h={48} bg="#1A1A1A" rounded={8} flex="row" items="center" justify="center" gap={8}>
        <Icon name="lucide:shopping-bag" size={16} color="#FFFFFF" />
        <Text color="#FFFFFF" size={14} weight="semibold">Add to bag · $148</Text>
      </Frame>
      <Frame w={48} h={48} stroke="#E4E4E7" strokeWidth={1} rounded={8} flex="row" items="center" justify="center"><Icon name="lucide:heart" size={16} color="#1A1A1A" /></Frame>
    </Frame>
    <Frame flex="row" gap={16} items="center" py={12} stroke="#E4E4E7" strokeWidth={1} strokeAlign="INSIDE">
      <Frame flex="row" gap={6} items="center"><Icon name="lucide:truck" size={14} color="#1A1A1A" /><Text color="#1A1A1A" size={12}>Free shipping over $100</Text></Frame>
      <Frame flex="row" gap={6} items="center"><Icon name="lucide:rotate-ccw" size={14} color="#1A1A1A" /><Text color="#1A1A1A" size={12}>30-day returns</Text></Frame>
    </Frame>
  </Frame>
</Frame>`
}

export const CART_DRAWER: Recipe = {
  name: 'cart-drawer',
  type: 'product',
  style: 'minimal',
  description:
    'Slide-in cart drawer: header with count + close, list of line items (image, name, variant, price, qty, remove), subtotal, checkout CTA.',
  dimensions: '420×800',
  palette: ['#FFFFFF', '#1A1A1A', '#6B6B6B', '#F5F5F5', '#E4E4E7'],
  font: 'Inter',
  jsx: `<Frame name="CartDrawer" w={420} h={800} bg="#FFFFFF" flex="col" stroke="#E4E4E7" strokeWidth={1} strokeAlign="INSIDE">
  <Frame name="CartHeader" w="fill" h={64} flex="row" items="center" justify="between" px={20} stroke="#E4E4E7" strokeWidth={1} strokeAlign="INSIDE">
    <Frame flex="row" gap={8} items="center"><Text color="#1A1A1A" size={18} weight="semibold">Your bag</Text><Text color="#6B6B6B" size={14}>(3)</Text></Frame>
    <Icon name="lucide:x" size={20} color="#1A1A1A" />
  </Frame>
  <Frame name="CartItems" w="fill" grow={1} flex="col" overflow="hidden">
    <Frame w="fill" flex="row" gap={12} p={20} stroke="#F5F5F5" strokeWidth={1} strokeAlign="INSIDE">
      <Rectangle w={80} h={80} bg="#F5F5F5" rounded={6} />
      <Frame grow={1} flex="col" gap={4}>
        <Text color="#1A1A1A" size={14} weight="semibold">Minimal Leather Tote Bag</Text>
        <Text color="#6B6B6B" size={12}>Cognac · One size</Text>
        <Frame flex="row" items="center" justify="between">
          <Frame h={26} stroke="#E4E4E7" strokeWidth={1} rounded={5} flex="row" items="center">
            <Frame h={26} px={8} flex="row" items="center"><Icon name="lucide:minus" size={11} color="#6B6B6B" /></Frame>
            <Text color="#1A1A1A" size={12} weight="semibold" px={8}>1</Text>
            <Frame h={26} px={8} flex="row" items="center"><Icon name="lucide:plus" size={11} color="#6B6B6B" /></Frame>
          </Frame>
          <Text color="#1A1A1A" size={14} weight="semibold">$148.00</Text>
        </Frame>
      </Frame>
    </Frame>
    <Frame w="fill" flex="row" gap={12} p={20} stroke="#F5F5F5" strokeWidth={1} strokeAlign="INSIDE">
      <Rectangle w={80} h={80} bg="#E8E6FF" rounded={6} />
      <Frame grow={1} flex="col" gap={4}>
        <Text color="#1A1A1A" size={14} weight="semibold">Linen Work Shirt</Text>
        <Text color="#6B6B6B" size={12}>Natural · M</Text>
        <Frame flex="row" items="center" justify="between">
          <Frame h={26} stroke="#E4E4E7" strokeWidth={1} rounded={5} flex="row" items="center">
            <Frame h={26} px={8} flex="row" items="center"><Icon name="lucide:minus" size={11} color="#6B6B6B" /></Frame>
            <Text color="#1A1A1A" size={12} weight="semibold" px={8}>2</Text>
            <Frame h={26} px={8} flex="row" items="center"><Icon name="lucide:plus" size={11} color="#6B6B6B" /></Frame>
          </Frame>
          <Text color="#1A1A1A" size={14} weight="semibold">$176.00</Text>
        </Frame>
      </Frame>
    </Frame>
    <Frame w="fill" flex="row" gap={12} p={20}>
      <Rectangle w={80} h={80} bg="#D4E5D4" rounded={6} />
      <Frame grow={1} flex="col" gap={4}>
        <Text color="#1A1A1A" size={14} weight="semibold">Canvas Sneaker</Text>
        <Text color="#6B6B6B" size={12}>Olive · 42 EU</Text>
        <Frame flex="row" items="center" justify="between">
          <Frame h={26} stroke="#E4E4E7" strokeWidth={1} rounded={5} flex="row" items="center">
            <Frame h={26} px={8} flex="row" items="center"><Icon name="lucide:minus" size={11} color="#6B6B6B" /></Frame>
            <Text color="#1A1A1A" size={12} weight="semibold" px={8}>1</Text>
            <Frame h={26} px={8} flex="row" items="center"><Icon name="lucide:plus" size={11} color="#6B6B6B" /></Frame>
          </Frame>
          <Text color="#1A1A1A" size={14} weight="semibold">$125.00</Text>
        </Frame>
      </Frame>
    </Frame>
  </Frame>
  <Frame name="CartFooter" w="fill" flex="col" gap={16} p={20} stroke="#E4E4E7" strokeWidth={1} strokeAlign="INSIDE">
    <Frame flex="col" gap={8}>
      <Frame flex="row" justify="between"><Text color="#6B6B6B" size={13}>Subtotal</Text><Text color="#1A1A1A" size={13} weight="medium">$449.00</Text></Frame>
      <Frame flex="row" justify="between"><Text color="#6B6B6B" size={13}>Shipping</Text><Text color="#1A1A1A" size={13} weight="medium">Free</Text></Frame>
      <Frame flex="row" justify="between" pt={8} stroke="#E4E4E7" strokeWidth={1} strokeAlign="INSIDE"><Text color="#1A1A1A" size={15} weight="semibold">Total</Text><Text color="#1A1A1A" size={15} weight="bold">$449.00</Text></Frame>
    </Frame>
    <Frame name="CheckoutBtn" w="fill" h={52} bg="#1A1A1A" rounded={8} flex="row" items="center" justify="center" gap={6}>
      <Text color="#FFFFFF" size={15} weight="semibold">Checkout</Text>
      <Icon name="lucide:arrow-right" size={15} color="#FFFFFF" />
    </Frame>
  </Frame>
</Frame>`
}

export const CHECKOUT_STEPPER: Recipe = {
  name: 'checkout-stepper',
  type: 'product',
  style: 'minimal',
  description:
    'Checkout progress stepper: 4 steps (Information → Shipping → Payment → Review) with active, complete, and future states.',
  dimensions: '960×80',
  palette: ['#FFFFFF', '#1A1A1A', '#6B6B6B', '#10B981', '#E4E4E7'],
  font: 'Inter',
  jsx: `<Frame name="CheckoutStepper" w={960} h={80} bg="#FFFFFF" flex="row" items="center" justify="between" px={32}>
  <Frame flex="row" gap={12} items="center" grow={1}>
    <Frame w={32} h={32} bg="#10B981" rounded={16} flex="row" items="center" justify="center"><Icon name="lucide:check" size={16} color="#FFFFFF" /></Frame>
    <Frame flex="col" gap={2}><Text color="#6B6B6B" size={11} weight="semibold" letterSpacing={0.3} textCase="upper">Step 1</Text><Text color="#1A1A1A" size={14} weight="semibold">Information</Text></Frame>
  </Frame>
  <Rectangle h={1} grow={1} bg="#10B981" />
  <Frame flex="row" gap={12} items="center" grow={1} px={20}>
    <Frame w={32} h={32} bg="#10B981" rounded={16} flex="row" items="center" justify="center"><Icon name="lucide:check" size={16} color="#FFFFFF" /></Frame>
    <Frame flex="col" gap={2}><Text color="#6B6B6B" size={11} weight="semibold" letterSpacing={0.3} textCase="upper">Step 2</Text><Text color="#1A1A1A" size={14} weight="semibold">Shipping</Text></Frame>
  </Frame>
  <Rectangle h={1} grow={1} bg="#E4E4E7" />
  <Frame flex="row" gap={12} items="center" grow={1} px={20}>
    <Frame w={32} h={32} bg="#1A1A1A" rounded={16} flex="row" items="center" justify="center"><Text color="#FFFFFF" size={13} weight="semibold">3</Text></Frame>
    <Frame flex="col" gap={2}><Text color="#6B6B6B" size={11} weight="semibold" letterSpacing={0.3} textCase="upper">Step 3</Text><Text color="#1A1A1A" size={14} weight="semibold">Payment</Text></Frame>
  </Frame>
  <Rectangle h={1} grow={1} bg="#E4E4E7" />
  <Frame flex="row" gap={12} items="center" grow={1} pl={20}>
    <Frame w={32} h={32} stroke="#E4E4E7" strokeWidth={1} rounded={16} flex="row" items="center" justify="center"><Text color="#6B6B6B" size={13} weight="semibold">4</Text></Frame>
    <Frame flex="col" gap={2}><Text color="#6B6B6B" size={11} weight="semibold" letterSpacing={0.3} textCase="upper">Step 4</Text><Text color="#6B6B6B" size={14} weight="medium">Review</Text></Frame>
  </Frame>
</Frame>`
}
