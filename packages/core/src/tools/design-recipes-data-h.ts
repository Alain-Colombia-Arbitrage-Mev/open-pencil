import type { Recipe } from './design-recipes-data-a'

export const FORM_CONTACT: Recipe = {
  name: 'form-contact',
  type: 'card',
  style: 'minimal',
  description:
    'Contact form with name, email, company, message fields + consent checkbox + submit. Use on contact pages.',
  dimensions: '520×560',
  palette: ['#FFFFFF', '#0A0A0A', '#71717A', '#0070F3', '#E4E4E7'],
  font: 'Inter',
  jsx: `<Frame name="ContactForm" w={520} bg="#FFFFFF" flex="col" gap={20} p={32} rounded={16} stroke="#E4E4E7" strokeWidth={1}>
  <Frame flex="col" gap={6}>
    <Text color="#0A0A0A" size={22} weight="bold" letterSpacing={-0.5}>Get in touch</Text>
    <Text color="#71717A" size={14} lineHeight={22}>We'll get back to you within one business day.</Text>
  </Frame>
  <Frame flex="row" gap={12}>
    <Frame grow={1} flex="col" gap={6}>
      <Text color="#0A0A0A" size={13} weight="medium">Full name</Text>
      <Frame w="fill" h={40} stroke="#E4E4E7" strokeWidth={1} rounded={8} flex="row" items="center" px={12}><Text color="#A1A1AA" size={14}>Jane Cooper</Text></Frame>
    </Frame>
    <Frame grow={1} flex="col" gap={6}>
      <Text color="#0A0A0A" size={13} weight="medium">Work email</Text>
      <Frame w="fill" h={40} stroke="#E4E4E7" strokeWidth={1} rounded={8} flex="row" items="center" px={12}><Text color="#A1A1AA" size={14}>jane@company.com</Text></Frame>
    </Frame>
  </Frame>
  <Frame flex="col" gap={6}>
    <Text color="#0A0A0A" size={13} weight="medium">Company</Text>
    <Frame w="fill" h={40} stroke="#E4E4E7" strokeWidth={1} rounded={8} flex="row" items="center" px={12}><Text color="#A1A1AA" size={14}>Acme Inc.</Text></Frame>
  </Frame>
  <Frame flex="col" gap={6}>
    <Frame flex="row" justify="between"><Text color="#0A0A0A" size={13} weight="medium">How can we help?</Text><Text color="#71717A" size={11}>0 / 500</Text></Frame>
    <Frame w="fill" h={120} stroke="#E4E4E7" strokeWidth={1} rounded={8} p={12}><Text color="#A1A1AA" size={14} lineHeight={20}>Tell us about your project...</Text></Frame>
  </Frame>
  <Frame flex="row" gap={10} items="start">
    <Frame w={16} h={16} stroke="#E4E4E7" strokeWidth={1} rounded={4} />
    <Text color="#71717A" size={12} lineHeight={18} grow={1}>I agree to receive product updates. You can unsubscribe anytime.</Text>
  </Frame>
  <Frame w="fill" h={44} bg="#0070F3" rounded={8} flex="row" items="center" justify="center" gap={6}>
    <Text color="#FFFFFF" size={14} weight="semibold">Send message</Text>
    <Icon name="lucide:send" size={14} color="#FFFFFF" />
  </Frame>
</Frame>`
}

