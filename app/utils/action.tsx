
export const fetchData = async (endPoint: string) => {
  try {
    const response = await fetch(`https://developer-portfolio-server-1.onrender.com/api${endPoint}`);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}
