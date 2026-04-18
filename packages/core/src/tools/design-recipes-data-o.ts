import type { Recipe } from './design-recipes-data-a'

export const HERO_BRUTALIST: Recipe = {
  name: 'hero-brutalist',
  type: 'hero',
  style: 'brutalist',
  description:
    'Brutalist hero: harsh black borders, monospace display, zero rounding, high contrast. For counterculture / art brands.',
  dimensions: '1440×640',
  palette: ['#FAFA00', '#000000', '#FFFFFF', '#FF0000'],
  font: 'Space Grotesk',
  jsx: `<Frame name="HeroBrutal" w={1440} h={640} bg="#FAFA00" flex="col" stroke="#000000" strokeWidth={4} strokeAlign="INSIDE">
  <Frame w="fill" flex="row" items="center" justify="between" px={32} py={20} stroke="#000000" strokeWidth={4} strokeAlign="INSIDE">
    <Text color="#000000" size={22} weight="bold" font="JetBrains Mono" letterSpacing={-0.5}>STUDIO.404</Text>
    <Frame flex="row" gap={24}>
      <Text color="#000000" size={14} weight="bold" font="JetBrains Mono">WORK</Text>
      <Text color="#000000" size={14} weight="bold" font="JetBrains Mono">ABOUT</Text>
      <Text color="#000000" size={14} weight="bold" font="JetBrains Mono">PRESS</Text>
      <Text color="#000000" size={14} weight="bold" font="JetBrains Mono">CONTACT</Text>
    </Frame>
  </Frame>
  <Frame w="fill" grow={1} flex="row" p={0}>
    <Frame w={880} h="fill" flex="col" justify="between" p={48} stroke="#000000" strokeWidth={4} strokeAlign="INSIDE">
      <Frame flex="col" gap={4}>
        <Text color="#000000" size={12} weight="bold" font="JetBrains Mono" letterSpacing={2}>◆◆◆ ISSUE 042 · Q2 2026</Text>
        <Text color="#000000" size={14} weight="medium" font="JetBrains Mono">APRIL — JUNE</Text>
      </Frame>
      <Frame flex="col" gap={16}>
        <Text color="#000000" size={132} weight="bold" letterSpacing={-6} lineHeight={120}>BIG.</Text>
        <Text color="#000000" size={132} weight="bold" letterSpacing={-6} lineHeight={120}>BOLD.</Text>
        <Text color="#FF0000" size={132} weight="bold" letterSpacing={-6} lineHeight={120}>BROKEN.</Text>
      </Frame>
      <Frame flex="row" gap={16} items="center">
        <Frame h={48} px={20} bg="#000000" flex="row" items="center" gap={8}>
          <Text color="#FAFA00" size={14} weight="bold" font="JetBrains Mono">SEE THE WORK ►</Text>
        </Frame>
        <Text color="#000000" size={13} weight="medium" font="JetBrains Mono">48 projects · 12 countries</Text>
      </Frame>
    </Frame>
    <Frame grow={1} flex="col">
      <Frame w="fill" grow={1} bg="#FFFFFF" flex="col" justify="between" p={32} stroke="#000000" strokeWidth={4} strokeAlign="INSIDE">
        <Text color="#000000" size={18} weight="bold" font="JetBrains Mono" lineHeight={26}>"Design that refuses to be pleasant."</Text>
        <Text color="#000000" size={11} weight="medium" font="JetBrains Mono">— IDEA MAGAZINE</Text>
      </Frame>
      <Frame w="fill" h={160} bg="#FF0000" flex="row" items="center" justify="center" stroke="#000000" strokeWidth={4} strokeAlign="INSIDE">
        <Text color="#FFFFFF" size={56} weight="bold" letterSpacing={-2}>★</Text>
      </Frame>
    </Frame>
  </Frame>
</Frame>`
}

