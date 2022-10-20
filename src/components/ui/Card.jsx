const Card = ({ children, className: classes }) => {
    return (
        <section className={`relative px-4 sm:px-6 lg:px-8 py-6 bg-white rounded-md drop-shadow-lg mb-6 ${classes}`}>
            {children}
        </section>
    )
}

export default Card;