/**
 * @typedef {Object} dimensions
 * @property {string} width
 * @property {string} height
 */

/**
 * @typedef {Object} image
 * @property {dimensions} dimensions
 * @property {string} alt
 * @property {any} copyright
 * @property {string} url
 *
 */

/**
 * @typedef {Object} dataDescription
 * @property {string} type
 * @property {string} text
 * @property {[]} spans
 */

/**
 * @typedef {Object} spec
 * @property {string} spec_name
 * @property {string} spec_value
 */

/**
 * @typedef {object} category
 *@property {string} id "YWHviRIAACsAyjP3",
 *@property {"category"} type "category",
 *@property {[string]} tags [],
 *@property {string} slug "furniture",
 *@property {string} lang "en-us",
 *@property {string} first_publication_date": "2021-10-09T23:34:39+0000",
 *@property {string} last_publication_date": "2021-10-12T23:30:58+0000",
 *@property {string} link_type": "Document",
 *@property {boolean} isBroken": false
 */

/**
 * @typedef {Object} data
 * @property {string} name
 * @property {string} sku
 * @property {category} category
 * @property {string} short_description
 * @property {[dataDescription]} description
 * @property {[spec]} specs
 * @property {image} mainimage
 * @property {[{image: image}]} images
 * @property {number} stock
 * @property {number} price
 */

/**
 * @typedef {object} product
 * @property {string} id: 'YWHybRIAAC8AykDh',
 * @property {string | null} uid: null,
 * @property {string | null} url: null,
 * @property {('product')} type: 'product',
 * @property {string} href: 'https://wizeline-academy.cdn.prismic.io/api/v2/documents/search?ref=YWYpRBIAACwA3RZ5&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22YWHybRIAAC8AykDh%22%29+%5D%5D',
 * @property {[string]} tags: ["Living Room", "Sofa"],
 * @property {date} first_publication_date: '2021-10-09T23:32:37+0000',
 * @property {date} last_publication_date: '2021-10-12T23:56:48+0000',
 * @property {[string]} slugs: ['decoracion-y-organizacion'],
 * @property {[any]} linked_documents: [],
 * @property {('es-mx' | 'en-us')} lang: 'es-mx',
 * @property {data} data
 */

/**
 * @typedef {[product]} products
 */

export {};
