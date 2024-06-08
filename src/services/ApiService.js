class ApiService {
  static async getData(url) {
    try {
      const response = await fetch(url);
      return await response.json();
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
}

export default ApiService;