export const SEARCH_WITH_FILTERS: Recipe = {
  name: 'search-with-filters',
  type: 'dashboard',
  style: 'minimal',
  description:
    'Search page with left filter sidebar (categories, price range, rating) and right results grid area placeholder.',
  dimensions: '1200×540',
  palette: ['#FFFFFF', '#0A0A0A', '#71717A', '#0070F3', '#F4F4F5', '#E4E4E7'],
  font: 'Inter',
  jsx: `<Frame name="SearchPage" w={1200} flex="row" gap={24} py={24} px={24} bg="#FFFFFF" items="start">
  <Frame name="FilterSidebar" w={260} flex="col" gap={28}>
    <Frame w="fill" h={44} stroke="#E4E4E7" strokeWidth={1} rounded={10} flex="row" items="center" gap={10} px={14}>
      <Icon name="lucide:search" size={16} color="#71717A" />
      <Text color="#A1A1AA" size={14} grow={1}>Search products...</Text>
      <Frame h={20} px={6} bg="#F4F4F5" rounded={4} flex="row" items="center"><Text color="#71717A" size={11} weight="medium">⌘K</Text></Frame>
    </Frame>
    <Frame flex="col" gap={12}>
      <Text color="#0A0A0A" size={13} weight="semibold">Category</Text>
      <Frame flex="col" gap={8}>
        <Frame flex="row" gap={10} items="center"><Rectangle w={16} h={16} bg="#0070F3" rounded={4} /><Text color="#0A0A0A" size={13} grow={1}>Apparel</Text><Text color="#71717A" size={12}>142</Text></Frame>
        <Frame flex="row" gap={10} items="center"><Rectangle w={16} h={16} stroke="#E4E4E7" strokeWidth={1} rounded={4} /><Text color="#0A0A0A" size={13} grow={1}>Accessories</Text><Text color="#71717A" size={12}>84</Text></Frame>
        <Frame flex="row" gap={10} items="center"><Rectangle w={16} h={16} stroke="#E4E4E7" strokeWidth={1} rounded={4} /><Text color="#0A0A0A" size={13} grow={1}>Footwear</Text><Text color="#71717A" size={12}>63</Text></Frame>
        <Frame flex="row" gap={10} items="center"><Rectangle w={16} h={16} stroke="#E4E4E7" strokeWidth={1} rounded={4} /><Text color="#0A0A0A" size={13} grow={1}>Home</Text><Text color="#71717A" size={12}>38</Text></Frame>
      </Frame>
    </Frame>
    <Frame flex="col" gap={12}>
      <Text color="#0A0A0A" size={13} weight="semibold">Price range</Text>
      <Frame w="fill" h={4} bg="#F4F4F5" rounded={2} flex="row" items="center">
        <Rectangle w={40} h={4} bg="#F4F4F5" />
        <Rectangle grow={1} h={4} bg="#0070F3" />
        <Rectangle w={60} h={4} bg="#F4F4F5" />
      </Frame>
      <Frame flex="row" justify="between"><Text color="#71717A" size={12}>$20</Text><Text color="#71717A" size={12}>$240</Text></Frame>
    </Frame>
    <Frame flex="col" gap={12}>
      <Text color="#0A0A0A" size={13} weight="semibold">Rating</Text>
      <Frame flex="col" gap={6}>
        <Frame flex="row" gap={6} items="center"><Frame flex="row" gap={1}><Icon name="lucide:star" size={13} color="#FCD34D" /><Icon name="lucide:star" size={13} color="#FCD34D" /><Icon name="lucide:star" size={13} color="#FCD34D" /><Icon name="lucide:star" size={13} color="#FCD34D" /><Icon name="lucide:star" size={13} color="#FCD34D" /></Frame><Text color="#71717A" size={12}>& up</Text></Frame>
        <Frame flex="row" gap={6} items="center"><Frame flex="row" gap={1}><Icon name="lucide:star" size={13} color="#FCD34D" /><Icon name="lucide:star" size={13} color="#FCD34D" /><Icon name="lucide:star" size={13} color="#FCD34D" /><Icon name="lucide:star" size={13} color="#FCD34D" /><Icon name="lucide:star" size={13} color="#E4E4E7" /></Frame><Text color="#71717A" size={12}>& up</Text></Frame>
      </Frame>
    </Frame>
  </Frame>
  <Frame name="ResultsArea" grow={1} flex="col" gap={16}>
    <Frame flex="row" items="center" justify="between">
      <Text color="#0A0A0A" size={14}>Showing <Text color="#0A0A0A" size={14} weight="semibold">142 results</Text></Text>
      <Frame flex="row" gap={8} items="center">
        <Text color="#71717A" size={12}>Sort by</Text>
        <Frame h={32} px={12} stroke="#E4E4E7" strokeWidth={1} rounded={6} flex="row" items="center" gap={6}><Text color="#0A0A0A" size={12} weight="medium">Most relevant</Text><Icon name="lucide:chevron-down" size={12} color="#71717A" /></Frame>
      </Frame>
    </Frame>
    <Frame w="fill" flex="row" gap={12} wrap rowGap={12}>
      <Frame w={200} h={260} bg="#F4F4F5" rounded={10} />
      <Frame w={200} h={260} bg="#F4F4F5" rounded={10} />
      <Frame w={200} h={260} bg="#F4F4F5" rounded={10} />
      <Frame w={200} h={260} bg="#F4F4F5" rounded={10} />
      <Frame w={200} h={260} bg="#F4F4F5" rounded={10} />
      <Frame w={200} h={260} bg="#F4F4F5" rounded={10} />
    </Frame>
  </Frame>
</Frame>`
}

