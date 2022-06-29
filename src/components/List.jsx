function List(props){

    return(
        <div>
            <div class="flex" id="contact-info">
                <h3>{props.name}</h3>
                <p>Home: {props.homeNumber}</p>
                <p>Mobile: {props.mobileNumber}</p>
            </div>
        </div>
    )
}

export default List;