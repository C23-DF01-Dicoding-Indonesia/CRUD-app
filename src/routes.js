const{ 
    addDiscussionHandler,
    editDiscussionByIdHandler,
    getAllDiscussionsHandler,
    searchDiscussionHandler,
    getDiscussionByIdHandler,
    deleteDiscussionByIdHandler
} = require("./handler");

const routes = [
    {
        method: 'POST',
        path: '/discussion',
        handler: addDiscussionHandler,
    },
    {
        method: 'GET',
        path: '/discussion',
        handler: getAllDiscussionsHandler,
    },
    {
        method: 'GET',
        path: '/discussion/{id}',
        handler: getDiscussionByIdHandler,
    },
    {
        method: 'GET',
        path: '/discussion/search',
        handler: searchDiscussionHandler,
    },
    {
        method: 'PUT',
        path: '/discussion/{id}',
        handler: editDiscussionByIdHandler,
    },
    {
        method: 'DELETE',
        path: '/discussion/{id}',
        handler: deleteDiscussionByIdHandler,
    },
    
];
module.exports = routes;