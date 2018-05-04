class Api::UsersController < ApplicationController
    def retrieve
        @existing_user = User.where(username: params[:username])
        puts @existing_user
        render json: @existing_user
    end 
    def show
        @user = User.find(params[:id])
        render json: @user
    end 
    def create
        @user = User.create! (user_params)
        render json: @user
    end
    def user_params
        params.require(:user).permit(:name, :username, :email, :image, :password, :phone)
    end
end
