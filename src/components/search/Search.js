import React, { useState, useEffect } from 'react';
import { TextField, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import axios from 'axios';
import ImageResults from '../imageresult/Image';

const Search = () => {
  const [searchText, setSearchText] = useState('');
  const [amount, setAmount] = useState(15);
  const [images, setImages] = useState([]);
  const apiUrl = 'https://pixabay.com/api';
  const apiKey = '46847051-6d7bdc50417f917a00dc753a3'; 

  useEffect(() => {
    if (searchText) {
      const fetchImages = async () => {
        try {
          const response = await axios.get(
            `${apiUrl}/?key=${apiKey}&q=${searchText}&image_type=photo&per_page=${amount}&safesearch=true`
          );
          setImages(response.data.hits);
        } catch (error) {
          console.error("Error fetching images:", error);
        }
      };
      fetchImages();
    } else {
      setImages([]);
    }
  }, [searchText, amount]);

  const handleTextChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  return (
    <div style={{ 
        padding: '10px', 
        display: 'flex',
        justifyContent:'flex-start', 
        flexDirection: 'column', 
        gap: '8px',
        maxWidth: '500px',
        margin: '0 auto'
        
      }}>
        <TextField
          name="searchText"
          value={searchText}
          onChange={handleTextChange}
          label="Search For Images"
          variant="outlined"
          fullWidth
          size="small"
          sx={{ 
            '& .MuiOutlinedInput-root': {
              fontSize: '12px'
            },
            '& .MuiInputLabel-root': {
              fontSize: '12px'
            }
          }}
        />
        <FormControl 
          fullWidth 
          size="small"
        >
          <InputLabel sx={{ fontSize: '14px' }}>Amount</InputLabel>
          <Select
            name="amount"
            value={amount}
            onChange={handleAmountChange}
            label="Amount"
            sx={{ 
              fontSize: '14px',
              minHeight: '40px',
            }}
          >
            <MenuItem value={5} sx={{fontSize:'14px'}}>5</MenuItem>
            <MenuItem value={10} sx={{fontSize:'14px'}}>10</MenuItem>
            <MenuItem value={15} sx={{fontSize:'14px'}}>15</MenuItem>
            <MenuItem value={30} sx={{fontSize:'14px'}}>30</MenuItem>
            <MenuItem value={50} sx={{fontSize:'14px'}}>50</MenuItem>
           
          </Select>
        </FormControl>
        {images.length > 0 && 
          <ImageResults 
            images={images} 
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
              gap: '8px'
            }}
          />
        }
      </div>
  );
};

export default Search;
