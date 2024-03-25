import { run, Workflow } from '@stepci/runner'

export function stepCIRun(data: Workflow) {
  console.log(JSON.stringify(data));

  return run(data)
}
