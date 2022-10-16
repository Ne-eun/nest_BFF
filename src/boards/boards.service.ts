import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
import { CreateBoardDto } from './dto/create-board.dto';

@Injectable()
export class BoardsService {
  private boards: Array<Board> = [];

  getAllBoards(): Array<Board> {
    return this.boards;
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
}
