const { generateString, verifyToken } = require("../utils/global");
const graphqlInfo = require("graphql-fields");

const movies = async function(parent, args, context, info) {
  const fields = graphqlInfo(info);
  if (fields.scoutbase_rating) {
    verifyToken(context.request.get("Authorization"));
  }
  return await context.findAllMovies();
};

const onemovie = async function(parent, args, context, info) {
  const fields = graphqlInfo(info);
  if (fields.scoutbase_rating) {
    verifyToken(context.request.get("Authorization"));
  }

  const movie = await context.findMovieByTitle(args.title);

  if (!movie) {
    throw new Error("Movie is not found with the title");
  }
  return movie;
};
module.exports = {
  movies,
  onemovie,
};
