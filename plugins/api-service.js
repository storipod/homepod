import UserApiService from '~/services/UserApiService';
import StoriApiService from '~/services/StoriApiService';

export default ({ $axios }, inject) => {
  // Create an instance of ApiService with axios
  const userApiService = new UserApiService($axios);
  const storiApiService = new StoriApiService($axios);

  // Inject 'apiService' to make it available in context, Vue instances, and Vuex actions
  inject('userApiService', userApiService);
  inject('storiApiService', storiApiService);
};
