import React from 'react';
import { Image } from '@ui/atoms/Image';
import Logo from '../../../assets/Logo.svg'
import { Input } from '@ui/atoms/Input';
import './headerSearchBar.styles.scss'
interface SearchBarHeaderProps {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    handleClear: () => void;
    handleSearch: () => void;
    onClose: () => void;
}

const SearchBarHeader: React.FC<SearchBarHeaderProps> = ({ searchQuery, setSearchQuery, handleClear, handleSearch, onClose }) => (
    <div className="headerSearchbar grid grid-cols-12">
        <div className="tm:hidden col-start-1 col-end-3">
            <Image src={Logo} alt='logo' />
        </div>
        <div className="w-full flex col-start-1 lg:col-start-3 col-end-12">
            <div className='relative w-full'>
                <Input
                    type="text"
                    value={searchQuery}
                    onChange={(e: any) => setSearchQuery(e.target.value)}
                    className="border-b border-[#999] focus:outline-none focus:border-b focus:border-[#999] border-t-0 border-l-0 border-r-0 w-full py-2 px-4 font-HeroNewRegular"
                    placeholder="Search..."
                />

                {searchQuery && (
                    <span className="absolute top-2 cursor-pointer inputClear h-6 w-6 inline-block bg-no-repeat right-16" onClick={handleClear}>
                    </span>
                )}
                <span className="absolute top-2 cursor-pointer tm:unset searchIcon h-6 w-6 inline-block bg-no-repeat  right-8" onClick={handleSearch}>
                </span>
            </div>

        </div>
        <div className='flex w-full col-start-12 justify-end self-end'>
            <span
                className="cursor-pointer hover:bg-[#f2f2f2] lg:rounded-[13rem] close-icon bg-no-repeat h-6 w-6 inline-block"
                onClick={onClose}
            >
            </span>
        </div>


    </div>
);

export default SearchBarHeader;
