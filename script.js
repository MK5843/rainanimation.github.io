function createRaindrop() {
    const raindrop = document.createElement('div');
    raindrop.classList.add('raindrop');
    raindrop.style.left = `${Math.random() * 100}%`;
    raindrop.style.animationDuration = `${Math.random() * 2 + 1}s`;
    return raindrop;
  }
  
  function startRain() {
    const rainContainer = document.getElementById('rain-container');
    const numDrops = Math.floor(window.innerWidth / 10);
    
    for (let i = 0; i < numDrops; i++) {
      const raindrop = createRaindrop();
      rainContainer.appendChild(raindrop);
    }
  }
  
  startRain();
  