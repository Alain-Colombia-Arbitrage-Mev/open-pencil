import type { Recipe } from './design-recipes-data-a'

export const HERO_CENTERED_MINIMAL: Recipe = {
  name: 'hero-centered-minimal',
  type: 'hero',
  style: 'minimal',
  description:
    'Centered minimalist hero with generous whitespace, small eyebrow label, large display, and single CTA. Works for any serious brand.',
  dimensions: '1440×600',
  palette: ['#FAFAFA', '#0A0A0A', '#71717A', '#E4E4E7', '#18181B'],
  font: 'Inter',
  jsx: `<Frame name="HeroSection" w={1440} h={600} bg="#FAFAFA" flex="col" items="center" justify="center" gap={32} px={48}>
  <Text color="#71717A" size={13} weight="medium" letterSpacing={2} textCase="upper">Now in public beta</Text>
  <Text color="#0A0A0A" size={72} weight="bold" textAlign="center" letterSpacing={-2} lineHeight={76} w={900}>
    The tool your team has been waiting for
  </Text>
  <Text color="#71717A" size={19} textAlign="center" lineHeight={30} w={600}>
    Simple enough to start in minutes. Powerful enough to run your whole company.
  </Text>
  <Frame name="HeroCTAs" flex="row" gap={12} items="center">
    <Frame name="CTAPrimary" h={48} px={24} bg="#0A0A0A" rounded={8} flex="row" items="center" gap={8}>
      <Text color="#FAFAFA" size={15} weight="semibold">Get started</Text>
      <Icon name="lucide:arrow-right" size={15} color="#FAFAFA" />
    </Frame>
    <Frame name="CTASecondary" h={48} px={24} stroke="#E4E4E7" strokeWidth={1} rounded={8} flex="row" items="center">
      <Text color="#0A0A0A" size={15} weight="medium">Book a demo</Text>
    </Frame>
  </Frame>
</Frame>`
}

export const AUTH_LOGIN_CARD: Recipe = {
  name: 'auth-login-card',
  type: 'card',
  style: 'minimal',
  description:
    'Centered login card with logo, title, OAuth buttons, email field, password field, forgot link, primary CTA. Standard SaaS auth.',
  dimensions: '440×620',
  palette: ['#FFFFFF', '#0A0A0A', '#71717A', '#E4E4E7', '#18181B'],
  font: 'Inter',
  jsx: `<Frame name="LoginCard" w={440} bg="#FFFFFF" rounded={16} p={40} flex="col" gap={24} stroke="#E4E4E7" strokeWidth={1} shadow="0 4 24 #0000000A">
  <Frame name="LoginHeader" flex="col" gap={8} items="center">
    <Rectangle w={40} h={40} bg="#0A0A0A" rounded={10} />
    <Text color="#0A0A0A" size={24} weight="bold" letterSpacing={-0.5} textAlign="center">Welcome back</Text>
    <Text color="#71717A" size={14} textAlign="center">Sign in to your account to continue</Text>
  </Frame>
  <Frame name="LoginOAuth" flex="col" gap={8}>
    <Frame name="GoogleButton" w="fill" h={44} stroke="#E4E4E7" strokeWidth={1} rounded={8} flex="row" items="center" justify="center" gap={10}>
      <Icon name="lucide:chrome" size={16} color="#0A0A0A" />
      <Text color="#0A0A0A" size={14} weight="medium">Continue with Google</Text>
    </Frame>
    <Frame name="GithubButton" w="fill" h={44} stroke="#E4E4E7" strokeWidth={1} rounded={8} flex="row" items="center" justify="center" gap={10}>
      <Icon name="lucide:github" size={16} color="#0A0A0A" />
      <Text color="#0A0A0A" size={14} weight="medium">Continue with GitHub</Text>
    </Frame>
  </Frame>
  <Frame name="LoginDivider" flex="row" items="center" gap={12}>
    <Rectangle grow={1} h={1} bg="#E4E4E7" />
    <Text color="#71717A" size={11} weight="medium" textCase="upper" letterSpacing={0.5}>Or with email</Text>
    <Rectangle grow={1} h={1} bg="#E4E4E7" />
  </Frame>
  <Frame name="LoginForm" flex="col" gap={16}>
    <Frame name="FieldEmail" flex="col" gap={6}>
      <Text color="#0A0A0A" size={13} weight="medium">Email</Text>
      <Frame w="fill" h={44} stroke="#E4E4E7" strokeWidth={1} rounded={8} flex="row" items="center" px={14}>
        <Text color="#A1A1AA" size={14}>you@company.com</Text>
      </Frame>
    </Frame>
    <Frame name="FieldPassword" flex="col" gap={6}>
      <Frame flex="row" justify="between" items="center">
        <Text color="#0A0A0A" size={13} weight="medium">Password</Text>
        <Text color="#0A0A0A" size={12} weight="medium" textDecoration="underline">Forgot?</Text>
      </Frame>
      <Frame w="fill" h={44} stroke="#E4E4E7" strokeWidth={1} rounded={8} flex="row" items="center" px={14}>
        <Text color="#A1A1AA" size={14}>••••••••</Text>
      </Frame>
    </Frame>
  </Frame>
  <Frame name="LoginSubmit" w="fill" h={44} bg="#0A0A0A" rounded={8} flex="row" items="center" justify="center">
    <Text color="#FAFAFA" size={14} weight="semibold">Sign in</Text>
  </Frame>
  <Frame flex="row" items="center" justify="center" gap={4}>
    <Text color="#71717A" size={13}>Don't have an account?</Text>
    <Text color="#0A0A0A" size={13} weight="semibold">Sign up</Text>
  </Frame>
</Frame>`
}

