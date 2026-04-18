import type { Recipe } from './design-recipes-data-a'

export const MOBILE_FEED_SCREEN: Recipe = {
  name: 'mobile-feed-screen',
  type: 'mobile',
  style: 'apple',
  description:
    'Social feed mobile screen: top bar, horizontal stories row, post card (avatar, image, actions, caption). 390×844.',
  dimensions: '390×844',
  palette: ['#FFFFFF', '#1D1D1F', '#86868B', '#0071E3', '#F5F5F7'],
  font: 'Inter',
  jsx: `<Frame name="FeedScreen" w={390} h={844} bg="#FFFFFF" flex="col">
  <Frame name="StatusBar" w="fill" h={47} flex="row" items="center" justify="between" px={20}>
    <Text color="#1D1D1F" size={17} weight="semibold">9:41</Text>
    <Frame flex="row" gap={5} items="center"><Icon name="lucide:signal" size={16} color="#1D1D1F" /><Icon name="lucide:wifi" size={16} color="#1D1D1F" /><Icon name="lucide:battery-full" size={18} color="#1D1D1F" /></Frame>
  </Frame>
  <Frame name="TopBar" w="fill" h={52} flex="row" items="center" justify="between" px={16}>
    <Text color="#1D1D1F" size={22} weight="bold" letterSpacing={-0.5}>Feed</Text>
    <Frame flex="row" gap={14} items="center"><Icon name="lucide:heart" size={22} color="#1D1D1F" /><Icon name="lucide:send" size={22} color="#1D1D1F" /></Frame>
  </Frame>
  <Frame name="StoriesRow" w="fill" h={100} flex="row" items="center" gap={12} px={16} stroke="#F5F5F7" strokeWidth={1} strokeAlign="INSIDE">
    <Frame flex="col" gap={4} items="center">
      <Frame w={62} h={62} stroke="#0071E3" strokeWidth={2} rounded={31} flex="row" items="center" justify="center">
        <Ellipse w={52} h={52} bg="#F5F5F7" />
      </Frame>
      <Text color="#1D1D1F" size={10}>Your story</Text>
    </Frame>
    <Frame flex="col" gap={4} items="center"><Frame w={62} h={62} bg="#FF6B6B" rounded={31} /><Text color="#1D1D1F" size={10}>maya.c</Text></Frame>
    <Frame flex="col" gap={4} items="center"><Frame w={62} h={62} bg="#4ECDC4" rounded={31} /><Text color="#1D1D1F" size={10}>marcus</Text></Frame>
    <Frame flex="col" gap={4} items="center"><Frame w={62} h={62} bg="#FCD34D" rounded={31} /><Text color="#1D1D1F" size={10}>priya.r</Text></Frame>
    <Frame flex="col" gap={4} items="center"><Frame w={62} h={62} bg="#A78BFA" rounded={31} /><Text color="#1D1D1F" size={10}>dan</Text></Frame>
  </Frame>
  <Frame name="PostCard" w="fill" flex="col" grow={1}>
    <Frame w="fill" h={56} flex="row" items="center" justify="between" px={16}>
      <Frame flex="row" gap={10} items="center">
        <Ellipse w={36} h={36} bg="#0071E3" />
        <Frame flex="col" gap={1}>
          <Text color="#1D1D1F" size={13} weight="semibold">sarah.chen</Text>
          <Text color="#86868B" size={11}>Lisbon, Portugal</Text>
        </Frame>
      </Frame>
      <Icon name="lucide:more-horizontal" size={18} color="#1D1D1F" />
    </Frame>
    <Rectangle w="fill" grow={1} bg="#F5F5F7" />
    <Frame w="fill" flex="row" items="center" justify="between" px={16} py={10}>
      <Frame flex="row" gap={16} items="center">
        <Icon name="lucide:heart" size={24} color="#1D1D1F" />
        <Icon name="lucide:message-circle" size={24} color="#1D1D1F" />
        <Icon name="lucide:send" size={24} color="#1D1D1F" />
      </Frame>
      <Icon name="lucide:bookmark" size={24} color="#1D1D1F" />
    </Frame>
    <Frame w="fill" flex="col" gap={4} px={16} pb={12}>
      <Text color="#1D1D1F" size={13} weight="semibold">2,493 likes</Text>
      <Text color="#1D1D1F" size={13} lineHeight={18} w="fill"><Text color="#1D1D1F" size={13} weight="semibold">sarah.chen</Text> Golden hour in Alfama. Sometimes the best photos happen when you put the phone down and just walk.</Text>
      <Text color="#86868B" size={12}>View all 48 comments</Text>
      <Text color="#86868B" size={11}>2 hours ago</Text>
    </Frame>
  </Frame>
</Frame>`
}

