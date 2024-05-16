import * as Sentry from '@sentry/react';

function initSentry() {
  Sentry.init({
    dsn: 'https://bbc29492f5e5359513381d292701e5d3@o4507257419923456.ingest.us.sentry.io/4507257425887232',
    integrations: [Sentry.browserTracingIntegration(), Sentry.replayIntegration()],
    // Performance Monitoring
    tracesSampleRate: 1.0, //  Capture 100% of the transactions
    // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
    tracePropagationTargets: ['localhost', /^https:\/\/yourserver\.io\/api/],
    // Session Replay
    replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
    replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
  });
}

// const IS_PRODUCTION = process.env.NODE_ENV === 'production';
// if (IS_PRODUCTION) {
//   initSentry();
// }

// TODO remove and use only if IS_PRODUCTION
initSentry();
