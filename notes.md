* intricacies of having to setup the system (ssh, git push, remote, vs code, github deploy keys, ...)  
* upon creating a repo, when changes happened both rmotely and locally , independently, pull might fail with error message fatal: Not possible to fast-forward, aborting. a solution is:  `git rebase origin/main`  
* idees secu: les leak API keys dans le code, comment securiser cela, comment aussi le detecter ? comment exploiter le leak a partir de git log history ?  
  * exploitation simple du leak: git log --oneline; repeer le bon commit; git show #commit   
* explorer lutilisation du .env  
* gitguardian  
* pour les ops: migre du pip freeze au venv , apres avoir vu la taille enorme (mais surtout les conflits) non necessaire du pip install (faire expres dinclure des librairies lourdes et non necessaires)  
  * A noter: pour prendre en compte les pkgs du pip dans le userspace, ajuster le path de linterpreteur python dans vscode  
* idee secu: passer en https  

## Plan (draft)  
* teacher: create the public repo with a minimal working codebase and deliberated issues embedded    
  * listed bugs: 
    1. some old API key still present in the commit history (issue assigned to sec team)  
    2. provide the best possible way to manage the api key, for e.g. with .env (sec team)  
    2. conflicts and oversizing while insalling python dependencies locally (issue assigned to ops team)  
    3. README.md to document for initial setup (ops team)  
* students: each team lead to fork the teacher's repo and then clone it locally on the VM dedicated to the team  
