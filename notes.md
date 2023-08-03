* intricacies of having to setup the system (ssh, git push, remote, vs code, github deploy keys, ...)  
* upon creating a repo, when changes happened both rmotely and locally , independently, pull might fail with error message fatal: Not possible to fast-forward, aborting. a solution is:  `git rebase origin/main`  
* idees secu: les leak API keys dans le code, comment securiser cela, comment aussi le detecter ? comment exploiter le leak a partir de git log history ?  
* explorer lutilisation du .env  
