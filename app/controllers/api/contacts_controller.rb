class Api::ContactsController < ApplicationController
    def create
        @contact = Contact.create!(contact_params)
        render json: @contact
    end   
    def index
        @user = User.find(params[:user_id])
        @contacts = @user.contacts
        render json: @contacts
    end 
    def update
        @contact = Contact.find(params[:id])
        @contact.update!(contact_params)
        render json: @contact
    end
    def destroy
        @contact = Contact.find(params[:id]).delete
        render status: :ok
    end
    def contact_params
        params.require(:contact).permit(:user_id, :name, :username, :image, :relation, :instagram, :twitter, :facebook, :email, :phone, :street, :city, :zip)
    end
end
