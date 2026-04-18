import type { Recipe } from './design-recipes-data-a'

export const ERROR_404: Recipe = {
  name: 'error-404-page',
  type: 'content',
  style: 'minimal',
  description:
    'Friendly 404 not found page: oversized "404", short title, explanation, back-to-home CTA and search shortcut.',
  dimensions: '1200×640',
  palette: ['#FAFAFA', '#0A0A0A', '#71717A', '#0070F3', '#E4E4E7'],
  font: 'Inter',
  jsx: `<Frame name="Error404Page" w={1200} h={640} bg="#FAFAFA" flex="col" items="center" justify="center" gap={32} px={48}>
  <Frame flex="col" items="center" gap={8}>
    <Text color="#0A0A0A" size={180} weight="bold" letterSpacing={-8} lineHeight={172}>404</Text>
    <Text color="#0070F3" size={12} weight="semibold" letterSpacing={2} textCase="upper">Page not found</Text>
  </Frame>
  <Frame flex="col" items="center" gap={12} w={540}>
    <Text color="#0A0A0A" size={32} weight="bold" letterSpacing={-1} textAlign="center">This page took a wrong turn</Text>
    <Text color="#71717A" size={16} textAlign="center" lineHeight={24}>The link may be broken or the page may have been moved. Try searching for what you need.</Text>
  </Frame>
  <Frame flex="row" gap={12} items="center">
    <Frame h={48} px={20} bg="#0A0A0A" rounded={8} flex="row" items="center" gap={8}><Icon name="lucide:home" size={14} color="#FFFFFF" /><Text color="#FFFFFF" size={14} weight="semibold">Back to home</Text></Frame>
    <Frame h={48} px={20} stroke="#E4E4E7" strokeWidth={1} rounded={8} flex="row" items="center" gap={8}><Icon name="lucide:search" size={14} color="#0A0A0A" /><Text color="#0A0A0A" size={14} weight="medium">Search site</Text></Frame>
  </Frame>
  <Frame flex="row" gap={6} items="center">
    <Text color="#71717A" size={12}>Need help?</Text>
    <Text color="#0070F3" size={12} weight="semibold">Contact support →</Text>
  </Frame>
</Frame>`
}

export const ERROR_500: Recipe = {
  name: 'error-500-page',
  type: 'content',
  style: 'minimal',
  description:
    'Server error (500) page: broken-gear illustration placeholder, title, apology + what we are doing, retry + status page link.',
  dimensions: '1200×640',
  palette: ['#FAFAFA', '#0A0A0A', '#71717A', '#EF4444', '#F4F4F5'],
  font: 'Inter',
  jsx: `<Frame name="Error500Page" w={1200} h={640} bg="#FAFAFA" flex="col" items="center" justify="center" gap={28} px={48}>
  <Frame w={120} h={120} bg="#EF444414" rounded={60} flex="row" items="center" justify="center"><Icon name="lucide:server-off" size={56} color="#EF4444" /></Frame>
  <Frame flex="col" items="center" gap={12} w={540}>
    <Frame flex="row" gap={10} items="center">
      <Frame h={22} px={8} bg="#EF4444" rounded={4}><Text color="#FFFFFF" size={10} weight="semibold" letterSpacing={0.5}>500 · INTERNAL ERROR</Text></Frame>
    </Frame>
    <Text color="#0A0A0A" size={36} weight="bold" letterSpacing={-1} textAlign="center">Something went wrong on our end</Text>
    <Text color="#71717A" size={16} textAlign="center" lineHeight={24}>We've been notified and are working on a fix. Try again in a few minutes, or check our status page for updates.</Text>
  </Frame>
  <Frame flex="row" gap={12} items="center">
    <Frame h={44} px={18} bg="#0A0A0A" rounded={8} flex="row" items="center" gap={6}><Icon name="lucide:rotate-cw" size={14} color="#FFFFFF" /><Text color="#FFFFFF" size={14} weight="semibold">Retry</Text></Frame>
    <Frame h={44} px={18} stroke="#E4E4E7" strokeWidth={1} rounded={8} flex="row" items="center" gap={6}><Icon name="lucide:activity" size={14} color="#0A0A0A" /><Text color="#0A0A0A" size={14} weight="medium">Status page</Text></Frame>
  </Frame>
  <Frame flex="row" gap={10} items="center" px={16} py={8} bg="#F4F4F5" rounded={8}>
    <Text color="#71717A" size={12} font="JetBrains Mono">Error ID:</Text>
    <Text color="#0A0A0A" size={12} font="JetBrains Mono">err_0d8a3f1c47e2</Text>
    <Icon name="lucide:copy" size={12} color="#71717A" />
  </Frame>
</Frame>`
}

