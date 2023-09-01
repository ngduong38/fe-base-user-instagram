import MainPost from "./home/post"

export default function Home (){


    return(
        <>
        <div className="nav">
                <div className="wrapper">
                    <div className="left-col">
                        <div className="status-wrapper">
                            <div className="status-card">
                                <div className="profile-pic"><img src="images/cover 1.png" alt=""/></div>
                                <p className="username">username_1</p>
                            </div>
                            <div className="status-card">
                                <div className="profile-pic"><img src="images/cover 2.png" alt=""/></div>
                                <p className="username">username_2</p>
                            </div>
                            <div className="status-card">
                                <div className="profile-pic"><img src="images/cover 3.png" alt=""/></div>
                                <p className="username">username_3</p>
                            </div>
                            <div className="status-card">
                                <div className="profile-pic"><img src="images/cover 4.png" alt=""/></div>
                                <p className="username">username_4</p>
                            </div>
                            <div className="status-card">
                                <div className="profile-pic"><img src="images/cover 5.png" alt=""/></div>
                                <p className="username">username_5</p>
                            </div>
                            <div className="status-card">
                                <div className="profile-pic"><img src="images/cover 6.png" alt=""/></div>
                                <p className="username">username_6</p>
                            </div>
                            <div className="status-card">
                                <div className="profile-pic"><img src="images/cover 7.png" alt=""/></div>
                                <p className="username">username_7</p>
                            </div>
                            <div className="status-card">
                                <div className="profile-pic"><img src="images/cover 8.png" alt=""/></div>
                                <p className="username">username_8</p>
                            </div>
                        </div>
                        <MainPost/> 
                    </div>
                   
                    <div className="right-col">
                        <div className="profile-info">
                            <div className="profile-pic">
                                <img src="images/avatar.jpg" className="avatar-img" alt=""/>
                                <div>
                                    <p className="username">username</p>
                                    <p className="name">username_1</p>
                                </div>
                            </div>
                            <button className="switch">Switch</button>
                        </div>
                        <div className="suggestion">
                            <p className="sugges">Suggestions for you</p>
                            <button className="see" >See All</button>
                        </div>
                        <div className="friend-info">
                            <div className="profile-pic">
                                <img src="images/avatar.jpg" className="avatar-img" alt=""/>
                                <div>
                                    <p className="username">username</p>
                                    <p className="name">username_1</p>
                                </div>
                            </div>
                            <button className="switch">Follow</button>
                        </div>
                        <div className="friend-info">
                            <div className="profile-pic">
                                <img src="images/avatar.jpg" className="avatar-img" alt=""/>
                                <div>
                                    <p className="username">username</p>
                                    <p className="name">username_1</p>
                                </div>
                            </div>
                            <button className="switch">Follow</button>
                        </div>
                        <div className="friend-info">
                            <div className="profile-pic">
                                <img src="images/avatar.jpg" className="avatar-img" alt=""/>
                                <div>
                                    <p className="username">username</p>
                                    <p className="name">username_1</p>
                                </div>
                            </div>
                            <button className="switch">Follow</button>
                        </div>
                        <div className="friend-info">
                            <div className="profile-pic">
                                <img src="images/avatar.jpg" className="avatar-img" alt=""/>
                                <div>
                                    <p className="username">username</p>
                                    <p className="name">username_1</p>
                                </div>
                            </div>
                            <button className="switch">Follow</button>
                        </div>
                        <div className="friend-info">
                            <div className="profile-pic">
                                <img src="images/avatar.jpg" className="avatar-img" alt=""/>
                                <div>
                                    <p className="username">username</p>
                                    <p className="name">username_1</p>
                                </div>
                            </div>
                            <button className="switch">Follow</button>
                        </div>
                        <div className="friend-info">
                            <div className="profile-pic">
                                <img src="images/avatar.jpg" className="avatar-img" alt=""/>
                                <div>
                                    <p className="username">username</p>
                                    <p className="name">username_1</p>
                                </div>
                            </div>
                            <button className="switch">Follow</button>
                        </div>

                    </div>
                    
                </div>
        </div>
        
            
        </>
    )
}