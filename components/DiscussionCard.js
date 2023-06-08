import React from 'react';

const DiscussionCard = ({searchResults})=> {
  return(
    searchResults? searchResults.map((obj, i) => <DiscussionCards {...obj} key={i} />) : 'LOADING...'
  );
}

const DiscussionCards = ({title, content, type, score}) => {
  return (
    <div className="w-full md:w-1/2 lg:w-full xl:w-full p-2">
      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold py-2">{title}</h2>
        <p className="text-xl text-gray-700 mb-4">{content}</p>
        <div className="flex flex-wrap">
          <span className="text-gray-700 text-base mr-2 mb-2 bg-slate-300 px-2 rounded-md">{type}</span>
          <span className="text-gray-700 text-base mr-2 mb-2 bg-slate-300 px-2 rounded-md">Relevance score: {score}</span>
        </div>
      </div>
    </div>
  );
};

export default DiscussionCard;