export const COMING_SOON: Recipe = {
  name: 'coming-soon-page',
  type: 'content',
  style: 'minimal',
  description:
    'Pre-launch / coming soon page: brand logo, bold headline, countdown row (days/hours/mins), email signup, social icons.',
  dimensions: '1200×720',
  palette: ['#0A0A0A', '#FFFFFF', '#A1A1AA', '#635BFF', '#171717'],
  font: 'Inter',
  jsx: `<Frame name="ComingSoon" w={1200} h={720} bg="#0A0A0A" flex="col" items="center" justify="center" gap={48} px={48} overflow="hidden">
  <Frame x={0} y={0} w={1200} h={720}>
    <Rectangle x={200} y={100} w={800} h={300} bg="#635BFF" rotate={-8} blur={160} opacity={0.3} />
    <Rectangle x={600} y={400} w={500} h={200} bg="#7928CA" rotate={12} blur={140} opacity={0.35} />
  </Frame>
  <Frame flex="row" gap={10} items="center">
    <Rectangle w={40} h={40} bg="#635BFF" rounded={10} />
    <Text color="#FFFFFF" size={22} weight="bold" letterSpacing={-0.5}>Nova</Text>
  </Frame>
  <Frame flex="col" items="center" gap={16} w={720}>
    <Frame h={26} px={12} bg="#FFFFFF14" rounded={999} flex="row" items="center" gap={8}><Ellipse w={6} h={6} bg="#635BFF" /><Text color="#FFFFFF" size={11} weight="semibold" letterSpacing={0.5}>LAUNCHING SOON</Text></Frame>
    <Text color="#FFFFFF" size={64} weight="bold" letterSpacing={-2.5} textAlign="center" lineHeight={68}>Something remarkable is coming</Text>
    <Text color="#A1A1AA" size={18} textAlign="center" lineHeight={28} w={560}>We're cooking up the next generation of our product. Join the waitlist for early access.</Text>
  </Frame>
  <Frame flex="row" gap={20}>
    <Frame flex="col" items="center" gap={4} w={80}>
      <Frame w={80} h={80} bg="#171717" stroke="#FFFFFF1A" strokeWidth={1} rounded={14} flex="row" items="center" justify="center"><Text color="#FFFFFF" size={36} weight="bold" letterSpacing={-1}>14</Text></Frame>
      <Text color="#A1A1AA" size={11} weight="semibold" letterSpacing={1} textCase="upper">Days</Text>
    </Frame>
    <Frame flex="col" items="center" gap={4} w={80}>
      <Frame w={80} h={80} bg="#171717" stroke="#FFFFFF1A" strokeWidth={1} rounded={14} flex="row" items="center" justify="center"><Text color="#FFFFFF" size={36} weight="bold" letterSpacing={-1}>08</Text></Frame>
      <Text color="#A1A1AA" size={11} weight="semibold" letterSpacing={1} textCase="upper">Hours</Text>
    </Frame>
    <Frame flex="col" items="center" gap={4} w={80}>
      <Frame w={80} h={80} bg="#171717" stroke="#FFFFFF1A" strokeWidth={1} rounded={14} flex="row" items="center" justify="center"><Text color="#FFFFFF" size={36} weight="bold" letterSpacing={-1}>42</Text></Frame>
      <Text color="#A1A1AA" size={11} weight="semibold" letterSpacing={1} textCase="upper">Minutes</Text>
    </Frame>
    <Frame flex="col" items="center" gap={4} w={80}>
      <Frame w={80} h={80} bg="#171717" stroke="#FFFFFF1A" strokeWidth={1} rounded={14} flex="row" items="center" justify="center"><Text color="#FFFFFF" size={36} weight="bold" letterSpacing={-1}>19</Text></Frame>
      <Text color="#A1A1AA" size={11} weight="semibold" letterSpacing={1} textCase="upper">Seconds</Text>
    </Frame>
  </Frame>
  <Frame flex="row" gap={8} w={440}>
    <Frame grow={1} h={52} bg="#171717" stroke="#FFFFFF1A" strokeWidth={1} rounded={12} flex="row" items="center" px={16}><Text color="#A1A1AA" size={14}>you@company.com</Text></Frame>
    <Frame h={52} px={22} bg="#635BFF" rounded={12} flex="row" items="center" gap={6}><Text color="#FFFFFF" size={14} weight="semibold">Join waitlist</Text><Icon name="lucide:arrow-right" size={14} color="#FFFFFF" /></Frame>
  </Frame>
  <Frame flex="row" gap={16} items="center">
    <Icon name="lucide:twitter" size={16} color="#A1A1AA" />
    <Icon name="lucide:github" size={16} color="#A1A1AA" />
    <Icon name="lucide:linkedin" size={16} color="#A1A1AA" />
    <Icon name="lucide:instagram" size={16} color="#A1A1AA" />
  </Frame>
</Frame>`
}