export const AUTH_SIGNUP_SPLIT: Recipe = {
  name: 'auth-signup-split',
  type: 'card',
  style: 'minimal',
  description:
    'Full-screen split signup: left half decorative illustration/gradient with brand quote, right half clean signup form. Modern SaaS pattern.',
  dimensions: '1440×900',
  palette: ['#FFFFFF', '#0A0A0A', '#71717A', '#635BFF', '#F4F4F5'],
  font: 'Inter',
  jsx: `<Frame name="SignupScreen" w={1440} h={900} flex="row">
  <Frame name="SignupLeft" w={640} h={900} bg="#0A0A0A" flex="col" justify="between" p={48} overflow="hidden">
    <Frame name="BrandLogo" flex="row" gap={8} items="center">
      <Rectangle w={32} h={32} bg="#635BFF" rounded={8} />
      <Text color="#FFFFFF" size={18} weight="semibold">Acme</Text>
    </Frame>
    <Frame name="DecorativeGlow" x={-100} y={280} w={800} h={400}>
      <Rectangle w={800} h={400} bg="#635BFF" blur={140} opacity={0.4} rotate={-12} />
    </Frame>
    <Frame name="Testimonial" flex="col" gap={20}>
      <Icon name="lucide:quote" size={32} color="#635BFF" />
      <Text color="#FFFFFF" size={22} lineHeight={32} weight="medium" w={480}>
        "We shipped our entire platform redesign in a month. The team has never moved faster."
      </Text>
      <Frame flex="row" gap={12} items="center">
        <Ellipse w={40} h={40} bg="#635BFF" />
        <Frame flex="col" gap={2}>
          <Text color="#FFFFFF" size={13} weight="semibold">Ana Torres</Text>
          <Text color="#A1A1AA" size={12}>VP Design · Ramp</Text>
        </Frame>
      </Frame>
    </Frame>
  </Frame>
  <Frame name="SignupRight" grow={1} h={900} bg="#FFFFFF" flex="col" items="center" justify="center" px={64}>
    <Frame name="SignupContent" w={400} flex="col" gap={24}>
      <Frame flex="col" gap={8}>
        <Text color="#0A0A0A" size={30} weight="bold" letterSpacing={-1}>Create your account</Text>
        <Text color="#71717A" size={15}>Start your 14-day free trial. No card required.</Text>
      </Frame>
      <Frame flex="col" gap={12}>
        <Frame w="fill" h={44} stroke="#E4E4E7" strokeWidth={1} rounded={8} flex="row" items="center" justify="center" gap={10}>
          <Icon name="lucide:chrome" size={16} color="#0A0A0A" />
          <Text color="#0A0A0A" size={14} weight="medium">Continue with Google</Text>
        </Frame>
        <Frame w="fill" flex="row" items="center" gap={12}>
          <Rectangle grow={1} h={1} bg="#E4E4E7" />
          <Text color="#71717A" size={11} weight="medium" textCase="upper">Or</Text>
          <Rectangle grow={1} h={1} bg="#E4E4E7" />
        </Frame>
        <Frame flex="col" gap={14}>
          <Frame flex="col" gap={6}>
            <Text color="#0A0A0A" size={13} weight="medium">Full name</Text>
            <Frame w="fill" h={44} stroke="#E4E4E7" strokeWidth={1} rounded={8} flex="row" items="center" px={14}>
              <Text color="#A1A1AA" size={14}>Jane Cooper</Text>
            </Frame>
          </Frame>
          <Frame flex="col" gap={6}>
            <Text color="#0A0A0A" size={13} weight="medium">Work email</Text>
            <Frame w="fill" h={44} stroke="#E4E4E7" strokeWidth={1} rounded={8} flex="row" items="center" px={14}>
              <Text color="#A1A1AA" size={14}>jane@company.com</Text>
            </Frame>
          </Frame>
          <Frame flex="col" gap={6}>
            <Text color="#0A0A0A" size={13} weight="medium">Password</Text>
            <Frame w="fill" h={44} stroke="#E4E4E7" strokeWidth={1} rounded={8} flex="row" items="center" px={14}>
              <Text color="#A1A1AA" size={14}>At least 8 characters</Text>
            </Frame>
          </Frame>
        </Frame>
      </Frame>
      <Frame name="SignupCTA" w="fill" h={44} bg="#0A0A0A" rounded={8} flex="row" items="center" justify="center">
        <Text color="#FAFAFA" size={14} weight="semibold">Create account</Text>
      </Frame>
      <Text color="#71717A" size={12} textAlign="center" lineHeight={18} w="fill">
        By signing up, you agree to our Terms of Service and Privacy Policy.
      </Text>
    </Frame>
  </Frame>
</Frame>`
}

