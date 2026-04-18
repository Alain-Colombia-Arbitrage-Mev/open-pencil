import type { Recipe } from './design-recipes-data-a'

export const HERO_LUXURY_MINIMAL: Recipe = {
  name: 'hero-luxury-minimal',
  type: 'hero',
  style: 'luxury',
  description:
    'Ultra-minimal luxury hero: ivory bg, tiny eyebrow, thin serif display, generous negative space. For premium brands.',
  dimensions: '1440×720',
  palette: ['#F7F4EE', '#1C1C1E', '#6B6B70', '#9C7A3C'],
  font: 'Cormorant Garamond',
  jsx: `<Frame name="HeroLuxury" w={1440} h={720} bg="#F7F4EE" flex="col" items="center" justify="center" gap={64} px={48}>
  <Frame flex="row" items="center" gap={40} w={1000} justify="between">
    <Rectangle w={80} h={1} bg="#9C7A3C" />
    <Text color="#9C7A3C" size={10} weight="medium" letterSpacing={5} textCase="upper">Maison · Est. 1987</Text>
    <Rectangle w={80} h={1} bg="#9C7A3C" />
  </Frame>
  <Text color="#1C1C1E" size={120} weight="medium" textAlign="center" letterSpacing={-3} lineHeight={112} font="Cormorant Garamond" w={1200}>L'art de vivre, perfected.</Text>
  <Text color="#6B6B70" size={17} textAlign="center" lineHeight={28} w={580} font="Georgia">A private collection of objects, furniture, and spaces — curated across eight decades and four generations.</Text>
  <Frame flex="row" gap={0} items="center" stroke="#1C1C1E" strokeWidth={1} strokeAlign="INSIDE">
    <Frame h={56} px={44} flex="row" items="center"><Text color="#1C1C1E" size={13} weight="medium" letterSpacing={3} textCase="upper">Discover</Text></Frame>
  </Frame>
  <Frame flex="row" gap={36} items="center">
    <Text color="#6B6B70" size={11} weight="medium" letterSpacing={2} textCase="upper">Paris</Text>
    <Ellipse w={3} h={3} bg="#9C7A3C" />
    <Text color="#6B6B70" size={11} weight="medium" letterSpacing={2} textCase="upper">New York</Text>
    <Ellipse w={3} h={3} bg="#9C7A3C" />
    <Text color="#6B6B70" size={11} weight="medium" letterSpacing={2} textCase="upper">Kyoto</Text>
    <Ellipse w={3} h={3} bg="#9C7A3C" />
    <Text color="#6B6B70" size={11} weight="medium" letterSpacing={2} textCase="upper">Milan</Text>
  </Frame>
</Frame>`
}