export const MAINTENANCE_PAGE: Recipe = {
  name: 'maintenance-page',
  type: 'content',
  style: 'minimal',
  description:
    'Scheduled maintenance page: wrench icon, title, ETA, status page link. Minimal distraction from the main issue.',
  dimensions: '1200×560',
  palette: ['#FFFFFF', '#0A0A0A', '#71717A', '#F59E0B', '#FFFBEB'],
  font: 'Inter',
  jsx: `<Frame name="MaintenancePage" w={1200} h={560} bg="#FFFFFF" flex="col" items="center" justify="center" gap={28} px={48}>
  <Frame w={96} h={96} bg="#FFFBEB" rounded={48} stroke="#FCD34D" strokeWidth={2} flex="row" items="center" justify="center"><Icon name="lucide:wrench" size={44} color="#F59E0B" /></Frame>
  <Frame flex="col" items="center" gap={12} w={560}>
    <Frame h={24} px={10} bg="#FFFBEB" rounded={4}><Text color="#92400E" size={11} weight="semibold" letterSpacing={0.5}>SCHEDULED MAINTENANCE</Text></Frame>
    <Text color="#0A0A0A" size={32} weight="bold" letterSpacing={-1} textAlign="center">We'll be right back</Text>
    <Text color="#71717A" size={16} textAlign="center" lineHeight={24}>We're performing routine maintenance to improve performance. We'll be back online in a few minutes.</Text>
  </Frame>
  <Frame flex="col" items="center" gap={8} p={20} stroke="#E4E4E7" strokeWidth={1} rounded={10} w={400}>
    <Frame flex="row" items="center" gap={8}><Icon name="lucide:clock" size={14} color="#F59E0B" /><Text color="#0A0A0A" size={13} weight="semibold">Estimated time remaining</Text></Frame>
    <Text color="#0A0A0A" size={28} weight="bold" letterSpacing={-0.5}>~12 minutes</Text>
    <Text color="#71717A" size={12}>Started 2:04 AM UTC · Expected back at 2:30 AM UTC</Text>
  </Frame>
  <Frame flex="row" gap={8} items="center">
    <Frame h={40} px={16} bg="#0A0A0A" rounded={8} flex="row" items="center" gap={6}><Icon name="lucide:activity" size={13} color="#FFFFFF" /><Text color="#FFFFFF" size={13} weight="semibold">View status page</Text></Frame>
    <Frame h={40} px={16} stroke="#E4E4E7" strokeWidth={1} rounded={8} flex="row" items="center" gap={6}><Icon name="lucide:bell" size={13} color="#0A0A0A" /><Text color="#0A0A0A" size={13} weight="medium">Notify me when ready</Text></Frame>
  </Frame>
</Frame>`
}

