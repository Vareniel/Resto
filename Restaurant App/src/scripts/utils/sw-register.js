const swRegister = async () => {
  // eslint-disable-next-line no-undef
  if (!("serviceWorker" in navigator)) {
    // eslint-disable-next-line no-undef
    console.log("Service Worker not supported in the browser");
    return;
  }

  try {
    // eslint-disable-next-line no-undef
    await navigator.serviceWorker.register("./sw.bundle.js");
    // eslint-disable-next-line no-undef
    console.log("Service worker registered");
  } catch (error) {
    // eslint-disable-next-line no-undef
    console.log("Failed to register service worker", error);
  }
};

export default swRegister;