export const HERO_EDITORIAL_MAGAZINE: Recipe = {
  name: 'hero-editorial-magazine',
  type: 'hero',
  style: 'editorial',
  description:
    'Magazine-grade editorial hero: oversized serif headline, large image on left, meta info scattered like print typography.',
  dimensions: '1440×720',
  palette: ['#F4EFE6', '#1A0A0F', '#6B1F2E', '#665558', '#C4A57B'],
  font: 'Fraunces',
  jsx: `<Frame name="HeroEditorialMag" w={1440} h={720} bg="#F4EFE6" flex="row" gap={40} px={56} py={40}>
  <Frame w={600} h="fill" flex="col" justify="between">
    <Frame flex="row" items="center" justify="between" w="fill">
      <Text color="#6B1F2E" size={14} weight="bold" letterSpacing={3} textCase="upper" font="Fraunces">The Quarterly</Text>
      <Frame flex="row" gap={16} items="center">
        <Text color="#665558" size={12} weight="medium" letterSpacing={1}>№ 42</Text>
        <Ellipse w={3} h={3} bg="#C4A57B" />
        <Text color="#665558" size={12} weight="medium" letterSpacing={1}>SPRING 2026</Text>
      </Frame>
    </Frame>
    <Rectangle w="fill" h={560} bg="#C4A57B" rounded={0} />
    <Frame flex="row" items="center" justify="between" w="fill">
      <Text color="#665558" size={11} weight="medium" letterSpacing={2} textCase="upper">Photograph · Takashi Morita</Text>
      <Text color="#665558" size={11} weight="medium" letterSpacing={2} textCase="upper">Pg. 01</Text>
    </Frame>
  </Frame>
  <Frame grow={1} h="fill" flex="col" justify="between" py={40}>
    <Frame flex="col" gap={24}>
      <Frame flex="row" gap={10} items="center">
        <Rectangle w={40} h={2} bg="#6B1F2E" />
        <Text color="#6B1F2E" size={11} weight="bold" letterSpacing={3} textCase="upper" font="Fraunces">Cover Story · Craft</Text>
      </Frame>
      <Text color="#1A0A0F" size={84} weight="medium" letterSpacing={-2} lineHeight={80} font="Fraunces" w="fill">The quiet return of craftsmanship</Text>
      <Text color="#665558" size={20} lineHeight={32} font="Georgia" w="fill">In a world of algorithmic sameness, a new generation of makers is choosing patience over scale. We spent six months with five of them.</Text>
    </Frame>
    <Frame flex="col" gap={20}>
      <Rectangle w={120} h={1} bg="#1A0A0F" />
      <Frame flex="row" gap={16} items="center">
        <Ellipse w={44} h={44} bg="#6B1F2E" />
        <Frame flex="col" gap={2}>
          <Text color="#1A0A0F" size={13} weight="semibold" font="Fraunces">Ana Torres</Text>
          <Text color="#665558" size={11} weight="medium" letterSpacing={1}>EDITOR-IN-CHIEF</Text>
        </Frame>
        <Frame grow={1} />
        <Frame flex="col" gap={2} items="end">
          <Text color="#665558" size={11} weight="medium" letterSpacing={1}>A READ OF</Text>
          <Text color="#1A0A0F" size={13} weight="semibold" font="Fraunces">12 minutes</Text>
        </Frame>
      </Frame>
    </Frame>
  </Frame>
</Frame>`
}

export const HERO_NOISE_PREMIUM: Recipe = {
  name: 'hero-noise-premium',
  type: 'hero',
  style: 'noise',
  description:
    'Premium hero with subtle noise-texture feel (dark with grain overlays via opacity dots). Luxury + editorial crossover.',
  dimensions: '1440×720',
  palette: ['#0F0D0A', '#F4EFE6', '#C4A57B', '#665558'],
  font: 'Fraunces',
  jsx: `<Frame name="HeroNoise" w={1440} h={720} bg="#0F0D0A" flex="col" items="center" justify="center" gap={32} px={48} overflow="hidden">
  <Frame x={0} y={0} w={1440} h={720}>
    <Ellipse x={200} y={200} w={600} h={360} bg="#C4A57B" blur={200} opacity={0.15} />
    <Ellipse x={800} y={400} w={500} h={300} bg="#6B1F2E" blur={180} opacity={0.2} />
    <Rectangle x={50} y={80} w={2} h={2} bg="#F4EFE6" opacity={0.6} />
    <Rectangle x={180} y={240} w={2} h={2} bg="#F4EFE6" opacity={0.4} />
    <Rectangle x={320} y={140} w={1} h={1} bg="#F4EFE6" opacity={0.5} />
    <Rectangle x={480} y={380} w={2} h={2} bg="#F4EFE6" opacity={0.3} />
    <Rectangle x={600} y={220} w={1} h={1} bg="#F4EFE6" opacity={0.7} />
    <Rectangle x={760} y={500} w={2} h={2} bg="#F4EFE6" opacity={0.4} />
    <Rectangle x={920} y={340} w={1} h={1} bg="#F4EFE6" opacity={0.5} />
    <Rectangle x={1080} y={160} w={2} h={2} bg="#F4EFE6" opacity={0.4} />
    <Rectangle x={1240} y={280} w={1} h={1} bg="#F4EFE6" opacity={0.6} />
    <Rectangle x={1360} y={420} w={2} h={2} bg="#F4EFE6" opacity={0.3} />
  </Frame>
  <Frame flex="row" items="center" gap={16}>
    <Rectangle w={80} h={1} bg="#C4A57B" opacity={0.5} />
    <Text color="#C4A57B" size={10} weight="medium" letterSpacing={5} textCase="upper">Issue 47 · The Silence Issue</Text>
    <Rectangle w={80} h={1} bg="#C4A57B" opacity={0.5} />
  </Frame>
  <Text color="#F4EFE6" size={104} weight="medium" textAlign="center" letterSpacing={-3} lineHeight={100} font="Fraunces" w={1200}>Between every word, a world.</Text>
  <Text color="#F4EFE6CC" size={18} textAlign="center" lineHeight={28} w={580} font="Georgia">Long-form journalism for readers who haven't given up on attention. 12 essays, arriving each season.</Text>
  <Frame flex="row" gap={14} items="center">
    <Frame h={52} px={28} bg="#F4EFE6" rounded={2} flex="row" items="center" gap={8}><Text color="#0F0D0A" size={13} weight="semibold" letterSpacing={2} textCase="upper">Subscribe</Text></Frame>
    <Frame h={52} px={28} stroke="#F4EFE633" strokeWidth={1} rounded={2} flex="row" items="center"><Text color="#F4EFE6" size={13} weight="medium" letterSpacing={2} textCase="upper">Read excerpt</Text></Frame>
  </Frame>
</Frame>`
}