export const MOBILE_PROFILE_SCREEN: Recipe = {
  name: 'mobile-profile-screen',
  type: 'mobile',
  style: 'apple',
  description:
    'Profile screen: avatar + name + bio + 3 stat counters + edit button + 3×3 photo grid placeholder.',
  dimensions: '390×844',
  palette: ['#FFFFFF', '#1D1D1F', '#86868B', '#0071E3', '#F5F5F7'],
  font: 'Inter',
  jsx: `<Frame name="ProfileScreen" w={390} h={844} bg="#FFFFFF" flex="col">
  <Frame name="StatusBar" w="fill" h={47} flex="row" items="center" justify="between" px={20}>
    <Text color="#1D1D1F" size={17} weight="semibold">9:41</Text>
    <Frame flex="row" gap={5} items="center"><Icon name="lucide:signal" size={16} color="#1D1D1F" /><Icon name="lucide:wifi" size={16} color="#1D1D1F" /><Icon name="lucide:battery-full" size={18} color="#1D1D1F" /></Frame>
  </Frame>
  <Frame name="NavBar" w="fill" h={44} flex="row" items="center" justify="between" px={16}>
    <Icon name="lucide:chevron-left" size={24} color="#0071E3" />
    <Text color="#1D1D1F" size={16} weight="semibold">sarah.chen</Text>
    <Icon name="lucide:more-horizontal" size={22} color="#0071E3" />
  </Frame>
  <Frame name="ProfileHeader" w="fill" flex="col" gap={16} px={20} pt={20} pb={16}>
    <Frame flex="row" items="center" gap={20}>
      <Ellipse w={80} h={80} bg="#0071E3" />
      <Frame grow={1} flex="row" justify="around">
        <Frame flex="col" items="center" gap={2}><Text color="#1D1D1F" size={20} weight="bold">248</Text><Text color="#86868B" size={12}>Posts</Text></Frame>
        <Frame flex="col" items="center" gap={2}><Text color="#1D1D1F" size={20} weight="bold">12.4k</Text><Text color="#86868B" size={12}>Followers</Text></Frame>
        <Frame flex="col" items="center" gap={2}><Text color="#1D1D1F" size={20} weight="bold">483</Text><Text color="#86868B" size={12}>Following</Text></Frame>
      </Frame>
    </Frame>
    <Frame flex="col" gap={3}>
      <Text color="#1D1D1F" size={14} weight="semibold">Sarah Chen</Text>
      <Text color="#86868B" size={13}>Photographer · based in Lisbon</Text>
      <Text color="#1D1D1F" size={13} lineHeight={19} w="fill">Documenting slow travel and ancient streets. One roll of film at a time.</Text>
      <Text color="#0071E3" size={13}>sarah-chen.photo</Text>
    </Frame>
    <Frame flex="row" gap={8}>
      <Frame grow={1} h={32} stroke="#D2D2D7" strokeWidth={1} rounded={8} flex="row" items="center" justify="center"><Text color="#1D1D1F" size={13} weight="semibold">Edit profile</Text></Frame>
      <Frame grow={1} h={32} stroke="#D2D2D7" strokeWidth={1} rounded={8} flex="row" items="center" justify="center"><Text color="#1D1D1F" size={13} weight="semibold">Share</Text></Frame>
      <Frame w={40} h={32} stroke="#D2D2D7" strokeWidth={1} rounded={8} flex="row" items="center" justify="center"><Icon name="lucide:user-plus" size={14} color="#1D1D1F" /></Frame>
    </Frame>
  </Frame>
  <Frame name="TabSwitch" w="fill" h={44} flex="row" stroke="#F5F5F7" strokeWidth={1} strokeAlign="INSIDE">
    <Frame grow={1} h="fill" flex="row" items="center" justify="center" stroke="#1D1D1F" strokeWidth={1} strokeAlign="INSIDE"><Icon name="lucide:grid-3x3" size={20} color="#1D1D1F" /></Frame>
    <Frame grow={1} h="fill" flex="row" items="center" justify="center"><Icon name="lucide:bookmark" size={20} color="#86868B" /></Frame>
    <Frame grow={1} h="fill" flex="row" items="center" justify="center"><Icon name="lucide:tag" size={20} color="#86868B" /></Frame>
  </Frame>
  <Frame name="PhotoGrid" w="fill" grow={1} flex="row" gap={2} wrap rowGap={2}>
    <Rectangle w={128} h={128} bg="#F5F5F7" />
    <Rectangle w={128} h={128} bg="#E8E6FF" />
    <Rectangle w={128} h={128} bg="#D4E5D4" />
    <Rectangle w={128} h={128} bg="#FFE5C4" />
    <Rectangle w={128} h={128} bg="#F5D9D9" />
    <Rectangle w={128} h={128} bg="#D4EEF0" />
  </Frame>
</Frame>`
}

