// Set up the client for fetching data in the getProps page functions
export const sanityClient = () => ({});

// Set up a preview client with serverless authentication for drafts
export const previewClient = () => ({});

export function createPreviewClient(token: string) {
  return sanityClient();
}

// Helper function for easily switching between normal client and preview client
export function getSanityClient(preview?: {
  active: boolean;
  token: string | undefined;
}) {
  if (preview?.active && preview.token) {
    return createPreviewClient(preview.token);
  }
  return sanityClient();
}