export const HERO_PLAYFUL_ROUNDED: Recipe = {
  name: 'hero-playful-rounded',
  type: 'hero',
  style: 'playful',
  description:
    'Playful chunky hero: thick rounded shapes, saturated primary colors, bold rounded sans. For consumer / kids / food brands.',
  dimensions: '1440×720',
  palette: ['#FFF4D6', '#1A1A2E', '#FF6B6B', '#4ECDC4', '#FCD34D', '#A78BFA'],
  font: 'Fredoka',
  jsx: `<Frame name="HeroPlayful" w={1440} h={720} bg="#FFF4D6" flex="row" items="center" px={64} gap={48}>
  <Frame w={680} flex="col" gap={28}>
    <Frame h={44} px={18} bg="#FF6B6B" rounded={22} flex="row" items="center" gap={8} w={240}>
      <Text color="#FFFFFF" size={16} weight="bold" font="Fredoka">🍕 Order in 3 taps</Text>
    </Frame>
    <Text color="#1A1A2E" size={96} weight="bold" letterSpacing={-3} lineHeight={92} font="Fredoka">Yum is here.</Text>
    <Text color="#1A1A2E" size={20} lineHeight={30} w={560} font="Fredoka">Real food, from real kitchens, at real prices. We connect you to 8,000+ independent restaurants in 24 cities.</Text>
    <Frame flex="row" gap={14} items="center">
      <Frame h={64} px={32} bg="#1A1A2E" rounded={32} flex="row" items="center" gap={10} shadow="0 10 24 #1A1A2E40"><Text color="#FFFFFF" size={18} weight="bold" font="Fredoka">Start ordering</Text><Icon name="lucide:arrow-right" size={18} color="#FFFFFF" /></Frame>
      <Frame h={64} px={32} bg="#FFFFFF" stroke="#1A1A2E" strokeWidth={3} rounded={32} flex="row" items="center"><Text color="#1A1A2E" size={18} weight="bold" font="Fredoka">Browse menus</Text></Frame>
    </Frame>
    <Frame flex="row" gap={20} items="center">
      <Frame flex="row">
        <Ellipse w={40} h={40} bg="#FF6B6B" stroke="#FFF4D6" strokeWidth={3} />
        <Ellipse w={40} h={40} bg="#4ECDC4" stroke="#FFF4D6" strokeWidth={3} x={-12} />
        <Ellipse w={40} h={40} bg="#FCD34D" stroke="#FFF4D6" strokeWidth={3} x={-24} />
        <Ellipse w={40} h={40} bg="#A78BFA" stroke="#FFF4D6" strokeWidth={3} x={-36} />
      </Frame>
      <Text color="#1A1A2E" size={15} weight="bold" font="Fredoka">2M+ happy people</Text>
    </Frame>
  </Frame>
  <Frame grow={1} h={560} flex="col" items="center" justify="center">
    <Frame name="Shape1" x={0} y={20} w={260} h={260} bg="#FF6B6B" rounded={130} shadow="0 20 40 #FF6B6B66" />
    <Frame name="Shape2" x={180} y={60} w={200} h={200} bg="#FCD34D" rounded={40} rotate={-12} shadow="0 16 32 #FCD34D66" />
    <Frame name="Shape3" x={60} y={240} w={180} h={180} bg="#4ECDC4" rounded={20} rotate={6} shadow="0 16 32 #4ECDC466" />
    <Frame name="Shape4" x={240} y={280} w={150} h={150} bg="#A78BFA" rounded={75} shadow="0 14 28 #A78BFA66" />
  </Frame>
</Frame>`
}

