document.addEventListener('DOMContentLoaded', function() {
    const songInput = document.getElementById('songInput');
    const recommendButton = document.getElementById('recommendButton');
    const recommendationsDiv = document.getElementById('recommendations');
    
    recommendButton.addEventListener('click', function() {
      const songName = songInput.value.trim();
      if (songName === '') {
        alert('Please enter a song name.');
        return;
      }
      
      recommendationsDiv.innerHTML = '<p>Loading...</p>';
      
      // Mock recommendations (replace with actual API call)
      setTimeout(function() {
        const recommendations = ['Song 1', 'Song 2', 'Song 3'];
        displayRecommendations(recommendations);
      }, 1000); // Simulate loading delay
    });
    
    function displayRecommendations(recommendations) {
      recommendationsDiv.innerHTML = '';
      recommendations.forEach(function(song, index) {
        const p = document.createElement('p');
        p.textContent = `${index + 1}. ${song}`;
        recommendationsDiv.appendChild(p);
      });
    }
  });
  