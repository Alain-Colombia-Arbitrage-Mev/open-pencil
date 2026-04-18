import type { Recipe } from './design-recipes-data-a'

export const USER_MENU_DROPDOWN: Recipe = {
  name: 'user-menu-dropdown',
  type: 'dashboard',
  style: 'linear',
  description:
    'Avatar-triggered dropdown menu: user info header, settings links (account, team, billing), theme toggle, sign out.',
  dimensions: '280×440',
  palette: ['#FFFFFF', '#0A0A0A', '#71717A', '#5E6AD2', '#F4F4F5'],
  font: 'Inter',
  jsx: `<Frame name="UserMenu" w={280} bg="#FFFFFF" rounded={12} stroke="#E4E4E7" strokeWidth={1} flex="col" p={6} shadow="0 10 30 #00000014" overflow="hidden">
  <Frame w="fill" flex="row" gap={12} items="center" p={12} stroke="#F4F4F5" strokeWidth={1} strokeAlign="INSIDE">
    <Ellipse w={40} h={40} bg="#5E6AD2" />
    <Frame flex="col" gap={2} grow={1}>
      <Text color="#0A0A0A" size={13} weight="semibold">Sarah Chen</Text>
      <Text color="#71717A" size={12}>sarah@acme.com</Text>
    </Frame>
  </Frame>
  <Frame w="fill" h={36} flex="row" items="center" gap={10} px={10} rounded={6}>
    <Icon name="lucide:user" size={15} color="#71717A" />
    <Text color="#0A0A0A" size={13} grow={1}>My profile</Text>
    <Frame flex="row" gap={2}><Frame h={18} px={5} bg="#F4F4F5" rounded={3} flex="row" items="center"><Text color="#71717A" size={10} weight="semibold">G</Text></Frame><Frame h={18} px={5} bg="#F4F4F5" rounded={3} flex="row" items="center"><Text color="#71717A" size={10} weight="semibold">P</Text></Frame></Frame>
  </Frame>
  <Frame w="fill" h={36} flex="row" items="center" gap={10} px={10} rounded={6}>
    <Icon name="lucide:settings" size={15} color="#71717A" />
    <Text color="#0A0A0A" size={13} grow={1}>Account settings</Text>
  </Frame>
  <Frame w="fill" h={36} flex="row" items="center" gap={10} px={10} rounded={6}>
    <Icon name="lucide:users" size={15} color="#71717A" />
    <Text color="#0A0A0A" size={13} grow={1}>Team & members</Text>
  </Frame>
  <Frame w="fill" h={36} flex="row" items="center" gap={10} px={10} rounded={6}>
    <Icon name="lucide:credit-card" size={15} color="#71717A" />
    <Text color="#0A0A0A" size={13} grow={1}>Billing & plan</Text>
    <Frame h={18} px={6} bg="#5E6AD214" rounded={3}><Text color="#5E6AD2" size={10} weight="semibold">Pro</Text></Frame>
  </Frame>
  <Rectangle w="fill" h={1} bg="#F4F4F5" />
  <Frame w="fill" h={36} flex="row" items="center" gap={10} px={10} rounded={6}>
    <Icon name="lucide:moon" size={15} color="#71717A" />
    <Text color="#0A0A0A" size={13} grow={1}>Theme</Text>
    <Frame h={24} stroke="#E4E4E7" strokeWidth={1} rounded={6} flex="row">
      <Frame h={24} px={6} flex="row" items="center"><Icon name="lucide:sun" size={11} color="#71717A" /></Frame>
      <Frame h={24} px={6} bg="#F4F4F5" flex="row" items="center"><Icon name="lucide:moon" size={11} color="#0A0A0A" /></Frame>
      <Frame h={24} px={6} flex="row" items="center"><Icon name="lucide:monitor" size={11} color="#71717A" /></Frame>
    </Frame>
  </Frame>
  <Frame w="fill" h={36} flex="row" items="center" gap={10} px={10} rounded={6}>
    <Icon name="lucide:keyboard" size={15} color="#71717A" />
    <Text color="#0A0A0A" size={13} grow={1}>Keyboard shortcuts</Text>
    <Frame h={18} px={5} bg="#F4F4F5" rounded={3} flex="row" items="center"><Text color="#71717A" size={10} weight="semibold">?</Text></Frame>
  </Frame>
  <Frame w="fill" h={36} flex="row" items="center" gap={10} px={10} rounded={6}>
    <Icon name="lucide:life-buoy" size={15} color="#71717A" />
    <Text color="#0A0A0A" size={13} grow={1}>Help & support</Text>
  </Frame>
  <Rectangle w="fill" h={1} bg="#F4F4F5" />
  <Frame w="fill" h={36} flex="row" items="center" gap={10} px={10} rounded={6}>
    <Icon name="lucide:log-out" size={15} color="#EF4444" />
    <Text color="#EF4444" size={13} weight="medium" grow={1}>Sign out</Text>
  </Frame>
</Frame>`
}

