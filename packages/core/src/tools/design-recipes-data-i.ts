import type { Recipe } from './design-recipes-data-a'

export const TOAST_NOTIFICATIONS: Recipe = {
  name: 'toast-notifications-stack',
  type: 'card',
  style: 'minimal',
  description:
    'Stack of 3 toast notifications (success, info, error) positioned bottom-right with icon + title + description + close.',
  dimensions: '400×260',
  palette: ['#FFFFFF', '#0A0A0A', '#71717A', '#10B981', '#EF4444', '#F4F4F5'],
  font: 'Inter',
  jsx: `<Frame name="ToastStack" w={400} flex="col" gap={10}>
  <Frame name="ToastSuccess" w="fill" bg="#FFFFFF" rounded={10} stroke="#E4E4E7" strokeWidth={1} flex="row" items="start" gap={12} p={14} shadow="0 10 30 #00000014">
    <Frame w={28} h={28} bg="#10B98114" rounded={14} flex="row" items="center" justify="center"><Icon name="lucide:check" size={16} color="#10B981" /></Frame>
    <Frame grow={1} flex="col" gap={2}>
      <Text color="#0A0A0A" size={13} weight="semibold">Changes saved</Text>
      <Text color="#71717A" size={12} lineHeight={18}>Your design system was updated successfully.</Text>
    </Frame>
    <Icon name="lucide:x" size={14} color="#71717A" />
  </Frame>
  <Frame name="ToastInfo" w="fill" bg="#FFFFFF" rounded={10} stroke="#E4E4E7" strokeWidth={1} flex="row" items="start" gap={12} p={14} shadow="0 10 30 #00000014">
    <Frame w={28} h={28} bg="#3B82F614" rounded={14} flex="row" items="center" justify="center"><Icon name="lucide:info" size={16} color="#3B82F6" /></Frame>
    <Frame grow={1} flex="col" gap={4}>
      <Text color="#0A0A0A" size={13} weight="semibold">New version available</Text>
      <Text color="#71717A" size={12} lineHeight={18}>A new release is ready to install.</Text>
      <Frame flex="row" gap={8} pt={4}>
        <Text color="#3B82F6" size={12} weight="semibold">Update now</Text>
        <Text color="#71717A" size={12}>Later</Text>
      </Frame>
    </Frame>
    <Icon name="lucide:x" size={14} color="#71717A" />
  </Frame>
  <Frame name="ToastError" w="fill" bg="#FFFFFF" rounded={10} stroke="#EF4444" strokeWidth={1} flex="row" items="start" gap={12} p={14} shadow="0 10 30 #00000014">
    <Frame w={28} h={28} bg="#EF444414" rounded={14} flex="row" items="center" justify="center"><Icon name="lucide:alert-circle" size={16} color="#EF4444" /></Frame>
    <Frame grow={1} flex="col" gap={2}>
      <Text color="#0A0A0A" size={13} weight="semibold">Upload failed</Text>
      <Text color="#71717A" size={12} lineHeight={18}>File exceeds 10MB limit. Try compressing it.</Text>
    </Frame>
    <Icon name="lucide:x" size={14} color="#71717A" />
  </Frame>
</Frame>`
}

