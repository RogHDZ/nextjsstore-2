import { env } from "app/config/env"

export const shopifyUrls = {
  products: {
    'all': `${env.SHOPIFY_HOSTNAME}/admin/api/2023-10/products.json`,
    mainProducts: `${env.SHOPIFY_HOSTNAME}/admin/api/2023-10/collections/477409575202/products.json`,
  },
  collections: {
    'all': `${env.SHOPIFY_HOSTNAME}/admin/api/2024-04/smart_collections.json`,
    'products': (id: string) => `${env.SHOPIFY_HOSTNAME}/admin/api/2024-04/collections/${id}/products.json`
  }
}