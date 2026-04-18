import {
  FEATURES_BENTO,
  HERO_EDITORIAL_SPLIT,
  HERO_LINEAR_DARK,
  HERO_MOBILE_APP,
  HERO_STRIPE_GRADIENT,
  NAV_DARK_PRODUCT,
  NAV_LIGHT_CTA,
  PRICING_3_TIER
} from './design-recipes-data-a'
import {
  CTA_GRADIENT_CARD,
  DASHBOARD_SIDEBAR,
  FINTECH_CARD,
  FOOTER_4_COL_DARK,
  LOGO_CLOUD,
  MOBILE_TAB_BAR,
  STATS_KPI_ROW,
  TESTIMONIAL_3_COL
} from './design-recipes-data-b'
import {
  AUTH_LOGIN_CARD,
  AUTH_SIGNUP_SPLIT,
  FAQ_ACCORDION,
  FEATURES_3_COL_ICONS,
  HERO_CENTERED_MINIMAL
} from './design-recipes-data-c'
import {
  CTA_NEWSLETTER_BANNER,
  DASHBOARD_ACTIVITY_FEED,
  ECOMMERCE_PRODUCT_CARD,
  EMPTY_STATE,
  MOBILE_ONBOARDING_STEP,
  MODAL_CONFIRM_DESTRUCTIVE,
  STATS_COUNTER_ROW,
  TEAM_GRID_4
} from './design-recipes-data-d'
import {
  ARTICLE_HEADER,
  AUTHOR_BIO_CARD,
  BLOG_INDEX,
  CHANGELOG_SECTION,
  FAQ_VERTICAL,
  INTEGRATIONS_GRID,
  PRICING_COMPARISON_TABLE,
  RICH_BLOG_LAYOUT
} from './design-recipes-data-e'
import {
  CART_DRAWER,
  CHART_BAR_COMPARISON,
  CHART_LINE_CARD,
  CHECKOUT_STEPPER,
  DATA_TABLE,
  FILTER_BAR,
  PRODUCT_DETAIL_PAGE
} from './design-recipes-data-f'
import {
  MOBILE_CHAT_SCREEN,
  MOBILE_FEED_SCREEN,
  MOBILE_PAYWALL_SCREEN,
  MOBILE_PROFILE_SCREEN,
  MOBILE_SETTINGS_SCREEN,
  MOBILE_SUCCESS_STATE
} from './design-recipes-data-g'
import {
  COMMAND_PALETTE,
  DATE_RANGE_PICKER,
  FILE_UPLOAD_DROPZONE,
  FORM_CONTACT,
  MULTI_STEP_WIZARD,
  SEARCH_WITH_FILTERS
} from './design-recipes-data-h'
import {
  ALERT_BANNERS,
  BADGE_COLLECTION,
  NOTIFICATION_CENTER,
  PROGRESS_STEPS,
  SKELETON_LOADER,
  TOAST_NOTIFICATIONS
} from './design-recipes-data-i'
import {
  APP_DOWNLOAD_BANNER,
  BEFORE_AFTER_SECTION,
  CASE_STUDY_CARD,
  HERO_IMAGE_RIGHT,
  HERO_WITH_VIDEO,
  ROADMAP_TIMELINE
} from './design-recipes-data-j'
import {
  API_KEYS_TABLE,
  BILLING_PANEL,
  CALENDAR_MONTH_VIEW,
  KANBAN_BOARD,
  TIMELINE_EVENTS,
  USER_MENU_DROPDOWN
} from './design-recipes-data-k'
import {
  MOBILE_FILTER_SHEET,
  MOBILE_MAP_SCREEN,
  MOBILE_NOTIFICATION_LIST,
  MOBILE_PROFILE_EDIT,
  MOBILE_SEARCH_SCREEN,
  MOBILE_SPLASH
} from './design-recipes-data-l'
import {
  COMING_SOON,
  COMMENT_THREAD,
  ERROR_404,
  ERROR_500,
  MAINTENANCE_PAGE,
  PRICING_MONTHLY_YEARLY
} from './design-recipes-data-m'
import {
  CARD_CLAYMORPHISM,
  CTA_AURORA_BLOB,
  DASHBOARD_GLASS_WIDGETS,
  HERO_AURORA_GRADIENT,
  HERO_GLASSMORPHISM,
  NAV_GLASSMORPHISM,
  PRICING_GLASSMORPHISM
} from './design-recipes-data-n'
import {
  DASHBOARD_NEON_CRYPTO,
  FEATURE_CARDS_3D,
  HERO_3D_ISOMETRIC,
  HERO_BRUTALIST,
  HERO_NEON_CYBERPUNK,
  PRICING_NEON,
  PRODUCT_CARD_BRUTALIST
} from './design-recipes-data-o'
import {
  HERO_EDITORIAL_MAGAZINE,
  HERO_LUXURY_MINIMAL,
  HERO_NOISE_PREMIUM,
  HERO_PLAYFUL_ROUNDED,
  MUSIC_PLAYER_RETRO,
  NFT_CARD_CRYPTO,
  WELLNESS_APP_CARD
} from './design-recipes-data-p'
import { defineTool } from './schema'

