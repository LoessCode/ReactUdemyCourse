
export type squareValue = "X" | "O" | "Z"

class GameGrid
{
  cells: squareValue[];

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

  setCell(index: number, value: squareValue)
  {
    if (index > 8)
    {
      throw new Error("Cell index out of range");
    }
    const newGrid = new GameGrid();
    newGrid.cells = [...this.cells];
    newGrid.cells[index] = value;
    return newGrid;
  }

  checkWin(): squareValue
  {
    const getRow = (index: number): squareValue =>
    {
      const v: squareValue = this.cells[index*3];
      for (let i = 0; i < 3; i++)
      {
        if (this.cells[i+index*3] !== v) return "Z"
      }
      return v;
    }

    const getColumn = (index: number) =>
    {
      const v: squareValue = this.cells[index];
      for (let i = 0; i < 3; i++)
      {
        if (this.cells[i*3+index] !== v) return "Z"
      }
      return v;
    }

    for (let i = 0; i < 3; i++)
    {
      if (getRow(i) === "X") return "X";
      if (getRow(i) === "O") return "O";
      if (getColumn(i) === "X") return "X";
      if (getColumn(i) === "O") return "O";
    }
    let v: squareValue = this.cells[0];
    let result: squareValue = v;
    if (this.cells[4] !== v) result = "Z";
    if (this.cells[8] !== v) result = "Z";

    if (result !== "Z") return result;

    v = this.cells[2];
    result = v;
    if (this.cells[4] !== v) result = "Z";
    if (this.cells[6] !== v) result = "Z";

    return result;
  }

}

export {GameGrid};

