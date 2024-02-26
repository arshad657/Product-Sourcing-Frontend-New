import axios from "axios";

export const fetchProductCategories = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/v1/product-categories');
      return response.data
    //   const transformedData = response.data.map(item => {
    //     const { _id, ...rest } = item; 
    //     return { id: _id, ...rest }; 
    //   });
      
    //   console.log(transformedData);
    //   setProducts(transformedData); 
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };