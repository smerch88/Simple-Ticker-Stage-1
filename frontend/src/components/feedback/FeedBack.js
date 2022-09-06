

const FeedBack = () => {
    return (
        <div className="container">
            <div className="feedback">
                <div className="feedback__form">
                    <div className="feedback__header">Feedback form</div>
                    <form action="#" className="feed-form">
                        <input type="text" placeholder="Name"/>
                        <input type="number" placeholder="Surname"/>
                        {/* <textarea name="" id="" cols="30" rows="10" placeholder="Comment"></textarea> */}
                        <input type="text" placeholder="password"/>
                        <button className="btn btn_long" type="submit">send</button>
                    </form>
                </div>
                <div className="feedback__text">
                    <p>IF YOU HAVE ANY QUESTIONS OR DO NOT UNDERSTAND, YOU CAN GO TO THE FREQUENTLY ASKED QUESTIONS SECTION OR USE THE FEEDBACK FORM</p>
                    <button className="btn">More</button>
                </div>
            </div>
        </div>
    )
}

export default FeedBack;