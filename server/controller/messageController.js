const messageInfo = require('../../db/index').messageInfo;

module.exports = {
  getMessages: (req, res) => {
    messageInfo.findAll({
      where: {fridgeId: req.params.id}
    })
      .then(data => {
        res.status(200).send(data);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  },

  postMessages: (req, res) => {
    console.log(req.body);
    messageInfo.create({
      messageText: req.body.data.messages,
      fridgeId: req.body.data.fridgeId,
      userId: req.body.data.userId,
    })
      .then((data) => {
        res.status(201).send(data);
      })
      .catch((err) => {
        res.status(404).send(err);
      });
  },

  updateMessages: (req, res) => {
    messageInfo.findOne({
      where: {id: req.params.id}
    })
      .then((data) => {
        data.updateAttributes({
          messageText: req.body.messageText 
        }) 
          .then((updated) => {
            res.status(202).send({id: updated.id, message: updated.messageText});
          })
          .catch((err) => {
            res.status(400).send(err);
          })
      })
      .catch((err) => {
        res.status(500).send(err);
      })
  },

  deleteMessages: (req, res) => {
    messageInfo.destroy({
      where: {id: req.params.messageId}
    })
      .then(() => {
        res.status(202).send({id: req.params.messageId})
      })
      .catch((err) => {
        res.status(404).send(err);
      })
  } 

}