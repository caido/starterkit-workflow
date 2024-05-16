<div align="center">
  <img width="1000" alt="image" src="https://user-images.githubusercontent.com/6225588/211916659-567751d1-0225-402b-9141-4145c18b0834.png">

  <br />
  <br />
  <a href="https://caido.io/">Website</a>
  <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
  <a href="https://dashboard.caido.io/">Dashboard</a>
  <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
  <a href="https://docs.caido.io/" target="_blank">Docs</a>
  <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
  <a href="https://links.caido.io/roadmap">Roadmap</a>
  <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
  <a href="https://github.com/caido/caido/tree/main/brand">Branding</a>
  <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
  <a href="https://links.caido.io/www-discord" target="_blank">Discord</a>
  <br />
  <hr />
</div>

# 🔰 StarterKit Workflow

This is the starter kit for a Caido workflow JS script.

Check out our documentation on [workflows](https://docs.caido.io/concepts/workflows.html).

You don't need to use this to use workflows, this is really only to help you with more complex JS node scripts.

## 🏎️ Usage

1. `npm i`
1. Make some modifications in `src`
1. `npm run build`
1. Copy the content of `script.js` in `dist` into the Caido JS node.
1. (Optional) Use the generated `workflow.json` in `dist`

## 💡 Workflow Template

If you have a stable workflow, you can `Download` it from Caido and use it as a template.
The build process will inject the script where you put the tag `[REPLACE_SCRIPT]`.
You can take inspiration from `workflow.template.json`