export const FEATURES_3_COL_ICONS: Recipe = {
  name: 'features-3-col-icons',
  type: 'features',
  style: 'minimal',
  description:
    'Classic 3-column feature section. Icon in tinted square + title + description. Works on any light landing.',
  dimensions: '1200×340',
  palette: ['#FFFFFF', '#0A0A0A', '#71717A', '#0070F3', '#F4F4F5'],
  font: 'Inter',
  jsx: `<Frame name="FeaturesSection" w={1200} flex="col" gap={64} py={96} bg="#FFFFFF" items="center">
  <Frame name="FeaturesHeader" flex="col" gap={12} items="center" w={640}>
    <Text color="#0070F3" size={13} weight="semibold" letterSpacing={1} textCase="upper">Why teams choose us</Text>
    <Text color="#0A0A0A" size={44} weight="bold" textAlign="center" letterSpacing={-1}>Everything you need to ship faster</Text>
    <Text color="#71717A" size={17} textAlign="center" lineHeight={26}>Powerful primitives that compose into anything your product needs.</Text>
  </Frame>
  <Frame name="FeaturesGrid" w="fill" flex="row" gap={32} items="start" px={32}>
    <Frame name="FeatureA" grow={1} flex="col" gap={16} items="start">
      <Frame w={48} h={48} bg="#0070F314" rounded={12} flex="row" items="center" justify="center">
        <Icon name="lucide:zap" size={24} color="#0070F3" />
      </Frame>
      <Frame flex="col" gap={6}>
        <Text color="#0A0A0A" size={18} weight="semibold">Lightning fast</Text>
        <Text color="#71717A" size={14} lineHeight={22}>Sub-50ms response times. Instant updates via server-sent events. Feels native.</Text>
      </Frame>
    </Frame>
    <Frame name="FeatureB" grow={1} flex="col" gap={16} items="start">
      <Frame w={48} h={48} bg="#0070F314" rounded={12} flex="row" items="center" justify="center">
        <Icon name="lucide:shield-check" size={24} color="#0070F3" />
      </Frame>
      <Frame flex="col" gap={6}>
        <Text color="#0A0A0A" size={18} weight="semibold">Enterprise-grade security</Text>
        <Text color="#71717A" size={14} lineHeight={22}>SOC 2 Type II, HIPAA, and custom SSO. Encryption at rest and in flight.</Text>
      </Frame>
    </Frame>
    <Frame name="FeatureC" grow={1} flex="col" gap={16} items="start">
      <Frame w={48} h={48} bg="#0070F314" rounded={12} flex="row" items="center" justify="center">
        <Icon name="lucide:workflow" size={24} color="#0070F3" />
      </Frame>
      <Frame flex="col" gap={6}>
        <Text color="#0A0A0A" size={18} weight="semibold">Built for scale</Text>
        <Text color="#71717A" size={14} lineHeight={22}>Handle billions of events. Multi-region by default. Zero-downtime deploys.</Text>
      </Frame>
    </Frame>
  </Frame>
</Frame>`
}