export const FILE_UPLOAD_DROPZONE: Recipe = {
  name: 'file-upload-dropzone',
  type: 'card',
  style: 'minimal',
  description:
    'Drag-drop file upload with large dashed zone, helper text, supported formats, file size limit, recently uploaded list.',
  dimensions: '560×420',
  palette: ['#FFFFFF', '#0A0A0A', '#71717A', '#0070F3', '#F4F4F5', '#10B981'],
  font: 'Inter',
  jsx: `<Frame name="UploadWidget" w={560} bg="#FFFFFF" flex="col" gap={20} p={28} rounded={14} stroke="#E4E4E7" strokeWidth={1}>
  <Frame flex="col" gap={4}>
    <Text color="#0A0A0A" size={17} weight="semibold">Upload files</Text>
    <Text color="#71717A" size={13}>PNG, JPG, PDF up to 10MB each.</Text>
  </Frame>
  <Frame name="DropZone" w="fill" h={200} bg="#FAFAFA" rounded={12} stroke="#0070F3" strokeWidth={2} strokeAlign="INSIDE" flex="col" items="center" justify="center" gap={12}>
    <Frame w={56} h={56} bg="#0070F314" rounded={28} flex="row" items="center" justify="center">
      <Icon name="lucide:upload-cloud" size={28} color="#0070F3" />
    </Frame>
    <Frame flex="col" gap={4} items="center">
      <Text color="#0A0A0A" size={14}><Text color="#0070F3" size={14} weight="semibold">Click to upload</Text> or drag and drop</Text>
      <Text color="#71717A" size={12}>Maximum file size: 10 MB</Text>
    </Frame>
  </Frame>
  <Frame flex="col" gap={8}>
    <Text color="#71717A" size={11} weight="semibold" letterSpacing={0.5} textCase="upper">Uploaded (2)</Text>
    <Frame flex="row" gap={10} items="center" p={12} stroke="#E4E4E7" strokeWidth={1} rounded={8}>
      <Frame w={36} h={36} bg="#F4F4F5" rounded={8} flex="row" items="center" justify="center"><Icon name="lucide:image" size={18} color="#0070F3" /></Frame>
      <Frame flex="col" gap={2} grow={1}>
        <Text color="#0A0A0A" size={13} weight="medium">hero-photo.png</Text>
        <Frame flex="row" gap={8} items="center"><Text color="#71717A" size={11}>2.4 MB</Text><Ellipse w={3} h={3} bg="#71717A" /><Text color="#10B981" size={11} weight="medium">Complete</Text></Frame>
      </Frame>
      <Icon name="lucide:x" size={14} color="#71717A" />
    </Frame>
    <Frame flex="row" gap={10} items="center" p={12} stroke="#E4E4E7" strokeWidth={1} rounded={8}>
      <Frame w={36} h={36} bg="#F4F4F5" rounded={8} flex="row" items="center" justify="center"><Icon name="lucide:file-text" size={18} color="#EF4444" /></Frame>
      <Frame flex="col" gap={4} grow={1}>
        <Frame flex="row" justify="between"><Text color="#0A0A0A" size={13} weight="medium">spec-document.pdf</Text><Text color="#71717A" size={11}>68%</Text></Frame>
        <Frame w="fill" h={4} bg="#F4F4F5" rounded={2} overflow="hidden"><Rectangle w={280} h={4} bg="#0070F3" rounded={2} /></Frame>
      </Frame>
    </Frame>
  </Frame>
</Frame>`
}

