import type { Recipe } from './design-recipes-data-a'

export const MOBILE_SPLASH: Recipe = {
  name: 'mobile-splash-screen',
  type: 'mobile',
  style: 'apple',
  description:
    'App splash screen with centered logo, app name, tagline, and subtle loader at bottom. First screen on app launch.',
  dimensions: '390×844',
  palette: ['#0071E3', '#FFFFFF', '#FFFFFFCC'],
  font: 'Inter',
  jsx: `<Frame name="SplashScreen" w={390} h={844} bg="#0071E3" flex="col" justify="center" items="center" overflow="hidden">
  <Frame name="BGGlow" x={-100} y={200} w={600} h={400}><Ellipse w={600} h={400} bg="#FFFFFF" opacity={0.1} blur={120} /></Frame>
  <Frame flex="col" items="center" gap={24} grow={1} justify="center">
    <Frame w={112} h={112} bg="#FFFFFF" rounded={32} flex="row" items="center" justify="center" shadow="0 20 60 #00000033">
      <Icon name="lucide:sparkles" size={56} color="#0071E3" />
    </Frame>
    <Frame flex="col" items="center" gap={10}>
      <Text color="#FFFFFF" size={38} weight="bold" letterSpacing={-1.5}>Nova</Text>
      <Text color="#FFFFFFCC" size={16} weight="medium">Work smarter, not harder.</Text>
    </Frame>
  </Frame>
  <Frame flex="col" items="center" gap={16} pb={80}>
    <Frame w={40} h={40} rounded={20} flex="row" items="center" justify="center"><Icon name="lucide:loader" size={28} color="#FFFFFFCC" /></Frame>
    <Text color="#FFFFFF99" size={12} weight="medium" letterSpacing={0.5}>Version 2.4.0</Text>
  </Frame>
</Frame>`
}

