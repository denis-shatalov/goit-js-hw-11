export const fetchPhotosByQuery = searchedEl => {
  const searchParams = new URLSearchParams({
    q: searchedEl,
    key: '25786434-348adb767e319176b4ad356ea',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`https://pixabay.com/api/?${searchParams}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  });
};