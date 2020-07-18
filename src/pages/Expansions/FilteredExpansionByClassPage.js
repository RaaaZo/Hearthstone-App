import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

const FilteredExpansionByClassPage = () => {
  const data = useSelector((state) => state.fetchExpansionsSet.oneClassCards);
  const isLoading = useSelector((state) => state.fetchExpansionsSet.loading);

  useEffect(() => {}, []);

  return (
    <div>
      {isLoading ? (
        <p>laduje sie</p>
      ) : (
        data.map((item) => (
          <div key={item.cardId}>
            <p>{item.name}</p>
            <p>{item.type}</p>
            <img
              src={`https://art.hearthstonejson.com/v1/render/latest/plPL/256x/${item.cardId}.png`}
              alt='tutaj jestem'
            />
          </div>
        ))
      )}
    </div>
  );
};

export default FilteredExpansionByClassPage;
