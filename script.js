<script>
  const hamburger = document.querySelector('.hamburger-menu');
  const menu = document.querySelector('.menu-links');

  hamburger.addEventListener('click', () => {
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
  });
</script>