export const FAQ_ACCORDION: Recipe = {
  name: 'faq-accordion-2col',
  type: 'features',
  style: 'minimal',
  description:
    'FAQ section with left title/blurb and right stacked accordion items. Shows first item expanded, rest collapsed. Clean, readable.',
  dimensions: '1200×540',
  palette: ['#FFFFFF', '#0A0A0A', '#71717A', '#F4F4F5'],
  font: 'Inter',
  jsx: `<Frame name="FAQSection" w={1200} flex="row" gap={80} py={96} px={48} bg="#FFFFFF" items="start">
  <Frame name="FAQLeft" w={360} flex="col" gap={16}>
    <Text color="#71717A" size={13} weight="semibold" letterSpacing={1} textCase="upper">FAQ</Text>
    <Text color="#0A0A0A" size={40} weight="bold" letterSpacing={-1} lineHeight={44}>Frequently asked questions</Text>
    <Text color="#71717A" size={15} lineHeight={24}>Can't find the answer you're looking for?</Text>
    <Frame flex="row" gap={6} items="center">
      <Text color="#0A0A0A" size={14} weight="semibold">Contact support</Text>
      <Icon name="lucide:arrow-right" size={14} color="#0A0A0A" />
    </Frame>
  </Frame>
  <Frame name="FAQList" grow={1} flex="col">
    <Frame name="FAQItem1" w="fill" flex="col" gap={12} py={20} stroke="#F4F4F5" strokeWidth={1} strokeAlign="INSIDE">
      <Frame flex="row" justify="between" items="center">
        <Text color="#0A0A0A" size={17} weight="semibold">How does the free trial work?</Text>
        <Icon name="lucide:minus" size={18} color="#0A0A0A" />
      </Frame>
      <Text color="#71717A" size={14} lineHeight={22}>
        Start with a 14-day free trial — no credit card required. You get full access to every feature. When the trial ends, pick a plan or stop using the product. We never auto-charge.
      </Text>
    </Frame>
    <Frame name="FAQItem2" w="fill" flex="row" justify="between" items="center" py={20} stroke="#F4F4F5" strokeWidth={1} strokeAlign="INSIDE">
      <Text color="#0A0A0A" size={17} weight="semibold">Can I change plans later?</Text>
      <Icon name="lucide:plus" size={18} color="#71717A" />
    </Frame>
    <Frame name="FAQItem3" w="fill" flex="row" justify="between" items="center" py={20} stroke="#F4F4F5" strokeWidth={1} strokeAlign="INSIDE">
      <Text color="#0A0A0A" size={17} weight="semibold">What's your refund policy?</Text>
      <Icon name="lucide:plus" size={18} color="#71717A" />
    </Frame>
    <Frame name="FAQItem4" w="fill" flex="row" justify="between" items="center" py={20} stroke="#F4F4F5" strokeWidth={1} strokeAlign="INSIDE">
      <Text color="#0A0A0A" size={17} weight="semibold">Do you offer discounts for startups?</Text>
      <Icon name="lucide:plus" size={18} color="#71717A" />
    </Frame>
    <Frame name="FAQItem5" w="fill" flex="row" justify="between" items="center" py={20} stroke="#F4F4F5" strokeWidth={1} strokeAlign="INSIDE">
      <Text color="#0A0A0A" size={17} weight="semibold">Which regions do you support?</Text>
      <Icon name="lucide:plus" size={18} color="#71717A" />
    </Frame>
    <Frame name="FAQItem6" w="fill" flex="row" justify="between" items="center" py={20}>
      <Text color="#0A0A0A" size={17} weight="semibold">Is there an API?</Text>
      <Icon name="lucide:plus" size={18} color="#71717A" />
    </Frame>
  </Frame>
</Frame>`
}