export const MOBILE_MAP_SCREEN: Recipe = {
  name: 'mobile-map-screen',
  type: 'mobile',
  style: 'apple',
  description:
    'Map view with pin, floating search bar on top, bottom sheet with selected location details (name, rating, action buttons).',
  dimensions: '390×844',
  palette: ['#E8EEF2', '#FFFFFF', '#1D1D1F', '#86868B', '#0071E3', '#EF4444'],
  font: 'Inter',
  jsx: `<Frame name="MapScreen" w={390} h={844} bg="#E8EEF2" flex="col" overflow="hidden">
  <Frame name="MapBackground" x={0} y={0} w={390} h={844}>
    <Rectangle w={390} h={844} bg="#D4DFE8" />
    <Rectangle x={60} y={200} w={120} h={8} bg="#C8D3DC" rounded={4} rotate={18} />
    <Rectangle x={180} y={280} w={200} h={8} bg="#C8D3DC" rounded={4} rotate={-8} />
    <Rectangle x={0} y={420} w={280} h={6} bg="#C8D3DC" rounded={3} rotate={12} />
    <Rectangle x={40} y={520} w={200} h={140} bg="#B8C9D5" rounded={4} />
    <Rectangle x={240} y={480} w={140} h={180} bg="#B8C9D5" rounded={4} />
  </Frame>
  <Frame name="StatusBar" w="fill" h={47} flex="row" items="center" justify="between" px={20}>
    <Text color="#1D1D1F" size={17} weight="semibold">9:41</Text>
    <Frame flex="row" gap={5} items="center"><Icon name="lucide:signal" size={16} color="#1D1D1F" /><Icon name="lucide:wifi" size={16} color="#1D1D1F" /><Icon name="lucide:battery-full" size={18} color="#1D1D1F" /></Frame>
  </Frame>
  <Frame name="SearchFloat" w="fill" flex="row" items="center" gap={8} px={16}>
    <Frame grow={1} h={48} bg="#FFFFFFF0" rounded={14} flex="row" items="center" gap={10} px={16} shadow="0 4 12 #00000014">
      <Icon name="lucide:search" size={18} color="#86868B" />
      <Text color="#86868B" size={15} grow={1}>Search places</Text>
      <Icon name="lucide:mic" size={18} color="#0071E3" />
    </Frame>
    <Frame w={48} h={48} bg="#FFFFFFF0" rounded={14} flex="row" items="center" justify="center" shadow="0 4 12 #00000014">
      <Ellipse w={32} h={32} bg="#0071E3" />
    </Frame>
  </Frame>
  <Frame name="MapContent" w="fill" grow={1} flex="col" items="center" justify="center">
    <Frame flex="col" items="center" gap={2}>
      <Frame w={48} h={48} bg="#EF4444" rounded={24} stroke="#FFFFFF" strokeWidth={3} flex="row" items="center" justify="center" shadow="0 6 16 #00000040">
        <Icon name="lucide:map-pin" size={22} color="#FFFFFF" />
      </Frame>
      <Ellipse w={8} h={3} bg="#00000033" blur={1} />
    </Frame>
  </Frame>
  <Frame name="FABGroup" x={326} y={480} w={48} flex="col" gap={8}>
    <Frame w={48} h={48} bg="#FFFFFF" rounded={14} flex="row" items="center" justify="center" shadow="0 4 12 #00000026"><Icon name="lucide:locate-fixed" size={20} color="#0071E3" /></Frame>
    <Frame w={48} h={48} bg="#FFFFFF" rounded={14} flex="row" items="center" justify="center" shadow="0 4 12 #00000026"><Icon name="lucide:layers" size={20} color="#1D1D1F" /></Frame>
  </Frame>
  <Frame name="BottomSheet" w="fill" bg="#FFFFFF" roundedTL={20} roundedTR={20} flex="col" gap={16} pt={12} pb={32} px={20} shadow="0 -8 32 #0000001F">
    <Frame w={40} h={4} bg="#D2D2D7" rounded={2} />
    <Frame flex="row" items="start" justify="between" gap={12}>
      <Frame flex="col" gap={6} grow={1}>
        <Text color="#1D1D1F" size={20} weight="bold" letterSpacing={-0.3}>Café Altamira</Text>
        <Frame flex="row" gap={6} items="center">
          <Frame flex="row" gap={1}>
            <Icon name="lucide:star" size={13} color="#FCD34D" />
            <Icon name="lucide:star" size={13} color="#FCD34D" />
            <Icon name="lucide:star" size={13} color="#FCD34D" />
            <Icon name="lucide:star" size={13} color="#FCD34D" />
            <Icon name="lucide:star" size={13} color="#D2D2D7" />
          </Frame>
          <Text color="#1D1D1F" size={13} weight="semibold">4.4</Text>
          <Text color="#86868B" size={13}>(203) · Coffee · $$</Text>
        </Frame>
        <Frame flex="row" items="center" gap={4}><Ellipse w={6} h={6} bg="#10B981" /><Text color="#10B981" size={12} weight="semibold">Open now</Text><Text color="#86868B" size={12}>· Closes 10 PM · 0.3 mi away</Text></Frame>
      </Frame>
      <Rectangle w={72} h={72} bg="#F5F5F7" rounded={10} />
    </Frame>
    <Frame flex="row" gap={8}>
      <Frame grow={1} h={48} bg="#0071E3" rounded={14} flex="row" items="center" justify="center" gap={6}><Icon name="lucide:navigation" size={16} color="#FFFFFF" /><Text color="#FFFFFF" size={15} weight="semibold">Directions</Text></Frame>
      <Frame w={48} h={48} stroke="#D2D2D7" strokeWidth={1} rounded={14} flex="row" items="center" justify="center"><Icon name="lucide:phone" size={18} color="#0071E3" /></Frame>
      <Frame w={48} h={48} stroke="#D2D2D7" strokeWidth={1} rounded={14} flex="row" items="center" justify="center"><Icon name="lucide:share-2" size={18} color="#0071E3" /></Frame>
    </Frame>
  </Frame>
</Frame>`
}