export const KANBAN_BOARD: Recipe = {
  name: 'kanban-board',
  type: 'dashboard',
  style: 'linear',
  description:
    'Kanban board with 4 columns (To do, In progress, Review, Done) and cards (priority chip, title, assignee avatars, counters).',
  dimensions: '1200×560',
  palette: ['#FFFFFF', '#0A0A0A', '#71717A', '#5E6AD2', '#10B981', '#F59E0B', '#EF4444'],
  font: 'Inter',
  jsx: `<Frame name="KanbanBoard" w={1200} bg="#FAFAFA" flex="row" gap={16} p={20} items="start">
  <Frame name="ColumnTodo" w={280} flex="col" gap={10} bg="#F4F4F5" rounded={10} p={12}>
    <Frame flex="row" items="center" justify="between">
      <Frame flex="row" gap={8} items="center"><Ellipse w={8} h={8} bg="#71717A" /><Text color="#0A0A0A" size={13} weight="semibold">To do</Text><Text color="#71717A" size={12}>4</Text></Frame>
      <Icon name="lucide:plus" size={14} color="#71717A" />
    </Frame>
    <Frame w="fill" bg="#FFFFFF" rounded={8} p={12} flex="col" gap={10} stroke="#E4E4E7" strokeWidth={1}>
      <Frame flex="row" items="center" gap={6}><Frame h={20} px={6} bg="#FEF2F2" rounded={4}><Text color="#991B1B" size={10} weight="semibold">Urgent</Text></Frame></Frame>
      <Text color="#0A0A0A" size={13} weight="medium" lineHeight={18}>Fix mobile crash on iOS 17.5</Text>
      <Frame flex="row" items="center" justify="between">
        <Frame flex="row" gap={10} items="center">
          <Frame flex="row"><Ellipse w={20} h={20} bg="#5E6AD2" stroke="#FFFFFF" strokeWidth={2} /><Ellipse w={20} h={20} bg="#F5A623" stroke="#FFFFFF" strokeWidth={2} x={-6} /></Frame>
          <Frame flex="row" gap={4} items="center"><Icon name="lucide:message-circle" size={11} color="#71717A" /><Text color="#71717A" size={11}>3</Text></Frame>
        </Frame>
        <Text color="#71717A" size={11}>ENG-2847</Text>
      </Frame>
    </Frame>
    <Frame w="fill" bg="#FFFFFF" rounded={8} p={12} flex="col" gap={10} stroke="#E4E4E7" strokeWidth={1}>
      <Frame h={20} px={6} bg="#FFFBEB" rounded={4} w={50}><Text color="#92400E" size={10} weight="semibold">High</Text></Frame>
      <Text color="#0A0A0A" size={13} weight="medium" lineHeight={18}>Polish empty states across app</Text>
      <Ellipse w={20} h={20} bg="#10B981" />
    </Frame>
  </Frame>
  <Frame name="ColumnProgress" w={280} flex="col" gap={10} bg="#F4F4F5" rounded={10} p={12}>
    <Frame flex="row" items="center" justify="between">
      <Frame flex="row" gap={8} items="center"><Ellipse w={8} h={8} bg="#F59E0B" /><Text color="#0A0A0A" size={13} weight="semibold">In progress</Text><Text color="#71717A" size={12}>3</Text></Frame>
      <Icon name="lucide:plus" size={14} color="#71717A" />
    </Frame>
    <Frame w="fill" bg="#FFFFFF" rounded={8} p={12} flex="col" gap={10} stroke="#E4E4E7" strokeWidth={1}>
      <Frame h={20} px={6} bg="#EFF6FF" rounded={4} w={60}><Text color="#1E40AF" size={10} weight="semibold">Medium</Text></Frame>
      <Text color="#0A0A0A" size={13} weight="medium" lineHeight={18}>AI search — query parser v2</Text>
      <Frame w="fill" h={4} bg="#F4F4F5" rounded={2} overflow="hidden"><Rectangle w={180} h={4} bg="#5E6AD2" rounded={2} /></Frame>
      <Frame flex="row" items="center" justify="between">
        <Ellipse w={20} h={20} bg="#A855F7" />
        <Text color="#71717A" size={11}>ENG-2823</Text>
      </Frame>
    </Frame>
    <Frame w="fill" bg="#FFFFFF" rounded={8} p={12} flex="col" gap={10} stroke="#E4E4E7" strokeWidth={1}>
      <Text color="#0A0A0A" size={13} weight="medium" lineHeight={18}>Dark mode for mobile app</Text>
      <Frame flex="row" items="center" gap={6}><Icon name="lucide:git-branch" size={11} color="#71717A" /><Text color="#71717A" size={11}>mobile/dark-mode</Text></Frame>
    </Frame>
  </Frame>
  <Frame name="ColumnReview" w={280} flex="col" gap={10} bg="#F4F4F5" rounded={10} p={12}>
    <Frame flex="row" items="center" justify="between">
      <Frame flex="row" gap={8} items="center"><Ellipse w={8} h={8} bg="#5E6AD2" /><Text color="#0A0A0A" size={13} weight="semibold">In review</Text><Text color="#71717A" size={12}>2</Text></Frame>
      <Icon name="lucide:plus" size={14} color="#71717A" />
    </Frame>
    <Frame w="fill" bg="#FFFFFF" rounded={8} p={12} flex="col" gap={10} stroke="#E4E4E7" strokeWidth={1}>
      <Text color="#0A0A0A" size={13} weight="medium" lineHeight={18}>Onboarding copy refresh</Text>
      <Frame flex="row" items="center" justify="between">
        <Frame flex="row" gap={4} items="center"><Icon name="lucide:check-circle-2" size={11} color="#10B981" /><Text color="#10B981" size={11} weight="medium">2 approved</Text></Frame>
        <Text color="#71717A" size={11}>DES-118</Text>
      </Frame>
    </Frame>
  </Frame>
  <Frame name="ColumnDone" w={280} flex="col" gap={10} bg="#F4F4F5" rounded={10} p={12}>
    <Frame flex="row" items="center" justify="between">
      <Frame flex="row" gap={8} items="center"><Ellipse w={8} h={8} bg="#10B981" /><Text color="#0A0A0A" size={13} weight="semibold">Done</Text><Text color="#71717A" size={12}>12</Text></Frame>
      <Icon name="lucide:plus" size={14} color="#71717A" />
    </Frame>
    <Frame w="fill" bg="#FFFFFF" rounded={8} p={12} flex="col" gap={8} stroke="#E4E4E7" strokeWidth={1} opacity={0.7}>
      <Frame flex="row" gap={6} items="center"><Icon name="lucide:check-circle-2" size={12} color="#10B981" /><Text color="#0A0A0A" size={13} weight="medium" grow={1} textDecoration="strikethrough">Ship v2.4 release notes</Text></Frame>
      <Text color="#71717A" size={11}>Merged 2 hours ago</Text>
    </Frame>
  </Frame>
</Frame>`
}