export const MOBILE_CHAT_SCREEN: Recipe = {
  name: 'mobile-chat-screen',
  type: 'mobile',
  style: 'apple',
  description:
    'iMessage-style chat: top bar with avatar + name, message bubbles (sent blue right, received gray left), timestamps, input bar at bottom.',
  dimensions: '390×844',
  palette: ['#FFFFFF', '#1D1D1F', '#86868B', '#0071E3', '#E9E9EB'],
  font: 'Inter',
  jsx: `<Frame name="ChatScreen" w={390} h={844} bg="#FFFFFF" flex="col">
  <Frame name="StatusBar" w="fill" h={47} flex="row" items="center" justify="between" px={20}>
    <Text color="#1D1D1F" size={17} weight="semibold">9:41</Text>
    <Frame flex="row" gap={5} items="center"><Icon name="lucide:signal" size={16} color="#1D1D1F" /><Icon name="lucide:wifi" size={16} color="#1D1D1F" /><Icon name="lucide:battery-full" size={18} color="#1D1D1F" /></Frame>
  </Frame>
  <Frame name="NavBar" w="fill" h={60} flex="row" items="center" justify="between" px={16} stroke="#F5F5F7" strokeWidth={1} strokeAlign="INSIDE">
    <Frame flex="row" gap={10} items="center">
      <Icon name="lucide:chevron-left" size={24} color="#0071E3" />
      <Frame flex="col" gap={2}>
        <Text color="#1D1D1F" size={15} weight="semibold">Marcus Delgado</Text>
        <Text color="#86868B" size={11}>Active now</Text>
      </Frame>
    </Frame>
    <Frame flex="row" gap={14} items="center"><Icon name="lucide:phone" size={20} color="#0071E3" /><Icon name="lucide:video" size={22} color="#0071E3" /></Frame>
  </Frame>
  <Frame name="MessagesList" w="fill" grow={1} flex="col" gap={8} p={16}>
    <Text color="#86868B" size={11} textAlign="center" w="fill">Today 2:48 PM</Text>
    <Frame flex="row" w="fill">
      <Frame flex="col" gap={4} maxW={260}>
        <Frame px={14} py={10} bg="#E9E9EB" roundedBL={6} roundedBR={18} roundedTL={18} roundedTR={18}>
          <Text color="#1D1D1F" size={15} lineHeight={20}>Hey! Do you have a minute to review the new hero section?</Text>
        </Frame>
      </Frame>
    </Frame>
    <Frame flex="row" w="fill" justify="end">
      <Frame flex="col" gap={4} maxW={260}>
        <Frame px={14} py={10} bg="#0071E3" roundedBL={18} roundedBR={6} roundedTL={18} roundedTR={18}>
          <Text color="#FFFFFF" size={15} lineHeight={20}>Yeah, in 5. Wrapping up the design sync now.</Text>
        </Frame>
      </Frame>
    </Frame>
    <Frame flex="row" w="fill" justify="end">
      <Frame flex="col" gap={4} maxW={260}>
        <Frame px={14} py={10} bg="#0071E3" roundedBL={18} roundedBR={6} roundedTL={18} roundedTR={18}>
          <Text color="#FFFFFF" size={15} lineHeight={20}>Drop it in #design when ready 👍</Text>
        </Frame>
        <Text color="#86868B" size={10} textAlign="right" w="fill">Delivered</Text>
      </Frame>
    </Frame>
    <Frame flex="row" w="fill">
      <Frame flex="col" gap={4} maxW={260}>
        <Frame px={14} py={10} bg="#E9E9EB" roundedBL={6} roundedBR={18} roundedTL={18} roundedTR={18}>
          <Text color="#1D1D1F" size={15} lineHeight={20}>Just posted. Take a look when you can — especially the CTA sizing.</Text>
        </Frame>
      </Frame>
    </Frame>
    <Frame flex="row" w="fill" items="center" gap={6}>
      <Frame px={12} py={8} bg="#E9E9EB" rounded={16} flex="row" gap={3}>
        <Ellipse w={6} h={6} bg="#86868B" />
        <Ellipse w={6} h={6} bg="#86868B" opacity={0.6} />
        <Ellipse w={6} h={6} bg="#86868B" opacity={0.3} />
      </Frame>
    </Frame>
  </Frame>
  <Frame name="InputBar" w="fill" flex="row" items="center" gap={8} px={12} py={10} stroke="#F5F5F7" strokeWidth={1} strokeAlign="INSIDE">
    <Frame w={32} h={32} rounded={16} bg="#F5F5F7" flex="row" items="center" justify="center"><Icon name="lucide:plus" size={18} color="#86868B" /></Frame>
    <Frame grow={1} h={36} bg="#F5F5F7" rounded={18} flex="row" items="center" px={14}>
      <Text color="#86868B" size={14}>iMessage</Text>
    </Frame>
    <Frame w={32} h={32} rounded={16} bg="#0071E3" flex="row" items="center" justify="center"><Icon name="lucide:arrow-up" size={18} color="#FFFFFF" /></Frame>
  </Frame>
</Frame>`
}

