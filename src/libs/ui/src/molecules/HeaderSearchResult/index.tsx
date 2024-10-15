import { useEffect, useState } from 'react'

interface HeaderSearchResultProps {
    query: string
}
export const HeaderSearchResult: React.FC<HeaderSearchResultProps> = ({ query }) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000)
  }, [query])

  return <div className="py-8 lg:pb-0 lg:pt-7 lg:grid grid-cols-12">
    <div className="col-start-3 col-end-10">
      <h3 className="!font-bold tracking-[0.3px] mb-2 font-HeroNewBold">Popular Searches</h3>
      <div className={`${isLoading ? 'flex-col lg:flex-row flex justify-between gap-7' : ''}`}>
        {!isLoading && <ul className="tracking-[0.3px] space-y-2 text-base font-HeroNewLight grid gap-4">
          {
            ['peels', 'acne', 'cleanser', 'neck'].map((item) => (
              <li key={item}>{item}</li>
            ))
          }
                       </ul>}
        {isLoading && (<>
          <div className="">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="bg-gray-300 animate-pulse w-[19rem] h-5 mb-4" />
            ))}
          </div>
          <div className="">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="bg-gray-300 animate-pulse w-[19rem] h-5 mb-4" />
            ))}
          </div>
                       </>)}
      </div>
    </div>
         </div>
}