// Simple JavaScript to add a glowing effect

const agentImage = document.querySelector('.agent-showcase img');

agentImage.addEventListener('mouseover', () => {
  agentImage.style.animationPlayState = 'running';
});

agentImage.addEventListener('mouseout', () => {
  agentImage.style.animationPlayState = 'paused';
});