export const MOBILE_SETTINGS_SCREEN: Recipe = {
  name: 'mobile-settings-screen',
  type: 'mobile',
  style: 'apple',
  description:
    'iOS settings screen with grouped sections (Account, Preferences, Support), rows with icon + label + chevron + optional value.',
  dimensions: '390×844',
  palette: ['#F2F2F7', '#1D1D1F', '#86868B', '#0071E3', '#FFFFFF'],
  font: 'Inter',
  jsx: `<Frame name="SettingsScreen" w={390} h={844} bg="#F2F2F7" flex="col">
  <Frame name="StatusBar" w="fill" h={47} flex="row" items="center" justify="between" px={20}>
    <Text color="#1D1D1F" size={17} weight="semibold">9:41</Text>
    <Frame flex="row" gap={5} items="center"><Icon name="lucide:signal" size={16} color="#1D1D1F" /><Icon name="lucide:wifi" size={16} color="#1D1D1F" /><Icon name="lucide:battery-full" size={18} color="#1D1D1F" /></Frame>
  </Frame>
  <Frame w="fill" h={52} flex="row" items="center" justify="center">
    <Text color="#1D1D1F" size={17} weight="semibold">Settings</Text>
  </Frame>
  <Frame w="fill" grow={1} flex="col" gap={24} px={16} py={8}>
    <Frame name="SectionAccount" w="fill" flex="col" bg="#FFFFFF" rounded={12} overflow="hidden">
      <Frame w="fill" flex="row" items="center" gap={12} p={16} stroke="#E4E4E7" strokeWidth={1} strokeAlign="INSIDE">
        <Ellipse w={44} h={44} bg="#0071E3" />
        <Frame flex="col" gap={2} grow={1}>
          <Text color="#1D1D1F" size={16} weight="semibold">Sarah Chen</Text>
          <Text color="#86868B" size={13}>sarah@example.com</Text>
        </Frame>
        <Icon name="lucide:chevron-right" size={16} color="#C7C7CC" />
      </Frame>
      <Frame w="fill" h={44} flex="row" items="center" gap={12} px={16} stroke="#E4E4E7" strokeWidth={1} strokeAlign="INSIDE">
        <Icon name="lucide:bell" size={18} color="#0071E3" />
        <Text color="#1D1D1F" size={15} grow={1}>Notifications</Text>
        <Icon name="lucide:chevron-right" size={14} color="#C7C7CC" />
      </Frame>
      <Frame w="fill" h={44} flex="row" items="center" gap={12} px={16}>
        <Icon name="lucide:lock" size={18} color="#0071E3" />
        <Text color="#1D1D1F" size={15} grow={1}>Privacy & Security</Text>
        <Icon name="lucide:chevron-right" size={14} color="#C7C7CC" />
      </Frame>
    </Frame>
    <Frame name="SectionPrefs" w="fill" flex="col" bg="#FFFFFF" rounded={12} overflow="hidden">
      <Frame w="fill" h={44} flex="row" items="center" gap={12} px={16} stroke="#E4E4E7" strokeWidth={1} strokeAlign="INSIDE">
        <Icon name="lucide:palette" size={18} color="#FF9500" />
        <Text color="#1D1D1F" size={15} grow={1}>Appearance</Text>
        <Text color="#86868B" size={14}>System</Text>
        <Icon name="lucide:chevron-right" size={14} color="#C7C7CC" />
      </Frame>
      <Frame w="fill" h={44} flex="row" items="center" gap={12} px={16} stroke="#E4E4E7" strokeWidth={1} strokeAlign="INSIDE">
        <Icon name="lucide:globe" size={18} color="#34C759" />
        <Text color="#1D1D1F" size={15} grow={1}>Language</Text>
        <Text color="#86868B" size={14}>English</Text>
        <Icon name="lucide:chevron-right" size={14} color="#C7C7CC" />
      </Frame>
      <Frame w="fill" h={44} flex="row" items="center" gap={12} px={16}>
        <Icon name="lucide:moon" size={18} color="#AF52DE" />
        <Text color="#1D1D1F" size={15} grow={1}>Focus</Text>
        <Frame w={44} h={26} bg="#34C759" rounded={13} flex="row" items="center" px={2} justify="end">
          <Ellipse w={22} h={22} bg="#FFFFFF" />
        </Frame>
      </Frame>
    </Frame>
    <Frame name="SectionSupport" w="fill" flex="col" bg="#FFFFFF" rounded={12} overflow="hidden">
      <Frame w="fill" h={44} flex="row" items="center" gap={12} px={16} stroke="#E4E4E7" strokeWidth={1} strokeAlign="INSIDE">
        <Icon name="lucide:life-buoy" size={18} color="#0071E3" />
        <Text color="#1D1D1F" size={15} grow={1}>Help Center</Text>
        <Icon name="lucide:chevron-right" size={14} color="#C7C7CC" />
      </Frame>
      <Frame w="fill" h={44} flex="row" items="center" gap={12} px={16}>
        <Icon name="lucide:log-out" size={18} color="#FF3B30" />
        <Text color="#FF3B30" size={15} grow={1} weight="medium">Sign out</Text>
      </Frame>
    </Frame>
  </Frame>
</Frame>`
}