export const MOBILE_FILTER_SHEET: Recipe = {
  name: 'mobile-filter-sheet',
  type: 'mobile',
  style: 'apple',
  description:
    'Bottom sheet filter UI with drag handle, close, category chips (toggleable), price range slider, apply CTA.',
  dimensions: '390×640',
  palette: ['#FFFFFF', '#1D1D1F', '#86868B', '#0071E3', '#F5F5F7'],
  font: 'Inter',
  jsx: `<Frame name="FilterSheet" w={390} h={640} bg="#FFFFFF" roundedTL={20} roundedTR={20} flex="col" shadow="0 -10 40 #0000001F">
  <Frame w="fill" flex="col" items="center" gap={12} pt={12} pb={16}>
    <Frame w={40} h={4} bg="#D2D2D7" rounded={2} />
    <Frame w="fill" flex="row" items="center" justify="between" px={20}>
      <Text color="#0071E3" size={15} weight="medium">Reset</Text>
      <Text color="#1D1D1F" size={17} weight="semibold">Filters</Text>
      <Frame w={30} h={30} rounded={15} bg="#F5F5F7" flex="row" items="center" justify="center"><Icon name="lucide:x" size={16} color="#1D1D1F" /></Frame>
    </Frame>
  </Frame>
  <Frame w="fill" grow={1} flex="col" gap={24} px={20} pt={8}>
    <Frame flex="col" gap={12}>
      <Text color="#1D1D1F" size={14} weight="semibold">Category</Text>
      <Frame flex="row" gap={8} wrap rowGap={8}>
        <Frame h={36} px={16} bg="#0071E3" rounded={18} flex="row" items="center" gap={6}><Icon name="lucide:coffee" size={14} color="#FFFFFF" /><Text color="#FFFFFF" size={13} weight="semibold">Coffee</Text></Frame>
        <Frame h={36} px={16} bg="#F5F5F7" rounded={18} flex="row" items="center" gap={6}><Icon name="lucide:utensils" size={14} color="#1D1D1F" /><Text color="#1D1D1F" size={13} weight="medium">Restaurant</Text></Frame>
        <Frame h={36} px={16} bg="#F5F5F7" rounded={18} flex="row" items="center" gap={6}><Icon name="lucide:wine" size={14} color="#1D1D1F" /><Text color="#1D1D1F" size={13} weight="medium">Bar</Text></Frame>
        <Frame h={36} px={16} bg="#0071E3" rounded={18} flex="row" items="center" gap={6}><Icon name="lucide:ice-cream" size={14} color="#FFFFFF" /><Text color="#FFFFFF" size={13} weight="semibold">Dessert</Text></Frame>
        <Frame h={36} px={16} bg="#F5F5F7" rounded={18} flex="row" items="center" gap={6}><Icon name="lucide:pizza" size={14} color="#1D1D1F" /><Text color="#1D1D1F" size={13} weight="medium">Pizza</Text></Frame>
      </Frame>
    </Frame>
    <Frame flex="col" gap={14}>
      <Frame flex="row" justify="between"><Text color="#1D1D1F" size={14} weight="semibold">Price range</Text><Text color="#0071E3" size={13} weight="medium">$10 – $45</Text></Frame>
      <Frame w="fill" h={4} bg="#F5F5F7" rounded={2} flex="row" items="center">
        <Rectangle w={30} h={4} bg="#F5F5F7" />
        <Ellipse w={24} h={24} bg="#FFFFFF" stroke="#0071E3" strokeWidth={3} shadow="0 2 6 #00000026" />
        <Rectangle grow={1} h={4} bg="#0071E3" />
        <Ellipse w={24} h={24} bg="#FFFFFF" stroke="#0071E3" strokeWidth={3} shadow="0 2 6 #00000026" />
        <Rectangle w={40} h={4} bg="#F5F5F7" />
      </Frame>
    </Frame>
    <Frame flex="col" gap={12}>
      <Text color="#1D1D1F" size={14} weight="semibold">Rating</Text>
      <Frame flex="row" gap={8}>
        <Frame h={40} px={14} stroke="#D2D2D7" strokeWidth={1} rounded={10} flex="row" items="center" gap={6}><Icon name="lucide:star" size={14} color="#FCD34D" /><Text color="#1D1D1F" size={13} weight="medium">4.0+</Text></Frame>
        <Frame h={40} px={14} bg="#0071E314" stroke="#0071E3" strokeWidth={2} rounded={10} flex="row" items="center" gap={6}><Icon name="lucide:star" size={14} color="#FCD34D" /><Text color="#0071E3" size={13} weight="semibold">4.5+</Text></Frame>
        <Frame h={40} px={14} stroke="#D2D2D7" strokeWidth={1} rounded={10} flex="row" items="center" gap={6}><Icon name="lucide:star" size={14} color="#FCD34D" /><Text color="#1D1D1F" size={13} weight="medium">Any</Text></Frame>
      </Frame>
    </Frame>
    <Frame flex="col" gap={12}>
      <Text color="#1D1D1F" size={14} weight="semibold">Open now</Text>
      <Frame flex="row" justify="between" items="center">
        <Text color="#86868B" size={13}>Only show places currently open</Text>
        <Frame w={44} h={26} bg="#34C759" rounded={13} flex="row" items="center" px={2} justify="end"><Ellipse w={22} h={22} bg="#FFFFFF" shadow="0 2 4 #00000026" /></Frame>
      </Frame>
    </Frame>
  </Frame>
  <Frame w="fill" flex="row" gap={10} p={20} stroke="#F5F5F7" strokeWidth={1} strokeAlign="INSIDE">
    <Frame grow={1} h={52} bg="#0071E3" rounded={14} flex="row" items="center" justify="center" gap={6}><Text color="#FFFFFF" size={17} weight="semibold">Show 124 places</Text></Frame>
  </Frame>
</Frame>`
}