export const PRODUCT_CARD_BRUTALIST: Recipe = {
  name: 'product-card-brutalist',
  type: 'card',
  style: 'brutalist',
  description:
    'Brutalist product card: thick black stroke, no rounding, stamped price tag, raw typography. For indie e-commerce.',
  dimensions: '320×460',
  palette: ['#FFFFFF', '#000000', '#FF0000', '#FAFA00'],
  font: 'JetBrains Mono',
  jsx: `<Frame name="BrutalCard" w={320} h={460} bg="#FFFFFF" flex="col" stroke="#000000" strokeWidth={3} strokeAlign="INSIDE">
  <Frame w="fill" h={260} bg="#FAFA00" flex="col" items="center" justify="center" stroke="#000000" strokeWidth={3} strokeAlign="INSIDE">
    <Rectangle w={140} h={140} bg="#000000" />
  </Frame>
  <Frame w="fill" grow={1} flex="col" justify="between" p={16} gap={10}>
    <Frame flex="col" gap={8}>
      <Frame flex="row" items="center" gap={8}>
        <Text color="#000000" size={10} weight="bold" font="JetBrains Mono" letterSpacing={1}>[ ZINE / EDITION OF 50 ]</Text>
      </Frame>
      <Text color="#000000" size={22} weight="bold" letterSpacing={-0.5} lineHeight={26}>CONCRETE UTOPIA Vol. 3</Text>
      <Text color="#000000" size={12} lineHeight={18} font="JetBrains Mono">112 pages. Risograph-printed. Hand-bound in Lisbon.</Text>
    </Frame>
    <Frame flex="row" items="end" justify="between">
      <Frame flex="col" gap={2}>
        <Text color="#000000" size={10} weight="bold" font="JetBrains Mono">PRICE</Text>
        <Text color="#FF0000" size={28} weight="bold" letterSpacing={-1}>€48</Text>
      </Frame>
      <Frame h={36} px={14} bg="#000000" flex="row" items="center" gap={6}><Text color="#FFFFFF" size={12} weight="bold" font="JetBrains Mono">BUY</Text><Icon name="lucide:arrow-right" size={13} color="#FFFFFF" /></Frame>
    </Frame>
  </Frame>
</Frame>`
}

