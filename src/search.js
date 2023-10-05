  function openSearchPopup() {
      const searchPopup = document.getElementById('searchPopup');
      searchPopup.classList.remove('hidden');
      // 
    }

    function closeSearchPopup() {
      const searchPopup = document.getElementById('searchPopup');
      searchPopup.classList.add('animate__animated', 'animate__fadeOut');
      setTimeout(() => {
        searchPopup.classList.add('hidden');
        searchPopup.classList.remove('animate__animated', 'animate__fadeOut');
      }, 500);
    }