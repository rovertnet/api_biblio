import { InjectRepository } from "@nestjs/typeorm";
import { Todo } from "./todo.entity";
import { Repository } from "typeorm";
import { Injectable } from "@nestjs/common";

@Injectable()
export class TodoService {
  constructor(@InjectRepository(Todo) private readonly TodoRepository: Repository<Todo>,){}

  create(dto: {titre: string}){
    const todo = this.TodoRepository.create({titre: ""})
  }
}