export const NFT_CARD_CRYPTO: Recipe = {
  name: 'nft-card-crypto',
  type: 'card',
  style: 'neon',
  description:
    'NFT/Web3 card: artwork placeholder with holographic glow, owner, bid info, time left. Marketplace style.',
  dimensions: '320×480',
  palette: ['#0F0A28', '#FFFFFF', '#8B5CF6', '#EC4899', '#22D3EE'],
  font: 'Inter',
  jsx: `<Frame name="NFTCard" w={320} h={480} bg="#14112D" rounded={20} stroke="#FFFFFF1F" strokeWidth={1} flex="col" overflow="hidden" shadow="0 20 60 #8B5CF64D">
  <Frame w="fill" h={280} flex="row" items="center" justify="center" overflow="hidden">
    <Ellipse x={40} y={40} w={200} h={200} bg="#EC4899" blur={60} opacity={0.6} />
    <Ellipse x={80} y={20} w={200} h={200} bg="#22D3EE" blur={60} opacity={0.5} />
    <Frame w={180} h={180} bg="#FFFFFF14" stroke="#FFFFFF33" strokeWidth={1} rounded={28} flex="row" items="center" justify="center">
      <Frame w={100} h={100} bg="#FFFFFF" rounded={20} rotate={12} shadow="0 8 24 #00000040" />
    </Frame>
    <Frame x={12} y={12} h={24} px={8} bg="#22D3EE" rounded={4} flex="row" items="center" gap={4}><Ellipse w={6} h={6} bg="#08090D" /><Text color="#08090D" size={10} weight="bold" letterSpacing={0.5}>LIVE</Text></Frame>
    <Frame x={272} y={12} w={36} h={36} bg="#FFFFFF14" stroke="#FFFFFF33" strokeWidth={1} rounded={18} flex="row" items="center" justify="center"><Icon name="lucide:heart" size={16} color="#FFFFFF" /></Frame>
  </Frame>
  <Frame w="fill" grow={1} flex="col" gap={14} p={18}>
    <Frame flex="col" gap={4}>
      <Frame flex="row" gap={6} items="center">
        <Ellipse w={16} h={16} bg="#8B5CF6" />
        <Text color="#FFFFFF99" size={11} weight="medium">@mira.eth</Text>
        <Icon name="lucide:badge-check" size={11} color="#22D3EE" />
      </Frame>
      <Text color="#FFFFFF" size={18} weight="bold" letterSpacing={-0.3}>Dreamscape #0429</Text>
      <Text color="#FFFFFF99" size={12}>Genesis Collection · 1/1</Text>
    </Frame>
    <Rectangle w="fill" h={1} bg="#FFFFFF1A" />
    <Frame flex="row" items="center" justify="between">
      <Frame flex="col" gap={2}>
        <Text color="#FFFFFF66" size={10} weight="medium" letterSpacing={1} textCase="upper">Current bid</Text>
        <Frame flex="row" gap={4} items="end"><Icon name="lucide:diamond" size={13} color="#22D3EE" /><Text color="#FFFFFF" size={18} weight="bold" letterSpacing={-0.3}>2.4 ETH</Text></Frame>
        <Text color="#FFFFFF66" size={11}>~$8,420</Text>
      </Frame>
      <Frame flex="col" gap={2} items="end">
        <Text color="#FFFFFF66" size={10} weight="medium" letterSpacing={1} textCase="upper">Ends in</Text>
        <Text color="#FFFFFF" size={18} weight="bold" letterSpacing={-0.3} font="JetBrains Mono">12:34:08</Text>
        <Text color="#FFFFFF66" size={11}>24 bidders</Text>
      </Frame>
    </Frame>
    <Frame w="fill" h={44} bg="#FFFFFF" rounded={10} flex="row" items="center" justify="center" gap={6}><Icon name="lucide:gavel" size={14} color="#08090D" /><Text color="#08090D" size={14} weight="bold">Place bid</Text></Frame>
  </Frame>
</Frame>`
}

