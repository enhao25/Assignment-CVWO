class TasksController < ApplicationController
    def new
    end

    def index
        all_task = Task.all
        render json: all_task
    end
    
    def create
        task = Task.create(task_params)
        render json: task
    end

    def destroy
        Task.destroy(params[:id])
        head :ok
    end

    def update
        task = Task.find(params[:id])
        task.update(task_params)
        render json: task
      end

    private 

    def task_params
        params.permit(:description, :active, :Tags_id)
    end

end
