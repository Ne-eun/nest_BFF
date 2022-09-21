import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('dogs')
export class DogsController {
  @Get()
  findAll(@Req() request: Request): string {
    return 'Wellcome to dogs';
  }
}
