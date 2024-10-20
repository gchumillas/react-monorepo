React monorepo project created with [NX](https://nx.dev/getting-started/tutorials/react-monorepo-tutorial).

```
my-app/apps/
    my-app/     # Main app
    my-app-e2e/ # Cypress!
libs/
    ui/         # Shared components
```

**Useful NX commands:**

```bash
# run a specific project target
# Examples:
#     nx run my-app:serve
#     nx run ui:storybook
nx run <project>:<target>

# show the list of projects
nx show projects

# show the list of project targets
nx show project <project-name>
```

More commands in [NX commands](https://nx.dev/reference/nx-commands).