export const MOBILE_SEARCH_SCREEN: Recipe = {
  name: 'mobile-search-screen',
  type: 'mobile',
  style: 'apple',
  description:
    'Search screen with input + cancel, recent searches list, trending section with tags, suggested accounts.',
  dimensions: '390×844',
  palette: ['#FFFFFF', '#1D1D1F', '#86868B', '#0071E3', '#F5F5F7'],
  font: 'Inter',
  jsx: `<Frame name="SearchScreen" w={390} h={844} bg="#FFFFFF" flex="col">
  <Frame name="StatusBar" w="fill" h={47} flex="row" items="center" justify="between" px={20}>
    <Text color="#1D1D1F" size={17} weight="semibold">9:41</Text>
    <Frame flex="row" gap={5} items="center"><Icon name="lucide:signal" size={16} color="#1D1D1F" /><Icon name="lucide:wifi" size={16} color="#1D1D1F" /><Icon name="lucide:battery-full" size={18} color="#1D1D1F" /></Frame>
  </Frame>
  <Frame w="fill" flex="row" items="center" gap={10} px={16} py={12}>
    <Frame grow={1} h={40} bg="#F5F5F7" rounded={12} flex="row" items="center" gap={8} px={12}>
      <Icon name="lucide:search" size={16} color="#86868B" />
      <Text color="#1D1D1F" size={15} grow={1}>portugal</Text>
      <Icon name="lucide:x-circle" size={16} color="#86868B" />
    </Frame>
    <Text color="#0071E3" size={15} weight="medium">Cancel</Text>
  </Frame>
  <Frame w="fill" grow={1} flex="col" gap={28} px={16} pt={12}>
    <Frame flex="col" gap={12}>
      <Frame flex="row" items="center" justify="between">
        <Text color="#1D1D1F" size={15} weight="semibold">Recent</Text>
        <Text color="#0071E3" size={13}>Clear</Text>
      </Frame>
      <Frame flex="col" gap={4}>
        <Frame w="fill" h={40} flex="row" items="center" gap={12}>
          <Icon name="lucide:clock" size={16} color="#86868B" />
          <Text color="#1D1D1F" size={14} grow={1}>lisbon photography</Text>
          <Icon name="lucide:arrow-up-left" size={15} color="#86868B" />
        </Frame>
        <Frame w="fill" h={40} flex="row" items="center" gap={12}>
          <Icon name="lucide:clock" size={16} color="#86868B" />
          <Text color="#1D1D1F" size={14} grow={1}>analog film tutorial</Text>
          <Icon name="lucide:arrow-up-left" size={15} color="#86868B" />
        </Frame>
        <Frame w="fill" h={40} flex="row" items="center" gap={12}>
          <Icon name="lucide:clock" size={16} color="#86868B" />
          <Text color="#1D1D1F" size={14} grow={1}>alfama golden hour</Text>
          <Icon name="lucide:arrow-up-left" size={15} color="#86868B" />
        </Frame>
      </Frame>
    </Frame>
    <Frame flex="col" gap={12}>
      <Text color="#1D1D1F" size={15} weight="semibold">Trending</Text>
      <Frame flex="row" gap={8} wrap rowGap={8}>
        <Frame h={32} px={14} bg="#F5F5F7" rounded={16} flex="row" items="center" gap={6}><Icon name="lucide:trending-up" size={12} color="#EF4444" /><Text color="#1D1D1F" size={13} weight="medium">film revival</Text></Frame>
        <Frame h={32} px={14} bg="#F5F5F7" rounded={16} flex="row" items="center" gap={6}><Icon name="lucide:trending-up" size={12} color="#EF4444" /><Text color="#1D1D1F" size={13} weight="medium">slow travel</Text></Frame>
        <Frame h={32} px={14} bg="#F5F5F7" rounded={16} flex="row" items="center" gap={6}><Text color="#1D1D1F" size={13} weight="medium">street photography</Text></Frame>
        <Frame h={32} px={14} bg="#F5F5F7" rounded={16} flex="row" items="center" gap={6}><Icon name="lucide:trending-up" size={12} color="#EF4444" /><Text color="#1D1D1F" size={13} weight="medium">workbench tour</Text></Frame>
        <Frame h={32} px={14} bg="#F5F5F7" rounded={16} flex="row" items="center" gap={6}><Text color="#1D1D1F" size={13} weight="medium">coffee gear</Text></Frame>
      </Frame>
    </Frame>
    <Frame flex="col" gap={12}>
      <Text color="#1D1D1F" size={15} weight="semibold">Suggested</Text>
      <Frame w="fill" flex="row" items="center" gap={12}>
        <Ellipse w={44} h={44} bg="#0071E3" />
        <Frame flex="col" gap={2} grow={1}>
          <Text color="#1D1D1F" size={14} weight="semibold">sarah.chen</Text>
          <Text color="#86868B" size={12}>Sarah Chen · 12.4k followers</Text>
        </Frame>
        <Frame h={30} px={14} bg="#0071E3" rounded={8} flex="row" items="center"><Text color="#FFFFFF" size={12} weight="semibold">Follow</Text></Frame>
      </Frame>
      <Frame w="fill" flex="row" items="center" gap={12}>
        <Ellipse w={44} h={44} bg="#F5A623" />
        <Frame flex="col" gap={2} grow={1}>
          <Text color="#1D1D1F" size={14} weight="semibold">marcus.d</Text>
          <Text color="#86868B" size={12}>Marcus Delgado · 8.2k followers</Text>
        </Frame>
        <Frame h={30} px={14} stroke="#D2D2D7" strokeWidth={1} rounded={8} flex="row" items="center"><Text color="#1D1D1F" size={12} weight="semibold">Following</Text></Frame>
      </Frame>
    </Frame>
  </Frame>
</Frame>`
}