export const HERO_NEON_CYBERPUNK: Recipe = {
  name: 'hero-neon-cyberpunk',
  type: 'hero',
  style: 'neon',
  description:
    'Neon cyberpunk hero: near-black bg, glowing cyan/magenta type, scanline accents. For gaming, crypto, dev tools.',
  dimensions: '1440×720',
  palette: ['#08090D', '#22D3EE', '#EC4899', '#A3E635', '#F4F4F5'],
  font: 'JetBrains Mono',
  jsx: `<Frame name="HeroNeon" w={1440} h={720} bg="#08090D" flex="col" items="center" justify="center" gap={28} px={48} overflow="hidden">
  <Frame x={0} y={0} w={1440} h={720}>
    <Ellipse x={100} y={100} w={400} h={300} bg="#22D3EE" blur={150} opacity={0.3} />
    <Ellipse x={900} y={400} w={400} h={300} bg="#EC4899" blur={140} opacity={0.3} />
    <Rectangle x={0} y={360} w={1440} h={1} bg="#22D3EE" opacity={0.4} />
    <Rectangle x={0} y={362} w={1440} h={1} bg="#22D3EE" opacity={0.2} />
  </Frame>
  <Frame flex="row" gap={8} items="center" h={32} px={14} bg="#08090D" stroke="#22D3EE" strokeWidth={1} rounded={4}>
    <Rectangle w={8} h={8} bg="#A3E635" />
    <Text color="#22D3EE" size={11} weight="bold" font="JetBrains Mono" letterSpacing={2}>SYSTEM:ONLINE · v2.4.0-beta</Text>
  </Frame>
  <Text color="#F4F4F5" size={96} weight="bold" textAlign="center" letterSpacing={-4} lineHeight={96} w={1200} font="JetBrains Mono">SHIP.CODE.</Text>
  <Text color="#22D3EE" size={96} weight="bold" textAlign="center" letterSpacing={-4} lineHeight={96} font="JetBrains Mono">REPEAT.</Text>
  <Text color="#F4F4F5CC" size={17} textAlign="center" lineHeight={26} w={620} font="JetBrains Mono">Terminal-first development environment for teams who move fast and break things responsibly.</Text>
  <Frame flex="row" gap={12} items="center">
    <Frame h={48} px={22} bg="#22D3EE" rounded={2} flex="row" items="center" gap={8} shadow="0 0 40 #22D3EE99"><Text color="#08090D" size={14} weight="bold" font="JetBrains Mono" letterSpacing={1}>$ INSTALL</Text></Frame>
    <Frame h={48} px={22} bg="#08090D" stroke="#EC4899" strokeWidth={1} rounded={2} flex="row" items="center" gap={8}><Text color="#EC4899" size={14} weight="bold" font="JetBrains Mono" letterSpacing={1}>READ DOCS →</Text></Frame>
  </Frame>
  <Frame flex="row" gap={24} items="center">
    <Frame flex="row" gap={6} items="center"><Rectangle w={6} h={6} bg="#A3E635" /><Text color="#F4F4F599" size={11} weight="medium" font="JetBrains Mono">142ms latency</Text></Frame>
    <Frame flex="row" gap={6} items="center"><Rectangle w={6} h={6} bg="#22D3EE" /><Text color="#F4F4F599" size={11} weight="medium" font="JetBrains Mono">99.99% uptime</Text></Frame>
    <Frame flex="row" gap={6} items="center"><Rectangle w={6} h={6} bg="#EC4899" /><Text color="#F4F4F599" size={11} weight="medium" font="JetBrains Mono">12.4k devs online</Text></Frame>
  </Frame>
</Frame>`
}

