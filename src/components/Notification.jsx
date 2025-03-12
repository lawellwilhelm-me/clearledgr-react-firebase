const Notification = ({ message, type }) => {
    if (message === null) return 

    return ( 
        <p className={`notification ${type}`}>{message}</p>
     )
}

export default Notification