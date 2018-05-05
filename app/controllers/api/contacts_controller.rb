class Api::ContactsController < ApplicationController
    def index
        @user = User.find(params[:user_id])
        @contacts = @user.contacts
        render json: @contacts
    end
    def create
        @contact = Contact.create!(contact_params)
        render json: @contact
    end    
    def contact_params
        params.require(:contact).permit(:user_id, :name, :username, :image, :relation, :instagram, :twitter, :facebook, :email, :phone, :street, :city, :zip)
    end
end
