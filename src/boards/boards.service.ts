import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';

@Injectable()
export class BoardsService {
  private boards: Array<Board> = [];

  getAllBoards(): Array<Board> {
    return this.boards;
  }

  createBoard(title: string, description: string) {
    const boardData = {
      id: this.boards.length,
      title,
      description,
      status: BoardStatus.PUBLIC,
    };
    this.boards.push(boardData);
    return this.boards;
  }
}
