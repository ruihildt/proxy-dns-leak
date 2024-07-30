(async () => {
  browser.proxy.onRequest.addListener(
    () => {
      return {
        type: 'socks',
        host: '127.0.0.1',
        port: 9150,
        proxyDNS: true,
      };
    },
    { urls: ['*://*/*'] },
  );
})();
