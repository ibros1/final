 function showInboxPopup(){
      const cartPopup = document.getElementById('inboxPopup');
      cartPopup.classList.remove('hidden');
    }

    function closeInboxPopup() {
      const cartPopup = document.getElementById('inboxPopup');
      cartPopup.classList.add('hidden');
    }