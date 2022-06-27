/**
 * @typedef {Object} dimensions
 * @property {string} width
 * @property {string} height
 * */

/**
 * @typedef {Object} main_image
 * @property {dimensions} dimensions
 * @property {string} alt
 * @property {any} copyright
 * @property {string} url
 *
 * */

/**
 * @typedef {Object} data
 * @property {string} name
 * @property {main_image} main_image
 * */

/**
 * @typedef {object} category
 * @property {string} id: 'YWHybRIAAC8AykDh',
 * @property {string | null} uid: null,
 * @property {string | null} url: null,
 * @property {('category')} type: 'category',
 * @property {string} href: 'https://wizeline-academy.cdn.prismic.io/api/v2/documents/search?ref=YWYpRBIAACwA3RZ5&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22YWHybRIAAC8AykDh%22%29+%5D%5D',
 * @property {[any]} tags: [],
 * @property {date} first_publication_date: '2021-10-09T23:32:37+0000',
 * @property {date} last_publication_date: '2021-10-12T23:56:48+0000',
 * @property {[string]} slugs: ['decoracion-y-organizacion'],
 * @property {[any]} linked_documents: [],
 * @property {('es-mx' | 'en-us')} lang: 'es-mx',
 * @property {data} data
 */

/**
 * @typedef {[category]} categories
 */

/**
 * @callback CategoryGrid
 * @param {{categories: categories}} props
 */

export {};