export const MOBILE_NOTIFICATION_LIST: Recipe = {
  name: 'mobile-notification-list',
  type: 'mobile',
  style: 'apple',
  description:
    'Mobile notifications inbox: tabs (All/Mentions), grouped by date, each with avatar + action + snippet + time + optional action buttons.',
  dimensions: '390×844',
  palette: ['#FFFFFF', '#1D1D1F', '#86868B', '#0071E3', '#F5F5F7'],
  font: 'Inter',
  jsx: `<Frame name="NotificationList" w={390} h={844} bg="#FFFFFF" flex="col">
  <Frame name="StatusBar" w="fill" h={47} flex="row" items="center" justify="between" px={20}>
    <Text color="#1D1D1F" size={17} weight="semibold">9:41</Text>
    <Frame flex="row" gap={5} items="center"><Icon name="lucide:signal" size={16} color="#1D1D1F" /><Icon name="lucide:wifi" size={16} color="#1D1D1F" /><Icon name="lucide:battery-full" size={18} color="#1D1D1F" /></Frame>
  </Frame>
  <Frame w="fill" h={52} flex="row" items="center" justify="between" px={20}>
    <Text color="#1D1D1F" size={22} weight="bold" letterSpacing={-0.5}>Notifications</Text>
    <Frame flex="row" gap={16}><Icon name="lucide:settings-2" size={20} color="#0071E3" /></Frame>
  </Frame>
  <Frame w="fill" h={44} flex="row" px={16} gap={8}>
    <Frame h={32} px={14} bg="#1D1D1F" rounded={16} flex="row" items="center"><Text color="#FFFFFF" size={13} weight="semibold">All</Text></Frame>
    <Frame h={32} px={14} bg="#F5F5F7" rounded={16} flex="row" items="center"><Text color="#1D1D1F" size={13} weight="medium">Mentions</Text></Frame>
    <Frame h={32} px={14} bg="#F5F5F7" rounded={16} flex="row" items="center"><Text color="#1D1D1F" size={13} weight="medium">Following</Text></Frame>
  </Frame>
  <Frame w="fill" grow={1} flex="col">
    <Text color="#86868B" size={11} weight="semibold" letterSpacing={0.5} textCase="upper" px={20} pt={18} pb={8}>New</Text>
    <Frame w="fill" flex="row" gap={12} px={16} py={12} stroke="#F5F5F7" strokeWidth={1} strokeAlign="INSIDE">
      <Ellipse w={44} h={44} bg="#FF6B6B" />
      <Frame flex="col" gap={6} grow={1}>
        <Text color="#1D1D1F" size={14} lineHeight={19} w="fill"><Text color="#1D1D1F" size={14} weight="semibold">maya.c</Text> liked your photo</Text>
        <Text color="#86868B" size={12}>2 minutes ago</Text>
      </Frame>
      <Rectangle w={44} h={44} bg="#F5F5F7" rounded={8} />
    </Frame>
    <Frame w="fill" flex="row" gap={12} px={16} py={12} stroke="#F5F5F7" strokeWidth={1} strokeAlign="INSIDE">
      <Ellipse w={44} h={44} bg="#4ECDC4" />
      <Frame flex="col" gap={6} grow={1}>
        <Text color="#1D1D1F" size={14} lineHeight={19} w="fill"><Text color="#1D1D1F" size={14} weight="semibold">marcus.d</Text> started following you</Text>
        <Text color="#86868B" size={12}>8 minutes ago</Text>
        <Frame flex="row" gap={8}>
          <Frame h={28} px={14} bg="#0071E3" rounded={8} flex="row" items="center"><Text color="#FFFFFF" size={12} weight="semibold">Follow back</Text></Frame>
          <Frame h={28} px={14} stroke="#D2D2D7" strokeWidth={1} rounded={8} flex="row" items="center"><Text color="#1D1D1F" size={12} weight="medium">Remove</Text></Frame>
        </Frame>
      </Frame>
    </Frame>
    <Frame w="fill" flex="row" gap={12} px={16} py={12} stroke="#F5F5F7" strokeWidth={1} strokeAlign="INSIDE">
      <Ellipse w={44} h={44} bg="#A78BFA" />
      <Frame flex="col" gap={6} grow={1}>
        <Text color="#1D1D1F" size={14} lineHeight={19} w="fill"><Text color="#1D1D1F" size={14} weight="semibold">priya.r</Text> and <Text color="#1D1D1F" size={14} weight="semibold">3 others</Text> commented on your post</Text>
        <Text color="#86868B" size={13} lineHeight={18}>"These colors are incredible. What film stock?"</Text>
        <Text color="#86868B" size={12}>1 hour ago</Text>
      </Frame>
      <Rectangle w={44} h={44} bg="#F5F5F7" rounded={8} />
    </Frame>
    <Text color="#86868B" size={11} weight="semibold" letterSpacing={0.5} textCase="upper" px={20} pt={18} pb={8}>Earlier this week</Text>
    <Frame w="fill" flex="row" gap={12} px={16} py={12} stroke="#F5F5F7" strokeWidth={1} strokeAlign="INSIDE">
      <Frame w={44} h={44} bg="#0071E314" rounded={22} flex="row" items="center" justify="center"><Icon name="lucide:sparkles" size={20} color="#0071E3" /></Frame>
      <Frame flex="col" gap={4} grow={1}>
        <Text color="#1D1D1F" size={14} weight="semibold">New features available</Text>
        <Text color="#86868B" size={13} lineHeight={18}>Reels, voice notes, and live captions are here.</Text>
        <Text color="#86868B" size={12}>Apr 14</Text>
      </Frame>
    </Frame>
  </Frame>
</Frame>`
}