export const ALERT_BANNERS: Recipe = {
  name: 'alert-banners-variants',
  type: 'card',
  style: 'minimal',
  description:
    '4 alert banner variants stacked (info, success, warning, error) with icon + message + action link + dismiss.',
  dimensions: '720×280',
  palette: ['#FFFFFF', '#0A0A0A', '#71717A', '#3B82F6', '#10B981', '#F59E0B', '#EF4444'],
  font: 'Inter',
  jsx: `<Frame name="AlertsStack" w={720} flex="col" gap={10}>
  <Frame name="AlertInfo" w="fill" bg="#EFF6FF" stroke="#3B82F6" strokeWidth={1} rounded={10} flex="row" items="center" gap={12} p={14}>
    <Icon name="lucide:info" size={18} color="#3B82F6" />
    <Frame grow={1} flex="col" gap={2}>
      <Text color="#1E40AF" size={13} weight="semibold">Scheduled maintenance</Text>
      <Text color="#1E40AF" size={12} lineHeight={18}>We'll be doing routine maintenance on Saturday April 20 from 2-4am UTC.</Text>
    </Frame>
    <Text color="#1E40AF" size={12} weight="semibold">Learn more →</Text>
    <Icon name="lucide:x" size={14} color="#1E40AF" />
  </Frame>
  <Frame name="AlertSuccess" w="fill" bg="#ECFDF5" stroke="#10B981" strokeWidth={1} rounded={10} flex="row" items="center" gap={12} p={14}>
    <Icon name="lucide:check-circle-2" size={18} color="#10B981" />
    <Frame grow={1} flex="col" gap={2}>
      <Text color="#065F46" size={13} weight="semibold">Account verified</Text>
      <Text color="#065F46" size={12} lineHeight={18}>Your email has been verified. You can now invite team members.</Text>
    </Frame>
    <Icon name="lucide:x" size={14} color="#065F46" />
  </Frame>
  <Frame name="AlertWarning" w="fill" bg="#FFFBEB" stroke="#F59E0B" strokeWidth={1} rounded={10} flex="row" items="center" gap={12} p={14}>
    <Icon name="lucide:triangle-alert" size={18} color="#F59E0B" />
    <Frame grow={1} flex="col" gap={2}>
      <Text color="#92400E" size={13} weight="semibold">Payment method expiring soon</Text>
      <Text color="#92400E" size={12} lineHeight={18}>Your credit card ending in 4829 expires next month.</Text>
    </Frame>
    <Text color="#92400E" size={12} weight="semibold">Update card</Text>
    <Icon name="lucide:x" size={14} color="#92400E" />
  </Frame>
  <Frame name="AlertError" w="fill" bg="#FEF2F2" stroke="#EF4444" strokeWidth={1} rounded={10} flex="row" items="center" gap={12} p={14}>
    <Icon name="lucide:x-circle" size={18} color="#EF4444" />
    <Frame grow={1} flex="col" gap={2}>
      <Text color="#991B1B" size={13} weight="semibold">Connection lost</Text>
      <Text color="#991B1B" size={12} lineHeight={18}>We couldn't reach the server. Your changes are saved locally.</Text>
    </Frame>
    <Text color="#991B1B" size={12} weight="semibold">Retry</Text>
  </Frame>
</Frame>`
}

export const SKELETON_LOADER: Recipe = {
  name: 'skeleton-loader-card',
  type: 'card',
  style: 'minimal',
  description:
    'Loading skeleton screen with animated placeholder blocks: header avatar + name, content bars, action row. Used as list item loading state.',
  dimensions: '560×400',
  palette: ['#FFFFFF', '#F4F4F5', '#E4E4E7', '#FAFAFA'],
  font: 'Inter',
  jsx: `<Frame name="SkeletonCard" w={560} bg="#FFFFFF" rounded={12} stroke="#F4F4F5" strokeWidth={1} flex="col" gap={16} p={20}>
  <Frame flex="row" gap={12} items="center">
    <Ellipse w={44} h={44} bg="#E4E4E7" />
    <Frame flex="col" gap={6} grow={1}>
      <Rectangle w={140} h={12} bg="#E4E4E7" rounded={6} />
      <Rectangle w={100} h={10} bg="#F4F4F5" rounded={5} />
    </Frame>
    <Rectangle w={80} h={28} bg="#F4F4F5" rounded={6} />
  </Frame>
  <Frame flex="col" gap={8}>
    <Rectangle w="fill" h={12} bg="#E4E4E7" rounded={6} />
    <Rectangle w="fill" h={12} bg="#E4E4E7" rounded={6} />
    <Rectangle w={400} h={12} bg="#E4E4E7" rounded={6} />
  </Frame>
  <Rectangle w="fill" h={180} bg="#F4F4F5" rounded={8} />
  <Frame flex="row" gap={12} items="center">
    <Rectangle w={60} h={24} bg="#F4F4F5" rounded={6} />
    <Rectangle w={60} h={24} bg="#F4F4F5" rounded={6} />
    <Rectangle grow={1} h={24} bg="#FFFFFF" />
    <Rectangle w={80} h={24} bg="#F4F4F5" rounded={6} />
  </Frame>
</Frame>`
}

