var members = require('../../members.json')
module.exports = {
  index: function(req, res) {
    res.json(members);
  },
  show: function(req, res) {
for (let i = 0; i < members.length; i++) {
      if (members[i].name === req.params.name) {
        var user = members[i];
        return res.json(user)
      }
    }

  }
}