export const MOBILE_PROFILE_EDIT: Recipe = {
  name: 'mobile-profile-edit',
  type: 'mobile',
  style: 'apple',
  description:
    'Edit profile screen: large avatar with change button, form fields (name, username, bio, website, phone) with proper labels.',
  dimensions: '390×844',
  palette: ['#F2F2F7', '#FFFFFF', '#1D1D1F', '#86868B', '#0071E3'],
  font: 'Inter',
  jsx: `<Frame name="ProfileEdit" w={390} h={844} bg="#F2F2F7" flex="col">
  <Frame name="StatusBar" w="fill" h={47} flex="row" items="center" justify="between" px={20}>
    <Text color="#1D1D1F" size={17} weight="semibold">9:41</Text>
    <Frame flex="row" gap={5} items="center"><Icon name="lucide:signal" size={16} color="#1D1D1F" /><Icon name="lucide:wifi" size={16} color="#1D1D1F" /><Icon name="lucide:battery-full" size={18} color="#1D1D1F" /></Frame>
  </Frame>
  <Frame w="fill" h={52} flex="row" items="center" justify="between" px={16}>
    <Text color="#0071E3" size={15} weight="medium">Cancel</Text>
    <Text color="#1D1D1F" size={16} weight="semibold">Edit profile</Text>
    <Text color="#0071E3" size={15} weight="semibold">Done</Text>
  </Frame>
  <Frame w="fill" flex="col" gap={16} py={24} items="center">
    <Frame flex="col" items="center" gap={12}>
      <Frame w={96} h={96} bg="#0071E3" rounded={48} flex="row" items="center" justify="center" overflow="hidden">
        <Text color="#FFFFFF" size={40} weight="bold">S</Text>
        <Frame x={66} y={64} w={32} h={32} bg="#FFFFFF" rounded={16} stroke="#F2F2F7" strokeWidth={3} flex="row" items="center" justify="center"><Icon name="lucide:camera" size={14} color="#1D1D1F" /></Frame>
      </Frame>
      <Text color="#0071E3" size={13} weight="semibold">Change profile photo</Text>
    </Frame>
  </Frame>
  <Frame w="fill" grow={1} flex="col" gap={24} px={16} pt={8}>
    <Frame name="SectionA" w="fill" bg="#FFFFFF" rounded={10} flex="col" overflow="hidden">
      <Frame w="fill" flex="row" items="center" gap={12} px={16} py={12} stroke="#E4E4E7" strokeWidth={1} strokeAlign="INSIDE">
        <Text color="#1D1D1F" size={13} w={80}>Name</Text>
        <Text color="#1D1D1F" size={14} grow={1}>Sarah Chen</Text>
      </Frame>
      <Frame w="fill" flex="row" items="center" gap={12} px={16} py={12} stroke="#E4E4E7" strokeWidth={1} strokeAlign="INSIDE">
        <Text color="#1D1D1F" size={13} w={80}>Username</Text>
        <Text color="#1D1D1F" size={14} grow={1}>sarah.chen</Text>
      </Frame>
      <Frame w="fill" flex="row" items="center" gap={12} px={16} py={12} stroke="#E4E4E7" strokeWidth={1} strokeAlign="INSIDE">
        <Text color="#1D1D1F" size={13} w={80}>Website</Text>
        <Text color="#0071E3" size={14} grow={1}>sarah-chen.photo</Text>
      </Frame>
      <Frame w="fill" flex="row" items="start" gap={12} px={16} py={12}>
        <Text color="#1D1D1F" size={13} w={80} pt={2}>Bio</Text>
        <Text color="#1D1D1F" size={14} lineHeight={20} grow={1}>Documenting slow travel and ancient streets. One roll of film at a time.</Text>
      </Frame>
    </Frame>
    <Frame flex="col" gap={8}>
      <Text color="#86868B" size={12} letterSpacing={0.2} px={4}>PRIVATE INFORMATION</Text>
      <Frame w="fill" bg="#FFFFFF" rounded={10} flex="col" overflow="hidden">
        <Frame w="fill" flex="row" items="center" gap={12} px={16} py={12} stroke="#E4E4E7" strokeWidth={1} strokeAlign="INSIDE">
          <Text color="#1D1D1F" size={13} w={80}>Email</Text>
          <Text color="#1D1D1F" size={14} grow={1}>sarah@example.com</Text>
        </Frame>
        <Frame w="fill" flex="row" items="center" gap={12} px={16} py={12}>
          <Text color="#1D1D1F" size={13} w={80}>Phone</Text>
          <Text color="#86868B" size={14} grow={1}>Add phone number</Text>
        </Frame>
      </Frame>
    </Frame>
  </Frame>
</Frame>`
}
