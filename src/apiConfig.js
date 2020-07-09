let apiUrl;
const apiUrls = {
  production: 'https://hcih-rails-api.herokuapp.com/',
  development: 'http://localhost:4741'
};

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development;
} else {
  apiUrl = apiUrls.production;
}

export default apiUrl;
