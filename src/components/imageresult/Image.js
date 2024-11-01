import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { 
  ImageList, 
  ImageListItem, 
  ImageListItemBar, 
  IconButton, 
  Dialog, 
  Button,
  useTheme,
  useMediaQuery
} from '@mui/material';
import ZoomInIcon from '@mui/icons-material/ZoomIn';

const ImageResults = ({ images }) => {
  const [open, setOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState('');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleOpen = (img) => {
    setOpen(true);
    setCurrentImg(img);
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentImg('');
  };

  return (
    <div>
      {images && (
        <ImageList 
          cols={isMobile ? 2 : 3} 
          gap={8}
          sx={{
            mb: 2,
            overflow: 'hidden'
          }}
        >
          {images.map((img) => (
            <ImageListItem 
              key={img.id} 
              sx={{ 
                transition: 'transform 0.15s ease-in-out',
                '&:hover': { 
                  transform: 'scale(1.02)',
                  '& .MuiImageListItemBar-root': {
                    opacity: 1
                  }
                },
                borderRadius: '4px',
                overflow: 'hidden'
              }}
            >
              <img 
                src={img.largeImageURL} 
                alt={img.tags} 
                loading="lazy" 
                style={{ 
                  borderRadius: '4px',
                  objectFit: 'cover',
                  height: '100%',
                  width: '100%'
                }} 
              />
              <ImageListItemBar
                title={img.tags}
                subtitle={`by ${img.user}`}
                sx={{
                  opacity: 0,
                  transition: 'opacity 0.2s',
                  background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                  '.MuiImageListItemBar-title': {
                    fontSize: '14px',
                    fontWeight: 500
                  },
                  '.MuiImageListItemBar-subtitle': {
                    fontSize: '12px'
                  }
                }}
                actionIcon={
                  <IconButton
                    onClick={() => handleOpen(img.largeImageURL)}
                    sx={{ 
                      color: 'white',
                      '&:hover': { 
                        color: '#fff',
                        transform: 'scale(1.1)'
                      },
                      transition: 'transform 0.2s',
                      padding: '4px',
                      marginRight: '4px'
                    }}
                  >
                    <ZoomInIcon sx={{ fontSize: '20px' }} />
                  </IconButton>
                }
              />
            </ImageListItem>
          ))}
        </ImageList>
      )}
      <Dialog 
        open={open} 
        onClose={handleClose} 
        fullWidth 
        maxWidth="md"
        PaperProps={{
          sx: {
            borderRadius: '8px',
            bgcolor: 'background.paper'
          }
        }}
      >
        <div style={{ 
          padding: '12px', 
          textAlign: 'center',
          backgroundColor: '#fff'
        }}>
          <img 
            src={currentImg} 
            alt="" 
            style={{ 
              width: '100%', 
              borderRadius: '4px',
              maxHeight: '80vh',
              objectFit: 'contain'
            }} 
          />
          <Button 
  onClick={handleClose} 
  color="primary" 
  variant="contained" 
  sx={{ 
    mt: 1.5,
    fontSize: '14px',
    padding: '6px 16px',
  }}
>
  Close
</Button>
        </div>
      </Dialog>
    </div>
  );
};

ImageResults.propTypes = {
  images: PropTypes.array.isRequired,
};

export default ImageResults;