export const CALENDAR_MONTH_VIEW: Recipe = {
  name: 'calendar-month-view',
  type: 'dashboard',
  style: 'minimal',
  description:
    'Full month calendar view with header controls, day grid, and colored event blocks (multi-day ranges).',
  dimensions: '1200×660',
  palette: ['#FFFFFF', '#0A0A0A', '#71717A', '#0070F3', '#10B981', '#F59E0B', '#F4F4F5'],
  font: 'Inter',
  jsx: `<Frame name="CalendarView" w={1200} bg="#FFFFFF" stroke="#E4E4E7" strokeWidth={1} rounded={12} flex="col" overflow="hidden">
  <Frame w="fill" flex="row" items="center" justify="between" px={20} py={16} stroke="#F4F4F5" strokeWidth={1} strokeAlign="INSIDE">
    <Frame flex="row" gap={16} items="center">
      <Frame h={32} stroke="#E4E4E7" strokeWidth={1} rounded={6} flex="row">
        <Frame h={32} px={10} flex="row" items="center"><Icon name="lucide:chevron-left" size={14} color="#71717A" /></Frame>
        <Frame h={32} px={10} bg="#F4F4F5" flex="row" items="center"><Text color="#0A0A0A" size={12} weight="medium">Today</Text></Frame>
        <Frame h={32} px={10} flex="row" items="center"><Icon name="lucide:chevron-right" size={14} color="#71717A" /></Frame>
      </Frame>
      <Text color="#0A0A0A" size={18} weight="bold" letterSpacing={-0.5}>April 2026</Text>
    </Frame>
    <Frame flex="row" gap={8} items="center">
      <Frame h={32} stroke="#E4E4E7" strokeWidth={1} rounded={6} flex="row">
        <Frame h={32} px={10} flex="row" items="center"><Text color="#71717A" size={12}>Day</Text></Frame>
        <Frame h={32} px={10} flex="row" items="center"><Text color="#71717A" size={12}>Week</Text></Frame>
        <Frame h={32} px={10} bg="#0A0A0A" flex="row" items="center"><Text color="#FFFFFF" size={12} weight="semibold">Month</Text></Frame>
      </Frame>
      <Frame h={32} px={12} bg="#0070F3" rounded={6} flex="row" items="center" gap={4}><Icon name="lucide:plus" size={13} color="#FFFFFF" /><Text color="#FFFFFF" size={12} weight="semibold">New event</Text></Frame>
    </Frame>
  </Frame>
  <Frame w="fill" h={32} flex="row" bg="#FAFAFA" stroke="#F4F4F5" strokeWidth={1} strokeAlign="INSIDE">
    <Frame grow={1} h="fill" flex="row" items="center" justify="center"><Text color="#71717A" size={11} weight="semibold" letterSpacing={0.5}>MON</Text></Frame>
    <Frame grow={1} h="fill" flex="row" items="center" justify="center"><Text color="#71717A" size={11} weight="semibold" letterSpacing={0.5}>TUE</Text></Frame>
    <Frame grow={1} h="fill" flex="row" items="center" justify="center"><Text color="#71717A" size={11} weight="semibold" letterSpacing={0.5}>WED</Text></Frame>
    <Frame grow={1} h="fill" flex="row" items="center" justify="center"><Text color="#71717A" size={11} weight="semibold" letterSpacing={0.5}>THU</Text></Frame>
    <Frame grow={1} h="fill" flex="row" items="center" justify="center"><Text color="#71717A" size={11} weight="semibold" letterSpacing={0.5}>FRI</Text></Frame>
    <Frame grow={1} h="fill" flex="row" items="center" justify="center"><Text color="#71717A" size={11} weight="semibold" letterSpacing={0.5}>SAT</Text></Frame>
    <Frame grow={1} h="fill" flex="row" items="center" justify="center"><Text color="#71717A" size={11} weight="semibold" letterSpacing={0.5}>SUN</Text></Frame>
  </Frame>
  <Frame w="fill" flex="col">
    <Frame w="fill" h={120} flex="row" stroke="#F4F4F5" strokeWidth={1} strokeAlign="INSIDE">
      <Frame grow={1} h="fill" flex="col" gap={3} p={6} stroke="#F4F4F5" strokeWidth={1} strokeAlign="INSIDE"><Text color="#D1D1D6" size={11} weight="semibold">30</Text></Frame>
      <Frame grow={1} h="fill" flex="col" gap={3} p={6} stroke="#F4F4F5" strokeWidth={1} strokeAlign="INSIDE"><Text color="#D1D1D6" size={11} weight="semibold">31</Text></Frame>
      <Frame grow={1} h="fill" flex="col" gap={3} p={6} stroke="#F4F4F5" strokeWidth={1} strokeAlign="INSIDE">
        <Text color="#0A0A0A" size={11} weight="semibold">1</Text>
        <Frame h={20} px={6} bg="#0070F314" rounded={4} flex="row" items="center"><Text color="#0070F3" size={10} weight="semibold" maxLines={1}>Q2 Kickoff</Text></Frame>
      </Frame>
      <Frame grow={1} h="fill" flex="col" gap={3} p={6} stroke="#F4F4F5" strokeWidth={1} strokeAlign="INSIDE"><Text color="#0A0A0A" size={11} weight="semibold">2</Text></Frame>
      <Frame grow={1} h="fill" flex="col" gap={3} p={6} stroke="#F4F4F5" strokeWidth={1} strokeAlign="INSIDE">
        <Text color="#0A0A0A" size={11} weight="semibold">3</Text>
        <Frame h={20} px={6} bg="#F59E0B14" rounded={4} flex="row" items="center"><Text color="#92400E" size={10} weight="semibold" maxLines={1}>Design review</Text></Frame>
      </Frame>
      <Frame grow={1} h="fill" flex="col" gap={3} p={6} stroke="#F4F4F5" strokeWidth={1} strokeAlign="INSIDE"><Text color="#0A0A0A" size={11} weight="semibold">4</Text></Frame>
      <Frame grow={1} h="fill" flex="col" gap={3} p={6} stroke="#F4F4F5" strokeWidth={1} strokeAlign="INSIDE"><Text color="#0A0A0A" size={11} weight="semibold">5</Text></Frame>
    </Frame>
    <Frame w="fill" h={120} flex="row" stroke="#F4F4F5" strokeWidth={1} strokeAlign="INSIDE">
      <Frame grow={1} h="fill" flex="col" gap={3} p={6} stroke="#F4F4F5" strokeWidth={1} strokeAlign="INSIDE"><Text color="#0A0A0A" size={11} weight="semibold">6</Text></Frame>
      <Frame grow={1} h="fill" flex="col" gap={3} p={6} stroke="#F4F4F5" strokeWidth={1} strokeAlign="INSIDE"><Text color="#0A0A0A" size={11} weight="semibold">7</Text></Frame>
      <Frame grow={1} h="fill" flex="col" gap={3} p={6} stroke="#F4F4F5" strokeWidth={1} strokeAlign="INSIDE"><Text color="#0A0A0A" size={11} weight="semibold">8</Text></Frame>
      <Frame grow={1} h="fill" flex="col" gap={3} p={6} stroke="#F4F4F5" strokeWidth={1} strokeAlign="INSIDE">
        <Text color="#0A0A0A" size={11} weight="semibold">9</Text>
        <Frame h={20} px={6} bg="#10B98114" rounded={4} flex="row" items="center"><Text color="#065F46" size={10} weight="semibold" maxLines={1}>Ship v2.4</Text></Frame>
      </Frame>
      <Frame grow={1} h="fill" flex="col" gap={3} p={6} stroke="#F4F4F5" strokeWidth={1} strokeAlign="INSIDE"><Text color="#0A0A0A" size={11} weight="semibold">10</Text></Frame>
      <Frame grow={1} h="fill" flex="col" gap={3} p={6} stroke="#F4F4F5" strokeWidth={1} strokeAlign="INSIDE"><Text color="#0A0A0A" size={11} weight="semibold">11</Text></Frame>
      <Frame grow={1} h="fill" flex="col" gap={3} p={6} stroke="#F4F4F5" strokeWidth={1} strokeAlign="INSIDE"><Text color="#0A0A0A" size={11} weight="semibold">12</Text></Frame>
    </Frame>
    <Frame w="fill" h={120} flex="row" stroke="#F4F4F5" strokeWidth={1} strokeAlign="INSIDE">
      <Frame grow={1} h="fill" flex="col" gap={3} p={6} stroke="#F4F4F5" strokeWidth={1} strokeAlign="INSIDE"><Text color="#0A0A0A" size={11} weight="semibold">13</Text></Frame>
      <Frame grow={1} h="fill" flex="col" gap={3} p={6} stroke="#F4F4F5" strokeWidth={1} strokeAlign="INSIDE"><Text color="#0A0A0A" size={11} weight="semibold">14</Text></Frame>
      <Frame grow={1} h="fill" flex="col" gap={3} p={6} stroke="#F4F4F5" strokeWidth={1} strokeAlign="INSIDE"><Text color="#0A0A0A" size={11} weight="semibold">15</Text></Frame>
      <Frame grow={1} h="fill" flex="col" gap={3} p={6} bg="#0070F30A" stroke="#0070F3" strokeWidth={2} strokeAlign="INSIDE">
        <Text color="#0070F3" size={11} weight="bold">16</Text>
        <Frame h={20} px={6} bg="#5E6AD214" rounded={4} flex="row" items="center"><Text color="#5E6AD2" size={10} weight="semibold" maxLines={1}>Offsite planning</Text></Frame>
      </Frame>
      <Frame grow={1} h="fill" flex="col" gap={3} p={6} stroke="#F4F4F5" strokeWidth={1} strokeAlign="INSIDE"><Text color="#0A0A0A" size={11} weight="semibold">17</Text></Frame>
      <Frame grow={1} h="fill" flex="col" gap={3} p={6} stroke="#F4F4F5" strokeWidth={1} strokeAlign="INSIDE"><Text color="#0A0A0A" size={11} weight="semibold">18</Text></Frame>
      <Frame grow={1} h="fill" flex="col" gap={3} p={6} stroke="#F4F4F5" strokeWidth={1} strokeAlign="INSIDE"><Text color="#0A0A0A" size={11} weight="semibold">19</Text></Frame>
    </Frame>
  </Frame>
</Frame>`
}

