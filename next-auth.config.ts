// next-auth.config.js
export default {
  providers: [
    {
      id: 'linkedin',
      name: 'LinkedIn',
      type: 'oauth',
      version: '2.0',
      scope: 'r_liteprofile r_emailaddress',
      params: { grant_type: 'authorization_code' },
      accessTokenUrl: 'https://www.linkedin.com/oauth/v2/accessToken',
      requestTokenUrl: null,
      authorizationUrl: 'https://www.linkedin.com/oauth/v2/authorization',
      profileUrl: 'https://api.linkedin.com/v2/me',
      clientId: process.env.LINKEDIN_CLIENT_ID,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
    },
  ],
  // Other NextAuth.js configurations...
};
