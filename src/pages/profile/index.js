
export default function ProfileIndex() {

    return(
        <>
        <div className="container-profile">
            <header>
                <div className="avatar-profile">
                    <img src="images/avatar.jpg" className="avatar-img" alt=""/>
                </div>
                <section>
                    <div className="header-profile">
                        <h2>username</h2>
                        <div className="edit-profile">
                            <button>Edit profile</button>
                            <button>View Archive</button>
                            <button>Ad tools</button>
                        </div>
                        <button className="more-option">
                        <svg aria-label="Options" className="x1lliihq x1n2onr6" color="rgb(245, 245, 245)" fill="rgb(245, 245, 245)" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Options</title><circle cx="12" cy="12" fill="none" r="8.635" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle><path d="M14.232 3.656a1.269 1.269 0 0 1-.796-.66L12.93 2h-1.86l-.505.996a1.269 1.269 0 0 1-.796.66m-.001 16.688a1.269 1.269 0 0 1 .796.66l.505.996h1.862l.505-.996a1.269 1.269 0 0 1 .796-.66M3.656 9.768a1.269 1.269 0 0 1-.66.796L2 11.07v1.862l.996.505a1.269 1.269 0 0 1 .66.796m16.688-.001a1.269 1.269 0 0 1 .66-.796L22 12.93v-1.86l-.996-.505a1.269 1.269 0 0 1-.66-.796M7.678 4.522a1.269 1.269 0 0 1-1.03.096l-1.06-.348L4.27 5.587l.348 1.062a1.269 1.269 0 0 1-.096 1.03m11.8 11.799a1.269 1.269 0 0 1 1.03-.096l1.06.348 1.318-1.317-.348-1.062a1.269 1.269 0 0 1 .096-1.03m-14.956.001a1.269 1.269 0 0 1 .096 1.03l-.348 1.06 1.317 1.318 1.062-.348a1.269 1.269 0 0 1 1.03.096m11.799-11.8a1.269 1.269 0 0 1-.096-1.03l.348-1.06-1.317-1.318-1.062.348a1.269 1.269 0 0 1-1.03-.096" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path></svg>
                        </button>
                    </div>
                    <ul className="infor-profile">
                        <li><span>10</span> Posts</li>
                        <li><span>10</span> Followers</li>
                        <li><span>10</span> Following</li>
                    </ul>
                    <div className="name-user-profile">
                        <span>Ten user</span>
                        <br/>
                        <span>Tieu su user</span>
                    </div>
                </section>
            </header>

            <div className='nav-profile'>
                <ul className='list-story-profile'>
                    
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
                </ul>
            </div>

            <div className="option-detail-profile">
                <div className="option-detail">
                    <a href="">
                        <svg aria-label="" className="_ab6-" color="rgb(245, 245, 245)" fill="rgb(245, 245, 245)" height="12" role="img" viewBox="0 0 24 24" width="12"><rect fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="18" x="3" y="3"></rect><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="9.015" x2="9.015" y1="3" y2="21"></line><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="14.985" x2="14.985" y1="3" y2="21"></line><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="21" x2="3" y1="9.015" y2="9.015"></line><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="21" x2="3" y1="14.985" y2="14.985"></line></svg>
                        <span>POSTS</span>
                    </a>
                </div>
                <div className="option-detail">
                    <a href="">
                    <svg aria-label="" className="_ab6-" color="rgb(168, 168, 168)" fill="rgb(168, 168, 168)" height="12" role="img" viewBox="0 0 24 24" width="12"><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polygon></svg>
                        <span>SAVED</span>
                    </a>
                </div>
                <div className="option-detail">
                    <a href="">
                    <svg aria-label="" className="_ab6-" color="rgb(168, 168, 168)" fill="rgb(168, 168, 168)" height="12" role="img" viewBox="0 0 24 24" width="12"><path d="M10.201 3.797 12 1.997l1.799 1.8a1.59 1.59 0 0 0 1.124.465h5.259A1.818 1.818 0 0 1 22 6.08v14.104a1.818 1.818 0 0 1-1.818 1.818H3.818A1.818 1.818 0 0 1 2 20.184V6.08a1.818 1.818 0 0 1 1.818-1.818h5.26a1.59 1.59 0 0 0 1.123-.465Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M18.598 22.002V21.4a3.949 3.949 0 0 0-3.948-3.949H9.495A3.949 3.949 0 0 0 5.546 21.4v.603" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><circle cx="12.072" cy="11.075" fill="none" r="3.556" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle></svg>
                        <span>TAGED</span>
                    </a>
                </div>
            </div>

            <div className="profile-post">
                <div className="profile-detail-post">
                    <div className="row mb-1">
                        <div className="profile-pic col-sm"><img src="images/cover 1.png" alt=""/></div>
                        <div className="profile-pic col-sm"><img src="images/cover 2.png" alt=""/></div>
                        <div className="profile-pic col-sm"><img src="images/cover 3.png" alt=""/></div>
                    </div>
                    <div className="row mb-1">
                        <div className="profile-pic col-sm"><img src="images/cover 4.png" alt=""/></div>
                        <div className="profile-pic col-sm"><img src="images/cover 5.png" alt=""/></div>
                        <div className="profile-pic col-sm"><img src="images/cover 6.png" alt=""/></div>
                    </div>
                    <div className="row mb-1">
                        <div className="profile-pic col-sm"><img src="images/cover 7.png" alt=""/></div>
                        <div className="profile-pic col-sm"><img src="images/cover 8.png" alt=""/></div>
                        <div className="profile-pic col-sm"><img src="images/cover 9.png" alt=""/></div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}