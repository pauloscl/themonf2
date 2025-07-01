// Inicialização do AOS
AOS.init();

// Alternar modo escuro/claro
function toggleMode() {
  document.body.classList.toggle("dark-mode");

  const icon = document.getElementById("mode-icon");
  const isDark = document.body.classList.contains("dark-mode");

  icon.textContent = isDark ? "☀️" : "🌙";
}
