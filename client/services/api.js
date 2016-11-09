angular.module('Instagram')
    .factory('API', function($http) {

      return {
        getFeed: function() {
          return $http.get('https://learnix-instagram.herokuapp.com/api/feed');
        },
        getMediaById: function(id) {
          return $http.get('https://learnix-instagram.herokuapp.com/api/media/' + id);
        },
        likeMedia: function(id) {
          return $http.post('https://learnix-instagram.herokuapp.com/api/like', { mediaId: id });
        }
      }

    });