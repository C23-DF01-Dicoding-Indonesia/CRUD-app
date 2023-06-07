const { nanoid } = require('nanoid');
const discussions = require('./discussions');
const { spawn } = require('node:child_process');
const fs = require('fs');
const axios = require('axios');
const FormData = require('formdata');

const addDiscussionHandler = async (request, h) => {
  const { discussion_title, question } = request.payload;
  const id = nanoid(3);
  const insertedAt = new Date().toISOString();
  const query = discussion_title + ' ' + question;

  const childPython = spawn('python', ['./auto-tag.py', query]);

  childPython.stdout.on('data', (data) => {
    console.log(`${data}`);
  });
  childPython.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });
  childPython.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
    // Execute the try block here
    executeTryBlock();
  });
  childPython.on('error', (err) => {
    console.error('Error executing child process:', err);
    reject(err);
  });

  // Function to execute the try block
  const executeTryBlock = () => {
    try {
      const data = fs.readFileSync('./tag.json', 'utf-8');
      const jsonData = JSON.parse(data);
      const tags = jsonData.suggested_tags;

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

    } catch (err) {
      console.error('Error reading JSON file:', err);
      const response = h.response({
        status: 'fail',
        message: 'Error reading JSON file',
      });
      response.code(500);
      return response;
    }
  };
  const response = h.response({
    status: 'success',
    message: 'Discussion is successfully added',
    data: {
      descId: id,
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

// const runChild = (query) => {
//   let datas;
//   const childPython = spawn('python', ['../py/search.py', query]);

//   childPython.stdout.on('data', (data) => {
//     datas = data;
//   });
  
//   childPython.stderr.on('data', (data)=>{
//     console.error(`stderr: ${data}`)
//   });

//   childPython.on('close', (code) => {
//     console.log(`child process exited with code ${code}`)
//     // executeTryBlock();
//     return datas;
//   });
// };

const searchDiscussionHandler = async (request, h) => {
  const { q } = request.query;
  const jsonq = {
    query: q
  }

  let result;
  try {
    console.log("Testing1");
    result = await axios.post('http://127.0.0.1:8080/search', jsonq);
    console.log(result.data.data.length);
  } catch (error) {
    console.error(error);
  }
  console.log("Testing3");
  let arr = [];
  for (let i = 0; i < result.data.data.length; i++){
    console.log("Testing4");
    let temp = {
      id: result.data.data[i].id,
      title: result.data.data[i].title,
      type: result.data.data[i].type,
      content: result.data.data[i].content,
      score: result.data.data[i].score,
    }
    arr.push(temp);
    console.log(arr);
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
