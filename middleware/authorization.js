const { Author, Review } = require("../models");

async function reviewAuthorization(req, res, next) {
  try {
    const { userId } = req.loginInfo;

    const user = await Author.findByPk(userId);

    if (!user) throw { name: "Forbidden" };

    const { id } = req.params;
    const selectedReview = await Review.findByPk(id);

    if (!selectedReview) throw { name: "Review Not Found" };

    if (selectedReview.authorId !== user.id) throw { name: "Forbidden" };

    next();
  } catch (error) {
    console.log(error);
    next(error);
  }
}

module.exports = { reviewAuthorization };
