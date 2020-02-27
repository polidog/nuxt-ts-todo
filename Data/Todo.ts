export enum State {
  All,
  Done,
  Working
}

export interface TodoInterface {
  readonly id: string
  readonly name: string
  readonly state: State.Working | State.Done
  isActive(): boolean
  equals(id: string): boolean
  done(): void
  reOpen(): void
}

export class Todo implements TodoInterface {
  id: string
  name: string
  state: State.Done | State.Working

  constructor(name: string) {
    this.id = Math.random()
      .toString(64)
      .substring(2)
    this.name = name
    this.state = State.Working
  }

  isActive(): boolean {
    return this.state !== State.Done
  }

  equals(id: string): boolean {
    return this.id == id
  }

  done(): void {
    this.state = State.Done
  }

  reOpen(): void {
    this.state = State.Working
  }
}
