function getResponseFromAPI() {
  new Promise((resolveOuter) => {
    resolveOuter(
        new Promise((resolveInner) => {
        setTimeout(resolveInner, 1000);
        }),
    );
  });
}