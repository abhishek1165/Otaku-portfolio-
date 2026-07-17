// Called after loading screen exits — can be used to trigger entrance animations
export function initialFX() {
  // Add entrance animation class to main content
  document.body.classList.add("content-visible");
}
