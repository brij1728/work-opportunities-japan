declare global {
  namespace NodeJS {
    interface ProcessEnv {
      GITHUB_URL: string;
      LINKEDIN_URL: string;
      TWITTER_URL: string;
    }
  }
}
