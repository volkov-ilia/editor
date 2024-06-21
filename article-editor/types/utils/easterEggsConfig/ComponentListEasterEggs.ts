export type ComponentListEasterEggs = {
  FCWithEasterEggs: string[]
  nestedFC?: string[]
  listsWithEasterEggs?: NestedComponentListEasterEggs[]
  mapWithEasterEggs?: NestedComponentListEasterEggs[]
}

export type NestedComponentListEasterEggs = Omit<ComponentListEasterEggs, "FCWithEasterEggs"> & {
  key: string
  FCWithEasterEggs?: string[]
}

export type ComponentListEasterEggsCommon = ComponentListEasterEggs | NestedComponentListEasterEggs
