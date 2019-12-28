class TagsController < ApplicationController
    def new
    end

    def index
        all_tags = Tag.all
        render json: all_tags
    end
    
    def create
        tag = Tag.create(tag_params)
        render json: tag
    end

    def tag_params
        params.permit(:name)
    end
end
