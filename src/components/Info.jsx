import React from 'react';

const Info = () => {
  return (
    <div className="container mx-auto px-4 pb-8 flex space-x-8">
      {/* Info Box 1 */}
      <div className="w-1/2 bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center">
          <div className="w-12 h-12 bg-red-600 rounded-md mr-4"></div>
          <div>
            <h4 className="font-bold">Título do Informativo 1</h4>
            <p className="text-gray-600">Descrição breve sobre o informativo da empresa.</p>
          </div>
        </div>
      </div>

      {/* Info Box 2 */}
      <div className="w-1/2 bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center">
          <div className="w-12 h-12 bg-red-600 rounded-md mr-4"></div>
          <div>
            <h4 className="font-bold">Título do Informativo 2</h4>
            <p className="text-gray-600">Descrição breve sobre o informativo da empresa.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
