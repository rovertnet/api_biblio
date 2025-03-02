import { Body } from "@nestjs/common";
import { TodoService } from "./todo.service";



export class TodoController {
  constructor(private readonly todosService: TodoService) {}

  create(@Body() dto) {
    return this.todosService.create(dto)
  }
}