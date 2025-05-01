import fs from "node:fs";
import path from "node:path";

(async () => {
  const componentsDirPath = path.join("src", "components");
  let componentName = "";

  // Get the args from the command line
  process.argv.forEach((val, index) => {
    if (index === 2) {
      componentName = val;
    }
  });

  const componentBlueprint = `
---
interface Props {}
const {} = Astro.props;
---
`.trim();

  const componentConfigBlueprint = `
# Metadata about this component, to be used in the CMS
spec:
  structures:
    - content_blocks
  label: ${componentName}
  description: 
  icon: 'space_dashboard'
  tags: []

# Defines the structure of this component, as well as the default values
blueprint:

# Overrides any fields in the blueprint when viewing this component in the component browser
preview:

# Any extra CloudCannon inputs configuration to apply to the blueprint
_inputs:
`.trim();

  // Get the paths
  const componentDirPath = path.join(componentsDirPath, componentName);
  const componentPath = path.join(componentDirPath, `${componentName}.astro`);
  const componentConfigPath = path.join(
    componentDirPath,
    `${componentName}.bookshop.yml`
  );

  // Make the dir
  try {
    await fs.promises.mkdir(componentDirPath);
    console.log(`Component directory ${componentDirPath} created succesfully`);
  } catch (err) {
    console.log(err);
  }

  // Write the .astro file
  try {
    await fs.promises.writeFile(componentPath, componentBlueprint);
    console.log(`Component ${componentPath} created succesfully`);
  } catch (err) {
    console.log(err);
  }

  // Write the .bookshop.yml file
  try {
    await fs.promises.writeFile(componentConfigPath, componentConfigBlueprint);
    console.log(
      `Component configuration ${componentConfigPath} created succesfully`
    );
  } catch (err) {
    console.log(err);
  }
})();
