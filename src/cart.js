 function showCartPopup() {
      const cartPopup = document.getElementById('cartPopup');
      cartPopup.classList.remove('hidden');
    }

    function closeCartPopup() {
      const cartPopup = document.getElementById('cartPopup');
      cartPopup.classList.add('hidden');
    }