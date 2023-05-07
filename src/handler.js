const {nanoid} = require("nanoid");

const addDiscussionHandler = (request, h) => {
    const {title, description, tag} = request.payload;
    const id = nanoid(16);
    const insertedAt = new Date().toISOString();

    const newDiscussions = {
        id,
        title, 
        description, 
        tag,
        insertedAt,
    };
    if (title === undefined) {
        const response = h.response({
            status: "fail",
            message: "Failed to add new discussion. Please enter the title!",
        });
        response.code(400);
        return response;
    }
    if (description === undefined) {
        const response = h.response({
            status: "fail",
            message: "Failed to add new discussion. Please enter the description!",
        });
        response.code(400);
        return response;
    }
    const response = h.response({
        status: "success",
        message: "Description is successfully added",
        data: {
            descId: id,
        },
      });
      discussions.push(newDiscussions);
      response.code(201);
      return response;
};
const getAllDiscussions = (request, h) => {
    const {tag, title} = request.query;
    const discussion = discussion.map(({id, publisher, title, tag, description}) => ({id, publisher, title, tag, description}));
}

module.exports = {addDiscussionHandler};