export const MUSIC_PLAYER_RETRO: Recipe = {
  name: 'music-player-retro',
  type: 'card',
  style: 'retro',
  description:
    'Retro/vaporwave music player: dark bg with magenta/cyan glow, album artwork, scrubber, playback controls.',
  dimensions: '380×560',
  palette: ['#1A0A2E', '#FF6EC7', '#FCD34D', '#22D3EE', '#FFFFFF'],
  font: 'Space Grotesk',
  jsx: `<Frame name="RetroPlayer" w={380} h={560} bg="#1A0A2E" rounded={28} flex="col" gap={16} p={24} overflow="hidden" shadow="0 0 60 #FF6EC766">
  <Frame x={0} y={0} w={380} h={560}>
    <Ellipse x={-40} y={-30} w={280} h={200} bg="#FF6EC7" blur={120} opacity={0.5} />
    <Ellipse x={180} y={300} w={260} h={200} bg="#22D3EE" blur={120} opacity={0.4} />
  </Frame>
  <Frame w="fill" flex="row" items="center" justify="between">
    <Icon name="lucide:chevron-down" size={22} color="#FFFFFF" />
    <Frame flex="col" items="center" gap={2}>
      <Text color="#FFFFFF99" size={10} weight="bold" letterSpacing={2} textCase="upper">NOW PLAYING</Text>
      <Text color="#FFFFFF" size={12} weight="semibold" letterSpacing={0.5}>Synthwave FM</Text>
    </Frame>
    <Icon name="lucide:more-horizontal" size={22} color="#FFFFFF" />
  </Frame>
  <Frame w="fill" h={280} rounded={20} overflow="hidden" shadow="0 20 40 #FF6EC799">
    <Rectangle x={0} y={0} w={332} h={280} bg="#FCD34D" />
    <Ellipse x={80} y={50} w={180} h={180} bg="#FF6EC7" />
    <Ellipse x={40} y={140} w={240} h={100} bg="#22D3EE" opacity={0.8} />
    <Frame x={120} y={100} w={100} h={100} rounded={50} bg="#1A0A2E" flex="row" items="center" justify="center">
      <Ellipse w={24} h={24} bg="#FCD34D" />
    </Frame>
  </Frame>
  <Frame flex="col" gap={4}>
    <Text color="#FFFFFF" size={22} weight="bold" letterSpacing={-0.5}>Midnight Drive</Text>
    <Text color="#FFFFFFB3" size={14}>The Midnight · Nocturnal</Text>
  </Frame>
  <Frame flex="col" gap={6}>
    <Frame w="fill" h={4} bg="#FFFFFF1F" rounded={2} flex="row" items="center">
      <Rectangle w={180} h={4} bg="#FF6EC7" rounded={2} />
      <Ellipse w={12} h={12} bg="#FF6EC7" shadow="0 0 12 #FF6EC7" />
      <Rectangle grow={1} h={4} bg="#FFFFFF1F" />
    </Frame>
    <Frame flex="row" justify="between">
      <Text color="#FFFFFF99" size={11} font="JetBrains Mono">2:14</Text>
      <Text color="#FFFFFF99" size={11} font="JetBrains Mono">4:08</Text>
    </Frame>
  </Frame>
  <Frame flex="row" items="center" justify="between">
    <Icon name="lucide:shuffle" size={18} color="#FFFFFFB3" />
    <Icon name="lucide:skip-back" size={24} color="#FFFFFF" />
    <Frame w={64} h={64} bg="#FF6EC7" rounded={32} flex="row" items="center" justify="center" shadow="0 0 32 #FF6EC7"><Icon name="lucide:pause" size={28} color="#1A0A2E" /></Frame>
    <Icon name="lucide:skip-forward" size={24} color="#FFFFFF" />
    <Icon name="lucide:repeat" size={18} color="#FFFFFFB3" />
  </Frame>
</Frame>`
}