export const MULTI_STEP_WIZARD: Recipe = {
  name: 'form-multi-step-wizard',
  type: 'card',
  style: 'minimal',
  description:
    'Multi-step form wizard with progress header (step 2 of 4), form body, and navigation buttons (Back + Continue).',
  dimensions: '560×640',
  palette: ['#FFFFFF', '#0A0A0A', '#71717A', '#0070F3', '#10B981', '#E4E4E7'],
  font: 'Inter',
  jsx: `<Frame name="WizardCard" w={560} bg="#FFFFFF" flex="col" rounded={14} stroke="#E4E4E7" strokeWidth={1} overflow="hidden">
  <Frame name="WizardHeader" w="fill" flex="col" gap={14} p={28} stroke="#E4E4E7" strokeWidth={1} strokeAlign="INSIDE">
    <Frame flex="row" justify="between" items="center">
      <Text color="#71717A" size={12} weight="semibold" letterSpacing={0.5} textCase="upper">Step 2 of 4</Text>
      <Text color="#71717A" size={12}>50% complete</Text>
    </Frame>
    <Frame w="fill" h={4} bg="#F4F4F5" rounded={2} overflow="hidden"><Rectangle w={264} h={4} bg="#0070F3" rounded={2} /></Frame>
    <Frame flex="row" items="center" gap={10}>
      <Frame w={24} h={24} bg="#10B981" rounded={12} flex="row" items="center" justify="center"><Icon name="lucide:check" size={14} color="#FFFFFF" /></Frame>
      <Text color="#71717A" size={12} weight="medium">Account</Text>
      <Rectangle w={20} h={1} bg="#E4E4E7" />
      <Frame w={24} h={24} bg="#0070F3" rounded={12} flex="row" items="center" justify="center"><Text color="#FFFFFF" size={11} weight="semibold">2</Text></Frame>
      <Text color="#0A0A0A" size={12} weight="semibold">Company</Text>
      <Rectangle w={20} h={1} bg="#E4E4E7" />
      <Frame w={24} h={24} stroke="#E4E4E7" strokeWidth={1} rounded={12} flex="row" items="center" justify="center"><Text color="#71717A" size={11}>3</Text></Frame>
      <Text color="#71717A" size={12}>Team</Text>
      <Rectangle w={20} h={1} bg="#E4E4E7" />
      <Frame w={24} h={24} stroke="#E4E4E7" strokeWidth={1} rounded={12} flex="row" items="center" justify="center"><Text color="#71717A" size={11}>4</Text></Frame>
      <Text color="#71717A" size={12}>Plan</Text>
    </Frame>
  </Frame>
  <Frame name="WizardBody" w="fill" flex="col" gap={18} p={28}>
    <Frame flex="col" gap={6}>
      <Text color="#0A0A0A" size={20} weight="bold" letterSpacing={-0.5}>Tell us about your company</Text>
      <Text color="#71717A" size={14}>This helps us customize your experience.</Text>
    </Frame>
    <Frame flex="col" gap={6}>
      <Text color="#0A0A0A" size={13} weight="medium">Company name</Text>
      <Frame w="fill" h={42} stroke="#E4E4E7" strokeWidth={1} rounded={8} flex="row" items="center" px={12}><Text color="#A1A1AA" size={14}>Acme Inc.</Text></Frame>
    </Frame>
    <Frame flex="col" gap={6}>
      <Text color="#0A0A0A" size={13} weight="medium">Team size</Text>
      <Frame w="fill" h={42} stroke="#E4E4E7" strokeWidth={1} rounded={8} flex="row" items="center" justify="between" px={12}><Text color="#0A0A0A" size={14}>11–50</Text><Icon name="lucide:chevron-down" size={14} color="#71717A" /></Frame>
    </Frame>
    <Frame flex="col" gap={6}>
      <Text color="#0A0A0A" size={13} weight="medium">Industry</Text>
      <Frame w="fill" h={42} stroke="#E4E4E7" strokeWidth={1} rounded={8} flex="row" items="center" justify="between" px={12}><Text color="#A1A1AA" size={14}>Select industry</Text><Icon name="lucide:chevron-down" size={14} color="#71717A" /></Frame>
    </Frame>
  </Frame>
  <Frame name="WizardFooter" w="fill" flex="row" items="center" justify="between" p={20} bg="#FAFAFA" stroke="#E4E4E7" strokeWidth={1} strokeAlign="INSIDE">
    <Frame h={40} px={16} stroke="#E4E4E7" strokeWidth={1} bg="#FFFFFF" rounded={8} flex="row" items="center" gap={6}><Icon name="lucide:arrow-left" size={14} color="#0A0A0A" /><Text color="#0A0A0A" size={13} weight="medium">Back</Text></Frame>
    <Frame h={40} px={16} bg="#0070F3" rounded={8} flex="row" items="center" gap={6}><Text color="#FFFFFF" size={13} weight="semibold">Continue</Text><Icon name="lucide:arrow-right" size={14} color="#FFFFFF" /></Frame>
  </Frame>
</Frame>`
}

