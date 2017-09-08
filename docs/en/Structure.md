# Project Structure
```text
.
├── build                   # Webpack build configuration directroy
│   ├── config              # development and production mode config
│   │   ├── index.js
│   ├── tpl                 # html template
│   │   └── index.html
│   └── ...
├── src
│   ├── api                 # Backend APIs
│   │   ├── http.ts
│   │   ├── index.ts
│   │   └── modules         # API modules
│   │       └── ...
│   ├── assets              # module assets (processed by webpack)
│   │   └── svg             # svg icons source file
│   │       └── ...
│   ├── components          # components
│   │   ├── base.ts         # components base. Every component inherits it 
│   │   ├── icons           # Produced vue svg icons
│   │   ├── pages           # Page level components
│   │   ├── tags            # Global components (or customized tags)
│   │   └── views           # view components
│   ├── env                 # environment config
│   ├── main.ts             # entry file
│   ├── router              # router
│   ├── store               # vuex store
│   │   ├── modules         # vuex modules
│   │   └── utils           # vuex utils 
│   └── style               # styles
├── static                  # pure static assets (directly copied)
├── tools                   # Tool, such as cli tools
└── typings                 # Type definitions
│   ├── globals.d.ts        # global types
│   └── interface           # interface
├── tsconfig.json           # typescript config
├── tslint.json             # tslint config
├── .editorconfig           # editor config
├── .npmrc                  # npm config
├── .postcssrc.js           # postcss config
├── .stylelintrc.js         # stylint config
```