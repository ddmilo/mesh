class Api::UsersController < ApplicationController
    def retrieve
        @existing_user = User.where(username: params[:username])
        puts @existing_user
        render json: @existing_user
    end   
end