export const TIMELINE_EVENTS: Recipe = {
  name: 'timeline-events-vertical',
  type: 'dashboard',
  style: 'minimal',
  description:
    'Vertical timeline with connector line, date markers, and event cards. Use for audit logs, project history, user activity.',
  dimensions: '640×540',
  palette: ['#FFFFFF', '#0A0A0A', '#71717A', '#0070F3', '#10B981', '#E4E4E7'],
  font: 'Inter',
  jsx: `<Frame name="Timeline" w={640} bg="#FFFFFF" flex="col" p={28}>
  <Frame flex="col" gap={4} pb={24}>
    <Text color="#0A0A0A" size={18} weight="semibold">Project history</Text>
    <Text color="#71717A" size={13}>Last 30 days</Text>
  </Frame>
  <Frame w="fill" flex="col">
    <Frame flex="row" gap={16} items="start">
      <Frame flex="col" items="center" w={80}>
        <Text color="#71717A" size={11} weight="semibold" letterSpacing={0.3}>APR 16</Text>
        <Text color="#D1D1D6" size={10}>12:48 PM</Text>
      </Frame>
      <Frame flex="col" items="center" gap={0}>
        <Frame w={28} h={28} bg="#0070F3" rounded={14} flex="row" items="center" justify="center"><Icon name="lucide:git-merge" size={14} color="#FFFFFF" /></Frame>
        <Rectangle w={2} h={48} bg="#E4E4E7" />
      </Frame>
      <Frame grow={1} flex="col" gap={6} pb={24}>
        <Text color="#0A0A0A" size={14} weight="semibold">Merged pull request #1847</Text>
        <Text color="#71717A" size={13} lineHeight={19}>Refine onboarding copy · <Text color="#0070F3" size={13} weight="medium">sarah.chen</Text></Text>
      </Frame>
    </Frame>
    <Frame flex="row" gap={16} items="start">
      <Frame flex="col" items="center" w={80}>
        <Text color="#71717A" size={11} weight="semibold" letterSpacing={0.3}>APR 15</Text>
        <Text color="#D1D1D6" size={10}>3:12 PM</Text>
      </Frame>
      <Frame flex="col" items="center" gap={0}>
        <Frame w={28} h={28} bg="#10B981" rounded={14} flex="row" items="center" justify="center"><Icon name="lucide:rocket" size={14} color="#FFFFFF" /></Frame>
        <Rectangle w={2} h={48} bg="#E4E4E7" />
      </Frame>
      <Frame grow={1} flex="col" gap={6} pb={24}>
        <Text color="#0A0A0A" size={14} weight="semibold">Deployed v2.4.0 to production</Text>
        <Frame flex="row" items="center" gap={8}><Frame h={20} px={8} bg="#10B98114" rounded={4}><Text color="#065F46" size={10} weight="semibold">RELEASE</Text></Frame><Text color="#71717A" size={12}>4,293 users updated in 12 min</Text></Frame>
      </Frame>
    </Frame>
    <Frame flex="row" gap={16} items="start">
      <Frame flex="col" items="center" w={80}>
        <Text color="#71717A" size={11} weight="semibold" letterSpacing={0.3}>APR 14</Text>
        <Text color="#D1D1D6" size={10}>10:05 AM</Text>
      </Frame>
      <Frame flex="col" items="center" gap={0}>
        <Frame w={28} h={28} bg="#FFFFFF" stroke="#E4E4E7" strokeWidth={2} rounded={14} flex="row" items="center" justify="center"><Icon name="lucide:message-circle" size={13} color="#71717A" /></Frame>
        <Rectangle w={2} h={48} bg="#E4E4E7" />
      </Frame>
      <Frame grow={1} flex="col" gap={8} pb={24} bg="#FAFAFA" rounded={10} p={14}>
        <Frame flex="row" gap={8} items="center"><Ellipse w={20} h={20} bg="#5E6AD2" /><Text color="#0A0A0A" size={13} weight="semibold">Marcus Delgado</Text></Frame>
        <Text color="#0A0A0A" size={13} lineHeight={20} w="fill">"Approved the design changes. Ready to merge as soon as QA signs off."</Text>
      </Frame>
    </Frame>
    <Frame flex="row" gap={16} items="start">
      <Frame flex="col" items="center" w={80}><Text color="#71717A" size={11} weight="semibold" letterSpacing={0.3}>APR 12</Text></Frame>
      <Frame flex="col" items="center" gap={0}>
        <Frame w={28} h={28} bg="#FFFFFF" stroke="#E4E4E7" strokeWidth={2} rounded={14} flex="row" items="center" justify="center"><Icon name="lucide:user-plus" size={13} color="#71717A" /></Frame>
      </Frame>
      <Frame grow={1} flex="col" gap={4}>
        <Text color="#0A0A0A" size={14} weight="medium">Invited Priya Ramachandran to the project</Text>
        <Text color="#71717A" size={12}>Now collaborating · 4 members total</Text>
      </Frame>
    </Frame>
  </Frame>
</Frame>`
}

