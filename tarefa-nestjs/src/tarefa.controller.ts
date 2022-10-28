import { Body, Controller, Get, Put, } from "@nestjs/common";
import { Delete, Param } from "@nestjs/common/decorators";
import { TarefaService } from './tarefa.service';
import {Tarefa} from './tarefa.entity';

@Controller()
export class TarefaController {
    
    constructor(
        private tarefaService: TarefaService
    ) {}
    
    @Get('/tarefa') 
    async listaTarefa() : Promise<Tarefa[]> {
        return await this.tarefaService.findAll();
    }


    @Get('/tarefa/:codigo')
    async buscarPorId(@Param () parametro) {
        console.log(parametro.codigo);

        return await this.tarefaService.findById(parametro.codigo);
    }

    @Delete('/tarefa/:codigo')
    async excluirTarefa(@Param() parametro) {
        await this.tarefaService.excluir(parametro.codigo);
        return "ok";
    }

    @Put('/tarefa')
    async salvarTarefa(@Body() tarefa) {
        await this.tarefaService.salvar(tarefa);
        return 'Salvo';
    }
}