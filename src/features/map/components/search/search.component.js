import React, { useContext, useEffect, useState } from 'react';
import { Searchbar } from 'react-native-paper';

import { LocationContext } from '../../../../services/location/location.context';

import { StyledSearchbarView } from './search.component.styles';

export const AppSearchBar = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <StyledSearchbarView>
      <Searchbar
        placeholder="Search for a location"
        icon="map"
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={text => {
          setSearchKeyword(text);
        }}
      />
    </StyledSearchbarView>
  );
};
