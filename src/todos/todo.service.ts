import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from './todo.entity';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { todo } from "node:test";
import { CreateTodo } from './dtos/create-todos.dto';

@Injectable()
export class TodoService {
  constructor(@InjectRepository(Todo) private readonly TodoRepository: Repository<Todo>,){}

  async create(dto: CreateTodo){
    const todo = this.TodoRepository.create(dto);
    return await this.TodoRepository.save(todo)
  }
}