export const COMMENT_THREAD: Recipe = {
  name: 'comment-thread',
  type: 'content',
  style: 'minimal',
  description:
    'Nested comment thread: parent comment + 2 replies with avatars, reactions, reply input. GitHub/Linear style.',
  dimensions: '720×520',
  palette: ['#FFFFFF', '#0A0A0A', '#71717A', '#0070F3', '#F4F4F5'],
  font: 'Inter',
  jsx: `<Frame name="CommentThread" w={720} bg="#FFFFFF" flex="col" gap={20} p={24}>
  <Frame flex="row" gap={12} items="start">
    <Ellipse w={36} h={36} bg="#5E6AD2" />
    <Frame grow={1} flex="col" gap={8}>
      <Frame flex="row" items="center" gap={8}>
        <Text color="#0A0A0A" size={14} weight="semibold">Marcus Delgado</Text>
        <Frame h={20} px={7} bg="#F4F4F5" rounded={4}><Text color="#71717A" size={10} weight="semibold">AUTHOR</Text></Frame>
        <Text color="#71717A" size={12}>commented 2 hours ago</Text>
      </Frame>
      <Text color="#0A0A0A" size={14} lineHeight={22} w="fill">Love the direction here. One concern: the CTA color clashes with our brand. Can we try using the secondary accent? I'd also suggest tightening the letter-spacing on the display type.</Text>
      <Frame flex="row" gap={12} items="center">
        <Frame h={26} px={8} stroke="#E4E4E7" strokeWidth={1} rounded={13} flex="row" items="center" gap={4}><Text color="#71717A" size={12}>👍</Text><Text color="#71717A" size={12} weight="semibold">3</Text></Frame>
        <Frame h={26} px={8} stroke="#E4E4E7" strokeWidth={1} rounded={13} flex="row" items="center" gap={4}><Text color="#71717A" size={12}>🔥</Text><Text color="#71717A" size={12} weight="semibold">1</Text></Frame>
        <Frame flex="row" gap={4} items="center"><Icon name="lucide:corner-down-right" size={13} color="#71717A" /><Text color="#71717A" size={12} weight="medium">Reply</Text></Frame>
      </Frame>
    </Frame>
  </Frame>
  <Frame flex="row" gap={12} items="start" pl={28}>
    <Ellipse w={28} h={28} bg="#0071E3" />
    <Frame grow={1} flex="col" gap={6}>
      <Frame flex="row" items="center" gap={8}>
        <Text color="#0A0A0A" size={13} weight="semibold">Sarah Chen</Text>
        <Text color="#71717A" size={11}>replied 1 hour ago</Text>
      </Frame>
      <Text color="#0A0A0A" size={13} lineHeight={20} w="fill">Good call on the accent. Swapping in <Text color="#0A0A0A" size={13} weight="semibold" font="JetBrains Mono">#00D4FF</Text> for the primary CTA. Letter-spacing adjusted in the latest commit.</Text>
      <Frame flex="row" gap={10} items="center">
        <Frame h={22} px={6} stroke="#E4E4E7" strokeWidth={1} rounded={11} flex="row" items="center" gap={3}><Text color="#71717A" size={11}>✅</Text><Text color="#71717A" size={11} weight="semibold">2</Text></Frame>
        <Text color="#71717A" size={11} weight="medium">Reply</Text>
      </Frame>
    </Frame>
  </Frame>
  <Frame flex="row" gap={12} items="start" pl={28}>
    <Ellipse w={28} h={28} bg="#F5A623" />
    <Frame grow={1} flex="col" gap={6}>
      <Frame flex="row" items="center" gap={8}>
        <Text color="#0A0A0A" size={13} weight="semibold">Priya Ramachandran</Text>
        <Text color="#71717A" size={11}>replied 45 min ago</Text>
      </Frame>
      <Text color="#0A0A0A" size={13} lineHeight={20} w="fill">Looks great now! Approving.</Text>
    </Frame>
  </Frame>
  <Frame flex="row" gap={12} items="start" pt={8} stroke="#F4F4F5" strokeWidth={1} strokeAlign="INSIDE">
    <Ellipse w={36} h={36} bg="#A855F7" />
    <Frame grow={1} flex="col" gap={10}>
      <Frame w="fill" stroke="#E4E4E7" strokeWidth={1} rounded={10} flex="col">
        <Frame h={36} flex="row" items="center" gap={12} px={12}>
          <Icon name="lucide:bold" size={14} color="#71717A" />
          <Icon name="lucide:italic" size={14} color="#71717A" />
          <Icon name="lucide:code" size={14} color="#71717A" />
          <Icon name="lucide:link" size={14} color="#71717A" />
          <Icon name="lucide:list" size={14} color="#71717A" />
          <Icon name="lucide:at-sign" size={14} color="#71717A" />
        </Frame>
        <Frame w="fill" h={72} flex="col" p={12} stroke="#F4F4F5" strokeWidth={1} strokeAlign="INSIDE"><Text color="#A1A1AA" size={14}>Add a comment...</Text></Frame>
        <Frame h={44} flex="row" items="center" justify="between" px={12}>
          <Frame flex="row" gap={10} items="center"><Icon name="lucide:paperclip" size={14} color="#71717A" /><Icon name="lucide:image" size={14} color="#71717A" /><Icon name="lucide:smile" size={14} color="#71717A" /></Frame>
          <Frame h={30} px={14} bg="#0070F3" rounded={6} flex="row" items="center"><Text color="#FFFFFF" size={12} weight="semibold">Comment</Text></Frame>
        </Frame>
      </Frame>
    </Frame>
  </Frame>
</Frame>`
}

