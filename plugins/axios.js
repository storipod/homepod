export default function ({ $axios, store }) {
  console.log('here')
  $axios.onRequest((config) => {
    const token = store.getters['app/getAuthToken'];
    if (token) {
      config.headers.common['Authorization'] = `Bearer ${token}`; // Set the Authorization header
    }
    return config;
  });
}