export const DASHBOARD_NEON_CRYPTO: Recipe = {
  name: 'dashboard-neon-crypto',
  type: 'dashboard',
  style: 'neon',
  description:
    'Crypto/trading dashboard with neon glow accents on dark bg. Portfolio value, chart with glow, holdings grid.',
  dimensions: '1200×600',
  palette: ['#08090D', '#14161F', '#22D3EE', '#A3E635', '#EC4899', '#F4F4F5'],
  font: 'JetBrains Mono',
  jsx: `<Frame name="CryptoDashboard" w={1200} h={600} bg="#08090D" flex="col" gap={14} p={20}>
  <Frame w="fill" flex="row" items="center" justify="between">
    <Frame flex="col" gap={4}>
      <Text color="#8892B0" size={11} font="JetBrains Mono" weight="medium" letterSpacing={1}>PORTFOLIO · MAINNET</Text>
      <Frame flex="row" items="end" gap={10}>
        <Text color="#F4F4F5" size={36} weight="bold" letterSpacing={-1} font="JetBrains Mono">$142,847.29</Text>
        <Frame flex="row" gap={4} items="center" pb={6}><Icon name="lucide:trending-up" size={13} color="#A3E635" /><Text color="#A3E635" size={13} weight="bold" font="JetBrains Mono">+$8,492 (6.3%)</Text></Frame>
      </Frame>
    </Frame>
    <Frame flex="row" gap={8}>
      <Frame h={36} px={14} bg="#14161F" stroke="#22D3EE" strokeWidth={1} rounded={4} flex="row" items="center" gap={6} shadow="0 0 16 #22D3EE40"><Icon name="lucide:plus" size={14} color="#22D3EE" /><Text color="#22D3EE" size={12} weight="bold" font="JetBrains Mono">BUY</Text></Frame>
      <Frame h={36} px={14} bg="#14161F" stroke="#EC4899" strokeWidth={1} rounded={4} flex="row" items="center" gap={6}><Icon name="lucide:minus" size={14} color="#EC4899" /><Text color="#EC4899" size={12} weight="bold" font="JetBrains Mono">SELL</Text></Frame>
    </Frame>
  </Frame>
  <Frame w="fill" flex="row" gap={12} grow={1}>
    <Frame grow={2} bg="#14161F" stroke="#22D3EE33" strokeWidth={1} rounded={4} flex="col" p={16} gap={10}>
      <Frame flex="row" items="center" justify="between">
        <Text color="#F4F4F5" size={12} weight="bold" font="JetBrains Mono">BTC/USD</Text>
        <Frame flex="row" gap={4}><Frame h={22} px={8} bg="#22D3EE" rounded={2}><Text color="#08090D" size={10} weight="bold" font="JetBrains Mono">1D</Text></Frame><Frame h={22} px={8} bg="#14161F" stroke="#22D3EE33" strokeWidth={1} rounded={2}><Text color="#8892B0" size={10} weight="bold" font="JetBrains Mono">1W</Text></Frame><Frame h={22} px={8} bg="#14161F" stroke="#22D3EE33" strokeWidth={1} rounded={2}><Text color="#8892B0" size={10} weight="bold" font="JetBrains Mono">1M</Text></Frame></Frame>
      </Frame>
      <Frame w="fill" grow={1} flex="row" items="end" gap={2}>
        <Rectangle w={16} h={60} bg="#22D3EE33" />
        <Rectangle w={16} h={80} bg="#22D3EE66" />
        <Rectangle w={16} h={100} bg="#22D3EE" shadow="0 0 12 #22D3EE" />
        <Rectangle w={16} h={90} bg="#22D3EE66" />
        <Rectangle w={16} h={120} bg="#22D3EE" shadow="0 0 12 #22D3EE" />
        <Rectangle w={16} h={140} bg="#22D3EE" shadow="0 0 12 #22D3EE" />
        <Rectangle w={16} h={130} bg="#22D3EE66" />
        <Rectangle w={16} h={160} bg="#22D3EE" shadow="0 0 14 #22D3EE" />
        <Rectangle w={16} h={180} bg="#22D3EE" shadow="0 0 16 #22D3EECC" />
        <Rectangle w={16} h={170} bg="#22D3EECC" />
        <Rectangle w={16} h={200} bg="#A3E635" shadow="0 0 20 #A3E635" />
        <Rectangle w={16} h={190} bg="#22D3EE" shadow="0 0 14 #22D3EE" />
        <Rectangle w={16} h={220} bg="#A3E635" shadow="0 0 22 #A3E635" />
        <Rectangle w={16} h={230} bg="#A3E635" shadow="0 0 24 #A3E635CC" />
      </Frame>
    </Frame>
    <Frame grow={1} bg="#14161F" stroke="#EC489933" strokeWidth={1} rounded={4} flex="col" p={16} gap={12}>
      <Text color="#F4F4F5" size={12} weight="bold" font="JetBrains Mono">HOLDINGS</Text>
      <Frame flex="col" gap={8}>
        <Frame flex="row" items="center" gap={10}>
          <Frame w={28} h={28} bg="#F59E0B14" stroke="#F59E0B" strokeWidth={1} rounded={14} flex="row" items="center" justify="center"><Text color="#F59E0B" size={12} weight="bold" font="JetBrains Mono">₿</Text></Frame>
          <Frame flex="col" gap={1} grow={1}><Text color="#F4F4F5" size={12} weight="bold" font="JetBrains Mono">BTC</Text><Text color="#8892B0" size={10} font="JetBrains Mono">1.423 BTC</Text></Frame>
          <Frame flex="col" gap={1} items="end"><Text color="#F4F4F5" size={12} weight="bold" font="JetBrains Mono">$92.4k</Text><Text color="#A3E635" size={10} weight="bold" font="JetBrains Mono">+4.2%</Text></Frame>
        </Frame>
        <Frame flex="row" items="center" gap={10}>
          <Frame w={28} h={28} bg="#22D3EE14" stroke="#22D3EE" strokeWidth={1} rounded={14} flex="row" items="center" justify="center"><Text color="#22D3EE" size={12} weight="bold" font="JetBrains Mono">Ξ</Text></Frame>
          <Frame flex="col" gap={1} grow={1}><Text color="#F4F4F5" size={12} weight="bold" font="JetBrains Mono">ETH</Text><Text color="#8892B0" size={10} font="JetBrains Mono">8.214 ETH</Text></Frame>
          <Frame flex="col" gap={1} items="end"><Text color="#F4F4F5" size={12} weight="bold" font="JetBrains Mono">$34.8k</Text><Text color="#A3E635" size={10} weight="bold" font="JetBrains Mono">+2.1%</Text></Frame>
        </Frame>
        <Frame flex="row" items="center" gap={10}>
          <Frame w={28} h={28} bg="#A855F714" stroke="#A855F7" strokeWidth={1} rounded={14} flex="row" items="center" justify="center"><Text color="#A855F7" size={11} weight="bold" font="JetBrains Mono">SOL</Text></Frame>
          <Frame flex="col" gap={1} grow={1}><Text color="#F4F4F5" size={12} weight="bold" font="JetBrains Mono">SOL</Text><Text color="#8892B0" size={10} font="JetBrains Mono">142 SOL</Text></Frame>
          <Frame flex="col" gap={1} items="end"><Text color="#F4F4F5" size={12} weight="bold" font="JetBrains Mono">$15.6k</Text><Text color="#EC4899" size={10} weight="bold" font="JetBrains Mono">-0.8%</Text></Frame>
        </Frame>
      </Frame>
    </Frame>
  </Frame>
</Frame>`
}

