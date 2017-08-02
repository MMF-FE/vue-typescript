# Commands
```bash
# Start Dev
npm run dev

# Build developing environment
npm run build:dev

# Build sit environment
npm run build:sit

# Build deploy environment
npm run deploy

# Generate svg icons
npm run svg

```

## Add compoents by just one command
Use the script in **./tools/cli.js** to add components. Components templates are under tools/tpl. You can change based on your needs.

```text
Options：
  --version, -v  show version                   [boolean]
  --help, -h     show help manual               [boolean]
  --type, -t     The component type
  --root, -r     The component root path        [default: "src/components"]
```
Default path is **src/components**
```bash
# Add a component, 
./tools/cli add [componentPath] -t [componentType]

# use npm script
npm run cli add [componentPath] -- -t [componentType]

# use yarn
yarn cli add [componentPath] -- -t [componentType]
```
### -t
**-t** is used for marking the type of the component. You can add different components by using different -t parameters. Default type is based on the name of folders under componentPath. For example:

```
# component type: view
yarn cli add views/home

# component type: tag
yarn cli add tags/hello

# component type: tag
yarn cli add views/home/list -- -t tag
```

### -r
**-r** the parameter following is for setting the root path. If the components that you want to make is not under **src/components**, you can set the parameter to set the component's path.

```bash
yarn cli add tags/hello -- -r demo/components
```
the command above creates a tag component under demo/components/tags/hello