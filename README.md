# WHAT #
[ video here ]

# HOW #
1. Install https://chrome.google.com/webstore/detail/chromi/eeaebnaemaijhbdpnmfbdboenoomadbo (chrome[ium] extension).
2. `sudo npm install -g chromix`
3. `sudo npm install -g git+https://git@github.com/gorbiz/chromeinsta.git`
4. `echo -e '\nscreen -S chromix-server -d -m chromix-server' >> ~/.bashrc` **OPTIONAL** letting it boot and run in the background until we have a better solution.

**Using it**
1. Make sure chrome is running.
2. `screen -S chromix-server -d -m chromix-server` *If you did #4 above you can skip this once our have rebooted*
3. `chromeinsta code/someproject/`
And modifications to files under `code/someproject/` will be instantly reflected in the browser.

# MORE #
Also use https://sublime.wbond.net/packages/auto-save

# future #
Eliminate the need for chromix (perhaps bundle it).