import axios from "axios";

export const fetchProductCategories = async () => {
    try {
      const response = await axios.get('https://product-sourcing-backend-mv2qe9lfn-rubayetseasons-projects.vercel.app/api/v1/product-categories');
      return response.data
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };