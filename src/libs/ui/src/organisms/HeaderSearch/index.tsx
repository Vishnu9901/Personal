import SearchBarHeader from '@ui/molecules/HeaderSearchBar'
import { HeaderSearchResult } from '@ui/molecules/HeaderSearchResult';
import { useState } from 'react';

interface HeaderSearchProps {
    onClose: () => void;
}
export const HeaderSearch: React.FC<HeaderSearchProps> = ({ onClose }) => {

  const [searchQuery, setSearchQuery] = useState('');
  const [closing, setClosing] = useState(false);

  const handleSearch = () => {
    if (searchQuery.trim() !== '') {
      setSearchQuery('');
    }
  };

  const handleClear = () => {
    setSearchQuery('');
  };

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      setClosing(false);
      onClose();
    }, 300);
  };
  return (
    <div className={`fixed !ml-0 h-[360px] inset-0 flex items-start justify-center z-50  overflow-y-scroll  ${closing ? 'animate-slideOut' : 'animate-slideIn'}`}>
      <div className={`bg-white px-8 lg:px-14 w-full h-[24rem] max-h-[119vh] shadow-lg transform duration-300 ${closing ? 'slide-out' : 'slide-in'} pt-8`}>
        <SearchBarHeader searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          handleClear={handleClear}
          handleSearch={handleSearch}
          onClose={handleClose}>
        </SearchBarHeader>
        <HeaderSearchResult query={searchQuery}></HeaderSearchResult>
      </div>
    </div>
  )
}