import type { Recipe } from './design-recipes-data-a'

export type { Recipe, RecipeStyle, RecipeType } from './design-recipes-data-a'

export const RECIPES: Recipe[] = [
  // Heroes
  HERO_STRIPE_GRADIENT,
  HERO_LINEAR_DARK,
  HERO_EDITORIAL_SPLIT,
  HERO_MOBILE_APP,
  HERO_CENTERED_MINIMAL,
  HERO_WITH_VIDEO,
  HERO_IMAGE_RIGHT,
  HERO_GLASSMORPHISM,
  HERO_AURORA_GRADIENT,
  HERO_BRUTALIST,
  HERO_NEON_CYBERPUNK,
  HERO_3D_ISOMETRIC,
  HERO_LUXURY_MINIMAL,
  HERO_EDITORIAL_MAGAZINE,
  HERO_NOISE_PREMIUM,
  HERO_PLAYFUL_ROUNDED,
  // Landing sections
  PRICING_3_TIER,
  PRICING_COMPARISON_TABLE,
  PRICING_MONTHLY_YEARLY,
  PRICING_GLASSMORPHISM,
  PRICING_NEON,
  FEATURES_BENTO,
  FEATURES_3_COL_ICONS,
  FEATURE_CARDS_3D,
  INTEGRATIONS_GRID,
  FAQ_ACCORDION,
  FAQ_VERTICAL,
  STATS_KPI_ROW,
  STATS_COUNTER_ROW,
  TESTIMONIAL_3_COL,
  TEAM_GRID_4,
  LOGO_CLOUD,
  CTA_GRADIENT_CARD,
  CTA_NEWSLETTER_BANNER,
  CTA_AURORA_BLOB,
  CASE_STUDY_CARD,
  BEFORE_AFTER_SECTION,
  APP_DOWNLOAD_BANNER,
  ROADMAP_TIMELINE,
  // Navigation
  NAV_DARK_PRODUCT,
  NAV_LIGHT_CTA,
  NAV_GLASSMORPHISM,
  FOOTER_4_COL_DARK,
  USER_MENU_DROPDOWN,
  COMMAND_PALETTE,
  // Dashboard / product
  DASHBOARD_SIDEBAR,
  DASHBOARD_ACTIVITY_FEED,
  DASHBOARD_GLASS_WIDGETS,
  DASHBOARD_NEON_CRYPTO,
  CHART_LINE_CARD,
  CHART_BAR_COMPARISON,
  FILTER_BAR,
  DATA_TABLE,
  SEARCH_WITH_FILTERS,
  KANBAN_BOARD,
  CALENDAR_MONTH_VIEW,
  TIMELINE_EVENTS,
  BILLING_PANEL,
  API_KEYS_TABLE,
  // Auth
  AUTH_LOGIN_CARD,
  AUTH_SIGNUP_SPLIT,
  // E-commerce / product
  ECOMMERCE_PRODUCT_CARD,
  PRODUCT_CARD_BRUTALIST,
  PRODUCT_DETAIL_PAGE,
  CART_DRAWER,
  CHECKOUT_STEPPER,
  NFT_CARD_CRYPTO,
  // Content (blog, changelog, articles)
  BLOG_INDEX,
  CHANGELOG_SECTION,
  ARTICLE_HEADER,
  RICH_BLOG_LAYOUT,
  AUTHOR_BIO_CARD,
  COMMENT_THREAD,
  // Forms & Inputs
  FORM_CONTACT,
  MULTI_STEP_WIZARD,
  FILE_UPLOAD_DROPZONE,
  DATE_RANGE_PICKER,
  // Feedback & Status
  TOAST_NOTIFICATIONS,
  ALERT_BANNERS,
  SKELETON_LOADER,
  PROGRESS_STEPS,
  NOTIFICATION_CENTER,
  BADGE_COLLECTION,
  // Mobile
  MOBILE_TAB_BAR,
  MOBILE_ONBOARDING_STEP,
  MOBILE_FEED_SCREEN,
  MOBILE_PROFILE_SCREEN,
  MOBILE_CHAT_SCREEN,
  MOBILE_SETTINGS_SCREEN,
  MOBILE_PAYWALL_SCREEN,
  MOBILE_SUCCESS_STATE,
  MOBILE_SPLASH,
  MOBILE_MAP_SCREEN,
  MOBILE_FILTER_SHEET,
  MOBILE_SEARCH_SCREEN,
  MOBILE_NOTIFICATION_LIST,
  MOBILE_PROFILE_EDIT,
  WELLNESS_APP_CARD,
  MUSIC_PLAYER_RETRO,
  // Error pages
  ERROR_404,
  ERROR_500,
  COMING_SOON,
  MAINTENANCE_PAGE,
  // Utility
  EMPTY_STATE,
  MODAL_CONFIRM_DESTRUCTIVE,
  CARD_CLAYMORPHISM,
  // Fintech
  FINTECH_CARD
]

