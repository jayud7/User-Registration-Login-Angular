These are the steps to get a json file to serve as db.
  -Create a folder and open vscode in it.
  - npm init
  - npm i json-server
  - create a file in the project structure (db.json)
  - add {
      "user":[]
        }
  - json-server --watch db.json
