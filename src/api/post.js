import axios from 'axios';

const { REACT_APP_API_URL, REACT_APP_API_PORT, REACT_APP_API_DCARD_URL } =
  process.env;

const baseUrl = `${REACT_APP_API_URL}:${REACT_APP_API_PORT}?u=${REACT_APP_API_DCARD_URL}`;

/**
 * @typedef {Object} Post
 * @property {number} id
 * @property {string} title
 * @property {string} excerpt
 * @property {string} createdAt
 * @property {number} commentCount
 * @property {number} likeCount
 * @property {string} forumName
 */

/**
 * getPosts
 * @param {number} [lastId]
 * @param {boolean} [popular=false]
 * @returns {Promise<Post[]>}
 */
export const getPosts = async (lastId = '', popular = true) => {
  const url = `${baseUrl}/posts?popular=${popular}${
    lastId ? `&before=${lastId}` : ''
  }`;
  const response = await axios.get(url);
  return response.data || [];
};
