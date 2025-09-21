document.addEventListener("DOMContentLoaded", () => {

  // Favorites Functionality
  const favorites = [];
  const favoriteList = document.getElementById('favorite-list');

  document.querySelectorAll('.favorite-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const place = btn.closest('.card').dataset.place;
      if (!favorites.includes(place)) {
        favorites.push(place);
        updateFavoriteList();
        alert(place + " added to favorites!");
      } else {
        alert(place + " is already in favorites!");
      }
    });
  });

  function updateFavoriteList() {
    favoriteList.innerHTML = "";
    if (favorites.length === 0) {
      favoriteList.innerHTML = "<li>No favorites yet.</li>";
    } else {
      favorites.forEach(place => {
        const li = document.createElement('li');
        li.textContent = place;
        favoriteList.appendChild(li);
      });
    }
  }

  // Live Star Rating
  const ratings = {};
  document.querySelectorAll('.rating').forEach(starDiv => {
    const place = starDiv.dataset.place;
    ratings[place] = 0;
    renderStars(starDiv, place);

    starDiv.addEventListener('click', (e) => {
      const rect = starDiv.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const newRating = Math.ceil((x / rect.width) * 5);
      ratings[place] = newRating;
      renderStars(starDiv, place);
    });
  });

  function renderStars(starDiv, place) {
    starDiv.textContent = "⭐".repeat(ratings[place]) + "☆".repeat(5 - ratings[place]);
  }

  // Food Data
  const foodData = {
    "Paris": ["Croissant", "Baguette", "Escargot", "Crepe"],
    "Bali": ["Nasi Goreng", "Satay", "Babi Guling", "Mie Goreng"],
    "New York": ["Bagel", "Pizza", "Cheesecake", "Hot Dog"]
  };

  const info = document.getElementById('destination-info');
  const foodList = document.getElementById('food-list');

  // Show Food on button click
  document.querySelectorAll('.food-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const place = btn.closest('.card').dataset.place;
      info.textContent = `${place} Famous Foods:`;
      foodList.innerHTML = "";
      foodData[place].forEach(food => {
        const li = document.createElement('li');
        li.textContent = food;
        foodList.appendChild(li);
      });
    });
  });

});