export const HERO_3D_ISOMETRIC: Recipe = {
  name: 'hero-3d-isometric',
  type: 'hero',
  style: '3d',
  description:
    'Hero with 3D isometric composition on right (cubes, rounded shapes suggesting depth). Used on product launches.',
  dimensions: '1440×720',
  palette: ['#FAFAFA', '#1A1A2E', '#6366F1', '#F97316', '#A78BFA', '#34D399'],
  font: 'Inter',
  jsx: `<Frame name="Hero3D" w={1440} h={720} bg="#FAFAFA" flex="row" items="center" px={64} gap={64}>
  <Frame name="HeroCopy" w={580} flex="col" gap={24}>
    <Frame flex="row" gap={8} items="center"><Frame h={24} px={10} bg="#6366F114" rounded={999}><Text color="#6366F1" size={11} weight="semibold" letterSpacing={0.5}>✨ CLOUD-NATIVE</Text></Frame></Frame>
    <Text color="#1A1A2E" size={64} weight="bold" letterSpacing={-2.5} lineHeight={68}>Infrastructure that feels alive</Text>
    <Text color="#4A5568" size={18} lineHeight={28}>Spin up servers, databases, and edge functions with a single command. Pay for what you use, scale without thinking.</Text>
    <Frame flex="row" gap={12} items="center">
      <Frame h={48} px={22} bg="#1A1A2E" rounded={10} flex="row" items="center" gap={8} shadow="0 8 24 #1A1A2E33"><Text color="#FFFFFF" size={14} weight="semibold">Deploy in 60s</Text><Icon name="lucide:arrow-right" size={14} color="#FFFFFF" /></Frame>
      <Frame h={48} px={22} stroke="#E4E4E7" strokeWidth={1} rounded={10} flex="row" items="center" gap={8}><Text color="#1A1A2E" size={14} weight="semibold">View pricing</Text></Frame>
    </Frame>
  </Frame>
  <Frame name="IsometricStage" grow={1} h={540} flex="row" items="center" justify="center">
    <Frame name="CubeStack" w={360} h={440} x={0} y={0}>
      <Rectangle x={80} y={280} w={200} h={80} bg="#1A1A2E" opacity={0.08} rotate={15} blur={4} />
      <Frame x={60} y={120} w={240} h={160} bg="#6366F1" rounded={20} shadow="0 30 60 #6366F166">
        <Frame x={0} y={0} w={240} h={40} bg="#FFFFFF1F" roundedTL={20} roundedTR={20} />
        <Frame x={16} y={52} w={200} h={10} bg="#FFFFFF66" rounded={4} />
        <Frame x={16} y={68} w={140} h={10} bg="#FFFFFF4D" rounded={4} />
        <Frame x={16} y={96} w={80} h={32} bg="#FFFFFF" rounded={8} />
      </Frame>
      <Frame x={140} y={60} w={180} h={120} bg="#F97316" rounded={18} shadow="0 24 48 #F9731666">
        <Frame x={14} y={14} w={40} h={40} bg="#FFFFFF33" rounded={10} />
        <Frame x={14} y={66} w={120} h={10} bg="#FFFFFF99" rounded={4} />
        <Frame x={14} y={82} w={80} h={8} bg="#FFFFFF66" rounded={4} />
      </Frame>
      <Frame x={20} y={180} w={160} h={110} bg="#A78BFA" rounded={16} shadow="0 20 40 #A78BFA66">
        <Frame x={14} y={14} w={132} h={12} bg="#FFFFFFCC" rounded={4} />
        <Frame x={14} y={32} w={72} h={10} bg="#FFFFFF80" rounded={4} />
        <Frame x={14} y={60} w={50} h={34} bg="#FFFFFF" rounded={8} />
      </Frame>
      <Frame x={220} y={220} w={120} h={110} bg="#34D399" rounded={14} shadow="0 18 36 #34D39966">
        <Frame x={12} y={12} w={32} h={32} bg="#FFFFFF4D" rounded={8} />
        <Frame x={12} y={56} w={96} h={8} bg="#FFFFFFCC" rounded={4} />
        <Frame x={12} y={70} w={60} h={6} bg="#FFFFFF80" rounded={3} />
      </Frame>
    </Frame>
  </Frame>
</Frame>`
}

