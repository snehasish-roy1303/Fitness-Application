export const exerciseOptions = {
  method: 'GET',
  
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': 'aece7bd9b9msh5261a7845c01e94p1e2154jsn5d5c51e6853f'
    
  }
};
  
export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
  
    return data;
  };

export const youtubeOptions = {
    method: 'GET',
    url: 'https://youtube-search-and-download.p.rapidapi.com/video/related',
    headers: {
      'X-RapidAPI-Key': 'aece7bd9b9msh5261a7845c01e94p1e2154jsn5d5c51e6853f',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };