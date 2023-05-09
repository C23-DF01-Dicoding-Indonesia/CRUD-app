const{addDiscussionHandler, editDiscussionByIdHandler, getAllDiscussionsHandler} = require("./handler");

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
        handler: () => {},
    },
    {
        method: 'PUT',
        path: '/discussion/{id}',
        handler: editDiscussionByIdHandler,
    },
    {
        method: 'DELETE',
        path: '/discussion/{id}',
        handler: () => {},
    },
    
];
module.exports = routes;