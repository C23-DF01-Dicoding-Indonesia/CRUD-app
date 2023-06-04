import React from 'react';

const DiscussionCard = ({ discussionTitle, question, tags }) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/3 p-2">
      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold">{discussionTitle}</h2>
        <p className="text-gray-700 mb-4">{question}</p>
        <div className="flex flex-wrap">
          {tags.map((tag, index) => (
            <span key={index} className="text-gray-700 text-sm mr-2 mb-2">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiscussionCard;
