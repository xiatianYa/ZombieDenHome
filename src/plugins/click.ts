// particleEffect.ts
export const setupParticleEffect = () => {
  const createParticle = (x: number, y: number) => {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    const size = Math.floor(Math.random() * 20 + 5);
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.background = `hsl(${Math.random() * 90 + 180}, 70%, 60%)`;
    const destinationX = x + (Math.random() - 0.5) * 2 * 75;
    const destinationY = y + (Math.random() - 0.5) * 2 * 75;
    const animation = particle.animate(
      [
        {
          transform: `translate(${x - size / 2}px, ${y - size / 2}px)`,
          opacity: 1
        },
        {
          transform: `translate(${destinationX}px, ${destinationY}px)`,
          opacity: 0
        }
      ],
      {
        duration: 500 + Math.random() * 1000,
        easing: 'cubic-bezier(0, .9, .57, 1)',
        delay: Math.random() * 200
      }
    );
    if (animation) {
      animation.onfinish = () => {
        particle.remove();
      };
    }
    document.body.appendChild(particle);
  };

  const pop = (e: MouseEvent) => {
    for (let i = 0; i < 30; i += 1) {
      createParticle(e.clientX, e.clientY);
    }
  };

  // 将点击事件监听器绑定到 body 元素上
  document.body.addEventListener('click', pop);
};
