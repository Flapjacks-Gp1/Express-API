module.exports = {
  index: function(req, res) {
    var response

    var members_list = [
      {
        name: 'luqman',
        age: 26,
        email: 'luqman@gmail.com'
      },
      {
        name: 'gaby',
        age: 27,
        email: 'gaby@gmail.com'
      },
      {
        name: 'jonathan',
        age: 27,
        email: 'jonathan@gmail.com'
      },
      {
        name: 'sabrina',
        age: 27,
        email: 'sabrina@gmail.com'
      },
      {
        name: 'anu',
        age: 27,
        email: 'anu@gmail.com'
      },
    ];

    res.json(members_list);
  }
}
