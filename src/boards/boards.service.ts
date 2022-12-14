import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
import { CreateBoardDto } from './dto/create-board.dto';

@Injectable()
export class BoardsService {
  private boards: Array<Board> = [];

  getAllBoards(): Array<Board> {
    return this.boards;
  }

  getBoard(id: string): Board {
    return this.boards.find((board) => board.id === +id);
  }

  createBoard(createBoardDto: CreateBoardDto) {
    const { title, description } = createBoardDto;
    const boardData = {
      id: this.boards.length,
      title,
      description,
      status: BoardStatus.PUBLIC,
    };
    this.boards.push(boardData);
    return this.boards;
  }

  editBoardStatus(id: string, status: BoardStatus) {
    const newData = this.boards.map((data) => {
      if (data.id === +id) {
        return { ...data, status };
      }
      return data;
    });
    console.log(newData);
    this.boards = newData;
    return newData;
  }

  deleteBoard(id: string): void {
    const newBoard = this.boards.filter((item) => item.id !== +id);
    this.boards = newBoard;
  }
}
