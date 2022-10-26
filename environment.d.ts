declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_GOVERNANCE_URL: string // The temporary governance link to our governance model
    NAVIGATION_MENU_CREATE_URL: string
    NAVIGATION_MENU_EXPLORE_URL: string
    NAVIGATION_MENU_INTERACT_URL: string
    NAVIGATION_MENU_LEARN_URL: string
    NAVIGATION_MENU_OKP4_URL: string
    OKP4_DISCORD_URL: string
    OKP4_GITHUB_URL: string
    OKP4_LINKEDIN_URL: string
    OKP4_MEDIUM_URL: string
    OKP4_TELEGRAM_URL: string
    OKP4_TWITTER_URL: string
    OKP4_WEBSITE_URL: string
    // The data folder path
    DATA_PATH: string
    // THE API uri
    API_URI: string
    // The server uri to get the config
    NEXT_PUBLIC_SERVER_URI: string
    // Default dataspace loaded inside the homepage
    NEXT_PUBLIC_DEFAULT_DATASPACE_ID: string
  }
}

declare module 'next/config' {
  declare const _default: () => {
    publicRuntimeConfig: {
      version: string
    }
  }

  export default _default
}
