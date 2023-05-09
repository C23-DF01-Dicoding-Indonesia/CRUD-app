const { nanoid } = require("nanoid");
const discussions = require("./discussions")

const addDiscussionHandler = (request, h) => {
    const {discussion_title, question, tags} = request.payload;
    const id = nanoid(16);
    const insertedAt = new Date().toISOString();

    const newDiscussions = {
        id,
        course_id,
        module_name, 
        tutorial_id, 
        discussion_title,
        question,
        tags, 
        insertedAt
    };
    if (discussion_title === undefined) {
        const response = h.response({
            status: "fail",
            message: "Failed to add new discussion. Please enter the title!",
        });
        response.code(400);
        return response;
    }
    if (question === undefined) {
        const response = h.response({
            status: "fail",
            message: "Failed to add new discussion. Please enter the description!",
        });
        response.code(400);
        return response;
    }
    const response = h.response({
        status: "success",
        message: "Discussion is successfully added",
        data: {
            descId: id,
        },
      });
      discussions.push(newDiscussions);
      response.code(201);
      return response;
};

const editDiscussionByIdHandler = (request, h) => {
    const { id } = request.params;
    const { discussion_title, question, tags } = request.payload;

    const index = discussions.findIndex((note) => note.id === id);

    if (!discussion_title |!question | !tags) {
        messages = 'Failed to update the discussion!';
        const response = h.response({
            status: 'fail',
            message: messages,
          });
        response.code(400);
        return response;
    }

    if (index !== -1) {
        discussions[index] = {
            ...discussions[index],
            course_id,
            module_name, 
            tutorial_id, 
            discussion_title,
            question,
            tags, 
            insertedAt
        };

        const response = h.response({
            status: "success",
            message: "Discussion is succesfully updated!",
            });
        response.code(200);
        return response;
    }

    const response = h.response({
        status: "fail",
        message: "Gagal memperbarui buku. Id tidak ditemukan",
      });
      response.code(404);
      return response;
};

const getAllDiscussionsHandler = () => ({
    status: 'success',
    data: {
        discussions,
    },
  });



// const getAllDiscussions = (request, h) => {
//     const {tag, title} = request.query;
//     const discussion = discussion.map(({id, publisher, title, tag, description}) => ({id, publisher, title, tag, description}));
// }

module.exports = {
    addDiscussionHandler,
    editDiscussionByIdHandler,
    getAllDiscussionsHandler,
};