export const COMMAND_PALETTE: Recipe = {
  name: 'command-palette',
  type: 'card',
  style: 'linear',
  description:
    'Cmd+K command palette overlay with search input, grouped results (Actions, Navigation, Recent), keyboard shortcut hints.',
  dimensions: '600×440',
  palette: ['#FFFFFF', '#0A0A0A', '#71717A', '#5E6AD2', '#F4F4F5'],
  font: 'Inter',
  jsx: `<Frame name="CommandPalette" w={600} bg="#FFFFFF" rounded={14} stroke="#E4E4E7" strokeWidth={1} flex="col" shadow="0 25 50 #00000026" overflow="hidden">
  <Frame name="CmdSearch" w="fill" h={56} flex="row" items="center" gap={12} px={18} stroke="#F4F4F5" strokeWidth={1} strokeAlign="INSIDE">
    <Icon name="lucide:search" size={18} color="#71717A" />
    <Text color="#A1A1AA" size={16} grow={1}>Search or jump to...</Text>
    <Frame h={22} px={8} bg="#F4F4F5" rounded={5} flex="row" items="center"><Text color="#71717A" size={11} weight="medium">esc</Text></Frame>
  </Frame>
  <Frame name="CmdResults" w="fill" flex="col">
    <Text color="#71717A" size={11} weight="semibold" letterSpacing={0.5} textCase="upper" px={18} pt={12} pb={6}>Actions</Text>
    <Frame w="fill" h={40} bg="#F4F4F5" flex="row" items="center" gap={12} px={18}>
      <Icon name="lucide:plus-circle" size={16} color="#5E6AD2" />
      <Text color="#0A0A0A" size={13} weight="medium" grow={1}>Create new issue</Text>
      <Frame flex="row" gap={4}>
        <Frame h={22} px={6} bg="#FFFFFF" stroke="#E4E4E7" strokeWidth={1} rounded={4} flex="row" items="center"><Text color="#71717A" size={11} weight="medium">C</Text></Frame>
      </Frame>
    </Frame>
    <Frame w="fill" h={40} flex="row" items="center" gap={12} px={18}>
      <Icon name="lucide:folder-plus" size={16} color="#71717A" />
      <Text color="#0A0A0A" size={13} grow={1}>New project</Text>
      <Frame flex="row" gap={4}>
        <Frame h={22} px={6} bg="#F4F4F5" rounded={4} flex="row" items="center"><Text color="#71717A" size={11} weight="medium">P</Text></Frame>
      </Frame>
    </Frame>
    <Frame w="fill" h={40} flex="row" items="center" gap={12} px={18}>
      <Icon name="lucide:user-plus" size={16} color="#71717A" />
      <Text color="#0A0A0A" size={13} grow={1}>Invite teammate</Text>
    </Frame>
    <Text color="#71717A" size={11} weight="semibold" letterSpacing={0.5} textCase="upper" px={18} pt={12} pb={6}>Navigation</Text>
    <Frame w="fill" h={40} flex="row" items="center" gap={12} px={18}>
      <Icon name="lucide:inbox" size={16} color="#71717A" />
      <Text color="#0A0A0A" size={13} grow={1}>Go to Inbox</Text>
      <Frame flex="row" gap={4}>
        <Frame h={22} px={6} bg="#F4F4F5" rounded={4} flex="row" items="center"><Text color="#71717A" size={11} weight="medium">G</Text></Frame>
        <Frame h={22} px={6} bg="#F4F4F5" rounded={4} flex="row" items="center"><Text color="#71717A" size={11} weight="medium">I</Text></Frame>
      </Frame>
    </Frame>
    <Frame w="fill" h={40} flex="row" items="center" gap={12} px={18}>
      <Icon name="lucide:bar-chart-3" size={16} color="#71717A" />
      <Text color="#0A0A0A" size={13} grow={1}>Go to Analytics</Text>
    </Frame>
    <Text color="#71717A" size={11} weight="semibold" letterSpacing={0.5} textCase="upper" px={18} pt={12} pb={6}>Recent</Text>
    <Frame w="fill" h={40} flex="row" items="center" gap={12} px={18}>
      <Icon name="lucide:file-text" size={16} color="#71717A" />
      <Text color="#0A0A0A" size={13} grow={1}>Q2 Roadmap planning</Text>
      <Text color="#71717A" size={12}>2h ago</Text>
    </Frame>
  </Frame>
  <Frame name="CmdFooter" w="fill" h={36} bg="#FAFAFA" flex="row" items="center" gap={14} px={18} stroke="#F4F4F5" strokeWidth={1} strokeAlign="INSIDE">
    <Frame flex="row" gap={4} items="center"><Icon name="lucide:arrow-up" size={10} color="#71717A" /><Icon name="lucide:arrow-down" size={10} color="#71717A" /><Text color="#71717A" size={11}>navigate</Text></Frame>
    <Frame flex="row" gap={4} items="center"><Icon name="lucide:corner-down-left" size={10} color="#71717A" /><Text color="#71717A" size={11}>select</Text></Frame>
  </Frame>
</Frame>`
}

