class Api::ContactsController < ApplicationController
    def index
        @user = User.find(params[:user_id])
        @contacts = @user.contacts
        render json: @contacts
    end
    def create
        @contact = Contact.new(contact_params)
        if @contact.save
          render json: @contact
        else
          render json: @contact.errors, status: :unprocessable_entity
        end
    end    
    def contact_params
        params.require(:contact).permit(:user_id, :username, :image, :relation, :instagram, :twitter, :facebook, :email, :phone, :street, :city, :zip)
    end
end