export const MOBILE_PAYWALL_SCREEN: Recipe = {
  name: 'mobile-paywall-screen',
  type: 'mobile',
  style: 'apple',
  description:
    'Premium upgrade screen: close button, hero title, 4 benefit rows with icons, price picker (monthly vs yearly), primary CTA + restore link.',
  dimensions: '390×844',
  palette: ['#FFFFFF', '#1D1D1F', '#86868B', '#0071E3', '#F5F5F7'],
  font: 'Inter',
  jsx: `<Frame name="PaywallScreen" w={390} h={844} bg="#FFFFFF" flex="col">
  <Frame name="StatusBar" w="fill" h={47} flex="row" items="center" justify="between" px={20}>
    <Text color="#1D1D1F" size={17} weight="semibold">9:41</Text>
    <Frame flex="row" gap={5} items="center"><Icon name="lucide:signal" size={16} color="#1D1D1F" /><Icon name="lucide:wifi" size={16} color="#1D1D1F" /><Icon name="lucide:battery-full" size={18} color="#1D1D1F" /></Frame>
  </Frame>
  <Frame w="fill" h={44} flex="row" items="center" justify="end" px={16}>
    <Frame w={32} h={32} rounded={16} bg="#F5F5F7" flex="row" items="center" justify="center"><Icon name="lucide:x" size={16} color="#1D1D1F" /></Frame>
  </Frame>
  <Frame name="PaywallContent" w="fill" grow={1} flex="col" gap={28} px={24}>
    <Frame flex="col" gap={12} items="center">
      <Frame w={64} h={64} bg="#0071E314" rounded={20} flex="row" items="center" justify="center">
        <Icon name="lucide:sparkles" size={32} color="#0071E3" />
      </Frame>
      <Text color="#1D1D1F" size={30} weight="bold" letterSpacing={-1} textAlign="center">Unlock Premium</Text>
      <Text color="#86868B" size={15} textAlign="center" lineHeight={22} w="fill">Everything you need to work at your best.</Text>
    </Frame>
    <Frame name="BenefitsList" w="fill" flex="col" gap={18}>
      <Frame flex="row" gap={14} items="start">
        <Frame w={32} h={32} bg="#0071E314" rounded={10} flex="row" items="center" justify="center"><Icon name="lucide:infinity" size={16} color="#0071E3" /></Frame>
        <Frame flex="col" gap={2} grow={1}>
          <Text color="#1D1D1F" size={15} weight="semibold">Unlimited projects</Text>
          <Text color="#86868B" size={13} lineHeight={18}>Create as many as you need. No caps, ever.</Text>
        </Frame>
      </Frame>
      <Frame flex="row" gap={14} items="start">
        <Frame w={32} h={32} bg="#0071E314" rounded={10} flex="row" items="center" justify="center"><Icon name="lucide:zap" size={16} color="#0071E3" /></Frame>
        <Frame flex="col" gap={2} grow={1}>
          <Text color="#1D1D1F" size={15} weight="semibold">Priority AI models</Text>
          <Text color="#86868B" size={13} lineHeight={18}>Access to GPT-5, Claude Opus, Gemini 3 Pro.</Text>
        </Frame>
      </Frame>
      <Frame flex="row" gap={14} items="start">
        <Frame w={32} h={32} bg="#0071E314" rounded={10} flex="row" items="center" justify="center"><Icon name="lucide:cloud" size={16} color="#0071E3" /></Frame>
        <Frame flex="col" gap={2} grow={1}>
          <Text color="#1D1D1F" size={15} weight="semibold">Cloud sync & backup</Text>
          <Text color="#86868B" size={13} lineHeight={18}>Automatic backup across devices. Never lose work.</Text>
        </Frame>
      </Frame>
      <Frame flex="row" gap={14} items="start">
        <Frame w={32} h={32} bg="#0071E314" rounded={10} flex="row" items="center" justify="center"><Icon name="lucide:heart" size={16} color="#0071E3" /></Frame>
        <Frame flex="col" gap={2} grow={1}>
          <Text color="#1D1D1F" size={15} weight="semibold">Priority support</Text>
          <Text color="#86868B" size={13} lineHeight={18}>Direct line to our team. Usually answered in under an hour.</Text>
        </Frame>
      </Frame>
    </Frame>
    <Frame name="PricePicker" w="fill" flex="row" gap={10}>
      <Frame grow={1} flex="col" gap={4} p={14} stroke="#D2D2D7" strokeWidth={1} rounded={12}>
        <Text color="#86868B" size={12} weight="medium">Monthly</Text>
        <Text color="#1D1D1F" size={18} weight="bold">$9.99</Text>
        <Text color="#86868B" size={11}>per month</Text>
      </Frame>
      <Frame grow={1} flex="col" gap={4} p={14} stroke="#0071E3" strokeWidth={2} rounded={12} bg="#0071E308">
        <Frame flex="row" justify="between" items="center">
          <Text color="#0071E3" size={12} weight="semibold">Yearly</Text>
          <Frame px={6} py={1} bg="#0071E3" rounded={4}><Text color="#FFFFFF" size={9} weight="bold">-40%</Text></Frame>
        </Frame>
        <Text color="#1D1D1F" size={18} weight="bold">$5.99</Text>
        <Text color="#86868B" size={11}>per month, billed yearly</Text>
      </Frame>
    </Frame>
  </Frame>
  <Frame name="PaywallCTA" w="fill" flex="col" gap={10} px={24} pb={32}>
    <Frame w="fill" h={52} bg="#0071E3" rounded={14} flex="row" items="center" justify="center"><Text color="#FFFFFF" size={17} weight="semibold">Start 7-day free trial</Text></Frame>
    <Frame w="fill" flex="row" items="center" justify="center" gap={16}>
      <Text color="#86868B" size={12}>Restore purchase</Text>
      <Text color="#86868B" size={12}>Terms</Text>
      <Text color="#86868B" size={12}>Privacy</Text>
    </Frame>
  </Frame>
</Frame>`
}