export const DATE_RANGE_PICKER: Recipe = {
  name: 'date-range-picker',
  type: 'card',
  style: 'minimal',
  description:
    'Calendar date range picker with month grid, highlighted range, preset shortcuts (Last 7/30 days), footer with apply CTA.',
  dimensions: '620×420',
  palette: ['#FFFFFF', '#0A0A0A', '#71717A', '#0070F3', '#E4E4E7'],
  font: 'Inter',
  jsx: `<Frame name="DatePicker" w={620} bg="#FFFFFF" rounded={14} stroke="#E4E4E7" strokeWidth={1} flex="row" shadow="0 10 30 #00000014" overflow="hidden">
  <Frame name="Presets" w={150} flex="col" gap={2} p={12} bg="#FAFAFA">
    <Frame w="fill" h={32} px={10} rounded={6} flex="row" items="center"><Text color="#0A0A0A" size={12}>Today</Text></Frame>
    <Frame w="fill" h={32} px={10} rounded={6} flex="row" items="center"><Text color="#0A0A0A" size={12}>Yesterday</Text></Frame>
    <Frame w="fill" h={32} px={10} bg="#0070F314" rounded={6} flex="row" items="center"><Text color="#0070F3" size={12} weight="semibold">Last 7 days</Text></Frame>
    <Frame w="fill" h={32} px={10} rounded={6} flex="row" items="center"><Text color="#0A0A0A" size={12}>Last 30 days</Text></Frame>
    <Frame w="fill" h={32} px={10} rounded={6} flex="row" items="center"><Text color="#0A0A0A" size={12}>This month</Text></Frame>
    <Frame w="fill" h={32} px={10} rounded={6} flex="row" items="center"><Text color="#0A0A0A" size={12}>Last month</Text></Frame>
    <Frame w="fill" h={32} px={10} rounded={6} flex="row" items="center"><Text color="#0A0A0A" size={12}>Year to date</Text></Frame>
    <Frame w="fill" h={32} px={10} rounded={6} flex="row" items="center"><Text color="#0A0A0A" size={12}>Custom…</Text></Frame>
  </Frame>
  <Frame name="Calendar" grow={1} flex="col" p={18} gap={12}>
    <Frame flex="row" items="center" justify="between">
      <Icon name="lucide:chevron-left" size={16} color="#71717A" />
      <Text color="#0A0A0A" size={14} weight="semibold">April 2026</Text>
      <Icon name="lucide:chevron-right" size={16} color="#71717A" />
    </Frame>
    <Frame flex="row" gap={2} justify="between">
      <Text color="#71717A" size={11} weight="medium" w={52} textAlign="center">Mo</Text>
      <Text color="#71717A" size={11} weight="medium" w={52} textAlign="center">Tu</Text>
      <Text color="#71717A" size={11} weight="medium" w={52} textAlign="center">We</Text>
      <Text color="#71717A" size={11} weight="medium" w={52} textAlign="center">Th</Text>
      <Text color="#71717A" size={11} weight="medium" w={52} textAlign="center">Fr</Text>
      <Text color="#71717A" size={11} weight="medium" w={52} textAlign="center">Sa</Text>
      <Text color="#71717A" size={11} weight="medium" w={52} textAlign="center">Su</Text>
    </Frame>
    <Frame flex="col" gap={4}>
      <Frame flex="row" gap={2} justify="between">
        <Frame w={52} h={32} flex="row" items="center" justify="center"><Text color="#D1D1D6" size={13}>30</Text></Frame>
        <Frame w={52} h={32} flex="row" items="center" justify="center"><Text color="#D1D1D6" size={13}>31</Text></Frame>
        <Frame w={52} h={32} flex="row" items="center" justify="center"><Text color="#0A0A0A" size={13}>1</Text></Frame>
        <Frame w={52} h={32} flex="row" items="center" justify="center"><Text color="#0A0A0A" size={13}>2</Text></Frame>
        <Frame w={52} h={32} flex="row" items="center" justify="center"><Text color="#0A0A0A" size={13}>3</Text></Frame>
        <Frame w={52} h={32} flex="row" items="center" justify="center"><Text color="#0A0A0A" size={13}>4</Text></Frame>
        <Frame w={52} h={32} flex="row" items="center" justify="center"><Text color="#0A0A0A" size={13}>5</Text></Frame>
      </Frame>
      <Frame flex="row" gap={0} justify="between">
        <Frame w={52} h={32} flex="row" items="center" justify="center"><Text color="#0A0A0A" size={13}>6</Text></Frame>
        <Frame w={52} h={32} flex="row" items="center" justify="center"><Text color="#0A0A0A" size={13}>7</Text></Frame>
        <Frame w={52} h={32} flex="row" items="center" justify="center"><Text color="#0A0A0A" size={13}>8</Text></Frame>
        <Frame w={52} h={32} bg="#0070F3" roundedTL={16} roundedBL={16} flex="row" items="center" justify="center"><Text color="#FFFFFF" size={13} weight="semibold">9</Text></Frame>
        <Frame w={52} h={32} bg="#0070F314" flex="row" items="center" justify="center"><Text color="#0A0A0A" size={13}>10</Text></Frame>
        <Frame w={52} h={32} bg="#0070F314" flex="row" items="center" justify="center"><Text color="#0A0A0A" size={13}>11</Text></Frame>
        <Frame w={52} h={32} bg="#0070F314" flex="row" items="center" justify="center"><Text color="#0A0A0A" size={13}>12</Text></Frame>
      </Frame>
      <Frame flex="row" gap={0} justify="between">
        <Frame w={52} h={32} bg="#0070F314" flex="row" items="center" justify="center"><Text color="#0A0A0A" size={13}>13</Text></Frame>
        <Frame w={52} h={32} bg="#0070F314" flex="row" items="center" justify="center"><Text color="#0A0A0A" size={13}>14</Text></Frame>
        <Frame w={52} h={32} bg="#0070F314" flex="row" items="center" justify="center"><Text color="#0A0A0A" size={13}>15</Text></Frame>
        <Frame w={52} h={32} bg="#0070F3" roundedTR={16} roundedBR={16} flex="row" items="center" justify="center"><Text color="#FFFFFF" size={13} weight="semibold">16</Text></Frame>
        <Frame w={52} h={32} flex="row" items="center" justify="center"><Text color="#0A0A0A" size={13}>17</Text></Frame>
        <Frame w={52} h={32} flex="row" items="center" justify="center"><Text color="#0A0A0A" size={13}>18</Text></Frame>
        <Frame w={52} h={32} flex="row" items="center" justify="center"><Text color="#0A0A0A" size={13}>19</Text></Frame>
      </Frame>
    </Frame>
    <Frame flex="row" items="center" justify="between" pt={10} stroke="#E4E4E7" strokeWidth={1} strokeAlign="INSIDE">
      <Text color="#0A0A0A" size={12}>Apr 9 – Apr 16, 2026</Text>
      <Frame flex="row" gap={6}>
        <Frame h={30} px={12} stroke="#E4E4E7" strokeWidth={1} rounded={6} flex="row" items="center"><Text color="#0A0A0A" size={12} weight="medium">Cancel</Text></Frame>
        <Frame h={30} px={12} bg="#0070F3" rounded={6} flex="row" items="center"><Text color="#FFFFFF" size={12} weight="semibold">Apply</Text></Frame>
      </Frame>
    </Frame>
  </Frame>
</Frame>`
}
