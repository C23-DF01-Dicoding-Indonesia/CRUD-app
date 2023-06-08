const { nanoid } = require('nanoid');
const discussions = require('./discussions');
const axios = require('axios');

const addDiscussionHandler = async (request, h) => {
  const { discussion_title, question } = request.payload;
  const id = nanoid(3);
  const insertedAt = new Date().toISOString();
  const q = discussion_title + ' ' + question;
  let result;
  const jsonq = {
    query: q
  }

  try {
    result = await axios.post('https://autotag-api-4mzlrxm2sa-et.a.run.app/discussion', jsonq);
  }
  catch (error) {
    console.error(error);
  }

  const tags = result.data;

  const newDiscussions = {
    id,
    discussion_title,
    question,
    tags,
    insertedAt,
  };

  if (discussion_title === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Failed to add new discussion. Please enter the title!',
    });
    response.code(400);
    return response;
  }

  if (question === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Failed to add new discussion. Please enter the description!',
    });
    response.code(400);
    return response;
  }

  discussions.push(newDiscussions);

  const response = h.response({
    status: 'success',
    message: 'Discussion is successfully added',
    data: {
      tags,
    },
  });
  response.code(201);
  return response;
};

const editDiscussionByIdHandler = (request, h) => {
  const { id } = request.params;
  const { discussion_title, question, tags } = request.payload;

  const index = discussions.findIndex((note) => note.id == id);

  if (!discussion_title | !question | !tags) {
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
      insertedAt,
    };

    const response = h.response({
      status: 'success',
      message: 'Discussion is succesfully updated!',
    });
    response.code(200);
    return response;
  }

  const response = h.response({
    status: 'fail',
    message: 'Failed to update the discussion! Discussion ID not found.',
  });
  response.code(404);
  return response;
};

const deleteDiscussionByIdHandler = (request, h) => {
  const { id } = request.params;
  const index = discussions.findIndex((note) => note.id == id);

  if (index !== -1) {
    discussions.splice(index, 1);
    const response = h.response({
      status: 'success',
      message: 'Discussion is succesfully deleted!',
    });
    response.code(200);
    return response;
  }
  const response = h.response({
    status: 'fail',
    message: 'Failed to delete the discussion! Discussion ID not found.',
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

const searchDiscussionHandler = async (request, h) => {
  const { q } = request.query;
  let result;
  let arr = [];
  const jsonq = {
    query: q
  }

  try {
    result = await axios.post('https://search-api-4mzlrxm2sa-et.a.run.app/search', jsonq);
  }
  catch (error) {
    console.error(error);
  }

  for (let i = 0; i < result.data.data.length; i++){
    let temp = {
      id: result.data.data[i].id,
      title: result.data.data[i].title,
      type: result.data.data[i].type,
      content: result.data.data[i].content,
      score: result.data.data[i].score,
    }
    arr.push(temp);
  }

  const response = h.response({
    status: 'success',
    message: 'yeay',
    data: arr,
  });
  return response;
};

const getDiscussionByIdHandler = (request, h) => {
  const { id } = request.params;

  const discussion = discussions.filter((n) => n.id == id)[0];
  
  if (discussion !== undefined) {
    return {
      status: 'success',
      data: {
        discussion,
      },
    };
  }

  const response = h.response({
    status: 'fail',
    message: 'Discussion is not found',
  });
  response.code(404);
  return response;
};

module.exports = {
  addDiscussionHandler,
  editDiscussionByIdHandler,
  getAllDiscussionsHandler,
  searchDiscussionHandler,
  getDiscussionByIdHandler,
  deleteDiscussionByIdHandler,
};