export const listRecipes = defineTool({
  name: 'list_recipes',
  description:
    'List curated design recipes. Filter by type (hero, pricing, features, nav, footer, cta, testimonial, dashboard, mobile, card, stats, logo-cloud, content, product) or style (stripe, linear, notion, vercel, apple, editorial, playful, brutalist, minimal, fintech). Call BEFORE building any section — composing from recipes produces dramatically better designs than generating from scratch.',
  params: {
    type: { type: 'string', description: 'Filter by recipe type', required: false },
    style: { type: 'string', description: 'Filter by style', required: false }
  },
  execute: (_figma, args) => {
    const typeFilter = args.type
    const styleFilter = args.style
    let filtered = RECIPES
    if (typeFilter) filtered = filtered.filter((r) => r.type === typeFilter)
    if (styleFilter) filtered = filtered.filter((r) => r.style === styleFilter)
    return {
      count: filtered.length,
      recipes: filtered.map((r) => ({
        name: r.name,
        type: r.type,
        style: r.style,
        dimensions: r.dimensions,
        palette: r.palette,
        font: r.font,
        description: r.description
      }))
    }
  }
})

export const getRecipe = defineTool({
  name: 'get_recipe',
  description:
    "Get a design recipe's JSX by name. Use the returned JSX as a starting point for your render call — keep the structural patterns (hierarchy, spacing, proportions) but adapt content and colors to the current brand/palette. Dramatically improves quality vs. generating a section from scratch.",
  params: {
    name: { type: 'string', description: 'Recipe name (kebab-case)', required: true }
  },
  execute: (_figma, args) => {
    const recipe = RECIPES.find((r) => r.name === args.name)
    if (!recipe) {
      return {
        error: `Recipe "${args.name}" not found`,
        available: RECIPES.map((r) => r.name)
      }
    }
    return {
      name: recipe.name,
      type: recipe.type,
      style: recipe.style,
      dimensions: recipe.dimensions,
      palette: recipe.palette,
      font: recipe.font,
      description: recipe.description,
      jsx: recipe.jsx
    }
  }
})
