
const podcastsService = require('../../Services/podcasts');

exports.getPotcasts = (req, res) => {

    podcastsService.getPotcasts()
    .then((response) => {
      res.status(response.status).json(response.data);
    }).catch((error) => {
      res.status(500).json({
        message: error.toString(),
      });
    });
};
