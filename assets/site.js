// Simple client-side filtering for publications
(function(){
  const input = document.querySelector('[data-pub-search]');
  const pubs = Array.from(document.querySelectorAll('[data-pub-item]'));
  if(!input || pubs.length === 0) return;

  function norm(s){ return (s||"").toLowerCase(); }
  input.addEventListener('input', () => {
    const q = norm(input.value);
    pubs.forEach(el => {
      const hay = norm(el.getAttribute('data-pub-haystack'));
      el.style.display = hay.includes(q) ? '' : 'none';
    });
  });
})();
