import React,{useState,useEffect} from 'react';
import './index.css';
import {connect} from 'react-redux';
import {newPostFunction} from '../../store/actions/newPostAction';

function FeedNewPost(props) {   
    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState()
    const [text_content, setContent] = useState(' ');

    useEffect( () => {
        if (!selectedFile) {
            setPreview(undefined);
            return
        }
        const objectUrl = URL.createObjectURL(selectedFile);
        setPreview(objectUrl)
        return () => URL.revokeObjectURL(objectUrl)
    }   , [selectedFile])

    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }

     setSelectedFile(e.target.files[0]);
    }

    const newPostHandler = (e,text_content) => {
        e.preventDefault();
        const data = {
            title: "post title",
            text_content,
            images:preview,
            link:'',
        };
        props.dispatch(newPostFunction(data,props));
      }  
      
         return( 
            <div className="pop_up">
                <div className="pop_up_close">
                    <button onClick={() => props.closePopUp()}>X</button>  
                    <div className="pop_up_inner">
                        <div className="pop_up_container">
                            <div className="pop_up_left">          
                                <img src={require('../../assets/images/users/jennifer.png')} id="profilepic" alt="profile pic" />
                            </div>
                            <div className="pop_up_right">
                                <form className="new_post_form" onSubmit={newPostHandler}>
                                    <textarea name='new_post' type='text' defaultValue={props.props.content.content} onChange={(e) => {setContent(e.currentTarget.value)}} ></textarea>
                                    <img src={preview} alt=" " id="uploadimage" />
                                </form>
                            </div>
                        </div>
                        <div className="pop_up_footer">
                            <div className="pop_up_footer_left">
                                <div className="img_upload">  
                                    <label htmlFor="uploadimg"><img alt=" " src={require('../../assets/images/images.png')}/> </label> 
                                    <input type='file' id="uploadimg" onChange={onSelectFile}/>
                                </div>
                            </div>
                            <div className="pop_up_footer_right">
                                <img src={require('../../assets/images/send_posts.png')} alt="send" onClick={(e)=>newPostHandler(e,text_content)} />
                            </div>         
                        </div>
                    </div>
                </div>
            </div>
            )
    }

const mapStateToProps = state => {
    return {
 ...state,
      };
    };   

export default connect(mapStateToProps)(FeedNewPost);       
