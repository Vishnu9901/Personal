import React from 'react';
import searchIcon from '../../../assets/searchIcon.svg';
import clearIcon from '../../../assets/clearIcon.svg';
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
    <div className="flex items-center justify-between headerSearchbar">
        <div className="tm:hidden self-end">
            <Image src={Logo} alt='logo' />
        </div>
        <div className="relative flex-1 pb-[35px] tm:pb-0 text-center">
            <div className='lg:w-[55rem] relative mx-auto'>
                <Input
                    type="text"
                    value={searchQuery}
                    onChange={(e: any) => setSearchQuery(e.target.value)}
                    className="lg:w-[55rem] border-b border-[#999] focus:outline-none focus:border-b focus:border-[#999] border-t-0 border-l-0 border-r-0 w-full py-2 px-4 font-HeroNewRegular tm:w-[90%]"
                    placeholder="Search..."
                />

                {searchQuery && (
                    <span className="absolute top-2 cursor-pointer inputClear h-6 w-6 inline-block bg-no-repeat right-16" onClick={handleClear}>
                        {/* <Image src={clearIcon} alt="Clear Search" className="relative right-[4rem] top-[0.2rem] tm:!right-[3rem]" /> */}
                    </span>
                )}
                <span className="absolute top-2 cursor-pointer tm:unset searchIcon h-6 w-6 inline-block bg-no-repeat  right-8" onClick={handleSearch}>
                    {/* <Image src={searchIcon} alt="searchIcon" className="relative right-[1.75rem]" /> */}
                </span>
            </div>

        </div>
        <div className='self-end'>
            <span
                className="cursor-pointer hover:bg-[#f2f2f2] lg:rounded-[13rem] close-icon bg-no-repeat h-6 w-6 inline-block"
                onClick={onClose}
            >
            </span>
        </div>


    </div>
);

export default SearchBarHeader;