export const PROGRESS_STEPS: Recipe = {
  name: 'progress-steps-vertical',
  type: 'card',
  style: 'minimal',
  description:
    'Vertical progress indicator for onboarding/setup wizard. 5 steps: completed (check), current (active), future (muted).',
  dimensions: '380×480',
  palette: ['#FFFFFF', '#0A0A0A', '#71717A', '#0070F3', '#10B981', '#E4E4E7'],
  font: 'Inter',
  jsx: `<Frame name="ProgressStepsVertical" w={380} bg="#FFFFFF" flex="col" p={28} rounded={14} stroke="#E4E4E7" strokeWidth={1}>
  <Frame flex="col" gap={4} pb={20}>
    <Text color="#0A0A0A" size={16} weight="semibold">Account setup</Text>
    <Text color="#71717A" size={13}>3 of 5 completed</Text>
  </Frame>
  <Frame w="fill" flex="col">
    <Frame flex="row" gap={14} items="start" pb={18}>
      <Frame flex="col" items="center" gap={0}>
        <Frame w={28} h={28} bg="#10B981" rounded={14} flex="row" items="center" justify="center"><Icon name="lucide:check" size={14} color="#FFFFFF" /></Frame>
        <Rectangle w={2} h={32} bg="#10B981" />
      </Frame>
      <Frame flex="col" gap={2} grow={1} pb={10}>
        <Text color="#0A0A0A" size={14} weight="semibold">Create account</Text>
        <Text color="#71717A" size={12}>Completed · Apr 10</Text>
      </Frame>
    </Frame>
    <Frame flex="row" gap={14} items="start" pb={18}>
      <Frame flex="col" items="center" gap={0}>
        <Frame w={28} h={28} bg="#10B981" rounded={14} flex="row" items="center" justify="center"><Icon name="lucide:check" size={14} color="#FFFFFF" /></Frame>
        <Rectangle w={2} h={32} bg="#10B981" />
      </Frame>
      <Frame flex="col" gap={2} grow={1} pb={10}>
        <Text color="#0A0A0A" size={14} weight="semibold">Verify email</Text>
        <Text color="#71717A" size={12}>Completed · Apr 10</Text>
      </Frame>
    </Frame>
    <Frame flex="row" gap={14} items="start" pb={18}>
      <Frame flex="col" items="center" gap={0}>
        <Frame w={28} h={28} bg="#10B981" rounded={14} flex="row" items="center" justify="center"><Icon name="lucide:check" size={14} color="#FFFFFF" /></Frame>
        <Rectangle w={2} h={32} bg="#E4E4E7" />
      </Frame>
      <Frame flex="col" gap={2} grow={1} pb={10}>
        <Text color="#0A0A0A" size={14} weight="semibold">Invite team</Text>
        <Text color="#71717A" size={12}>Completed · Apr 12</Text>
      </Frame>
    </Frame>
    <Frame flex="row" gap={14} items="start" pb={18}>
      <Frame flex="col" items="center" gap={0}>
        <Frame w={28} h={28} bg="#0070F314" stroke="#0070F3" strokeWidth={2} rounded={14} flex="row" items="center" justify="center"><Frame w={10} h={10} bg="#0070F3" rounded={5} /></Frame>
        <Rectangle w={2} h={32} bg="#E4E4E7" />
      </Frame>
      <Frame flex="col" gap={6} grow={1} pb={10}>
        <Text color="#0A0A0A" size={14} weight="semibold">Connect integrations</Text>
        <Text color="#71717A" size={12} lineHeight={18}>Link Slack, GitHub, and your calendar to automate your workflow.</Text>
        <Frame h={32} px={12} bg="#0070F3" rounded={6} flex="row" items="center" gap={6} w={120}><Text color="#FFFFFF" size={12} weight="semibold">Connect</Text><Icon name="lucide:arrow-right" size={12} color="#FFFFFF" /></Frame>
      </Frame>
    </Frame>
    <Frame flex="row" gap={14} items="start">
      <Frame w={28} h={28} stroke="#E4E4E7" strokeWidth={2} rounded={14} flex="row" items="center" justify="center"><Text color="#71717A" size={12} weight="semibold">5</Text></Frame>
      <Frame flex="col" gap={2} grow={1}>
        <Text color="#71717A" size={14} weight="medium">Upgrade to Pro</Text>
        <Text color="#71717A" size={12}>Optional</Text>
      </Frame>
    </Frame>
  </Frame>
</Frame>`
}

