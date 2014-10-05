class ContactsController < ApplicationController
  def new
    @contact = Contact.new
  end

  def create
    @contact = Contact.new(params[:contact])
    @contact.request = request
    if @contact.deliver
      flash.now[:notice] = 'Obrigado por entrar em contato'
    else
      flash.now[:error] = 'Erro'
    end
    render :new
  end
end