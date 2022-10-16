import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Board } from './board.model';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  @Get('/')
  getAllBoard() {
    return this.boardsService.getAllBoards();
  }

  @Get('/:id')
  getBoard(@Param('id') id: string) {
    return this.boardsService.getBoard(id);
  }

  @Post('/')
  createBoard(@Body() dto: CreateBoardDto): Array<Board> {
    return this.boardsService.createBoard(dto);
  }
}
