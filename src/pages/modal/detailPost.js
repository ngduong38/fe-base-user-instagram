import Modal from 'react-bootstrap/Modal';
import {AiOutlineClose} from "react-icons/ai"
import Card from 'react-bootstrap/Card';


export default function DetailPost({showDetailPost, setShowDetailPost}) {
    const handleClose = () => setShowDetailPost(false);

    return(
        <>
            <Modal
                show={showDetailPost}
                onHide={() => setShowDetailPost(false)}
                // fullscreen={true}
                size="xl"
                dialogClassName="modal-detail-post"
                aria-labelledby="example-custom-modal-styling-title"
                centered={true}
            >  
                <AiOutlineClose className='btn-close' onClick={handleClose}/>
                <Modal.Body className='p-0'>
                    <img src="images/avatar.jpg" className="post-detail-img" alt=""/>
                        <Card.Header>
                            <div className='detail-post-header p-3'>
                                <div className='content-detail-post'>
                                    <div className='img-detail-post'><img className='avatar-detail-post' src='./images/avatar.jpg'></img></div>
                                    <div className='name-detail-post'>
                                        <p>username1</p>
                                    </div>
                                </div>
                                <svg aria-label="More options" className="_ab6-" color="rgb(245, 245, 245)" fill="rgb(245, 245, 245)" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" r="1.5"></circle><circle cx="6" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg>
                            </div>
                            <div className='detail-post-main p-3'>
                                <div className='caption-detail-post'>
                                    <div className='img-detail-post'><img className='avatar-detail-post' src='./images/avatar.jpg'></img></div>
                                    <div className='content-detail-post'>
                                        <p className='caption'>username1 <span>Caption this</span></p>
                                        <span className='time-comment'>10 min</span>
                                    </div>
                                </div>    
                                <div className='caption-detail-post'>
                                <div className='img-detail-post'><img className='avatar-detail-post' src='./images/cover 1.png'></img></div>
                                    <div className='content-detail-post'>
                                        <p className='caption'>username1 <span>Caption this</span></p>
                                        <span className='time-comment'>10 min</span>
                                    </div>
                                </div>
                                <div className='caption-detail-post'>
                                    <div className='img-detail-post'><img className='avatar-detail-post' src='./images/cover 2.png'></img></div>
                                    <div className='content-detail-post'>
                                        <p className='caption'>username1 <span>Caption this</span></p>
                                        <span className='time-comment'>10 min</span>
                                    </div>
                                </div>
                                <div className='caption-detail-post'>
                                    <div className='img-detail-post'><img className='avatar-detail-post' src='./images/cover 3.png'></img></div>
                                    <div className='content-detail-post'>
                                        <p className='caption'>username1 <span>Caption this</span></p>
                                        <span className='time-comment'>10 min</span>
                                    </div>
                                </div>
                            </div>
                            <div className='detail-post-footer p-2'>
                                <div className="footer-icon">
                                        <svg aria-label="Bỏ thích" className="unlike hidden"  color="rgb(255, 48, 64)" fill="rgb(255, 48, 64)" height="24" role="img" viewBox="0 0 48 48" width="24">
                                            <title>Bỏ thích</title>
                                            <path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                                        </svg>
                                    <div className='detail-footer-icon'>
                                        <svg aria-label="Thích" className="like" fill="rgb(245, 245, 245)" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Thích</title><path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path></svg>
                                        <svg aria-label="Bình luận" className="comments" color="rgb(245, 245, 245)" fill="rgb(245, 245, 245)" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Bình luận</title><path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                        <svg aria-label="Chia sẻ bài viết" className="share" color="rgb(245, 245, 245)" fill="rgb(245, 245, 245)" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Chia sẻ bài viết</title><line fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></polygon></svg>
                                    </div>
                                        <svg aria-label="Lưu" className="save" color="rgb(245, 245, 245)" fill="rgb(245, 245, 245)" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Lưu</title><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polygon></svg>
                                </div>
                                <div className="detail-footer-content">
                                    <p className="tym">1.000 likes</p>
                                    <p className="post-time">10 minutes ago</p>
                                </div>
                            </div>
                            <div className='comment-detail-post p-2'>
                                <svg aria-label="Biểu tượng cảm xúc" className="smile" color="rgb(245, 245, 245)" fill="rgb(245, 245, 245)" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Biểu tượng cảm xúc</title><path d="M15.83 10.997a1.167 1.167 0 1 0 1.167 1.167 1.167 1.167 0 0 0-1.167-1.167Zm-6.5 1.167a1.167 1.167 0 1 0-1.166 1.167 1.167 1.167 0 0 0 1.166-1.167Zm5.163 3.24a3.406 3.406 0 0 1-4.982.007 1 1 0 1 0-1.557 1.256 5.397 5.397 0 0 0 8.09 0 1 1 0 0 0-1.55-1.263ZM12 .503a11.5 11.5 0 1 0 11.5 11.5A11.513 11.513 0 0 0 12 .503Zm0 21a9.5 9.5 0 1 1 9.5-9.5 9.51 9.51 0 0 1-9.5 9.5Z"></path></svg>
                                <input type="text" className="comments-box" placeholder="Add a comment"/>
                                <button className="comment-btn">Post</button>
                            </div>
                        </Card.Header>
                </Modal.Body>
            </Modal>
        </>
    )
}