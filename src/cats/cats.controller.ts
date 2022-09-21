import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('hello/cats')
export class CatsController {
  @Get()
  findAll(@Req() request: Request): string {
    return 'This action returns all cats';
  }
}