export const PRICING_MONTHLY_YEARLY: Recipe = {
  name: 'pricing-toggle-cards',
  type: 'pricing',
  style: 'stripe',
  description:
    'Pricing with monthly/yearly toggle at top, 3 tiered cards showing crossed-out monthly and discounted yearly price. Modern SaaS.',
  dimensions: '1200×620',
  palette: ['#FAFAFA', '#0A2540', '#635BFF', '#697386', '#E3E8EE', '#10B981'],
  font: 'Inter',
  jsx: `<Frame name="PricingWithToggle" w={1200} flex="col" gap={40} py={96} bg="#FAFAFA" items="center">
  <Frame flex="col" gap={10} items="center" w={580}>
    <Text color="#635BFF" size={13} weight="semibold" letterSpacing={1} textCase="upper">Pricing</Text>
    <Text color="#0A2540" size={44} weight="bold" textAlign="center" letterSpacing={-1}>Simple pricing. Scales with you.</Text>
    <Frame flex="row" items="center" gap={10} py={4} px={4} bg="#FFFFFF" stroke="#E3E8EE" strokeWidth={1} rounded={999}>
      <Frame h={32} px={16} rounded={999} flex="row" items="center"><Text color="#697386" size={13} weight="medium">Monthly</Text></Frame>
      <Frame h={32} px={16} bg="#0A2540" rounded={999} flex="row" items="center" gap={6}><Text color="#FFFFFF" size={13} weight="semibold">Yearly</Text><Frame h={18} px={6} bg="#10B981" rounded={4}><Text color="#FFFFFF" size={10} weight="bold">SAVE 20%</Text></Frame></Frame>
    </Frame>
  </Frame>
  <Frame w="fill" flex="row" gap={20} px={32} items="stretch">
    <Frame grow={1} bg="#FFFFFF" stroke="#E3E8EE" strokeWidth={1} rounded={16} p={28} flex="col" gap={20}>
      <Frame flex="col" gap={6}>
        <Text color="#0A2540" size={15} weight="semibold">Starter</Text>
        <Text color="#697386" size={13}>For getting started</Text>
      </Frame>
      <Frame flex="row" items="end" gap={6}>
        <Text color="#0A2540" size={44} weight="bold" letterSpacing={-1.5}>$0</Text>
        <Text color="#697386" size={14} pb={8}>/mo</Text>
      </Frame>
      <Frame w="fill" h={40} stroke="#E3E8EE" strokeWidth={1} rounded={8} flex="row" items="center" justify="center"><Text color="#0A2540" size={13} weight="semibold">Start free</Text></Frame>
      <Frame flex="col" gap={10}>
        <Frame flex="row" gap={8} items="center"><Icon name="lucide:check" size={14} color="#635BFF" /><Text color="#0A2540" size={13}>3 projects</Text></Frame>
        <Frame flex="row" gap={8} items="center"><Icon name="lucide:check" size={14} color="#635BFF" /><Text color="#0A2540" size={13}>Community support</Text></Frame>
        <Frame flex="row" gap={8} items="center"><Icon name="lucide:check" size={14} color="#635BFF" /><Text color="#0A2540" size={13}>1 GB storage</Text></Frame>
      </Frame>
    </Frame>
    <Frame grow={1} bg="#0A2540" rounded={16} p={28} flex="col" gap={20}>
      <Frame flex="row" items="center" justify="between">
        <Text color="#FFFFFF" size={15} weight="semibold">Pro</Text>
        <Frame h={22} px={8} bg="#635BFF" rounded={4}><Text color="#FFFFFF" size={10} weight="bold">POPULAR</Text></Frame>
      </Frame>
      <Frame flex="col" gap={4}>
        <Frame flex="row" items="end" gap={6}>
          <Text color="#FFFFFF" size={44} weight="bold" letterSpacing={-1.5}>$19</Text>
          <Text color="#ADBDCC" size={14} pb={8}>/mo</Text>
        </Frame>
        <Frame flex="row" gap={8} items="center">
          <Text color="#ADBDCC" size={12} textDecoration="strikethrough">$24/mo monthly</Text>
          <Text color="#10B981" size={12} weight="semibold">Save $60/yr</Text>
        </Frame>
      </Frame>
      <Frame w="fill" h={40} bg="#635BFF" rounded={8} flex="row" items="center" justify="center"><Text color="#FFFFFF" size={13} weight="semibold">Start 14-day trial</Text></Frame>
      <Frame flex="col" gap={10}>
        <Frame flex="row" gap={8} items="center"><Icon name="lucide:check" size={14} color="#00D4FF" /><Text color="#FFFFFF" size={13}>Unlimited projects</Text></Frame>
        <Frame flex="row" gap={8} items="center"><Icon name="lucide:check" size={14} color="#00D4FF" /><Text color="#FFFFFF" size={13}>Priority support</Text></Frame>
        <Frame flex="row" gap={8} items="center"><Icon name="lucide:check" size={14} color="#00D4FF" /><Text color="#FFFFFF" size={13}>50 GB storage</Text></Frame>
        <Frame flex="row" gap={8} items="center"><Icon name="lucide:check" size={14} color="#00D4FF" /><Text color="#FFFFFF" size={13}>Advanced analytics</Text></Frame>
      </Frame>
    </Frame>
    <Frame grow={1} bg="#FFFFFF" stroke="#E3E8EE" strokeWidth={1} rounded={16} p={28} flex="col" gap={20}>
      <Frame flex="col" gap={6}>
        <Text color="#0A2540" size={15} weight="semibold">Team</Text>
        <Text color="#697386" size={13}>For growing teams</Text>
      </Frame>
      <Frame flex="col" gap={4}>
        <Frame flex="row" items="end" gap={6}>
          <Text color="#0A2540" size={44} weight="bold" letterSpacing={-1.5}>$39</Text>
          <Text color="#697386" size={14} pb={8}>/mo per user</Text>
        </Frame>
        <Frame flex="row" gap={8} items="center">
          <Text color="#697386" size={12} textDecoration="strikethrough">$49/mo monthly</Text>
        </Frame>
      </Frame>
      <Frame w="fill" h={40} stroke="#0A2540" strokeWidth={1} rounded={8} flex="row" items="center" justify="center"><Text color="#0A2540" size={13} weight="semibold">Contact sales</Text></Frame>
      <Frame flex="col" gap={10}>
        <Frame flex="row" gap={8} items="center"><Icon name="lucide:check" size={14} color="#635BFF" /><Text color="#0A2540" size={13}>Everything in Pro</Text></Frame>
        <Frame flex="row" gap={8} items="center"><Icon name="lucide:check" size={14} color="#635BFF" /><Text color="#0A2540" size={13}>SSO & SCIM</Text></Frame>
        <Frame flex="row" gap={8} items="center"><Icon name="lucide:check" size={14} color="#635BFF" /><Text color="#0A2540" size={13}>Audit logs</Text></Frame>
        <Frame flex="row" gap={8} items="center"><Icon name="lucide:check" size={14} color="#635BFF" /><Text color="#0A2540" size={13}>Dedicated manager</Text></Frame>
      </Frame>
    </Frame>
  </Frame>
</Frame>`
}