export const NOTIFICATION_CENTER: Recipe = {
  name: 'notification-center-panel',
  type: 'card',
  style: 'linear',
  description:
    'Slide-out notification panel with tabs (All/Unread), grouped by date, each with avatar + action description + timestamp.',
  dimensions: '420×640',
  palette: ['#FFFFFF', '#0A0A0A', '#71717A', '#5E6AD2', '#10B981', '#F4F4F5'],
  font: 'Inter',
  jsx: `<Frame name="NotificationCenter" w={420} h={640} bg="#FFFFFF" stroke="#E4E4E7" strokeWidth={1} flex="col" shadow="-10 0 30 #00000014">
  <Frame w="fill" flex="row" items="center" justify="between" px={20} py={16} stroke="#F4F4F5" strokeWidth={1} strokeAlign="INSIDE">
    <Text color="#0A0A0A" size={17} weight="semibold">Notifications</Text>
    <Frame flex="row" gap={10} items="center"><Text color="#5E6AD2" size={12} weight="semibold">Mark all read</Text><Icon name="lucide:x" size={16} color="#71717A" /></Frame>
  </Frame>
  <Frame w="fill" h={44} flex="row" stroke="#F4F4F5" strokeWidth={1} strokeAlign="INSIDE">
    <Frame grow={1} h="fill" flex="row" items="center" justify="center" gap={6} stroke="#0A0A0A" strokeWidth={2} strokeAlign="INSIDE">
      <Text color="#0A0A0A" size={13} weight="semibold">All</Text>
      <Frame h={18} px={6} bg="#0A0A0A" rounded={9} flex="row" items="center"><Text color="#FFFFFF" size={10} weight="semibold">24</Text></Frame>
    </Frame>
    <Frame grow={1} h="fill" flex="row" items="center" justify="center" gap={6}>
      <Text color="#71717A" size={13}>Unread</Text>
      <Frame h={18} px={6} bg="#F4F4F5" rounded={9} flex="row" items="center"><Text color="#71717A" size={10} weight="semibold">8</Text></Frame>
    </Frame>
    <Frame grow={1} h="fill" flex="row" items="center" justify="center">
      <Text color="#71717A" size={13}>Mentions</Text>
    </Frame>
  </Frame>
  <Frame w="fill" grow={1} flex="col">
    <Text color="#71717A" size={11} weight="semibold" letterSpacing={0.5} textCase="upper" px={20} pt={16} pb={8}>Today</Text>
    <Frame w="fill" flex="row" gap={12} p={16} bg="#F5F7FF" stroke="#F4F4F5" strokeWidth={1} strokeAlign="INSIDE">
      <Ellipse w={32} h={32} bg="#5E6AD2" />
      <Frame flex="col" gap={4} grow={1}>
        <Text color="#0A0A0A" size={13} lineHeight={19} w="fill"><Text color="#0A0A0A" size={13} weight="semibold">Maya Chen</Text> assigned you to <Text color="#5E6AD2" size={13} weight="medium">Refine onboarding copy</Text></Text>
        <Text color="#71717A" size={11}>2 minutes ago</Text>
      </Frame>
      <Ellipse w={8} h={8} bg="#5E6AD2" />
    </Frame>
    <Frame w="fill" flex="row" gap={12} p={16} stroke="#F4F4F5" strokeWidth={1} strokeAlign="INSIDE">
      <Ellipse w={32} h={32} bg="#10B981" />
      <Frame flex="col" gap={4} grow={1}>
        <Text color="#0A0A0A" size={13} lineHeight={19} w="fill"><Text color="#0A0A0A" size={13} weight="semibold">Deploy bot</Text> completed production release <Text color="#5E6AD2" size={13} weight="medium">v2.4.0</Text></Text>
        <Text color="#71717A" size={11}>18 minutes ago</Text>
      </Frame>
    </Frame>
    <Frame w="fill" flex="row" gap={12} p={16} bg="#F5F7FF" stroke="#F4F4F5" strokeWidth={1} strokeAlign="INSIDE">
      <Ellipse w={32} h={32} bg="#F5A623" />
      <Frame flex="col" gap={4} grow={1}>
        <Text color="#0A0A0A" size={13} lineHeight={19} w="fill"><Text color="#0A0A0A" size={13} weight="semibold">Priya R.</Text> mentioned you in <Text color="#5E6AD2" size={13} weight="medium">Design review · Payments v2</Text></Text>
        <Text color="#71717A" size={11}>1 hour ago</Text>
      </Frame>
      <Ellipse w={8} h={8} bg="#5E6AD2" />
    </Frame>
    <Text color="#71717A" size={11} weight="semibold" letterSpacing={0.5} textCase="upper" px={20} pt={16} pb={8}>Yesterday</Text>
    <Frame w="fill" flex="row" gap={12} p={16} stroke="#F4F4F5" strokeWidth={1} strokeAlign="INSIDE">
      <Ellipse w={32} h={32} bg="#EF4444" />
      <Frame flex="col" gap={4} grow={1}>
        <Text color="#0A0A0A" size={13} lineHeight={19} w="fill"><Text color="#0A0A0A" size={13} weight="semibold">Marcus D.</Text> reviewed <Text color="#5E6AD2" size={13} weight="medium">PR #1847</Text> — approved</Text>
        <Text color="#71717A" size={11}>Apr 15, 4:22 PM</Text>
      </Frame>
    </Frame>
    <Frame w="fill" flex="row" gap={12} p={16}>
      <Ellipse w={32} h={32} bg="#A855F7" />
      <Frame flex="col" gap={4} grow={1}>
        <Text color="#0A0A0A" size={13} lineHeight={19} w="fill"><Text color="#0A0A0A" size={13} weight="semibold">Sarah C.</Text> shared <Text color="#5E6AD2" size={13} weight="medium">Q2 OKRs doc</Text> with you</Text>
        <Text color="#71717A" size={11}>Apr 15, 2:05 PM</Text>
      </Frame>
    </Frame>
  </Frame>
</Frame>`
}

