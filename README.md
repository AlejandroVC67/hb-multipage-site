# hb-multipage-site
This exercise will help you to have a better understanding of the correct structure of a web project.

Rules
In this exercise you should separate the user interface from any kind of business logic. For this you can use separate modules that are connected using dependencies (import and export).

Take into consideration the following global rules for all components / features:

A separate branch should be created each time a new component or feature is implemented, and should only be merged into master using a Pull Request. Please add the Bootcamp Director to your repository so those PRs can be reviewed and merged. Branches should NOT be merged by the developer.
Each component should have it's one folder.
Each component should use the pug-loader to read the template and generate HTML.
Each component should be implemented using the mobile first approach.
Each component should be responsive using the following viewports:
Small: 320px - 639px
Medium: 640px - 1023
Large: 1024px - ∞