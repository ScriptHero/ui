# ui
UI Component Library and building blocks for [ScriptHero](https://www.scripthero.com) using Vue3, Vite, and [vanilla-extract](https://github.com/seek-oss/vanilla-extract).  We also use Storybook as a development and review tool via Chromatic.


## Proposed Goals

### 1. Match the UX Team's Component Library

The component library should translate 1:1 as much as possible to the component library the ScriptHero UX team maintains, colors, names, spacing, borders, etc.

### 2. Provide a base where extensions can be made

Lower level building blocks can provide flexibility to build additional feature-specific components

### 3. Excellent Developer Experience

We should strive to optimize this library for developer happyness with first-class tooling, easy-to-understand component interfaces, and well-documented. 


## How to use

1. Configure project npm/yarn to have access to github's private npm registry (@TODO)

2. Add to your project's `package.json`
```
"@scripthero/ui": "^1.0.0"
```



## Development / Contributing
1. Clone the repo
```shell
  git checkout git@github.com:ScriptHero/ui.git
  cd ui
```

2. Install dependencies
```shell
  yarn install
```

3. Running Storybook
```shell
  yarn run storybook
```

This should run storybook dev server (which has hot reloading) and is accessible at [http://localhost:6006](http://localhost:6006) 

## Deploying
[Storybook-deployer](https://github.com/storybookjs/storybook-deployer) will automatically publish any changes to [scripthero.github.io/ui/](scripthero.github.io/ui/) when anything is merged into master.

2. You can also run [storybook-deployer](https://github.com/storybookjs/storybook-deployer) from the command line
```shell
  yarn run deploy-storybook
```

## Staging Changes for UX review
1. We use [chromatic](https://www.chromatic.com) to collaborate with UX, sign up with your github account [here](https://www.chromatic.com/start?startWithSignup=true) (be sure to grant access to ScriptHero)

2. A new chromatic build will be automatically created everytime you push to your branch, and all PRs will be linked in the PR tab