export const BADGE_COLLECTION: Recipe = {
  name: 'status-badges-collection',
  type: 'card',
  style: 'minimal',
  description:
    'Grid of status badge variants: status pills (open/in progress/done/cancelled), priority chips, tag badges. Reference library.',
  dimensions: '720×360',
  palette: ['#FFFFFF', '#0A0A0A', '#71717A', '#10B981', '#F59E0B', '#EF4444', '#3B82F6', '#A855F7'],
  font: 'Inter',
  jsx: `<Frame name="BadgesLibrary" w={720} bg="#FFFFFF" flex="col" gap={28} p={28} rounded={14} stroke="#E4E4E7" strokeWidth={1}>
  <Frame flex="col" gap={14}>
    <Text color="#71717A" size={11} weight="semibold" letterSpacing={0.5} textCase="upper">Status (with dot)</Text>
    <Frame flex="row" gap={10} wrap rowGap={10}>
      <Frame h={24} px={10} bg="#F4F4F5" rounded={12} flex="row" items="center" gap={6}><Ellipse w={6} h={6} bg="#71717A" /><Text color="#525252" size={11} weight="semibold">Backlog</Text></Frame>
      <Frame h={24} px={10} bg="#EFF6FF" rounded={12} flex="row" items="center" gap={6}><Ellipse w={6} h={6} bg="#3B82F6" /><Text color="#1E40AF" size={11} weight="semibold">Open</Text></Frame>
      <Frame h={24} px={10} bg="#FFFBEB" rounded={12} flex="row" items="center" gap={6}><Ellipse w={6} h={6} bg="#F59E0B" /><Text color="#92400E" size={11} weight="semibold">In progress</Text></Frame>
      <Frame h={24} px={10} bg="#F3E8FF" rounded={12} flex="row" items="center" gap={6}><Ellipse w={6} h={6} bg="#A855F7" /><Text color="#6B21A8" size={11} weight="semibold">In review</Text></Frame>
      <Frame h={24} px={10} bg="#ECFDF5" rounded={12} flex="row" items="center" gap={6}><Ellipse w={6} h={6} bg="#10B981" /><Text color="#065F46" size={11} weight="semibold">Done</Text></Frame>
      <Frame h={24} px={10} bg="#FEF2F2" rounded={12} flex="row" items="center" gap={6}><Ellipse w={6} h={6} bg="#EF4444" /><Text color="#991B1B" size={11} weight="semibold">Cancelled</Text></Frame>
    </Frame>
  </Frame>
  <Frame flex="col" gap={14}>
    <Text color="#71717A" size={11} weight="semibold" letterSpacing={0.5} textCase="upper">Priority (with icon)</Text>
    <Frame flex="row" gap={10} wrap rowGap={10}>
      <Frame h={24} px={10} bg="#FEF2F2" rounded={6} flex="row" items="center" gap={6}><Icon name="lucide:alert-triangle" size={11} color="#EF4444" /><Text color="#991B1B" size={11} weight="semibold">Urgent</Text></Frame>
      <Frame h={24} px={10} bg="#FFFBEB" rounded={6} flex="row" items="center" gap={6}><Icon name="lucide:arrow-up" size={11} color="#F59E0B" /><Text color="#92400E" size={11} weight="semibold">High</Text></Frame>
      <Frame h={24} px={10} bg="#EFF6FF" rounded={6} flex="row" items="center" gap={6}><Icon name="lucide:minus" size={11} color="#3B82F6" /><Text color="#1E40AF" size={11} weight="semibold">Medium</Text></Frame>
      <Frame h={24} px={10} bg="#F4F4F5" rounded={6} flex="row" items="center" gap={6}><Icon name="lucide:arrow-down" size={11} color="#71717A" /><Text color="#525252" size={11} weight="semibold">Low</Text></Frame>
    </Frame>
  </Frame>
  <Frame flex="col" gap={14}>
    <Text color="#71717A" size={11} weight="semibold" letterSpacing={0.5} textCase="upper">Category tags (neutral)</Text>
    <Frame flex="row" gap={8} wrap rowGap={8}>
      <Frame h={22} px={8} stroke="#E4E4E7" strokeWidth={1} rounded={4} flex="row" items="center"><Text color="#525252" size={11}>bug</Text></Frame>
      <Frame h={22} px={8} stroke="#E4E4E7" strokeWidth={1} rounded={4} flex="row" items="center"><Text color="#525252" size={11}>feature</Text></Frame>
      <Frame h={22} px={8} stroke="#E4E4E7" strokeWidth={1} rounded={4} flex="row" items="center"><Text color="#525252" size={11}>design</Text></Frame>
      <Frame h={22} px={8} stroke="#E4E4E7" strokeWidth={1} rounded={4} flex="row" items="center"><Text color="#525252" size={11}>infra</Text></Frame>
      <Frame h={22} px={8} stroke="#E4E4E7" strokeWidth={1} rounded={4} flex="row" items="center"><Text color="#525252" size={11}>docs</Text></Frame>
      <Frame h={22} px={8} stroke="#E4E4E7" strokeWidth={1} rounded={4} flex="row" items="center"><Text color="#525252" size={11}>good-first-issue</Text></Frame>
    </Frame>
  </Frame>
  <Frame flex="col" gap={14}>
    <Text color="#71717A" size={11} weight="semibold" letterSpacing={0.5} textCase="upper">Badges (counters)</Text>
    <Frame flex="row" gap={12} items="center">
      <Frame w={32} h={32} rounded={16} bg="#F4F4F5" flex="row" items="center" justify="center"><Icon name="lucide:bell" size={16} color="#71717A" /></Frame>
      <Frame w={32} h={32} rounded={16} bg="#F4F4F5" flex="row" items="center" justify="center" overflow="hidden">
        <Icon name="lucide:bell" size={16} color="#71717A" />
        <Frame x={18} y={2} w={14} h={14} bg="#EF4444" rounded={7} stroke="#FFFFFF" strokeWidth={2} flex="row" items="center" justify="center"><Text color="#FFFFFF" size={9} weight="bold">3</Text></Frame>
      </Frame>
      <Frame w={32} h={32} rounded={16} bg="#F4F4F5" flex="row" items="center" justify="center" overflow="hidden">
        <Icon name="lucide:message-circle" size={16} color="#71717A" />
        <Frame x={16} y={0} w={18} h={18} bg="#0070F3" rounded={9} stroke="#FFFFFF" strokeWidth={2} flex="row" items="center" justify="center"><Text color="#FFFFFF" size={9} weight="bold">12</Text></Frame>
      </Frame>
    </Frame>
  </Frame>
</Frame>`
}