export const MOBILE_SUCCESS_STATE: Recipe = {
  name: 'mobile-success-state',
  type: 'mobile',
  style: 'apple',
  description:
    'Success confirmation screen after a task completes (payment, signup, action): large checkmark, title, sub, primary CTA, secondary link.',
  dimensions: '390×844',
  palette: ['#FFFFFF', '#1D1D1F', '#86868B', '#10B981', '#F5F5F7'],
  font: 'Inter',
  jsx: `<Frame name="SuccessScreen" w={390} h={844} bg="#FFFFFF" flex="col">
  <Frame name="StatusBar" w="fill" h={47} flex="row" items="center" justify="between" px={20}>
    <Text color="#1D1D1F" size={17} weight="semibold">9:41</Text>
    <Frame flex="row" gap={5} items="center"><Icon name="lucide:signal" size={16} color="#1D1D1F" /><Icon name="lucide:wifi" size={16} color="#1D1D1F" /><Icon name="lucide:battery-full" size={18} color="#1D1D1F" /></Frame>
  </Frame>
  <Frame name="SuccessBody" w="fill" grow={1} flex="col" items="center" justify="center" gap={32} px={32}>
    <Frame w={120} h={120} bg="#10B98114" rounded={60} flex="row" items="center" justify="center">
      <Frame w={88} h={88} bg="#10B981" rounded={44} flex="row" items="center" justify="center">
        <Icon name="lucide:check" size={48} color="#FFFFFF" />
      </Frame>
    </Frame>
    <Frame flex="col" gap={12} items="center">
      <Text color="#1D1D1F" size={28} weight="bold" letterSpacing={-1} textAlign="center">Payment successful</Text>
      <Text color="#86868B" size={16} textAlign="center" lineHeight={24} w="fill">Your subscription is now active. A receipt was sent to sarah@example.com.</Text>
    </Frame>
    <Frame name="ReceiptCard" w="fill" flex="col" gap={12} bg="#F5F5F7" rounded={12} p={20}>
      <Frame flex="row" justify="between"><Text color="#86868B" size={13}>Plan</Text><Text color="#1D1D1F" size={13} weight="semibold">Premium Yearly</Text></Frame>
      <Frame flex="row" justify="between"><Text color="#86868B" size={13}>Amount</Text><Text color="#1D1D1F" size={13} weight="semibold">$71.88</Text></Frame>
      <Frame flex="row" justify="between"><Text color="#86868B" size={13}>Next billing</Text><Text color="#1D1D1F" size={13} weight="semibold">Apr 17, 2027</Text></Frame>
      <Frame flex="row" justify="between"><Text color="#86868B" size={13}>Receipt ID</Text><Text color="#1D1D1F" size={13} weight="semibold" font="JetBrains Mono">#SC-0482193</Text></Frame>
    </Frame>
  </Frame>
  <Frame name="SuccessActions" w="fill" flex="col" gap={10} px={20} pb={32}>
    <Frame w="fill" h={52} bg="#1D1D1F" rounded={14} flex="row" items="center" justify="center"><Text color="#FFFFFF" size={17} weight="semibold">Continue to app</Text></Frame>
    <Frame w="fill" h={44} flex="row" items="center" justify="center"><Text color="#0071E3" size={15} weight="medium">View receipt</Text></Frame>
  </Frame>
</Frame>`
}
