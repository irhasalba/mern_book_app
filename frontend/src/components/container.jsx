export function Container({ children }) {
    return (
        <>
            <div className="card bg-base-100 w-full shadow-md mx-3">
                <div className="card-body">
                    {children}
                </div>
            </div>
        </>
    )
}