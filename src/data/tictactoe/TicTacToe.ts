
export type squareValue = "X" | "O" | "Z"

export class Grid
{
  private cells: squareValue[];

  constructor()
  {
    this.cells = Array<squareValue>(9).fill("Z");
  }

  getCell(index: number): squareValue
  {
    if (index > 8)
    {
      throw new Error("Cell index out of range");
    }
    return this.cells[index];
  }

  setCell(index: number, value: squareValue): void
  {
    if (index > 8)
    {
      throw new Error("Cell index out of range");
    }
    this.cells[index] = value;
  }

  checkWin(): boolean
  {
    //TODO
    return false;
  }
}