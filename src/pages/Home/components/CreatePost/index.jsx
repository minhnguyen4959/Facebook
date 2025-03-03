import React, { useState, useRef } from 'react';
import { FaUserCircle, FaVideo, FaImage, FaSmile, FaTimes } from 'react-icons/fa';
import {
  CreatePostCard,
  PostInputWrapper,
  UserAvatar,
  PostInput,
  PostActions,
  VideoButton,
  PhotoButton,
  FeelingButton,
  CreatePostModal,
  ModalContent,
  ModalHeader,
  ModalTitle,
  CloseButton,
  ModalBody,
  PostTextarea,
  ModalFooter,
  PostButton,
  ImagePreviewContainer,
  ImagePreview,
  RemoveImageButton,
  FileInput,
  AddMediaContainer,
  AddMediaButton,
  AddMediaText
} from './styles';

const CreatePost = () => {
  const [showModal, setShowModal] = useState(false);
  const [postContent, setPostContent] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleCreatePost = () => {
    if (postContent.trim() === '' && !selectedImage) return;
    
    // Xử lý tạo bài đăng ở đây
    console.log('Tạo bài đăng:', { text: postContent, image: selectedImage });
    
    // Reset form
    setPostContent('');
    setSelectedImage(null);
    setShowModal(false);
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  return (
    <>
      <CreatePostCard>
        <PostInputWrapper>
          <UserAvatar>
            <FaUserCircle />
          </UserAvatar>
          <PostInput onClick={() => setShowModal(true)}>
            Đức ơi, bạn đang nghĩ gì thế?
          </PostInput>
        </PostInputWrapper>
        <PostActions>
          <VideoButton>
            <FaVideo />
            Video trực tiếp
          </VideoButton>
          <PhotoButton onClick={() => {
            setShowModal(true);
            setTimeout(() => {
              triggerFileInput();
            }, 300);
          }}>
            <FaImage />
            Ảnh/video
          </PhotoButton>
          <FeelingButton>
            <FaSmile />
            Cảm xúc/hoạt động
          </FeelingButton>
        </PostActions>
      </CreatePostCard>
      
      {showModal && (
        <CreatePostModal>
          <ModalContent>
            <ModalHeader>
              <ModalTitle>Tạo bài viết</ModalTitle>
              <CloseButton onClick={() => {
                setShowModal(false);
                setSelectedImage(null);
              }}>×</CloseButton>
            </ModalHeader>
            <ModalBody>
              <PostTextarea 
                placeholder="Đức ơi, bạn đang nghĩ gì thế?"
                value={postContent}
                onChange={(e) => setPostContent(e.target.value)}
                autoFocus
              />
              
              {selectedImage ? (
                <ImagePreviewContainer>
                  <ImagePreview src={selectedImage} alt="Preview" />
                  <RemoveImageButton onClick={handleRemoveImage}>
                    <FaTimes />
                  </RemoveImageButton>
                </ImagePreviewContainer>
              ) : (
                <AddMediaContainer>
                  <AddMediaButton onClick={triggerFileInput}>
                    <FaImage />
                    <AddMediaText>Thêm ảnh/video</AddMediaText>
                  </AddMediaButton>
                </AddMediaContainer>
              )}
              
              <FileInput 
                type="file" 
                ref={fileInputRef}
                onChange={handleImageChange}
                accept="image/*"
              />
            </ModalBody>
            <ModalFooter>
              <PostButton 
                disabled={postContent.trim() === '' && !selectedImage}
                onClick={handleCreatePost}
              >
                Đăng
              </PostButton>
            </ModalFooter>
          </ModalContent>
        </CreatePostModal>
      )}
    </>
  );
};

export default CreatePost; 