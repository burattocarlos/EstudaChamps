import React from 'react';

const MainContent = () => {
  return (
    <div className="flex-grow container mx-auto px-4 py-8 flex">
      {/* Video Player Section */}
      <div className="w-3/4 pr-8">
        <div className="bg-black aspect-video rounded-lg">
          {/* In a real application, a video player component would go here */}
        </div>
      </div>

      {/* Sidebar with Categories */}
      <div className="w-1/4">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="font-bold mb-4">CATEGORIAS</h3>
          <ul>
            <li className="flex items-center mb-3">
              <div className="w-8 h-8 bg-red-600 rounded-md mr-3"></div>
              <span>Categoria 1</span>
            </li>
            <li className="flex items-center mb-3">
              <div className="w-8 h-8 bg-red-600 rounded-md mr-3"></div>
              <span>Categoria 2</span>
            </li>
            <li className="flex items-center mb-3">
              <div className="w-8 h-8 bg-red-600 rounded-md mr-3"></div>
              <span>Categoria 3</span>
            </li>
            <li className="flex items-center">
              <div className="w-8 h-8 bg-red-600 rounded-md mr-3"></div>
              <span>Categoria 4</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