export const BILLING_PANEL: Recipe = {
  name: 'billing-subscription-panel',
  type: 'dashboard',
  style: 'minimal',
  description:
    'Billing/subscription settings panel: current plan card, next invoice, payment method, usage meters, history table.',
  dimensions: '880×640',
  palette: ['#FFFFFF', '#0A0A0A', '#71717A', '#0070F3', '#10B981', '#F4F4F5'],
  font: 'Inter',
  jsx: `<Frame name="BillingPanel" w={880} bg="#FFFFFF" flex="col" gap={20} p={32}>
  <Frame flex="col" gap={4}>
    <Text color="#0A0A0A" size={24} weight="bold" letterSpacing={-0.5}>Billing</Text>
    <Text color="#71717A" size={14}>Manage your plan, payment, and invoices.</Text>
  </Frame>
  <Frame name="CurrentPlan" w="fill" flex="row" items="center" justify="between" gap={16} p={24} bg="#F5F7FF" stroke="#0070F3" strokeWidth={1} rounded={12}>
    <Frame flex="col" gap={6} grow={1}>
      <Frame flex="row" gap={8} items="center">
        <Text color="#0A0A0A" size={18} weight="bold">Pro plan</Text>
        <Frame h={22} px={8} bg="#0070F3" rounded={4}><Text color="#FFFFFF" size={10} weight="semibold" letterSpacing={0.5}>ACTIVE</Text></Frame>
      </Frame>
      <Text color="#71717A" size={13}>$24 per user/month · 12 seats · Renews monthly</Text>
    </Frame>
    <Frame flex="row" gap={8}>
      <Frame h={36} px={14} bg="#FFFFFF" stroke="#E4E4E7" strokeWidth={1} rounded={8} flex="row" items="center"><Text color="#0A0A0A" size={13} weight="medium">Change plan</Text></Frame>
      <Frame h={36} px={14} bg="#0070F3" rounded={8} flex="row" items="center"><Text color="#FFFFFF" size={13} weight="semibold">Upgrade</Text></Frame>
    </Frame>
  </Frame>
  <Frame w="fill" flex="row" gap={16}>
    <Frame grow={1} flex="col" gap={10} p={20} stroke="#E4E4E7" strokeWidth={1} rounded={12}>
      <Text color="#71717A" size={12} weight="semibold" letterSpacing={0.3} textCase="upper">Next invoice</Text>
      <Text color="#0A0A0A" size={28} weight="bold" letterSpacing={-1}>$288.00</Text>
      <Frame flex="row" items="center" gap={6}><Icon name="lucide:calendar" size={12} color="#71717A" /><Text color="#71717A" size={12}>May 16, 2026</Text></Frame>
    </Frame>
    <Frame grow={1} flex="col" gap={10} p={20} stroke="#E4E4E7" strokeWidth={1} rounded={12}>
      <Text color="#71717A" size={12} weight="semibold" letterSpacing={0.3} textCase="upper">Payment method</Text>
      <Frame flex="row" gap={10} items="center"><Frame w={36} h={24} bg="#1A1F71" rounded={4} flex="row" items="center" justify="center"><Text color="#FFFFFF" size={10} weight="bold" letterSpacing={0.5}>VISA</Text></Frame><Text color="#0A0A0A" size={14} weight="medium">•••• 4829</Text></Frame>
      <Frame flex="row" gap={16} items="center"><Text color="#71717A" size={12}>Expires 12/28</Text><Text color="#0070F3" size={12} weight="semibold">Update</Text></Frame>
    </Frame>
  </Frame>
  <Frame flex="col" gap={14}>
    <Text color="#0A0A0A" size={15} weight="semibold">Usage this period</Text>
    <Frame flex="col" gap={12}>
      <Frame w="fill" flex="col" gap={6}>
        <Frame flex="row" justify="between"><Text color="#0A0A0A" size={13} weight="medium">Seats</Text><Text color="#71717A" size={12}>12 / 25</Text></Frame>
        <Frame w="fill" h={6} bg="#F4F4F5" rounded={3} overflow="hidden"><Rectangle w={420} h={6} bg="#10B981" rounded={3} /></Frame>
      </Frame>
      <Frame w="fill" flex="col" gap={6}>
        <Frame flex="row" justify="between"><Text color="#0A0A0A" size={13} weight="medium">API requests</Text><Text color="#71717A" size={12}>42.8k / 100k</Text></Frame>
        <Frame w="fill" h={6} bg="#F4F4F5" rounded={3} overflow="hidden"><Rectangle w={340} h={6} bg="#0070F3" rounded={3} /></Frame>
      </Frame>
      <Frame w="fill" flex="col" gap={6}>
        <Frame flex="row" justify="between"><Text color="#0A0A0A" size={13} weight="medium">Storage</Text><Text color="#71717A" size={12}>8.4 GB / 20 GB</Text></Frame>
        <Frame w="fill" h={6} bg="#F4F4F5" rounded={3} overflow="hidden"><Rectangle w={340} h={6} bg="#0070F3" rounded={3} /></Frame>
      </Frame>
    </Frame>
  </Frame>
</Frame>`
}

