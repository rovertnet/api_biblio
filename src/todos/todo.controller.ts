import { Body, Controller, Post } from '@nestjs/common';
import { TodoService } from "./todo.service";
import { CreateTodo } from "./dtos/create-todos.dto";


@Controller('todos')
export class TodoController {
  constructor(private readonly todosService: TodoService) {}

  @Post()
  create(@Body() dto: CreateTodo) {
    return this.todosService.create(dto)
  }
}