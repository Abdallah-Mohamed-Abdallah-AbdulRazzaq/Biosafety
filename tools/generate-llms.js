// ...existing code...
// noop file to avoid MODULE_NOT_FOUND during build/deploy
module.exports = async function generateLLMs() {
  // Intentionally empty for environments where generation is not needed.
  return;
};