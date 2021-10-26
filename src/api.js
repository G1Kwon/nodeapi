// @ts-check

/**
 * @typeof Post
 * @property {string} id
 * @property {string} title
 * @property {string} content
 */

/** @type {Post[]} */
const posts = [
    {
        id: 'my_first_post',
        title: 'My first post',
        content: 'Hello'
    },
    {
        id: 'my_second_post',
        title: '나의 두번째 타이틀',
        content: 'Hellooo',
    },
]

/**
 * @typedef APIResponse
 * @property {number} statusCode
 * @property {string | object} body
 */

/**
 * @typedef Route
 * @property {RegExp} url
 * @property {'GET' | 'POST'} method
 * @property {() => promise<APIResponse>} callback
 * */

/** @type {Route[]} */
const routes = [
    {
        url: /^\/posts$/,
        method: 'GET',
        callback: async () => ({
            // TODO: implement
            statusCode: 200,
            body: {},
        }),
    },
    {
        url: /^\/posts\/([a-zA-Z0-9-_]+)$/,
        method: 'GET',
        callback: async () => ({
            // TODO: implement
            statusCode: 200,
            body: {},
        }),
    },
    {
        url: /^\/posts$/,
        method: 'POST',
        callback: async () => ({
            // TODO: implement
            statusCode: 200,
            body: {},
        }),
    }
]

module.exports = {
    routes,
}