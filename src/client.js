import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const projectId = import.meta.env.VITE_APP_SANITY_PROJECT_ID;
const token = import.meta.env.VITE_APP_SANITY_TOKEN;
const dataset = 'production'
const apiVersion = '2022-03-25'

export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    token,
    useCdn: true,
    ignoreBrowserTokenWarning: true
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
