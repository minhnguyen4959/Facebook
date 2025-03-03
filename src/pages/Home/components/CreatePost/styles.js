import styled from 'styled-components';

export const CreatePostCard = styled.div`
  background-color: ${({ theme }) => theme.colors.card.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.colors.card.shadow};
  padding: 12px 16px;
  margin-bottom: 16px;
  transition: background-color ${({ theme }) => theme.transitions.normal} ease;
`;

export const PostInputWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 12px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.divider};
  margin-bottom: 12px;
`;

export const UserAvatar = styled.div`
  width: 40px;
  height: 40px;
  margin-right: 8px;
  color: ${({ theme }) => theme.colors.icon};
  font-size: 40px;
  display: flex;
  align-items: center;
`;

export const PostInput = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.input.background};
  border-radius: 20px;
  padding: 8px 12px;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 17px;
  cursor: pointer;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.hover.background};
  }
`;

export const PostActions = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PostActionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  border-radius: 4px;
  padding: 8px;
  flex: 1;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 15px;
  font-weight: 600;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.hover.background};
  }
  
  svg {
    margin-right: 8px;
    font-size: 18px;
  }
`;

export const VideoButton = styled(PostActionButton)`
  svg {
    color: #f3425f;
  }
`;

export const PhotoButton = styled(PostActionButton)`
  svg {
    color: #45bd62;
  }
`;

export const FeelingButton = styled(PostActionButton)`
  svg {
    color: #f7b928;
  }
`;

export const CreatePostModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.modal.overlay};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background-color: ${({ theme }) => theme.colors.modal.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.colors.modal.shadow};
  width: 500px;
  max-width: 100%;
  transition: background-color ${({ theme }) => theme.transitions.normal} ease;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.divider};
  position: relative;
`;

export const ModalTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const CloseButton = styled.button`
  position: absolute;
  right: 16px;
  background-color: ${({ theme }) => theme.colors.input.background};
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.text.primary};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.hover.background};
  }
`;

export const ModalBody = styled.div`
  padding: 16px;
`;

export const PostTextarea = styled.textarea`
  width: 100%;
  border: none;
  resize: none;
  font-size: 18px;
  min-height: 150px;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.text.primary};
  
  &:focus {
    outline: none;
  }
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`;

export const ModalFooter = styled.div`
  padding: 16px;
  border-top: 1px solid ${({ theme }) => theme.colors.divider};
`;

export const PostButton = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: 6px;
  padding: 8px 0;
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.hover.primaryButton};
  }
  
  &:disabled {
    background-color: ${({ theme }) => theme.colors.divider};
    color: ${({ theme }) => theme.colors.text.disabled};
    cursor: not-allowed;
  }
`;

export const ImagePreviewContainer = styled.div`
  position: relative;
  margin-top: 16px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  overflow: hidden;
  max-height: 300px;
`;

export const ImagePreview = styled.img`
  width: 100%;
  max-height: 300px;
  object-fit: contain;
`;

export const RemoveImageButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

export const FileInput = styled.input`
  display: none;
`;

export const AddMediaContainer = styled.div`
  margin-top: 16px;
  border-top: 1px solid ${({ theme }) => theme.colors.divider};
  padding-top: 16px;
`;

export const AddMediaButton = styled.button`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text.secondary};
  padding: 8px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  cursor: pointer;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.hover.background};
  }
  
  svg {
    font-size: 20px;
    margin-right: 8px;
    color: #45bd62;
  }
`;

export const AddMediaText = styled.span`
  font-size: 15px;
  font-weight: 600;
`; 