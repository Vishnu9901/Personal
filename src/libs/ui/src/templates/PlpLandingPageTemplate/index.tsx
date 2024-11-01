

export const PLPPageTemplate = () => {
    return <div className="grid grid-cols-2 grid-rows-2 w-full">

        <div className="row-start-1 row-end-2 col-start-1 col-end-3">
            <div>Header Page</div>
           
        </div>
        <div className="grid row-start-2 row-end-3 col-start-1 col-end-3 grid-cols-[20%,2fr] ">
            <div className="col-start-1 col-end-2">SideBar</div>
            <div className="col-start-2 col-end-3">
                <div>Filter option</div>
                <div>PLP List</div>
            </div>
        </div>
    </div>
}