export const API_KEYS_TABLE: Recipe = {
  name: 'api-keys-table',
  type: 'dashboard',
  style: 'minimal',
  description:
    'API keys management: table with key name, prefix (redacted), scope, last used, created date, revoke action. Header with "Create new" CTA.',
  dimensions: '1000×480',
  palette: ['#FFFFFF', '#0A0A0A', '#71717A', '#0070F3', '#EF4444', '#F4F4F5'],
  font: 'Inter',
  jsx: `<Frame name="APIKeysPanel" w={1000} bg="#FFFFFF" flex="col" gap={20}>
  <Frame flex="row" items="start" justify="between" w="fill">
    <Frame flex="col" gap={4}>
      <Text color="#0A0A0A" size={18} weight="semibold">API keys</Text>
      <Text color="#71717A" size={13} lineHeight={20} w={480}>Keys let you authenticate programmatic access. Never share keys in client code.</Text>
    </Frame>
    <Frame h={36} px={14} bg="#0A0A0A" rounded={8} flex="row" items="center" gap={6}><Icon name="lucide:plus" size={13} color="#FFFFFF" /><Text color="#FFFFFF" size={13} weight="semibold">Create new key</Text></Frame>
  </Frame>
  <Frame w="fill" stroke="#E4E4E7" strokeWidth={1} rounded={10} flex="col" overflow="hidden">
    <Frame w="fill" h={40} bg="#FAFAFA" flex="row" items="center" gap={14} px={16} stroke="#E4E4E7" strokeWidth={1} strokeAlign="INSIDE">
      <Frame w={160}><Text color="#71717A" size={11} weight="semibold" letterSpacing={0.3} textCase="upper">Name</Text></Frame>
      <Frame w={200}><Text color="#71717A" size={11} weight="semibold" letterSpacing={0.3} textCase="upper">Key</Text></Frame>
      <Frame w={120}><Text color="#71717A" size={11} weight="semibold" letterSpacing={0.3} textCase="upper">Scope</Text></Frame>
      <Frame w={140}><Text color="#71717A" size={11} weight="semibold" letterSpacing={0.3} textCase="upper">Last used</Text></Frame>
      <Frame grow={1}><Text color="#71717A" size={11} weight="semibold" letterSpacing={0.3} textCase="upper">Created</Text></Frame>
    </Frame>
    <Frame w="fill" h={56} flex="row" items="center" gap={14} px={16} stroke="#E4E4E7" strokeWidth={1} strokeAlign="INSIDE">
      <Frame w={160} flex="col" gap={2}><Text color="#0A0A0A" size={13} weight="medium">Production</Text><Frame flex="row" gap={4} items="center"><Ellipse w={5} h={5} bg="#10B981" /><Text color="#71717A" size={11}>Active</Text></Frame></Frame>
      <Frame w={200} flex="row" items="center" gap={8}>
        <Text color="#0A0A0A" size={13} font="JetBrains Mono">sk_live_••••8293</Text>
        <Icon name="lucide:copy" size={12} color="#71717A" />
      </Frame>
      <Frame w={120}><Frame h={20} px={8} bg="#F4F4F5" rounded={4} flex="row" items="center" w={70}><Text color="#525252" size={11} weight="semibold">Full access</Text></Frame></Frame>
      <Frame w={140}><Text color="#0A0A0A" size={13}>2 min ago</Text></Frame>
      <Frame grow={1}><Text color="#71717A" size={13}>Mar 28, 2026</Text></Frame>
      <Icon name="lucide:more-horizontal" size={14} color="#71717A" />
    </Frame>
    <Frame w="fill" h={56} flex="row" items="center" gap={14} px={16} bg="#FAFAFA" stroke="#E4E4E7" strokeWidth={1} strokeAlign="INSIDE">
      <Frame w={160} flex="col" gap={2}><Text color="#0A0A0A" size={13} weight="medium">Staging</Text><Frame flex="row" gap={4} items="center"><Ellipse w={5} h={5} bg="#10B981" /><Text color="#71717A" size={11}>Active</Text></Frame></Frame>
      <Frame w={200} flex="row" items="center" gap={8}>
        <Text color="#0A0A0A" size={13} font="JetBrains Mono">sk_test_••••1047</Text>
        <Icon name="lucide:copy" size={12} color="#71717A" />
      </Frame>
      <Frame w={120}><Frame h={20} px={8} bg="#F4F4F5" rounded={4} flex="row" items="center" w={60}><Text color="#525252" size={11} weight="semibold">Read only</Text></Frame></Frame>
      <Frame w={140}><Text color="#0A0A0A" size={13}>1 hour ago</Text></Frame>
      <Frame grow={1}><Text color="#71717A" size={13}>Feb 12, 2026</Text></Frame>
      <Icon name="lucide:more-horizontal" size={14} color="#71717A" />
    </Frame>
    <Frame w="fill" h={56} flex="row" items="center" gap={14} px={16}>
      <Frame w={160} flex="col" gap={2}><Text color="#0A0A0A" size={13} weight="medium">Deploy bot</Text><Frame flex="row" gap={4} items="center"><Ellipse w={5} h={5} bg="#A1A1AA" /><Text color="#71717A" size={11}>Revoked</Text></Frame></Frame>
      <Frame w={200} flex="row" items="center" gap={8}><Text color="#A1A1AA" size={13} font="JetBrains Mono" textDecoration="strikethrough">sk_live_••••5529</Text></Frame>
      <Frame w={120}><Frame h={20} px={8} bg="#F4F4F5" rounded={4} flex="row" items="center" w={60}><Text color="#525252" size={11} weight="semibold">Deploy</Text></Frame></Frame>
      <Frame w={140}><Text color="#A1A1AA" size={13}>4 days ago</Text></Frame>
      <Frame grow={1}><Text color="#71717A" size={13}>Jan 8, 2026</Text></Frame>
    </Frame>
  </Frame>
</Frame>`
}