export const WELLNESS_APP_CARD: Recipe = {
  name: 'wellness-app-hero-card',
  type: 'mobile',
  style: 'claymorphism',
  description:
    'Soft wellness mobile card: calm colors, puffy shapes, meditation/breathing focus. Serene feel.',
  dimensions: '390×540',
  palette: ['#F5F0E6', '#2D3A2D', '#7A8478', '#6B8E5C', '#D49C6A'],
  font: 'Inter',
  jsx: `<Frame name="WellnessCard" w={390} h={540} bg="#F5F0E6" flex="col" gap={20} p={24} rounded={28}>
  <Frame flex="row" items="center" justify="between">
    <Text color="#2D3A2D" size={13} weight="semibold" letterSpacing={0.5}>Good morning, Sarah</Text>
    <Frame w={40} h={40} bg="#FFFFFF" rounded={20} flex="row" items="center" justify="center" shadow="0 4 12 #7A847826"><Icon name="lucide:sun" size={18} color="#D49C6A" /></Frame>
  </Frame>
  <Frame name="HeroCard" w="fill" bg="#FFFFFF" rounded={24} flex="col" gap={16} p={24} shadow="0 12 32 #7A847833">
    <Frame flex="col" gap={8}>
      <Text color="#7A8478" size={11} weight="semibold" letterSpacing={1} textCase="upper">Today's session</Text>
      <Text color="#2D3A2D" size={24} weight="bold" letterSpacing={-0.5} lineHeight={30} w="fill">A gentle breath before the day</Text>
      <Frame flex="row" gap={10} items="center"><Ellipse w={6} h={6} bg="#6B8E5C" /><Text color="#7A8478" size={12}>12 min · Guided by Amara</Text></Frame>
    </Frame>
    <Frame w="fill" h={140} bg="#E8E4D4" rounded={16} flex="row" items="center" justify="center" overflow="hidden">
      <Ellipse x={40} y={10} w={120} h={120} bg="#6B8E5C" opacity={0.3} blur={30} />
      <Ellipse x={180} y={20} w={100} h={100} bg="#D49C6A" opacity={0.4} blur={20} />
      <Frame w={80} h={80} bg="#FFFFFF" rounded={40} flex="row" items="center" justify="center" shadow="0 8 24 #7A847840"><Icon name="lucide:play" size={28} color="#6B8E5C" /></Frame>
    </Frame>
  </Frame>
  <Frame w="fill" flex="row" gap={12}>
    <Frame grow={1} bg="#FFFFFF" rounded={20} flex="col" gap={8} p={16} shadow="0 8 20 #7A847826">
      <Frame w={36} h={36} bg="#F5F0E6" rounded={12} flex="row" items="center" justify="center"><Icon name="lucide:moon" size={18} color="#2D3A2D" /></Frame>
      <Frame flex="col" gap={2}><Text color="#2D3A2D" size={13} weight="semibold">Sleep</Text><Text color="#7A8478" size={11}>7h 42m · Good</Text></Frame>
    </Frame>
    <Frame grow={1} bg="#FFFFFF" rounded={20} flex="col" gap={8} p={16} shadow="0 8 20 #7A847826">
      <Frame w={36} h={36} bg="#F5F0E6" rounded={12} flex="row" items="center" justify="center"><Icon name="lucide:heart" size={18} color="#D49C6A" /></Frame>
      <Frame flex="col" gap={2}><Text color="#2D3A2D" size={13} weight="semibold">Heart</Text><Text color="#7A8478" size={11}>62 bpm · Calm</Text></Frame>
    </Frame>
    <Frame grow={1} bg="#FFFFFF" rounded={20} flex="col" gap={8} p={16} shadow="0 8 20 #7A847826">
      <Frame w={36} h={36} bg="#F5F0E6" rounded={12} flex="row" items="center" justify="center"><Icon name="lucide:droplet" size={18} color="#6B8E5C" /></Frame>
      <Frame flex="col" gap={2}><Text color="#2D3A2D" size={13} weight="semibold">Water</Text><Text color="#7A8478" size={11}>4 / 8 cups</Text></Frame>
    </Frame>
  </Frame>
</Frame>`
}
