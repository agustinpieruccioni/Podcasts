
class Service {
    static getPotcasts() {
      const uri = 'https://api.audioboom.com/channels/recommended';
      fetch(uri)
        .then(response => response.json)
        .then((responseJson) => {return responseJson;})
        .catch((err) => {
          logger.error(`Error to get ${uri}`, {
            errorMessage: 'Server Error.',
            stack: err.stack,
          });
          return transform.parseError(err);
        });
    }
  }
  
  module.exports = Service;