export const FEATURE_CARDS_3D: Recipe = {
  name: 'features-3d-cards',
  type: 'features',
  style: '3d',
  description:
    '3-column feature grid with puffy 3D icon cards. Soft colored bg + bold shadow suggesting depth.',
  dimensions: '1200×500',
  palette: ['#FFFFFF', '#1A1A2E', '#6366F1', '#F97316', '#34D399', '#A78BFA'],
  font: 'Inter',
  jsx: `<Frame name="Features3D" w={1200} flex="col" gap={48} py={80} px={32} bg="#FFFFFF" items="center">
  <Frame flex="col" items="center" gap={10} w={640}>
    <Text color="#6366F1" size={12} weight="semibold" letterSpacing={1} textCase="upper">The platform</Text>
    <Text color="#1A1A2E" size={44} weight="bold" textAlign="center" letterSpacing={-1.5}>Everything in one place</Text>
  </Frame>
  <Frame w="fill" flex="row" gap={20}>
    <Frame grow={1} flex="col" gap={20} bg="#EFF0FE" rounded={28} p={28} shadow="0 20 40 #6366F126">
      <Frame w={80} h={80} bg="#6366F1" rounded={24} flex="row" items="center" justify="center" shadow="0 12 24 #6366F166">
        <Icon name="lucide:zap" size={40} color="#FFFFFF" />
      </Frame>
      <Frame flex="col" gap={8}>
        <Text color="#1A1A2E" size={20} weight="bold" letterSpacing={-0.5}>Lightning fast</Text>
        <Text color="#4A5568" size={14} lineHeight={22}>Sub-50ms response worldwide. Edge-first architecture. Feels native everywhere.</Text>
      </Frame>
    </Frame>
    <Frame grow={1} flex="col" gap={20} bg="#FEF0E6" rounded={28} p={28} shadow="0 20 40 #F9731626">
      <Frame w={80} h={80} bg="#F97316" rounded={24} flex="row" items="center" justify="center" shadow="0 12 24 #F9731666">
        <Icon name="lucide:shield-check" size={40} color="#FFFFFF" />
      </Frame>
      <Frame flex="col" gap={8}>
        <Text color="#1A1A2E" size={20} weight="bold" letterSpacing={-0.5}>Secure by default</Text>
        <Text color="#4A5568" size={14} lineHeight={22}>SOC 2 Type II, HIPAA ready, end-to-end encryption. Audit logs built in.</Text>
      </Frame>
    </Frame>
    <Frame grow={1} flex="col" gap={20} bg="#E8F7F0" rounded={28} p={28} shadow="0 20 40 #34D39926">
      <Frame w={80} h={80} bg="#34D399" rounded={24} flex="row" items="center" justify="center" shadow="0 12 24 #34D39966">
        <Icon name="lucide:workflow" size={40} color="#FFFFFF" />
      </Frame>
      <Frame flex="col" gap={8}>
        <Text color="#1A1A2E" size={20} weight="bold" letterSpacing={-0.5}>Scales with you</Text>
        <Text color="#4A5568" size={14} lineHeight={22}>Handle billions of events. Multi-region by default. Zero-downtime deploys.</Text>
      </Frame>
    </Frame>
  </Frame>
</Frame>`
}

