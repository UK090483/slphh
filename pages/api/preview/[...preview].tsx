import getPreviewApi from "@lib/SanityPageBuilder/lib/preview/previewApi";
import { previewClient as client } from "@lib/SanityService/sanity.server";
const prevApi = getPreviewApi({ client });
export default prevApi;
