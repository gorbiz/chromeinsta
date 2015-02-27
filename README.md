# WHAT #
[ video here ]

# HOW #
1. Install https://chrome.google.com/webstore/detail/chromi/eeaebnaemaijhbdpnmfbdboenoomadbo (chrome[ium] extension).
2. `npm install -g chromix`
3. `npm install -g git+https://git@github.com/gorbiz/insta.git`
4. `echo -e '\nscreen -S chromix-server -d -m chromix-server' >> ~/.bashrc`

[4] is **OPTIONAL** letting it boot and run in the background until we have a better solution.

## using it ##
1. Make sure chrome is running.
2. ~~`screen -S chromix-server -d -m chromix-server`~~
3. `insta code/someproject/`

*(If you did [4] above you can skip this [2] once our have rebooted).*

And modifications to files under `code/someproject/` will be instantly reflected in the browser.

# more #
Also use https://sublime.wbond.net/packages/auto-save

# future #
 - Eliminate the need for chromix (perhaps bundle it).
 - Eliminated the need to run `insta`... perhaps just `touch .instantfeedback` in the appropriate folder and a forked chrome extension speaks to the deamon... would work well for file:// at least.
 - Rename and perhaps decouple from chrome.
 - Work out: if you run a webserver we need to restart it and **then** reload chrome. This use case seems closer to `forever --watch`.