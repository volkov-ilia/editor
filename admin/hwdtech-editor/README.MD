# Library for Editor

## Add and resolve React.Component

1) Write component code in components/nestedComponents/<your_component_folder>/your_component.tsx
2) [Optional] Add dependency in const components in components/index.ts

## Example:
```javascript
export const components = {
    "My.Dependency.Name": () => MyDependency
}

const dependency = IoC.resolve<React.FC<any>>("IoC.Resolve", "My.Dependency.Name");
// dependency = MyDependency

```

```javascript
export const components = {
    "Sum": (a: number, b: number) => a + b
}

const dependency = IoC.resolve("IoC.Resolve", "Sum", 2, 3);
// dependency = 5

```

## Rules:
1) You must register IResolveDependencyStrategy in components
```javascript
type IResolveDependencyStrategy = (...args: any[]) => any
```
IResolveDependencyStrategy must return finished object

## Add handler
1) Write handler code in components/Handlers/[componentHandlers | utilsHandlers]/<your_handler.tsx>
2) [Optional] Register your handler in components/Handlers/index.ts

## Rules and examples
Check block Add and resolve React.Component