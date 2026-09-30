const Button = ({ currentPage, setCurrentPage, setuserdata }) => {
    return (
        <div>
            <div className='shrink-0 flex justify-center items-center p-4 gap-3 '>
                <button onClick={() => {
                    if (currentPage > 1) {
                        setCurrentPage(currentPage - 1);
                        setuserdata([])
                    }
                }}
                    className='text-sm cursor-pointer px-4 py-3 gap-3 mt-4 bg-amber-400'>prev</button>
                <div className=' text-xl text-amber-200'>page {currentPage}
                </div>
                <button onClick={() => {
                    setCurrentPage(currentPage + 1);
                    setuserdata([])
                }}
                    className='text-sm cursor-pointer px-4 py-3 gap-3 mt-4 bg-amber-400'>next</button>
            </div>
        </div>
    )
}

export default Button