export const PRICING_NEON: Recipe = {
  name: 'pricing-neon-tiers',
  type: 'pricing',
  style: 'neon',
  description:
    'Neon-glow pricing: dark bg, each tier bordered with glowing accent, monospace price. Crypto/dev tool feel.',
  dimensions: '1200×540',
  palette: ['#08090D', '#14161F', '#22D3EE', '#A3E635', '#EC4899', '#F4F4F5'],
  font: 'JetBrains Mono',
  jsx: `<Frame name="PricingNeon" w={1200} h={540} bg="#08090D" flex="col" items="center" justify="center" gap={32} px={24}>
  <Frame flex="col" items="center" gap={10}>
    <Text color="#22D3EE" size={12} weight="bold" letterSpacing={2} textCase="upper" font="JetBrains Mono">// PRICING</Text>
    <Text color="#F4F4F5" size={40} weight="bold" textAlign="center" letterSpacing={-1.5} font="JetBrains Mono">Pay only for what you run</Text>
  </Frame>
  <Frame flex="row" gap={16} items="stretch">
    <Frame w={300} bg="#14161F" stroke="#22D3EE" strokeWidth={1} rounded={4} flex="col" gap={18} p={24} shadow="0 0 40 #22D3EE33">
      <Text color="#22D3EE" size={12} weight="bold" letterSpacing={1} font="JetBrains Mono">[ STARTER ]</Text>
      <Frame flex="row" items="end" gap={4}>
        <Text color="#F4F4F5" size={40} weight="bold" letterSpacing={-1} font="JetBrains Mono">$0</Text>
        <Text color="#8892B0" size={12} pb={6} font="JetBrains Mono">/mo</Text>
      </Frame>
      <Frame flex="col" gap={10}>
        <Frame flex="row" gap={8} items="center"><Text color="#22D3EE" size={11} font="JetBrains Mono">✓</Text><Text color="#F4F4F5" size={12} font="JetBrains Mono">100k requests</Text></Frame>
        <Frame flex="row" gap={8} items="center"><Text color="#22D3EE" size={11} font="JetBrains Mono">✓</Text><Text color="#F4F4F5" size={12} font="JetBrains Mono">1 region</Text></Frame>
        <Frame flex="row" gap={8} items="center"><Text color="#22D3EE" size={11} font="JetBrains Mono">✓</Text><Text color="#F4F4F5" size={12} font="JetBrains Mono">Community support</Text></Frame>
      </Frame>
      <Frame w="fill" h={40} bg="#08090D" stroke="#22D3EE" strokeWidth={1} rounded={2} flex="row" items="center" justify="center"><Text color="#22D3EE" size={12} weight="bold" font="JetBrains Mono">$ START_FREE</Text></Frame>
    </Frame>
    <Frame w={320} bg="#14161F" stroke="#A3E635" strokeWidth={2} rounded={4} flex="col" gap={18} p={24} shadow="0 0 60 #A3E63580">
      <Frame flex="row" items="center" justify="between">
        <Text color="#A3E635" size={12} weight="bold" letterSpacing={1} font="JetBrains Mono">[ PRO ]</Text>
        <Frame h={20} px={6} bg="#A3E635" rounded={2}><Text color="#08090D" size={10} weight="bold" font="JetBrains Mono">POPULAR</Text></Frame>
      </Frame>
      <Frame flex="row" items="end" gap={4}>
        <Text color="#F4F4F5" size={40} weight="bold" letterSpacing={-1} font="JetBrains Mono">$29</Text>
        <Text color="#8892B0" size={12} pb={6} font="JetBrains Mono">/mo</Text>
      </Frame>
      <Frame flex="col" gap={10}>
        <Frame flex="row" gap={8} items="center"><Text color="#A3E635" size={11} font="JetBrains Mono">✓</Text><Text color="#F4F4F5" size={12} font="JetBrains Mono">10M requests</Text></Frame>
        <Frame flex="row" gap={8} items="center"><Text color="#A3E635" size={11} font="JetBrains Mono">✓</Text><Text color="#F4F4F5" size={12} font="JetBrains Mono">All regions</Text></Frame>
        <Frame flex="row" gap={8} items="center"><Text color="#A3E635" size={11} font="JetBrains Mono">✓</Text><Text color="#F4F4F5" size={12} font="JetBrains Mono">Priority support</Text></Frame>
        <Frame flex="row" gap={8} items="center"><Text color="#A3E635" size={11} font="JetBrains Mono">✓</Text><Text color="#F4F4F5" size={12} font="JetBrains Mono">Custom domains</Text></Frame>
      </Frame>
      <Frame w="fill" h={44} bg="#A3E635" rounded={2} flex="row" items="center" justify="center" shadow="0 0 24 #A3E635"><Text color="#08090D" size={12} weight="bold" font="JetBrains Mono">$ START_TRIAL</Text></Frame>
    </Frame>
    <Frame w={300} bg="#14161F" stroke="#EC4899" strokeWidth={1} rounded={4} flex="col" gap={18} p={24} shadow="0 0 40 #EC489933">
      <Text color="#EC4899" size={12} weight="bold" letterSpacing={1} font="JetBrains Mono">[ ENTERPRISE ]</Text>
      <Text color="#F4F4F5" size={32} weight="bold" letterSpacing={-0.5} font="JetBrains Mono">Custom</Text>
      <Frame flex="col" gap={10}>
        <Frame flex="row" gap={8} items="center"><Text color="#EC4899" size={11} font="JetBrains Mono">✓</Text><Text color="#F4F4F5" size={12} font="JetBrains Mono">Everything + SLA</Text></Frame>
        <Frame flex="row" gap={8} items="center"><Text color="#EC4899" size={11} font="JetBrains Mono">✓</Text><Text color="#F4F4F5" size={12} font="JetBrains Mono">Dedicated clusters</Text></Frame>
        <Frame flex="row" gap={8} items="center"><Text color="#EC4899" size={11} font="JetBrains Mono">✓</Text><Text color="#F4F4F5" size={12} font="JetBrains Mono">On-premise option</Text></Frame>
      </Frame>
      <Frame w="fill" h={40} bg="#08090D" stroke="#EC4899" strokeWidth={1} rounded={2} flex="row" items="center" justify="center"><Text color="#EC4899" size={12} weight="bold" font="JetBrains Mono">$ CONTACT</Text></Frame>
    </Frame>
  </Frame>
</Frame>`
}
