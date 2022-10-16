import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  @Get('/')
  getAllBoard(): Array<Board> {
    return this.boardsService.getAllBoards();
  }

  @Post('/')
  createBoard(@Body() dto: CreateBoardDto): Array<Board> {
    return this.boardsService.createBoard(dto);
  }

  @Get('/:id')
  getBoard(@Param('id') id: string): Board {
    return this.boardsService.getBoard(id);
  }

  @Patch('/:id')
  editBoardStatus(
    @Param('id') id: string,
    @Body('status') status: BoardStatus,
  ): Array<Board> {
    return this.boardsService.editBoardStatus(id, status);
  }
  @Delete('/:id')
  deleteBoard(@Param('id') id: string): void {
    return this.boardsService.deleteBoard(id);
  }
}
