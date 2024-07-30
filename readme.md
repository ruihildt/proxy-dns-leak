# DNS leak test

This is a simple extension to test if your DNS is leaking when using `proxy.onRequest` in Firefox.

## Usage

- Download Tor Browser: https://www.torproject.org/download/
- Launch Tor Browser
- Press connect, this will open a socks proxy on 127.0.0.1:9150
- Go to [the dns-leak-test.zip page](https://github.com/ruihildt/proxy-dns-leak/blob/main/dns-leak-test.zip) and click on the `Download raw file` button
- Launch Firefox and go to `about:debugging`
- Click on `This Firefox`
- Click on `Load Temporary Add-on...` and select `dns-leak-test.zip`
- Go to `https://browserleaks.com/dns` and check the results
