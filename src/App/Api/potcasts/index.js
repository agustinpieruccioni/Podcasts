
const { getPotcasts } = require('./controller');

router.get('/', getPotcasts);

module.exports = router;
